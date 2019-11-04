/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBJLPage extends game.gui.base.Page {
		static readonly TYPE_GET_HB = 1;//收到红包
		static readonly TYPE_RECIVE_HB = 2;//发出红包
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_JLUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_longhu.atlas_game_ui + "longhu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "saolei.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_JLUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_info.vScrollBarSkin = "";
			this._viewUI.list_info.scrollBar.elasticDistance = 100;
			this._viewUI.list_info.itemRender = this.createChildren("game_ui.wxsaoleihb.component.WXSaoLei_LB1UI", HBInfoMX);
			this._viewUI.list_info.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			this.initView();
		}

		private initView():void{
			let mainPlayer:PlayerData = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let mainPlayerInfo = mainPlayer.playerInfo;
			this._viewUI.img_head.skin = TongyongUtil.getHeadUrl(mainPlayerInfo.headimg);
			this._viewUI.lb_name.text = mainPlayer.GetNickName();
		}

		private renderHandler(cell: HBInfoMX, index: number) {
			if (cell) {
				cell.dataSource["index"] = index;
				cell.setData(this._game, cell.dataSource);
			}
		}

		private selectHandler(index: number): void {
			if (index == WxSaoLeiHBJLPage.TYPE_GET_HB) {
				this._viewUI.lb_type.text = "共收";
			} else if (index == WxSaoLeiHBJLPage.TYPE_RECIVE_HB) {
				this._viewUI.lb_type.text = "共发";
			}
			this._viewUI.list_info;
		}

		public close(): void {
			if (this._viewUI) {
			}
			super.close();
		}
	}

	class HBInfoMX extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI {
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(game: Game, data: any) {
			this._data = data;
			if (!data) return;
			this.lb_date.text = Sync.getTimeStr1(this._data.time);
			this.lb_time.text = Sync.getTimeShortStr2(this._data.time);
			this.lb_money.text = this._data.money;
			// this.lb_type.text = this._data.name;
			// this.lb_diff.text = this._data.money;
		}
	}
}