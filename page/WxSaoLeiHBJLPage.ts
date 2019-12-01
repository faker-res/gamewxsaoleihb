/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBJLPage extends game.gui.base.Page {
		static readonly TYPE_GET_HB = 0;//收到红包
		static readonly TYPE_SEND_HB = 1;//发出红包
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLei_JLUI;
		private _curType: number;
		private _wxSaoLeiMgr: WxSaoLeiHBMgr;
		private _wxSaoLeiStory: WxSaoLeiHBStory;
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
			this._wxSaoLeiStory = this._game.sceneObjectMgr.story as WxSaoLeiHBStory;
			if (this._wxSaoLeiStory) {
				this._wxSaoLeiMgr = this._wxSaoLeiStory.wxSaoLeiHBMgr;
			}
			if (this._game.isFullScreen) {
				let diff = 56
				//有刘海
				this._viewUI.box_up.height = 95 + diff;
				this._viewUI.box_di.top = -1 + diff;
			} else {
				this._viewUI.box_up.height = 95;
				this._viewUI.box_di.top = -1;
			}
			if (this._viewUI) {
				this._viewUI.box_main.scaleX = 1.77;
				this._viewUI.box_main.scaleY = 1.77;
			}
		}

		protected onMouseSoudHandle(e: LEvent): any {
			this._game.playSound(this._defaultSoundPath);
			return true;
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.list_info.vScrollBarSkin = "";
			this._viewUI.list_info.scrollBar.elasticDistance = 100;
			this._viewUI.list_info.itemRender = this.createChildren("game_ui.wxsaoleihb.component.WXSaoLei_LB1UI", HBInfoMX);
			this._viewUI.list_info.renderHandler = new Handler(this, this.renderHandler);
			// this._viewUI.tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			// this._viewUI.tab.selectedIndex = 0;
			this._viewUI.box_tab_1.on(LEvent.CLICK, this, this.selectHandler, [0]);
			this._viewUI.box_tab_2.on(LEvent.CLICK, this, this.selectHandler, [1]);
			this.selectHandler(0);
			this._baoBiaoMgr = this._game.datingGame.baobiaoMgr;
			this._baoBiaoMgr.on(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.close);
			this.initView();
			this.onUpdateDataInfo();
			BattleXiangQingMgr.ins.on(BattleXiangQingMgr.RECORD_CHANGE, this, this.openHBInfoPage);
		}

		private _battle_id: string;
		private _game_id: string;
		private _time: number;
		public getDataInfo(battle_id: string, game_id: string, time: number): void {
			this._battle_id = battle_id;
			this._game_id = game_id;
			this._time = time;
			let data = BattleXiangQingMgr.ins.getDataInfo(this._battle_id, this._game_id, this._time)
			this.openHBInfoPage(this._battle_id, data);
		}

		private openHBInfoPage(battleid: string, data: any): void {
			if (!data) return;
			let total_data: any = JSON.parse(data);
			let hb_data = total_data.hb_data;
			let lq_datas = total_data.lq_datas;
			//数据处理
			let lq_data;
			this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_INFO, (page: WxSaoLeiHBInfoPage) => {
				page.setData(hb_data, lq_datas, WxSaoLeiHBInfoPage.TYPE_HB_INFO);
			})
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
			this._dataGetInfoMoney = 0;
			this._dataSendInfoMoney = 0;
			this._dataGetInfo = [];
			this._dataSendInfo = [];
			let dataGetInfo: any = [];
			let dataSendInfo: any = [];
			!date && this._baoBiaoMgr.getData(1, this._game.sync.serverTimeBys, 6);
			let value = this._baoBiaoMgr.getDataInfo(6);
			for (let key in value) {
				if (value.hasOwnProperty(key)) {
					let cc = value[key];
					if (cc) {
						for (let index = 0; index < cc.length; index++) {
							let aa = cc[index];
							if (aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FLHB || aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_GHB || aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_GHB_SETTLE) {
								//领红包或者福利包数据
								dataGetInfo.push(aa);
							} else if (aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FHB || aa.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FHB_SETTLE) {
								//发红包数据
								dataSendInfo.push(aa);
							}
						}
					}
				}
			}
			this._dataGetInfo = this.updateInfo(dataGetInfo, WxSaoLeiHBJLPage.TYPE_GET_HB);
			this._dataSendInfo = this.updateInfo(dataSendInfo, WxSaoLeiHBJLPage.TYPE_SEND_HB);
			//计算钱 发出的红包
			for (var key in this._dataGetInfo) {
				if (this._dataGetInfo.hasOwnProperty(key)) {
					var element = this._dataGetInfo[key];
					this._dataGetInfoMoney += parseFloat(element.get_money);
				}
			}
			//计算钱 收到的红包
			for (var key in this._dataSendInfo) {
				if (this._dataSendInfo.hasOwnProperty(key)) {
					var element = this._dataSendInfo[key];
					this._dataSendInfoMoney += parseFloat(element.get_money);
				}
			}
			if (this._curType == WxSaoLeiHBJLPage.TYPE_GET_HB) {
				this._viewUI.list_info.dataSource = this._dataGetInfo;

			} else if (this._curType == WxSaoLeiHBJLPage.TYPE_SEND_HB) {
				this._viewUI.list_info.dataSource = this._dataSendInfo;

			}
			this.updateUI(this._curType);
		}

		private updateInfo(dataInfo, type: number): Array<any> {
			let dataInfoTotal = [];
			let MONEY_TYPE = type == WxSaoLeiHBJLPage.TYPE_GET_HB ? Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_GHB : Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FHB;
			let SETTLE_TYPE = type == WxSaoLeiHBJLPage.TYPE_SEND_HB ? Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FHB_SETTLE : Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_GHB_SETTLE;
			for (let i = 0; i < dataInfo.length; i++) {
				let cur_get_data = dataInfo[i];
				let cur_get_hb_data;
				if (cur_get_data && cur_get_data.params) {
					let params = JSON.parse(cur_get_data.params);
					cur_get_hb_data = params;
				}
				let obj_new = {
					get_data: cur_get_data,
					hb_data: cur_get_hb_data,
					get_money: 0,	//领取到的数据
					pf_money: 0,	//赔付的数据
				}
				if (cur_get_data.type == MONEY_TYPE) {
					obj_new.get_money = cur_get_data.shouzhi;
					//领发红包
					let index = this.getInfoIndex(dataInfoTotal, cur_get_hb_data);
					if (index > -1) {
						let obj_old = dataInfoTotal[index];
						obj_old.get_money += obj_new.get_money;
						dataInfoTotal[index] = obj_old;
					} else {
						dataInfoTotal.push(obj_new);
					}
				} else if (cur_get_data.type == SETTLE_TYPE) {
					obj_new.pf_money =cur_get_data.shouzhi;
					//领发红包结算
					let index = this.getInfoIndex(dataInfoTotal, cur_get_hb_data);
					if (index > -1) {
						//数据跟时间以第一条得结算的为准
						let obj_old_settle = dataInfoTotal[index];
						obj_old_settle.pf_money += obj_new.pf_money;
						dataInfoTotal[index] = obj_old_settle;
					} else {
						dataInfoTotal.push(obj_new);
					}
				} else if (cur_get_data.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FLHB) {
					obj_new.get_money = obj_new.get_data.shouzhi;
					//福利红包
					dataInfoTotal.push(obj_new);
				}
			}
			return dataInfoTotal;
		}

		//查找对应的数据
		private getInfoIndex(dataInfoTotal, cur_get_hb_data): number {
			let index = -1
			for (let j = 0; j < dataInfoTotal.length; j++) {
				let cur_data = dataInfoTotal[j];
				if (cur_data.hb_data && cur_get_hb_data && cur_data.hb_data.hb_id_str == cur_get_hb_data.hb_id_str) {
					index = j;
				}
			}
			return index;
		}

		private renderHandler(cell: HBInfoMX, index: number) {
			if (cell) {
				cell.dataSource["index"] = index;
				cell.setData(this._game, cell.dataSource, this._curType, this);
			}
		}

		private selectHandler(index: number): void {
			this._game.playSound(this._defaultSoundPath);
			this._curType = index;
			this._viewUI.btn_tab_1.selected = this._curType == WxSaoLeiHBJLPage.TYPE_GET_HB;
			this._viewUI.btn_tab_2.selected = this._curType == WxSaoLeiHBJLPage.TYPE_SEND_HB;
			this.updateUI(index);
		}

		private updateUI(index: number): void {
			if (index == WxSaoLeiHBJLPage.TYPE_GET_HB) {
				this._viewUI.lb_type.text = "共收";
				this._viewUI.lb_num_money.text = Math.abs(this._dataGetInfoMoney).toFixed(2);
				this._viewUI.lb_num_hb.text = this._dataGetInfo.length.toString();
				this._viewUI.lb_end_type.text = "赔付/获赔";
			} else if (index == WxSaoLeiHBJLPage.TYPE_SEND_HB) {
				this._viewUI.lb_type.text = "共发";
				this._viewUI.lb_num_money.text = Math.abs(this._dataSendInfoMoney).toFixed(2);
				this._viewUI.lb_num_hb.text = this._dataSendInfo.length.toString();
				this._viewUI.lb_end_type.text = "获赔金额";
			}
			if (this._curType == WxSaoLeiHBJLPage.TYPE_GET_HB) {
				this._viewUI.list_info.dataSource = this._dataGetInfo;
			} else if (this._curType == WxSaoLeiHBJLPage.TYPE_SEND_HB) {
				this._viewUI.list_info.dataSource = this._dataSendInfo;
			}
		}

		public close(): void {
			if (this._viewUI) {
				BattleXiangQingMgr.ins.off(BattleXiangQingMgr.RECORD_CHANGE, this, this.openHBInfoPage);
				this._baoBiaoMgr.off(BaoBiaoMgr.EVENT_CHANGE, this, this.onUpdateDataInfo);
			}
			super.close();
		}
	}

	class HBInfoMX extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI {
		private _game: Game;
		private _data: any;
		private _page: WxSaoLeiHBJLPage
		constructor() {
			super();
		}
		setData(game: Game, data: any, curType: number, page: WxSaoLeiHBJLPage) {
			if (!page) return;
			this._page = page;
			if (!game) return;
			this._game = game;
			this._data = data;
			if (!data) return;
			this.lb_date.text = Sync.getTimeStr1(this._data.get_data.time * 1000);
			this.lb_time.text = Sync.getTimeShortStr(this._data.get_data.time * 1000);
			this.lb_money.text = Math.abs(this._data.get_money).toFixed(2);
			this.lb_diff.text = this._data.pf_money.toFixed(2);
			this.btn_jh.visible = curType == WxSaoLeiHBJLPage.TYPE_SEND_HB;
			if (curType == WxSaoLeiHBJLPage.TYPE_SEND_HB) {
				//发出的红包
				if (this._data.hb_data) {
					this.lb_type.text = this._data.hb_data.hb_name;
				}
				this.on(LEvent.CLICK, this, this.onBtnClick);
			} else {
				if (this._data.get_data.type == Web_operation_fields.USE_MONEY_LOG_TYPE_WXSLHB_FLHB) {
					this.lb_type.text = "红包雨";
				} else {
					if (this._data.hb_data) {
						this.lb_type.text = this._data.hb_data.hb_name;
					}
				}
				this.off(LEvent.CLICK, this, this.onBtnClick);
			}
		}

		private onBtnClick(): void {
			//点击查看红包详情,这里走后台
			this._page.getDataInfo(this._data.hb_data.hb_id_str.toString(), WxsaoleihbPageDef.GAME_NAME, this._data.hb_data.create_time);
		}
	}
}
