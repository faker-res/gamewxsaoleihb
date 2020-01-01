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
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_SPHUDUI', ["game_ui.wxsaoleihb.WXSaoLei_SPHUDUI"]);
			this.addChild(this._viewUI);
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
			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, WxsaoleihbPageDef.GAME_NAME);
			//按钮监听
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					x: 1280
				}, 200 + index * 100, Laya.Ease.linearNone);
			}
		}

		// 重新布局
		protected layout(): void {
			super.layout();
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
			// let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			// if (!mainPlayer) return;
			// let haveMoney = mainPlayer.playerInfo.money;
			// let roomInfo = WxsaoleihbPageDef.getRoomInfoByMode(mode);
			// if (haveMoney < roomInfo.minGold) {
			// 	let str = StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", roomInfo.minGold);
			// 	this.gotoRecharge(str);
			// } else {
			//进入
			this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_FZTS, (page: WxSaoLeiHBFZTSPage) => {
				page.isInner = false;
			}, () => {
				this._game.sceneObjectMgr.intoStory(WxsaoleihbPageDef.GAME_NAME, mode.toString(), true);
			})
			// }
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