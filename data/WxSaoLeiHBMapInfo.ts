/**
* name 
*/
module gamewxsaoleihb.data {
	export class WxsaoleihbMapInfo extends gamecomponent.object.MapInfoT<gamecomponent.object.MapInfoLogObject> {
		//投票倒计时
		static EVENT_HONG_BAO_RAIN_TIME: string = "WxsaoleihbMapInfo.EVENT_HONG_BAO_RAIN_TIME";
		constructor(v: SceneObjectMgr) {
			super(v, () => { return new gamecomponent.object.MapInfoLogObject() });

		}

		//当对象更新发生时
		protected onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_YU_CHAO_LAI_QI_TIME)) {
				this._sceneObjectMgr.event(WxsaoleihbMapInfo.EVENT_HONG_BAO_RAIN_TIME);
			}
		}
	}
}