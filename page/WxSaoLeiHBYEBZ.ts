/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBYEBZPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_YuEUI;
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
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_YuEUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			Laya.timer.once(3000, this, this.close);
		}

		public close(): void {
			if (this._viewUI) {
			}
			super.close();
		}
	}
}