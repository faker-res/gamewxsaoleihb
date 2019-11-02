/**
*   微信扫雷红包
*/
module gamewxsaoleihb.page {
    import TextFieldU = utils.TextFieldU;
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
    export class WxSaoLeiHBMapPage extends game.gui.base.Page {
        private _viewUI//:ui.nqp.game_ui;
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
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.longhu.LongHuUI');
            this.addChild(this._viewUI);
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("LonghuMapPage");//额外界面控制器
            }

            this._viewUI.mouseThrough = true;
            this._game.playMusic(Path_game_longhu.music_longhu + "lh_bgm.mp3");
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