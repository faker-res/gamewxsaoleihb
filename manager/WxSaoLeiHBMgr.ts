/**
* name 
*/
module gamewxsaoleihb.manager {
	export class WxSaoLeiHBMgr extends gamecomponent.managers.BaseMgr {
		//红包发放范围
		public static readonly MIN_TEMP: any = [1, 10, 40];
		public static readonly MAX_TEMP: any = [3, 30, 800];
		public static readonly TYPE_DANLEI = 1;//单雷
		public static readonly TYPE_DUOLEI = 2;//多雷
		public static readonly BAO_NUMS: Array<number> = [7, 9];//红包数
		public static readonly LEI_MAX_NUM: number = 10;//最大雷点数
		public static readonly LEI_HAO: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];//雷号
		public static readonly ALL_GAME_ROOM_CONFIG_ID = [252, 253, 254];// 可进入的maplv
		public static readonly GMAE_ROOME_NAME = ["小资场", "老板场", "富豪场"];
		public static readonly DANLEI_BET: Array<number> = [1.6, 1.2];
		public static readonly DUOLEI_BET: Array<number> = [1.2, 1.05, 1.28, 1.8, 2.5, 2.5, 2.5, 2.5, 2.5];
		public static readonly MAP_HB_INFO = "WxSaoLeiHBMgr.MAP_HB_INFO";//红包数据
		public static readonly MAP_HB_LQ_INFO = "WxSaoLeiHBMgr.MAP_HB_LQ_INFO";//红包领取数据详情
		public static readonly MAP_HB_LQ_MSG = "WxSaoLeiHBMgr.MAP_HB_LQ_MSG";//红包领取数据消息
		public static readonly HB_TIME: number = 90;	//红包持续时间

		public static readonly HB_STATE_ING: number = 1;
		public static readonly HB_STATE_END: number = 2;

		private _hb_data: Array<any> = [];	//红包总数据
		public get hbData() {
			return this._hb_data;
		}
		private _self_hb_data: Array<any> = [];//自己发的红包数据
		public get selfHbData() {
			return this._self_hb_data;
		}
		public pf_data: Array<any> = [];	//预中雷赔付数据{hb_id:,pf_money:}
		public static readonly PF_INFO_UPDATE = "WxSaoLeiHBMgr.PF_INFO_UPDATE";
		public self_hb_lqjl: Array<any> = []	//自己红包领取记录{领取数据}
		public self_show_settle_dl_info: Array<any> = [];//多雷结算显示记录显示数据{红包id}
		public self_hb_show: Array<any> = [];//自己的红包结算记录显示数据{红包id}
		private _mainPlayer: PlayerData;
		private _mainPlayerUid: string;
		constructor(game: Game) {
			super(game)
			this._game.network.addHanlder(Protocols.SMSG_WXSAOLEIHB_INFO, this, this.onOptHandler);
			this._game.network.addHanlder(Protocols.SMSG_WXSAOLEIHB_SEND_LQJL, this, this.onOptHandler);
			this._game.network.addHanlder(Protocols.SMSG_WXSAOLEIHB_LQ_INFO, this, this.onOptHandler);
			this._mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (this._mainPlayer) this._mainPlayerUid = this._mainPlayer.GetUserId();
		}


