(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"N4z+":function(t,i,e){"use strict";e.r(i);var n=e("o0o1"),a=e.n(n),s=e("4HBT"),o=e.n(s);function r(t,i,e,n,a,s,o){try{var r=t[s](o),c=r.value}catch(t){return void e(t)}r.done?i(c):Promise.resolve(c).then(n,a)}var c,m,l={middleware:["auth","verified","2fa_passed","admin"],components:{AffiliateCommissionMenu:e("har0").a},props:["id"],metaInfo:function(){return{title:this.$t("Affiliate commission {0}",[this.id])}},data:function(){return{form:new o.a}},methods:{reject:(c=a.a.mark((function t(){var i,e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/admin/affiliate/commissions/".concat(this.id,"/reject"));case 2:i=t.sent,e=i.data,this.$store.dispatch("message/"+(e.success?"success":"error"),{text:e.message}),this.$router.push({name:"admin.affiliate.commissions.index"});case 6:case"end":return t.stop()}}),t,this)})),m=function(){var t=this,i=arguments;return new Promise((function(e,n){var a=c.apply(t,i);function s(t){r(a,e,n,s,o,"next",t)}function o(t){r(a,e,n,s,o,"throw",t)}s(void 0)}))},function(){return m.apply(this,arguments)})}},v=e("KHd+"),u=e("ZUTo"),d=e.n(u),f=e("gzZi"),p=e("sK+t"),_=e("mdmw"),h=e("Yq0q"),V=e("pSOK"),w=e("S9TP"),b=e("Ey0z"),y=e("D9m0"),x=e("L6Q5"),$=e("cdmR"),j=e("Kn9U"),T=Object(v.a)(l,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-card",[e("v-toolbar",[e("v-btn",{attrs:{icon:""},on:{click:function(i){return t.$router.go(-1)}}},[e("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),e("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Affiliate commission {0}",[t.id]))+"\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("affiliate-commission-menu",{attrs:{id:t.id}})],1),t._v(" "),e("v-card-text",[e("p",[t._v("\n            "+t._s(t.$t("Are you sure you want to reject this commission?"))+"\n          ")]),t._v(" "),e("v-form",{on:{submit:function(i){return i.preventDefault(),t.reject(i)}}},[e("v-btn",{attrs:{type:"submit",color:"error",disabled:t.form.busy,loading:t.form.busy}},[t._v(t._s(t.$t("Reject")))])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);i.default=T.exports;d()(T,{VBtn:f.a,VCard:p.a,VCardText:_.c,VCol:h.a,VContainer:V.a,VForm:w.a,VIcon:b.a,VRow:y.a,VSpacer:x.a,VToolbar:$.a,VToolbarTitle:j.a})},har0:function(t,i,e){"use strict";var n={props:["id","small"]},a=e("KHd+"),s=e("ZUTo"),o=e.n(s),r=e("gzZi"),c=e("Ey0z"),m=e("iGBT"),l=e("2hOt"),v=e("XSMC"),u=e("NMP6"),d=e("5Emp"),f=Object(a.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(i){var n=i.on;return[e("v-btn",t._g({attrs:{icon:""}},n),[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e("v-list",[e("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.show",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),e("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.approve",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-check")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("Approve")))])],1)],1),t._v(" "),e("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.reject",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-cancel")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("Reject")))])],1)],1)],1)],1)}),[],!1,null,null,null);i.a=f.exports;o()(f,{VBtn:r.a,VIcon:c.a,VList:m.a,VListItem:l.a,VListItemContent:v.a,VListItemIcon:u.a,VListItemTitle:v.c,VMenu:d.a})}}]);
//# sourceMappingURL=admin-affiliate-commissions-reject.js.map