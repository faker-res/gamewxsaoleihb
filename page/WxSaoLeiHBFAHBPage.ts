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
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
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
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.tab_hb.selectHandler = Handler.create(this, this.selectHandler, null, false);
			this._viewUI.btn_random.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_send.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.close);
			this._viewUI.hb_danL_num1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.hb_danL_num2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.hb_duoL_num1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			let story: WxSaoLeiHBStory = this._game.sceneObjectMgr.story;
			this._wxSaoLeiMgr = story.wxSaoLeiHBMgr;
			this._viewUI.tab_hb.selectedIndex = 0;
			this.updateViewUI();
		}

		private updateViewUI(): void {
			let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
				this._viewUI["btn_" + i].on(LEvent.CLICK, this, this.onLeiDianClick, [i]);
			}
			this._viewUI.lb_ye.text = playerInfo.money.toString();
			//红包发放范围
			this._mapinfo = this._game.sceneObjectMgr.mapInfo as WxSaoLeiHBMapInfo;
			let mapLv = this._mapinfo.GetMapLevel();
			let index = WxSaoLeiHBMgr.ALL_GAME_ROOM_CONFIG_ID.indexOf(mapLv);
			if (index < 0) index = 0;
			this._moneyMin = WxSaoLeiHBMgr.MIN_TEMP[index];
			this._moneyMax = WxSaoLeiHBMgr.MAX_TEMP[index]
			this._viewUI.lb_range.text = StringU.substitute("红包发放范围：{0}-{1}", this._moneyMin, this._moneyMax);
		}

		private onLeiDianClick(index: number): void {
			let have_index = this._leiDian.indexOf(index)
			if (have_index > -1) {
				//有的要去除掉
				this._leiDian.splice(have_index, 1);
			} else {
				if (this._type == WxSaoLeiHBMgr.TYPE_DANLEI - 1) {
					this._leiDian = [index];
				} else if (this._type == WxSaoLeiHBMgr.TYPE_DUOLEI - 1) {
					this._leiDian.push(index);
				}
			}
			this.updateLeiDianUI();
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
						let leiDianNum = MathU.randomRange(1, WxSaoLeiHBMgr.LEI_MAX_NUM - 1);
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
					if (this._money <= 0 || this._money < this._moneyMin || this._money > this._moneyMax) {
						this._game.showTips("金额数错误");
						return;
					}
					let leiDianStr = "";
					for (let i = 0; i < this._leiDian.length; i++) {
						if (i > 0) leiDianStr += ","
						leiDianStr += this._leiDian[i];
					}
					this._game.network.call_wxsaoleihb_sendhb(this._type + 1, this._baoNum, leiDianStr, this._money);
					this.close();
					break
				case this._viewUI.hb_danL_num1:
					this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[0];
					this.updateBaoUI()
					break
				case this._viewUI.hb_danL_num2:
					this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[1];
					this.updateBaoUI()
					break
				case this._viewUI.hb_duoL_num1:
					this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[1];
					this.updateBaoUI()
					break
			}
		}

		private selectHandler(index: number): void {
			this._type = index;
			this.updateBaoUI(true);
		}

		//更新雷点UI
		private updateLeiDianUI(): void {
			for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
				if (this._leiDian.indexOf(i) > -1) {
					//有值
					this._viewUI["btn_" + i].selected = true;
				} else {
					this._viewUI["btn_" + i].selected = false;
				}
			}
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
			this._viewUI.hb_danL_num1.selected = false;
			this._viewUI.hb_danL_num2.selected = false;
			this._viewUI.hb_duoL_num1.selected = false;
			//清空数据
			this._leiDian = [];
			for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
				this._viewUI["btn_" + i].selected = false;
			}
			if (isChangeTab) this._baoNum = WxSaoLeiHBMgr.BAO_NUMS[0];
			if (this._type == WxSaoLeiHBMgr.TYPE_DANLEI - 1) {
				this._viewUI.lb_hbDanl_num.text = this._baoNum + "包";
				this._viewUI.box_danL.visible = true;
				this._viewUI.hb_danL_num1.selected = this._baoNum == WxSaoLeiHBMgr.BAO_NUMS[0];
				this._viewUI.hb_danL_num2.selected = this._baoNum == WxSaoLeiHBMgr.BAO_NUMS[1];
				let bet = WxSaoLeiHBMgr.DANLEI_BET[WxSaoLeiHBMgr.BAO_NUMS.indexOf(this._baoNum)];
				this._viewUI.lb_danL_info.text = StringU.substitute("赔率:{0}", bet);
			} else if (this._type == WxSaoLeiHBMgr.TYPE_DUOLEI - 1) {
				this._viewUI.lb_hbDuol_num.text = this._baoNum + "包";
				this._viewUI.box_duoL.visible = true;
				this._viewUI.hb_duoL_num1.selected = true;
			}
			this.updateLeiDianUI();
		}

		public close(): void {
			if (this._viewUI) {
				for (let i = 0; i < WxSaoLeiHBMgr.LEI_MAX_NUM; i++) {
					this._viewUI["btn_" + i].off(LEvent.CLICK, this, this.onLeiDianClick, [i]);
				}
			}
			super.close();
		}
	}
}