		private onOptHandler(optcode: number, msg: any): void {
			switch (optcode) {
				case Protocols.SMSG_WXSAOLEIHB_INFO:
					//红包数据
					let hb_data
					if (msg.hb_info != "") {
						try {
							hb_data = JSON.parse(msg.hb_info);
						} catch (error) {
							logd('parse WxSaoLeiHBMgr HB Data fail');
						}
					} else {
						hb_data = ""
					}
					if (!hb_data) return;
					if (msg.op_type == GlobalDef.WXSAOLEI_HB_ADD) {
						//新增
						for (var key in hb_data) {
							if (hb_data.hasOwnProperty(key)) {
								let cur_hb_data = hb_data[key];
								this.updateTotalHBData(cur_hb_data);
								this.updateSelfHbData(cur_hb_data);
							}
						}
					} else if (msg.op_type == GlobalDef.WXSAOLEI_HB_REMOVE) {
						//移除
						for (var key in hb_data) {
							if (hb_data.hasOwnProperty(key)) {
								let cur_hb_data = hb_data[key];
								let index = this.findHBDataIndexById(cur_hb_data.hb_id);
								this._hb_data.splice(index, 1);
							}
						}
					} else if (msg.op_type == GlobalDef.WXSAOLEI_HB_UPDATE) {
						//更新
						for (var key in hb_data) {
							if (hb_data.hasOwnProperty(key)) {
								let cur_hb_data = hb_data[key];
								if (!cur_hb_data) continue;
								this.updateTotalHBData(cur_hb_data);
								this.updateSelfHbData(cur_hb_data);
							}
						}
					} else if (msg.op_type == GlobalDef.WXSAOLEI_HB_TOTAL) {
						//全量红包下发
						for (var key in hb_data) {
							if (hb_data.hasOwnProperty(key)) {
								let element = hb_data[key];
								if (!element) continue;
								this.updateTotalHBData(element);
								this.updateSelfHbData(element);
							}
						}
					}
					//红包排序下
					this._hb_data.sort((a: any, b: any) => {
						return a.hb_id - b.hb_id
					})
					this.event(WxSaoLeiHBMgr.MAP_HB_INFO, [msg.op_type, hb_data]);
					break
				case Protocols.SMSG_WXSAOLEIHB_SEND_LQJL:
					//当前红包的领取详情
					let lq_datas
					if (msg.lq_datas == "{}") {
						lq_datas = [];
					} else {
						lq_datas = JSON.parse(msg.lq_datas);
					}
					this.event(WxSaoLeiHBMgr.MAP_HB_LQ_INFO, [lq_datas]);
					break
				case Protocols.SMSG_WXSAOLEIHB_LQ_INFO:
					//领取信息
					let lq_data = msg.lq_data != "" ? JSON.parse(msg.lq_data) : "";
					if (!lq_data) return;
					this.event(WxSaoLeiHBMgr.MAP_HB_LQ_MSG, [lq_data]);
					break
			}
		}

		//更新红包总数据
		private updateTotalHBData(single_hb: any): void {
			if (!single_hb) return;
			let cur_hb_data = single_hb;
			let index = this.findHBDataIndexById(cur_hb_data.hb_id);
			if (index > -1) {
				this._hb_data[index] = cur_hb_data;
			} else {
				this._hb_data.push(cur_hb_data);
			}
		}

		//更新自己的红包数据
		private updateSelfHbData(hb_data: any): void {
			if (hb_data.uid && this._mainPlayerUid && Number(hb_data.uid) == Number(this._mainPlayerUid)) {
				let isUpdate: boolean = false
				for (let i = 0; i < this._self_hb_data.length; i++) {
					let cur_hb_data = this._self_hb_data[i];
					if (!cur_hb_data) continue;
					if (cur_hb_data.hb_id == hb_data.hb_id) {
						//更新
						isUpdate = true;
						this._self_hb_data[i] = hb_data;
					}
				}
				if (!isUpdate) {
					//没有更新代表没有这条数据
					this._self_hb_data.push(hb_data);
				}
			}
		}

		//查找赔付数据
		public findPFDataByid(hb_id: number): any {
			for (let i = 0; i < this.pf_data.length; i++) {
				let pfData = this.pf_data[i];
				if (!pfData) continue;
				if (hb_id == pfData.hb_id) {
					return pfData;
				}
			}
		}


