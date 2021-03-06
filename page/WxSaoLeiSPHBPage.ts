/**
* 微信扫雷竖屏红包
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiSPHBPage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.wxsaoleihb.WXSaoLei_SPHUDUI;
		private _player: any;
		private _playerInfo: any;
		private _limitClipList: WxSaoLeiHBClip[] = [];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			WebConfig.setMyOrientation(false);
			if (Browser.onPC) {
				Laya.stage.screenMode = Stage.SCREEN_NONE;
			} else {
				Laya.stage.screenMode = Stage.SCREEN_VERTICAL;
			}
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_SPHUDUI', ["game_ui.wxsaoleihb.WXSaoLei_SPHUDUI"]);
			this.addChild(this._viewUI);
			if (this._viewUI) {
				this._viewUI.box_main.scaleX = 1.77;
				this._viewUI.box_main.scaleY = 1.77;
			}
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
			for (let i = 0; i < 3; i++) {
				if (!this._limitClipList[i]) {
					this._limitClipList[i] = new WxSaoLeiHBClip(WxSaoLeiHBClip.WHITE_FONT);
					this._limitClipList[i].centerX = this._viewUI["txt_limit" + i].centerX;
					this._limitClipList[i].centerY = this._viewUI["txt_limit" + i].centerY;
					this._viewUI["txt_limit" + i].parent.addChild(this._limitClipList[i]);
					this._viewUI["txt_limit" + i].removeSelf();
					let str = WxSaoLeiHBMgr.MIN_TEMP[i] + "-" + WxSaoLeiHBMgr.MAX_TEMP[i];
					this._limitClipList[i].setText(str, true, false, PathGameTongyong.ui_tongyong_hud + "tu_xe.png");
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._game.playMusic(Path_game_wxSaoLeiHB.music_wxsaoleihb + "back.mp3");
			(this._viewUI.view_hud as TongyongSPHudPage).onOpen(this._game, WxsaoleihbPageDef.GAME_NAME);
			//按钮监听
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			this._viewUI.box_rl0.on(LEvent.CLICK, this, this.onBtnClickRule);
			this._viewUI.box_rl1.on(LEvent.CLICK, this, this.onBtnClickRule);
			this._viewUI.box_rl2.on(LEvent.CLICK, this, this.onBtnClickRule);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				let cur_view: Box = this._viewUI.box_right._childs[index]
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					centerX: -720
				}, 200 + index * 100, Laya.Ease.linearNone);
			}
		}

		private onBtnClickRule(): void {
			this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_RULE, (page: WxSaoLeiHBRulePage) => {
				page.setData();
			});
		}


		private _curHeight: number;
		updateRoomPos(): void {
			this._viewUI.box_right.top = this._viewUI.view_hud.box_top.height + this._viewUI.view_hud.box_top.top;
			this._viewUI.box_right.bottom = this._viewUI.view_hud.box_bottom.height + this._viewUI.view_hud.box_bottom.bottom;
			let cur_scale = 1
			if (this._viewUI.box_right.height < 1150) {
				cur_scale = this._viewUI.box_right.height / (1200 + 200);
			}
			this._viewUI.box_room0.scale(cur_scale, cur_scale)
			this._viewUI.box_room1.scale(cur_scale, cur_scale)
			this._viewUI.box_room2.scale(cur_scale, cur_scale)
		}

		// 重新布局
		protected layout(): void {
			super.layout();
			Laya.timer.frameOnce(1, this, this.updateRoomPos);
		}

		/**按钮点击事件缓动完 回调 该做啥就做啥 */
		protected onBtnTweenEnd(e: any, target: any): void {
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			switch (target) {
				case this._viewUI.img_room0://体验场
					this.checkMoneyToStory(Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_1);
					break;
				case this._viewUI.img_room1://0.01元场
					this.checkMoneyToStory(Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_2);
					break;
				case this._viewUI.img_room2://0.1元场
					this.checkMoneyToStory(Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_3);
					break;
			}
		}

        /**
         * 检查进入房间的条件
         * @param mode 
         */
		public checkMoneyToStory(mode: number): void {
			this._game.sceneObjectMgr.intoStory(WxsaoleihbPageDef.GAME_NAME, mode.toString(), true);
		}

        /**
		 * 走！咱们充钱去
		 * @param str 
		 * @param ecb 
		 * @param ccb 
		 */
		private gotoRecharge(str: string, ecb: Function = null, ccb: Function = null) {
			this._game.alert(str, () => {
				if (ecb) {
					ecb();
				}
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
				if (ccb) {
					ccb();
				}
			}, true);
		}

		public close(): void {
			if (this._viewUI) {
				WebConfig.setMyOrientation(true);
				Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				if (this._limitClipList && this._limitClipList.length) {
					for (let index = 0; index < this._limitClipList.length; index++) {
						if (this._limitClipList[index]) {
							this._limitClipList[index].removeSelf();
							this._limitClipList[index] = null;
						}
					}
					this._limitClipList = [];
				}
			}
			super.close();
		}
	}
}