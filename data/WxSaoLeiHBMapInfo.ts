/**
* name 
*/
module gamewxsaoleihb.data {
	export class WxSaoLeiHBMapInfo extends gamecomponent.object.MapInfoT<LonghuData> {
		//地图状态变更
		static EVENT_STATUS_CHECK: string = "WxSaoLeiHBMapInfo.EVENT_STATUS_CHECK";
		//战斗体更新
		static EVENT_BATTLE_CHECK: string = "WxSaoLeiHBMapInfo.EVENT_BATTLE_CHECK";
		//回合数变化
		static EVENT_GAME_TURN_CHANGE: string = "WxSaoLeiHBMapInfo.EVENT_GAME_TURN_CHANGE";
		//牌局号
		static EVENT_GAME_NO: string = "WxSaoLeiHBMapInfo.EVENT_GAME_NO";
		//倒计时时间戳更新
		static EVENT_COUNT_DOWN: string = "WxSaoLeiHBMapInfo.EVENT_COUNT_DOWN";
		//游戏记录更新
		static EVENT_GAME_RECORD: string = "WxSaoLeiHBMapInfo.EVENT_GAME_RECORD";
		//上庄列表更新
		static EVENT_SZ_LIST: string = "WxSaoLeiHBMapInfo.EVENT_SZ_LIST";
		//入座列表更新
		static EVENT_SEATED_LIST: string = "WxSaoLeiHBMapInfo.EVENT_SEATED_LIST";
		//地图庄家改变
		static EVENT_MAP_BANKER_CHANGE: string = "WxSaoLeiHBMapInfo.EVENT_MAP_BANKER_CHANGE";
		//牌库数量变化
		static EVENT_CARD_POOL_CHANGE: string = "WxSaoLeiHBMapInfo.EVENT_CARD_POOL_CHANGE";
		//大路记录变化
		static EVENT_ROAD_RECORD: string = "WxSaoLeiHBMapInfo.EVENT_ROAD_RECORD";

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new LonghuData() });

		}

		//当对象更新发生时
		protected onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE1)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_GAME_TURN_CHANGE);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_COUNT_DOWN);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_UINT16)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_MAP_BANKER_CHANGE, 1);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_UINT16)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_CARD_POOL_CHANGE);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_NO)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_GAME_NO);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_GAME_RECORD)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_GAME_RECORD);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_SZ_LIST)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_SZ_LIST);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_SEATED_LIST)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_SEATED_LIST);
			}
			if (isNew || strmask.GetBit(MapField.MAP_STR_ROAD_RECORD)) {
				this._sceneObjectMgr.event(WxSaoLeiHBMapInfo.EVENT_ROAD_RECORD);
			}
		}
	}
}