		//判断某个红包自己是否操作过
		public isOptHBById(hb_id: number): boolean {
			let is_opt: boolean = false;
			for (let i = 0; i < this.self_hb_lqjl.length; i++) {
				let lq_data = this.self_hb_lqjl[i];
				if (!lq_data) continue;
				if (lq_data.hb_id == hb_id) {
					is_opt = true;
					break
				}
			}
			return is_opt;
		}

		//查找指定红包在数组中的位置
		public findHBDataIndexById(hb_id: number): number {
			for (let i = 0; i < this._hb_data.length; i++) {
				let hb_data = this._hb_data[i];
				if (!hb_data) continue;
				if (hb_data.hb_id == hb_id) {
					return i;
				}
			}
		}
		//查找指定红包数据
		public findHBDataById(hb_id: number): any {
			for (let i = 0; i < this._hb_data.length; i++) {
				let hb_data = this._hb_data[i];
				if (!hb_data) continue;
				if (hb_data.hb_id == hb_id) {
					return hb_data;
				}
			}
		}

		//获取当前红包的赔付钱数
		GetPFMoneyByData(hb_data): number {
			let pf_money = 0;
			if (hb_data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
				pf_money = this.LqDanLeiPFMoney(hb_data);
			} else if (hb_data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
				pf_money = this.LqDuoLeiPFMoney(hb_data);
			}
			return pf_money;
		}

		//单雷赔付计算
		LqDanLeiPFMoney(hb_data): number {
			let hb_money = hb_data.money
			let subZLMonney  //扣钱数
			let loss_bet  //赔率
			let bet_data  //赔率数据
			//获取赔率
			if (hb_data.bao_num == WxSaoLeiHBMgr.BAO_NUMS[0]) {
				loss_bet = WxSaoLeiHBMgr.DANLEI_BET[0]
			}
			else if (hb_data.bao_num == WxSaoLeiHBMgr.BAO_NUMS[1])
				loss_bet = WxSaoLeiHBMgr.DANLEI_BET[1]
			subZLMonney = hb_money * loss_bet
			return subZLMonney
		}

		//多雷赔付计算
		LqDuoLeiPFMoney(hb_data): number {
			let hb_money = hb_data.money
			let subZLMonney: number  //扣钱数
			let loss_bet  //赔率
			let bet_data  //赔率数据
			//根据雷点数进行赔付
			bet_data = WxSaoLeiHBMgr.DUOLEI_BET;
			let ld_nums = hb_data.ld_str.split(',');
			loss_bet = bet_data[ld_nums.length - 1]
			subZLMonney = hb_money * loss_bet;
			return subZLMonney
		}

		//中雷数计算
		ZlShuCalculate(hb_data): Array<number> {
			if (!hb_data) return;
			if (!hb_data.ld_str) return;
			let ld_nums = hb_data.ld_str.split(',');
			if (hb_data.lq_data) return;
			let lq_data = hb_data.lq_data;
			let zl_nums = [];
			for (let i = 0; i < lq_data.length; i++) {
				let cur_lq_data = lq_data[i];
				if (!cur_lq_data) continue;
				if (cur_lq_data.is_zl) {
					zl_nums.push();
				}
			}
			return zl_nums;
		}

		//中雷判断
		isZhongLei(ld_str, money): boolean {
			let ld_arr = ld_str ? ld_str.split(",") : [];
			if (!ld_arr || ld_arr.length < 0) return false;
			let end_num = Number(money.substr(-1, 1));
			for (let i = 0; i < ld_arr.length; i++) {
				let num = ld_arr[i]
				if (num == end_num) {
					return true
				}
			}
			return false
		}

