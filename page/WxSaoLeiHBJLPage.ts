/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBJLPage extends game.gui.base.Page {
		static readonly TYPE_GET_HB = 0;//收到红包
		static readonly TYPE_RECIVE_HB = 1;//发出红包
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_JLUI;
		private _curType: number;
		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._isNeedDuang = false;
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
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLei_JLUI');
			this.addChild(this._viewUI);
			if (this._viewUI) {
				this._viewUI.box_main.scaleX = 1.77;
				this._viewUI.box_main.scaleY = 1.77;
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_info.vScrollBarSkin = "";
			this._viewUI.list_info.scrollBar.elasticDistance = 100;
			this._viewUI.list_info.itemRender = this.createChildren("game_ui.wxsaoleihb.component.WXSaoLei_LB1UI", HBInfoMX);
			this._viewUI.list_info.renderHandler = new Handler(this, this.renderHandler);
			this._viewUI.tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			this._viewUI.tab.selectedIndex = 0;
			this._baoBiaoMgr = this._game.datingGame.baobiaoMgr;
			this._baoBiaoMgr.on(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.close);
			this.initView();
			this.onUpdateDataInfo();
		}

		private initView(): void {
			let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
			if (!mainPlayer) return;
			let mainPlayerInfo = mainPlayer.playerInfo;
			this._viewUI.img_head.skin = TongyongUtil.getHeadUrl(mainPlayerInfo.headimg);
			this._viewUI.lb_name.text = mainPlayer.GetNickName();
		}

		private _baoBiaoMgr: BaoBiaoMgr;
		private _dataGetInfo: Array<any> = []	//发出的数据
		private _dataSendInfo: Array<any> = []	//收到的数据
		private _dataGetInfoMoney = 0;
		private _dataSendInfoMoney = 0;
		onUpdateDataInfo(date?): void {
			!date && this._baoBiaoMgr.getData(1, this._game.sync.serverTimeBys, 6);
			let value = this._baoBiaoMgr.getDataInfo(6);
			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							if (aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FLHB || aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_GHB) {
								//领红包或者福利包数据
								this._dataGetInfo.push(aa);
							} else if (aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FHB) {
								//发红包数据
								this._dataSendInfo.push(aa);
							}
						}
					}
				}
			}
			if (this._curType == WxSaoLeiHBJLPage.TYPE_GET_HB) {
				this._viewUI.list_info.dataSource = this._dataGetInfo;
				for (var key in this._dataGetInfo) {
					if (this._dataGetInfo.hasOwnProperty(key)) {
						var element = this._dataGetInfo[key];
						this._dataGetInfoMoney += element.money;
					}
				}
			} else if (this._curType == WxSaoLeiHBJLPage.TYPE_RECIVE_HB) {
				this._viewUI.list_info.dataSource = this._dataSendInfo;
				for (var key in this._dataSendInfo) {
					if (this._dataSendInfo.hasOwnProperty(key)) {
						var element = this._dataSendInfo[key];
						this._dataSendInfoMoney += element.money;
					}
				}
			}
		}

		private renderHandler(cell: HBInfoMX, index: number) {
			if (cell) {
				cell.dataSource["index"] = index;
				cell.setData(this._game, cell.dataSource, this._curType);
			}
		}

		private selectHandler(index: number): void {
			this._curType = index;
			if (index == WxSaoLeiHBJLPage.TYPE_GET_HB) {
				this._viewUI.lb_type.text = "共收";
				this._viewUI.lb_num_money.text = this._dataGetInfoMoney.toString();
				this._viewUI.lb_num_hb.text = this._dataGetInfo.length.toString();
			} else if (index == WxSaoLeiHBJLPage.TYPE_RECIVE_HB) {
				this._viewUI.lb_type.text = "共发";
				this._viewUI.lb_num_money.text = this._dataSendInfo.toString();
				this._viewUI.lb_num_hb.text = this._dataSendInfo.length.toString();
			}
			if (this._curType == WxSaoLeiHBJLPage.TYPE_GET_HB) {
				this._viewUI.list_info.dataSource = this._dataGetInfo;
			} else if (this._curType == WxSaoLeiHBJLPage.TYPE_RECIVE_HB) {
				this._viewUI.list_info.dataSource = this._dataSendInfo;
			}
		}

		public close(): void {
			if (this._viewUI) {
				this._baoBiaoMgr.off(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			}
			super.close();
		}
	}

	class HBInfoMX extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI {
		private _game: Game;
		private _data: any;
		constructor() {
			super();
		}
		setData(game: Game, data: any, curType: number) {
			this._data = data;
			if (!data) return;
			this.lb_date.text = Sync.getTimeStr1(this._data.time * 1000);
			this.lb_time.text = Sync.getTimeShortStr(this._data.time);
			this.lb_money.text = this._data.money;
			this.lb_type.text = WxSaoLeiHBMgr.TYPE_INFO[this._data.type_index + 1].toString();
			this.lb_diff.text = this._data.shouzhi;
			this.lb_diff.color = this._data.shouzhi > 0 ? TeaStyle.COLOR_GREEN : TeaStyle.COLOR_RED;
			this.btn_jh.visible = curType == WxSaoLeiHBJLPage.TYPE_RECIVE_HB;
		}

		private onBtnClick(): void {
			//点击查看红包详情
			this._game.network.call_wxsaoleihb_get_lqjl(this._data.hb_id);
		}
	}
}