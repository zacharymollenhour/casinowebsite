(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{ST2f:function(t,e,a){"use strict";var r=a("fpkf"),s={name:"UserLink",props:["user"],computed:{providers:function(){return Object(r.a)("oauth")}}},i=a("KHd+"),o=a("ZUTo"),n=a.n(o),l=a("ghKu"),c=a("zCDB"),u=a("Ey0z"),m=a("rdoz"),p=a("Oi+f"),d=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("v-avatar",{attrs:{size:"25"}},[a("v-img",{attrs:{src:t.user.avatar_url}})],1),t._v(" "),a("router-link",{staticClass:"mr-1",attrs:{to:{name:"admin.users.show",params:{id:t.user.id}}}},[t._v(t._s(t.user.name))]),t._v(" "),t.user.is_active?t._e():a("v-chip",{attrs:{color:"error",small:"",label:""}},[t._v(t._s(t.$t("Blocked")))]),t._v(" "),t.user.is_admin?a("v-chip",{attrs:{color:"primary",small:"",outlined:"",label:""}},[t._v(t._s(t.$t("Admin")))]):t.user.is_bot?a("v-chip",{attrs:{color:"warning",small:"",outlined:"",label:""}},[t._v(t._s(t.$t("Bot")))]):t._e(),t._v(" "),t._l(t.user.profiles,(function(e){return a("v-tooltip",{key:e.id,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(r){var s=r.on;return[a("v-icon",t._g({attrs:{small:""}},s),[t._v("mdi-"+t._s(t.providers[e.provider_name].mdi||e.provider_name))])]}}],null,!0)},[t._v(" "),a("span",[t._v(t._s(e.provider_name)+" "+t._s(t.$t("profile ID"))+" "+t._s(e.provider_user_id))])])})),t._v(" "),t.user.referrer?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-icon",t._g({attrs:{small:""}},r),[t._v("mdi-account-arrow-left")])]}}],null,!1,2018221753)},[t._v(" "),a("span",[t._v(t._s(t.$t("Referred by {0}",[t.user.referrer.name])))])]):t._e(),t._v(" "),t.user.two_factor_auth_enabled?a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-icon",t._g({attrs:{small:""}},r),[t._v("mdi-two-factor-authentication")])]}}],null,!1,2737254619)},[t._v(" "),a("span",[t._v(t._s(t.$t("Two-factor authentication enabled")))])]):t._e()],2)}),[],!1,null,null,null);e.a=d.exports;n()(d,{VAvatar:l.a,VChip:c.a,VIcon:u.a,VImg:m.a,VTooltip:p.a})},XpSl:function(t,e,a){"use strict";a.r(e);var r=a("ZMUr"),s=a("ST2f"),i=a("har0"),o={middleware:["auth","verified","2fa_passed","admin"],components:{DataTable:r.a,UserLink:s.a,AffiliateCommissionMenu:i.a},metaInfo:function(){return{title:this.$t("Affiliates commissions")}},computed:{headers:function(){return[{text:this.$t("ID"),value:"id"},{text:this.$t("Name"),value:"name",sortable:!1},{text:this.$t("Type"),value:"title",sortable:!1},{text:this.$t("Status"),value:"status",sortable:!1},{text:this.$t("Amount"),value:"amount",align:"right",format:"decimal"},{text:this.$t("Created at"),value:"created_at",align:"right"},{value:"actions",sortable:!1,align:"right"}]}},methods:{getStatusClass:function(t){return 1===t.status?"green--text":2===t.status?"error--text":void 0}}},n=a("KHd+"),l=a("ZUTo"),c=a.n(l),u=a("sK+t"),m=a("mdmw"),p=a("Yq0q"),d=a("pSOK"),v=a("D9m0"),f=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v("\n          "+t._s(t.$t("Affiliates commissions"))+"\n        ")]),t._v(" "),a("v-card-text",[a("data-table",{attrs:{api:"/api/admin/affiliate/commissions",headers:t.headers,"search-enabled":"","search-label":t.$t("Search by user ID or name")},scopedSlots:t._u([{key:"item.name",fn:function(t){var e=t.item.account.user;return[a("user-link",{attrs:{user:e}})]}},{key:"item.status",fn:function(e){var r=e.item;return[a("span",{class:t.getStatusClass(r)},[t._v(t._s(r.status_title))])]}},{key:"item.actions",fn:function(t){var e=t.item;return[a("affiliate-commission-menu",{attrs:{id:e.id,small:""}})]}}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=f.exports;c()(f,{VCard:u.a,VCardText:m.c,VCardTitle:m.d,VCol:p.a,VContainer:d.a,VRow:v.a})},ZMUr:function(t,e,a){"use strict";var r=a("o0o1"),s=a.n(r),i=a("vDqi"),o=a.n(i),n=a("L2JU"),l=a("ZXch"),c=a("/rcJ");function u(t,e,a,r,s,i,o){try{var n=t[i](o),l=n.value}catch(t){return void a(t)}n.done?e(l):Promise.resolve(l).then(r,s)}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){d(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var v,f,h={name:"DataTable",props:{api:{type:String,required:!0},headers:{type:Array,required:!0},sortBy:{type:String,required:!1,default:"id"},sortDesc:{type:Boolean,required:!1,default:!0},searchEnabled:{type:Boolean,required:!1,default:!1},searchLabel:{type:String,required:!1,default:null},hideFooter:{type:Boolean,required:!1,default:!1}},data:function(){return{loading:!0,options:{},items:[],itemsTotal:0}},computed:p({},Object(n.c)({cacheGet:"cache/get"}),{cacheKey:function(){return"datatable."+this.$route.name},footerProps:function(){return{"items-per-page-options":[5,10,25,50],"items-per-page-text":this.$t("Rows per page")}},sortDirection:function(){return this.options.sortDesc?"desc":"asc"},slotHeaderMap:function(){return this.headers.reduce((function(t,e){return t["item."+e.value]=e,t}),{})}}),methods:p({},Object(n.b)({cachePut:"cache/put"}),{get:function(){return l.e.apply(void 0,arguments)},format:function(t,e){return"function"==typeof c[t]?c[t](e):e},updateOptions:function(t){var e=t.page,a=t.itemsPerPage,r=t.sortBy,s=t.sortDesc;this.options={page:e,itemsPerPage:a,sortBy:r[0],sortDesc:s[0],search:this.options.search},this.cachePut({key:this.cacheKey,value:this.options}),this.fetchData()},clear:function(){this.options.search=null,this.search()},search:function(){this.fetchData()},fetchData:(v=s.a.mark((function t(){var e,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,o.a.get(this.api,{params:{page:this.options.page,items_per_page:this.options.itemsPerPage,sort_by:this.options.sortBy,sort_direction:this.sortDirection,search:this.options.search}});case 3:e=t.sent,a=e.data,this.items=a.items,this.itemsTotal=a.count,this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})),f=function(){var t=this,e=arguments;return new Promise((function(a,r){var s=v.apply(t,e);function i(t){u(s,a,r,i,o,"next",t)}function o(t){u(s,a,r,i,o,"throw",t)}i(void 0)}))},function(){return f.apply(this,arguments)})}),created:function(){this.options=this.cacheGet(this.cacheKey)||{page:1,itemsPerPage:10,sortBy:this.sortBy,sortDesc:this.sortDesc,search:null}}},_=a("KHd+"),y=a("ZUTo"),b=a.n(y),g=a("Yq0q"),w=a("j+oE"),O=a("S9TP"),k=a("D9m0"),P=a("MSko"),$=a("hlRy"),x=Object(_.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.searchEnabled?a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{cols:"12",md:"6",lg:"3"}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[a("v-text-field",{attrs:{label:t.searchLabel||t.$t("Search"),"append-outer-icon":"mdi-magnify","single-line":"","hide-details":"",clearable:""},on:{"click:clear":t.clear,"click:append-outer":t.search},model:{value:t.options.search,callback:function(e){t.$set(t.options,"search",e)},expression:"options.search"}})],1)],1)],1):t._e(),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,page:t.options.page,"sort-by":t.options.sortBy,"sort-desc":t.options.sortDesc,"items-per-page":t.options.itemsPerPage,"footer-props":t.footerProps,"server-items-length":t.itemsTotal,loading:t.loading,"must-sort":!0,"hide-default-footer":t.hideFooter,"no-data-text":t.$t("No data found"),"no-results-text":t.$t("No data found")},on:{"update:options":t.updateOptions},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(Array(t.options.itemsPerPage).fill(0),(function(t,e){return a("div",{key:e,staticClass:"align-center my-7"},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)}))},proxy:!0},t._l(t.slotHeaderMap,(function(e,a){return{key:a,fn:function(r){var s=r.item;return[t.$scopedSlots[a]?t._t(a,null,{item:s}):[t._v(t._s(e.format?t.format(e.format,t.get(s,e.value)):t.get(s,e.value)))]]}}}))],null,!0)})],1)}),[],!1,null,null,null);e.a=x.exports;b()(x,{VCol:g.a,VDataTable:w.a,VForm:O.a,VRow:k.a,VSkeletonLoader:P.a,VTextField:$.a})},har0:function(t,e,a){"use strict";var r={props:["id","small"]},s=a("KHd+"),i=a("ZUTo"),o=a.n(i),n=a("gzZi"),l=a("Ey0z"),c=a("iGBT"),u=a("2hOt"),m=a("XSMC"),p=a("NMP6"),d=a("5Emp"),v=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-menu",{attrs:{"offset-y":!0,transition:"scroll-y-transition",bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({attrs:{icon:""}},r),[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),a("v-list",[a("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.show",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-eye")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("View")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.approve",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-check")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Approve")))])],1)],1),t._v(" "),a("v-list-item",{attrs:{to:{name:"admin.affiliate.commissions.reject",params:{id:t.id}},exact:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{small:t.small}},[t._v("mdi-cancel")])],1),t._v(" "),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.$t("Reject")))])],1)],1)],1)],1)}),[],!1,null,null,null);e.a=v.exports;o()(v,{VBtn:n.a,VIcon:l.a,VList:c.a,VListItem:u.a,VListItemContent:m.a,VListItemIcon:p.a,VListItemTitle:m.c,VMenu:d.a})}}]);
//# sourceMappingURL=admin-affiliate-commissions.js.map