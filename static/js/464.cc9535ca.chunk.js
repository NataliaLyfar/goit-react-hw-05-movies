/*! For license information please see 464.cc9535ca.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[464],{5419:function(r,e,n){n.d(e,{jI:function(){return s},JZ:function(){return l},UN:function(){return p},M1:function(){return f},TP:function(){return v},tx:function(){return h},Yj:function(){return d},ev:function(){return m},s2:function(){return b},Bn:function(){return w},on:function(){return g},Aj:function(){return y},uV:function(){return x}});var t=n(5861),a=n(7757),c=n.n(a),u=n(4569),o=n.n(u)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"3dd39359792eb7041e93855d90b9b314"}}),s=function(){var r=(0,t.Z)(c().mark((function r(e,n){var t,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.post("/movie/".concat(e,"/").concat(n));case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(e,n){return r.apply(this,arguments)}}(),i=n(9085),l=function(){var r=(0,t.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/genre/movie/list");case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 11:case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(c().mark((function r(e,n){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/search/movie?query=".concat(e,"&page=").concat(n));case 3:return t=r.sent,r.abrupt("return",t);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 10:case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e,n){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/movie/".concat(e,"/credits"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 10:case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/movie/".concat(e));case 3:return n=r.sent,t=n.data,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 11:case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/movie/".concat(e,"/reviews"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 10:case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.get("/movie/".concat(e,"/videos"));case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),m=function(){var r=(0,t.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=o.get("/movie/now_playing"),r.abrupt("return",e);case 5:r.prev=5,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 8:case 9:case"end":return r.stop()}}),r,null,[[0,5]])})));return function(){return r.apply(this,arguments)}}(),w=function(){var r=(0,t.Z)(c().mark((function r(e){var n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/movie/".concat(e,"/similar"));case 3:return n=r.sent,r.abrupt("return",n);case 7:r.prev=7,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 10:case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),b=function(){var r=(0,t.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=o.get("/movie/popular"),r.abrupt("return",e);case 5:r.prev=5,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 8:case 9:case"end":return r.stop()}}),r,null,[[0,5]])})));return function(){return r.apply(this,arguments)}}(),g=function(){var r=(0,t.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=o.get("/movie/top_rated"),r.abrupt("return",e);case 5:r.prev=5,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 8:case 9:case"end":return r.stop()}}),r,null,[[0,5]])})));return function(){return r.apply(this,arguments)}}(),y=function(){var r=(0,t.Z)(c().mark((function r(e){var n,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/trending/movie/week?page=".concat(e));case 3:return n=r.sent,t=n.data,r.abrupt("return",t);case 8:r.prev=8,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 11:case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),x=function(){var r=(0,t.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.get("/movie/upcoming");case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 8:r.prev=8,r.t0=r.catch(0),i.Am.error("Oops, an error occurred! ".concat(r.t0));case 11:case 12:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}()},9464:function(r,e,n){n.r(e),n.d(e,{default:function(){return j}});var t,a,c,u=n(5861),o=n(885),s=n(7757),i=n.n(s),l=n(2791),p=n(6871),f=n(9085),v=n(6373),h=n(5419),d=n(168),m=n(4277),w=n(6031),b=n(184),g=w.ZP.ul(t||(t=(0,d.Z)(["\ndisplay: flex;\njustify-content: center;\nflex-wrap: wrap;\n"]))),y=w.ZP.li(a||(a=(0,d.Z)(["\nmargin: ","px;\n"])),(function(r){return r.theme.space[2]})),x=w.ZP.p(c||(c=(0,d.Z)(["\npadding: ","px;\nfont-size: ",";\nfont-weight: ",";\nfont-family: ",";\nfont-style: italic;\n"])),(function(r){return r.theme.space[2]}),(function(r){return r.theme.fontSizes.l}),(function(r){return r.theme.fontWeights.semibold}),(function(r){return r.theme.fonts.accent})),O=function(r){var e=r.trailers;return(0,b.jsx)(g,{children:e.length>0?e.map((function(r){return(0,b.jsx)(y,{children:(0,b.jsx)(m.Z,{url:"https://www.youtube.com/embed/".concat(r.key),width:"100%",height:"250px",allowFullScreen:!0})},r.id)})):(0,b.jsx)(x,{children:"No trailer"})})},j=function(){var r=(0,l.useState)([]),e=(0,o.Z)(r,2),n=e[0],t=e[1],a=(0,p.UO)().movieId,c=(0,l.useState)(!1),s=(0,o.Z)(c,2),d=s[0],m=s[1];return(0,l.useEffect)((function(){(0,u.Z)(i().mark((function r(){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),r.next=4,(0,h.Yj)(a);case 4:e=r.sent,n=e.results,t(n),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),f.Am.info("Something went wrong ".concat(r.t0));case 12:return r.prev=12,m(!1),r.finish(12);case 15:case 16:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})))()}),[a]),(0,b.jsxs)(b.Fragment,{children:[d&&(0,b.jsx)(v.g4,{color:"#eead71",height:60,width:60}),(0,b.jsx)(O,{trailers:n})]})}},1725:function(r){var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function a(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(r){t[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(a){return!1}}()?Object.assign:function(r,c){for(var u,o,s=a(r),i=1;i<arguments.length;i++){for(var l in u=Object(arguments[i]))n.call(u,l)&&(s[l]=u[l]);if(e){o=e(u);for(var p=0;p<o.length;p++)t.call(u,o[p])&&(s[o[p]]=u[o[p]])}}return s}},4277:function(r,e,n){var t=n(2791),a=n(1725),c=n.n(a),u=function(){return u=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},u.apply(this,arguments)};e.Z=function(r){for(var e=r.url,n=r.allowFullScreen,a=r.position,o=r.display,s=r.height,i=r.width,l=r.overflow,p=r.styles,f=r.onLoad,v=r.onMouseOver,h=r.onMouseOut,d=r.scrolling,m=r.id,w=r.frameBorder,b=r.ariaHidden,g=r.sandbox,y=r.allow,x=r.className,O=r.title,j=r.ariaLabel,k=r.ariaLabelledby,Z=r.name,A=r.target,P=r.loading,S=r.importance,_=r.referrerpolicy,N=r.allowpaymentrequest,q=r.src,E=c()({src:q||e,target:A||null,style:{position:a||null,display:o||"block",overflow:l||null},scrolling:d||null,allowpaymentrequest:N||null,importance:S||null,sandbox:g||null,loading:P||null,styles:p||null,name:Z||null,className:x||null,referrerpolicy:_||null,title:O||null,allow:y||null,id:m||null,"aria-labelledby":k||null,"aria-hidden":b||null,"aria-label":j||null,width:i||null,height:s||null,onLoad:f||null,onMouseOver:v||null,onMouseOut:h||null}),L=Object.create(null),M=0,C=Object.keys(E);M<C.length;M++){var F=C[M];null!=E[F]&&(L[F]=E[F])}for(var I=0,U=Object.keys(L.style);I<U.length;I++){var z=U[I];null==L.style[z]&&delete L.style[z]}if(n)if("allow"in L){var B=L.allow.replace("fullscreen","");L.allow=("fullscreen "+B.trim()).trim()}else L.allow="fullscreen";return w>=0&&(L.style.hasOwnProperty("border")||(L.style.border=w)),t.createElement("iframe",u({},L))}}}]);
//# sourceMappingURL=464.cc9535ca.chunk.js.map