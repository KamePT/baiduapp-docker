"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[311],{2311:function(e,r,t){t.r(r),t.d(r,{default:function(){return n}});var o=t(6923),s=t(3742);var i={name:"Login",mixins:[{props:{},data(){return{}},computed:{...(0,o.Se)({getQrCode:"userStore/getQrCode",getLoadingError:"userStore/getLoadingError"})},watch:{},filters:{},created(){},mounted(){sessionStorage.removeItem("vuex_synology"),this.$store.commit("emptyData"),this.refreshCode()},beforeDestroy(){},methods:{...(0,o.nv)({queryQrCodeImg:"userStore/queryQrCodeImg"}),userTreaty(){window.open(s.jz,"_blank")},privacyTreaty(){window.open(s.Tm,"_blank")},refreshCode(){this.$store.commit("userStore/SET_LOADING_ERROR",!1),this.queryQrCodeImg()}}}],components:{}},n=(0,t(1001).Z)(i,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"login-view"},[r("div",{staticClass:"login-content"},[r("div",{staticClass:"logo"},[r("el-image",{attrs:{src:t(912)}})],1),r("div",{staticClass:"top-text"},[e._v("登录后可读取、下载百度网盘的文件，或将NAS文件上传到百度网盘")]),r("div",{class:[e.getLoadingError?"error-code":"","qr-code"]},[r("el-image",{directives:[{name:"show",rawName:"v-show",value:!e.getLoadingError,expression:"!getLoadingError"}],attrs:{src:e.getQrCode}}),r("el-image",{directives:[{name:"show",rawName:"v-show",value:e.getLoadingError,expression:"getLoadingError"}],attrs:{src:t(6724)},on:{click:e.refreshCode}})],1),e._m(0),r("div",{staticClass:"footer-detail"},[e._v(" 详情请查看"),r("span",{on:{click:e.userTreaty}},[e._v("《用户协议》")]),r("span",{on:{click:e.privacyTreaty}},[e._v("《隐私协议》")])])])])}),[function(){var e=this,r=e._self._c;return r("div",{staticClass:"bottom-text"},[e._v("请使用 "),r("span",[e._v("百度网盘APP")]),e._v(" 扫描二维码登录授权并备份百度网盘数据")])}],!1,null,"121a0106",null).exports},3742:function(e,r,t){t.d(r,{Tm:function(){return s},g3:function(){return i},jz:function(){return o}});const o="https://pan.baidu.com/netdisk/duty_mobi/",s="https://pan.baidu.com/wap/privacy_policy",i="https://f.kdocs.cn/ksform/w/write/zpBPEdDb#routePromt"},6724:function(e,r,t){e.exports=t.p+"img/refresh_code.d84fa44e.svg"},912:function(e,r,t){e.exports=t.p+"img/net_disk_logo.1973b28c.png"}}]);