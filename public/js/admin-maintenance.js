(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{ZrHZ:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),o=a("vDqi"),s=a.n(o),i=a("4HBT"),c=a.n(i),m=a("C3Ci"),d=a("ZXch");function l(e,t,a,n,r,o,s){try{var i=e[o](s),c=i.value}catch(e){return void a(e)}i.done?t(c):Promise.resolve(c).then(n,r)}function u(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function s(e){l(o,n,r,s,i,"next",e)}function i(e){l(o,n,r,s,i,"throw",e)}s(void 0)}))}}var v,p,h,f,_,b,g={middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Maintenance")}},mixins:[m.a],computed:{commands:function(){return this.data.commands?this.data.commands.map((function(e){return{value:e.class,text:e.description}})):[]}},data:function(){return{data:{},maintenanceFormIsValid:null,maintenanceForm:new c.a({message:this.$t("Sorry, we are doing some maintenance. Please check back soon.")}),commandFormIsValid:null,commandForm:new c.a({command:null,arguments:{}}),migrationForm:new c.a,cacheForm:new c.a,cronForm:new c.a}},created:(b=u(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("/api/admin/maintenance");case 2:t=e.sent,a=t.data,this.data=a;case 5:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)}),methods:{switchMaintenanceMode:(_=u(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.data.maintenance_mode?"up":"down",e.next=3,this.maintenanceForm.post("/api/admin/maintenance/".concat(t));case 3:a=e.sent,n=a.data,this.data.maintenance_mode=!this.data.maintenance_mode,this.$store.dispatch("message/success",{text:n.message});case 7:case"end":return e.stop()}}),e,this)}))),function(){return _.apply(this,arguments)}),executeCommand:(f=u(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.commandForm.post("/api/admin/maintenance/command");case 2:t=e.sent,a=t.data,this.$store.dispatch("message/success",{text:a.message});case 5:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)}),migrate:(h=u(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.migrationForm.post("/api/admin/maintenance/migrate");case 2:t=e.sent,a=t.data,this.$store.dispatch("message/success",{text:a.message});case 5:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)}),clearCache:(p=u(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.cacheForm.post("/api/admin/maintenance/cache");case 2:t=e.sent,a=t.data,this.$store.dispatch("message/success",{text:a.message});case 5:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)}),cron:(v=u(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.cronForm.post("/api/admin/maintenance/cron");case 2:t=e.sent,a=t.data,this.$store.dispatch("message/success",{text:a.message});case 5:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)}),copyToClipboard:function(e){return Object(d.b)(e.$el.querySelector("input"))}}},w=a("KHd+"),y=a("ZUTo"),F=a.n(y),x=a("gzZi"),$=a("sK+t"),k=a("mdmw"),C=a("Yq0q"),V=a("pSOK"),T=a("S9TP"),I=a("D9m0"),P=a("uXRr"),j=a("MSko"),D=a("hlRy"),M=Object(w.a)(g,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[e._v("\n          "+e._s(e.$t("Maintenance"))+"\n        ")]),e._v(" "),a("v-card-text",[a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"font-weight-thin"},[e._v("\n                  "+e._s(e.$t("System info"))+"\n                ")]),e._v(" "),a("v-card-text",[a("v-skeleton-loader",{attrs:{type:"text",loading:!e.data.system_info}},[e._v("\n                    "+e._s(e.data.system_info)+"\n                  ")])],1)],1)],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"font-weight-thin"},[e._v("\n                  "+e._s(e.$t("Maintenance mode"))+"\n                ")]),e._v(" "),a("v-card-text",[a("p",[e._v("\n                  "+e._s(e.$t("You can enable maintenance mode during application upgrade or when doing other service tasks, so nobody except administrators can use the website."))+"\n                  ")]),e._v(" "),a("v-form",{staticClass:"mt-5",on:{submit:function(t){return t.preventDefault(),e.switchMaintenanceMode(t)}},model:{value:e.maintenanceFormIsValid,callback:function(t){e.maintenanceFormIsValid=t},expression:"maintenanceFormIsValid"}},[a("v-text-field",{attrs:{label:e.$t("Message"),rules:[e.validationRequired],error:e.maintenanceForm.errors.has("message"),"error-messages":e.maintenanceForm.errors.get("message"),disabled:void 0===e.data.maintenance_mode||e.data.maintenance_mode,outlined:""},model:{value:e.maintenanceForm.message,callback:function(t){e.$set(e.maintenanceForm,"message",t)},expression:"maintenanceForm.message"}}),e._v(" "),a("v-skeleton-loader",{attrs:{type:"button",loading:void 0===e.data.maintenance_mode}},[a("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.maintenanceFormIsValid||e.maintenanceForm.busy,loading:e.maintenanceForm.busy}},[e.data.maintenance_mode?[e._v("\n                          "+e._s(e.$t("Disable maintenance mode"))+"\n                        ")]:[e._v("\n                          "+e._s(e.$t("Enable maintenance mode"))+"\n                        ")]],2)],1)],1)],1)],1)],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"font-weight-thin"},[e._v("\n                  "+e._s(e.$t("Tasks"))+"\n                ")]),e._v(" "),a("v-card-text",[a("p",[e._v("\n                    "+e._s(e.$t("The app provides a number of service tasks, which can be executed on demand."))+"\n                  ")]),e._v(" "),a("v-form",{staticClass:"mt-5",on:{submit:function(t){return t.preventDefault(),e.executeCommand(t)}},model:{value:e.commandFormIsValid,callback:function(t){e.commandFormIsValid=t},expression:"commandFormIsValid"}},[a("v-select",{attrs:{items:e.commands,label:e.$t("Task"),error:e.commandForm.errors.has("command"),"error-messages":e.commandForm.errors.get("command"),outlined:"",disabled:!e.data.commands},model:{value:e.commandForm.command,callback:function(t){e.$set(e.commandForm,"command",t)},expression:"commandForm.command"}}),e._v(" "),e.commandForm.command?[e._l(e.data.commands,(function(t){return[t.class===e.commandForm.command?e._l(t.arguments,(function(t,n){return a("v-text-field",{key:n,attrs:{label:e.$t(t.title),rules:[e.validationRequired],placeholder:t.default,error:e.commandForm.errors.has("arguments"),"error-messages":e.commandForm.errors.get("arguments"),outlined:""},model:{value:e.commandForm.arguments[t.id],callback:function(a){e.$set(e.commandForm.arguments,t.id,a)},expression:"commandForm.arguments[arg.id]"}})})):e._e()]}))]:e._e(),e._v(" "),a("v-skeleton-loader",{attrs:{type:"button",loading:void 0===e.data.commands}},[a("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.commandForm.command||!e.commandFormIsValid||e.commandForm.busy,loading:e.commandForm.busy}},[e._v("\n                        "+e._s(e.$t("Execute"))+"\n                      ")])],1)],2)],1)],1)],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"font-weight-thin"},[e._v("\n                  "+e._s(e.$t("Database"))+"\n                ")]),e._v(" "),a("v-card-text",[a("p",[e._v("\n                    "+e._s(e.$t("After upgrading to a new version of the application it is necessary to update the database objects."))+"\n                    "+e._s(e.$t("All current data will be preserved."))+"\n                  ")]),e._v(" "),a("v-form",{on:{submit:function(t){return t.preventDefault(),e.migrate(t)}}},[a("v-btn",{attrs:{type:"submit",color:"primary",disabled:e.migrationForm.busy,loading:e.migrationForm.busy}},[e._v("\n                      "+e._s(e.$t("Update database"))+"\n                    ")])],1)],1)],1)],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"font-weight-thin"},[e._v("\n                  "+e._s(e.$t("Cache"))+"\n                ")]),e._v(" "),a("v-card-text",[a("p",[e._v("\n                  "+e._s(e.$t("The application caches templates, configuration, translation strings, aggregated data etc to improve performance."))+"\n                  "+e._s(e.$t("To clear all caches at once click the button below."))+"\n                  ")]),e._v(" "),a("v-form",{on:{submit:function(t){return t.preventDefault(),e.clearCache(t)}}},[a("v-btn",{attrs:{type:"submit",color:"primary",disabled:e.cacheForm.busy,loading:e.cacheForm.busy}},[e._v("\n                      "+e._s(e.$t("Clear cache"))+"\n                    ")])],1)],1)],1)],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-card",{attrs:{outlined:""}},[a("v-card-title",{staticClass:"font-weight-thin"},[e._v("\n                  "+e._s(e.$t("Cron"))+"\n                ")]),e._v(" "),a("v-card-text",[a("p",[e._v("\n                    "+e._s(e.$t("Certain application tasks are supposed to run automatically on a regular basis."))+"\n                    "+e._s(e.$t("To make it work please add the following system cron job."))+"\n                    "+e._s(e.$t("Please note that the command-line (cli) PHP version on your server should also meet the minimum PHP version requirements, otherwise the cron job will fail to execute."))+"\n                    "+e._s(e.$t("If you add the cron job via cPanel you need to omit the leading asteriks symbols."))+"\n                  ")]),e._v(" "),a("v-form",{on:{submit:function(t){return t.preventDefault(),e.cron(t)}}},[a("v-text-field",{ref:"cron",attrs:{dense:"",outlined:"",readonly:"","append-icon":"mdi-content-copy",value:e.data.cron_job,disabled:!e.data.cron_job},on:{"click:append":function(t){return e.copyToClipboard(e.$refs.cron)}}}),e._v(" "),a("v-btn",{attrs:{type:"submit",color:"primary",disabled:e.cronForm.busy,loading:e.cronForm.busy}},[e._v("\n                      "+e._s(e.$t("Execute cron job manually"))+"\n                    ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=M.exports;F()(M,{VBtn:x.a,VCard:$.a,VCardText:k.c,VCardTitle:k.d,VCol:C.a,VContainer:V.a,VForm:T.a,VRow:I.a,VSelect:P.a,VSkeletonLoader:j.a,VTextField:D.a})}}]);
//# sourceMappingURL=admin-maintenance.js.map