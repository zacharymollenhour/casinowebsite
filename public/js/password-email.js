(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"4JY7":function(e,t,r){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var i=function(){var e=!1,t=[];return{resolved:function(){return e},resolve:function(r){if(!e){e=!0;for(var a=0,i=t.length;a<i;a++)t[a](r)}},promise:{then:function(r){e?r():t.push(r)}}}},n=Object.prototype.hasOwnProperty;var o,c=(o=i(),{notify:function(){o.resolve()},wait:function(){return o.promise},render:function(e,t,r){this.wait().then((function(){r(window.grecaptcha.render(e,t))}))},reset:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(e)})))},execute:function(e){void 0!==e&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(e)})))},checkRecaptchaLoad:function(){n.call(window,"grecaptcha")&&n.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!o.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=c.notify);var s={name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var e=document.createElement("script");e.id=this.recaptchaScriptId,e.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,e.async=!0,e.defer=!0,document.head.appendChild(e)}},mounted:function(){var e=this;c.checkRecaptchaLoad();var t=a({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),r=this.$slots.default?this.$el.children[0]:this.$el;c.render(r,t,(function(t){e.$widgetId=t,e.$emit("render",t)}))},methods:{reset:function(){c.reset(this.$widgetId)},execute:function(){c.execute(this.$widgetId)},emitVerify:function(e){this.$emit("verify",e)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(e){return e("div",{},this.$slots.default)}};t.a=s},qpop:function(e,t,r){"use strict";r.r(t);var a=r("o0o1"),i=r.n(a),n=r("fpkf"),o=r("4HBT"),c=r.n(o),s=r("C3Ci");function l(e,t,r,a,i,n,o){try{var c=e[n](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(a,i)}var u,p,d={middleware:"guest",components:{VueRecaptcha:r("4JY7").a},mixins:[s.a],metaInfo:function(){return{title:this.$t("Password reset")}},data:function(){return{form:new c.a({email:null,recaptcha:null})}},computed:{appLogoUrl:function(){return Object(n.a)("app.logo")},recaptchaPublicKey:function(){return Object(n.a)("services.recaptcha.public_key")}},methods:{reset:(u=i.a.mark((function e(){var t,r,a=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.form.post("/api/auth/password/email").catch((function(){return a.recaptchaPublicKey&&(a.form.recaptcha=null,a.$refs.recaptcha.reset()),{}}));case 2:t=e.sent,(r=t.data)&&(this.$store.dispatch("message/success",{text:r.message}),this.form.reset(),this.$refs.recaptcha.reset(),this.$refs.form.reset());case 5:case"end":return e.stop()}}),e,this)})),p=function(){var e=this,t=arguments;return new Promise((function(r,a){var i=u.apply(e,t);function n(e){l(i,r,a,n,o,"next",e)}function o(e){l(i,r,a,n,o,"throw",e)}n(void 0)}))},function(){return p.apply(this,arguments)})}},h=r("KHd+"),f=r("ZUTo"),m=r.n(f),v=r("ghKu"),w=r("gzZi"),y=r("sK+t"),g=r("mdmw"),b=r("Yq0q"),$=r("pSOK"),x=r("S9TP"),V=r("rdoz"),S=r("D9m0"),k=r("L6Q5"),R=r("hlRy"),C=r("cdmR"),_=r("Kn9U"),P=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{color:"primary"}},[r("router-link",{attrs:{to:{name:"home"}}},[r("v-avatar",{attrs:{size:"40",tile:""}},[r("v-img",{attrs:{src:e.appLogoUrl}})],1)],1),e._v(" "),r("v-toolbar-title",{staticClass:"ml-2"},[e._v("\n            "+e._s(e.$t("Password reset"))+"\n          ")]),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-card-text",[r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.reset(t)}},model:{value:e.formIsValid,callback:function(t){e.formIsValid=t},expression:"formIsValid"}},[r("v-text-field",{attrs:{label:e.$t("Email"),type:"email",name:"email",rules:[e.validationRequired,e.validationEmail],error:e.form.errors.has("email"),"error-messages":e.form.errors.get("email"),outlined:""},on:{keydown:e.clearFormErrors},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),e.recaptchaPublicKey?r("vue-recaptcha",{ref:"recaptcha",staticClass:"mb-3",attrs:{sitekey:e.recaptchaPublicKey,loadRecaptchaScript:!0,theme:this.$vuetify.theme.isDark?"dark":"light"},on:{verify:function(t){return e.form.recaptcha=t}}}):e._e(),e._v(" "),r("v-btn",{attrs:{type:"submit",color:"primary",disabled:!e.formIsValid||e.form.busy||!!e.recaptchaPublicKey&&!e.form.recaptcha,loading:e.form.busy}},[e._v("\n              "+e._s(e.$t("Reset"))+"\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=P.exports;m()(P,{VAvatar:v.a,VBtn:w.a,VCard:y.a,VCardText:g.c,VCol:b.a,VContainer:$.a,VForm:x.a,VImg:V.a,VRow:S.a,VSpacer:k.a,VTextField:R.a,VToolbar:C.a,VToolbarTitle:_.a})}}]);
//# sourceMappingURL=password-email.js.map