(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"+Gol":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".theme--light.v-data-table {\n  background-color: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-data-table .v-data-table__divider {\n  border-right: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table.v-data-table--fixed-header thead th {\n  background: #FFFFFF;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table thead tr:last-child th {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table thead tr th {\n  color: rgba(0, 0, 0, 0.6);\n}\n.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table tbody tr:not(:last-child) td:last-child {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table tbody tr.active {\n  background: #f5f5f5;\n}\n.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {\n  background: #eeeeee;\n}\n\n.theme--dark.v-data-table {\n  background-color: #424242;\n  color: #FFFFFF;\n}\n.theme--dark.v-data-table .v-data-table__divider {\n  border-right: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table.v-data-table--fixed-header thead th {\n  background: #424242;\n  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table thead tr:last-child th {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table thead tr th {\n  color: rgba(255, 255, 255, 0.7);\n}\n.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table tbody tr.active {\n  background: #505050;\n}\n.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {\n  background: #616161;\n}\n\n.v-data-table table {\n  width: 100%;\n  border-spacing: 0;\n}\n.v-data-table td, .v-data-table th {\n  padding: 0 16px;\n}\n.v-data-table th {\n  user-select: none;\n  font-size: 0.75rem;\n  height: 48px;\n}\n.v-application--is-ltr .v-data-table th {\n  text-align: left;\n}\n.v-application--is-rtl .v-data-table th {\n  text-align: right;\n}\n.v-data-table td {\n  font-size: 0.875rem;\n  height: 48px;\n}\n\n.v-data-table__wrapper {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.v-data-table__progress {\n  height: auto !important;\n}\n.v-data-table__progress th {\n  height: auto !important;\n  border: none !important;\n  padding: 0;\n}\n\n.v-data-table--dense td {\n  height: 24px;\n}\n.v-data-table--dense th {\n  height: 32px;\n}\n\n.v-data-table--fixed-height .v-data-table__wrapper {\n  overflow-y: auto;\n}\n\n.v-data-table--fixed-header .v-data-table__wrapper {\n  overflow-y: auto;\n}\n.v-data-table--fixed-header thead th {\n  border-bottom: 0px !important;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n.v-data-table--fixed-header thead tr:nth-child(2) th {\n  top: 48px;\n}\n.v-application--is-ltr .v-data-table--fixed-header .v-data-footer {\n  margin-right: 17px;\n}\n.v-application--is-rtl .v-data-table--fixed-header .v-data-footer {\n  margin-left: 17px;\n}\n\n.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th {\n  top: 32px;\n}",""])},"1Tr/":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),r=a.n(n),s=a("vDqi"),o=a.n(s),i=a("L2JU"),l=a("/rcJ");function d(t,e,a,n,r,s,o){try{var i=t[s](o),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(n,r)}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var b,v,p={metaInfo:function(){return{title:this.$t("Affiliate program")}},data:function(){return{stats:null}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(i.d)("auth",["user"])),created:(b=r.a.mark((function t(){var e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/api/user/affiliate/stats");case 2:e=t.sent,a=e.data,this.stats=a;case 5:case"end":return t.stop()}}),t,this)})),v=function(){var t=this,e=arguments;return new Promise((function(a,n){var r=b.apply(t,e);function s(t){d(r,a,n,s,o,"next",t)}function o(t){d(r,a,n,s,o,"throw",t)}s(void 0)}))},function(){return v.apply(this,arguments)}),methods:{decimal:l.decimal}},_=a("KHd+"),u=a("ZUTo"),m=a.n(u),f=a("sK+t"),g=a("mdmw"),x=a("Yq0q"),y=a("pSOK"),w=a("D9m0"),k=a("H09D"),C=a("MSko"),O=a("cdmR"),$=a("Kn9U"),F=Object(_.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-card",[a("v-toolbar",[a("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Affiliate program"))+"\n          ")])],1),t._v(" "),a("v-card-text",[a("h2",{staticClass:"title"},[t._v(t._s(t.$t("Registrations")))]),t._v(" "),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(t._s(t.$t("Tier {0}",[1])))]),t._v(" "),a("th",{staticClass:"text-center"},[t._v(t._s(t.$t("Tier {0}",[2])))]),t._v(" "),a("th",{staticClass:"text-center"},[t._v(t._s(t.$t("Tier {0}",[3])))])])]),t._v(" "),a("tbody",[a("tr",[t.stats?[a("td",{staticClass:"text-center"},[t._v(t._s(t.stats.registrations.tier1_count))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.stats.registrations.tier2_count))]),t._v(" "),a("td",{staticClass:"text-center"},[t._v(t._s(t.stats.registrations.tier3_count))])]:[a("td",{attrs:{colspan:"3"}},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)]],2)])]},proxy:!0}])}),t._v(" "),a("h2",{staticClass:"title mt-5"},[t._v(t._s(t.$t("Commissions by tier")))]),t._v(" "),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-center"},[t._v(t._s(t.$t("Tier {0}",[1])))]),t._v(" "),a("th",{staticClass:"text-center"},[t._v(t._s(t.$t("Tier {0}",[2])))]),t._v(" "),a("th",{staticClass:"text-center"},[t._v(t._s(t.$t("Tier {0}",[3])))])])]),t._v(" "),a("tbody",[a("tr",[t.stats?t._l([1,2,3],(function(e){return a("td",{key:e,staticClass:"text-center"},[t._v("\n                      "+t._s(t.stats.commissions_by_tier[e]?t.decimal(t.stats.commissions_by_tier[e].commissions_total):"0.00")+"\n                    ")])})):[a("td",{attrs:{colspan:"3"}},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)]],2)])]},proxy:!0}])}),t._v(" "),a("h2",{staticClass:"title mt-5"},[t._v(t._s(t.$t("Commissions by type")))]),t._v(" "),a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Type")))]),t._v(" "),a("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Amount")))])])]),t._v(" "),a("tbody",[t.stats?[t.stats.commissions_by_type.length?t._l(t.stats.commissions_by_type,(function(e,n){return a("tr",{key:e.title},[a("td",{staticClass:"text-left"},[t._v(t._s(e.title))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.decimal(e.commissions_total)))])])})):[a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("\n                        "+t._s(t.$t("No commissions found."))+"\n                      ")])])]]:t._l(Array(5).fill(0),(function(t,e){return a("tr",{key:e},[a("td",{attrs:{colspan:"2"}},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)])}))],2)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=F.exports;m()(F,{VCard:f.a,VCardText:g.c,VCol:x.a,VContainer:y.a,VRow:w.a,VSimpleTable:k.a,VSkeletonLoader:C.a,VToolbar:O.a,VToolbarTitle:$.a})},H09D:function(t,e,a){"use strict";a("izd9");var n=a("gNKD"),r=a("dWAg"),s=a("WN+I");e.a=Object(s.a)(r.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},izd9:function(t,e,a){var n=a("+Gol");"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,r);n.locals&&(t.exports=n.locals)}}]);
//# sourceMappingURL=user-affiliate-stats.js.map