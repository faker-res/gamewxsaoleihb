/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBInfoPage extends game.gui.base.Page {
		public static readonly TYPE_HB_RAIN: number = 1	//红包雨
		public static readonly TYPE_HB_INFO: number = 2	//红包详情界面
		private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLeiHB_InfoUI;
		private _mianSiJinPaiData: any;
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
			this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLeiHB_InfoUI');
			this.addChild(this._viewUI);
			this._mianSiJinPaiData = {
				status: 2,
				hb_id: "",
				uid: "",
				oid: "",
				pf_money: 0,
				name: "",
				lq_head: 0,
				lq_time: 0,
				lq_money: 0,
				sp_money_num: 0,
			};
			if (this._viewUI) {
				this._viewUI.box_main.scaleX = 1.77;
				this._viewUI.box_main.scaleY = 1.77;
			}
			if (this._game.isFullScreen) {
				let diff = 88
				//有刘海
				this._viewUI.box_main.top = -1 + diff;
			} else {
				this._viewUI.box_main.top = -1;
			}
			this._viewUI.hb_info_list.vScrollBarSkin = "";
			this._viewUI.hb_info_list.scrollBar.elasticDistance = 100;
			this._viewUI.hb_info_list.itemRender = this.createChildren("game_ui.wxsaoleihb.component.WXSaoLei_LBUI", HBLingQuMX);
			this._viewUI.hb_info_list.renderHandler = new Handler(this, this.renderHandler);
			this.initClip();
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.btn_back.on(LEvent.CLICK, this, this.close);
			this._viewUI.lb_hbjl.on(LEvent.CLICK, this, this.openHbJL);
		}

		private _moneyNum: ClipUtil;
		private initClip(): void {
			if (!this._moneyNum) {
				this._moneyNum = new ClipUtil(WxSaoLeiHBClip.MONEY_FONT);
				this._moneyNum.centerX = this._viewUI.clip_hb_num.centerX;
				this._moneyNum.top = this._viewUI.clip_hb_num.top;
				this._viewUI.clip_hb_num.parent.addChild(this._moneyNum);
				this._viewUI.clip_hb_num.removeSelf();
			}
		}

		//打开红包记录界面
		private openHbJL(): void {
			this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_JL);
		}

		private _hbData: any
		private _lqData: any
		private _story: WxSaoLeiHBStory;
		private _maxIndex: number;
		private _isComlete: boolean = false;//当前这个红包是否都领完了
		setData(hbData: any, lqData: any, type: number, money: number = 0): void {
			this._viewUI.box_info.visible = type == WxSaoLeiHBInfoPage.TYPE_HB_INFO;
			this._viewUI.box_rain.visible = type == WxSaoLeiHBInfoPage.TYPE_HB_RAIN;
			if (type == WxSaoLeiHBInfoPage.TYPE_HB_RAIN) {
				if (money <= 0) return;
				this._viewUI.rain_money.text = money.toString();
			} else if (type == WxSaoLeiHBInfoPage.TYPE_HB_INFO) {
				if (!hbData) return;
				let story: WxSaoLeiHBStory = this._game.sceneObjectMgr.story;
				this._hbData = hbData;
				if (lqData) {
					this._isComlete = lqData.length == hbData.bao_num;
					this._lqData = lqData;
					this._lqData = this.optLqData(this._lqData);
					this._lqData.sort((a: any, b: any) => {
						return b.lq_time - a.lq_time
					})
					//查找最大值
					this._maxIndex = story.wxSaoLeiHBMgr.searchMaxMoney(this._lqData);
					this._viewUI.hb_info_list.dataSource = this._lqData;
				} else {
					this._lqData = [];
					this._lqData = this.optLqData(this._lqData);
					this._viewUI.hb_info_list.dataSource = this._lqData;
				}
				this._moneyNum.setText(this._hbData.money);
				this._viewUI.lb_yuan.centerX = this._moneyNum.centerX + this._moneyNum.width;
				this._viewUI.lb_yuan.y = this._moneyNum.y + this._moneyNum.height - this._viewUI.lb_yuan.height;
				this._viewUI.img_head.skin = TongyongUtil.getHeadUrl(this._hbData.head);
				this._viewUI.lb_name.text = this._hbData.name;
				this._viewUI.box_player.width = this._viewUI.img_head.width + this._viewUI.lb_name.width;
				this._viewUI.lb_hb_num.text = this._hbData.bao_num + "个红包";
				this._viewUI.lb_ld.text = "雷号:" + this._hbData.ld_str
				this._viewUI.lb_lq.text = StringU.substitute("领取{0}/{1}个", this._lqData ? this._lqData.length : "0", this._hbData.bao_num);
			}
		}

		//领取数据操作
		private optLqData(data: Array<any>): any {
			let lq_datas = [].concat(data);
			let isHaveMainSi = false;
			let index_mian = 0;
			//如果没有免死金牌数据，客户端造假
			let short_time = 0;	//最短时间
			for (let key in lq_datas) {
				if (lq_datas.hasOwnProperty(key)) {
					let lq_data = lq_datas[key];
					if (!short_time) short_time = lq_data.lq_time;
					if (short_time > lq_data.lq_time) short_time = lq_data.lq_time;
					if (lq_data && lq_data.status == 2) {
						isHaveMainSi = true;
						index_mian = Number(key);
					}
				}
			}
			if (isHaveMainSi) {
				//修改时间
				lq_datas[index_mian].lq_time = short_time - 1;
			} else {
				//添加免死金牌数据
				if (!short_time) short_time = this._game.sync.serverWebTimeBys;
				this._mianSiJinPaiData.lq_time = short_time - 1;
				lq_datas.push(this._mianSiJinPaiData);
			}
			return lq_datas;
		}

		private renderHandler(cell: HBLingQuMX, index: number) {
			if (cell) {
				let isMax = index == this._maxIndex;
				cell.setData(this._game, cell.dataSource, isMax, this._isComlete);
			}
		}

		public close(): void {
			if (this._viewUI) {
				if (this._moneyNum) {
					this._moneyNum.removeSelf();
					this._moneyNum.destroy();
					this._moneyNum = null;
				}
			}
			super.close();
		}
	}
	class HBLingQuMX extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI {
		private _game: Game;
		private _data: any;
		private _mainPlayer: PlayerData;
		private _mainPlayerUid;
		constructor() {
			super();
		}
		setData(game: Game, data: any, isMax: boolean, isComplete: boolean) {
			this._data = data;
			if (!data) return;
			this._game = game;
			if (!this._game) return;
			this.left = -1;
			this.right = -1;
			this._mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (this._mainPlayer) this._mainPlayerUid = this._mainPlayer.GetUserId();
			let isSelf = data.uid && this._mainPlayerUid && Number(data.uid) == Number(this._mainPlayerUid);
			let color = isSelf ? "#f76a4a" : "#000000";
			//免死金牌
			this.img_head.skin = this._data.status == 1 ? TongyongUtil.getHeadUrl(this._data.lq_head) : Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_msjp.png";
			this.lb_time.text = Sync.getTimeShortStr(this._data.lq_time * 1000);
			this.lb_name.color = color;
			this.lb_name.strokeColor = color;
			this.lb_name.text = this._data.status == 1 ? this._data.name : "免死金牌";
			if (isComplete || isSelf) {
				let lq_money: number = this._data.lq_money
				this.lb_money.text = lq_money.toFixed(2);
				//是否中雷
				this.img_zl.visible = this._data.pf_money > 0;
				if (isComplete) {
					//手气最佳
					this.img_sqzj.visible = isMax;
					this.img_sqzj.right = this.img_zl.visible ? 133 : 53;
				} else {
					this.img_sqzj.visible = false;
				}
			} else {
				//未完成且不是自己
				this.lb_money.text = "***";
				this.img_zl.visible = false;
				this.img_sqzj.visible = false;
			}
		}
	}
}