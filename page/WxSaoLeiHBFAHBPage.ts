/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBFAHBPage extends game.gui.base.Page {
		private static readonly TYPE_DANLEI = 1;//单雷
		private static readonly TYPE_DUOLEI = 2;//多雷
		private static readonly BAO_NUMS: Array<number> = [7, 9];//红包数
		private static readonly LEI_MAX_NUM: number = 9;//最大雷点数
		private static readonly LEI_HAO: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];//雷号
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_HBUI;
		private _type: number;
		private _baoNum: number;
		private _leiDian: Array<number> = [];
		private _money: number;
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
			this._viewUI.btn_back.on(LEvent.CLICK,this,this.close);
		}

		private initUI(): void {
			let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let playerInfo = mainPlayer.playerInfo;
			if (!playerInfo) return;
			for (let i = 0; i < WxSaoLeiHBFAHBPage.LEI_MAX_NUM; i++) {
				this._viewUI["btn_" + i].on(LEvent.CLICK, this, this.onLeiDianClick, [i]);
			}
			this._game.sceneObjectMgr.mainPlayer
			this._viewUI.lb_ye.text = playerInfo.money.toString();
			//红包发放范围
			this._viewUI.lb_range.text = StringU.substitute("红包发放范围：{0}-{1}", );
		}

		private onLeiDianClick(index: number): void {
			if (this._type == WxSaoLeiHBFAHBPage.TYPE_DANLEI) {
				for (let i = 0; i < WxSaoLeiHBFAHBPage.LEI_MAX_NUM; i++) {
					if (i == index) {
						this._viewUI["btn_" + i].selected = true;
						this._leiDian = [index];
					} else {
						this._viewUI["btn_" + i].selected = false;
					}
				}
			} else if (this._type == WxSaoLeiHBFAHBPage.TYPE_DUOLEI) {
				for (let i = 0; i < WxSaoLeiHBFAHBPage.LEI_MAX_NUM; i++) {
					//不重复记录
					if (this._leiDian.indexOf(i) > -1) continue;
					if (i == index) {
						this._viewUI["btn_" + i].selected = true;
						this._leiDian.push(index);
					} else {
						this._viewUI["btn_" + i].selected = false;
					}
				}
			}
		}

		protected onBtnTweenEnd(e: any, target: any) {
			switch (target) {
				case this._viewUI.btn_random:
					this._leiDian = [];
					let randomIndex: number
					if (this._type == WxSaoLeiHBFAHBPage.TYPE_DANLEI) {
						//随机红包数
						randomIndex = MathU.randomRange(0, WxSaoLeiHBFAHBPage.BAO_NUMS.length - 1);
						this._baoNum = WxSaoLeiHBFAHBPage.BAO_NUMS[randomIndex];
						//随机雷点
						let randomNum = MathU.randomRange(0, 9);
						this._leiDian = [randomNum];
					} else if (this._type = WxSaoLeiHBFAHBPage.TYPE_DUOLEI) {
						//固定包数
						this._baoNum = WxSaoLeiHBFAHBPage.BAO_NUMS[1];
						//随机雷点数
						let leiDianNum = MathU.randomRange(1, WxSaoLeiHBFAHBPage.LEI_MAX_NUM);
						//随机雷点
						let leiDianNums = WxSaoLeiHBFAHBPage.LEI_HAO;
						while (leiDianNum > 0) {
							randomIndex = MathU.randomRange(0, leiDianNums.length - 1);
							this._leiDian.push(leiDianNums[randomIndex]);
							leiDianNums.splice(randomIndex, 1);
							leiDianNum--;
						}
					}
					break
				case this._viewUI.btn_send:
					//发红包
					if (this._type != 0 && !this._type) this._game.showTips("请选择红包类型哦~");
					if (this._baoNum < 0) this._game.showTips("红包数不能为空");
					if (!this._leiDian || this._leiDian.length < 0) this._game.showTips("雷点数不能为空");
					this._money = Number(this._viewUI.txtInput.text);
					if (this._money < 0) this._game.showTips("金额不能为空哦~");
					let leiDianStr = JSON.stringify(this._leiDian);
					this._game.network.call_wxsaoleihb_sendhb(this._type, this._baoNum, leiDianStr, this._money);
					break
			}
		}

		private selectHandler(index: number): void {
			this._viewUI.box_danL.visible = false;
			this._viewUI.box_duoL.visible = false;
			//清空数据
			this._leiDian = [];
			for (let i = 0; i < WxSaoLeiHBFAHBPage.LEI_MAX_NUM; i++) {
				this._viewUI["btn_" + i].selected = false;
			}
			if (index == WxSaoLeiHBFAHBPage.TYPE_DANLEI) {
				this._baoNum[WxSaoLeiHBFAHBPage.BAO_NUMS[0]];
				this._viewUI.lb_hbDanl_num.text = this._baoNum + "包";
				this._viewUI.box_danL.visible = true;
				this._viewUI.hb_danL_num1.selected = true;
			} else if (index == WxSaoLeiHBFAHBPage.TYPE_DUOLEI) {
				this._baoNum[WxSaoLeiHBFAHBPage.BAO_NUMS[1]];
				this._viewUI.lb_hbDuol_num.text = this._baoNum + "包";
				this._viewUI.box_duoL.visible = true;
				this._viewUI.hb_duoL_num1.selected = true;
			}
		}

		public close(): void {
			if (this._viewUI) {
				for (let i = 0; i < WxSaoLeiHBFAHBPage.LEI_MAX_NUM; i++) {
					this._viewUI["btn_" + i].off(LEvent.CLICK, this, this.onLeiDianClick, [i]);
				}
			}
			super.close();
		}
	}
}