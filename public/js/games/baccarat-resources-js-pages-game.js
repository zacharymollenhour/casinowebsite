(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{"3p9t":function(t,n,e){t.exports=e.p+"audio/baccarat/lose.wav"},FQhE:function(t,n,e){t.exports=e.p+"audio/baccarat/deal.wav"},Gscq:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".hand-container[data-v-9d881be2] {\n  min-width: 11em;\n  min-height: 10em;\n}\n.vertical-space[data-v-9d881be2] {\n  min-height: 7em;\n}\n@media (max-width: 599px) {\n.hand-container[data-v-9d881be2] {\n    min-width: 5.5em;\n}\n.hand-tie[data-v-9d881be2] {\n    margin-left: -1em;\n}\n}",""])},OY7U:function(t,n,e){"use strict";var a=e("g6NE");var r={computed:{gamePackageId:function(){return this.$route.params.game},provablyFairGame:function(){return this.$store.getters["provably-fair/get"](this.gamePackageId)||{}}},methods:{getRoute:function(t){return n="games.".concat(this.gamePackageId,".").concat(t),a.a.getters["route/get"](n);var n}}},o=e("KHd+"),i=Object(o.a)(r,void 0,void 0,!1,null,null,null);n.a=i.exports},"R4L+":function(t,n,e){t.exports=e.p+"audio/baccarat/swoosh.wav"},Rb8A:function(t,n,e){"use strict";e.r(n);var a=e("o0o1"),r=e.n(a),o=e("vDqi"),i=e.n(o),s=e("L2JU"),l=e("C3Ci"),d=e("OY7U"),c=e("fYW3"),b=e("hNdr"),u=e("ZXch"),p=e("VA6O"),g=e.n(p),h=e("FQhE"),v=e.n(h),m=e("R4L+"),y=e.n(m),f=e("g/XJ"),w=e.n(f),k=e("3p9t"),x=e.n(k),H=e("i6jp"),T=e.n(H);function C(t,n,e,a,r,o,i){try{var s=t[o](i),l=s.value}catch(t){return void e(t)}s.done?n(l):Promise.resolve(l).then(a,r)}function O(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function _(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?O(Object(e),!0).forEach((function(n){B(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function B(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var F,j,P={name:"Baccarat",components:{PlayControls:e("/hoC").a,Hand:b.a},mixins:[l.a,d.a,c.a],data:function(){return{clickSound:g.a,loading:!1,playing:!1,betValue:0,betType:0,betTypes:[this.$t("Player"),this.$t("Tie"),this.$t("Banker")],currentBetType:-1,winType:0,win:0,playerHandCards:["D3","H5"],playerHandScore:8,playerHandResult:this.$t("Win"),bankerHandCards:["S6","CA"],bankerHandScore:7,bankerHandResult:this.$t("Lose")}},computed:_({},Object(s.d)("auth",["account"]),{playerHandCount:function(){return this.playerHandCards.length},bankerHandCount:function(){return this.bankerHandCards.length}}),methods:_({},Object(s.b)({updateUserAccountBalance:"auth/updateUserAccountBalance",setProvablyFairGame:"provably-fair/set"}),{play:(F=r.a.mark((function t(n){var e,a,o,s,l,d,c,b=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,this.playing=!0,this.updateUserAccountBalance(this.account.balance-n),this.playerHandCards=[],this.bankerHandCards=[],this.sound(y.a),this.betValue=0,this.win=0,this.currentBetType=-1,this.winType=-1,this.playerHandScore=-1,this.bankerHandScore=-1,this.playerHandResult="",this.bankerHandResult="",t.next=16,Object(u.l)(500);case 16:return e=this.getRoute("play"),a={hash:this.provablyFairGame.hash,bet:n,bet_type:this.betType},t.next=20,i.a.post(e,a);case 20:o=t.sent,s=o.data,this.loading=!1,l=0,d=s.gameable.player_hand.length,c=s.gameable.banker_hand.length,this.playerHandCards.push(s.gameable.player_hand[0]),this.bankerHandCards.push(s.gameable.banker_hand[0]),this.currentBetType=this.betType,this.betValue=s.bet,this.sound(v.a),setTimeout((function(){b.playerHandCards.push(s.gameable.player_hand[1]),b.bankerHandCards.push(s.gameable.banker_hand[1]),b.playerHandScore=s.gameable.player_score,b.bankerHandScore=s.gameable.banker_score,b.sound(v.a)}),l+=500),d>2&&setTimeout((function(){b.playerHandCards.push(s.gameable.player_hand[2]),b.playerHandScore=s.gameable.player_score,b.sound(v.a)}),l+=750),c>2&&setTimeout((function(){b.bankerHandCards.push(s.gameable.banker_hand[2]),b.bankerHandScore=s.gameable.banker_score,b.sound(v.a)}),l+=750),this.setProvablyFairGame({key:this.gamePackageId,game:s.pf_game}),setTimeout((function(){b.playerHandResult=s.gameable.player_result,b.bankerHandResult=s.gameable.banker_result,b.winType=s.gameable.win_type,b.win=s.win,b.playing=!1,b.updateUserAccountBalance(s.account.balance),s.win>s.bet?b.sound(w.a):s.win===s.bet?b.sound(T.a):b.sound(x.a)}),l);case 36:case"end":return t.stop()}}),t,this)})),j=function(){var t=this,n=arguments;return new Promise((function(e,a){var r=F.apply(t,n);function o(t){C(r,e,a,o,i,"next",t)}function i(t){C(r,e,a,o,i,"throw",t)}o(void 0)}))},function(t){return j.apply(this,arguments)})})},S=(e("eL1I"),e("KHd+")),R=e("ZUTo"),V=e.n(R),E=e("gzZi"),I=e("pgmH"),$=Object(S.a)(P,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"d-flex flex-column fill-height py-3"},[e("div",{staticClass:"d-flex justify-center fill-height align-center"},[e("hand",{staticClass:"hand-container",attrs:{title:t.$t("Player"),cards:t.playerHandCards,score:t.playerHandScore,result:t.playerHandResult,"result-class":0===t.winType?"primary text--primary":1===t.winType?"warning":2===t.winType?"error":"",bet:0===t.currentBetType?t.betValue:0,win:0===t.winType?t.win:0}}),t._v(" "),e("hand",{staticClass:"hand-container hand-tie",attrs:{title:t.$t("Tie"),cards:[],bet:1===t.currentBetType?t.betValue:0,win:1===t.winType?t.win:0},scopedSlots:t._u([{key:"default",fn:function(){return[e("div",{staticClass:"vertical-space"})]},proxy:!0}])}),t._v(" "),e("hand",{staticClass:"hand-container",attrs:{title:t.$t("Banker"),cards:t.bankerHandCards,score:t.bankerHandScore,result:t.bankerHandResult,"result-class":2===t.winType?"primary text--primary":1===t.winType?"warning":0===t.winType?"error":"",bet:2===t.currentBetType?t.betValue:0,win:2===t.winType?t.win:0}})],1),t._v(" "),e("div",{staticClass:"d-flex justify-center flex-wrap"},[e("v-btn-toggle",{attrs:{"active-class":"primary--text",mandatory:"",rounded:"",group:""},model:{value:t.betType,callback:function(n){t.betType=n},expression:"betType"}},t._l(t.betTypes,(function(n,a){return e("v-btn",{key:a,staticClass:"mx-1 my-2 my-lg-0",attrs:{disabled:t.playing,small:""},on:{click:function(n){return t.sound(t.clickSound)}}},[t._v("\n        "+t._s(n)+"\n      ")])})),1)],1),t._v(" "),e("play-controls",{attrs:{loading:t.loading,playing:t.playing},on:{play:t.play}})],1)}),[],!1,null,"9d881be2",null);n.default=$.exports;V()($,{VBtn:E.a,VBtnToggle:I.a})},VA6O:function(t,n,e){t.exports=e.p+"audio/common/click.wav"},eL1I:function(t,n,e){"use strict";var a=e("tNm+");e.n(a).a},flh2:function(t,n,e){var a=e("g2oV");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,r);a.locals&&(t.exports=a.locals)},"g/XJ":function(t,n,e){t.exports=e.p+"audio/baccarat/win.wav"},g2oV:function(t,n,e){(t.exports=e("I1BE")(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group) {\n  background: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active) {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon {\n  color: #000000;\n}\n\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) {\n  background: #424242;\n  color: #FFFFFF;\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn {\n  border-color: rgba(255, 255, 255, 0.12) !important;\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active) {\n  border-color: rgba(255, 255, 255, 0.3);\n}\n.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon {\n  color: #FFFFFF;\n}\n\n.v-btn-toggle {\n  border-radius: 4px;\n  display: inline-flex;\n  max-width: 100%;\n}\n.v-btn-toggle > .v-btn.v-btn {\n  border-radius: 0;\n  border-style: solid;\n  border-width: thin;\n  box-shadow: none;\n  box-shadow: none;\n  opacity: 0.8;\n  padding: 0 12px;\n}\n.v-btn-toggle > .v-btn.v-btn:first-child {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n.v-btn-toggle > .v-btn.v-btn:last-child {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n.v-btn-toggle > .v-btn.v-btn--active {\n  color: inherit;\n  opacity: 1;\n}\n.v-btn-toggle > .v-btn.v-btn:after {\n  display: none;\n}\n.v-btn-toggle > .v-btn.v-btn:not(:first-child) {\n  border-left-width: 0;\n}\n.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default {\n  height: 48px;\n  min-height: 0;\n  min-width: 48px;\n}\n\n.v-btn-toggle--borderless > .v-btn.v-btn {\n  border-width: 0;\n}\n\n.v-btn-toggle--dense > .v-btn.v-btn {\n  padding: 0 8px;\n}\n\n.v-btn-toggle--group {\n  border-radius: 0;\n}\n.v-btn-toggle--group > .v-btn.v-btn {\n  background-color: transparent !important;\n  border-color: transparent;\n  margin: 4px;\n  min-width: auto;\n}\n\n.v-btn-toggle--rounded {\n  border-radius: 24px;\n}\n\n.v-btn-toggle--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-btn-toggle--tile {\n  border-radius: 0;\n}",""])},i6jp:function(t,n,e){t.exports=e.p+"audio/baccarat/push.wav"},pgmH:function(t,n,e){"use strict";e("flh2");var a=e("YEyi"),r=a.a.extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return a.a.options.computed.classes.call(this)}},methods:{genData:a.a.options.methods.genData}}),o=e("qa07"),i=e("WN+I");n.a=Object(i.a)(r,o.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes(){return{...r.options.computed.classes.call(this),"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile,...this.themeClasses}}},methods:{genData(){const t=this.setTextColor(this.color,{...r.options.methods.genData.call(this)});return this.group?t:this.setBackgroundColor(this.backgroundColor,t)}}})},"tNm+":function(t,n,e){var a=e("Gscq");"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,r);a.locals&&(t.exports=a.locals)}}]);
//# sourceMappingURL=baccarat-resources-js-pages-game.js.map