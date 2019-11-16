/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxsaoleihbPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string = "wxsaoleihb";
		//红包HUD界面
		static PAGE_WXSLHB_HUD: string = "1";
		//红包地图
		static PAGE_WXSLHB_MAP: string = "2";
		//红包记录
		static PAGE_WXSLHB_JL: string = "3";
		//红包余额明细
		static PAGE_WXSLHB_YEMX: string = "4";
		//发红包界面
		static PAGE_WXSLHB_FAHB: string = "5";
		//红包详情
		static PAGE_WXSLHB_HB_INFO: string = "6";
		//房间信息
		static PAGE_WXSLHB_HB_ROOM_INFO: string = "7";
		//余额不足
		static PAGE_WXSLHB_HB_YEBZ: string = "8";
		//翻转提示
		static PAGE_WXSLHB_HB_FZTS: string = "9";
		//红包游戏规则界面
		static PAGE_WXSLHB_RULE: string = "101";

		static ROOM_INFO: { [key: number]: any } = {};

		static myinit(str: string) {
			super.myinit(str);
			WxSaoLeiHBClip.init()
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_HUD] = WxSaoLeiHBPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_MAP] = WxSaoLeiHBMapPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_JL] = WxSaoLeiHBJLPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_YEMX] = WxSaoLeiHBYEMXPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_FAHB] = WxSaoLeiHBFAHBPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_RULE] = WxSaoLeiHBRulePage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_HB_INFO] = WxSaoLeiHBInfoPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_HB_ROOM_INFO] = WxSaoLeiHBRoomInfoPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_HB_YEBZ] = WxSaoLeiHBYEBZPage;
			PageDef._pageClassMap[WxsaoleihbPageDef.PAGE_WXSLHB_HB_FZTS] = WxSaoLeiHBFZTSPage;

			this.ROOM_INFO[Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_1] = { mode: Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_1, name: "小资场", minGold: 1 };
			this.ROOM_INFO[Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_2] = { mode: Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_2, name: "老板场", minGold: 10 };
			this.ROOM_INFO[Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_3] = { mode: Web_operation_fields.GAME_ROOM_CONFIG_WXSAOLEIHB_3, name: "富豪场", minGold: 40 };

			this["__needLoadAsset"] = [
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
				DatingPath.atlas_dating_ui + "qifu.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "guize.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "hud.atlas",
				Path_game_wxSaoLeiHB.atlas_game_ui + "saolei.atlas",
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_wxSaoLeiHB.music_wxsaoleihb + "back.mp3",
					Path_game_wxSaoLeiHB.music_wxsaoleihb + "btn.mp3",
					Path_game_wxSaoLeiHB.music_wxsaoleihb + "colseReturn.mp3",
					Path_game_wxSaoLeiHB.music_wxsaoleihb + "hongbao_tan.mp3",
					Path_game_wxSaoLeiHB.music_wxsaoleihb + "newHongbao.mp3",
					Path_game_wxSaoLeiHB.music_wxsaoleihb + "no_zhonglei.mp3",
					Path_game_wxSaoLeiHB.music_wxsaoleihb + "zhonglei.mp3",
				])
			}
		}
		/**
		 * 根据模式ID获取房间信息
		 * @param mode 模式ID
		 */
		static getRoomInfoByMode(mode: number): any {
			let info = this.ROOM_INFO[mode];
			if (info) {
				return info;
			}
			return null;
		}
	}
}