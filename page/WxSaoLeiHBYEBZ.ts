/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBYEBZPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.wxsaoleihb.WXSaoLei_YuEUI;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = false;
			this._isClickBlack = false;
			this._isNeedDuang = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "saolei.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_YuEUI');
			this.addChild(this._viewUI);
			if (this._viewUI) {
				this._viewUI.box_main.scaleX = 1.77;
				this._viewUI.box_main.scaleY = 1.77;
			}
		}

		setData(info): void {
			if (info) {
				this._viewUI.lb_info.text = info;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			Laya.timer.once(2000, this, this.close);
		}

		public close(): void {
			if (this._viewUI) {
			}
			super.close();
		}
	}
}