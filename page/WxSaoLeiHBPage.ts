/**
* 微信扫雷红包
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBPage extends game.gui.base.Page {
		private _clipMinList: ClipUtil[] = [];
		private _clipMaxList: ClipUtil[] = [];
		private _clipArr: any[] = [ClipUtil.HUD_FONT1, ClipUtil.HUD_FONT2, ClipUtil.HUD_FONT3];
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_HUDUI;
		private _player: any;
		private _playerInfo: any;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "hud.atlas",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_HUDUI', ["game_ui.wxsaoleihb.WXSaoLei_HUDUI"]);
			this.addChild(this._viewUI);
			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
			for (let index = 0; index < 3; index++) {
				if (!this._clipMinList[index]) {
					this._clipMinList[index] = new ClipUtil(this._clipArr[index]);
					this._clipMinList[index].x = this._viewUI["txt_min" + index].x;
					this._clipMinList[index].y = this._viewUI["txt_min" + index].y;
					this._clipMinList[index].scale(0.8, 0.8);
					this._viewUI["txt_min" + index].parent && this._viewUI["txt_min" + index].parent.addChild(this._clipMinList[index]);
					this._viewUI["txt_min" + index].removeSelf();
				}
				if (!this._clipMaxList[index]) {
					this._clipMaxList[index] = new ClipUtil(this._clipArr[index]);
					this._clipMaxList[index].x = this._viewUI["txt_max" + index].x;
					this._clipMaxList[index].y = this._viewUI["txt_max" + index].y;
					this._clipMaxList[index].scale(0.8, 0.8);
					this._viewUI["txt_max" + index].parent && this._viewUI["txt_max" + index].parent.addChild(this._clipMaxList[index]);
					this._viewUI["txt_max" + index].removeSelf();
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			(this._viewUI.view_hud as TongyongHudNqpPage).onOpen(this._game, WxsaoleihbPageDef.GAME_NAME);
			//按钮监听
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}
			for (let index = 0; index < this._clipMinList.length; index++) {
				this._clipMinList[index].setText(WxSaoLeiHBMgr.MIN_TEMP[index], true, false);
				this._clipMaxList[index].setText(WxSaoLeiHBMgr.MAX_TEMP[index], true, false);
			}
			// this._game.playMusic(Path.music + "buyu/bg.mp3");
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
				case this._viewUI.btn_join:
					let maplv = TongyongUtil.getJoinMapLv(WxsaoleihbPageDef.GAME_NAME, mainPlayer.playerInfo.money);
					if (!maplv) return;
					this._game.sceneObjectMgr.intoStory(WxsaoleihbPageDef.GAME_NAME, maplv.toString(), true);
					break;
			}
		}

        /**
         * 检查进入房间的条件
         * @param mode 
         */
		public checkMoneyToStory(mode: number): void {
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let haveMoney = mainPlayer.playerInfo.money;
			let roomInfo = WxsaoleihbPageDef.getRoomInfoByMode(mode);
			if (haveMoney < roomInfo.minGold) {
				let str = StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", roomInfo.minGold);
				this.gotoRecharge(str);
			} else {
				//进入
				this._game.sceneObjectMgr.intoStory(WxsaoleihbPageDef.GAME_NAME, mode.toString(), true);
			}
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
				this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			super.close();
		}
	}
}