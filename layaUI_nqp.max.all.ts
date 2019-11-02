
module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_getUI extends View {
		public lb_name:Laya.Label;
		public lb_info:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":301,"height":43},"child":[{"type":"Box","props":{"width":301,"height":43},"child":[{"type":"Image","props":{"y":21,"x":150,"width":301,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","height":43,"anchorY":0.5,"anchorX":0.5,"alpha":0.3},"child":[{"type":"Label","props":{"y":11,"x":10,"width":88,"var":"lb_name","text":"喵喵喵","height":25,"fontSize":22,"color":"#3b72fe","bold":true}},{"type":"Label","props":{"y":11,"x":101,"width":200,"var":"lb_info","text":"玩家领取了您的红包","height":25,"fontSize":20,"color":"#000000","bold":true}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_getUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_HB1UI extends View {
		public img_di:Laya.Button;
		public box_main:Laya.Box;
		public lb_time:Laya.Label;
		public lb_sy:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_money:Laya.Label;
		public img_hb:Laya.Image;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public lb_status:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":476,"height":168},"child":[{"type":"Box","props":{},"child":[{"type":"Button","props":{"y":23,"x":82,"width":395,"var":"img_di","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_hb0.png","height":145}},{"type":"Box","props":{"y":23,"x":82,"width":395,"var":"box_main","height":145},"child":[{"type":"Label","props":{"y":117,"x":339,"width":40,"var":"lb_time","text":"00秒","height":17,"fontSize":17,"color":"#595858","bold":false}},{"type":"Label","props":{"y":117,"x":25,"width":150,"var":"lb_sy","text":"剩余:9/9","height":17,"fontSize":17,"color":"#595858","bold":false}},{"type":"Label","props":{"y":51,"x":164,"width":150,"var":"lb_ld","text":"12345","height":20,"fontSize":21,"color":"#3b72fe","bold":false}},{"type":"Label","props":{"y":51,"x":103,"width":50,"text":"雷点:","height":22,"fontSize":21,"color":"#3b72fe","bold":true}},{"type":"Label","props":{"y":13,"x":164,"width":150,"var":"lb_money","text":"12345","height":20,"fontSize":21,"color":"#ffffff","bold":false}},{"type":"Label","props":{"y":13,"x":103,"width":50,"text":"金额:","height":22,"fontSize":21,"color":"#ffffff","bold":true}},{"type":"Image","props":{"y":44,"x":55,"var":"img_hb","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_hb2.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":114,"x":310,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_sj.png"}}]},{"type":"Image","props":{"var":"img_head","top":0,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":0.83,"scaleX":0.83,"left":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":0.36999999999999744,"x":94.37,"width":150,"var":"lb_name","text":"喵喵喵","height":17,"fontSize":18,"color":"#595858","bold":true}},{"type":"Label","props":{"y":34,"width":80,"var":"lb_status","text":"已领完","right":10,"height":20,"fontSize":21,"color":"#ffffff","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_HB2UI extends View {
		public img_di:Laya.Button;
		public box_main:Laya.Box;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public lb_status:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":476,"height":168},"child":[{"type":"Box","props":{"y":0,"x":0,"width":478,"height":168},"child":[{"type":"Button","props":{"y":23.37,"x":394.37,"var":"img_di","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_hb0.png","scaleX":-1}},{"type":"Box","props":{"y":23,"x":0,"width":395,"var":"box_main","height":145},"child":[{"type":"Image","props":{"y":10,"x":26,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_hb2.png"}},{"type":"Image","props":{"y":114,"x":302,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_sj.png"}},{"type":"Label","props":{"y":13,"x":103,"width":50,"text":"金额:","height":22,"fontSize":21,"color":"#ffffff","bold":true}},{"type":"Label","props":{"y":13,"x":164,"width":150,"text":"12345","height":20,"fontSize":21,"color":"#ffffff","bold":false}},{"type":"Label","props":{"y":51,"x":103,"width":50,"text":"雷点:","height":22,"fontSize":21,"color":"#3b72fe","bold":true}},{"type":"Label","props":{"y":51,"x":164,"width":150,"text":"12345","height":20,"fontSize":21,"color":"#3b72fe","bold":false}},{"type":"Label","props":{"y":117,"x":25,"width":150,"text":"剩余:9/9","height":17,"fontSize":17,"color":"#595858","bold":false}},{"type":"Label","props":{"y":117,"x":331,"width":40,"text":"00秒","height":17,"fontSize":17,"color":"#595858","bold":false}}]},{"type":"Image","props":{"var":"img_head","top":0,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":0.83,"scaleX":0.83,"left":412,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":0.36999999999999744,"x":244.37,"width":150,"var":"lb_name","text":"喵喵喵","height":17,"fontSize":18,"color":"#595858","bold":true,"align":"right"}},{"type":"Label","props":{"y":34,"width":80,"var":"lb_status","text":"已领完","right":100,"height":20,"fontSize":21,"color":"#ffffff","bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_LBUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"height":112},"child":[{"type":"Box","props":{"y":-1,"x":0,"width":720,"height":113},"child":[{"type":"Image","props":{"y":54.84,"x":61.84,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.56,"scaleX":0.56,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":34.84,"x":100.84,"text":"喵喵喵","strokeColor":"#000000","stroke":1,"fontSize":24}},{"type":"Label","props":{"y":60.84,"x":100.84,"text":"22:23:59","fontSize":22,"color":"#595858"}},{"type":"Label","props":{"y":35.84,"x":612.84,"text":"10.59","strokeColor":"#000000","stroke":1,"fontSize":22}},{"type":"Image","props":{"y":109,"x":44,"width":668,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d4.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_LB1UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"height":112,"alpha":1},"child":[{"type":"Box","props":{"y":35,"x":29},"child":[{"type":"Image","props":{"y":74,"x":1,"width":686,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d4.png"}},{"type":"Label","props":{"text":"2019-10-29","fontSize":23,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":26,"x":15,"text":"20:50:27","fontSize":23,"align":"center"}},{"type":"Label","props":{"y":10,"x":180,"text":"福利红包","fontSize":23,"bold":true,"align":"center"}},{"type":"Label","props":{"y":10,"x":372,"text":"0.4846","fontSize":23,"align":"center"}},{"type":"Label","props":{"y":10,"x":536,"text":"000000","fontSize":23,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_LB2UI extends View {

        public static  uiView:any ={"type":"View","props":{"width":720,"height":98},"child":[{"type":"Box","props":{"y":16,"x":30},"child":[{"type":"Image","props":{"y":79,"width":686,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d4.png"}},{"type":"Label","props":{"x":22,"text":"福利包","fontSize":23,"color":"#000000","bold":true,"align":"left"}},{"type":"Label","props":{"y":37,"x":95,"text":"20:50:27","fontSize":23}},{"type":"Label","props":{"y":2,"x":406,"text":"2019-10-29","fontSize":23,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":2,"x":573,"text":"22:48:56","fontSize":23,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":44,"x":579,"text":"000000","fontSize":23,"align":"center"}},{"type":"Label","props":{"y":37,"x":22,"text":"余额:","fontSize":25,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLeiUI extends View {
		public btn_more:Laya.Button;
		public btn_back:Laya.Button;
		public list_hb:Laya.List;
		public btn_share:Laya.Button;
		public box_hb:Laya.Box;
		public lb_hby_tim:Laya.Label;
		public lb_map_name:Laya.Label;
		public box_di1:Laya.Box;
		public img_di1_bg:Laya.Image;
		public box_di1_up:Laya.Box;
		public btn_add:Laya.Button;
		public box_di1_down:Laya.Box;
		public btn_hbjl:Laya.Button;
		public btn_ye:Laya.Button;
		public btn_fhb:Laya.Button;
		public box_di2:Laya.Box;
		public box_fhb:Laya.Box;
		public box_ye:Laya.Box;
		public lb_ye:Laya.Label;
		public lb_dj:Laya.Label;
		public lb_yemx:Laya.Label;
		public lb_ok:Laya.Label;
		public box_hb_open:Laya.Box;
		public btn_hb_open:Laya.Button;
		public btn_hb_close:Laya.Button;
		public img_hb_head1:Laya.Image;
		public lb_name1:Laya.Label;
		public lb_hb_name1:Laya.Label;
		public lb_hb_ld:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"width":720,"height":1280,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":720,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","height":1280}},{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d.png","sizeGrid":"5,5,5,5","height":115}},{"type":"Button","props":{"y":50,"x":660,"var":"btn_more","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_d.png","right":15}},{"type":"Button","props":{"y":34,"x":35,"var":"btn_back","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","left":35}},{"type":"List","props":{"y":115,"x":0,"width":720,"var":"list_hb","spaceY":35,"repeatX":1,"height":1088},"child":[{"type":"WXSaoLei_HB1","props":{"y":0,"x":44,"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI"}}]},{"type":"Button","props":{"y":313,"x":666,"var":"btn_share","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_fx.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":189,"x":664,"width":102,"var":"box_hb","height":89,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":52,"stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_hby.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":67,"x":30,"var":"lb_hby_tim","text":"01:08","fontSize":18,"color":"#000000"}}]},{"type":"Label","props":{"y":40,"x":315,"var":"lb_map_name","text":"新手场","fontSize":30,"color":"#000000","bold":true}},{"type":"Box","props":{"y":1057,"x":0,"var":"box_di1"},"child":[{"type":"Image","props":{"width":720,"var":"img_di1_bg","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","height":223}},{"type":"Box","props":{"y":4,"x":4,"width":711,"var":"box_di1_up","height":67},"child":[{"type":"Image","props":{"y":0,"x":131,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d.png"},"child":[{"type":"Label","props":{"y":21,"x":134,"text":"本房间禁言中","fontSize":21,"color":"#000000","bold":true}}]},{"type":"Button","props":{"y":27,"x":641,"var":"btn_add","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_gd.png","scaleY":0.65,"scaleX":0.65,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":7,"x":548,"stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_bq.png"}},{"type":"Button","props":{"y":0,"x":36,"stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_aj.png","left":40}}]},{"type":"Box","props":{"y":73,"x":3,"width":719,"var":"box_di1_down","height":150},"child":[{"type":"Button","props":{"y":66,"x":225,"var":"btn_hbjl","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_hbjl.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":95,"x":6,"text":"红包记录","fontSize":18,"color":"#000000","bold":true}}]},{"type":"Button","props":{"y":66,"x":371,"width":86,"var":"btn_ye","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_yue.png","sizeGrid":"0,0,0,0","height":86,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":95,"x":29,"text":"余额","fontSize":18,"color":"#000000","bold":true}}]},{"type":"Button","props":{"y":66,"x":78,"var":"btn_fhb","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_fhb1.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":95,"x":15,"text":"发红包","fontSize":18,"color":"#000000","bold":true}}]}]}]},{"type":"Box","props":{"x":0,"width":720,"var":"box_di2","left":0,"height":135,"bottom":0},"child":[{"type":"Image","props":{"y":134,"x":0,"width":720,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","sizeGrid":"5,5,5,5","scaleY":-1,"height":75,"bottom":75}},{"type":"Button","props":{"y":67,"x":40,"stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_aj.png","left":40}},{"type":"Box","props":{"width":116,"var":"box_fhb","height":120,"centerY":7,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"x":0,"stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_fhb.png","bottom":3}}]}]},{"type":"Box","props":{"y":505,"x":105,"var":"box_ye"},"child":[{"type":"Image","props":{"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d3.png"}},{"type":"Label","props":{"y":43,"x":189,"var":"lb_ye","text":"余额:1234","fontSize":30,"color":"#464545","bold":true,"align":"center"}},{"type":"Label","props":{"y":98,"x":189,"var":"lb_dj","text":"冻结:1234","fontSize":30,"color":"#e94447","bold":true,"align":"center"}},{"type":"Label","props":{"y":216,"x":131,"var":"lb_yemx","text":"余额明细","fontSize":29,"color":"#1473e5","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":216,"x":380,"var":"lb_ok","text":"知道了","fontSize":29,"color":"#1473e5","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":195,"x":104,"var":"box_hb_open"},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d2.png"}},{"type":"Button","props":{"y":622,"x":162,"var":"btn_hb_open","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_k.png"}},{"type":"Button","props":{"y":880,"x":223,"var":"btn_hb_close","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_qc.png"}},{"type":"Image","props":{"y":199,"x":157,"var":"img_hb_head1","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.56,"scaleX":0.56,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":179,"x":195,"width":150,"var":"lb_name1","text":"喵喵喵","strokeColor":"#fcf0b4","stroke":1,"height":40,"fontSize":35,"color":"#fcf0b4"}},{"type":"Label","props":{"y":258,"x":93,"text":"发送了一个福利红包","strokeColor":"#fcf0b4","stroke":1,"height":40,"fontSize":38,"color":"#fcf0b4"}},{"type":"Label","props":{"y":329,"x":210,"var":"lb_hb_name1","text":"123","height":55,"fontSize":55,"color":"#fcf0b4","align":"center"}},{"type":"Box","props":{"y":411,"x":180},"child":[{"type":"Label","props":{"text":"雷点:","strokeColor":"#fcf0b4","stroke":1,"fontSize":38,"color":"#fcf0b4"}},{"type":"Label","props":{"x":89,"var":"lb_hb_ld","text":"123","fontSize":38,"color":"#349dff"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLeiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLeiHB_InfoUI extends View {
		public clip_hb_num:Laya.Clip;
		public btn_back:Laya.Button;
		public img_hb_head2:Laya.Image;
		public lb_name2:Laya.Label;
		public lb_hb_name2:Laya.Label;
		public lb_hb_num:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_lq:Laya.Label;
		public lb_hbjl:Laya.Label;
		public hb_info_list:Laya.List;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1280,"height":720},"child":[{"type":"Box","props":{"width":720,"height":1280,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":640,"x":360,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_jl.png","anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":284,"x":313,"var":"clip_hb_num","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/clip_0-9.png","clipX":11}},{"type":"Image","props":{"y":675,"x":35,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d4.png"}},{"type":"Button","props":{"y":32,"x":44,"var":"btn_back","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_jt1.png"}},{"type":"Image","props":{"y":141,"x":227,"var":"img_hb_head2","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.58,"scaleX":0.58,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":122,"x":262,"var":"lb_name2","text":"喵喵喵","strokeColor":"#fcf0b4","stroke":1,"fontSize":35,"color":"#fcf0b4"}},{"type":"Label","props":{"y":187,"x":247,"var":"lb_hb_name2","text":"恭喜发财，大吉大利","strokeColor":"#fcf0b4","stroke":1,"fontSize":25,"color":"#fcf0b4"}},{"type":"Label","props":{"y":335,"x":383,"text":"元","strokeColor":"#fcf0b4","stroke":1,"fontSize":25,"color":"#fcf0b4"}},{"type":"Label","props":{"y":421,"x":124,"var":"lb_hb_num","text":"7个红包","fontSize":30,"color":"#fcf0b4","bold":true}},{"type":"Label","props":{"y":421,"x":495,"var":"lb_ld","text":"雷点:0","fontSize":30,"color":"#fcf0b4","bold":true}},{"type":"Label","props":{"y":628,"x":36,"var":"lb_lq","text":"领取7/7个","strokeColor":"#595858","stroke":1,"fontSize":25,"color":"#595858"}},{"type":"Label","props":{"y":32,"x":527,"var":"lb_hbjl","text":"红包记录","fontSize":40,"color":"#fcf0b4","bold":true}},{"type":"List","props":{"y":673,"x":0,"width":720,"var":"hb_info_list","spaceY":-1,"repeatX":1,"height":579},"child":[{"type":"WXSaoLei_LB","props":{"y":4,"x":0,"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLeiHB_InfoUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_GuiZeUI extends View {
		public btn_close:Laya.Button;
		public tab_Type:Laya.Tab;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":904,"height":571,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":-25,"x":12,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png"}},{"type":"Image","props":{"y":68,"x":251,"width":615,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d.png","sizeGrid":"50,50,50,50","height":465}},{"type":"Image","props":{"y":1,"x":363,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png"}},{"type":"Button","props":{"y":-32,"x":830,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}},{"type":"Image","props":{"y":69,"x":252,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/guize/guize_0.png"}},{"type":"Image","props":{"y":69,"x":252,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/guize/guize_1.png"}},{"type":"Image","props":{"y":69,"x":252,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/guize/guize_2.png"}},{"type":"Tab","props":{"y":69,"x":53,"var":"tab_Type"},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_yxjs.png","name":"item0"}},{"type":"Button","props":{"y":79,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item1"}},{"type":"Button","props":{"y":159,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_jspl.png","name":"item2"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_HBUI extends View {
		public btn_back:Laya.Button;
		public btn_more:Laya.Button;
		public tab_hb:Laya.Tab;
		public btn_0:Laya.Button;
		public btn_1:Laya.Button;
		public btn_2:Laya.Button;
		public btn_3:Laya.Button;
		public btn_4:Laya.Button;
		public btn_5:Laya.Button;
		public btn_6:Laya.Button;
		public btn_7:Laya.Button;
		public btn_8:Laya.Button;
		public btn_9:Laya.Button;
		public btn_random:Laya.Button;
		public btn_send:Laya.Button;
		public txtInput:Laya.TextInput;
		public lb_ye:Laya.Label;
		public box_danL:Laya.Box;
		public lb_danL_num:Laya.Label;
		public btn_danL_1:Laya.Button;
		public lb_danL_info:Laya.Label;
		public box_duoL:Laya.Box;
		public lb_duoL_info:Laya.Label;
		public lb_duoL_num:Laya.Label;
		public btn_duoL_1:Laya.Button;
		public btn_duoL_2:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":640,"x":360,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_fhb.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":32,"x":44,"var":"btn_back","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_jt.png"}},{"type":"Button","props":{"y":56,"x":646,"var":"btn_more","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_d.png"}},{"type":"Tab","props":{"y":118,"x":2,"width":718,"var":"tab_hb","height":76},"child":[{"type":"Button","props":{"y":14,"x":126,"stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_dl1.png","name":"item0"}},{"type":"Button","props":{"y":15,"x":484,"stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_sl1.png","name":"item1"}}]},{"type":"Box","props":{"y":460,"x":0,"width":720,"height":341},"child":[{"type":"Button","props":{"y":79,"x":38,"var":"btn_0","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_0.png"}},{"type":"Button","props":{"y":79,"x":151,"var":"btn_1","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_1.png"}},{"type":"Button","props":{"y":79,"x":263,"var":"btn_2","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_2.png"}},{"type":"Button","props":{"y":79,"x":376,"var":"btn_3","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_3.png"}},{"type":"Button","props":{"y":79,"x":488,"var":"btn_4","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_4.png"}},{"type":"Button","props":{"y":79,"x":601,"var":"btn_5","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_5.png"}},{"type":"Button","props":{"y":205,"x":38,"var":"btn_6","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_6.png"}},{"type":"Button","props":{"y":205,"x":151,"var":"btn_7","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_7.png"}},{"type":"Button","props":{"y":205,"x":263,"var":"btn_8","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_8.png"}},{"type":"Button","props":{"y":205,"x":376,"var":"btn_9","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_9.png"}},{"type":"Button","props":{"y":218,"x":504,"var":"btn_random","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_sj.png"}},{"type":"Label","props":{"y":5,"x":45,"text":"选择雷点:","fontSize":30,"bold":true}}]},{"type":"Button","props":{"y":1190,"x":185,"var":"btn_send","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_sqjhb.png"}},{"type":"TextInput","props":{"y":928,"x":144,"width":150,"var":"txtInput","promptColor":"#7b7b7b","prompt":"发包金额","height":50,"fontSize":35,"bold":true}},{"type":"Label","props":{"y":1070,"x":116,"var":"lb_ye","text":"199.99","fontSize":30,"color":"#e94447"}},{"type":"Box","props":{"y":206,"x":0,"width":720,"var":"box_danL","height":261},"child":[{"type":"Box","props":{"y":34,"x":37},"child":[{"type":"Label","props":{"x":138,"var":"lb_danL_num","text":"9包","fontSize":30,"color":"#e94447"}},{"type":"Button","props":{"y":66,"var":"btn_danL_1","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_9.png"}}]},{"type":"Box","props":{"y":220,"x":45},"child":[{"type":"Label","props":{"var":"lb_danL_info","text":"赔率:1.6","fontSize":30,"bold":true}}]}]},{"type":"Box","props":{"y":206,"x":0,"width":720,"var":"box_duoL","height":261},"child":[{"type":"Box","props":{"y":220,"x":45},"child":[{"type":"Label","props":{"var":"lb_duoL_info","text":"赔率:单雷1.2,双雷1.05,三雷1.28,四雷1.8,五雷2.5","fontSize":30,"bold":true}}]},{"type":"Box","props":{"y":34,"x":37},"child":[{"type":"Label","props":{"x":138,"var":"lb_duoL_num","text":"7包","fontSize":30,"color":"#e94447"}},{"type":"Button","props":{"y":66,"x":0,"var":"btn_duoL_1","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_7.png"}},{"type":"Button","props":{"y":66,"x":111,"var":"btn_duoL_2","stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_9.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_HBUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_HUDUI extends View {
		public view_hud:ui.nqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public img_room1:Laya.Box;
		public txt_difen0:Laya.Clip;
		public txt_least0:Laya.Clip;
		public img_room2:Laya.Box;
		public txt_difen1:Laya.Clip;
		public txt_least1:Laya.Clip;
		public img_room3:Laya.Box;
		public txt_least2:Laya.Clip;
		public txt_difen2:Laya.Clip;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"buyu_ui/game_ui/buyu/hud/tu_zjh.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.nqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1280,"var":"box_right","height":465,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":73,"width":301,"var":"img_room0","right":970,"height":286},"child":[{"type":"SkeletonPlayer","props":{"y":143,"x":151,"url":"hongbaosaolei_ui/game_ui/wxsaoleihb/sk/buyu_0.sk"}},{"type":"Image","props":{"y":205,"x":101,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/mfty.png"}}]},{"type":"Box","props":{"y":54,"width":301,"var":"img_room1","right":650,"height":305},"child":[{"type":"SkeletonPlayer","props":{"y":163,"x":151,"url":"hongbaosaolei_ui/game_ui/wxsaoleihb/sk/buyu_1.sk"}},{"type":"Clip","props":{"y":214,"x":150,"var":"txt_difen0","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/clip_1.png","clipX":11}},{"type":"Clip","props":{"y":257,"x":150,"width":18,"var":"txt_least0","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/clip_1.png","height":21,"clipX":11}},{"type":"Image","props":{"y":188,"x":62,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/tu_d3.png"}}]},{"type":"Box","props":{"y":40,"width":301,"var":"img_room2","right":340,"height":319},"child":[{"type":"SkeletonPlayer","props":{"y":175,"x":150,"url":"hongbaosaolei_ui/game_ui/wxsaoleihb/sk/buyu_2.sk"}},{"type":"Clip","props":{"y":228,"x":155,"var":"txt_difen1","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/clip_2.png","clipX":11}},{"type":"Clip","props":{"y":270,"x":154,"width":18,"var":"txt_least1","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/clip_2.png","height":21,"clipX":11}},{"type":"Image","props":{"y":203,"x":64,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/tu_d.png"}}]},{"type":"Box","props":{"y":24,"width":320,"var":"img_room3","right":20,"height":334},"child":[{"type":"SkeletonPlayer","props":{"y":192,"x":157,"url":"hongbaosaolei_ui/game_ui/wxsaoleihb/sk/buyu_3.sk"}},{"type":"Clip","props":{"y":288,"x":163,"width":18,"var":"txt_least2","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/clip_3.png","height":21,"clipX":11}},{"type":"Clip","props":{"y":243,"x":164,"var":"txt_difen2","skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/clip_3.png","clipX":11}},{"type":"Image","props":{"y":220,"x":67,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/tu_d4.png"}}]}]},{"type":"Image","props":{"top":10,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/hud/sl_title.png","centerX":225,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.tongyong.HudUI",ui.nqp.game_ui.tongyong.HudUI);
			View.regComponent("SkeletonPlayer",laya.ani.bone.Skeleton);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_HUDUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_JLUI extends View {
		public btn_back:Laya.Button;
		public btn_more:Laya.Button;
		public tab:Laya.Tab;
		public img_head:Laya.Image;
		public lb_num_money:Laya.Label;
		public lb_num_hb:Laya.Label;
		public list_info:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_jl1.png"}},{"type":"Button","props":{"y":32,"x":44,"var":"btn_back","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_jt.png"}},{"type":"Button","props":{"y":56,"x":646,"var":"btn_more","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_d.png"}},{"type":"Tab","props":{"y":323,"width":720,"var":"tab","height":70},"child":[{"type":"Button","props":{"y":24,"x":165,"stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_dl0.png","name":"item1"}},{"type":"Button","props":{"y":24,"x":535,"stateNum":2,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_dl0.png","name":"item2"}}]},{"type":"Image","props":{"y":193,"x":369,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":260,"x":284,"text":"老板1234567","fontSize":30,"color":"#7b7b7b","bold":true}},{"type":"Label","props":{"y":462,"x":89,"var":"lb_num_money","text":"12345678","fontSize":43,"color":"#7b7b7b"}},{"type":"Label","props":{"y":462,"x":528,"var":"lb_num_hb","text":"6","fontSize":43,"color":"#7b7b7b"}},{"type":"List","props":{"y":592,"x":0,"width":720,"var":"list_info","spaceY":-10,"renderType":"render","height":688},"child":[{"type":"WXSaoLei_LB1","props":{"y":-6,"x":0,"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_JLUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_MXUI extends View {
		public btn_more:Laya.Button;
		public btn_back:Laya.Button;
		public list_ye:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Image","props":{"width":720,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_d.png","height":1282}},{"type":"Image","props":{"width":720,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","sizeGrid":"5,5,5,5","height":115}},{"type":"Button","props":{"y":54,"x":652,"var":"btn_more","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_d.png","right":23}},{"type":"Button","props":{"y":38,"var":"btn_back","stateNum":1,"skin":"hongbaosaolei_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","left":27}},{"type":"Label","props":{"y":44,"x":298,"text":"余额明细","fontSize":30,"color":"#000000","bold":true}},{"type":"List","props":{"y":115,"x":0,"width":720,"var":"list_ye","repeatX":1,"height":1170},"child":[{"type":"WXSaoLei_LB2","props":{"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_MXUI.uiView);
        }
    }
}
