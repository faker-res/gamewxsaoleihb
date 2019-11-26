
module ui.nqp.game_ui.wxsaoleihb.component {
    export class HongBao_TUI extends View {
		public box_main:Laya.Box;
		public item_other:ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI;
		public item_self:ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB2UI;
		public list_info:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":720,"right":-1,"left":-1,"height":400},"child":[{"type":"Box","props":{"var":"box_main","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"WXSaoLei_HB1","props":{"var":"item_other","top":0,"left":40,"runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI"}},{"type":"WXSaoLei_HB2","props":{"var":"item_self","top":0,"right":40,"runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB2UI"}},{"type":"List","props":{"var":"list_info","top":182,"right":-1,"repeatX":1,"left":-1,"bottom":-1},"child":[{"type":"WXSaoLei_get","props":{"renderType":"render","runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_getUI"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB1UI);
			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB2UI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_HB2UI);
			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_getUI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_getUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.component.HongBao_TUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb.component {
    export class WXSaoLei_getUI extends View {
		public box_main:Laya.Box;
		public lb_info:Laya.Label;
		public img_di:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":60},"child":[{"type":"Box","props":{"width":720,"height":43,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":22,"x":360,"width":720,"var":"box_main","height":66,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"var":"lb_info","text":"玩家领取了您的红包,获得0.13元","leading":5,"fontSize":20,"color":"#000000","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"var":"img_di","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_k3.png","sizeGrid":"10,10,10,10","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.3}}]}]};
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
		public lb_money:Laya.Label;
		public img_kuang:Laya.Image;
		public img_hb:Laya.Image;
		public img_light:Laya.Image;
		public lb_sy:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_status:Laya.Label;
		public lb_time:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":476,"height":210},"child":[{"type":"Box","props":{"y":97,"width":600,"right":-1,"left":-1,"height":169,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"img_head","top":1,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":0.83,"scaleX":0.83,"left":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":150,"var":"lb_name","top":-3,"text":"喵喵喵","left":97,"height":24,"fontSize":21,"color":"#595858","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Box","props":{"var":"box_main","top":20,"right":5,"left":91,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":71,"x":191,"var":"img_di","top":0,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb0.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":121,"x":311,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sj.png","right":60,"bottom":8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":150,"var":"lb_money","text":"12345","left":155,"height":20,"fontSize":23,"color":"#ffffff","centerY":-40,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":58,"text":"金额:","left":99,"height":25,"fontSize":23,"color":"#ffffff","centerY":-38,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":58,"left":30,"height":68,"centerY":-22,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":34,"x":29,"var":"img_kuang","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_gq.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":20},{"type":"Image","props":{"y":34,"x":29,"var":"img_hb","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb4.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":27,"x":29,"var":"img_light","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":18}]},{"type":"Label","props":{"y":122,"width":150,"var":"lb_sy","text":"剩余:9/9","left":17,"height":17,"fontSize":17,"color":"#8d8181","bottom":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":150,"var":"lb_ld","text":"1,2,3,4,5","left":155,"height":20,"fontSize":23,"color":"#4476ea","centerY":-2,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":50,"text":"雷号:","left":99,"height":22,"fontSize":23,"color":"#4476ea","centerY":-2}},{"type":"Label","props":{"var":"lb_status","text":"已领完","right":14,"height":25,"fontSize":23,"color":"#ffffff","centerY":-38,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":120,"x":353,"width":40,"var":"lb_time","text":"00秒","right":10,"height":17,"fontSize":17,"color":"#8d8181","bottom":12,"anchorY":0.5,"anchorX":0.5}}]}]}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":8},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":15}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":15}]}},{"target":20,"keyframes":{"scaleY":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":8},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":15}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":8},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":18,"keyframes":{"skin":[{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":0},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10001.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":2},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10002.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":4},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10003.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":6},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10004.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":7},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10005.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":8},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10006.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":10},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10007.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":11},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10008.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":12},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10009.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":13},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10010.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":14},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10011.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":15}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":15}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":15}]}},{"target":20,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":15}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
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
		public img_eff:Laya.Image;
		public img_kuang:Laya.Image;
		public img_hb:Laya.Image;
		public img_light:Laya.Image;
		public lb_time:Laya.Label;
		public lb_money:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_sy:Laya.Label;
		public lb_status:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":476,"height":210},"child":[{"type":"Box","props":{"y":97,"right":-1,"left":-1,"height":169,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"img_head","top":1,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":0.83,"scaleX":0.83,"right":1,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":172,"var":"lb_name","top":-5,"text":"喵喵喵","right":95,"height":24,"fontSize":21,"color":"#595858","anchorY":0.5,"anchorX":0.5,"align":"right"}},{"type":"Box","props":{"x":196,"width":383,"var":"box_main","top":20,"right":90,"left":5,"height":145,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":70,"x":191,"var":"img_di","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb1.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":70,"x":191,"var":"img_eff","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sg1.png","right":-1,"left":-1,"bottom":-1,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":21},{"type":"Image","props":{"y":120,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sj.png","right":67,"bottom":9,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":48,"x":55,"width":58,"left":26,"height":68,"centerY":-23,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":34,"x":29,"var":"img_kuang","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_gq.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":17},{"type":"Image","props":{"y":34,"x":29,"var":"img_hb","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hb4.png","anchorY":0.5,"anchorX":0.5},"compId":4},{"type":"Image","props":{"y":27,"x":29,"var":"img_light","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":18}]},{"type":"Label","props":{"y":120,"var":"lb_time","text":"00秒","right":17,"height":17,"fontSize":17,"color":"#595858","bottom":12,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":58,"text":"金额:","left":99,"height":25,"fontSize":23,"color":"#ffffff","centerY":-38,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":150,"var":"lb_money","text":"12345","left":155,"height":20,"fontSize":23,"color":"#ffffff","centerY":-40,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":124,"width":50,"text":"雷号:","left":99,"height":22,"fontSize":23,"color":"#3b72fe","centerY":-2,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":150,"var":"lb_ld","text":"12345","left":155,"height":20,"fontSize":23,"color":"#3b72fe","centerY":-2,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":121,"x":95,"width":150,"var":"lb_sy","text":"剩余:9/9","left":20,"height":17,"fontSize":17,"color":"#595858","bottom":11,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_status","text":"已领完","right":17,"height":25,"fontSize":23,"color":"#ffffff","centerY":-38,"anchorY":0.5,"anchorX":0.5}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"scaleY":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":8},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleY","index":15}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":8},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"scaleX","index":15}]}},{"target":17,"keyframes":{"scaleY":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":15}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":0},{"value":1.25,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":2},{"nodes":[{"target":18,"keyframes":{"skin":[{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10000.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":0},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10001.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":2},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10002.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":4},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10003.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":6},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10004.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":7},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10005.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":8},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10006.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":10},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10007.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":11},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10008.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":12},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10009.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":13},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10010.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":14},{"value":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/10011.png","tweenMethod":"linearNone","tween":false,"target":18,"key":"skin","index":15}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":18,"key":"scaleX","index":15}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":15}]}},{"target":17,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":8},{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":17,"key":"alpha","index":15}]}}],"name":"ani2","id":2,"frameRate":24,"action":2},{"nodes":[{"target":21,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":21,"key":"alpha","index":10}]}}],"name":"ani3","id":3,"frameRate":24,"action":2}]};
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

        public static  uiView:any ={"type":"View","props":{"width":720,"height":112},"child":[{"type":"Box","props":{"y":56,"x":360,"top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.56,"scaleX":0.56,"left":42,"centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_name","text":"喵喵喵","strokeColor":"#000000","left":95,"fontSize":20,"color":"#000000","centerY":-10,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_time","text":"22:23:59","left":95,"fontSize":18,"color":"#8d8181","centerY":14,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":49,"x":638,"var":"lb_money","text":"10.59","right":56,"fontSize":20,"centerY":-9,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":110,"x":364,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":38,"left":44,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_sqzj","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_sqzj.png","right":121,"centerY":20,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":76,"var":"img_zl","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_zl.png","right":57,"centerY":19,"anchorY":0.5,"anchorX":0.5}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":720,"height":108,"alpha":1},"child":[{"type":"Box","props":{"y":54,"x":360,"width":720,"height":108,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":54,"x":360,"width":720,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","height":108,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":104,"x":368,"width":686,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":43,"x":93,"var":"lb_date","text":"2019-10-29","fontSize":23,"color":"#000000","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":69,"x":94,"var":"lb_time","text":"20:50:27","fontSize":23,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":53,"x":264,"var":"lb_type","text":"福利红包","strokeColor":"#000000","fontSize":23,"color":"#000000","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":53,"x":435,"var":"lb_money","text":"0.4846","fontSize":23,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":53,"x":606,"var":"lb_diff","text":"000000","fontSize":23,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":54,"x":697,"var":"btn_jh","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt0.png","anchorY":0.5,"anchorX":0.5}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":720,"height":98},"child":[{"type":"Box","props":{"y":56,"x":369,"width":677,"height":82,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":80,"x":343,"width":686,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_type","top":4,"text":"福利包","left":21,"fontSize":23,"color":"#000000","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"y":49,"var":"lb_money","top":38,"text":"200.00","left":75,"fontSize":23,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"lb_date","top":5,"text":"2019-10-29","left":438,"fontSize":23,"color":"#8d8181","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"var":"lb_time","top":5,"text":"22:48:56","left":565,"fontSize":23,"color":"#8d8181","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"var":"lb_diff","top":38,"text":"000000","right":22,"fontSize":23,"color":"#000000","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"top":36,"text":"余额:","left":21,"fontSize":23,"color":"#000000","anchorY":0.5,"anchorX":0.5}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":180,"height":162},"child":[{"type":"Box","props":{"y":90,"x":91,"width":132,"height":140,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":55,"x":65,"width":110,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","height":110,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":66,"var":"lb_name","top":117,"text":"物是人非事事休","fontSize":18,"centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]};
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
		public btn_back:Laya.Button;
		public btn_more:Laya.Button;
		public lb_map_name:Laya.Label;
		public panel_hb:Laya.Panel;
		public box_share:Laya.Box;
		public btn_share:Laya.Button;
		public box_hb:Laya.Box;
		public lb_hby_tim:Laya.Label;
		public box_di1:Laya.Box;
		public img_di1_bg:Laya.Image;
		public box_di1_up:Laya.Box;
		public btn_add:Laya.Button;
		public btn_di1:Laya.Button;
		public box_di1_down:Laya.Box;
		public btn_ye:Laya.Button;
		public btn_hbjl:Laya.Button;
		public btn_fhb:Laya.Button;
		public box_di2:Laya.Box;
		public btn_di2:Laya.Button;
		public box_fhb:Laya.Box;
		public box_down:Laya.Box;
		public btn_down:Laya.Button;
		public box_ye:Laya.Box;
		public lb_ye:Laya.Label;
		public lb_dj:Laya.Label;
		public lb_yemx:Laya.Label;
		public lb_ok:Laya.Label;
		public box_hb_rain:Laya.Box;
		public box_hb_open:Laya.Box;
		public open_di:Laya.Image;
		public hb_finsh:Laya.Box;
		public finsh_check:Laya.Box;
		public finsh_head:Laya.Image;
		public finsh_name:Laya.Label;
		public hb_rain:Laya.Box;
		public lb_rain_info:Laya.Label;
		public hby_time:Laya.Label;
		public rain_open:Laya.Button;
		public hb_open:Laya.Box;
		public box_open_info:Laya.Box;
		public open_head:Laya.Image;
		public open_name:Laya.Label;
		public open_hb_name:Laya.Label;
		public btn_hb_open:Laya.Button;
		public box_lh:Laya.Box;
		public open_ld:Laya.Label;
		public btn_hb_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"height":1282,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_up","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","sizeGrid":"5,5,5,5","right":-1,"left":-1,"height":115,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"x":59,"width":85,"left":15,"height":85,"bottom":16,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":42,"x":43,"var":"btn_back","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"x":666,"width":85,"right":15,"height":85,"bottom":14,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":42,"x":42,"var":"btn_more","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_d.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"x":362,"var":"lb_map_name","text":"新手场","stroke":1,"fontSize":30,"color":"#000000","centerX":0,"bottom":42,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Panel","props":{"width":724,"var":"panel_hb","top":116,"right":-1,"left":-1,"height":942,"bottom":211,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":337,"width":75,"var":"box_share","right":26,"height":75,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":37.5,"x":37.5,"var":"btn_share","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_fx.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":213,"width":102,"var":"box_hb","right":15,"height":89,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":39,"x":52,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hby.png","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":67,"x":30,"var":"lb_hby_tim","text":"01:08","fontSize":18,"color":"#000000"}}]},{"type":"Box","props":{"var":"box_di1","right":-1,"left":-1,"height":210,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":106,"var":"img_di1_bg","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","right":-1,"left":-1,"height":210,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"x":362,"var":"box_di1_up","top":0,"right":-1,"left":-1,"height":80,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":201,"left":130,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":29,"x":214,"text":"本房间禁言中","fontSize":21,"color":"#000000","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.9}}]},{"type":"Button","props":{"var":"btn_add","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_gd.png","scaleY":0.65,"scaleX":0.65,"right":54,"centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"width":38,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_bq.png","right":132,"height":38,"centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_di1","top":9,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_aj.png","rotation":180,"left":39,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":125,"x":362,"var":"box_di1_down","right":-1,"left":-1,"height":130,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":86,"left":298,"height":86,"centerY":-15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":43,"width":86,"var":"btn_ye","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_yue.png","sizeGrid":"0,0,0,0","height":86,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"x":47,"text":"余额","fontSize":18,"color":"#000000","bottom":-27,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":86,"left":171,"height":86,"centerY":-15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":43,"width":86,"var":"btn_hbjl","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_hbjl.png","height":86,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"x":42,"text":"红包记录","fontSize":18,"color":"#000000","bottom":-27,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":86,"left":40,"height":86,"centerY":-15,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":43,"width":86,"var":"btn_fhb","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_fhb1.png","height":86,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"x":42,"text":"发红包","fontSize":18,"color":"#000000","bottom":-27,"anchorY":0.5,"anchorX":0.5}}]}]}]}]},{"type":"Box","props":{"x":361,"var":"box_di2","right":-1,"left":-1,"height":135,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":97,"x":362,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","sizeGrid":"5,5,5,5","right":-1,"left":-1,"height":80,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_di2","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_aj.png","left":38,"bottom":13,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":116,"var":"box_fhb","height":120,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":57,"x":58,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_fhb.png","bottom":3,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"width":87,"var":"box_down","right":22,"height":86,"bottom":87,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":44,"var":"btn_down","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_zd.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"var":"box_ye","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_heidi.png","right":-1,"left":-1,"bottom":-1,"alpha":0.65}},{"type":"Image","props":{"top":507,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d3.png","centerX":0},"child":[{"type":"Label","props":{"y":55,"x":254,"var":"lb_ye","text":"余额:1234","fontSize":30,"color":"#464545","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":108,"x":254,"var":"lb_dj","text":"冻结:1234","fontSize":30,"color":"#e94447","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":219,"x":131,"width":198,"var":"lb_yemx","valign":"middle","text":"余额明细","height":81,"fontSize":32,"color":"#1473e5","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":220,"x":375,"width":198,"var":"lb_ok","valign":"middle","text":"知道了","height":81,"fontSize":32,"color":"#1473e5","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]},{"type":"Box","props":{"var":"box_hb_rain","top":-1,"right":-1,"left":-1,"bottom":-1}},{"type":"Box","props":{"var":"box_hb_open","top":-1,"right":-1,"left":-1,"bottom":-1},"child":[{"type":"Image","props":{"var":"open_di","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5,"alpha":0.6}},{"type":"Box","props":{"x":360,"right":100,"left":100,"height":932,"centerY":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d2.png","right":-1,"left":-1,"bottom":90,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":431,"x":262,"var":"hb_finsh","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":278,"x":263,"text":"发送了一个福利红包","height":40,"fontSize":38,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":362,"x":262,"text":"手慢了，红包派完了","height":40,"fontSize":35,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":809,"x":263,"width":152,"var":"finsh_check","height":30,"centerX":0,"bottom":40,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":15,"text":"查看红包详情","fontSize":24,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":16,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt1.png","scaleY":0.3,"scaleX":-0.3,"centerX":81,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"top":141,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"finsh_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.8,"scaleX":0.8,"left":0,"centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"finsh_name","text":"喵喵喵","left":62,"fontSize":35,"color":"#fcf0b4","centerY":0,"anchorY":0.5,"anchorX":0.5,"align":"left"}}]}]},{"type":"Box","props":{"y":431,"x":262,"var":"hb_rain","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":110,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hby.png","scaleY":0.7,"scaleX":0.7,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":192,"x":262,"text":"红包雨","fontSize":35,"color":"#fcf0b4","centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":375,"x":263,"var":"lb_rain_info","text":"剩余时间","fontSize":35,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":436,"x":262,"var":"hby_time","text":"00.00","fontSize":30,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":666,"x":263,"var":"rain_open","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_k.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":431,"x":262,"var":"hb_open","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"var":"box_open_info","top":143,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"var":"open_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.8,"scaleX":0.8,"left":0,"centerY":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"open_name","text":"喵喵喵","left":62,"fontSize":35,"color":"#fcf0b4","centerY":0,"anchorY":0.5,"anchorX":0.5,"align":"left"}}]},{"type":"Label","props":{"y":278,"x":263,"text":"发送了一个福利红包","height":40,"fontSize":38,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":262,"var":"open_hb_name","top":329,"text":"123","height":55,"fontSize":55,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Button","props":{"y":666,"x":263,"var":"btn_hb_open","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_k.png","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":304,"var":"box_lh","top":407,"height":42,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":19,"x":121,"var":"open_ld","text":"0,1,2,3,4,5,1","right":0,"height":39,"fontSize":38,"color":"#87d3ff","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"y":19.5,"width":87,"text":"雷号:","left":0,"fontSize":38,"color":"#fcf0b4","anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Button","props":{"y":900,"x":261,"var":"btn_hb_close","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_qc.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}]}]};
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
		public img_info_up:Laya.Image;
		public img_info_di:Laya.Image;
		public lb_lq:Laya.Label;
		public hb_info_list:Laya.List;
		public clip_hb_num:Laya.Clip;
		public lb_hb_name:Laya.Label;
		public lb_yuan:Laya.Label;
		public lb_hb_num:Laya.Label;
		public lb_ld:Laya.Label;
		public lb_hbjl:Laya.Label;
		public box_player:Laya.Box;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public box_rain:Laya.Box;
		public rain_money:Laya.Label;
		public btn_back:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"height":1280},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_jl.png","right":-1,"left":-1,"height":500}},{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"var":"box_info","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":651,"x":371,"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_info_up","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_jl.png","right":-1,"left":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"x":371,"var":"img_info_di","top":617,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"bottom":-1,"anchorX":0.5},"child":[{"type":"Label","props":{"var":"lb_lq","top":22,"text":"领取7/7个","strokeColor":"#595858","stroke":0.4,"left":32,"fontSize":25,"color":"#595858","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"x":363,"top":64,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":33,"left":33,"anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"width":728,"var":"hb_info_list","top":71,"spaceY":-1,"right":-1,"repeatX":1,"left":-1,"height":628,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"WXSaoLei_LB","props":{"y":56,"x":360,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI"}}]}]},{"type":"Clip","props":{"var":"clip_hb_num","top":290,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/clip_0-9.png","clipX":11,"centerX":-28,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":362,"var":"lb_hb_name","top":193,"text":"恭喜发财，大吉大利","fontSize":25,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":393,"var":"lb_yuan","top":341,"text":"元","strokeColor":"#fcf0b4","fontSize":25,"color":"#fcf0b4","centerX":31,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":174,"var":"lb_hb_num","top":425,"text":"7个红包","left":120,"fontSize":30,"color":"#fcf0b4","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":110,"top":422,"right":132,"height":34,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":17,"x":55,"var":"lb_ld","text":"雷号:0","fontSize":30,"color":"#fcf0b4","anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"var":"lb_hbjl","top":42,"text":"红包记录","right":33,"fontSize":36,"color":"#fcf0b4","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"top":653,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":138,"var":"box_player","centerX":0},"child":[{"type":"Image","props":{"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","scaleY":0.58,"scaleX":0.58,"left":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":0,"var":"lb_name","text":"庙庙庙庙庙庙","strokeColor":"#fcf0b4","left":45,"fontSize":35,"color":"#fcf0b4","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Box","props":{"var":"box_rain","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":606,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":363,"top":61,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":33,"left":33,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"top":24,"text":"本次领取:","left":40,"fontSize":25,"color":"#3d3d3d","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"top":290,"text":"已放入余额","fontSize":25,"color":"#595858","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"rain_money","top":138,"text":"0.01元","strokeColor":"#595858","stroke":1,"fontSize":70,"color":"#000000","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"width":726,"top":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_jl.png","right":-1,"left":-1,"height":621,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"top":160,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_hby.png","scaleY":0.65,"scaleX":0.65,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":361,"top":235,"text":"红包雨","fontSize":35,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"x":362,"top":310,"text":"不可错过的零花钱","fontSize":26,"color":"#fcf0b4","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":85,"top":14,"left":17,"height":85,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":41,"x":40,"var":"btn_back","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt1.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LBUI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLeiHB_InfoUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_FZUI extends View {
		public ani1:Laya.FrameAnimation;
		public ani2:Laya.FrameAnimation;
		public box_main:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":158,"var":"box_main","height":158,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_di.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":79,"x":79,"width":158,"height":158,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":125,"x":79,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_zt1.png","anchorY":0.5,"anchorX":0.5},"compId":8},{"type":"Image","props":{"y":62,"x":79,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_sj.png","scaleY":0.85,"scaleX":0.85,"rotation":0,"anchorY":0.48,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":77,"x":131,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_jt.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":61,"x":27,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_jt1.png","scaleY":0.7,"scaleX":0.7,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":125,"x":79,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/xz/tu_zt.png","anchorY":0.5,"anchorX":0.5},"compId":12}]}]}],"animations":[{"nodes":[{"target":7,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":-90,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":14},{"value":-90,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":19},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":25},{"value":-90,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":39},{"value":-90,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":44}]}},{"target":12,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"alpha","index":0}]}}],"name":"ani1","id":1,"frameRate":24,"action":0},{"nodes":[{"target":7,"keyframes":{"rotation":[{"value":-90,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":14},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":19},{"value":-90,"tweenMethod":"linearNone","tween":true,"target":7,"key":"rotation","index":25},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":39},{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"rotation","index":44}]}},{"target":8,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":0}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_FZUI.uiView);
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
		public img_up:Laya.Image;
		public btn_back:Laya.Box;
		public title_room:Laya.Label;
		public title_player:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d0.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":641,"x":361,"var":"room_info","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":192.5,"x":362,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":187,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":45,"x":99,"top":32,"text":"房间名称","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":138,"x":99,"top":125,"text":"房间介绍","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":138,"var":"lb_info","top":125,"text":"7/9包","strokeColor":"#000000","right":285,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":45,"x":415,"var":"lb_name","top":32,"text":"新手场","strokeColor":"#000000","right":270,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":572.5,"x":362,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":555,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":136,"x":99,"top":123,"text":"发包金额","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":228,"x":125,"top":215,"text":"红包有效时间","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":322,"x":112,"top":309,"text":"单雷可发包","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":414,"x":112,"top":401,"text":"多雷可发包","strokeColor":"#000000","left":46,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":225,"var":"lb_money","top":123,"text":"1.00-3.00","strokeColor":"#000000","right":123,"height":26,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"y":228,"var":"hb_time","top":215,"text":"90秒","strokeColor":"#000000","right":292,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":322,"var":"b_num1","top":309,"text":"7,9","strokeColor":"#000000","right":311,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":414,"var":"b_num2","top":401,"text":"9","strokeColor":"#000000","right":332,"fontSize":26,"color":"#000000","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":191,"x":375,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":385.5,"x":375,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":478.5,"x":375,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":571.5,"x":375,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":665.5,"x":375,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":758.5,"x":375,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":10,"left":36,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":295.5,"var":"box_player","right":-1,"left":-1,"height":90},"child":[{"type":"Label","props":{"top":30,"text":"房间成员","strokeColor":"#000000","left":47,"fontSize":26,"color":"#000000"}},{"type":"Button","props":{"top":31,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt0.png","right":44}}]},{"type":"Box","props":{"y":759.5,"var":"box_rule","right":-1,"left":-1,"height":90},"child":[{"type":"Label","props":{"top":30,"text":"游戏规则","strokeColor":"#000000","left":49,"fontSize":26,"color":"#000000"}},{"type":"Button","props":{"top":31,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt0.png","right":42}}]}]},{"type":"Box","props":{"y":641,"x":361,"var":"player_info","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"List","props":{"width":726,"var":"list_player","top":99,"spaceY":5,"right":-1,"left":-1,"height":1178,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"WXSaoLei_TX","props":{"y":101,"x":90,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_TXUI"}}]}]},{"type":"Image","props":{"var":"img_up","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"height":97,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":80,"var":"btn_back","left":19,"height":80,"bottom":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":40,"x":40,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"var":"title_room","text":"房间信息","strokeColor":"#000000","stroke":1,"fontSize":30,"color":"#000000","centerX":0,"bottom":23,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"var":"title_player","text":"玩家信息","strokeColor":"#000000","stroke":1,"fontSize":30,"color":"#000000","centerX":0,"bottom":23,"anchorY":0.5,"anchorX":0.5}}]}]}]};
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
		public img_up:Laya.Image;
		public btn_back:Laya.Box;
		public panel_inner:Laya.Panel;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":355,"x":-92,"width":904,"var":"box_out","height":571,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":-25,"x":12,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_bk2.png"}},{"type":"Image","props":{"y":68,"x":254,"width":610,"skin":"tongyong_ui/game_ui/tongyong/dating/tu_d.png","sizeGrid":"50,50,50,50","height":465}},{"type":"Image","props":{"y":1,"x":363,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png"}},{"type":"Button","props":{"y":-33,"x":834,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_tuichu.png"}},{"type":"Image","props":{"y":63,"x":257,"var":"img_pf","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/guize/guize_0.png"}},{"type":"Panel","props":{"y":70,"x":257,"width":605,"var":"panel_out","height":458},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/guize/guize_1.png","height":1378}}]},{"type":"Tab","props":{"y":69,"x":53,"var":"tab_Type"},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":80,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_jspf.png","name":"item1"}}]}]},{"type":"Box","props":{"var":"box_inner","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"img_up","top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"height":97,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"x":363,"text":"游戏规则","stroke":1,"fontSize":30,"color":"#000000","centerX":0,"bottom":24,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":80,"var":"btn_back","left":19,"height":80,"bottom":2,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":40,"x":40,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Panel","props":{"x":359,"width":720,"var":"panel_inner","top":99,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-2,"x":360,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/guize/guize_2.png","height":3878,"anchorX":0.5}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_GuiZeUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_HBUI extends View {
		public box:Laya.Box;
		public box_main:Laya.Box;
		public box_tab_1:Laya.Box;
		public btn_tab_1:Laya.Button;
		public box_tab_2:Laya.Box;
		public btn_tab_2:Laya.Button;
		public btn_0:Laya.Clip;
		public btn_1:Laya.Clip;
		public btn_2:Laya.Clip;
		public btn_3:Laya.Clip;
		public btn_4:Laya.Clip;
		public btn_5:Laya.Clip;
		public btn_6:Laya.Clip;
		public btn_7:Laya.Clip;
		public btn_8:Laya.Clip;
		public btn_9:Laya.Clip;
		public btn_random:Laya.Button;
		public lb_lh_title:Laya.Label;
		public lb_lh:Laya.Label;
		public box_danL:Laya.Box;
		public lb_danL_info:Laya.Label;
		public lb_hbDanl_num:Laya.Label;
		public hb_danL_num1:Laya.Box;
		public btn_danL_num1:Laya.Clip;
		public hb_danL_num2:Laya.Box;
		public btn_danL_num2:Laya.Clip;
		public box_duoL:Laya.Box;
		public lb_duoL_info:Laya.Label;
		public lb_hbDuol_num:Laya.Label;
		public hb_duoL_num1:Laya.Box;
		public btn_duoL_num1:Laya.Clip;
		public txtInput:Laya.TextInput;
		public lb_ts:Laya.Label;
		public lb_range:Laya.Label;
		public lb_ye:Laya.Label;
		public btn_send:Laya.Button;
		public box_up:Laya.Box;
		public btn_back:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":641,"x":361,"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":134,"x":362,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":362,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_g.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":39,"right":-1,"left":-1,"height":76,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":36,"x":179,"width":300,"var":"box_tab_1","top":1,"height":69,"centerX":-185,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"var":"btn_tab_1","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_dl1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":36,"x":546,"width":300,"var":"box_tab_2","top":1,"height":69,"centerX":182,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"var":"btn_tab_2","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sl1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]}]},{"type":"Image","props":{"y":484,"x":362,"width":724,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":599,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":422,"x":362,"right":-1,"left":-1,"height":341,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":90,"height":90,"centerY":-45,"centerX":-284,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"y":45,"x":45,"var":"btn_0","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_0.png","clipY":2,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":-45,"centerX":-169,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_1","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_1.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":-45,"centerX":-54,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_2","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_2.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":-45,"centerX":61,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_3","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_3.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":-45,"centerX":176,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_4","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_4.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":-45,"centerX":291,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_5","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_5.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":80,"centerX":-284,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_6","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_6.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":80,"centerX":-169,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_7","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_7.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":80,"centerX":-54,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_8","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_8.png","clipY":2}}]},{"type":"Box","props":{"width":90,"height":90,"centerY":80,"centerX":61,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_9","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_9.png","clipY":2}}]},{"type":"Box","props":{"width":183,"height":70,"centerY":81,"centerX":238},"child":[{"type":"Button","props":{"y":35,"x":92,"var":"btn_random","stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sj.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"width":132,"var":"lb_lh_title","text":"选择雷号:","fontSize":30,"centerY":-145,"centerX":-264,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":435,"var":"lb_lh","text":"9","height":30,"fontSize":30,"color":"#e94447","centerY":-143,"centerX":27,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"x":98,"top":28,"text":"选择包数:","fontSize":30,"color":"#000000","centerX":-264,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":128,"x":362,"var":"box_danL","right":-1,"left":-1,"height":261,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":118,"height":36,"centerY":105,"centerX":-270,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"var":"lb_danL_info","text":"赔率:1.6","left":0,"fontSize":30,"centerY":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":109,"x":138,"width":201,"height":155,"centerY":-21,"centerX":-225,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"var":"lb_hbDanl_num","top":0,"text":"7包","left":139,"fontSize":30,"color":"#e94447","anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":90,"var":"hb_danL_num1","top":66,"left":-4,"height":90,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_danL_num1","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_7.png","clipY":2}}]},{"type":"Box","props":{"width":90,"var":"hb_danL_num2","top":68,"left":107,"height":90,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_danL_num2","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_9.png","clipY":2}}]}]}]},{"type":"Box","props":{"y":128,"x":362,"var":"box_duoL","right":-1,"left":-1,"height":261,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":657,"height":37,"centerY":104,"centerX":-9,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":15,"x":326,"var":"lb_duoL_info","text":"赔率:单雷1.2,双雷1.05,三雷1.28,四雷1.8,五雷2.5","fontSize":30,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":109,"x":138,"width":201,"height":155,"centerY":-21,"centerX":-225,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"x":161,"var":"lb_hbDuol_num","top":0,"text":"9包","fontSize":30,"color":"#e94447","centerX":61,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":90,"var":"hb_duoL_num1","top":66,"left":-4,"height":90,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"btn_duoL_num1","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_9.png","clipY":2}}]}]}]}]},{"type":"Image","props":{"y":899,"x":362,"width":724,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":200,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":165,"x":353,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d4.png","right":141,"left":123,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"x":117,"top":120,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_q.png","centerX":-245,"anchorY":0.5,"anchorX":0.5}},{"type":"TextInput","props":{"width":399,"var":"txtInput","top":94,"restrict":"0-9","maxChars":3,"height":72,"fontSize":70,"centerX":-19,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"width":300,"var":"lb_ts","valign":"bottom","top":90,"text":"发包金额","height":70,"fontSize":30,"color":"#7b7b7b","centerX":-63,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"top":17,"text":"发包金额","fontSize":28,"color":"#000000","centerX":-274,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"x":196,"width":325,"var":"lb_range","top":1013,"text":"红包发放范围: 40-800","fontSize":28,"color":"#000000","centerX":-166,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"x":65,"top":1051,"text":"余额:","fontSize":28,"color":"#000000","centerX":-297,"anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Label","props":{"x":226,"width":258,"var":"lb_ye","top":1048,"text":"199.99","left":96,"height":33,"fontSize":30,"color":"#e94447","anchorY":0.5,"anchorX":0.5,"align":"left"}},{"type":"Button","props":{"y":1184,"x":362,"var":"btn_send","top":1147,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sqjhb.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"var":"box_up","top":-1,"right":-1,"left":-1,"height":99},"child":[{"type":"Box","props":{"width":85,"var":"btn_back","left":16,"height":85,"bottom":1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":43,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Label","props":{"x":362,"text":"发红包","stroke":1,"fontSize":28,"color":"#000000","centerX":0,"bottom":24,"anchorY":0.5,"anchorX":0.5}}]}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_zjh.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.nqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":1280,"var":"box_right","height":465,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":73,"width":301,"var":"img_room0","right":880,"height":286},"child":[{"type":"SkeletonPlayer","props":{"y":157,"x":146,"url":"wxsaoleihb_ui/game_ui/wxsaoleihb/sk/wxhb_0.sk"}},{"type":"Clip","props":{"y":241,"x":140,"var":"txt_min0","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_1.png","rotation":-4,"clipX":11}},{"type":"Image","props":{"y":246,"x":83,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_x1.png"}},{"type":"Image","props":{"y":253,"x":173,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_1.png","rotation":-2,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":237,"x":185,"var":"txt_max0","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_1.png","rotation":-4,"clipX":11}},{"type":"Image","props":{"y":192,"x":107,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_z1.png"}}]},{"type":"Box","props":{"y":54,"width":301,"var":"img_room1","right":490,"height":305},"child":[{"type":"SkeletonPlayer","props":{"y":174,"x":147,"url":"wxsaoleihb_ui/game_ui/wxsaoleihb/sk/wxhb_1.sk"}},{"type":"Clip","props":{"y":260,"x":145,"var":"txt_min1","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_2.png","rotation":-4,"clipX":11}},{"type":"Image","props":{"y":208,"x":113,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_z0.png"}},{"type":"Image","props":{"y":264,"x":93,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_x0.png"}},{"type":"Image","props":{"y":271,"x":176,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_0.png","rotation":-2,"anchorY":0.5,"anchorX":0.5}},{"type":"Clip","props":{"y":256,"x":186,"var":"txt_max1","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_2.png","rotation":-4,"clipX":11}}]},{"type":"Box","props":{"y":40,"width":301,"var":"img_room2","right":95,"height":319},"child":[{"type":"SkeletonPlayer","props":{"y":187,"x":146,"url":"wxsaoleihb_ui/game_ui/wxsaoleihb/sk/wxhb_2.sk"}},{"type":"Clip","props":{"y":274,"x":138,"var":"txt_min2","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_3.png","rotation":-4,"clipX":11}},{"type":"Image","props":{"y":278,"x":89,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_x3.png"}},{"type":"Image","props":{"y":286,"x":169,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_3.png","rotation":-2,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":223,"x":107,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/tu_z2.png"}},{"type":"Clip","props":{"y":270,"x":179,"var":"txt_max2","skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/clip_3.png","rotation":-4,"clipX":11}}]}]},{"type":"Image","props":{"top":10,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/hud/sl_title.png","scaleY":0.8,"scaleX":0.8,"centerX":225,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":668,"x":640,"var":"btn_join","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_ksjr.png","centerX":0,"bottom":10,"anchorY":0.5,"anchorX":0.5}}]};
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
		public box_di:Laya.Box;
		public box_tab_1:Laya.Box;
		public btn_tab_1:Laya.Button;
		public box_tab_2:Laya.Box;
		public btn_tab_2:Laya.Button;
		public lb_end_type:Laya.Label;
		public list_info:Laya.List;
		public img_head:Laya.Image;
		public lb_name:Laya.Label;
		public lb_num_money:Laya.Label;
		public lb_num_hb:Laya.Label;
		public lb_type:Laya.Label;
		public box_up:Laya.Box;
		public btn_back:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"width":722,"var":"box_main","top":-1,"right":-1,"left":-1,"height":1282,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":641,"x":361,"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"var":"box_di","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":362,"top":325,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":72,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":35,"x":363,"right":-1,"left":-1,"height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":37,"x":182,"width":300,"var":"box_tab_1","top":0,"left":32,"height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"var":"btn_tab_1","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sl.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":37,"x":546,"width":300,"var":"box_tab_2","top":0,"right":32,"height":70,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"var":"btn_tab_2","stateNum":2,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_sl0.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Image","props":{"x":363,"top":16,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_g.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"x":362,"width":724,"top":521,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"height":755,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":30,"x":89,"top":13,"text":"时间","strokeColor":"#7b7b7b","left":62,"fontSize":26,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":30,"x":431,"top":13,"text":"金额","strokeColor":"#7b7b7b","left":404,"fontSize":26,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":30,"x":261,"top":13,"text":"玩家昵称","strokeColor":"#7b7b7b","left":208,"fontSize":26,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":31,"var":"lb_end_type","top":14,"text":"赔付/获赔","strokeColor":"#7b7b7b","left":547,"fontSize":26,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5}},{"type":"List","props":{"width":728,"var":"list_info","top":54,"right":-1,"left":-1,"height":707,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"WXSaoLei_LB1","props":{"y":48,"x":360,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB1UI"}}]}]},{"type":"Image","props":{"y":164,"x":362,"var":"img_head","top":116,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_tx0.png","sizeGrid":"10,10,10,10","scaleY":1.2,"scaleX":1.2,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":246,"x":362,"var":"lb_name","top":230,"text":"老板1234567","fontSize":27,"color":"#000000","centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"x":186,"width":191,"top":455,"left":89,"height":43,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":22,"x":96,"var":"lb_num_money","text":"12345678","fontSize":43,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Box","props":{"x":544,"width":24,"top":454,"height":43,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":22,"x":12,"var":"lb_num_hb","text":"6","fontSize":43,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Label","props":{"y":433,"var":"lb_type","top":422,"text":"共收","strokeColor":"#7b7b7b","stroke":0.5,"left":160,"fontSize":20,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":433,"top":422,"text":"个数","strokeColor":"#7b7b7b","stroke":0.5,"right":161,"fontSize":20,"color":"#7b7b7b","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"var":"box_up","top":-1,"right":-1,"left":-1,"height":95},"child":[{"type":"Label","props":{"x":362,"text":"红包记录","stroke":1,"fontSize":32,"color":"#000000","centerX":0,"bottom":21,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":85,"var":"btn_back","left":15,"height":85,"bottom":-3,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":43,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","anchorY":0.5,"anchorX":0.5}}]}]}]}]};
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
		public box_di:Laya.Box;
		public list_ye:Laya.List;
		public img_up:Laya.Image;
		public btn_back:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"var":"box_main","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":361,"top":-1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d.png","right":-1,"left":-1,"bottom":-7,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"var":"box_di","top":-1,"right":-1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"List","props":{"x":362,"var":"list_ye","top":99,"right":-1,"repeatX":1,"left":-1,"bottom":-1,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"WXSaoLei_LB2","props":{"y":49,"x":360,"renderType":"render","anchorY":0.5,"anchorX":0.5,"runtime":"ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI"}}]}]},{"type":"Image","props":{"y":57,"x":361,"var":"img_up","top":0,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_yy.png","sizeGrid":"5,5,5,5","right":-1,"left":-1,"height":97,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"x":362,"text":"余额明细","stroke":1,"fontSize":30,"color":"#000000","centerX":0,"bottom":24,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":85,"var":"btn_back","left":14,"height":85,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":43,"x":44,"stateNum":1,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/btn_jt.png","anchorY":0.5,"anchorX":0.5}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI",ui.nqp.game_ui.wxsaoleihb.component.WXSaoLei_LB2UI);

            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_MXUI.uiView);
        }
    }
}

module ui.nqp.game_ui.wxsaoleihb {
    export class WXSaoLei_YuEUI extends View {
		public box_main:Laya.Box;
		public lb_info:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Box","props":{"width":510,"var":"box_main","height":260,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":129,"x":255,"width":510,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_d5.png","sizeGrid":"25,25,25,25","height":260,"anchorY":0.5,"anchorX":0.5,"alpha":0.9}},{"type":"Image","props":{"y":72,"x":255,"skin":"wxsaoleihb_ui/game_ui/wxsaoleihb/saolei/tu_qc.png","scaleY":1.5,"scaleX":1.5,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":184,"var":"lb_info","text":"余额不足，请充值！","fontSize":35,"color":"#ffffff","centerX":0,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.nqp.game_ui.wxsaoleihb.WXSaoLei_YuEUI.uiView);
        }
    }
}
