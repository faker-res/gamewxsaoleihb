/**
*   微信扫雷红包
*/
module gamewxsaoleihb.page {
    import TextFieldU = utils.TextFieldU;
    const enum MAP_STATUS {
        PLAY_STATUS_NONE = 0, // 准备阶段
    }
    export class WxSaoLeiHBMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLeiUI;
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
            this._viewUI.btn_share.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_hbjl.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_ye.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_fhb.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.lb_yemx.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.lb_ok.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.box_fhb.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_more.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClick);
        }

        private _isShowInfo = false;
        private onBtnClick(e: LEvent): void {
            switch (e.currentTarget) {
                case this._viewUI.btn_add:
                    this._isShowInfo = !this._isShowInfo;
                    this.updateDiBuUI();
                    break
            }
        }

        private updateDiBuUI(): void {
            if (this._isShowInfo) {
                //显示下层
                this._viewUI.box_di1_down.visible = true;
                this._viewUI.box_di1_up.y = 31;
                this._viewUI.img_di1_bg.y = 18;
                this._viewUI.img_di1_bg.height = 207;
            } else {
                this._viewUI.box_di1_down.visible = false;
                this._viewUI.box_di1_up.y = 154;
                this._viewUI.img_di1_bg.y = 144;
                this._viewUI.img_di1_bg.height = 74;
            }
        }

        //更新玩家数据
        updateMainInfo(): void {
            let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let mainPlayerInfo = mainPlayer.playerInfo;
            this._viewUI.lb_ye.text = StringU.substitute("余额：{0}", mainPlayerInfo.money);
            //冻结

        }

        /**按钮点击事件缓动完 回调 该做啥就做啥 */
        protected onBtnTweenEnd(e: any, target: any): void {
            let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            switch (target) {
                case this._viewUI.btn_share:
                    //微信分享
                    this._game.datingGame.isShare = true;
                    this._game.datingGame.shareContinueTime = Laya.timer.currTimer;
                    this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENESESSION)
                    break
                case this._viewUI.btn_fhb:

                    break
                case this._viewUI.btn_hbjl:

                    break
                case this._viewUI.btn_ye:
                    this._viewUI.box_ye.visible = true;
                    break
                case this._viewUI.lb_yemx:
                    this._game.uiRoot.general.open(WxSaoLeiHBPageDef.PAGE_WXSLHB_YEMX);
                    break
                case this._viewUI.lb_ok:
                    this._viewUI.box_ye.visible = false;
                    break
                case this._viewUI.box_fhb:
                    this._game.uiRoot.general.open(WxSaoLeiHBPageDef.PAGE_WXSLHB_FAHB);
                    break
                case this._viewUI.btn_back:
                    this._game.sceneObjectMgr.leaveStory(true);
                    break
                case this._viewUI.btn_more:
                    //成员列表
                    // this._game.uiRoot.general.open(WxSaoLeiHBPageDef.PAGE_WXSLHB_FAHB);
                    break

            }
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