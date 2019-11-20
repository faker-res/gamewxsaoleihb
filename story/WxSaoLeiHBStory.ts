/**
* name 微信扫雷红包
*/
module gamewxsaoleihb.story {
	const enum MAP_STATUS {
	}
	export class WxsaoleihbStory extends gamecomponent.story.StoryBaiRenBase {
		private _wxSaoLeiHBMgr: WxSaoLeiHBMgr;
		private _winnerIndex: number;
		private _curStatus: number;
		private _wxsaoleihbMapInfo: WxSaoLeiHBMapInfo;
		private _openCards: Array<any> = [];
		private _isShow: boolean;

		constructor(v: Game, mapid: string, maplv: number) {
			super(v, mapid, maplv);
			this.init();
		}

		get wxSaoLeiHBMgr() {
			return this._wxSaoLeiHBMgr;
		}

		init() {
			if (!this._wxSaoLeiHBMgr) {
				this._wxSaoLeiHBMgr = new WxSaoLeiHBMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;
			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			Laya.stage.screenMode = Stage.SCREEN_VERTICAL;
			WebConfig.setMyOrientation(false);
			this._game.uiRoot.HUD.open(WxsaoleihbPageDef.PAGE_WXSLHB_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._wxsaoleihbMapInfo = mapinfo as WxSaoLeiHBMapInfo;
			if (mapinfo) {
				this.onUpdateState();
				this.onUpdateBattle();
			}
		}

		private onUpdateState(): void {
			if (!this._wxsaoleihbMapInfo) return;
			let mapStatus = this._wxsaoleihbMapInfo.GetMapState();
			if (this._curStatus == mapStatus) return;
			this._curStatus = mapStatus;
		}

		// //战斗结构体 出牌
		private _index: number = 0;
		private onUpdateBattle(): void {
			if (!this._wxsaoleihbMapInfo) return;
			let battleInfoMgr = this._wxsaoleihbMapInfo.battleInfoMgr;
			for (let i: number = 0; i < battleInfoMgr.info.length; i++) {
				let info = battleInfoMgr.info[i];
			}
		}

		enterMap() {
			//各种判断
			this._game.network.call_match_game(this._mapid, this.maplv);
			return true;
		}

		leavelMap() {
			//各种判断
			Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
			WebConfig.setMyOrientation(true);
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			// this._game.sceneObjectMgr.off(WxSaoLeiHBMapInfo.EVENT_BATTLE_CHECK, this, this.onUpdateBattle);
			this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			if (this._wxSaoLeiHBMgr) {
				this._wxSaoLeiHBMgr.clear();
				this._wxSaoLeiHBMgr = null;
			}
			this._wxsaoleihbMapInfo = null;
		}

		update(diff: number) {

		}
	}
}