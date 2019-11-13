/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBRoomInfoPage extends game.gui.base.Page {
		private static TYPE_ROOM_INFO: number = 1;
		private static TYPE_PLAYER_INFO: number = 2;
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_GDUI;
		private _wxSaoLeiMapInfo: WxSaoLeiHBMapInfo;
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
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_GDUI');
			this.addChild(this._viewUI);

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.close);
			this._viewUI.box_player.on(LEvent.CLICK, this, this.onBtnClick);
			this._viewUI.box_rule.on(LEvent.CLICK, this, this.onBtnClick);
			this._viewUI.list_player.vScrollBarSkin = "";
			this._viewUI.list_player.scrollBar.autoHide = false;
			this._viewUI.list_player.scrollBar.elasticDistance = 100;
			this._viewUI.list_player.itemRender = this.createChildren("game_ui.wxsaoleihb.component.WXSaoLei_TXUI", WXSaoLeiTX);
			this._viewUI.list_player.renderHandler = new Handler(this, this.renderHandler);
			this.initUI();
		}

		private renderHandler(cell: WXSaoLeiTX, index: number) {
			if (!cell) return;
			cell.setData(this._game, cell.dataSource);
		}

		getUnitArrData(): Array<Unit> {
			let unitObjs = this._game.sceneObjectMgr.unitDic;
			let unitArr = [];
			for (let key in unitObjs) {
				if (unitObjs.hasOwnProperty(key)) {
					let unit: Unit = unitObjs[key];
					unitArr.push(unit);
				}
			}
			return unitArr;
		}

		private onBtnClick(e: LEvent): void {
			switch (e.currentTarget) {
				case this._viewUI.box_player:
					this._viewUI.list_player.dataSource = this.getUnitArrData();
					this._viewUI.room_info.visible = false;
					this._viewUI.player_info.visible = true;
					break
				case this._viewUI.box_rule:
					this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_RULE, (page: WxSaoLeiHBRulePage) => {
						page.setData();
					});
					break
			}
		}

		private initUI(): void {
			this._viewUI.player_info.visible = false;
			this._viewUI.room_info.visible = true;
			//房间名
			this._wxSaoLeiMapInfo = this._game.sceneObjectMgr.mapInfo as WxSaoLeiHBMapInfo;
			let mapLv = this._wxSaoLeiMapInfo.GetMapLevel();
			let index = WxSaoLeiHBMgr.ALL_GAME_ROOM_CONFIG_ID.indexOf(mapLv);
			if (index < 0) index = 0;
			this._viewUI.lb_name.text = WxSaoLeiHBMgr.GMAE_ROOME_NAME[index];
			//发包金额
			if (index < 0) index = 0;
			this._viewUI.lb_money.text = StringU.substitute("红包发放范围：{0}.00-{1}.00", WxSaoLeiHBMgr.MIN_TEMP[index], WxSaoLeiHBMgr.MAX_TEMP[index]);
		}

		public close(): void {
			if (this._viewUI) {
			}
			super.close();
		}
	}

	class WXSaoLeiTX extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_TXUI {
		constructor() {
			super();
		}

		setData(game: Game, data: Unit) {
			if (!data) return;
			this.img_head.skin = TongyongUtil.getHeadUrl(data.GetHeadImg());
			this.lb_name.text = data.GetName();
		}
	}
}