/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBInfoPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLeiHB_InfoUI;
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
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLeiHB_InfoUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.hb_info_list.vScrollBarSkin = "";
			this._viewUI.hb_info_list.scrollBar.elasticDistance = 100;
			this._viewUI.hb_info_list.itemRender = this.createChildren("game_ui.wxsaoleihb.component.WXSaoLei_LBUI", HBLingQuMX);
			this._viewUI.hb_info_list.renderHandler = new Handler(this, this.renderHandler);
			this.initClip();
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.close);
			this._viewUI.lb_hbjl.on(LEvent.CLICK, this, this.openHbJL);
		}

		private _moneyNum: ClipUtil;
		private initClip(): void {
			if (!this._moneyNum) {
				this._moneyNum = new ClipUtil(WxSaoLeiHBClip.MONEY_FONT);
				this._moneyNum.centerX = this._viewUI.clip_hb_num.centerX;
				this._moneyNum.centerY = this._viewUI.clip_hb_num.centerX;
				this._viewUI.clip_hb_num.parent.addChild(this._moneyNum);
				this._viewUI.clip_hb_num.removeSelf();
			}
		}

		//打开红包记录界面
		private openHbJL(): void {
			this._game.uiRoot.HUD.open(WxSaoLeiHBPageDef.PAGE_WXSLHB_JL);
		}

		private _curData: any
		setData(data: any): void {
			if (!data) return;
			this._curData = data;
			this._viewUI.hb_info_list.dataSource = this._curData.listInfo;
			this._moneyNum.setText(this._curData.money);
			this._viewUI.img_hb_head2.skin = TongyongUtil.getHeadUrl(this._curData.head);
			this._viewUI.lb_name2.text = this._curData.name;
			this._viewUI.lb_hb_name2.text = this._curData.hbName;
			this._viewUI.lb_hb_num.text = this._curData.hbNum;
			this._viewUI.lb_ld.text = this._curData.hbLD;
			this._viewUI.lb_lq.text = StringU.substitute("领取{0}/{1}个", this._curData.lqNum, this._curData.lqMaxNum);
		}

		private renderHandler(cell: HBLingQuMX, index: number) {
			if (cell) {
				cell.dataSource["index"] = index;
				cell.setData(this._game, cell.dataSource);
			}
		}

		public close(): void {
			if (this._viewUI) {
				if (this._moneyNum) {
					this._moneyNum.removeSelf();
					this._moneyNum.destroy();
					this._moneyNum = null;
				}
			}
			super.close();
		}
	}
	class HBLingQuMX extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI {
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(game: Game, data: any) {
			this._data = data;
			if (!data) return;
			this.img_head.skin = TongyongUtil.getHeadUrl(this._data.head);
			this.lb_money.text = this._data.money;
			this.lb_time.text = Sync.getTimeShortStr2(this._data.time)
			this.lb_name.text = this._data.name;
			//手气最佳
			this.img_sqzj.visible = this._data.isMax;
		}
	}
}