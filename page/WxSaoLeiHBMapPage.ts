/**
*   微信扫雷红包
*/
module gamewxsaoleihb.page {
    import TextFieldU = utils.TextFieldU;
    const enum MAP_STATUS {
        PLAY_STATUS_NONE = 0, // 准备阶段
    }
    export class WxSaoLeiHBMapPage extends game.gui.base.Page {
        private _viewUI:ui.nqp.game_ui.wxsaoleihb.WXSaoLeiUI;
        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._delta = 1000;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "tuichu.atlas",
                DatingPath.atlas_dating_ui + "qifu.atlas",
                Path_game_wxSaoLeiHB.atlas_game_ui + "guize.atlas",
                Path_game_wxSaoLeiHB.atlas_game_ui + "hud.atlas",
                Path_game_wxSaoLeiHB.atlas_game_ui + "saolei.atlas",
                Path_game_wxSaoLeiHB.atlas_game_ui + "sk.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLeiUI');
            this.addChild(this._viewUI);
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("WxSaoLeiHBMapPage");//额外界面控制器
            }

            this._viewUI.mouseThrough = true;
            // this._game.playMusic(Path_game_wxSaoLeiHB.music_wxsaoleihb + "lh_bgm.mp3");
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
        }

        private _curDiffTime: number;
        update(diff: number) {
            super.update(diff);
        }

        //帧间隔心跳
        deltaUpdate() {
            
        }

        public close(): void {
            if (this._viewUI) {
                this._game.stopAllSound();
                this._game.stopMusic();
            }
            super.close();
        }
    }
}