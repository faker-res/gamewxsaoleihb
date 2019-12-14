/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBFZTSPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.wxsaoleihb.WXSaoLei_FZUI;
		public isInner: boolean = false;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = false;
			this._isNeedDuang = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "xz.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_FZUI');
			this.addChild(this._viewUI);
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			if (this._viewUI && this.isInner) {
				this._viewUI.box_main.scaleX = 1.77;
				this._viewUI.box_main.scaleY = 1.77;
			}
			if (!this.isInner) {
				this._viewUI.ani2.play(0, false);
				this._viewUI.ani2.on(LEvent.COMPLETE, this, this.close)
			} else {
				this._viewUI.ani1.play(0, false);
				this._viewUI.ani1.on(LEvent.COMPLETE, this, this.close)
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.ani1.off(LEvent.COMPLETE, this, this.close)
				this._viewUI.ani2.off(LEvent.COMPLETE, this, this.close)
			}
			super.close();
		}
	}
}