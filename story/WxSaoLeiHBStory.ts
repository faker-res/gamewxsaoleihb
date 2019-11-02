/**
* name 微信扫雷红包
*/
module gamewxsaoleihb.story {
	const enum MAP_STATUS {
		PLAY_STATUS_NONE = 0, // 准备阶段
		PLAY_STATUS_GAMESTART = 1, // 游戏开始
		PLAY_STATUS_PUSH_CARD = 2, // 发牌阶段
		PLAY_STATUS_BET = 3,// 下注阶段
		PLAY_STATUS_STOP_BET = 4,// 停止下注阶段
		PLAY_STATUS_SHOW_CARD = 5, // 开牌阶段
		PLAY_STATUS_SETTLE = 6, // 结算阶段
		PLAY_STATUS_SHOW_INFO = 7, // 显示结算信息阶段
		PLAY_STATUS_RELAX = 8, // 休息阶段
	}
	export class WxSaoLeiHBStory extends gamecomponent.story.StoryBaiRenBase {
		private _wxSaoLeiHBMgr: WxSaoLeiHBMgr;
		private _winnerIndex: number;
		private _curStatus: number;
		private _niuMapInfo: WxSaoLeiHBMapInfo;
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
			this._game.uiRoot.HUD.open(WxSaoLeiHBPageDef.PAGE_WXSLHB_MAP);
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._niuMapInfo = mapinfo as WxSaoLeiHBMapInfo;
			if (mapinfo) {
				this.onUpdateState();
				this.onUpdateBattle();
			}
		}

		private onUpdateState(): void {
			if (!this._niuMapInfo) return;
			let mapStatus = this._niuMapInfo.GetMapState();
			if (this._curStatus == mapStatus) return;
			this._curStatus = mapStatus;
			switch (this._curStatus) {
				case MAP_STATUS.PLAY_STATUS_NONE:// 准备阶段
					this.serverClose();
					break;
				case MAP_STATUS.PLAY_STATUS_GAMESTART:// 游戏开始

					break;
				case MAP_STATUS.PLAY_STATUS_PUSH_CARD:// 发牌阶段
					break;
				case MAP_STATUS.PLAY_STATUS_BET:// 下注阶段
					break;
				case MAP_STATUS.PLAY_STATUS_STOP_BET:// 停止下注阶段
					break;
				case MAP_STATUS.PLAY_STATUS_SHOW_CARD:// 开牌阶段
					break;
				case MAP_STATUS.PLAY_STATUS_SETTLE:// 结算阶段
					break;
				case MAP_STATUS.PLAY_STATUS_SHOW_INFO:// 显示结算信息阶段
					break;
				case MAP_STATUS.PLAY_STATUS_RELAX:// 休息阶段
					this._isShow = false;
					this._openCards = [];
					break;
			}
		}

		// //战斗结构体 出牌
		private _index: number = 0;
		private onUpdateBattle(): void {
			if (!this._niuMapInfo) return;
			let battleInfoMgr = this._niuMapInfo.battleInfoMgr;
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
			this._niuMapInfo = null;
		}

		update(diff: number) {

		}
	}
}