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
			this._baoBiaoMgr = this._game.datingGame.baobiaoMgr;
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

		private _baoBiaoMgr: BaoBiaoMgr;
		private _dataInfo: Array<any> = []
		onUpdateDataInfo(date?): void {
			!date && this._baoBiaoMgr.getData(1, this._game.sync.serverTimeBys, 6);
			let value = this._baoBiaoMgr.getDataInfo(6);
			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							let type_index = WxSaoLeiHBMgr.TYPE_INFO.indexOf(aa.type)
							aa["type_index"] = type_index
							if (type_index > -1)
								this._dataInfo.push(aa);
						}
					}
				}
			}
			this._viewUI.list_ye.dataSource = this._dataInfo;
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
			this._baoBiaoMgr.on(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			this.onUpdateDataInfo();
		}

		public close(): void {
			this._baoBiaoMgr.off(RecordMgr.RECORD_CHANGE, this, this.onUpdateDataInfo);
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
			this.lb_date.text = Sync.getTimeStr1(this._data.time * 1000);
			this.lb_time.text = Sync.getTimeShortStr(this._data.time);
			this.lb_money.text = this._data.money;
			this.lb_type.text = WxSaoLeiHBMgr.TYPE_INFO[this._data.type_index + 1].toString();
			this.lb_diff.text = this._data.shouzhi;
			this.lb_diff.color = this._data.shouzhi > 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
		}
	}
}