		//预中雷判断
		isYuZLJudge(lq_data_arr: Array<any>, ld_str: any): boolean {
			if (!lq_data_arr || lq_data_arr.length < 0) return false;
			let ld_arr = ld_str ? ld_str.split(",") : [];
			if (!ld_arr || ld_arr.length < 0) return false;
			let copy_ld_arr = [].concat(ld_arr);
			for (let i = 0; i < lq_data_arr.length; i++) {
				let cur_lq_data = lq_data_arr[i];
				if (!cur_lq_data) continue;
				let lq_money: string = cur_lq_data.lq_money.toString();
				let last_num = Number(lq_money.substr(-1, 1));
				let index: number = copy_ld_arr.indexOf(last_num);
				if (index > -1) {
					copy_ld_arr.splice(index, 1);
				}
			}
			return copy_ld_arr.length > 0 ? false : true;
		}

		//寻找一组数据中的最大值
		searchMaxMoney(lq_datas): number {
			if (!lq_datas || lq_datas.length <= 0) return;
			let maxNum = lq_datas[0].lq_money;
			let index = 0;
			for (let i = 1; i < lq_datas.length; i++) {
				let curMoney: number = lq_datas[i].lq_money;
				if (curMoney > maxNum) {
					maxNum = curMoney;
					index = i;
				}
			}
			return index;
		}

		clear(fource?: boolean) {
			this._game.network.removeHanlder(Protocols.SMSG_WXSAOLEIHB_INFO, this, this.onOptHandler);
			this._game.network.removeHanlder(Protocols.SMSG_WXSAOLEIHB_SEND_LQJL, this, this.onOptHandler);
			this._game.network.removeHanlder(Protocols.SMSG_WXSAOLEIHB_LQ_INFO, this, this.onOptHandler);
			Laya.timer.clearAll(this);
		}

		//------------------------红包雨start---------------
		public static CREATE_HB_RAIN_TIME: number = 5;
		public static MAX_HB_NUM = 30;
		private _asset_url = "";
		private _refAsset: RefAsset;
		private _stageWidth;
		private _stageHeight;
		private _widthRate: number = 1;
		private _hbCells: HBCell[] = [];
		private _end_time: number;	//红包雨结束时间
		public isHbRain: boolean = false;
		private _parent: gamewxsaoleihb.page.WxSaoLeiHBMapPage;
		public showHBRain(endTime: number, parent: gamewxsaoleihb.page.WxSaoLeiHBMapPage): void {
			this._asset_url = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_fl.png";
			this._parent = parent;
			if (!this._refAsset) {
				this._refAsset = RefAsset.Get(this._asset_url)
				this._refAsset.retain();
			}
			this._stageWidth = this._game.clientWidth
			this._stageHeight = this._game.clientHeight;
			let refAsset = this._refAsset;
			if (!refAsset.parseComplete) {
				refAsset.once(LEvent.COMPLETE, this, () => {
					this.onStart(endTime);
				});
			}
			else {
				this.onStart(endTime);
			}
		}

		private onStart(endTime) {
			this.isHbRain = true;
			this._end_time = endTime;
		}

		private crateHB() {
			let cur_time = this._game.sync.serverTimeBys;
			if (this._create_time && this._create_time > cur_time) return;
			this._create_time = cur_time + WxSaoLeiHBMgr.CREATE_HB_RAIN_TIME;
			for (let index = 0; index < WxSaoLeiHBMgr.MAX_HB_NUM; index++) {
				Laya.timer.once(100 * index, this, () => {
					let hbcell: HBCell = HBCell.create(this._stageWidth, this._widthRate, this._asset_url, this._parent);
					hbcell.on(LEvent.CLICK, this, this.onBtnHbClick)
					this._hbCells.push(hbcell);
				})
			}
		}

		//红包雨结束
		public end() {
			this.isHbRain = false;
			for (let index = 0; index < this._hbCells.length; index++) {
				let hbcell = this._hbCells[index];
				hbcell.isDestroy = true;
				if (hbcell.isDestroy) {
					this._hbCells.splice(index, 1);
					hbcell.off(LEvent.CLICK, this, this.onBtnHbClick);
					ObjectPools.free(hbcell);
					index--;
				}
			}
		}

