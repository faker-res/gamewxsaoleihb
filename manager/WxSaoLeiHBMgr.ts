/**
* name 
*/
module gamewxsaoleihb.manager {
	export class WxSaoLeiHBMgr extends gamecomponent.managers.PlayingCardMgrBase<LonghuData>{
		static readonly MAPINFO_OFFLINE: string = "WxSaoLeiHBMgr.MAPINFO_OFFLINE";//假精灵
		static readonly DEAL_OVER: string = "WxSaoLeiHBMgr.DEAL_OVER";//发牌结束
		static readonly SHOW_OVER: string = "WxSaoLeiHBMgr.SHOW_OVER";//开牌结束

		constructor(game: Game) {
			super(game)
		}
	}

}