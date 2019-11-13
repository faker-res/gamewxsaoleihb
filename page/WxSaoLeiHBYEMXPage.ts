/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBYEMXPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_MXUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
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
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_MXUI');
			this.addChild(this._viewUI);
			if (this._viewUI) {
                this._viewUI.box_main.scaleX = 1.77;
                this._viewUI.box_main.scaleY = 1.77;
            }
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.close);
			this._viewUI.list_ye.vScrollBarSkin = "";
			this._viewUI.list_ye.scrollBar.elasticDistance = 100;
			this._viewUI.list_ye.itemRender = this.createChildren("game_ui.wxsaoleihb.component.WXSaoLei_LB2UI", YEMX);
			this._viewUI.list_ye.renderHandler = new Handler(this, this.renderHandler);
		}

		private renderHandler(cell: YEMX, index: number) {
			if (cell) {
				cell.dataSource["index"] = index;
				cell.setData(this._game, cell.dataSource);
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
		}

		public close(): void {
			if (this._viewUI) {
			}
			super.close();
		}
	}
	class YEMX extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI {
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