(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{ihfo:function(r,o,s){"use strict";s.r(o);var e=s("o0o1"),a=s.n(e),t=s("4HBT"),n=s.n(t);function i(r,o,s,e,a,t,n){try{var i=r[t](n),d=i.value}catch(r){return void s(r)}i.done?o(d):Promise.resolve(d).then(e,a)}var d,c,u={mixins:[s("C3Ci").a],metaInfo:function(){return{title:this.$t("Change password")}},data:function(){return{showPassword:!1,showPassword2:!1,showPassword3:!1,form:new n.a({current_password:"",password:"",password_confirmation:""})}},methods:{update:(d=a.a.mark((function r(){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.form.patch("/api/user/security/password/update");case 2:this.$store.dispatch("message/success",{text:this.$t("Password successfully changed.")}),this.form.reset(),this.$refs.form.reset();case 5:case"end":return r.stop()}}),r,this)})),c=function(){var r=this,o=arguments;return new Promise((function(s,e){var a=d.apply(r,o);function t(r){i(a,s,e,t,n,"next",r)}function n(r){i(a,s,e,t,n,"throw",r)}t(void 0)}))},function(){return c.apply(this,arguments)})}},w=s("KHd+"),f=s("ZUTo"),l=s.n(f),p=s("gzZi"),m=s("sK+t"),h=s("mdmw"),v=s("Yq0q"),_=s("pSOK"),y=s("S9TP"),b=s("D9m0"),x=s("hlRy"),P=s("cdmR"),g=s("Kn9U"),V=Object(w.a)(u,(function(){var r=this,o=r.$createElement,s=r._self._c||o;return s("v-container",{attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[s("v-card",[s("v-toolbar",[s("v-toolbar-title",[r._v("\n            "+r._s(r.$t("Change password"))+"\n          ")])],1),r._v(" "),s("v-card-text",[s("v-form",{ref:"form",on:{submit:function(o){return o.preventDefault(),r.update(o)}},model:{value:r.formIsValid,callback:function(o){r.formIsValid=o},expression:"formIsValid"}},[s("v-text-field",{attrs:{label:r.$t("Current password"),"append-icon":r.showPassword?"mdi-eye":"mdi-eye-off",type:r.showPassword?"text":"password",name:"current_password",rules:[r.validationRequired],error:r.form.errors.has("current_password"),"error-messages":r.form.errors.get("current_password"),outlined:"",counter:""},on:{"click:append":function(o){r.showPassword=!r.showPassword},keydown:function(o){return r.clearFormErrors(o,"current_password")}},model:{value:r.form.current_password,callback:function(o){r.$set(r.form,"current_password",o)},expression:"form.current_password"}}),r._v(" "),s("v-text-field",{attrs:{label:r.$t("New password"),"append-icon":r.showPassword2?"mdi-eye":"mdi-eye-off",type:r.showPassword2?"text":"password",name:"password",rules:[r.validationRequired,function(o){return r.validationMinLength(o,6)}],error:r.form.errors.has("password"),"error-messages":r.form.errors.get("password"),outlined:"",counter:""},on:{"click:append":function(o){r.showPassword2=!r.showPassword2},keydown:function(o){return r.clearFormErrors(o,"password")}},model:{value:r.form.password,callback:function(o){r.$set(r.form,"password",o)},expression:"form.password"}}),r._v(" "),s("v-text-field",{attrs:{label:r.$t("Confirm new password"),"append-icon":r.showPassword3?"mdi-eye":"mdi-eye-off",type:r.showPassword3?"text":"password",name:"password_confirmation",rules:[r.validationRequired,function(o){return r.validationMatch(r.form.password,o)}],error:r.form.errors.has("password_confirmation"),"error-messages":r.form.errors.get("password_confirmation"),outlined:"",counter:""},on:{"click:append":function(o){r.showPassword3=!r.showPassword3},keydown:function(o){return r.clearFormErrors(o,"password_confirmation")}},model:{value:r.form.password_confirmation,callback:function(o){r.$set(r.form,"password_confirmation",o)},expression:"form.password_confirmation"}}),r._v(" "),s("v-btn",{attrs:{type:"submit",color:"primary",disabled:!r.formIsValid||r.form.busy,loading:r.form.busy}},[r._v("\n              "+r._s(r.$t("Save"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);o.default=V.exports;l()(V,{VBtn:p.a,VCard:m.a,VCardText:h.c,VCol:v.a,VContainer:_.a,VForm:y.a,VRow:b.a,VTextField:x.a,VToolbar:P.a,VToolbarTitle:g.a})}}]);
//# sourceMappingURL=user-security-password.js.map