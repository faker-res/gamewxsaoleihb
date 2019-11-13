
module ui.nqp.game_ui.wxsaoleihb.component {
    export class Effect_fzUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":158,"height":158,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_di.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":69,"x":79,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_sj.png","anchorY":0.5,"anchorX":0.5},"compId":7}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":7,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":6}]}}],"name":"ani1","id":1,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.Effect_fzUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_getUI extends View {
		public img_di:Laya.Image;
		public box_main:Laya.Box;
		public lb_info:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":43},"child":[{"type":"Image","props":{"var":"img_di","top":-1,"skin":"tongyong_ui/game_ui/tongyong/general/tu_k3.png","sizeGrid":"10,10,10,10","right":-1,"left":-1,"bottom":-1,"alpha":0.3}},{"type":"Box","props":{"var":"box_main","centerY":0,"centerX":0},"child":[{"type":"Label","props":{"var":"lb_info","text":"玩家领取了您的红包,获得0.13元,中雷1赔付3.60元","fontSize":20,"color":"#000000","centerY":0,"centerX":0,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_getUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_HB1UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public box_main:Laya.Box;
		public img_di:Laya.Image;
		public img_kuang:Laya.Image;
		public img_hb:Laya.Image;
		public img_light:Laya.Image;
		public lb_sy:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_money:Laya.Label;
		public lb_status:Laya.Label;
		public lb_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":476,"height":168},"child":[{"type":"Box","props":{"width":600,"top":-1,"right":-1,"left":-1,"height":169,"bottom":-1},"child":[{"type":"Image","props":{"var":"img_head","top":1,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":0.83,"scaleX":0.83,"left":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":20,"x":180,"width":150,"var":"lb_name","top":0,"text":"喵喵喵","left":90,"height":17,"fontSize":18,"color":"#595858","bold":true,"align":"left"}},{"type":"Box","props":{"var":"box_main","top":29,"right":5,"left":90,"bottom":0},"child":[{"type":"Image","props":{"var":"img_di","top":0,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb0.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sj.png","right":60,"bottom":8}},{"type":"Box","props":{"width":58,"left":30,"height":68,"centerY":-22,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":34,"x":29,"var":"img_kuang","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_gq.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":20},{"type":"Image","props":{"y":34,"x":29,"var":"img_hb","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb4.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":27,"x":29,"var":"img_light","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":18}]},{"type":"Label","props":{"width":150,"var":"lb_sy","text":"剩余:9/9","left":29,"height":17,"fontSize":17,"color":"#595858","bottom":10,"bold":false}},{"type":"Label","props":{"width":150,"var":"lb_ld","text":"12345","left":155,"height":20,"fontSize":21,"color":"#3b72fe","centerY":-8,"bold":false}},{"type":"Label","props":{"width":50,"text":"雷号:","left":99,"height":22,"fontSize":21,"color":"#3b72fe","centerY":-8,"bold":true}},{"type":"Label","props":{"width":150,"var":"lb_money","text":"12345","left":155,"height":20,"fontSize":21,"color":"#ffffff","centerY":-41,"bold":false}},{"type":"Label","props":{"width":50,"text":"金额:","left":99,"height":22,"fontSize":21,"color":"#ffffff","centerY":-40,"bold":true}},{"type":"Label","props":{"x":304,"width":80,"var":"lb_status","text":"已领完","right":10,"height":20,"fontSize":21,"color":"#ffffff","centerY":-49,"bold":true}},{"type":"Label","props":{"width":40,"var":"lb_time","text":"00秒","right":10,"height":17,"fontSize":17,"color":"#595858","bottom":12,"bold":false}}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":14}]}},{"target":20,"keyframes":{"scaleY":[{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":15}],"scaleX":[{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":18,"keyframes":{"skin":[{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":0},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10001.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":2},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10002.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":4},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10003.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":6},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10004.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":8},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10005.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":10},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10006.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":12},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10007.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":14},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10008.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":16},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10009.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":18},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10010.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":20},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10011.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":22}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":22}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":22}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":22}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":22}]}},{"target":20,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":22}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":22}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":22}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_HB2UI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public ani3:Laya.FrameAnimation;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public box_main:Laya.Box;
		public img_di:Laya.Image;
		public img_kuang:Laya.Image;
		public img_hb:Laya.Image;
		public img_light:Laya.Image;
		public lb_time:Laya.Label;
		public lb_money:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_sy:Laya.Label;
		public lb_status:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":476,"height":168},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"var":"img_head","top":1,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":0.83,"scaleX":0.83,"right":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":172,"var":"lb_name","top":0,"text":"喵喵喵","right":90,"height":17,"fontSize":18,"color":"#595858","bold":true,"align":"right"}},{"type":"Box","props":{"width":383,"var":"box_main","top":29,"right":90,"left":5,"height":145,"bottom":0},"child":[{"type":"Image","props":{"var":"img_di","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb1.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sg1.png","right":-1,"left":-1,"bottom":-1,"blendMode":"lighter"},"compId":21},{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sj.png","right":60,"bottom":9}},{"type":"Box","props":{"width":58,"left":26,"height":68,"centerY":-23},"child":[{"type":"Image","props":{"y":34,"x":29,"var":"img_kuang","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_gq.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":17},{"type":"Image","props":{"y":34,"x":29,"var":"img_hb","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb4.png","anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":27,"x":29,"var":"img_light","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":18}]},{"type":"Label","props":{"var":"lb_time","text":"00秒","right":10,"height":17,"fontSize":17,"color":"#595858","bottom":12,"bold":false}},{"type":"Label","props":{"width":50,"text":"金额:","left":100,"height":22,"fontSize":21,"color":"#ffffff","centerY":-39,"bold":true}},{"type":"Label","props":{"width":150,"var":"lb_money","text":"12345","left":164,"height":20,"fontSize":21,"color":"#ffffff","centerY":-40,"bold":false}},{"type":"Label","props":{"width":50,"text":"雷号:","left":99,"height":22,"fontSize":21,"color":"#3b72fe","centerY":-9,"bold":true}},{"type":"Label","props":{"width":150,"var":"lb_ld","text":"12345","left":165,"height":20,"fontSize":21,"color":"#3b72fe","centerY":-11,"bold":false}},{"type":"Label","props":{"width":150,"var":"lb_sy","text":"剩余:9/9","left":20,"height":17,"fontSize":17,"color":"#595858","bottom":11,"bold":false}},{"type":"Label","props":{"var":"lb_status","text":"已领完","right":10,"height":20,"fontSize":21,"color":"#ffffff","centerY":-56,"bold":true}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleY","index":14}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":14}]}},{"target":17,"keyframes":{"scaleY":[{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":15}],"scaleX":[{"value":0.95,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":6},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":18,"keyframes":{"skin":[{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":0},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10001.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":2},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10002.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":4},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10003.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":6},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10004.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":8},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10005.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":10},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10006.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":12},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10007.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":14},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10008.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":16},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10009.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":18},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10010.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":20},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10011.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":22}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":22}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":22}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":22}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":11},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":22}]}},{"target":17,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":22}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":22}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":22}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":21,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":10}]}}],"name":"ani3","id":3,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_LBUI extends View {
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public lb_time:Laya.Label;
		public lb_money:Laya.Label;
		public img_sqzj:Laya.Image;
		public img_zl:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":112},"child":[{"type":"Box","props":{"top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.56,"scaleX":0.56,"left":42,"centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_name","text":"喵喵喵","strokeColor":"#000000","stroke":1,"left":103,"fontSize":24,"centerY":-10}},{"type":"Label","props":{"var":"lb_time","text":"22:23:59","left":95,"fontSize":22,"color":"#595858","centerY":16}},{"type":"Label","props":{"var":"lb_money","text":"10.59","strokeColor":"#000000","stroke":1,"right":56,"fontSize":22,"centerY":-9}},{"type":"Image","props":{"y":109,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":38,"left":44}},{"type":"Image","props":{"var":"img_sqzj","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sqzj.png","right":113,"centerY":19}},{"type":"Image","props":{"var":"img_zl","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_zl.png","right":42,"centerY":19}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_LB1UI extends View {
		public lb_date:Laya.Label;
		public lb_time:Laya.Label;
		public lb_type:Laya.Label;
		public lb_money:Laya.Label;
		public lb_diff:Laya.Label;
		public btn_jh:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":108,"alpha":1},"child":[{"type":"Box","props":{"width":720,"height":108},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","height":108}},{"type":"Image","props":{"y":103,"x":25,"width":686,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png"}},{"type":"Label","props":{"y":29,"x":24,"var":"lb_date","text":"2019-10-29","fontSize":23,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":55,"x":39,"var":"lb_time","text":"20:50:27","fontSize":23,"align":"center"}},{"type":"Label","props":{"y":39,"x":204,"var":"lb_type","text":"福利红包","fontSize":23,"bold":true,"align":"center"}},{"type":"Label","props":{"y":39,"x":396,"var":"lb_money","text":"0.4846","fontSize":23,"align":"center"}},{"type":"Label","props":{"y":39,"x":560,"var":"lb_diff","text":"000000","fontSize":23,"align":"center"}},{"type":"Button","props":{"y":37,"x":681,"var":"btn_jh","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt0.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_LB2UI extends View {
		public lb_type:Laya.Label;
		public lb_money:Laya.Label;
		public lb_date:Laya.Label;
		public lb_time:Laya.Label;
		public lb_diff:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":98},"child":[{"type":"Box","props":{"y":16,"x":30},"child":[{"type":"Image","props":{"y":79,"width":686,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png"}},{"type":"Label","props":{"x":22,"var":"lb_type","text":"福利包","fontSize":23,"color":"#000000","bold":true,"align":"left"}},{"type":"Label","props":{"y":37,"x":95,"var":"lb_money","text":"20:50:27","fontSize":23}},{"type":"Label","props":{"y":2,"x":406,"var":"lb_date","text":"2019-10-29","fontSize":23,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":2,"x":573,"var":"lb_time","text":"22:48:56","fontSize":23,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":44,"x":579,"var":"lb_diff","text":"000000","fontSize":23,"align":"center"}},{"type":"Label","props":{"y":37,"x":22,"text":"余额:","fontSize":25,"bold":true}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_TXUI extends View {
		public img_head:Laya.Image;
		public lb_name:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":180,"height":140},"child":[{"type":"Box","props":{"y":0,"x":25,"width":132,"height":140},"child":[{"type":"Image","props":{"y":55,"x":65,"width":110,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","height":110,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":116,"var":"lb_name","text":"物是人非事事休","fontSize":18,"centerX":0,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_TXUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLeiUI extends View {
		public box_main:Laya.Box;
		public img_up:Laya.Image;
		public panel_hb:Laya.Panel;
		public btn_share:Laya.Button;
		public box_hb:Laya.Box;
		public lb_hby_tim:Laya.Label;
		public lb_map_name:Laya.Label;
		public box_di1:Laya.Box;
		public img_di1_bg:Laya.Image;
		public box_di1_up:Laya.Box;
		public btn_add:Laya.Button;
		public btn_di1:Laya.Button;
		public box_di1_down:Laya.Box;
		public btn_fhb:Laya.Button;
		public btn_hbjl:Laya.Button;
		public btn_ye:Laya.Button;
		public box_di2:Laya.Box;
		public btn_di2:Laya.Button;
		public box_fhb:Laya.Box;
		public box_ye:Laya.Box;
		public lb_ye:Laya.Label;
		public lb_dj:Laya.Label;
		public lb_yemx:Laya.Label;
		public lb_ok:Laya.Label;
		public box_hb_open:Laya.Box;
		public hb_finsh:Laya.Box;
		public finsh_head:Laya.Image;
		public finsh_name:Laya.Label;
		public finsh_check:Laya.Box;
		public hb_rain:Laya.Box;
		public lb_rain_info:Laya.Label;
		public hby_time:Laya.Label;
		public rain_open:Laya.Button;
		public hb_open:Laya.Box;
		public open_head:Laya.Image;
		public open_name:Laya.Label;
		public open_hb_name:Laya.Label;
		public open_ld:Laya.Label;
		public btn_hb_open:Laya.Button;
		public btn_hb_close:Laya.Button;
		public btn_more:Laya.Box;
		public btn_back:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"height":1282,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"var":"img_up","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","sizeGrid":"5,5,5,5","right":-1,"left":-1,"height":115}},{"type":"Panel","props":{"y":115,"var":"panel_hb","right":-1,"left":-1,"height":962}},{"type":"Button","props":{"y":313,"var":"btn_share","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_fx.png","scaleY":0.7,"scaleX":0.7,"right":17,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":189,"width":102,"var":"box_hb","right":3,"height":89,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":52,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hby.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":67,"x":30,"var":"lb_hby_tim","text":"01:08","fontSize":18,"color":"#000000"}}]},{"type":"Label","props":{"var":"lb_map_name","top":40,"text":"新手场","fontSize":30,"color":"#000000","centerX":0,"bold":true}},{"type":"Box","props":{"var":"box_di1","right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"var":"img_di1_bg","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","right":-1,"left":-1,"height":207,"bottom":-1}},{"type":"Box","props":{"var":"box_di1_up","top":17,"right":-1,"left":-1,"height":67},"child":[{"type":"Image","props":{"y":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":190,"left":131},"child":[{"type":"Label","props":{"text":"本房间禁言中","fontSize":21,"color":"#000000","centerY":0,"centerX":0,"bold":true}}]},{"type":"Button","props":{"y":27,"var":"btn_add","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_gd.png","scaleY":0.65,"scaleX":0.65,"right":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":7,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_bq.png","right":140}},{"type":"Button","props":{"y":29,"x":63,"var":"btn_di1","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_aj.png","rotation":180,"left":40,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"var":"box_di1_down","right":-1,"left":-1,"height":150,"bottom":0},"child":[{"type":"Button","props":{"var":"btn_fhb","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_fhb1.png","left":50,"centerY":-3,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":95,"x":15,"text":"发红包","fontSize":18,"color":"#000000","bold":true}}]},{"type":"Button","props":{"var":"btn_hbjl","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_hbjl.png","left":181,"centerY":-3,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":95,"x":6,"text":"红包记录","fontSize":18,"color":"#000000","bold":true}}]},{"type":"Button","props":{"width":86,"var":"btn_ye","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_yue.png","sizeGrid":"0,0,0,0","left":306,"height":86,"centerY":-3,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":95,"x":29,"text":"余额","fontSize":18,"color":"#000000","bold":true}}]}]}]},{"type":"Box","props":{"var":"box_di2","right":-1,"left":-1,"height":135,"bottom":0},"child":[{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","sizeGrid":"5,5,5,5","right":-1,"left":-1,"height":75,"bottom":0}},{"type":"Button","props":{"x":40,"var":"btn_di2","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_aj.png","left":40,"bottom":6}},{"type":"Box","props":{"width":116,"var":"box_fhb","height":120,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"x":0,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_fhb.png","bottom":3}}]}]},{"type":"Box","props":{"var":"box_ye","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d3.png"}},{"type":"Label","props":{"y":43,"x":189,"var":"lb_ye","text":"余额:1234","fontSize":30,"color":"#464545","bold":true,"align":"center"}},{"type":"Label","props":{"y":98,"x":189,"var":"lb_dj","text":"冻结:1234","fontSize":30,"color":"#e94447","bold":true,"align":"center"}},{"type":"Label","props":{"y":216,"x":131,"var":"lb_yemx","text":"余额明细","fontSize":29,"color":"#1473e5","bold":true,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":216,"x":380,"var":"lb_ok","text":"知道了","fontSize":29,"color":"#1473e5","bold":true,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"var":"box_hb_open","top":130,"right":100,"left":100,"bottom":200},"child":[{"type":"Image","props":{"top":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d2.png","right":-1,"left":-1,"bottom":90},"child":[{"type":"Box","props":{"x":0,"var":"hb_finsh","top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"y":199,"var":"finsh_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.56,"scaleX":0.56,"centerX":-120,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":179,"width":150,"var":"finsh_name","text":"喵喵喵","height":40,"fontSize":35,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Label","props":{"y":258,"text":"发送了一个福利红包","height":40,"fontSize":38,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Label","props":{"y":342,"text":"手慢了，红包派完了","height":40,"fontSize":35,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Box","props":{"width":152,"var":"finsh_check","height":30,"centerX":0,"bottom":40},"child":[{"type":"Label","props":{"y":15,"text":"查看红包详情","fontSize":24,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":16,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt1.png","scaleY":0.3,"scaleX":-0.3,"centerX":81,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"var":"hb_rain","top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"y":120,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hby.png","scaleY":0.7,"scaleX":0.7,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":175,"text":"红包雨","fontSize":35,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Label","props":{"y":358,"var":"lb_rain_info","text":"剩余时间","fontSize":35,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Label","props":{"y":421,"var":"hby_time","text":"00.00","fontSize":30,"color":"#fcf0b4","centerX":0}},{"type":"Button","props":{"y":572,"x":163,"var":"rain_open","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_k.png","centerX":0}}]},{"type":"Box","props":{"var":"hb_open","top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"y":199,"var":"open_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.56,"scaleX":0.56,"centerX":-120,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":179,"width":150,"var":"open_name","text":"喵喵喵","height":40,"fontSize":35,"color":"#fcf0b4","centerX":0,"bold":true,"align":"center"}},{"type":"Label","props":{"y":258,"text":"发送了一个福利红包","height":40,"fontSize":38,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Label","props":{"y":329,"var":"open_hb_name","text":"123","height":55,"fontSize":55,"color":"#fcf0b4","centerX":0,"align":"center"}},{"type":"Box","props":{"y":411,"centerX":0},"child":[{"type":"Label","props":{"text":"雷号:","fontSize":38,"color":"#fcf0b4","bold":true}},{"type":"Label","props":{"x":89,"var":"open_ld","text":"123","fontSize":38,"color":"#349dff"}}]},{"type":"Button","props":{"y":572,"var":"btn_hb_open","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_k.png","centerX":0}}]}]},{"type":"Button","props":{"var":"btn_hb_close","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_qc.png","centerX":0,"bottom":0}}]},{"type":"Box","props":{"width":85,"var":"btn_more","top":11,"right":15,"height":85},"child":[{"type":"Button","props":{"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_d.png","centerY":0,"centerX":0}}]},{"type":"Box","props":{"width":85,"var":"btn_back","top":14,"left":15,"height":85},"child":[{"type":"Button","props":{"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","centerY":0,"centerX":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLeiUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLeiHB_InfoUI extends View {
		public box_main:Laya.Box;
		public box_info:Laya.Box;
		public clip_hb_num:Laya.Clip;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public lb_hb_name:Laya.Label;
		public lb_yuan:Laya.Label;
		public lb_hb_num:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_lq:Laya.Label;
		public lb_hbjl:Laya.Label;
		public hb_info_list:Laya.List;
		public box_rain:Laya.Box;
		public rain_money:Laya.Label;
		public btn_back:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_jl.png","right":-1,"left":-1,"bottom":-1}},{"type":"Box","props":{"var":"box_info","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":330,"var":"clip_hb_num","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/clip_0-9.png","clipX":11,"centerX":-28,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":141,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.58,"scaleX":0.58,"centerX":-120,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":122,"var":"lb_name","text":"喵喵喵","strokeColor":"#fcf0b4","stroke":1,"fontSize":35,"color":"#fcf0b4","centerX":0}},{"type":"Label","props":{"y":187,"var":"lb_hb_name","text":"恭喜发财，大吉大利","strokeColor":"#fcf0b4","stroke":1,"fontSize":25,"color":"#fcf0b4","centerX":0}},{"type":"Label","props":{"y":335,"var":"lb_yuan","text":"元","strokeColor":"#fcf0b4","stroke":1,"fontSize":25,"color":"#fcf0b4","centerX":31}},{"type":"Label","props":{"y":421,"var":"lb_hb_num","text":"7个红包","left":120,"fontSize":30,"color":"#fcf0b4","bold":true}},{"type":"Label","props":{"y":421,"var":"lb_ld","text":"雷号:0","right":145,"fontSize":30,"color":"#fcf0b4","bold":true}},{"type":"Label","props":{"var":"lb_lq","text":"领取7/7个","strokeColor":"#595858","stroke":1,"left":32,"fontSize":25,"color":"#595858","centerY":0}},{"type":"Label","props":{"var":"lb_hbjl","top":30,"text":"红包记录","right":24,"fontSize":40,"color":"#fcf0b4","bold":true}},{"type":"Box","props":{"width":726,"right":-1,"left":-1,"height":1286,"centerY":665},"child":[{"type":"List","props":{"x":0,"var":"hb_info_list","top":-1,"spaceY":-1,"right":-1,"repeatX":1,"left":-1,"bottom":-1},"child":[{"type":"WXSaoLei_LB","props":{"x":0,"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI"}}]}]}]},{"type":"Box","props":{"var":"box_rain","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":186,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hby.png","scaleY":0.65,"scaleX":0.65,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":239,"text":"红包雨","fontSize":35,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Label","props":{"y":312,"text":"不可错过的零花钱","fontSize":26,"color":"#fcf0b4","centerX":0,"bold":true}},{"type":"Label","props":{"text":"本次领取:","strokeColor":"#595858","stroke":1,"left":40,"fontSize":25,"color":"#595858","centerY":0}},{"type":"Label","props":{"var":"rain_money","text":"0.01元","strokeColor":"#595858","stroke":1,"fontSize":70,"color":"#000000","centerY":262,"centerX":0}},{"type":"Label","props":{"text":"已放入余额","strokeColor":"#595858","stroke":1,"fontSize":25,"color":"#595858","centerY":311,"centerX":0}},{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":33,"left":33,"centerY":43}}]},{"type":"Button","props":{"var":"btn_back","top":36,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt1.png","left":35}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLeiHB_InfoUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_GDUI extends View {
		public box_main:Laya.Box;
		public room_info:Laya.Box;
		public lb_info:Laya.Label;
		public lb_name:Laya.Label;
		public lb_money:Laya.Label;
		public hb_time:Laya.Label;
		public b_num1:Laya.Label;
		public b_num2:Laya.Label;
		public box_player:Laya.Box;
		public box_rule:Laya.Box;
		public player_info:Laya.Box;
		public list_player:Laya.List;
		public btn_back:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"top":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"height":102}},{"type":"Box","props":{"var":"room_info","top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"y":102,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":187},"child":[{"type":"Label","props":{"top":32,"text":"房间名称","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","bold":true}},{"type":"Label","props":{"top":125,"text":"房间介绍","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","bold":true}},{"type":"Label","props":{"var":"lb_info","top":125,"text":"7/9包","strokeColor":"#000000","right":270,"fontSize":26,"color":"#000000"}},{"type":"Label","props":{"var":"lb_name","top":32,"text":"新手场","strokeColor":"#000000","right":270,"fontSize":26,"color":"#000000","bold":true}}]},{"type":"Image","props":{"y":299,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":555},"child":[{"type":"Label","props":{"top":123,"text":"发包金额","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","bold":true}},{"type":"Label","props":{"top":215,"text":"红包有效时间","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","bold":true}},{"type":"Label","props":{"top":309,"text":"单雷可发包","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","bold":true}},{"type":"Label","props":{"top":401,"text":"多雷可发包","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","bold":true}},{"type":"Label","props":{"var":"lb_money","top":123,"text":"1.00-3.00","strokeColor":"#000000","right":265,"fontSize":26,"color":"#000000"}},{"type":"Label","props":{"var":"hb_time","top":215,"text":"90秒","strokeColor":"#000000","right":285,"fontSize":26,"color":"#000000"}},{"type":"Label","props":{"var":"b_num1","top":309,"text":"7,9","strokeColor":"#000000","right":295,"fontSize":26,"color":"#000000"}},{"type":"Label","props":{"var":"b_num2","top":401,"text":"9","strokeColor":"#000000","right":304,"fontSize":26,"color":"#000000"}}]},{"type":"Label","props":{"top":44,"text":"成员列表","strokeColor":"#000000","fontSize":30,"color":"#000000","centerX":0,"bold":true}},{"type":"Image","props":{"y":193,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36}},{"type":"Image","props":{"y":388,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36}},{"type":"Image","props":{"y":481,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36}},{"type":"Image","props":{"y":574,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36}},{"type":"Image","props":{"y":668,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36}},{"type":"Image","props":{"y":761,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36}},{"type":"Box","props":{"y":299,"var":"box_player","right":-1,"left":-1,"height":90},"child":[{"type":"Label","props":{"top":30,"text":"房间成员","strokeColor":"#000000","left":45,"fontSize":26,"color":"#000000","bold":true}},{"type":"Button","props":{"top":31,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt0.png","right":44}}]},{"type":"Box","props":{"y":763,"var":"box_rule","right":-1,"left":-1,"height":90},"child":[{"type":"Label","props":{"top":30,"text":"游戏规则","strokeColor":"#000000","left":45,"fontSize":26,"color":"#000000","bold":true}},{"type":"Button","props":{"top":31,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt0.png","right":42}}]}]},{"type":"Box","props":{"var":"player_info","top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"List","props":{"var":"list_player","top":108,"spaceY":40,"right":-1,"left":-1,"bottom":0},"child":[{"type":"WXSaoLei_TX","props":{"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_TXUI"}}]},{"type":"Label","props":{"top":44,"text":"玩家信息","strokeColor":"#000000","fontSize":30,"color":"#000000","centerX":0,"bold":true}}]},{"type":"Button","props":{"x":27,"var":"btn_back","top":38,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","left":27}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_TXUI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_TXUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_GDUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_GuiZeUI extends View {
		public box_main:Laya.Box;
		public box_out:Laya.Box;
		public btn_close:Laya.Button;
		public img_pf:Laya.Image;
		public panel_out:Laya.Panel;
		public tab_Type:Laya.Tab;
		public box_inner:Laya.Box;
		public btn_back:Laya.Button;
		public panel_inner:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":355,"x":-92,"width":904,"var":"box_out","height":571,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":-25,"x":12,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png"}},{"type":"Image","props":{"y":68,"x":254,"width":610,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d.png","sizeGrid":"50,50,50,50","height":465}},{"type":"Image","props":{"y":1,"x":363,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png"}},{"type":"Button","props":{"y":-33,"x":834,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}},{"type":"Image","props":{"y":70,"x":257,"var":"img_pf","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/guize/guize_0.png"}},{"type":"Panel","props":{"y":70,"x":257,"width":605,"var":"panel_out","height":460},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/guize/guize_1.png"}}]},{"type":"Tab","props":{"y":69,"x":53,"var":"tab_Type"},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":80,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_jspf.png","name":"item1"}}]}]},{"type":"Box","props":{"var":"box_inner","top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"top":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","sizeGrid":"5,5,5,5","right":-1,"left":-1,"height":115}},{"type":"Button","props":{"var":"btn_back","top":38,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","left":27}},{"type":"Label","props":{"top":44,"text":"游戏规则","fontSize":30,"color":"#000000","centerX":0,"bold":true}},{"type":"Panel","props":{"x":-1,"width":1280,"var":"panel_inner","top":115,"height":1176},"child":[{"type":"Image","props":{"y":-1,"x":7,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/guize/guize_2.png"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_HBUI extends View {
		public box_main:Laya.Box;
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
		public lb_lh_title:Laya.Label;
		public lb_lh:Laya.Label;
		public box_danL:Laya.Box;
		public lb_danL_info:Laya.Label;
		public lb_hbDanl_num:Laya.Label;
		public hb_danL_num1:Laya.Button;
		public hb_danL_num2:Laya.Button;
		public box_duoL:Laya.Box;
		public lb_duoL_info:Laya.Label;
		public lb_hbDuol_num:Laya.Label;
		public hb_duoL_num1:Laya.Button;
		public txtInput:Laya.TextInput;
		public btn_back:Laya.Button;
		public btn_send:Laya.Button;
		public lb_range:Laya.Label;
		public lb_ye:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":0,"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"y":117,"x":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":72},"child":[{"type":"Tab","props":{"y":1,"x":0,"var":"tab_hb","right":-1,"left":-1,"height":76},"child":[{"type":"Button","props":{"top":17,"stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_dl1.png","name":"item0","centerX":-185}},{"type":"Button","props":{"top":15,"stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sl1.png","name":"item1","centerX":156}}]}]},{"type":"Image","props":{"y":208,"width":724,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":599},"child":[{"type":"Box","props":{"y":252,"x":0,"right":-1,"left":-1,"height":341},"child":[{"type":"Button","props":{"var":"btn_0","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_0.png","centerY":-45,"centerX":-280}},{"type":"Button","props":{"var":"btn_1","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_1.png","centerY":-45,"centerX":-165}},{"type":"Button","props":{"var":"btn_2","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_2.png","centerY":-45,"centerX":-50}},{"type":"Button","props":{"var":"btn_3","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_3.png","centerY":-45,"centerX":65}},{"type":"Button","props":{"var":"btn_4","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_4.png","centerY":-45,"centerX":180}},{"type":"Button","props":{"var":"btn_5","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_5.png","centerY":-45,"centerX":295}},{"type":"Button","props":{"var":"btn_6","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_6.png","centerY":80,"centerX":-280}},{"type":"Button","props":{"var":"btn_7","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_7.png","centerY":80,"centerX":-165}},{"type":"Button","props":{"var":"btn_8","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_8.png","centerY":80,"centerX":-50}},{"type":"Button","props":{"var":"btn_9","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_9.png","centerY":80,"centerX":65}},{"type":"Button","props":{"var":"btn_random","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sj.png","centerY":81,"centerX":242}},{"type":"Label","props":{"width":132,"var":"lb_lh_title","text":"选择雷号:","fontSize":30,"centerY":-145,"centerX":-259,"bold":true}},{"type":"Label","props":{"width":435,"var":"lb_lh","text":"9","height":30,"fontSize":30,"color":"#e94447","centerY":-143,"centerX":32}}]},{"type":"Label","props":{"y":32,"x":32,"text":"选择包数:","fontSize":30,"color":"#000000","centerX":-264,"bold":true}},{"type":"Box","props":{"y":-2,"x":0,"var":"box_danL","right":-1,"left":-1,"height":261},"child":[{"type":"Box","props":{"centerY":104,"centerX":-263},"child":[{"type":"Label","props":{"var":"lb_danL_info","text":"赔率:1.6","fontSize":30,"bold":true}}]},{"type":"Box","props":{"width":201,"height":155,"centerY":-21,"centerX":-225},"child":[{"type":"Label","props":{"x":138,"var":"lb_hbDanl_num","text":"7包","fontSize":30,"color":"#e94447"}},{"type":"Button","props":{"y":66,"x":0,"var":"hb_danL_num1","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_7.png"}},{"type":"Button","props":{"y":66,"x":111,"var":"hb_danL_num2","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_9.png"}}]}]},{"type":"Box","props":{"y":-2,"x":0,"var":"box_duoL","right":-1,"left":-1,"height":261},"child":[{"type":"Box","props":{"centerY":104,"centerX":7},"child":[{"type":"Label","props":{"var":"lb_duoL_info","text":"赔率:单雷1.2,双雷1.05,三雷1.28,四雷1.8,五雷2.5","fontSize":30,"centerY":0,"centerX":0,"bold":true}}]},{"type":"Box","props":{"width":201,"height":155,"centerY":-21,"centerX":-225},"child":[{"type":"Label","props":{"var":"lb_hbDuol_num","text":"9包","fontSize":30,"color":"#e94447","centerX":61}},{"type":"Button","props":{"y":64,"x":1,"var":"hb_duoL_num1","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_9.png"}}]}]}]},{"type":"Image","props":{"y":818,"width":724,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":200},"child":[{"type":"Image","props":{"y":164,"x":123,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":141,"left":123}},{"type":"Image","props":{"y":116,"x":104,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_q.png","centerX":-245}},{"type":"TextInput","props":{"y":110,"x":162,"width":399,"var":"txtInput","restrict":"0-9","promptColor":"#7b7b7b","prompt":"发包金额","maxChars":3,"height":50,"fontSize":35,"centerX":-1,"bold":true}},{"type":"Label","props":{"y":21,"x":35,"text":"发包金额","fontSize":28,"color":"#000000","centerX":-270,"bold":true}}]},{"type":"Button","props":{"var":"btn_back","top":32,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","left":44}},{"type":"Button","props":{"var":"btn_send","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sqjhb.png","centerX":0,"bottom":30}},{"type":"Label","props":{"top":40,"text":"发红包","fontSize":28,"color":"#000000","centerX":0,"bold":true}},{"type":"Label","props":{"y":1028,"var":"lb_range","text":"红包发放范围:1-3","fontSize":28,"color":"#000000","centerX":-214,"bold":true}},{"type":"Label","props":{"y":1072,"text":"余额:","fontSize":28,"color":"#000000","centerX":-290,"bold":true}},{"type":"Label","props":{"y":1070,"var":"lb_ye","text":"199.99","fontSize":30,"color":"#e94447","centerX":-191}}]}]};
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
		public txt_min0:Laya.Clip;
		public txt_max0:Laya.Clip;
		public img_room1:Laya.Box;
		public txt_min1:Laya.Clip;
		public txt_max1:Laya.Clip;
		public img_room2:Laya.Box;
		public txt_min2:Laya.Clip;
		public txt_max2:Laya.Clip;
		public btn_join:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_zjh.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.nqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1280,"var":"box_right","height":465,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":73,"width":301,"var":"img_room0","right":880,"height":286},"child":[{"type":"SkeletonPlayer","props":{"y":157,"x":146,"url":"wxsaoleihb_ui/game_ui/wxsaoleihb/sk/wxhb_0.sk"}},{"type":"Clip","props":{"y":242,"x":140,"var":"txt_min0","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_1.png","clipX":11}},{"type":"Image","props":{"y":246,"x":83,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_x1.png"}},{"type":"Image","props":{"y":249,"x":168,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_1.png"}},{"type":"Clip","props":{"y":238,"x":189,"var":"txt_max0","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_1.png","clipX":11}},{"type":"Image","props":{"y":192,"x":107,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_z1.png"}}]},{"type":"Box","props":{"y":54,"width":301,"var":"img_room1","right":490,"height":305},"child":[{"type":"SkeletonPlayer","props":{"y":174,"x":147,"url":"wxsaoleihb_ui/game_ui/wxsaoleihb/sk/wxhb_1.sk"}},{"type":"Clip","props":{"y":261,"x":145,"var":"txt_min1","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_2.png","clipX":11}},{"type":"Image","props":{"y":208,"x":113,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_z0.png"}},{"type":"Image","props":{"y":264,"x":93,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_x0.png"}},{"type":"Image","props":{"y":267,"x":169,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_0.png"}},{"type":"Clip","props":{"y":257,"x":186,"var":"txt_max1","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_2.png","clipX":11}}]},{"type":"Box","props":{"y":40,"width":301,"var":"img_room2","right":95,"height":319},"child":[{"type":"SkeletonPlayer","props":{"y":187,"x":146,"url":"wxsaoleihb_ui/game_ui/wxsaoleihb/sk/wxhb_2.sk"}},{"type":"Clip","props":{"y":276,"x":138,"var":"txt_min2","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_3.png","clipX":11}},{"type":"Image","props":{"y":277,"x":89,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_x3.png"}},{"type":"Image","props":{"y":281,"x":160,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_3.png"}},{"type":"Image","props":{"y":223,"x":107,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_z2.png"}},{"type":"Clip","props":{"y":271,"x":176,"var":"txt_max2","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_3.png","clipX":11}}]}]},{"type":"Image","props":{"top":10,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/sl_title.png","scaleY":0.8,"scaleX":0.8,"centerX":225,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
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
		public box_main:Laya.Box;
		public btn_back:Laya.Button;
		public tab:Laya.Tab;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public lb_num_money:Laya.Label;
		public lb_num_hb:Laya.Label;
		public lb_type:Laya.Label;
		public list_info:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"width":722,"var":"box_main","top":-1,"right":-1,"left":-1,"height":1282,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":-1,"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"y":320,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":72}},{"type":"Image","props":{"width":724,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":755,"bottom":-1}},{"type":"Button","props":{"var":"btn_back","top":32,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","left":44}},{"type":"Image","props":{"top":342,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_g.png","centerX":0}},{"type":"Tab","props":{"y":323,"var":"tab","right":-1,"left":-1,"height":70},"child":[{"type":"Button","props":{"top":20,"stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sl.png","name":"item0","left":126}},{"type":"Button","props":{"top":20,"stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sl0.png","right":126,"name":"item1"}}]},{"type":"Image","props":{"var":"img_head","top":146,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":1.2,"scaleX":1.2,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"top":40,"text":"红包记录","fontSize":32,"color":"#000000","centerX":0,"bold":true}},{"type":"Label","props":{"var":"lb_name","top":260,"text":"老板1234567","fontSize":30,"color":"#7b7b7b","centerX":0,"bold":true}},{"type":"Label","props":{"var":"lb_num_money","top":462,"text":"12345678","left":89,"fontSize":43,"color":"#7b7b7b"}},{"type":"Label","props":{"var":"lb_num_hb","top":462,"text":"6","right":175,"fontSize":43,"color":"#7b7b7b"}},{"type":"Label","props":{"var":"lb_type","top":422,"text":"共收","left":166,"fontSize":20,"color":"#7b7b7b","bold":true}},{"type":"Label","props":{"top":422,"text":"个数","right":166,"fontSize":20,"color":"#7b7b7b","bold":true}},{"type":"Label","props":{"top":548,"text":"时间","left":62,"fontSize":26,"color":"#7b7b7b","bold":true}},{"type":"Label","props":{"top":548,"text":"金额","left":404,"fontSize":26,"color":"#7b7b7b","bold":true}},{"type":"Label","props":{"top":548,"text":"玩家昵称","left":208,"fontSize":26,"color":"#7b7b7b","bold":true}},{"type":"Label","props":{"top":548,"text":"赔付/获赔","left":547,"fontSize":26,"color":"#7b7b7b","bold":true}},{"type":"List","props":{"y":592,"var":"list_info","right":-1,"left":-1,"height":688},"child":[{"type":"WXSaoLei_LB1","props":{"y":-6,"x":0,"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI"}}]},{"type":"Image","props":{"top":601,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","centerX":0}}]}]};
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
		public box_main:Laya.Box;
		public btn_back:Laya.Button;
		public list_ye:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"top":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","sizeGrid":"5,5,5,5","right":-1,"left":-1,"height":115}},{"type":"Button","props":{"var":"btn_back","top":32,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","left":44}},{"type":"Label","props":{"top":40,"text":"余额明细","fontSize":30,"color":"#000000","centerX":0,"bold":true}},{"type":"List","props":{"y":115,"var":"list_ye","right":-1,"repeatX":1,"left":-1,"height":1168},"child":[{"type":"WXSaoLei_LB2","props":{"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_MXUI.uiView);
        }
    }
}
