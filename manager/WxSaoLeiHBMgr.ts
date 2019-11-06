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
		public static readonly DUOLEI_BET: Array<number> = [1.2, 1.05, 1.28, 1.8, 2.5];
		// static readonly MAPINFO_OFFLINE: string = "WxSaoLeiHBMgr.MAPINFO_OFFLINE";//假精灵
		public static readonly MAP_HB_INFO = "WxSaoLeiHBMgr.MAP_HB_INFO";//红包数据
		public static readonly MAP_HB_LQ_INFO = "WxSaoLeiHBMgr.MAP_HB_LQ_INFO";//红包领取数据
		public static readonly HB_ADD: number = 1;	//红包新增
		public static readonly HB_REMOVE: number = 2;	//红包移除
		public static readonly HB_UPDATE: number = 3;	//红包更新
		public static readonly HB_LQ_UPDATE: number = 4;	//红包领取数据更新
		public static readonly HB_TIME: number = 90;	//红包持续时间

		private _hb_data: Array<any> = [];
		constructor(game: Game) {
			super(game)
			this._game.network.addHanlder(Protocols.SMSG_WXSAOLEIHB_INFO, this, this.onOptHandler);
			this._game.network.addHanlder(Protocols.SMSG_WXSAOLEIHB_SEND_LQJL, this, this.onOptHandler);
		}

		public get hbData() {
			return this._hb_data;
		}

		private onOptHandler(optcode: number, msg: any): void {
			switch (optcode) {
				case Protocols.SMSG_WXSAOLEIHB_INFO:
					//筛选数据，没有加进去，有就更新这个红包状态
					if (msg.info == "") return;
					let obj = JSON.parse(msg.info);
					if (msg.op_type == WxSaoLeiHBMgr.HB_ADD) {
						//新增
						this._hb_data.push(obj);
					} else if (msg.op_type == WxSaoLeiHBMgr.HB_REMOVE) {
						//移除
						let index = this.findHBDataById(obj.hb_id);
						this._hb_data.splice(index, 1);
					} else if (msg.op_type == WxSaoLeiHBMgr.HB_UPDATE) {
						//更新
						let index = this.findHBDataById(obj.hb_id);
						this._hb_data[index] = obj;
					}
					this.event(WxSaoLeiHBMgr.MAP_HB_INFO, [msg.op_type, obj]);
					break
				case Protocols.SMSG_WXSAOLEIHB_SEND_LQJL:
					if (msg.inffo == "") return
					let lq_datas = JSON.parse(msg.lq_datas);
					this.event(WxSaoLeiHBMgr.MAP_HB_LQ_INFO, [msg.op_type, lq_datas]);
					break
			}

		}

		//查找指定红包
		private findHBDataById(hb_id: number): number {
			for (let i = 0; i < this._hb_data.length; i++) {
				let hb_data = this._hb_data[i];
				if (!hb_data) continue;
				if (hb_data.hb_id == hb_id) {
					return i;
				}
			}
			return
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
			let subZLMonney  //扣钱数
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
		//预中雷判断
		isYuZLJudge(lq_data_arr: Array<any>, ld_str: any): boolean {
			if (!lq_data_arr || lq_data_arr.length < 0) return false;
			let ld_arr = ld_str ? ld_str.split(",") : "";
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
			if (!lq_datas || lq_datas.length < 0) return;
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
			Laya.timer.clearAll(this);
		}
	}

}