		//点击领取福利红包
		private onBtnHbClick(): void {
			if (!this.isHbRain) return;
			let mapPage: gamewxsaoleihb.page.WxSaoLeiHBMapPage = this._game.uiRoot.HUD.getPage(WxsaoleihbPageDef.PAGE_WXSLHB_MAP) as gamewxsaoleihb.page.WxSaoLeiHBMapPage;
			if (mapPage) {
				mapPage.initHBGetUI(gamewxsaoleihb.page.WxSaoLeiHBMapPage.TYPE_HBY, "");
			}
		}

		//每隔5秒创建指定数据的红包
		private _create_time: number = 0;
		update(diff: number) {
			super.update(diff);
			if (!this._hbCells) return;
			if (this._end_time) {
				if (this._end_time <= this._game.sync.serverTimeBys || !this.isHbRain) {
					//红包雨结束
					this.end();
					return;
				} else {
					//红包开启 
					this.crateHB();
				}
			}
			this.updateHbRain(diff);
		}

		private updateHbRain(diff) {
			for (let index = 0; index < this._hbCells.length; index++) {
				let hbcell = this._hbCells[index];
				if (hbcell.isDestroy) {
					this._hbCells.splice(index, 1);
					hbcell.off(LEvent.CLICK, this, this.onBtnHbClick);
					ObjectPools.free(hbcell);
					index--;
				} else {
					hbcell.updatePos(diff, this._stageWidth, this._stageHeight, this._widthRate);
				}
			}
			if (this._widthRate != 1)
				this._widthRate = 1;
		}
		//-----------------------红包雨end----------------
	}
	class HBCell extends Laya.Sprite implements IPoolsObject {
		isDestroy: boolean = false;
		private _stageWidth;
		private _stageHeight;
		private _widthRate: number = 1;
		private _acceleration: number;//加速度
		private _duration: number = 0;
		private _asset_url: string = "";
		private _bornPos: Vector2 = new Vector2();//出生的位置
		private _curPos: Vector2 = new Vector2();//当前位置
		private _parentNode;
		constructor() {
			super();
		}

		poolName: string = "HBCell";
		/**
		 * 进池 （相当于对象dispose函数）
		 */
		intoPool(...arg: any[]): void {
			this.dispose();
		}
		/**
		 * 出池 （相当于对象初始化函数）
		 */
		outPool(...arg: any[]): void {

		}

		static create(width: number, widthRate: number, asset_url: string, parent: any): HBCell {
			let obj = ObjectPools.malloc(HBCell) as HBCell;
			obj.create(width, widthRate, asset_url, parent);
			return obj;
		}

		private create(width: number, widthRate: number, asset_url: string, parent) {
			this.isDestroy = false;
			this._stageWidth = width;
			this._widthRate = widthRate;
			this._asset_url = asset_url;
			this._parentNode = parent;
			this.initTexture();
		}

		private initTexture(): void {
			this.calInfo();
			this._parentNode.addChild(this);
			this.loadImage(this._asset_url);
		}

		private calInfo(): void {
			this._duration = 0;
			//隨機開始x
			this._curPos.x = this._bornPos.x = MathU.randomRange(0, this._stageWidth * this._widthRate);
			//隨機開始y
			this._curPos.y = this._bornPos.y = MathU.randomRange(-1280, -360);
			this.x = this._curPos.x;
			this.y = this._curPos.y;
			//随机加速度
			this._acceleration = 0.3;
		}

		updatePos(diff: number, width: number, height: number, widthRate: number) {
			this._duration += diff;
			this._curPos.x = this._curPos.x * widthRate;
			this._curPos.y = this._curPos.y + this._acceleration * this._duration * (diff / 1000);
			if (this._curPos.y >= height)
				this.isDestroy = true;
			this.x = this._curPos.x;
			this.y = this._curPos.y;
		}

		private dispose() {
			this.removeSelf();
		}
	}
}