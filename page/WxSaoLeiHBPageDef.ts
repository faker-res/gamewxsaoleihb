/**
* name 
*/
module gamewxsaoleihb.page {
	export class WxSaoLeiHBPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		//红包HUD界面
		static PAGE_WXSLHB_HUD: string = "1";
		//红包地图UI
		static PAGE_WXSLHB_MAP: string = "2";
		//红包记录
		static PAGE_WXSLHB_JL: string = "3";
		//红包余额明细
		static PAGE_WXSLHB_YEMX: string = "4";
		//发红包界面
		static PAGE_WXSLHB_FAHB: string = "5";
		//红包详情
		static PAGE_WXSLHB_HB_INFO: string = "6";
		//红包游戏规则界面
		static PAGE_WXSLHB_RULE: string = "101";


		static myinit(str: string) {
			super.myinit(str);
			WxSaoLeiHBClip.init()
			PageDef._pageClassMap[WxSaoLeiHBPageDef.PAGE_WXSLHB_HUD] = WxSaoLeiHBPage;
			PageDef._pageClassMap[WxSaoLeiHBPageDef.PAGE_WXSLHB_MAP] = WxSaoLeiHBMapPage;
			PageDef._pageClassMap[WxSaoLeiHBPageDef.PAGE_WXSLHB_JL] = WxSaoLeiHBJLPage;
			PageDef._pageClassMap[WxSaoLeiHBPageDef.PAGE_WXSLHB_YEMX] = WxSaoLeiHBYEMXPage;
			PageDef._pageClassMap[WxSaoLeiHBPageDef.PAGE_WXSLHB_FAHB] = WxSaoLeiHBFAHBPage;
			PageDef._pageClassMap[WxSaoLeiHBPageDef.PAGE_WXSLHB_RULE] = WxSaoLeiHBRulePage;
			PageDef._pageClassMap[WxSaoLeiHBPageDef.PAGE_WXSLHB_HB_INFO] = WxSaoLeiHBInfoPage;


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
				Path_game_wxSaoLeiHB.atlas_game_ui + "sk.atlas",
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
	}
}