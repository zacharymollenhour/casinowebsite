(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"+Gol":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".theme--light.v-data-table {\n  background-color: #FFFFFF;\n  color: rgba(0, 0, 0, 0.87);\n}\n.theme--light.v-data-table .v-data-table__divider {\n  border-right: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table.v-data-table--fixed-header thead th {\n  background: #FFFFFF;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table thead tr:last-child th {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table thead tr th {\n  color: rgba(0, 0, 0, 0.6);\n}\n.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table tbody tr:not(:last-child) td:last-child {\n  border-bottom: thin solid rgba(0, 0, 0, 0.12);\n}\n.theme--light.v-data-table tbody tr.active {\n  background: #f5f5f5;\n}\n.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {\n  background: #eeeeee;\n}\n\n.theme--dark.v-data-table {\n  background-color: #424242;\n  color: #FFFFFF;\n}\n.theme--dark.v-data-table .v-data-table__divider {\n  border-right: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table.v-data-table--fixed-header thead th {\n  background: #424242;\n  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table thead tr:last-child th {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table thead tr th {\n  color: rgba(255, 255, 255, 0.7);\n}\n.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child {\n  border-bottom: thin solid rgba(255, 255, 255, 0.12);\n}\n.theme--dark.v-data-table tbody tr.active {\n  background: #505050;\n}\n.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content) {\n  background: #616161;\n}\n\n.v-data-table table {\n  width: 100%;\n  border-spacing: 0;\n}\n.v-data-table td, .v-data-table th {\n  padding: 0 16px;\n}\n.v-data-table th {\n  user-select: none;\n  font-size: 0.75rem;\n  height: 48px;\n}\n.v-application--is-ltr .v-data-table th {\n  text-align: left;\n}\n.v-application--is-rtl .v-data-table th {\n  text-align: right;\n}\n.v-data-table td {\n  font-size: 0.875rem;\n  height: 48px;\n}\n\n.v-data-table__wrapper {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.v-data-table__progress {\n  height: auto !important;\n}\n.v-data-table__progress th {\n  height: auto !important;\n  border: none !important;\n  padding: 0;\n}\n\n.v-data-table--dense td {\n  height: 24px;\n}\n.v-data-table--dense th {\n  height: 32px;\n}\n\n.v-data-table--fixed-height .v-data-table__wrapper {\n  overflow-y: auto;\n}\n\n.v-data-table--fixed-header .v-data-table__wrapper {\n  overflow-y: auto;\n}\n.v-data-table--fixed-header thead th {\n  border-bottom: 0px !important;\n  position: sticky;\n  top: 0;\n  z-index: 2;\n}\n.v-data-table--fixed-header thead tr:nth-child(2) th {\n  top: 48px;\n}\n.v-application--is-ltr .v-data-table--fixed-header .v-data-footer {\n  margin-right: 17px;\n}\n.v-application--is-rtl .v-data-table--fixed-header .v-data-footer {\n  margin-left: 17px;\n}\n\n.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th {\n  top: 32px;\n}",""])},"408T":function(t,e,a){"use strict";a.r(e);var n=a("o0o1"),i=a.n(n),r=a("vDqi"),s=a.n(r),l=a("/rcJ"),h=a("ZXch");function o(t,e,a,n,i,r,s){try{var l=t[r](s),h=l.value}catch(t){return void a(t)}l.done?e(h):Promise.resolve(h).then(n,i)}var d,u,c={middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Dashboard")+" "+this.$t("Users")}},computed:{theme:function(){var t=this.$vuetify.theme.isDark?"dark":"light";return this.$vuetify.theme.themes[t]},chartLineColor:function(){return this.theme.primary}},data:function(){return{data:null}},created:(d=i.a.mark((function t(){var e,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("/api/admin/dashboard/users");case 2:e=t.sent,a=e.data,this.data=a;case 5:case"end":return t.stop()}}),t,this)})),u=function(){var t=this,e=arguments;return new Promise((function(a,n){var i=d.apply(t,e);function r(t){o(i,a,n,r,s,"next",t)}function s(t){o(i,a,n,r,s,"throw",t)}r(void 0)}))},function(){return u.apply(this,arguments)}),methods:{integer:l.integer,short:l.short,ucfirst:h.n}},p=a("KHd+"),b=a("ZUTo"),g=a.n(b),m=a("sK+t"),v=a("mdmw"),f=a("Yq0q"),y=a("pSOK"),_=a("SQoD"),x=a("D9m0"),$=a("jdmY"),w=a("H09D"),k=a("MSko"),S=a("fy6r"),C=a("4Mey"),L=Object(p.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("v-card",{staticClass:"text-center",attrs:{loading:!t.data}},[a("v-card-title",{staticClass:"headline font-weight-thin justify-center"},[t._v("\n          "+t._s(t.$t("User base last 7 days"))+"\n        ")]),t._v(" "),a("v-card-text",[a("v-sheet",{attrs:{color:"rgba(0, 0, 0, .15)"}},[a("v-sparkline",{attrs:{value:t.data?t.data.user_base_by_day:Array(7).fill(0),color:t.chartLineColor,height:"150",padding:"24","stroke-linecap":"round","line-width":"2",smooth:"5"},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v("\n                "+t._s(t.short(e.value))+"\n              ")]}}])})],1)],1)],1)],1),t._v(" "),a("v-col",{staticClass:"text-center",attrs:{cols:"12",lg:"6"}},[a("v-card",{attrs:{loading:!t.data}},[a("v-card-title",{staticClass:"headline font-weight-thin justify-center"},[t._v("\n          "+t._s(t.$t("Sign-ups"))+"\n        ")]),t._v(" "),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.data?100*t.data.sign_ups_last_month/(t.data.sign_ups_last_month+t.data.sign_ups_this_month):0,color:"primary"}},[a("span",{staticClass:"headline"},[t._v(t._s(t.data?t.data.sign_ups_last_month:0))])]),t._v(" "),a("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("last month"))+"\n              ")])],1),t._v(" "),a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[a("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.data?100*t.data.sign_ups_this_month/(t.data.sign_ups_last_month+t.data.sign_ups_this_month):0,color:"primary"}},[a("span",{staticClass:"headline"},[t._v(t._s(t.data?t.data.sign_ups_this_month:0))])]),t._v(" "),a("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("this month"))+"\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"12"}},[a("v-card",{staticClass:"text-center",attrs:{loading:!t.data}},[a("v-card-title",{staticClass:"headline font-weight-thin justify-center"},[t._v("\n          "+t._s(t.$t("Sign-ups by method"))+"\n        ")]),t._v(" "),a("v-card-text",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Source")))]),t._v(" "),a("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Count")))])])]),t._v(" "),a("tbody",[t.data?t._l(t.data.sign_ups_by_method,(function(e){return a("tr",{key:e.source},[a("td",{staticClass:"text-left"},[t._v(t._s(t.ucfirst(e.source)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.integer(e.count)))])])})):t._l(Array(3).fill(0),(function(t,e){return a("tr",{key:e},[a("td",{attrs:{colspan:"2"}},[a("v-skeleton-loader",{attrs:{type:"text"}})],1)])}))],2)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=L.exports;g()(L,{VCard:m.a,VCardText:v.c,VCardTitle:v.d,VCol:f.a,VContainer:y.a,VProgressCircular:_.a,VRow:x.a,VSheet:$.a,VSimpleTable:w.a,VSkeletonLoader:k.a,VSparkline:S.a,VSubheader:C.a})},H09D:function(t,e,a){"use strict";a("izd9");var n=a("gNKD"),i=a("dWAg"),r=a("WN+I");e.a=Object(r.a)(i.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},fy6r:function(t,e,a){"use strict";var n=a("qa07"),i=a("WN+I");function r(t,e){const{minX:a,maxX:n,minY:i,maxY:r}=e,s=t.length,l=Math.max(...t),h=Math.min(...t),o=(n-a)/(s-1),d=(r-i)/(l-h||1);return t.map((t,e)=>({x:a+e*o,y:r-(t-h)*d+1e-5*+(e===s-1)-1e-5*+(0===e),value:t}))}function s(t,e){const{minX:a,maxX:n,minY:i,maxY:r}=e,s=t.length;let l=Math.max(...t),h=Math.min(...t);h>0&&(h=0),l<0&&(l=0);const o=n/s,d=(r-i)/(l-h),u=r-Math.abs(h*d);return t.map((t,e)=>{const n=Math.abs(d*t);return{x:a+e*o,y:u-n+ +(t<0)*n,height:n,value:t}})}function l(t){return parseInt(t,10)}function h(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function o(t,e,a){const n=t.x-e.x,i=t.y-e.y,r=Math.sqrt(n*n+i*i),s=n/r,l=i/r;return{x:e.x+s*a,y:e.y+l*a}}function d(t,e,a=!1,n=75){const i=t.shift(),r=t[t.length-1];return(a?`M${i.x} ${n-i.x+2} L${i.x} ${i.y}`:`M${i.x} ${i.y}`)+t.map((a,n)=>{const r=t[n+1],s=t[n-1]||i,d=r&&function(t,e,a){return l(t.x+a.x)===l(2*e.x)&&l(t.y+a.y)===l(2*e.y)}(r,a,s);if(!r||d)return`L${a.x} ${a.y}`;const u=Math.min(h(s,a),h(r,a)),c=u/2<e?u/2:e,p=o(s,a,c),b=o(r,a,c);return`L${p.x} ${p.y}S${a.x} ${a.y} ${b.x} ${b.y}`}).join("")+(a?`L${r.x} ${n-i.x+2} Z`:"")}e.a=Object(i.a)(n.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:()=>[]},gradientDirection:{type:String,validator:t=>["top","bottom","left","right"].includes(t),default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:()=>[]},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:t=>["trend","bar"].includes(t)},value:{type:Array,default:()=>[]},width:{type:[Number,String],default:300}},data:()=>({lastLength:0}),computed:{parsedPadding(){return Number(this.padding)},parsedWidth(){return Number(this.width)},parsedHeight(){return parseInt(this.height,10)},parsedLabelSize(){return parseInt(this.labelSize,10)||7},totalHeight(){let t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth(){let t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues(){return this.value.length},_lineWidth(){if(this.autoLineWidth&&"trend"!==this.type){const t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};const t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels(){const t=[],e=this._values,a=e.length;for(let n=0;t.length<a;n++){const a=e[n];let i=this.labels[n];i||(i="object"==typeof a?a.value:a),t.push({x:a.x,value:String(i)})}return t},normalizedValues(){return this.value.map(t=>"number"==typeof t?t:t.value)},_values(){return"trend"===this.type?r(this.normalizedValues,this.boundary):s(this.normalizedValues,this.boundary)},textY(){let t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler(){this.$nextTick(()=>{if(!this.autoDraw||"bar"===this.type)return;const t=this.$refs.path,e=t.getTotalLength();this.fill?(t.style.transformOrigin="bottom center",t.style.transition="none",t.style.transform="scaleY(0)",t.getBoundingClientRect(),t.style.transition=`transform ${this.autoDrawDuration}ms ${this.autoDrawEasing}`,t.style.transform="scaleY(1)"):(t.style.transition="none",t.style.strokeDasharray=e+" "+e,t.style.strokeDashoffset=Math.abs(e-(this.lastLength||0)).toString(),t.getBoundingClientRect(),t.style.transition=`stroke-dashoffset ${this.autoDrawDuration}ms ${this.autoDrawEasing}`,t.style.strokeDashoffset="0"),this.lastLength=e})}}},methods:{genGradient(){const t=this.gradientDirection,e=this.gradient.slice();e.length||e.push("");const a=Math.max(e.length-1,1),n=e.reverse().map((t,e)=>this.$createElement("stop",{attrs:{offset:e/a,"stop-color":t||this.color||"currentColor"}}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,x1:+("left"===t),y1:+("top"===t),x2:+("right"===t),y2:+("bottom"===t)}},n)])},genG(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:this.color||"currentColor"}},t)},genPath(){const t=r(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{id:this._uid,d:d(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?`url(#${this._uid})`:"none",stroke:this.fill?"none":`url(#${this._uid})`},ref:"path"})},genLabels(t){const e=this.parsedLabels.map((e,a)=>this.$createElement("text",{attrs:{x:e.x+t+this._lineWidth/2,y:this.textY+.75*this.parsedLabelSize,"font-size":Number(this.labelSize)||7}},[this.genLabel(e,a)]));return this.genG(e)},genLabel(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars(){if(!this.value||this.totalValues<2)return;const t=s(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:`0 0 ${this.totalWidth} ${this.totalHeight}`}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":`url(#sparkline-bar-${this._uid}-clip)`,fill:`url(#${this._uid})`}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])},genClipPath(t,e,a,n){const i="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:`${n}-clip`}},t.map(t=>this.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:a,height:t.height,rx:i,ry:i}},[this.autoDraw?this.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:`${this.autoDrawDuration}ms`,fill:"freeze"}}):void 0])))},genTrend(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:{...this.$attrs,display:"block","stroke-width":this._lineWidth||1,viewBox:`0 0 ${this.width} ${this.totalHeight}`}}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}})},izd9:function(t,e,a){var n=a("+Gol");"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(t.exports=n.locals)}}]);
//# sourceMappingURL=admin-dashboard-users.js.map