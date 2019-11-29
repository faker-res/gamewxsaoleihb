/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBFAHBPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_HBUI;
		private _type: number;	//红包类型
		private _baoNum: number;//红包数
		private _leiDian: Array<number> = [];//雷点数
		private _money: number;//红包金额
		private _mapinfo: WxSaoLeiHBMapInfo;
		private _moneyMin: number;
		private _moneyMax: number;
		private _wxSaoLeiMgr: WxSaoLeiHBMgr;
		private _mainPlayer: PlayerData;
		private _mapLv: number;
		private _mainUnit: Unit;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._isNeedDuang = false;
			this._defaultSoundPath = Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.btn;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "saolei.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_HBUI');
			this.addChild(this._viewUI);
			if (this._viewUI) {
				this._viewUI.box.scaleX = 1.77;
				this._viewUI.box.scaleY = 1.77;
			}
			if (this._game.isFullScreen) {
				let diff = 56
				//有刘海
				this._viewUI.box_up.height = 99 + diff;
				this._viewUI.box_main.top = -1 + diff;
			} else {
				this._viewUI.box_up.height = 99;
				this._viewUI.box_main.top = -1;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.box_tab_1.on(LEvent.CLICK, this, this.selectHandler, [0]);
			this._viewUI.box_tab_2.on(LEvent.CLICK, this, this.selectHandler, [1]);
			this._viewUI.btn_random.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_send.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBack);
			this._viewUI.btn_danL_num1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_danL_num2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_duoL_num1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.txtInput.on(LEvent.BLUR, this, this.updateTxtInput);
			this._viewUI.txtInput.on(LEvent.FOCUS, this, this.onFoucs);
			let story: WxSaoLeiHBStory = this._game.sceneObjectMgr.story;
			this._wxSaoLeiMgr = story.wxSaoLeiHBMgr;
			this._mainUnit = this._game.sceneObjectMgr.mainUnit;
			this.selectHandler(0);
			// this._viewUI.tab_hb.selectedIndex = 0;
			this.updateViewUI();
			let hb_data_str = localGetItem("hb_data" + this._mapLv);
			if (hb_data_str) {
				let hb_data = JSON.parse(hb_data_str);
				if (hb_data) {
					this._type = hb_data.type - 1;
					this.selectHandler(this._type);
					// this._viewUI.tab_hb.selectedIndex = ;
					this._baoNum = hb_data.baoNum;
					this.updateBaoUI();
					this._leiDian = hb_data.ld_str.split(",");
					for (var key in this._leiDian) {
						if (this._leiDian.hasOwnProperty(key)) {
							this._leiDian[key] = Number(this._leiDian[key]);
						}
					}
					this.updateLeiDianUI();
					this._money = hb_data.money;
					this._viewUI.txtInput.text = this._money.toString();
					if (this._viewUI.txtInput.text != "") {
						this.changeText();
					} else {
						this.changePro();
					}
				}
			}
		}

		private changePro(): void {
			this._viewUI.txtInput.text = "发包金额";
			this._viewUI.txtInput.color = "#7b7b7b";
			this._viewUI.txtInput.fontSize = 40;
		}

		private changeText(): void {
			this._viewUI.txtInput.fontSize = 70;
			this._viewUI.txtInput.color = "#000000";
		}

		private onBack(): void {
			this._game.playSound(this._defaultSoundPath);
			this.close();
		}

		private onFoucs(): void {
			this.changeText();
			if (this._viewUI.txtInput.text == "发包金额")
				this._viewUI.txtInput.text = "";
		}

		private updateTxtInput(textInput: Laya.TextInput): void {
			if (!textInput) return;
			let money = parseInt(textInput.text);
			if (isNaN(money)) {
				this.changePro();
				return;
			}
			money = Math.max(this._moneyMin, money);
			money = Math.min(this._moneyMax, money);
			textInput.text = money.toString();
			this._money = money;
		}

		protected onMouseSoudHandle(e: LEvent): any {
			this._game.playSound(this._defaultSoundPath);
			return true;
		}

		update(diff: number) {
			super.update(diff);
			this.updateBtn();
		}

		private updateViewUI(): void {
			this._mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (!this._mainPlayer) return;
			let playerInfo = this._mainPlayer.playerInfo;
			if (!playerInfo) return;
			for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
				this._viewUI["btn_" + i].on(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			//主玩家身上的钱，在加上冻结的钱
			let dj_money = this._wxSaoLeiMgr.getDJMoney();
			let money: number = this._mainUnit.GetMoney() - dj_money;
			this._viewUI.lb_ye.text = money.toFixed(2);
			//红包发放范围
			this._mapinfo = this._game.sceneObjectMgr.mapInfo as WxSaoLeiHBMapInfo;
			this._mapLv = this._mapinfo.GetMapLevel();
			let index = WxSaoLeiHBMgr.ALL_GAME_ROOM_CONFIG_ID.indexOf(this._mapLv);
			if (index < 0) index = 0;
			this._moneyMin = WxSaoLeiHBMgr.MIN_TEMP[index];
			this._moneyMax = WxSaoLeiHBMgr.MAX_TEMP[index]
			this._viewUI.lb_range.text = StringU.substitute("红包发放范围：{0}-{1}", this._moneyMin, this._moneyMax);
		}

		private onLeiDianClick(index: number): void {
			//点击音效
			let have_index = this._leiDian.indexOf(index)
			if (have_index > -1) {
				//有的要去除掉
				this._leiDian.splice(have_index, 1);
			} else {
				if (this._type == WxSaoLeiHBMgr.TYPE_DANLEI - 1) {
					this._leiDian = [index];
				} else if (this._type == WxSaoLeiHBMgr.TYPE_DUOLEI - 1) {
					if (this._leiDian.length >= this._baoNum) {
						this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_YEBZ, (page: WxSaoLeiHBYEBZPage) => {
							page.setData("雷点数量不能大于发包数量!");
						});
						return;
					}
					this._leiDian.push(index);
				}
			}
			this.updateLeiDianUI();
		}

		private updateBtn(): void {
			let btn_is_gray = false;
			if (this._type != 0 && !this._type) {
				btn_is_gray = true;
			}
			if (this._baoNum <= 0) {
				btn_is_gray = true;
				return
			}
			if (!this._leiDian || this._leiDian.length <= 0) {
				btn_is_gray = true;
			}
			this._money = Number(this._viewUI.txtInput.text);
			if (this._viewUI.txtInput.text == "" || typeof (this._money) != "number" || isNaN(this._money)) {
				btn_is_gray = true;
			}
			this._viewUI.btn_send.alpha = btn_is_gray ? 0.5 : 1;
			this._viewUI.btn_send.mouseEnabled = !btn_is_gray;
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_random:
					this._leiDian = [];
					let randomIndex: number
					if (this._type == WxSaoLeiHBMgr.TYPE_DANLEI - 1) {
						//随机雷点
						let randomNum = MathU.randomRange(0, 9);
						this._leiDian = [randomNum];
					} else if (this._type = WxSaoLeiHBMgr.TYPE_DUOLEI - 1) {
						//随机雷点数
						let leiDianNum = this._wxSaoLeiMgr.getLeiDianNun();
						//随机雷点
						let leiDianNums = [].concat(WxSaoLeiHBMgr.LEI_HAO);	//预防数组引用
						while (leiDianNum > 0) {
							randomIndex = MathU.randomRange(0, leiDianNums.length - 1);
							this._leiDian.push(leiDianNums[randomIndex]);
							leiDianNums.splice(randomIndex, 1);
							leiDianNum--;
						}
					}
					this.updateLeiDianUI();
					break
				case this._viewUI.btn_send:
					if (this._wxSaoLeiMgr.MapJudgeIsFHOrLB(this._mapLv)) {
						if (this._mainPlayer.playerInfo.vip_level < 1) {
							this._game.showTips("该场次需要VIP1的玩家方可操作哦!")
							return;
						}
					}
					//发红包
					if (this._type != 0 && !this._type) {
						this._game.showTips("请选择红包类型哦~");
						return
					}
					if (this._baoNum <= 0) {
						this._game.showTips("红包数不能为空");
						return
					}
					if (!this._leiDian || this._leiDian.length <= 0) {
						this._game.showTips("雷点数不能为空");
						return
					}
					this._money = Number(this._viewUI.txtInput.text);
					if (this._money <= 0 || this._money < this._moneyMin || this._money > this._moneyMax || typeof (this._money) != "number" || isNaN(this._money)) {
						this._game.showTips("金额数错误");
						return;
					}
					//造假数据
					let leiDianStr = this.changeLeiDianToStr();
					if (!this._mainUnit) return;
					let dj_money = this._wxSaoLeiMgr.getDJMoney();
					if (this._mainUnit.GetMoney() - dj_money < this._money) {
						this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_YEBZ);
						this.close();
						return
					}
					//存下来
					this.updateLocalData();
					this._game.network.call_wxsaoleihb_sendhb(this._type + 1, this._baoNum, leiDianStr, this._money);
					this.close();
					break
				case this._viewUI.btn_danL_num1:
					this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[0];
					this.updateBaoUI()
					break
				case this._viewUI.btn_danL_num2:
					this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[1];
					this.updateBaoUI()
					break
				case this._viewUI.btn_duoL_num1:
					this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[1];
					this.updateBaoUI()
					break
				case this._viewUI.btn_0:
					this.onLeiDianClick(0)
					break
				case this._viewUI.btn_1:
					this.onLeiDianClick(1)
					break
				case this._viewUI.btn_2:
					this.onLeiDianClick(2)
					break
				case this._viewUI.btn_3:
					this.onLeiDianClick(3)
					break
				case this._viewUI.btn_4:
					this.onLeiDianClick(4)
					break
				case this._viewUI.btn_5:
					this.onLeiDianClick(5)
					break
				case this._viewUI.btn_6:
					this.onLeiDianClick(6)
					break
				case this._viewUI.btn_7:
					this.onLeiDianClick(7)
					break
				case this._viewUI.btn_8:
					this.onLeiDianClick(8)
					break
				case this._viewUI.btn_9:
					this.onLeiDianClick(9)
					break
			}
		}

		private changeLeiDianToStr(): string {
			let leiDianStr = "";
			for (let i = 0; i < this._leiDian.length; i++) {
				if (i > 0) leiDianStr += ","
				leiDianStr += this._leiDian[i];
			}
			return leiDianStr
		}

		private updateLocalData(): void {
			let leiDianStr = this.changeLeiDianToStr();
			let money = Number(this._viewUI.txtInput.text)
			let obj = {
				type: this._type + 1,
				baoNum: this._baoNum,
				ld_str: leiDianStr,
				money: isNaN(money) ? "" : money,
			}
			localSetItem("hb_data" + this._mapLv, JSON.stringify(obj));
		}

		private selectHandler(index: number): void {
			this._game.playSound(this._defaultSoundPath);
			this._type = index;
			this._viewUI.btn_tab_1.selected = (this._type + 1) == WxSaoLeiHBMgr.TYPE_DANLEI;
			this._viewUI.btn_tab_2.selected = (this._type + 1) == WxSaoLeiHBMgr.TYPE_DUOLEI;
			this.updateBaoUI(true);
		}

		//更新雷点UI
		private updateLeiDianUI(): void {
			for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
				if (this._leiDian.indexOf(i) > -1) {
					//有值
					this._viewUI["btn_" + i].index = 1;
				} else {
					this._viewUI["btn_" + i].index = 0;
				}
			}
			this._leiDian.sort((a: any, b: any) => {
				return a - b
			});
			let str = ""
			for (let i = 0; i < this._leiDian.length; i++) {
				if (i > 0) str += ",";
				str += this._leiDian[i];
			}
			this._viewUI.lb_lh.text = str;
		}

		//更新红包UI
		private updateBaoUI(isChangeTab: boolean = false): void {
			this._viewUI.box_danL.visible = false;
			this._viewUI.box_duoL.visible = false;
			this._viewUI.btn_danL_num1.index = 0;
			this._viewUI.btn_danL_num2.index = 0;
			this._viewUI.btn_duoL_num1.index = 0;
			//清空数据
			this._leiDian = [];
			for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
				this._viewUI["btn_" + i].selected = false;
			}
			if (this._type == WxSaoLeiHBMgr.TYPE_DANLEI - 1) {
				if (isChangeTab) this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[0];
				this._viewUI.lb_hbDanl_num.text = this._baoNum + "包";
				this._viewUI.box_danL.visible = true;
				this._viewUI.btn_danL_num1.index = this._baoNum == WxSaoLeiHBMgr.BAO_NUMS[0] ? 1 : 0;
				this._viewUI.btn_danL_num2.index = this._baoNum == WxSaoLeiHBMgr.BAO_NUMS[1] ? 1 : 0;
				let bet = WxSaoLeiHBMgr.DANLEI_BET[WxSaoLeiHBMgr.BAO_NUMS.indexOf(this._baoNum)];
				this._viewUI.lb_danL_info.text = StringU.substitute("赔率:{0}", bet);
			} else if (this._type == WxSaoLeiHBMgr.TYPE_DUOLEI - 1) {
				if (isChangeTab) this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[1];
				this._viewUI.lb_hbDuol_num.text = this._baoNum + "包";
				this._viewUI.box_duoL.visible = true;
				this._viewUI.btn_duoL_num1.index = 1;
			}
			this.updateLeiDianUI();
		}

		public close(): void {
			this.updateLocalData();
			if (this._viewUI) {
				for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
					this._viewUI["btn_" + i].off(LEvent.CLICK, this, this.onBtnClickWithTween, [i]);
				}
			}
			super.close();
		}
	}
}