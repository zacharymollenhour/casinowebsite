(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{cx4U:function(t,a,n){"use strict";n.r(a);var e=n("o0o1"),s=n.n(e),r=n("vDqi"),i=n.n(r),o=n("4HBT"),c=n.n(o);function d(t,a,n,e,s,r,i){try{var o=t[r](i),c=o.value}catch(t){return void n(t)}o.done?a(c):Promise.resolve(c).then(e,s)}function l(t){return function(){var a=this,n=arguments;return new Promise((function(e,s){var r=t.apply(a,n);function i(t){d(r,e,s,i,o,"next",t)}function o(t){d(r,e,s,i,o,"throw",t)}i(void 0)}))}}var u,v,p,_={middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Add-ons")}},mixins:[n("C3Ci").a],computed:{},data:function(){return{form:new c.a,data:{}}},created:(p=l(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("/api/admin/add-ons");case 2:a=t.sent,n=a.data,this.data=n;case 5:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)}),methods:{disable:(v=l(s.a.mark((function t(a){var n,e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/admin/add-ons/".concat(a,"/disable"));case 2:n=t.sent,e=n.data,this.$store.dispatch("message/"+(e.success?"success":"error"),{text:e.message}),e.success&&(this.data.packages[a].enabled=!1);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)}),enable:(u=l(s.a.mark((function t(a){var n,e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.form.post("/api/admin/add-ons/".concat(a,"/enable"));case 2:n=t.sent,e=n.data,this.$store.dispatch("message/"+(e.success?"success":"error"),{text:e.message}),e.success&&(this.data.packages[a].enabled=!0);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return u.apply(this,arguments)})}},m=n("KHd+"),h=n("ZUTo"),f=n.n(h),b=n("gzZi"),x=n("sK+t"),w=n("mdmw"),g=n("Yq0q"),k=n("pSOK"),y=n("D9m0"),$=Object(m.a)(_,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{loading:!t.data.packages}},[n("v-card-title",[t._v("\n          "+t._s(t.$t("Add-ons"))+"\n        ")]),t._v(" "),n("v-card-text",t._l(t.data.packages,(function(a,e){return n("v-row",{key:e},[n("v-col",[n("v-card",{attrs:{outlined:""}},[n("v-card-title",{staticClass:"font-weight-thin"},[t._v("\n                  "+t._s(a.name)+"\n                  "),a.enabled?[t._v("\n                    v"+t._s(a.version)+"\n                  ")]:t._e()],2),t._v(" "),n("v-card-text",[t._v("\n                  "+t._s(a.description)+"\n                ")]),t._v(" "),n("v-card-actions",[a.installed&&a.min_app_version_installed?[t.data.releases["add-ons"][e]&&t.data.releases["add-ons"][e].version!==a.version?[a.hash?n("v-btn",{attrs:{text:"",color:"primary",to:{name:"admin.add-ons.install",params:{id:e}}}},[t._v("\n                        "+t._s(t.$t("Upgrade to v{0}",[t.data.releases["add-ons"][e].version]))+"\n                      ")]):t._e()]:[a.hash?n("v-btn",{attrs:{text:"",color:"primary",to:{name:"admin.add-ons.install",params:{id:e}}}},[t._v("\n                        "+t._s(t.$t("Re-install"))+"\n                      ")]):t._e()],t._v(" "),a.enabled?n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return t.disable(e)}}},[t._v("\n                      "+t._s(t.$t("Disable"))+"\n                    ")]):n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(a){return t.enable(e)}}},[t._v("\n                      "+t._s(t.$t("Enable"))+"\n                    ")]),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary",to:{name:"admin.add-ons.changelog",params:{id:e}}}},[t._v("\n                      "+t._s(t.$t("Changelog"))+"\n                    ")])]:a.installed&&!a.min_app_version_installed?[n("span",{staticClass:"pl-2 error--text"},[t._v(t._s(t.$t("App v{0} is required to enable this add-on",[a.min_app_version])))])]:[a.purchase_url?n("v-btn",{attrs:{text:"",color:"primary",href:a.purchase_url,target:"_blank"}},[t._v("\n                      "+t._s(t.$t("Purchase"))+"\n                    ")]):t._e(),t._v(" "),a.hash?n("v-btn",{attrs:{text:"",color:"primary",to:{name:"admin.add-ons.install",params:{id:e}}}},[t._v("\n                      "+t._s(t.$t("Install"))+"\n                    ")]):t._e()]],2)],1)],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=$.exports;f()($,{VBtn:b.a,VCard:x.a,VCardActions:w.a,VCardText:w.c,VCardTitle:w.d,VCol:g.a,VContainer:k.a,VRow:y.a})}}]);
//# sourceMappingURL=admin-add-ons.js.map