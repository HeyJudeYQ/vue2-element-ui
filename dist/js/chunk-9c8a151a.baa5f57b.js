(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c8a151a"],{3760:function(o,a,s){"use strict";s.r(a);var t=function(){var o=this,a=o._self._c;return a("div",{staticClass:"dialogWrap"},[a("button",{on:{click:function(a){o.dialog1=!0}}},[o._v("弹框一")]),a("br"),a("br"),a("button",{on:{click:function(a){o.dialog2=!0}}},[o._v("弹框二")]),a("br"),a("br"),a("button",{on:{click:function(a){o.dialog3=!0}}},[o._v("弹框三")]),a("my-dialog",{attrs:{isShowDialog:o.dialog1,mask:!1},on:{"update:isShowDialog":function(a){o.dialog1=a},"update:is-show-dialog":function(a){o.dialog1=a},hasClosed:o.hasClosed}},[a("span",{attrs:{slot:"header"},slot:"header"},[o._v('弹框一：头部命名插槽 slot="header"')]),a("div",{staticClass:"dialogBox"},[a("h1",[o._v("两个插槽")]),a("h1",[o._v("mask为false，关闭背景层")]),a("h1",[o._v("两个插槽")]),a("h1",[o._v("mask为false，关闭背景层")]),a("h1",[o._v("两个插槽")]),a("h1",[o._v("mask为false，关闭背景层")]),a("h1",[o._v("两个插槽")]),a("h1",[o._v("mask为false，关闭背景层")])]),a("span",{attrs:{slot:"footer"},slot:"footer"},[o._v('脚部命名插槽 slot="footer"')])]),a("br"),a("my-dialog",{attrs:{isShowDialog:o.dialog2,isShowFoot:!1,title:"弹框二",beforeClose:o.beforeClose},on:{"update:isShowDialog":function(a){o.dialog2=a},"update:is-show-dialog":function(a){o.dialog2=a},hasClosed:o.hasClosed}},[a("div",{staticClass:"dialogBox"},[a("h3",[o._v("title:弹框标题")]),a("h3",[o._v("isShowFoot:没有弹框脚部")])])]),a("br"),a("my-dialog",{attrs:{isShowDialog:o.dialog3,title:"弹框三",beforeClose:o.beforeClose,clickMaskClose:!0},on:{"update:isShowDialog":function(a){o.dialog3=a},"update:is-show-dialog":function(a){o.dialog3=a},hasClosed:o.hasClosed}},[a("div",{staticClass:"dialogBox"},[a("h3",[o._v("mask不要遮罩背景层")]),a("h3",[o._v("clickMaskClose允许点击遮罩背景层去关闭")])])])],1)},i=[],l={name:"myDialogName",data(){return{dialog1:!1,dialog2:!1,dialog3:!1}},methods:{beforeClose(){var o=new Promise((o,a)=>{this.$confirm("是否关闭弹框?","提示",{confirmButtonText:"关上",cancelButtonText:"不关",type:"warning"}).then(()=>{o(!0)}).catch(o=>{a(!1)})}).catch(o=>{console.log("reason",o)});return o},hasClosed(){console.log("已经关闭了")}}},e=l,n=(s("a3a4"),s("2877")),d=Object(n["a"])(e,t,i,!1,null,"0980d722",null);a["default"]=d.exports},a3a4:function(o,a,s){"use strict";s("b8a8")},b8a8:function(o,a,s){}}]);