(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+Gol":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".theme--light.v-data-table {\n  background-color: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-data-table .v-data-table__divider {\n  border-right: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table.v-data-table--fixed-header thead th {\n  background: #FFFFFF;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table thead tr:last-child th {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table thead tr th {\n  color: rgba(0, 0, 0, 0.6);\n}\n.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table tbody tr:not(:last-child) td:last-child {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table tbody tr.active {\n  background: #f5f5f5;\n}\n.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {\n  background: #eeeeee;\n}\n\n.theme--dark.v-data-table {\n  background-color: #424242;\n  color: #FFFFFF;\n}\n.theme--dark.v-data-table .v-data-table__divider {\n  border-right: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table.v-data-table--fixed-header thead th {\n  background: #424242;\n  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table thead tr:last-child th {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table thead tr th {\n  color: rgba(255, 255, 255, 0.7);\n}\n.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table tbody tr.active {\n  background: #505050;\n}\n.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {\n  background: #616161;\n}\n\n.v-data-table table {\n  width: 100%;\n  border-spacing: 0;\n}\n.v-data-table td, .v-data-table th {\n  padding: 0 16px;\n}\n.v-data-table th {\n  user-select: none;\n  font-size: 0.75rem;\n  height: 48px;\n}\n.v-application--is-ltr .v-data-table th {\n  text-align: left;\n}\n.v-application--is-rtl .v-data-table th {\n  text-align: right;\n}\n.v-data-table td {\n  font-size: 0.875rem;\n  height: 48px;\n}\n\n.v-data-table__wrapper {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.v-data-table__progress {\n  height: auto !important;\n}\n.v-data-table__progress th {\n  height: auto !important;\n  border: none !important;\n  padding: 0;\n}\n\n.v-data-table--dense td {\n  height: 24px;\n}\n.v-data-table--dense th {\n  height: 32px;\n}\n\n.v-data-table--fixed-height .v-data-table__wrapper {\n  overflow-y: auto;\n}\n\n.v-data-table--fixed-header .v-data-table__wrapper {\n  overflow-y: auto;\n}\n.v-data-table--fixed-header thead th {\n  border-bottom: 0px !important;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n.v-data-table--fixed-header thead tr:nth-child(2) th {\n  top: 48px;\n}\n.v-application--is-ltr .v-data-table--fixed-header .v-data-footer {\n  margin-right: 17px;\n}\n.v-application--is-rtl .v-data-table--fixed-header .v-data-footer {\n  margin-left: 17px;\n}\n\n.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th {\n  top: 32px;\n}",""])},H09D:function(t,a,e){"use strict";e("izd9");var n=e("gNKD"),i=e("dWAg"),r=e("WN+I");a.a=Object(r.a)(i.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},Ji66:function(t,a,e){"use strict";e.r(a);var n=e("TSrn"),i=e("vSzF"),r={middleware:["auth","verified","2fa_passed","admin"],components:{KeyValueTable:n.a,GameMenu:i.a},props:["id"],metaInfo:function(){return{title:this.$t("Game {0}",[this.id])}},computed:{headers:function(){return[{text:this.$t("ID"),value:"id"},{text:this.$t("User"),value:"account.user.name"},{text:this.$t("Game"),value:"title"},{text:this.$t("Bet"),value:"bet",format:"decimal"},{text:this.$t("Win"),value:"win",format:"decimal"},{text:this.$t("Profit"),value:"profit",format:"decimal"},{text:this.$t("Created at"),value:"created_at"},{text:this.$t("Updated at"),value:"updated_at"}]}}},o=e("KHd+"),d=e("ZUTo"),l=e.n(d),s=e("gzZi"),h=e("sK+t"),v=e("mdmw"),c=e("Yq0q"),m=e("pSOK"),b=e("Ey0z"),u=e("D9m0"),p=e("L6Q5"),f=e("cdmR"),g=e("Kn9U"),_=Object(o.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",lg:"8"}},[e("v-card",[e("v-toolbar",[e("v-btn",{attrs:{icon:""},on:{click:function(a){return t.$router.go(-1)}}},[e("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),e("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Game {0}",[t.id]))+"\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("game-menu",{attrs:{id:t.id}})],1),t._v(" "),e("v-card-text",[e("key-value-table",{attrs:{name:"game",api:"/api/admin/games/"+t.id,headers:t.headers},scopedSlots:t._u([{key:"account.user.name",fn:function(a){var n=a.item.account.user;return[e("router-link",{attrs:{to:{name:"admin.users.show",params:{id:n.id}}}},[t._v(t._s(n.name))])]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=_.exports;l()(_,{VBtn:s.a,VCard:h.a,VCardText:v.c,VCol:c.a,VContainer:m.a,VIcon:b.a,VRow:u.a,VSpacer:p.a,VToolbar:f.a,VToolbarTitle:g.a})},TSrn:function(t,a,e){"use strict";var n=e("o0o1"),i=e.n(n),r=e("vDqi"),o=e.n(r),d=e("/rcJ"),l=e("ZXch");function s(t,a,e,n,i,r,o){try{var d=t[r](o),l=d.value}catch(t){return void e(t)}d.done?a(l):Promise.resolve(l).then(n,i)}var h,v,c={name:"KeyValueTable",props:["name","api","headers"],data:function(){return{data:null}},watch:{api:function(){this.loadData()}},created:function(){this.loadData()},methods:{value:function(t){var a=t.lookup?this.data[t.lookup][this.data[this.name][t.value]]:Object(l.e)(this.data[this.name],t.value);return"boolean"==typeof a?a?this.$t("Yes"):this.$t("No"):t.format?this.format(t.format,a):a},format:function(t,a){return"function"==typeof d[t]?d[t](a):a},loadData:(h=i.a.mark((function t(){var a,e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.data=null,t.next=3,o.a.get(this.api);case 3:a=t.sent,e=a.data,this.data=e,e[this.name]&&this.$emit("load",{data:e[this.name]});case 7:case"end":return t.stop()}}),t,this)})),v=function(){var t=this,a=arguments;return new Promise((function(e,n){var i=h.apply(t,a);function r(t){s(i,e,n,r,o,"next",t)}function o(t){s(i,e,n,r,o,"throw",t)}r(void 0)}))},function(){return v.apply(this,arguments)})}},m=e("KHd+"),b=e("ZUTo"),u=e.n(b),p=e("H09D"),f=e("MSko"),g=Object(m.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("tbody",[t._l(t.headers,(function(a){return e("tr",{key:a.value},[e("td",[t._v(t._s(a.text))]),t._v(" "),e("td",{staticClass:"text-right"},[t.data?t._t(a.value,[t._v("\n            "+t._s(t.value(a))+"\n          ")],{item:t.data[t.name]}):e("v-skeleton-loader",{attrs:{type:"text","min-width":"60"}})],2)])})),t._v(" "),t.data?t._t("after",null,{item:t.data}):t._e()],2)]},proxy:!0}],null,!0)})}),[],!1,null,null,null);a.a=g.exports;u()(g,{VSimpleTable:p.a,VSkeletonLoader:f.a})},izd9:function(t,a,e){var n=e("+Gol");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(n,i);n.locals&&(t.exports=n.locals)},vSzF:function(t,a,e){"use strict";var n={props:["id","small"]},i=e("KHd+"),r=e("ZUTo"),o=e.n(r),d=e("gzZi"),l=e("Ey0z"),s=e("iGBT"),h=e("2hOt"),v=e("XSMC"),c=e("NMP6"),m=e("5Emp"),b=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on;return[e("v-btn",t._g({attrs:{icon:""}},n),[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e("v-list",[e("v-list-item",{attrs:{to:{name:"admin.games.show",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),e("v-list-item",{attrs:{to:{name:"admin.games.details",params:{id:t.id}},exact:""}},[e("v-list-item-icon",[e("v-icon",{attrs:{small:t.small}},[t._v("mdi-table-eye")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(t.$t("Details")))])],1)],1)],1)],1)}),[],!1,null,null,null);a.a=b.exports;o()(b,{VBtn:d.a,VIcon:l.a,VList:s.a,VListItem:h.a,VListItemContent:v.a,VListItemIcon:c.a,VListItemTitle:v.c,VMenu:m.a})}}]);
//# sourceMappingURL=admin-games-show.js.map