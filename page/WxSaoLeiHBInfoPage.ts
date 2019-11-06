/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBInfoPage extends game.gui.base.Page {
		public static readonly TYPE_HB_RAIN: number = 1	//红包雨
		public static readonly TYPE_HB_INFO: number = 2	//红包详情界面
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
			this._game.uiRoot.HUD.open(WxsaoleihbPageDef.PAGE_WXSLHB_JL);
		}

		private _hbData: any
		private _lqData: any
		private _story: WxSaoLeiHBStory;
		private _maxIndex: number;
		setData(hbData: any, lqData: any, type: number, money: number = 0): void {
			this._viewUI.box_info.visible = type == WxSaoLeiHBInfoPage.TYPE_HB_INFO;
			this._viewUI.box_rain.visible = type == WxSaoLeiHBInfoPage.TYPE_HB_RAIN;
			if (type == WxSaoLeiHBInfoPage.TYPE_HB_RAIN) {
				if (money <= 0) return;
				this._viewUI.rain_money.text = money.toString();
			} else if (type == WxSaoLeiHBInfoPage.TYPE_HB_INFO) {
				if (!hbData || !lqData) return;
				this._hbData = hbData;
				this._lqData = lqData;
				this._viewUI.hb_info_list.dataSource = this._lqData;
				this._moneyNum.setText(this._hbData.money);
				this._viewUI.img_head.skin = TongyongUtil.getHeadUrl(this._hbData.head);
				this._viewUI.lb_name.text = this._hbData.name;
				this._viewUI.lb_hb_num.text = this._hbData.bao_num;
				let ld_arr = this._hbData.ld_str.split(',');
				this._viewUI.lb_ld.text = JSON.stringify(ld_arr);
				this._viewUI.lb_lq.text = StringU.substitute("领取{0}/{1}个", this._hbData.lq_num, this._hbData.bao_num);
				let story: WxSaoLeiHBStory = this._game.sceneObjectMgr.story;
				this._maxIndex = story.wxSaoLeiHBMgr.searchMaxMoney(lqData);
			}
		}

		private renderHandler(cell: HBLingQuMX, index: number) {
			if (cell) {
				let isMax = index == this._maxIndex;
				cell.setData(this._game, cell.dataSource, isMax);
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
		setData(game: Game, data: any, isMax: boolean) {
			this._data = data;
			if (!data) return;
			//免死金牌
			this.img_head.skin = this._data.status == 1 ? TongyongUtil.getHeadUrl(this._data.lq_head) : Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_msjp.png";
			this.lb_money.text = this._data.money;
			this.lb_time.text = Sync.getTimeShortStr2(this._data.lq_money)
			this.lb_name.text = this._data.name;
			//手气最佳
			this.img_sqzj.visible = isMax;
			this.img_sqzj.x = this._data.is_zl ? 505 : 594;
			//是否中雷
			this.img_zl.visible = this._data.is_zl;
		}
	}
}