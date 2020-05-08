(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{Uuwf:function(t,e,r){"use strict";r.r(e);var o=r("o0o1"),n=r.n(o),a=r("4HBT"),i=r.n(a),s=r("C3Ci"),c=r("L2JU");function l(t,e,r,o,n,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(o,n)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){l(a,o,n,i,s,"next",t)}function s(t){l(a,o,n,i,s,"throw",t)}i(void 0)}))}}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p,f,b,w={mixins:[s.a],metaInfo:function(){return{title:this.$t("Two-factor authentication")}},data:function(){return{showPassword:!1,disablingFormIsValid:null,confirmationFormIsValid:null,enablingForm:new i.a,disablingForm:new i.a,confirmationForm:new i.a({secret:"",one_time_password:""}),qr:null,displayDisablingForm:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(c.d)("auth",["user"])),methods:{enable:(b=u(n.a.mark((function t(){var e,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.enablingForm.post("/api/user/security/2fa/enable");case 2:e=t.sent,r=e.data,this.qr=r.qr,this.confirmationForm.secret=r.secret;case 6:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)}),confirm:(f=u(n.a.mark((function t(){var e,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.confirmationForm.post("/api/user/security/2fa/confirm");case 2:e=t.sent,r=e.data,this.$store.dispatch("auth/updateUser",r),this.qr=null,this.$store.dispatch("message/success",{text:this.$t("Two-factor authentication successfully enabled.")});case 7:case"end":return t.stop()}}),t,this)}))),function(){return f.apply(this,arguments)}),disable:(p=u(n.a.mark((function t(){var e,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.disablingForm.post("/api/user/security/2fa/disable");case 2:e=t.sent,r=e.data,this.$store.dispatch("auth/updateUser",r),this.$store.dispatch("message/success",{text:this.$t("Two-factor authentication successfully disabled.")});case 6:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)})}},v=r("KHd+"),h=r("ZUTo"),_=r.n(h),y=r("gzZi"),g=r("sK+t"),F=r("mdmw"),x=r("Yq0q"),$=r("pSOK"),O=r("S9TP"),P=r("D9m0"),V=r("hlRy"),k=r("cdmR"),j=r("Kn9U"),T=Object(v.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r("v-card",[r("v-toolbar",[r("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Two-factor authentication"))+"\n          ")])],1),t._v(" "),t.user.two_factor_auth_enabled&&t.user.two_factor_auth_passed?[t.displayDisablingForm?[r("v-card-text",[r("p",[t._v("\n                "+t._s(t.$t("Please fill in the below form to disable two-factor authentication."))+"\n              ")]),t._v(" "),r("v-form",{on:{submit:function(e){return e.preventDefault(),t.disable(e)}},model:{value:t.disablingFormIsValid,callback:function(e){t.disablingFormIsValid=e},expression:"disablingFormIsValid"}},[0==t.user.profiles.length?r("v-text-field",{attrs:{label:t.$t("Current password"),"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",name:"password",rules:[t.validationRequired],error:t.disablingForm.errors.has("password"),"error-messages":t.disablingForm.errors.get("password"),outlined:"",counter:""},on:{"click:append":function(e){t.showPassword=!t.showPassword},keydown:function(e){return t.clearFormErrors(e,"password",t.disablingForm)}},model:{value:t.disablingForm.password,callback:function(e){t.$set(t.disablingForm,"password",e)},expression:"disablingForm.password"}}):t._e(),t._v(" "),r("v-text-field",{attrs:{label:t.$t("One-time password"),type:"text",name:"one_time_password",rules:[t.validationRequired,function(e){return t.validationMinLength(e,6)}],error:t.disablingForm.errors.has("one_time_password"),"error-messages":t.disablingForm.errors.get("one_time_password"),outlined:""},on:{keydown:function(e){return t.clearFormErrors(e,"one_time_password",t.disablingForm)}},model:{value:t.disablingForm.one_time_password,callback:function(e){t.$set(t.disablingForm,"one_time_password",e)},expression:"disablingForm.one_time_password"}}),t._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!t.disablingFormIsValid||t.disablingForm.busy,loading:t.disablingForm.busy}},[t._v("\n                  "+t._s(t.$t("Confirm"))+"\n                ")])],1)],1)]:[r("v-card-text",[r("p",[t._v("\n                "+t._s(t.$t("Two-factor authentication is currently enabled."))+"\n              ")]),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.displayDisablingForm=!t.displayDisablingForm}}},[t._v(t._s(t.$t("Disable")))])],1)]]:[t.qr?[r("v-card-text",[r("p",[t._v(t._s(t.$t("Please do the following to enable two-factor authentication.")))]),t._v(" "),r("ul",[r("li",[t._v(t._s(t.$t("Open Google Authenticator app on your mobile phone.")))]),t._v(" "),r("li",[t._v(t._s(t.$t("Scan the below QR code with the authenticator app.")))]),t._v(" "),r("li",[t._v(t._s(t.$t("After that input the one-time password that you see on the screen to complete the process.")))])]),t._v(" "),r("div",{staticClass:"my-5 text-center",domProps:{innerHTML:t._s(t.qr)}}),t._v(" "),r("v-form",{on:{submit:function(e){return e.preventDefault(),t.confirm(e)}},model:{value:t.confirmationFormIsValid,callback:function(e){t.confirmationFormIsValid=e},expression:"confirmationFormIsValid"}},[r("v-text-field",{attrs:{label:t.$t("One-time password"),type:"text",name:"one_time_password",rules:[t.validationRequired,function(e){return t.validationMinLength(e,6)}],error:t.confirmationForm.errors.has("one_time_password"),"error-messages":t.confirmationForm.errors.get("one_time_password"),outlined:""},on:{keydown:function(e){return t.clearFormErrors(e,"one_time_password",t.confirmationForm)}},model:{value:t.confirmationForm.one_time_password,callback:function(e){t.$set(t.confirmationForm,"one_time_password",e)},expression:"confirmationForm.one_time_password"}}),t._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!t.confirmationFormIsValid||t.confirmationForm.busy,loading:t.confirmationForm.busy}},[t._v("\n                  "+t._s(t.$t("Confirm"))+"\n                ")])],1)],1)]:[r("v-card-text",[r("p",[t._v("\n              "+t._s(t.$t("2-step verification provides stronger security for your account by requiring a second step of verification when you sign in."))+"\n              "+t._s(t.$t("In addition to your password, you will also need a code generated by the Google Authenticator app on your phone."))+"\n              "+t._s(t.$t("It is strongly recommended to enable two-factor authentication to protect your account."))+"\n              ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",disabled:t.enablingForm.busy,loading:t.enablingForm.busy},on:{click:t.enable}},[t._v(t._s(t.$t("Enable")))])],1)]]],2)],1)],1)],1)}),[],!1,null,null,null);e.default=T.exports;_()(T,{VBtn:y.a,VCard:g.a,VCardText:F.c,VCol:x.a,VContainer:$.a,VForm:O.a,VRow:P.a,VTextField:V.a,VToolbar:k.a,VToolbarTitle:j.a})}}]);
//# sourceMappingURL=user-security-2fa.js.map