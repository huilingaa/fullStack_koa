(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{Pqhm:function(t,e,s){"use strict";s.r(e);var r=s("lSNA"),i=s.n(r),o=s("vKDJ"),a=s("L2JU");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}var c={name:"Project",data:function(){return{loading:!1,disabled:!1,realPercent:0,percent:0,src:"",projectId:null,project:{},orderForm:{quantity:""},myAsset:{},systemTime:null,qtySliderOrders:{0:"0%",25:"25%",50:"50%",75:"75%",100:"100%"},countDownText:"",percentLeft:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(Object(s),!0).forEach((function(e){i()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},Object(a.d)(["token","langData"])),watch:{"orderForm.qtyPercent":function(t){if(!(t<0))if(0!==t){var e=Math.floor(this.project.maxPurchaseAmount*t/100);this.orderForm.quantity=e}else this.orderForm.quantity=0}},beforeDestroy:function(){this.isDestroyed=!0,this.timer&&clearTimeout(this.timer)},mounted:function(){this.projectId=this.$route.params.projectId,this.loadData()},methods:{padding0:function(t){for(var e="";t--;)e+="0";return e},handle:function(t){var e=String(t),s=e.lastIndexOf(".");return-1===s?[e,0]:[e.replace(".",""),e.length-s-1]},operate:function(t,e,s,r){switch(s){case"+":return(t+e)/r;case"-":return(t-e)/r;case"*":return t*e/(r*r);case"/":return t/e}},fixedFloat:function(t,e,s){var r=this.handle(t),i=this.handle(e),o=0;return 0===r[1]&&0===i[1]?this.operate(+r[0],+i[0],s,1):(o=Math.pow(10,Math.max(r[1],i[1])),r[1]!==i[1]&&(r[1]>i[1]?i[0]+=this.padding0(r[1]-i[1]):r[0]+=this.padding0(i[1]-r[1])),this.operate(+r[0],+i[0],s,o))},plus:function(t,e){return this.fixedFloat(t,e,"+")},minus:function(t,e){return this.fixedFloat(t,e,"-")},multiply:function(t,e){return this.fixedFloat(t,e,"*")},division:function(t,e){return this.fixedFloat(t,e,"/")},loadData:function(){var t=this;this.loading=!0,o.a.getIeoProject(this.projectId).then((function(e){t.project=e,t.project.issueAmount=parseFloat(e.issueAmount),t.project.maxPurchaseAmount=parseFloat(e.maxPurchaseAmount),t.project.minPurchaseAmount=parseFloat(e.minPurchaseAmount),t.project.purchasedAmount=parseFloat(e.purchasedAmount),t.project.serverTime=parseInt(e.serverTime),t.showProjects=!1,t.percent=Math.floor(t.project.purchasedAmount/t.project.issueAmount*1e8)/1e6,t.loading=!1,t.disabled="created"===e.status,t.countdown(t.project.serverTime)}))},login:function(){this.$router.replace("/login")},createIeoOrder:function(t){var e=this;if(this.orderForm.quantity<this.project.minPurchaseAmount)return this.$message.warning(this.$t("ieo.minMessage")),void(this.orderForm.quantity=this.project.minPurchaseAmount);if(this.orderForm.quantity>this.project.maxPurchaseAmount)return this.$message.warning(this.$t("ieo.maxMessage")),void(this.orderForm.quantity=this.project.maxPurchaseAmount);var s={projectId:this.project.id,quantity:this.orderForm.quantity};this.disabled=!0,o.a.createIeoOrder(s).then((function(){e.$message({type:"success",message:e.$t("ieo.success")}),e.loadData()})).finally((function(){e.disabled=!1}))},countdown:function(t){var e=this,s=Date.parse(this.project.dateTime);if(s<t)return this.countDownText="",void(this.disabled=!1);var r=s-t,i=parseInt(r/1e3/60/60/24),o=parseInt(r/1e3/60/60%24),a=parseInt(r/1e3/60%60),n=parseInt(r/1e3%60),c=i?i+this.$t("ieo.day"):"";c+=o||c?o+this.$t("ieo.hour"):"",c+=a||c?a+this.$t("ieo.min"):"",c+=n||c?n+this.$t("ieo.seconds"):"",this.countDownText=c,this.isDestroyed||(this.timer=setTimeout((function(){e.countdown(t+1e3)}),1e3))},handleQuantity:function(t){this.orderForm.quantity=C.Utils.setNumberDigit(t,4)},getImageUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return-1!==t.indexOf("/resources")?t:"/remote/public/getImageFile?fileId="+t}}},l=s("KHd+"),p=Object(l.a)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[s("div",{staticClass:"top"},[s("ul",{staticClass:"project-ul"},[s("li",[s("img",{staticStyle:{width:"152px",height:"152px"},attrs:{src:t.getImageUrl(t.langData[t.project.logoCode]||t.project.logo)}})]),t._v(" "),s("li",{staticStyle:{width:"534px","padding-right":"40px"}},[s("div",{staticStyle:{"padding-left":"50px"}},[s("span",{staticClass:"project-name",domProps:{innerHTML:t._s(t.langData[t.project.nameCode]||t.project.projectName)}}),t._v(" "),s("el-row",{staticStyle:{"margin-top":"50px"}},[s("el-col",{attrs:{span:10}},[s("span",[t._v(t._s(t.$t("ieo.price"))+"：")])]),t._v(" "),s("el-col",{attrs:{span:14,align:"right"}},[s("span",[t._v("1 "+t._s(t.project.baseAsset)+" = "+t._s(t.project.price)+" "+t._s(t.project.quoteAsset))])])],1),t._v(" "),s("el-row",{staticStyle:{"margin-top":"10px"}},[s("el-col",{attrs:{span:10}},["created"===t.project.status?s("span",[t._v(t._s(t.$t("ieo.startTime"))+"：")]):"started"===t.project.status?s("span",[t._v(t._s(t.$t("ieo.endTime"))+"：")]):t._e()]),t._v(" "),s("el-col",{attrs:{span:14,align:"right"}},[s("span",[t._v(t._s(t.project.dateTime))])])],1),t._v(" "),s("el-row",{staticStyle:{"margin-top":"10px"}},[s("el-col",{attrs:{span:10}},[t._v("\n              "+t._s(t.$t("ieo.issue_amount"))+"：\n            ")]),t._v(" "),s("el-col",{attrs:{span:14,align:"right"}},[t._v("\n              "+t._s(t.project.issueAmount)+" "+t._s(t.project.baseAsset)+"\n            ")])],1),t._v(" "),t.project.maxPurchaseAmount<t.project.issueAmount?s("el-row",{staticStyle:{"margin-top":"10px"}},[s("el-col",{attrs:{span:10}},[t._v("\n              "+t._s(t.$t("ieo.maxAmount"))+"：\n            ")]),t._v(" "),s("el-col",{attrs:{span:14,align:"right"}},[t._v("\n              "+t._s(t.project.maxPurchaseAmount)+" "+t._s(t.project.baseAsset)+"\n            ")])],1):t._e(),t._v(" "),t.project.minPurchaseAmount<t.project.issueAmount&&t.project.minPurchaseAmount>0?s("el-row",{staticStyle:{"margin-top":"10px"}},[s("el-col",{attrs:{span:10}},[t._v("\n              "+t._s(t.$t("ieo.minAmount"))+"：\n            ")]),t._v(" "),s("el-col",{attrs:{span:14,align:"right"}},[t._v("\n              "+t._s(t.project.minPurchaseAmount)+" "+t._s(t.project.baseAsset)+"\n            ")])],1):t._e()],1)]),t._v(" "),s("li",[s("div",{staticClass:"order-main"},[s("el-form",{ref:"orderForm",staticStyle:{width:"334px"},attrs:{"hide-required-asterisk":!0,"label-width":"80px",model:t.orderForm,"label-position":"top"}},[s("el-form-item",[s("span",[t._v(t._s(t.$t("ieo.avaiable"))+"：")]),t._v(" "),s("span",{staticStyle:{float:"right"}},[t._v(t._s(t.project.available)+" "+t._s(t.project.quoteAsset))])]),t._v(" "),s("el-form-item",{attrs:{prop:"quantity","show-message":!1,rules:[{required:!0,message:"--"}]}},[s("el-input",{staticStyle:{background:"rgba(32,39,64,1)"},on:{input:t.handleQuantity},model:{value:t.orderForm.quantity,callback:function(e){t.$set(t.orderForm,"quantity",e)},expression:"orderForm.quantity"}},[s("template",{slot:"suffix"},[t._v("\n                  "+t._s(t.project.baseAsset)+"\n                ")])],2)],1),t._v(" "),s("el-form-item",{staticStyle:{padding:"0 15px 20px 15px","text-align":"center"}},[s("el-slider",{attrs:{step:25,marks:t.qtySliderOrders,"show-tooltip":!1,"show-stops":""},model:{value:t.orderForm.qtyPercent,callback:function(e){t.$set(t.orderForm,"qtyPercent",e)},expression:"orderForm.qtyPercent"}})],1),t._v(" "),s("el-form-item",[s("span",[t._v(t._s(t.$t("ieo.need"))+"： "+t._s(t.multiply(parseFloat(t.orderForm.quantity)||0,parseFloat(t.project.price)||0))+" "+t._s(t.project.quoteAsset))]),t._v(" "),t.countDownText.length>0&&"finished"!==t.project.status?s("span",{staticClass:"count-down",staticStyle:{float:"right"}},[t._v(t._s(t.countDownText))]):t._e()]),t._v(" "),s("el-form-item",[t.token?"finished"!==t.project.status?s("el-button",{staticClass:"button-start",attrs:{type:"primary",disabled:t.disabled},on:{click:t.createIeoOrder}},[t._v("\n                "+t._s(t.$t("ieo.buy"))+"\n              ")]):s("el-button",{staticClass:"button-end",staticStyle:{color:"#676E87"},attrs:{type:"primary",disabled:t.disabled}},[t._v("\n                "+t._s(t.$t("ieo.end_buy"))+"\n              ")]):s("el-button",{staticClass:"button-end",attrs:{type:"primary"},on:{click:t.login}},[t._v("\n                "+t._s(t.$t("trade.login"))+"\n              ")])],1)],1)],1)])]),t._v(" "),s("div",{staticClass:"progress-div"},[t.percent<=100?s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"percent-div"},[t.percent>=1?s("div",{staticClass:"percent",style:{left:t.percent+"%"}},[s("span",[t._v(t._s(t.$t("ieo.to"))+t._s(t.percent)+"%")])]):t._e()]),t._v(" "),s("div",{staticClass:"progress-box"},[s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-current",style:{width:t.percent+"%"}})])]),t._v(" "),s("div",{staticClass:"progress-text"},[s("div",[t._v("0")]),t._v(" "),s("div",{staticStyle:{width:"100%","text-align":"right"}},[t._v("\n              "+t._s(t.project.purchasedAmount)+" "+t._s(t.project.baseAsset)+"\n            ")])])])]):s("div",{staticStyle:{width:"100%"}},[s("div",{staticClass:"percent-div"},[s("div",{staticStyle:{position:"absolute",left:"100%"}},[s("div",{staticClass:"percent-multiple",staticStyle:{width:"100%"}},[s("span",[t._v(t._s(t.$t("ieo.to"))+t._s(t.percent)+"%")])])])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"progress-text"},[s("div",[t._v("0")]),t._v(" "),s("div",{staticStyle:{left:"750px",position:"absolute"}},[t._v("\n            "+t._s(t.project.issueAmount)+" "+t._s(t.project.baseAsset)+"\n          ")]),t._v(" "),s("div",{staticStyle:{left:"900px","text-align":"right",width:"300px",position:"absolute"}},[t._v("\n            "+t._s(t.$t("ieo.excess_amount"))+t._s(t.project.issueAmount)+" "+t._s(t.project.baseAsset)+"\n          ")])])])])]),t._v(" "),s("div",{staticClass:"content-main"},[s("el-card",{staticStyle:{padding:"15px"}},[s("template",{slot:"header"},[s("div",{staticClass:"right_ang"}),t._v("\n        "+t._s(t.$t("ieo.description"))+":\n      ")]),t._v(" "),s("div",{domProps:{innerHTML:t._s(t.langData[t.project.introductionCode]||t.project.introduction)}})],2)],1)])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progress-box"},[s("div",{staticClass:"progress-first"},[s("div",{staticClass:"progress-current",staticStyle:{width:"100%"}})]),t._v(" "),s("div",{staticClass:"progress-space"}),t._v(" "),s("div",{staticClass:"progress-second"},[s("div",{staticClass:"progress-current",staticStyle:{width:"100%"}})])])}],!1,null,"3f856809",null);e.default=p.exports}}]);