/**
*   微信扫雷红包
*/
module gamewxsaoleihb.page {
    //音效url
    export const MUSIC_PATH = {
        btn: "btn.mp3", //按钮音效
        hongbao_tan: "hongbao_tan.mp3", //打开红包的音效
        newHongbao: "newHongbao.mp3",   //列表新红包
        no_zhonglei: "no_zhonglei.mp3",    //打开红包后没有中雷获得金币以及预中雷
        zhonglei: "zhonglei.mp3",   //中雷音效
    }
    export class WxSaoLeiHBMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLeiUI;
        private _arrHB: Array<any> = [];    //红包UI
        private _wxSaoLeiMgr: WxSaoLeiHBMgr;
        private _wxSaoLeiStory: WxSaoLeiHBStory;
        private _wxSaoLeiMapInfo: WxSaoLeiHBMapInfo;
        private _mainPlayer: PlayerData;
        private _mainUnit: Unit;
        private _mainUid: string;
        private _isClickDrag: boolean = false;
        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._delta = 1000;
            this._defaultSoundPath = Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.btn;
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
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLeiUI');
            this.addChild(this._viewUI);
            //全面屏
            if (this._game.isFullScreen) {
                let diff = 56
                //有刘海
                this._viewUI.img_up.height = 115 + diff;
                this._viewUI.panel_hb.top = 121 + diff;
                this._viewUI.box_hb.y = 213 + diff;
                this._viewUI.box_share.y = 337 + diff;
            } else {
                this._viewUI.img_up.height = 115;
                this._viewUI.panel_hb.top = 121;
                this._viewUI.box_hb.y = 213;
                this._viewUI.box_share.y = 337;
            }
            this._viewUI.panel_hb.vScrollBarSkin = "";
            this._viewUI.panel_hb.vScrollBar.autoHide = true;
            this._viewUI.panel_hb.vScrollBar.elasticDistance = 100;
            this._viewUI.panel_hb.vScrollBar.changeHandler = new Handler(this, this.panelChangeHandler);
            this._viewUI.panel_hb.on(LEvent.MOUSE_DOWN, this, this.panelMouseHandle);
            this._viewUI.panel_hb.on(LEvent.MOUSE_UP, this, this.panelMouseHandle);
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("WxSaoLeiHBMapPage");//额外界面控制器
            }
            this._wxSaoLeiStory = this._game.sceneObjectMgr.story as WxSaoLeiHBStory;
            if (this._wxSaoLeiStory) {
                this._wxSaoLeiMgr = this._wxSaoLeiStory.wxSaoLeiHBMgr;
                this.onUpdateMapInfo();
            }
            this._mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            this._mainUnit = this._game.sceneObjectMgr.mainUnit;
            this._mainUid = this._mainPlayer.GetUserId();
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.MAP_HB_INFO, this, this.updateHBdata);   //红包数据
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.MAP_HB_LQ_INFO, this, this.openHBInfoPage);  //红包领取数据详情
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.MAP_HB_LQ_MSG, this, this.updateLqMsg);  //红包领取消息
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.PF_INFO_UPDATE, this, this.updateMainInfo);
            this._viewUI.box_hb_rain.visible = false;
            //初始化所有的红包
            Laya.timer.frameOnce(1, this, () => {
                this.updateHBdata(GlobalDef.WXSAOLEI_HB_TOTAL, null);
            });
            this._viewUI.mouseThrough = true;
            //初始房间名字
            let mapLv = this._wxSaoLeiMapInfo.GetMapLevel();
            let index = WxSaoLeiHBMgr.ALL_GAME_ROOM_CONFIG_ID.indexOf(mapLv);
            if (index < 0) index = 0;
            this._viewUI.lb_map_name.text = WxSaoLeiHBMgr.GMAE_ROOME_NAME[index];
            Laya.timer.frameOnce(1, this, () => {
                this.checkHbRain();
            })
        }

        private checkHbRain() {
            //进来的时候 是否处于红包雨时间
            let continue_end_time = this._wxSaoLeiMapInfo.GetTouPiaoTime()
            let rain_lq_time = this._mainUnit.GetCurChip();
            if (continue_end_time > this._game.sync.serverTimeBys && !this._wxSaoLeiMgr.isHbRain) {
                //红包雨中途进入，处于红包雨时间，并且还未领取过的,领取的时间大于红包雨持续结束时间
                if (!rain_lq_time || rain_lq_time <= 0 || continue_end_time - rain_lq_time > WxSaoLeiHBMgr.HB_RAIN_TIME) {
                    this._wxSaoLeiMgr.showHBRain(continue_end_time, this._viewUI.box_hb_rain);
                }
            }
        }

        private panelChangeHandler(value: number) {
            let maxValue = this._viewUI.panel_hb.vScrollBar.max;
            if (value >= maxValue) {
                this._drage = false;
            }
        }

        private _drage: boolean = false;
        private panelMouseHandle(e: LEvent): void {
            let maxValue = this._viewUI.panel_hb.vScrollBar.max;
            let value = this._viewUI.panel_hb.vScrollBar.value;
            switch (e.type) {
                case LEvent.MOUSE_DOWN:
                    this._drage = true;
                    break
                case LEvent.MOUSE_UP:
                    if (value >= maxValue) {
                        this._drage = false;
                    } else {
                        this._drage = true;
                    }
                    break
            }
        }

        // 重新布局
        protected layout(): void {
            super.layout();
            if (this._viewUI) {
                this._viewUI.box_main.scaleX = 1.77;
                this._viewUI.box_main.scaleY = 1.77;
            }
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this.updateViewUI();

            this.updateMainInfo();
            this._viewUI.btn_share.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_hbjl.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_ye.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_fhb.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.lb_yemx.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.lb_ok.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.box_fhb.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.btn_more.on(LEvent.CLICK, this, this.onBtnClickWithTween)
            this._viewUI.box_hb.on(LEvent.CLICK, this, this.onBtnClickWithTween)

            this._viewUI.btn_hb_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_hb_open.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.rain_open.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.box_down.on(LEvent.CLICK, this, this.onBtnClickWithTween);

            this._viewUI.btn_add.on(LEvent.CLICK, this, this.onBtnClick);
            this._viewUI.btn_di1.on(LEvent.CLICK, this, this.onBtnClick);
            this._viewUI.btn_di2.on(LEvent.CLICK, this, this.onBtnClick);
            this._viewUI.finsh_check.on(LEvent.CLICK, this, this.onBtnClick);

            this._game.network.addHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneGame.sceneObjectMgr.on(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.updateMainInfo);
        }

        //重置UI状态
        private updateViewUI(): void {
            this._viewUI.box_hb_open.visible = false;
            this._viewUI.box_ye.visible = false;
            this._viewUI.box_di1.visible = false;
            this._viewUI.box_di2.visible = true;
            this.updateDiBuUI();
        }

        //弹出红包详情界面
        private openHBInfoPage(lq_datas: any): void {
            this._viewUI.box_hb_open.visible = false;
            // if (!lq_datas || lq_datas.length <= 0 || !this._curHbData) {
            //     this._game.showTips("该红包已过期");
            //     return;
            // }
            let pageHBJl = this._game.uiRoot.general.getPage(WxsaoleihbPageDef.PAGE_WXSLHB_JL);
            if (pageHBJl) {
                //是红包记录界面发出的请求
                return;
            }
            this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_INFO, (page: WxSaoLeiHBInfoPage) => {
                page.setData(this._curHbData, lq_datas, WxSaoLeiHBInfoPage.TYPE_HB_INFO);
            })
        }

        //金币雨领取
        private onOptHandler(optcode: number, msg: any) {
            if (msg.type == Operation_Fields.OPRATE_GAME) {
                switch (msg.reason) {
                    case Operation_Fields.OPRATE_GAME_WXSAOLEIHB_GET_RAIN_MONEY:
                        let money = Number(msg.data);
                        this._viewUI.box_hb_open.visible = false;
                        this._wxSaoLeiMgr.isHbRain = false;
                        this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_INFO, (page: WxSaoLeiHBInfoPage) => {
                            page.setData("", "", WxSaoLeiHBInfoPage.TYPE_HB_RAIN, money);
                        })
                        break
                    case Operation_Fields.OPRATE_GAME_WXSAOLEIHB_START_RAIN_MONEY:
                        //金币雨开启
                        let end_time = Number(msg.data);
                        this._wxSaoLeiMgr.showHBRain(end_time, this._viewUI.box_hb_rain);
                        break
                }
            }
        }

        //===========红包领取start==========
        public static readonly TYPE_HBY = 1;//红包雨
        public static readonly TYPE_GET_HB = 2;//领取红包
        public static readonly TYPE_NO_GET_HB = 3;//红包已领完
        public static readonly TYPE_NO_OPT_HB = 4;//自己无法操作的红包，自己的红包，自己已经领取过的红包
        private _curHbData: any;   //当前打开这个界面的红包数据
        initHBGetUI(type: number, hbData: any): void {
            this._curHbData = hbData;
            if (type != WxSaoLeiHBMapPage.TYPE_NO_OPT_HB) this._viewUI.box_hb_open.visible = true;
            this._viewUI.hb_finsh.visible = type == WxSaoLeiHBMapPage.TYPE_NO_GET_HB;
            this._viewUI.hb_rain.visible = type == WxSaoLeiHBMapPage.TYPE_HBY;
            this._viewUI.hb_open.visible = type == WxSaoLeiHBMapPage.TYPE_GET_HB;
            switch (type) {
                case WxSaoLeiHBMapPage.TYPE_HBY:
                    this.updateHBRainUI(hbData);
                    break
                case WxSaoLeiHBMapPage.TYPE_GET_HB:
                    if (!hbData) return;
                    this.updateGetHBUI(hbData);
                    break
                case WxSaoLeiHBMapPage.TYPE_NO_GET_HB:
                    if (!hbData) return;
                    this.updateFinshHBUI(hbData);
                    break
                case WxSaoLeiHBMapPage.TYPE_NO_OPT_HB:
                    //点击无法操作的红包
                    this._game.network.call_wxsaoleihb_get_lqjl(this._curHbData.hb_id);
                    break
            }
        }

        //红包领取
        private updateGetHBUI(hbData: any): void {
            this._viewUI.open_head.skin = TongyongUtil.getHeadUrl(hbData.head);
            this._viewUI.open_name.text = hbData.name;
            this._viewUI.box_open_info.width = this._viewUI.open_head.width + this._viewUI.open_name.width;
            this._viewUI.open_hb_name.text = hbData.money + "元";
            this._viewUI.open_ld.text = hbData.ld_str;
            this._viewUI.box_lh.width = this._viewUI.open_ld.width + 87;
        }

        //红包雨
        private updateHBRainUI(hbData): void {
            //红包剩余时间,先隐藏掉
            this._viewUI.hby_time.visible = false;
            this._viewUI.lb_rain_info.visible = false;
        }

        //红包领取完
        private updateFinshHBUI(hbData): void {
            this._viewUI.finsh_head.skin = TongyongUtil.getHeadUrl(hbData.head);
            this._viewUI.finsh_name.text = hbData.name;
        }
        //===========红包领取end==========
        private _isShowInfo = false;
        private onBtnClick(e: LEvent): void {
            switch (e.currentTarget) {
                case this._viewUI.btn_add:
                    this._isShowInfo = !this._isShowInfo;
                    this.updateDiBuUI();
                    break
                case this._viewUI.btn_di1:
                    this._viewUI.box_di2.visible = true;
                    this._viewUI.box_di1.visible = false;
                    this._viewUI.box_di1_down.visible = false;
                    this._isShowInfo = false;
                    this._viewUI.box_di1.height = 80;
                    this._viewUI.box_down.bottom = 87;
                    this._viewUI.panel_hb.bottom = this._viewUI.box_di1.bottom + this._viewUI.box_di1.height;
                    break
                case this._viewUI.btn_di2:
                    this._viewUI.box_di2.visible = false;
                    this._viewUI.box_di1.visible = true;
                    this._viewUI.box_di1_down.visible = false;
                    this._isShowInfo = false;
                    this._viewUI.box_di1.height = 80;
                    this._viewUI.box_down.bottom = 87;
                    this._viewUI.panel_hb.bottom = this._viewUI.box_di1.bottom + this._viewUI.box_di1.height;
                    break
                case this._viewUI.finsh_check:
                    //发送红包查询记录
                    this._game.network.call_wxsaoleihb_get_lqjl(this._curHbData.hb_id);
                    break
            }
        }

        private updateDiBuUI(): void {
            if (this._isShowInfo) {
                //显示下层
                this._viewUI.box_di1_down.visible = true;
                this._viewUI.box_down.bottom = 230;
                this._viewUI.box_di1.height = 210;
                this._viewUI.panel_hb.bottom = this._viewUI.box_di1.bottom + this._viewUI.box_di1.height;
            } else {
                this._viewUI.box_di1_down.visible = false;
                this._viewUI.box_di1.height = 80;
                this._viewUI.box_down.bottom = 87;
                this._viewUI.panel_hb.bottom = this._viewUI.box_di1.bottom + this._viewUI.box_di1.height;
            }
            if (!this._drage) {
                this._viewUI.panel_hb.vScrollBar.value = this._viewUI.panel_hb.vScrollBar.max;
            }
        }

        //更新玩家数据
        updateMainInfo(): void {
            if (!this._mainPlayer) return;
            //冻结
            let dj_money = 0;
            let pfData
            for (let i = 0; i < this._wxSaoLeiMgr.pf_data.length; i++) {
                let pfData = this._wxSaoLeiMgr.pf_data[i];
                if (!pfData) continue;
                let hb_id = pfData.hb_id;
                let pf_money = pfData.pf_money;
                let index = this._wxSaoLeiMgr.findHBDataIndexById(hb_id);
                let cur_hb_data: any = this._wxSaoLeiMgr.hbData[index];
                if (!cur_hb_data || cur_hb_data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) continue;
                dj_money += pf_money;
            }
            let mainPlayerInfo = this._mainPlayer.playerInfo;
            this._viewUI.lb_ye.text = StringU.substitute("余额：{0}", (mainPlayerInfo.money - dj_money).toFixed(2));
            this._viewUI.lb_dj.text = StringU.substitute("冻结：{0}", (dj_money).toFixed(2));
        }

        private onUpdateMapInfo(): void {
            let mapinfo = this._game.sceneObjectMgr.mapInfo;
            this._wxSaoLeiMapInfo = mapinfo as WxSaoLeiHBMapInfo;
            if (mapinfo) {

            }
        }


        /**按钮点击事件缓动完 回调 该做啥就做啥 */
        protected onBtnTweenEnd(e: any, target: any): void {
            if (!this._mainPlayer) return;
            switch (target) {
                case this._viewUI.btn_share:
                    //微信分享
                    this._game.datingGame.isShare = true;
                    this._game.datingGame.shareContinueTime = Laya.timer.currTimer;
                    this._game.datingGame.wxShareQrcodeImg("", "", Web_operation_fields.WXSCENESESSION)
                    break
                case this._viewUI.btn_hbjl:
                    this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_JL);
                    break
                case this._viewUI.btn_ye:
                    this._viewUI.box_ye.visible = true;
                    break
                case this._viewUI.lb_yemx:
                    this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_YEMX);
                    break
                case this._viewUI.lb_ok:
                    this._viewUI.box_ye.visible = false;
                    break
                case this._viewUI.btn_fhb:
                case this._viewUI.box_fhb:
                    this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_FAHB);
                    break
                case this._viewUI.btn_back:
                    //判断离开地图规则
                    let is_get_can_leave = true;
                    for (let i = 0; i < this._wxSaoLeiMgr.self_hb_lqjl.length; i++) {
                        let cur_self_hb_lqjl = this._wxSaoLeiMgr.self_hb_lqjl[i];
                        if (!cur_self_hb_lqjl) continue;
                        let hb_id = cur_self_hb_lqjl.hb_id;
                        let hb_data = this._wxSaoLeiMgr.findHBDataById(hb_id);
                        if (hb_data.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) {
                            is_get_can_leave = false;
                            break
                        }
                    }
                    if (!is_get_can_leave) {
                        this._game.showTips("您参与抢红包尚未结束，请稍后再试~");
                        return;
                    }
                    let is_send_can_leave = true;
                    for (let i = 0; i < this._wxSaoLeiMgr.selfHbData.length; i++) {
                        let cur_hb_data = this._wxSaoLeiMgr.selfHbData[i];
                        if (!cur_hb_data) continue;
                        if (cur_hb_data.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) {
                            is_send_can_leave = false;
                            break
                        }
                    }
                    if (!is_send_can_leave) {
                        this._game.showTips("您已发的红包尚未结束，请稍后再试~")
                        return
                    }
                    //清除红包
                    if (this._wxSaoLeiMgr.isHbRain)
                        this._wxSaoLeiMgr.end();
                    this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_FZTS, (page: WxSaoLeiHBFZTSPage) => {
                        page.isInner = true;
                    }, () => {
                        this._game.sceneObjectMgr.leaveStory(true);
                    })
                    break
                case this._viewUI.btn_more:
                    //成员列表
                    this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_ROOM_INFO);
                    break
                case this._viewUI.btn_hb_close:
                    this._viewUI.box_hb_open.visible = false;
                    break
                case this._viewUI.btn_hb_open:
                    //领取红包
                    if (!this._curHbData) return;
                    //更新下红包数据
                    let updateHbData = this._wxSaoLeiMgr.findHBDataById(this._curHbData.hb_id);
                    if (updateHbData) {
                        this._curHbData = updateHbData;
                    }
                    //判断赔付钱数是否足够
                    let pf_money = this._wxSaoLeiMgr.GetPFMoneyByData(this._curHbData);
                    if (!this._mainPlayer) return;
                    if (this._mainPlayer.playerInfo.money < pf_money) {
                        this._game.uiRoot.general.open(WxsaoleihbPageDef.PAGE_WXSLHB_HB_YEBZ);
                        this._viewUI.box_hb_open.visible = false;
                        return
                    }
                    //判断状态
                    if (this._curHbData.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) {
                        //判断是否有操作过 操作过，直接打开红包详情界面，否则发领取协议
                        let is_opt = this._wxSaoLeiMgr.isOptHBById(this._curHbData.hb_id);
                        if (is_opt) {
                            this.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_OPT_HB, this._curHbData);
                        } else {
                            //未操作过
                            this._game.playSound(Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.hongbao_tan);
                            this._game.network.call_wxsaoleihb_opt(this._curHbData.hb_id);
                            this._viewUI.box_hb_open.visible = false;
                        }
                    } else {
                        //红包已领完
                        this.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_GET_HB, this._curHbData);
                    }
                    break
                case this._viewUI.rain_open:
                    //红包雨领取红包
                    this._game.network.call_wxsaoleihb_opt(-1);
                    this._viewUI.box_hb_open.visible = false;
                    break
                case this._viewUI.box_hb:
                    //红包雨领取红包
                    this._wxSaoLeiMgr.showHBRain(this._game.sync.serverTimeBys + 30, this._viewUI.box_hb_rain);
                    break
                case this._viewUI.box_down:
                    //直达底部
                    if (this._isClickDrag) return;
                    this._isClickDrag = true;
                    let maxValue = this._viewUI.panel_hb.vScrollBar.max;
                    Laya.Tween.to(this._viewUI.panel_hb.vScrollBar, { value: maxValue }, 700, null, new Handler(this, () => {
                        this._viewUI.panel_hb.vScrollBar.value = this._viewUI.panel_hb.vScrollBar.max;
                        this._drage = false;
                        this._isClickDrag = false;
                    }));
                    break
            }
        }

        private _curDiffTime: number;
        update(diff: number) {
            super.update(diff);
            this._wxSaoLeiMgr && this._wxSaoLeiMgr.update(diff);
            //红包雨时间
            if (this._wxSaoLeiMapInfo && !this._wxSaoLeiMgr.isHbRain) {
                let end_time = this._wxSaoLeiMapInfo.GetYuChaoLaiQiTime();
                if (end_time) {
                    this._viewUI.lb_hby_tim.text = Sync.getTimeShortStr3(end_time - this._game.sync.serverTimeBys);
                }
            } else {
                this._viewUI.lb_hby_tim.text = "00:00";
            }
            //箭头标志
            let maxValue = this._viewUI.panel_hb.vScrollBar.max;
            let curValue = this._viewUI.panel_hb.vScrollBar.value;
            if (curValue < maxValue - 250) {
                this._viewUI.box_down.visible = true;
            } else {
                this._viewUI.box_down.visible = false;
            }
        }

        //帧间隔心跳
        deltaUpdate() {

        }

        //------------------红包主界面操作start---------
        //红包数据更新
        private updateHBdata(type: number, hb_info: any): void {
            if (!this._mainUid) return;
            let isSelf;
            //状态更新
            if (type == GlobalDef.WXSAOLEI_HB_TOTAL) {
                //初始化所有红包
                for (let key in this._wxSaoLeiMgr.hbData) {
                    if (this._wxSaoLeiMgr.hbData.hasOwnProperty(key)) {
                        let hb_data = this._wxSaoLeiMgr.hbData[key];
                        isSelf = hb_data.uid == this._mainUid
                        this.addHB(hb_data, isSelf, WxSaoLeiHBMapPage.MAIN_HB);
                    }
                }
            } else {
                if (type == GlobalDef.WXSAOLEI_HB_ADD) {
                    //新增 在末尾加
                    for (let key in hb_info) {
                        if (hb_info.hasOwnProperty(key)) {
                            let cur_hb_data = hb_info[key];
                            isSelf = cur_hb_data.uid == this._mainUid;
                            this.addHB(cur_hb_data, isSelf, WxSaoLeiHBMapPage.MAIN_HB);
                            this._game.playSound(Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.newHongbao);
                        }
                    }
                } else if (type == GlobalDef.WXSAOLEI_HB_REMOVE) {
                    //移除
                    for (let key in hb_info) {
                        if (hb_info.hasOwnProperty(key)) {
                            let cur_hb_data = hb_info[key];
                            this.removeHB(hb_info);
                        }
                    }
                } else if (type == GlobalDef.WXSAOLEI_HB_UPDATE) {
                    //红包更新
                    for (let key in hb_info) {
                        if (hb_info.hasOwnProperty(key)) {
                            let cur_hb_data = hb_info[key];
                            this.updateHB(cur_hb_data);
                        }
                    }
                }
            }
            if (!this._drage) {
                this._viewUI.panel_hb.vScrollBar.value = this._viewUI.panel_hb.vScrollBar.max;
            }
        }

        //领取信息
        private updateLqMsg(lq_data): void {
            if (!this._mainUid) return;
            //红包领取数据更新
            if (!lq_data) return;
            //领取数据对应的红包
            let hb_info = this._wxSaoLeiMgr.findHBDataById(lq_data.hb_id);
            if (!hb_info) {
                return
            }
            //是否是自己的红包
            let isSelfHB = this._mainUid == hb_info.uid;
            //只有我领别人或者别人领我的红包,才需要加信息条
            if (isSelfHB || (lq_data && lq_data.uid == this._mainUid)) {
                this.addHB(hb_info, isSelfHB, WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO, 0, lq_data);
                if (lq_data && lq_data.uid == this._mainUid) {
                    //开完隐藏
                    this._viewUI.box_hb_open.visible = false;
                    //在弹出详情界面
                    this._game.network.call_wxsaoleihb_get_lqjl(lq_data.hb_id);
                }
                if (!this._drage) {
                    this._viewUI.panel_hb.vScrollBar.value = this._viewUI.panel_hb.vScrollBar.max;
                }
            }
        }

        //新增红包
        private static readonly MAIN_HB: number = 1;    //红包
        private static readonly MAIN_HB_LQ_INFO: number = 2;   //红包信息
        public static readonly EXTRA_TYPE_FINSH: number = 1;    //红包已领完
        public static readonly EXTRA_TYPE_ZL_SETTLE: number = 2;    //预中雷信息结算
        private _hbUIY: number = 0;
        private _diffY: number = 0;
        addHB(hbData: any, isSelf: boolean = false, type: number, extraType: number = 0, lq_data: any = "") {
            let uiHb: any;
            switch (type) {
                case WxSaoLeiHBMapPage.MAIN_HB:
                    if (!isSelf) {
                        uiHb = new HBLeft();
                        uiHb.left = 40;
                    } else {
                        uiHb = new HBRight();
                        uiHb.right = 40;
                    }
                    break
                case WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO:
                    if (extraType == 0 && !lq_data) return;
                    uiHb = new HBInfo(extraType, lq_data);
                    uiHb.left = 100;
                    uiHb.right = 100;
                    break
            }
            uiHb.setData(this, this._game, hbData);
            uiHb.y = this._hbUIY;
            this._viewUI.panel_hb.addChild(uiHb);
            this._hbUIY += uiHb.height + this._diffY;
            this._arrHB.push(uiHb);
            //检测红包 显示最多不能超过10个
            this.checkHbArrUI();
        }

        //找出最远一位自己没有操作过的红包数据，清除掉
        checkHbArrUI(): void {
            if (this._arrHB && this._arrHB.length > 50) {
                for (let i = 0; i < this._arrHB.length; i++) {
                    let cur_hb_ui = this._arrHB[i];
                    //经过筛选,干掉一个就行
                    //自己的信息不能干掉
                    let hb_data = cur_hb_ui._data;
                    let removeUiHB = this._arrHB[i];
                    if (removeUiHB instanceof HBInfo) {
                        //信息要拿到最新的红包数据
                        let new_hb_data = this._wxSaoLeiMgr.findHBDataById(hb_data.hb_id);
                        if (new_hb_data && new_hb_data.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) {
                            continue;
                        }
                    } else {
                        //状态未结束的也不能删
                        if (hb_data.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) continue;
                    }
                    //首先是不是自己的红包
                    // if (hb_data && hb_data.uid == this._mainUid) continue;
                    // //其次是不是领取过的红包
                    // let is_opt = false;
                    // for (let k = 0; k < this._wxSaoLeiMgr.self_hb_lqjl.length; k++) {
                    //     let cur_lq_data = this._wxSaoLeiMgr.self_hb_lqjl[k];
                    //     if (cur_lq_data.hb_id == hb_data.hb_id) {
                    //         is_opt = true;
                    //         break
                    //     }
                    // }
                    // if (is_opt) continue;
                    this.removeHB(i);
                    break
                }
            }
        }

        //移除红包
        removeHB(index: any) {
            let removeUiHB = this._arrHB[index];
            let startRemoveY: number = removeUiHB.y;
            let height: number = removeUiHB.height;
            removeUiHB.removeSelf();
            this._arrHB.splice(index, 1);
            //在调整在它之后的所有的位置
            let diffY: number = 0;
            for (let i = index; i < this._arrHB.length; i++) {
                let curUiHB = this._arrHB[i];
                if (i == index) {
                    diffY = curUiHB.y - startRemoveY;
                    curUiHB.y = startRemoveY;
                } else {
                    curUiHB.y = curUiHB.y - diffY;
                }
            }
            this._hbUIY -= diffY;
        }

        //更新红包
        updateHB(cur_hb_data: any) {
            let index = this.findHBUIByHBData(cur_hb_data);
            let uiHB = this._arrHB[index];
            if (!uiHB) return;
            uiHB.setData(this, this._game, cur_hb_data);
            if (cur_hb_data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) {
                //结算信息
                this.HbSettleInfo(cur_hb_data);
            }
        }

        //显示过结算信息的红包数据
        private HbSettleInfo(cur_hb_data): void {
            //是否是自己的红包
            if (!this._mainUid) return;
            //是否结算过了
            let hb_id = cur_hb_data.hb_id;
            let isSelfHB = this._mainUid == cur_hb_data.uid;
            //结算
            if (isSelfHB) {
                let index = this._wxSaoLeiMgr.self_hb_show.indexOf(hb_id);
                if (index > -1) return;
                //自己的红包被领完了
                this.addHB(cur_hb_data, isSelfHB, WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO, WxSaoLeiHBMapPage.EXTRA_TYPE_FINSH);
                this._wxSaoLeiMgr.self_hb_show.push(hb_id);
            }
            //判断是否加多雷结算信息
            //多雷结算信息
            let pf_data = this._wxSaoLeiMgr.findPFDataByid(cur_hb_data.hb_id);
            if (cur_hb_data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                let index = this._wxSaoLeiMgr.self_show_settle_dl_info.indexOf(hb_id);
                if (index > -1) return;
                if (isSelfHB && cur_hb_data.zl_num > 0) {
                    //自己的多雷红包结算且有人中雷
                    this.addHB(cur_hb_data, isSelfHB, WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO, WxSaoLeiHBMapPage.EXTRA_TYPE_ZL_SETTLE);
                    this._wxSaoLeiMgr.self_show_settle_dl_info.push(hb_id);
                    this.updateMainInfo();
                }
                else if (pf_data) {
                    //自己领取过的红包，并且中雷了
                    this.addHB(cur_hb_data, isSelfHB, WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO, WxSaoLeiHBMapPage.EXTRA_TYPE_ZL_SETTLE);
                    this._wxSaoLeiMgr.self_show_settle_dl_info.push(hb_id);
                    this.updateMainInfo();
                }
            }
        }

        //查找到对应的红包UI数据
        private findHBUIByHBData(hbData: any): number {
            for (let i = 0; i < this._arrHB.length; i++) {
                let uiHB = this._arrHB[i];
                if (!uiHB) continue;
                if (uiHB instanceof HBInfo) continue;
                let hb_data = uiHB._data;
                if (!hb_data) continue;
                if (hb_data.hb_id == hbData.hb_id) {
                    return i;
                }
            }
        }
        //------------------红包主界面操作end---------
        public close(): void {
            Laya.stage.screenMode = Stage.SCREEN_HORIZONTAL;
            WebConfig.setMyOrientation(true);
            this._wxSaoLeiMgr.off(WxSaoLeiHBMgr.MAP_HB_INFO, this, this.updateHBdata);
            this._wxSaoLeiMgr.off(WxSaoLeiHBMgr.MAP_HB_LQ_INFO, this, this.openHBInfoPage);
            this._wxSaoLeiMgr.off(WxSaoLeiHBMgr.MAP_HB_LQ_MSG, this, this.updateLqMsg);
            this._wxSaoLeiMgr.off(WxSaoLeiHBMgr.PF_INFO_UPDATE, this, this.updateMainInfo);
            this._game.network.removeHanlder(Protocols.SMSG_OPERATION_FAILED, this, this.onOptHandler);
            this._game.sceneGame.sceneObjectMgr.off(SceneObjectMgr.EVENT_PLAYER_INFO_UPDATE, this, this.updateMainInfo);
            if (this._viewUI) {
                this._game.stopAllSound();
                this._game.stopMusic();
            }
            super.close();
        }
    }
    class HBLeft extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI {
        private _game: Game;
        private _data: any;
        private _player: PlayerData;
        private _playerInfo: any;
        private _page: WxSaoLeiHBMapPage;
        private _wxsaoleihbMgr: WxSaoLeiHBMgr;
        constructor() {
            super();
        }
        setData(page: WxSaoLeiHBMapPage, game: Game, data: any) {
            this._data = data;
            if (!data) return;
            this._game = game;
            if (!this._game) return;
            this._player = this._game.sceneObjectMgr.mainPlayer;
            if (!this._player) return;
            this._playerInfo = this._player.playerInfo;
            this._page = page;
            if (!this._page) return;
            let story: WxSaoLeiHBStory = this._game.sceneObjectMgr.story;
            if (!story) return;
            this._wxsaoleihbMgr = story.wxSaoLeiHBMgr;

            this.lb_name.text = this._data.name;
            this.img_head.skin = TongyongUtil.getHeadUrl(this._data.head);
            this.img_kuang.visible = false;
            this.img_light.visible = false;
            //红包状态结束
            if (this._data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) {
                if (this.ani1.isPlaying)
                    this.ani1.stop();
                if (this.ani2.isPlaying)
                    this.ani2.stop();
                let diffTime = this._game.sync.serverTimeBys - this._data.create_time;
                let isLQFinsh = this._data.lq_num >= this._data.bao_num;
                let isTimeOut = diffTime > WxSaoLeiHBMgr.HB_TIME;
                this.img_di.alpha = 0.4;
                if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb.png";
                } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb3.png";
                }
                if (isLQFinsh)
                    this.lb_status.text = "已领完";
                else {
                    this.lb_status.text = isTimeOut ? "已超时" : "进行中";
                }
            } else if (this._data.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) {
                this.img_di.alpha = 1;
                this.img_kuang.visible = true;
                if (!this.ani1.isPlaying)
                    this.ani1.play(0, true);
                //判断类型
                if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb2.png";
                } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                    this.img_light.visible = true;
                    if (!this.ani2.isPlaying)
                        this.ani2.play(0, true);
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb4.png";
                }
                this.lb_status.text = "";
            }
            this.box_main.on(LEvent.CLICK, this, this.onBtnLQ);
            //红包剩余
            this.lb_sy.text = StringU.substitute("剩余:{0}/{1}", this._data.bao_num - this._data.lq_num, this._data.bao_num);
            //红包金额
            this.lb_money.text = this._data.money;
            //红包雷号
            this.lb_ld.text = this._data.ld_str;
            //倒计时
            Laya.timer.clearAll(this);
            Laya.timer.loop(1000, this, this.updateTime);
        }

        private updateTime(): void {
            if (!this._data) return;
            let diffTime: number = this._game.sync.serverTimeBys - this._data.create_time;
            let countDown = Math.floor(WxSaoLeiHBMgr.HB_TIME - diffTime);
            if (countDown < 0 || this._data.hb_state == 2) {
                this.lb_time.text = "0秒";
            } else {
                this.lb_time.text = countDown.toString() + "秒";
            }
        }

        //领取红包
        private onBtnLQ(): void {
            if (!this._data) return;
            let is_opt = this._wxsaoleihbMgr.isOptHBById(this._data.hb_id);
            if (this._data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) {
                //红包已领完
                if (is_opt) {
                    this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_OPT_HB, this._data);
                } else {
                    this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_GET_HB, this._data);
                }
            } else {
                //未结束
                //判断自己是否操作过了
                if (is_opt) {
                    this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_OPT_HB, this._data);
                } else {
                    this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_GET_HB, this._data);
                }
            }
        }
    }
    class HBRight extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB2UI {
        private _game: Game;
        private _data: any;
        private _player: PlayerData;
        private _playerInfo: any;
        private _page: WxSaoLeiHBMapPage;
        constructor() {
            super();
        }
        setData(page: WxSaoLeiHBMapPage, game: Game, data: any) {
            this._data = data;
            if (!data) return;
            this._game = game;
            if (!this._game) return;
            this._player = this._game.sceneObjectMgr.mainPlayer;
            if (!this._player) return;
            this._playerInfo = this._player.playerInfo;
            this._page = page;
            if (!this._page) return;
            this.lb_name.text = this._data.name;
            this.img_head.skin = TongyongUtil.getHeadUrl(this._data.head);
            this.img_kuang.visible = false;
            this.img_light.visible = false;
            //红包状态结束
            if (this._data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) {
                if (this.ani3.isPlaying) {
                    this.img_eff.visible = false;
                    this.ani3.stop();
                }
                if (this.ani1.isPlaying)
                    this.ani1.stop();
                if (this.ani2.isPlaying)
                    this.ani2.stop();
                let diffTime = this._game.sync.serverTimeBys - this._data.create_time;
                let isLQFinsh = this._data.lq_num >= this._data.bao_num;
                let isTimeOut = diffTime > WxSaoLeiHBMgr.HB_TIME;
                this.img_di.alpha = 0.4;
                if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb.png";
                } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb3.png";
                }
                if (isLQFinsh)
                    this.lb_status.text = "已领完";
                else {
                    this.lb_status.text = isTimeOut ? "已超时" : "进行中";
                }
            } else if (this._data.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) {
                this.img_di.alpha = 1;
                this.img_kuang.visible = true;
                if (!this.ani1.isPlaying)
                    this.ani1.play(0, true);
                //判断类型
                if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb2.png";
                } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                    this.img_light.visible = true;
                    if (!this.ani2.isPlaying)
                        this.ani2.play(0, true);
                    this.img_hb.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/tu_hb4.png";
                }
                this.lb_status.text = "";
            }
            this.box_main.on(LEvent.CLICK, this, this.onBtnLQ);
            //红包剩余
            this.lb_sy.text = StringU.substitute("剩余:{0}/{1}", this._data.bao_num - this._data.lq_num, this._data.bao_num);
            //红包金额
            this.lb_money.text = this._data.money;
            //红包雷号
            this.lb_ld.text = this._data.ld_str;
            //倒计时
            Laya.timer.clearAll(this);
            Laya.timer.loop(1000, this, this.updateTime);
        }

        private updateTime(): void {
            if (!this._data) return;
            let diffTime: number = this._game.sync.serverTimeBys - this._data.create_time;
            let countDown = Math.floor(WxSaoLeiHBMgr.HB_TIME - diffTime);
            if (countDown < 0 || this._data.hb_state == 2) {
                this.lb_time.text = "0秒";
            } else {
                this.lb_time.text = countDown.toString() + "秒";
            }
        }

        //领取红包
        private onBtnLQ(): void {
            if (!this._data) return;
            this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_OPT_HB, this._data);
        }
    }
    class HBInfo extends ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_getUI {
        private _game: Game;
        private _data: any;  //红包数据
        private _lq_data: any;      //领取数据
        private _wxsaoleihbMgr: WxSaoLeiHBMgr;
        private _extraType: number; //额外参数
        constructor(extraType: number, lq_data: any) {
            super();
            this._extraType = extraType;
            this._lq_data = lq_data;
        }
        setData(page: WxSaoLeiHBMapPage, game: Game, data: any) {
            if (!data) return;
            this._data = data;
            this._game = game;
            if (!this._game) return;
            let mainPlayer: PlayerData = this._game.sceneObjectMgr.mainPlayer;
            if (!mainPlayer) return;
            let story: WxSaoLeiHBStory = this._game.sceneObjectMgr.story;
            if (!story) return;
            this._wxsaoleihbMgr = story.wxSaoLeiHBMgr;
            if (this._extraType == 0 && !this._lq_data) return;
            let info = "";  //信息
            let infoText = "";//没有html假信息
            //赔付金额
            let mainUid = mainPlayer.GetUserId();
            if (this._extraType == 0) {
                //不是额外信息
                let pf_money: number = Number(this._lq_data.pf_money.toFixed(2));
                let isSelf = this._lq_data.uid == mainUid;  //领取人是自己
                let name = "";
                let color = "#3b72fe";  //玩家颜色色值
                let lq_money: string = this._lq_data.lq_money.toFixed(2); //领取的金钱
                let zl_num = Number(lq_money.substr(-1, 1));;  //中雷号
                let is_zl = pf_money > 0;      //是否中雷
                if (isSelf) {
                    //领取了别人的红包
                    name = this._data.name;    //发红包人的名字
                    let sp_money_num = this._lq_data.sp_money_num;//特殊数奖励
                    if (is_zl) {
                        if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                            this._game.playSound(Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.zhonglei);
                            info = StringU.substitute("您领取了{0}玩家的红包,获得{1}元,中雷{2}赔付{3}元", HtmlFormat.addHtmlColor(name.toString(), color), HtmlFormat.addHtmlColor(lq_money.toString(), TeaStyle.COLOR_RED), zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                            infoText = StringU.substitute("您领取了{0}玩家的红包,获得{1}元,中雷{2}赔付{3}元", name.toString(), lq_money.toString(), zl_num, pf_money.toString());
                        } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                            this._game.playSound(Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.no_zhonglei);
                            //冻结钱数
                            let obj = {
                                hb_id: this._lq_data.hb_id,
                                pf_money: pf_money
                            }
                            this._wxsaoleihbMgr.pf_data.push(obj)
                            info = StringU.substitute("您领取了{0}玩家的红包,获得{1}元,预中雷{2}冻结{3}元", HtmlFormat.addHtmlColor(name.toString(), color), HtmlFormat.addHtmlColor(lq_money.toString(), TeaStyle.COLOR_RED), zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                            infoText = StringU.substitute("您领取了{0}玩家的红包,获得{1}元,预中雷{2}冻结{3}元", name.toString(), lq_money.toString(), zl_num, pf_money.toString());
                        }
                    } else {
                        this._game.playSound(Path_game_wxSaoLeiHB.music_wxsaoleihb + MUSIC_PATH.no_zhonglei);
                        info = StringU.substitute("您领取了{0}玩家的红包,获得{1}元", HtmlFormat.addHtmlColor(name.toString(), color), HtmlFormat.addHtmlColor(lq_money.toString(), TeaStyle.COLOR_RED));
                        infoText = StringU.substitute("您领取了{0}玩家的红包,获得{1}元", name.toString(), lq_money.toString());
                    }
                    //特殊数值奖励
                    if (sp_money_num > 0) {
                        info += StringU.substitute(",获取奖励{0}元", HtmlFormat.addHtmlColor(sp_money_num.toString(), TeaStyle.COLOR_RED));
                        infoText += StringU.substitute(",获取奖励{0}元", sp_money_num.toString());
                    }
                    this._wxsaoleihbMgr.self_hb_lqjl.push(this._lq_data);
                } else {
                    //自己的红包别人领了
                    name = this._lq_data.name;
                    if (is_zl) {
                        if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                            info = StringU.substitute("{0}玩家领取了您的红包,中雷{1}赔付{2}元", HtmlFormat.addHtmlColor(name.toString(), color), zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                            infoText = StringU.substitute("{0}玩家领取了您的红包,中雷{1}赔付{2}元", name.toString(), zl_num, pf_money.toString());
                        } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                            info = StringU.substitute("{0}玩家领取了您的红包,预中雷{1}冻结{2}元", HtmlFormat.addHtmlColor(name.toString(), color), zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                            infoText = StringU.substitute("{0}玩家领取了您的红包,预中雷{1}冻结{2}元", name.toString(), zl_num, pf_money.toString());
                        }
                    } else {
                        info = StringU.substitute("{0}玩家领取了您的红包", HtmlFormat.addHtmlColor(name.toString(), color));
                        infoText = StringU.substitute("{0}玩家领取了您的红包", name.toString());
                    }
                }
            } else {
                switch (this._extraType) {
                    case WxSaoLeiHBMapPage.EXTRA_TYPE_FINSH:
                        //红包已经领完了
                        info = "您的红包被领完"
                        infoText = "您的红包被领完"
                        break;
                    case WxSaoLeiHBMapPage.EXTRA_TYPE_ZL_SETTLE:
                        // 多雷结算信息
                        let zl_arr = this._data.zl_str.split(",");
                        let ld_arr = this._data.ld_str.split(',');
                        let hb_is_zl = zl_arr.length == ld_arr.length;
                        let is_self = this._data.uid == mainUid;
                        let pf_money = this._wxsaoleihbMgr.LqDuoLeiPFMoney(this._data)
                        if (is_self) {
                            //自己的多雷红包结算信息
                            info = StringU.substitute("多雷结算,全部雷号[{0}],中雷雷号[{1}],", HtmlFormat.addHtmlColor(this._data.ld_str, TeaStyle.COLOR_RED), HtmlFormat.addHtmlColor(this._data.zl_str, TeaStyle.COLOR_RED));
                            infoText = StringU.substitute("多雷结算,全部雷号[{0}],中雷雷号[{1}],", this._data.ld_str, this._data.zl_str);
                            if (hb_is_zl) {
                                //达到中雷数,中雷数*中雷人数
                                let totalMoney = Number(pf_money) * this._data.zl_num;
                                totalMoney = Number(totalMoney.toFixed(2));
                                info += StringU.substitute("获赔付{0}元", HtmlFormat.addHtmlColor(totalMoney.toString(), TeaStyle.COLOR_RED));
                                infoText += StringU.substitute("获赔付{0}元", totalMoney);
                            } else {
                                //未中奖
                                info += "未获赔付";
                                infoText += "未获赔付";
                            }
                            //雷数奖励
                            let sb_num = this._data.sb_num;
                            if (sb_num > 0) {
                                info += StringU.substitute(",获取奖励{0}元", HtmlFormat.addHtmlColor(sb_num.toString(), TeaStyle.COLOR_RED));
                                infoText += StringU.substitute(",获取奖励{0}元", sb_num);
                            }
                        } else {
                            let pfData = this._wxsaoleihbMgr.findPFDataByid(this._data.hb_id);
                            //别人的多雷红包结算信息
                            info = StringU.substitute("玩家{0}多雷结算,全部雷号[{1}]中雷雷号[{2}],", HtmlFormat.addHtmlColor(this._data.name.toString(), "#3b72fe"), HtmlFormat.addHtmlColor(this._data.ld_str, TeaStyle.COLOR_RED), HtmlFormat.addHtmlColor(this._data.zl_str, TeaStyle.COLOR_RED));
                            infoText = StringU.substitute("玩家{0}多雷结算,全部雷号[{1}]中雷雷号[{2}],", this._data.name.toString(), this._data.ld_str, this._data.zl_str);
                            //判断红包是否中雷，判断自己是否中雷，
                            if (hb_is_zl) {
                                //中雷
                                info += StringU.substitute("解除冻结{0}元,并赔付{1}元", HtmlFormat.addHtmlColor(pfData.pf_money, TeaStyle.COLOR_RED), HtmlFormat.addHtmlColor(pfData.pf_money, TeaStyle.COLOR_RED));
                                infoText += StringU.substitute("解除冻结{0}元,并赔付{1}元", pfData.pf_money, pfData.pf_money);
                            } else {
                                info += StringU.substitute("免赔付,解除冻结{0}元", HtmlFormat.addHtmlColor(pfData.pf_money, TeaStyle.COLOR_RED));
                                infoText += StringU.substitute("免赔付,解除冻结{0}元", pfData.pf_money);
                            }
                        }
                        break
                }
            }
            this.lb_info.text = infoText;
            //最小值 600
            if (this.lb_info.width >= 600) {
                this.lb_info.wordWrap = true;
                this.lb_info.width = 600;
                this.lb_info.height = 40;
            } else {
                this.lb_info.wordWrap = false;
            }
            let width = this.lb_info.width + 50;
            let height = this.lb_info.height;
            if (this.lb_info.wordWrap) {
                height += 30;
            } else {
                height += 25;
            }
            this.box_main.size(width, height);
            this.img_di.size(width, height);
            // this.lb_info.size(this.lb_info.width, this.lb_info.height);
            TextFieldU.setHtmlText(this.lb_info, info, false);//支持HTML
        }
    }
}