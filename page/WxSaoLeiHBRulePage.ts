/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBRulePage extends game.gui.base.Page {
		public static OUTSIDE_RULE: number = 1;
		public static INNER_RULE: number = 2;

		private static TYPE_WANFA_JIESHAO: number = 0;
		private static TYPE_CARD_PEIFU: number = 1;
		private _viewUI: ui.ajqp.game_ui.wxsaoleihb.WXSaoLei_GuiZeUI;
		private _curType: number = 1;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._isNeedDuang = false;
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "saolei.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "guize.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_GuiZeUI');
			this.addChild(this._viewUI);
		}

		setData(): void {
			this._curType = WxSaoLeiHBRulePage.INNER_RULE;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.box_out.visible = this._curType == WxSaoLeiHBRulePage.OUTSIDE_RULE;
			this._viewUI.box_inner.visible = this._curType == WxSaoLeiHBRulePage.INNER_RULE;
			if (this._curType == WxSaoLeiHBRulePage.INNER_RULE) {
				if (this._game.isFullScreen) {
					let diff = 56
					//有刘海
					this._viewUI.img_up.height = 100 + diff;
					this._viewUI.panel_inner.top = 95 + diff;
				} else {
					this._viewUI.img_up.height = 100;
					this._viewUI.panel_inner.top = 95;
				}
				this._defaultSoundPath = Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.btn;
				if (this._viewUI) {
					this._viewUI.box_main.scaleX = 1.77;
					this._viewUI.box_main.scaleY = 1.77;
				}
			}
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBackClose);
			this._viewUI.btn_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.panel_inner.vScrollBarSkin = "";
			this._viewUI.panel_inner.vScrollBar.autoHide = true;
			this._viewUI.panel_inner.vScrollBar.elasticDistance = 100;
			this._viewUI.panel_out.vScrollBarSkin = "";
			this._viewUI.panel_out.vScrollBar.autoHide = true;
			this._viewUI.panel_out.vScrollBar.elasticDistance = 100;
			this._viewUI.tab_Type.selectHandler = Handler.create(this, this.selectHandler, null, false);
			this._viewUI.tab_Type.selectedIndex = 0;
		}

		private selectHandler(index: number): void {
			this._viewUI.img_pf.visible = this._viewUI.tab_Type.selectedIndex == WxSaoLeiHBRulePage.TYPE_WANFA_JIESHAO;
			this._viewUI.panel_out.visible = this._viewUI.tab_Type.selectedIndex == WxSaoLeiHBRulePage.TYPE_CARD_PEIFU;
		}

		private onBackClose(): void {
			this._game.playSound(this._defaultSoundPath);
			this.close();
		}

		/**按钮点击事件缓动完 回调 该做啥就做啥 */
		protected onBtnTweenEnd(e: any, target: any): void {
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			switch (target) {
				// case this._viewUI.btn_back:
				// 	this.close();
				// 	break
				case this._viewUI.btn_close:
					this.close();
					break
			}
		}

		public close(): void {
			if (this._viewUI) {
			}
			super.close();
		}
	}
}