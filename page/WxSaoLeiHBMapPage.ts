/**
*   微信扫雷红包
*/
module gamewxsaoleihb.page {
    export class WxSaoLeiHBMapPage extends game.gui.base.Page {
        private _viewUI: ui.nqp.game_ui.wxsaoleihb.WXSaoLeiUI;
        private _arrHB: Array<any> = [];    //红包UI
        private _wxSaoLeiMgr: WxSaoLeiHBMgr;
        private _wxSaoLeiStory: WxSaoLeiHBStory;
        private _wxSaoLeiMapInfo: WxSaoLeiHBMapInfo;
        private _mainPlayer: PlayerData;
        private _mainUid: string;
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
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.wxsaoleihb.WXSaoLeiUI');
            this.addChild(this._viewUI);
            this._viewUI.panel_hb.vScrollBarSkin = "";
            this._viewUI.panel_hb.vScrollBar.autoHide = true;
            this._viewUI.panel_hb.vScrollBar.elasticDistance = 100;
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("WxSaoLeiHBMapPage");//额外界面控制器
            }
            this._wxSaoLeiStory = this._game.sceneObjectMgr.story as WxSaoLeiHBStory;
            if (this._wxSaoLeiStory) {
                this._wxSaoLeiMgr = this._wxSaoLeiStory.wxSaoLeiHBMgr;
                this.onUpdateMapInfo();
            }
            this._mainPlayer = this._game.sceneObjectMgr.mainPlayer;
            this._mainUid = this._mainPlayer.GetUserId();
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.MAP_HB_INFO, this, this.updateHBdata);   //红包数据
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.MAP_HB_LQ_INFO, this, this.openHBInfoPage);  //红包领取数据详情
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.MAP_HB_LQ_MSG, this, this.updateLqMsg);  //红包领取消息
            this._wxSaoLeiMgr.on(WxSaoLeiHBMgr.PF_INFO_UPDATE, this, this.updateMainInfo);
            //初始化所有的红包
            this.updateHBdata(GlobalDef.WXSAOLEI_HB_TOTAL, null, null);
            this._viewUI.mouseThrough = true;
            //初始房间名字
            let mapLv = this._wxSaoLeiMapInfo.GetMapLevel();
            let index = WxSaoLeiHBMgr.ALL_GAME_ROOM_CONFIG_ID.indexOf(mapLv);
            if (index < 0) index = 0;
            this._viewUI.lb_map_name.text = WxSaoLeiHBMgr.GMAE_ROOME_NAME[index];
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

            this._viewUI.btn_hb_close.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_hb_open.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.rain_open.on(LEvent.CLICK, this, this.onBtnClickWithTween);

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
                        this._wxSaoLeiMgr.showHBRain(end_time, this);
                        break
                }
            }
        }

        //===========红包领取start==========
        public static readonly TYPE_HBY = 1;//红包雨
        public static readonly TYPE_GET_HB = 2;//领取红包
        public static readonly TYPE_NO_GET_HB = 3;//红包已领完
        private _curHbData: any;   //当前打开这个界面的红包数据
        initHBGetUI(type: number, hbData: any): void {
            this._curHbData = hbData;
            this._viewUI.box_hb_open.visible = true;
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
            }
        }

        //红包领取
        private updateGetHBUI(hbData: any): void {
            this._viewUI.open_head.skin = TongyongUtil.getHeadUrl(hbData.head);
            this._viewUI.open_name.text = hbData.name;
            this._viewUI.open_hb_name.text = hbData.money + "元";
            this._viewUI.open_ld.text = hbData.ld_str;
        }

        //红包雨
        private updateHBRainUI(hbData): void {
            //红包剩余时间,先隐藏掉
            this._viewUI.hby_time.visible = false;
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
                    break
                case this._viewUI.btn_di2:
                    this._viewUI.box_di2.visible = false;
                    this._viewUI.box_di1.visible = true;
                    this._viewUI.box_di1_down.visible = false;
                    this._isShowInfo = false;
                    this._viewUI.box_di1_up.top = 138;
                    this._viewUI.img_di1_bg.height = 74;
                    this._viewUI.img_di1_bg.bottom = 0;
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
                this._viewUI.box_di1_up.top = 17;
                this._viewUI.img_di1_bg.height = 207;
                // this._viewUI.img_di1_bg.bottom = 0;
                this._viewUI.panel_hb.top = this._viewUI.img_up.top + this._viewUI.img_up.height;
                this._viewUI.panel_hb.bottom = this._viewUI.img_di1_bg.bottom + this._viewUI.img_di1_bg.height;
            } else {
                this._viewUI.box_di1_down.visible = false;
                this._viewUI.box_di1_up.top = 138;
                this._viewUI.img_di1_bg.height = 74;
                // this._viewUI.img_di1_bg.bottom = 0;
                this._viewUI.panel_hb.top = this._viewUI.img_up.top + this._viewUI.img_up.height;
                this._viewUI.panel_hb.bottom = this._viewUI.img_di1_bg.bottom + this._viewUI.img_di1_bg.height;
            }
            this._viewUI.panel_hb.vScrollBar.value = this._viewUI.panel_hb.vScrollBar.max;
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
            this._viewUI.lb_ye.text = StringU.substitute("余额：{0}", mainPlayerInfo.money - dj_money);
            this._viewUI.lb_dj.text = StringU.substitute("冻结：{0}", dj_money);
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
                    this._game.sceneObjectMgr.leaveStory(true);
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
                    //判断状态
                    if (this._curHbData.hb_state == WxSaoLeiHBMgr.HB_STATE_ING) {
                        //判断是否有操作过 操作过，直接打开红包详情界面，否则发领取协议
                        this._game.network.call_wxsaoleihb_opt(this._curHbData.hb_id);
                    } else {
                        //红包已领完
                        this.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_GET_HB, this._curHbData);
                    }
                    break
                case this._viewUI.rain_open:
                    //红包雨领取红包
                    this._game.network.call_wxsaoleihb_opt(-1);
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
        }

        //帧间隔心跳
        deltaUpdate() {

        }

        //------------------红包主界面操作start---------
        //红包数据更新
        private updateHBdata(type: number, hb_info: any, lq_info: any): void {
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
                isSelf = hb_info.uid == this._mainUid;
                if (type == GlobalDef.WXSAOLEI_HB_ADD) {
                    //新增 在末尾加
                    this.addHB(hb_info, isSelf, WxSaoLeiHBMapPage.MAIN_HB);
                } else if (type == GlobalDef.WXSAOLEI_HB_REMOVE) {
                    //移除
                    this.removeHB(hb_info);
                } else if (type == GlobalDef.WXSAOLEI_HB_UPDATE) {
                    //红包更新
                    this.updateHB(hb_info);
                }
            }
            this._viewUI.panel_hb.vScrollBar.value = this._viewUI.panel_hb.vScrollBar.max;
        }

        //领取信息
        private updateLqMsg(lq_data): void {
            if (!this._mainUid) return;
            //红包领取数据更新
            if (!lq_data) return;
            //领取数据对应的红包
            let index = this._wxSaoLeiMgr.findHBDataIndexById(lq_data.hb_id);
            let hb_info: any = this._wxSaoLeiMgr.hbData[index];
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
                }
            }
            this._viewUI.panel_hb.vScrollBar.value = this._viewUI.panel_hb.vScrollBar.max;
        }

        //新增红包
        private static readonly MAIN_HB: number = 1;    //红包
        private static readonly MAIN_HB_LQ_INFO: number = 2;   //红包信息
        public static readonly EXTRA_TYPE_FINSH: number = 1;    //红包已领完
        public static readonly EXTRA_TYPE_ZL_SETTLE: number = 2;    //预中雷信息结算
        private _hbUIY: number = 0;
        private _diffY: number = 12;
        addHB(hbData: any, isSelf: boolean = false, type: number, extraType: number = 0, lq_data: any = "") {
            let uiHb: any;
            switch (type) {
                case WxSaoLeiHBMapPage.MAIN_HB:
                    if (!isSelf) {
                        uiHb = new HBLeft();
                        uiHb.left = 1;
                    } else {
                        uiHb = new HBRight();
                        uiHb.right = 1;
                    }
                    break
                case WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO:
                    if (extraType == 0 && !lq_data) return;
                    uiHb = new HBInfo(extraType, lq_data);
                    uiHb.left = 50;
                    uiHb.right = 50;
                    break
            }
            uiHb.setData(this, this._game, hbData);
            uiHb.y = this._hbUIY;
            this._viewUI.panel_hb.addChild(uiHb);
            this._hbUIY += uiHb.height + this._diffY;
            this._arrHB.push(uiHb);
        }

        //移除红包
        removeHB(hbDatas: any) {
            for (let i = 0; i < hbDatas.length; i++) {
                let cur_hb_data = hbDatas[i];
                let index = this.findHBUIByHBData(cur_hb_data);
                let removeUiHB = this._arrHB[index];
                let removeY: number = removeUiHB.y;
                removeUiHB.removeSelf();
                this._arrHB.splice(index, 1);
                //在调整在它之后的所有的位置
                let curUIY: number;
                for (let i = index; i < this._arrHB.length; i++) {
                    if (curUIY != 0 && !curUIY) curUIY = removeY;
                    let curUiHB = this._arrHB[i];
                    let saveY = curUiHB.y;
                    curUiHB.y = curUIY;
                    curUIY = saveY;
                }
            }
        }

        //更新红包
        updateHB(hbDatas: any) {
            for (let i = 0; i < hbDatas.length; i++) {
                let cur_hb_data = hbDatas[i];
                let index = this.findHBUIByHBData(cur_hb_data);
                let uiHB = this._arrHB[index];
                if (!uiHB) continue;
                uiHB.setData(this, this._game, cur_hb_data);
                if (cur_hb_data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) {
                    //结算信息
                    this.HbSettleInfo(cur_hb_data);
                }
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
                if (isSelfHB) {
                    //自己的多雷红包结算
                    this.addHB(cur_hb_data, isSelfHB, WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO, WxSaoLeiHBMapPage.EXTRA_TYPE_ZL_SETTLE);
                    this._wxSaoLeiMgr.self_show_settle_dl_info.push(hb_id);
                }
                else if (pf_data) {
                    //自己领取过的红包，并且中雷了
                    this.addHB(cur_hb_data, isSelfHB, WxSaoLeiHBMapPage.MAIN_HB_LQ_INFO, WxSaoLeiHBMapPage.EXTRA_TYPE_ZL_SETTLE);
                    this._wxSaoLeiMgr.self_show_settle_dl_info.push(hb_id);
                }
            }
        }

        //查找到对应的红包ui
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
                if (this.ani1.isPlaying)
                    this.ani1.stop();
                if (this.ani2.isPlaying)
                    this.ani2.stop();
                let diffTime = this._game.sync.serverTimeBys - this._data.create_time;
                let isLQFinsh = this._data.lq_num >= this._data.bao_num;
                let isTimeOut = diffTime > WxSaoLeiHBMgr.HB_TIME;
                this.img_di.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/btn_hb1.png";
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
                this.img_di.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/btn_hb0.png";
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
            this.lb_sy.text = StringU.substitute("剩余:{0}/{1}", this._data.lq_num, this._data.bao_num);
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
            if (this._data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) {
                //红包已领完
                this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_GET_HB, this._data);
            } else {
                //未结束
                this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_GET_HB, this._data);
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
                if (this.ani1.isPlaying)
                    this.ani1.stop();
                if (this.ani2.isPlaying)
                    this.ani2.stop();
                let diffTime = this._game.sync.serverTimeBys - this._data.create_time;
                let isLQFinsh = this._data.lq_num >= this._data.bao_num;
                let isTimeOut = diffTime > WxSaoLeiHBMgr.HB_TIME;
                this.img_di.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/btn_hb1.png";
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
                this.img_di.skin = Path_game_wxSaoLeiHB.ui_wxsaoleihb + "saolei/btn_hb0.png";
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
            this.lb_sy.text = StringU.substitute("剩余:{0}/{1}", this._data.lq_num, this._data.bao_num);
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
            if (this._data.hb_state == WxSaoLeiHBMgr.HB_STATE_END) {
                //红包已领完
                this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_NO_GET_HB, this._data);
            } else {
                //未结束
                this._page.initHBGetUI(WxSaoLeiHBMapPage.TYPE_GET_HB, this._data);
            }
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
            //赔付金额
            let mainUid = mainPlayer.GetUserId();
            if (this._extraType == 0) {
                //不是额外信息
                let pf_money: number = this._lq_data.pf_money;
                let isSelf = this._lq_data.uid == mainUid;  //领取人是自己
                let name = "";
                let color = "#3b72fe";  //玩家颜色色值
                let lq_money: string = this._lq_data.lq_money.toString(); //领取的金钱
                let zl_num = Number(lq_money.substr(-1, 1));;  //中雷号
                let is_zl = pf_money > 0;      //是否中雷
                if (isSelf) {
                    //领取了别人的红包
                    name = this._data.name;    //发红包人的名字
                    if (is_zl) {
                        if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                            info = StringU.substitute("您领取了<span color='{0}'>{1}</span>玩家的红包,获得{2}元,中雷{3}赔付{4}元", color, name, HtmlFormat.addHtmlColor(lq_money.toString(), TeaStyle.COLOR_RED), zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                        } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                            //冻结钱数
                            let obj = {
                                hb_id: this._lq_data.hb_id,
                                pf_money: pf_money
                            }
                            this._wxsaoleihbMgr.pf_data.push(obj)
                            this._wxsaoleihbMgr.event
                            info = StringU.substitute("您领取了<span color='{0}'>{1}</span>玩家的红包,获得{2},预中雷{3}冻结{4}元", color, name, HtmlFormat.addHtmlColor(lq_money.toString(), TeaStyle.COLOR_RED), zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                        }
                    } else {
                        info = StringU.substitute("您领取了<span color='{0}'>{1}</span>玩家的红包,获得{2}元", color, name, HtmlFormat.addHtmlColor(lq_money.toString(), TeaStyle.COLOR_RED));
                    }
                    this._wxsaoleihbMgr.self_hb_lqjl.push(this._lq_data);
                } else {
                    //自己的红包别人领了
                    name = this._lq_data.name;
                    if (is_zl) {
                        if (this._data.type == WxSaoLeiHBMgr.TYPE_DANLEI) {
                            info = StringU.substitute("<span color='{0}'>{1}</span>玩家领取了您的红包,中雷{2}赔付{3}元", color, name, zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                        } else if (this._data.type == WxSaoLeiHBMgr.TYPE_DUOLEI) {
                            info = StringU.substitute("<span color='{0}'>{1}</span>玩家领取了您的红包,预中雷{2}冻结{3}元", color, name, zl_num, HtmlFormat.addHtmlColor(pf_money.toString(), TeaStyle.COLOR_RED));
                        }
                    } else {
                        info = StringU.substitute("<span color='{0}'>{1}</span>玩家领取了您的红包", color, name);
                    }
                }
            } else {
                switch (this._extraType) {
                    case WxSaoLeiHBMapPage.EXTRA_TYPE_FINSH:
                        //红包已经领完了
                        info = "您的红包被领完"
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
                            info = StringU.substitute("多雷结算,全部雷点{0},中雷雷点{1},", HtmlFormat.addHtmlColor(this._data.ld_str, TeaStyle.COLOR_RED), HtmlFormat.addHtmlColor(this._data.zl_str, TeaStyle.COLOR_RED));
                            if (hb_is_zl) {
                                //达到中雷数
                                info += StringU.substitute("获赔付{0}元", (Number(pf_money) * zl_arr.length));
                            } else {
                                //未中奖
                                info += "未获赔付";
                            }
                        } else {
                            let pfData = this._wxsaoleihbMgr.findPFDataByid(this._data.hb_id);
                            //别人的多雷红包结算信息
                            info = StringU.substitute("玩家{0}多雷结算,全部雷点{1}中雷雷点{2}", this._data.name, HtmlFormat.addHtmlColor(this._data.ld_str, TeaStyle.COLOR_RED), HtmlFormat.addHtmlColor(this._data.zl_str, TeaStyle.COLOR_RED));
                            //判断红包是否中雷，判断自己是否中雷，
                            if (hb_is_zl) {
                                //中雷
                                info += StringU.substitute("中雷,并赔付{0}元", HtmlFormat.addHtmlColor(pfData.pf_money, TeaStyle.COLOR_RED));
                            } else {
                                info += StringU.substitute("未中雷,解除冻结{0}元", HtmlFormat.addHtmlColor(pfData.pf_money, TeaStyle.COLOR_RED));
                            }
                        }
                        break
                }
            }
            this.lb_info.text = info;
            TextFieldU.setHtmlText(this.lb_info, info, false);//支持HTML
        }
    }
}