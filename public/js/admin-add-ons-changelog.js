(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"A/ri":function(t,a,n){"use strict";n.r(a);var e=n("o0o1"),r=n.n(e),o=n("vDqi"),i=n.n(o);function s(t,a,n,e,r,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?a(c):Promise.resolve(c).then(e,r)}var c,d,l={middleware:["auth","verified","2fa_passed","admin"],components:{Preloader:n("Rc+0").a},props:["id"],metaInfo:function(){return{title:this.$t("Changelog {0} add-on",[this.id])}},data:function(){return{data:null}},created:(c=r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/admin/add-ons/".concat(this.id,"/changelog"));case 2:a=t.sent,n=a.data,this.data=n.changelog;case 5:case"end":return t.stop()}}),t,this)})),d=function(){var t=this,a=arguments;return new Promise((function(n,e){var r=c.apply(t,a);function o(t){s(r,n,e,o,i,"next",t)}function i(t){s(r,n,e,o,i,"throw",t)}o(void 0)}))},function(){return d.apply(this,arguments)})},v=(n("gET0"),n("KHd+")),u=n("ZUTo"),p=n.n(u),f=n("gzZi"),h=n("sK+t"),w=n("mdmw"),m=n("Yq0q"),g=n("pSOK"),_=n("Ey0z"),V=n("D9m0"),b=n("MSko"),k=n("cdmR"),x=n("Kn9U"),y=Object(v.a)(l,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",[n("v-toolbar",[n("v-btn",{attrs:{icon:""},on:{click:function(a){return t.$router.go(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Changelog {0} add-on",[t.id]))+"\n          ")]),t._v(" "),n("preloader",{attrs:{active:!t.data}})],1),t._v(" "),n("v-card-text",[t.data?n("pre",{staticClass:"pre-wrap"},[t._v(t._s(t.data))]):[n("v-skeleton-loader",{attrs:{type:"article"}}),t._v(" "),n("v-skeleton-loader",{attrs:{type:"list-item-two-line"}})]],2)],1)],1)],1)],1)}),[],!1,null,"fe66d514",null);a.default=y.exports;p()(y,{VBtn:f.a,VCard:h.a,VCardText:w.c,VCol:m.a,VContainer:g.a,VIcon:_.a,VRow:V.a,VSkeletonLoader:b.a,VToolbar:k.a,VToolbarTitle:x.a})},IFn6:function(t,a,n){var e=n("eX+g");"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,r);e.locals&&(t.exports=e.locals)},"eX+g":function(t,a,n){(t.exports=n("I1BE")(!1)).push([t.i,".pre-wrap[data-v-fe66d514] {\n  white-space: pre-wrap;\n}",""])},gET0:function(t,a,n){"use strict";var e=n("IFn6");n.n(e).a}}]);
//# sourceMappingURL=admin-add-ons-changelog.js.map