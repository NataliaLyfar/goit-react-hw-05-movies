"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[679],{3564:function(n,e,t){t.d(e,{s:function(){return z}});var r,o,i,c,a,s,u,p,l=t(1413),h=t(168),d=t(501),f=t(6871),x=t(6031),m=t(9770),g=t(184),b=x.ZP.div(r||(r=(0,h.Z)(["\nposition: relative;\nborder-radius: ",";\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\nbackground: transparent;\n  &:hover {\n    cursor: pointer;\n    box-shadow: 0px 0px 8px 6px ",";\n  };\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.accent})),v=x.ZP.img(o||(o=(0,h.Z)(["\nwidth: 100%;\nheight: 440px;\nborder-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),Z=x.ZP.div(i||(i=(0,h.Z)(["\npadding: ","px;\n"])),(function(n){return n.theme.space[2]})),j=x.ZP.p(c||(c=(0,h.Z)(["\ncolor: ",";\nfont-size: ",";\ntext-transform: uppercase;\nmargin-bottom: ","px;\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.space[1]})),w=x.ZP.div(a||(a=(0,h.Z)(["\ncolor: ",";\nfont-size: ",";\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.xs})),y=x.ZP.span(s||(s=(0,h.Z)(["\nposition: absolute;\ntop: ","px;\nright: ","px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nwidth: 36px;\nheight: 20px;\nfont-weight: ",";\nfont-size: ",";\nline-height: 1.17;\ntext-transform: uppercase;\nbackground-color: ",";\ncolor: ",";\nborder-radius: 5px;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.primary})),k=function(n){var e=n.rating,t=n.title,r=n.posterPath,o=n.genres,i=n.year;return(0,g.jsxs)(b,{children:[(0,g.jsx)(y,{children:e}),r?(0,g.jsx)(v,{src:"https://themoviedb.org/t/p/w342".concat(r),alt:"poster"}):(0,g.jsx)(v,{src:m,alt:t}),(0,g.jsxs)(Z,{children:[(0,g.jsx)(j,{children:t}),(0,g.jsxs)(w,{children:[(0,g.jsx)("span",{children:o}),(0,g.jsxs)("span",{children:[" | ",i]})]})]})]})},P=x.ZP.ul(u||(u=(0,h.Z)(["\ndisplay: grid;\nmax-width: calc(100vw - 48px);\ngrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\ngrid-gap: ","px;\nmargin: 0 auto;\npadding: 0;\n"])),(function(n){return n.theme.space[5]})),S=x.ZP.li(p||(p=(0,h.Z)(["\nborder-radius: ",";\nbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 2px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"])),(function(n){return n.theme.radii.small})),z=function(n){var e=n.movies,t=(0,f.TH)();return(0,g.jsx)(P,{children:e.map((function(n){return(0,g.jsx)(S,{children:(0,g.jsx)(d.rU,{to:"/movies/".concat(n.id),state:{from:t},children:(0,g.jsx)(k,(0,l.Z)({},n))})},n.id)}))})}},5590:function(n,e,t){t.d(e,{i:function(){return j}});var r,o,i,c=t(1413),a=t(168),s=t(7818),u=t(7092),p=(t(5257),t(501)),l=t(6871),h=t(2007),d=t.n(h),f=t(6031),x=t(9770),m=t(184),g=f.ZP.div(r||(r=(0,a.Z)(["\nborder-radius: ",";\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\nbackground: transparent;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: 0px 0px 8px 6px ",";\n  };\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.accent})),b=f.ZP.img(o||(o=(0,a.Z)(["\nwidth: 180px;\nborder-radius: ",";\n"])),(function(n){return n.theme.radii.normal})),v=function(n){var e=n.title,t=n.poster_path;return(0,m.jsx)(g,{children:t?(0,m.jsx)(b,{src:"https://themoviedb.org/t/p/w342".concat(t),alt:"poster"}):(0,m.jsx)(b,{src:x,alt:e})})},Z=f.ZP.div(i||(i=(0,a.Z)(["\nmargin-bottom: ","px;\n"])),(function(n){return n.theme.space[5]})),j=function(n){var e=n.movies,t=(0,l.TH)();return(0,m.jsx)(Z,{children:(0,m.jsx)(u.tq,{modules:[s.eZ,s.pt,s.W_],spaceBetween:5,slidesPerView:6,autoplay:{delay:2500,disableOnInteraction:!1},navigation:!0,virtual:!0,children:e.filter((function(n){return n.poster_path})).map((function(n){return(0,m.jsx)(u.o5,{virtualIndex:n.id,children:(0,m.jsx)(p.rU,{to:"/movies/".concat(n.id),state:{from:t},children:(0,m.jsx)(v,(0,c.Z)({},n))})},n.id)}))})})};u.tq.propTypes={movies:d().arrayOf(d().shape({id:d().number.isRequired,title:d().string.isRequired,posterPath:d().string,genres:d().string,rating:d().number,year:d().number}))}},8071:function(n,e,t){t.d(e,{D:function(){return s}});var r,o=t(168),i=t(6031),c=t(184),a=i.ZP.h3(r||(r=(0,o.Z)(["\npadding-bottom: ","px;\nfont-size: ",";\nfont-weight: ",";\nfont-family: ",";\nfont-style: italic;\ncolor: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.fontSizes.xl}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.fonts.accent}),(function(n){return n.theme.colors.white})),s=function(n){var e=n.children;return(0,c.jsx)(a,{children:e})}},2044:function(n,e,t){t.d(e,{z:function(){return s}});var r,o=t(168),i=t(6031),c=t(184),a=i.ZP.button(r||(r=(0,o.Z)(["\nmargin: ","px auto 0;\npadding: ","px ","px;\nborder-radius: ",";\nbackground: rgb(16,29,26);\nbackground: linear-gradient(90deg, rgba(16,29,26,1) 0%, rgba(28,73,58,1) 33%, rgba(16,57,56,1) 77%, rgba(14,70,54,1) 100%);\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncolor: ",";\nborder: 0;\ntext-decoration: none;\ncursor: pointer;\nfont-family: inherit;\nfont-size: ",";\nline-height: ","px;\nfont-style: normal;\nfont-weight: ",";\nwidth: 150px;\nbox-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\ntransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  svg {\n    width: 30px;\n    height: 30px;\n    margin-left: ","px;\n  };\n  &:hover,\n  &:focus {\n    outline: none;\n    background: #D5D8A8;\n    color: ",";\n    box-shadow: 0 2px 8px rgba(210, 105, 30, 0.7), inset 0 1px rgba(81, 50, 50, 0.3),\n      inset 0 10px rgba(255, 255, 255, 0.2), inset 0 10px 20px rgba(117, 49, 49, 0.25),\n      inset 0 -15px 30px rgba(210, 105, 30, 0.7);\n  };\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.radii.large}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.colors.secondary})),s=function(n){var e=n.onClick,t=n.children,r=n.icon;return(0,c.jsxs)(a,{type:"button",onClick:e,children:[t,r]})}},9586:function(n,e,t){t.d(e,{$:function(){return a}});var r,o=t(168),i=t(6031),c=t(9156),a=i.ZP.section(r||(r=(0,o.Z)(["\npadding: ","px 0 ","px;\n@media "," {\n    padding: ","px 0 ","px;  \n};\n"])),(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[7]}),c.A.tablet,(function(n){return n.theme.space[6]}),(function(n){return n.theme.space[8]}))},9809:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,o,i,c,a=t(2982),s=t(5861),u=t(885),p=t(168),l=t(7757),h=t.n(l),d=t(2791),f=t(501),x=t(9085),m=t(6031),g=t(4277),b=t(3243),v=t(2523),Z=t(3564),j=t(8152),w=t(9586),y=t(5763),k=t(184),P=m.ZP.form(r||(r=(0,p.Z)(["\nmargin: 0 auto ","px;\ndisplay: flex;\nalign-items: center;\nwidth: 100%;\nmax-width: 300px;\nborder-bottom: 1 px solid ",";\noverflow: hidden;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.accent})),S=m.ZP.input(o||(o=(0,p.Z)(["\ndisplay: inline-block;\nwidth: 100%;\nfont: inherit;\nfont-size: ",";\nborder: none;\nborder-bottom: 2px solid ",";\ncolor: ",";\nbackground-color: transparent;\noutline: none;\npadding-left: ","px;\npadding-right: ","px;\n  &::placeholder {\n    font: inherit;\n    font-size: ",";\n    color: ",";\n  };\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.colors.white})),z=m.ZP.button(i||(i=(0,p.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nborder: 0;\nbackground: transparent;\ntransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\ncursor: pointer;\noutline: none;\n  svg{\n    width: 20px;\n    height: 20px;\n    color: ",";\n  };\n"])),(function(n){return n.theme.colors.white})),_=function(n){var e=n.onSearch,t=(0,d.useState)([]),r=(0,u.Z)(t,2),o=r[0],i=r[1];return(0,k.jsxs)(P,{onSubmit:function(n){n.preventDefault(),o||(0,x.Am)("There is nothing to search!"),e(o),i("")},children:[(0,k.jsx)(S,{type:"text",placeholder:"Search for movie",value:o,onChange:function(n){return i(n.target.value.toLowerCase())},autoComplete:"off",autoFocus:!0}),(0,k.jsx)(z,{type:"submit",children:(0,k.jsx)(y.a4h,{})})]})},q=t(2044),C=t(8071),I=t(5590),O=m.ZP.div(c||(c=(0,p.Z)(["\nmargin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),A=function(n){var e=n.genres,t=(0,d.useState)([]),r=(0,u.Z)(t,2),o=r[0],i=r[1],c=(0,d.useState)(1),p=(0,u.Z)(c,2),l=p[0],m=p[1],y=(0,f.lr)({}),P=(0,u.Z)(y,2),S=P[0],z=P[1],A=(0,d.useState)([]),D=(0,u.Z)(A,2),T=D[0],W=D[1],F=(0,d.useState)([]),E=(0,u.Z)(F,2),U=E[0],H=E[1],L=(0,d.useState)([]),N=(0,u.Z)(L,2),R=N[0],$=N[1],B=(0,d.useState)(""),J=(0,u.Z)(B,2),V=J[0],Y=J[1],G=S.get("query");(0,d.useEffect)((function(){G&&(0,s.Z)(h().mark((function n(){var t,r,o,c;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b.I4.page=l,b.I4.query=G,n.prev=2,n.next=5,b.UN(b.I4);case 5:t=n.sent,r=Object.assign({},t),o=r.data,(c=(0,v.c)(o.results,e)).length>0?1===b.I4.page?i((0,a.Z)(c)):i((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(c))})):x.Am.info("Sorry, there are no movies matching your search query. Please try again."),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(2),x.Am.info("Something went wrong ".concat(n.t0));case 16:case 17:case"end":return n.stop()}}),n,null,[[2,13]])})))()}),[G,e,l]),(0,d.useEffect)((function(){G||(0,s.Z)(h().mark((function n(){var e,t,r,o,i,c;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.ev();case 3:return e=n.sent,t=Object.assign({},e),W((0,a.Z)(t.data.results)),n.next=8,b.on();case 8:return r=n.sent,o=Object.assign({},r),H((0,a.Z)(o.data.results)),n.next=13,b.sJ();case 13:i=n.sent,c=Object.assign({},i),$(c.data.results[0].id),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),x.Am.info("Something went wrong ".concat(n.t0));case 21:case 22:case"end":return n.stop()}}),n,null,[[0,18]])})))()}),[e,G]),(0,d.useEffect)((function(){(0,s.Z)(h().mark((function n(){var e,t;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.Yj(R);case 3:e=n.sent,t=Object.assign({},e),Y(t.results[0].key),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[R]);return(0,k.jsx)(j.W,{children:(0,k.jsxs)(w.$,{children:[(0,k.jsx)(_,{onSearch:function(n){z({query:n})}}),T.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(C.D,{children:"Now playing"}),(0,k.jsx)(I.i,{movies:T})]}),o.length>0&&G.length>0&&(0,k.jsx)(Z.s,{movies:o}),o.length>=20&&(0,k.jsx)(q.z,{onClick:function(){m((function(n){return n+1}))},children:"Load more"}),0===o.length&&V&&(0,k.jsx)(O,{children:(0,k.jsx)(g.Z,{trailer:V,url:"https://www.youtube.com/embed/".concat(V),width:"100%",height:"600px",allowFullScreen:!0})}),T.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(C.D,{children:"Top rated"}),(0,k.jsx)(I.i,{movies:U})]})]})})}},2523:function(n,e,t){t.d(e,{c:function(){return o}});var r=t(1413),o=function(n,e){return n.map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{posterPath:n.poster_path,year:n.release_date?parseInt(n.release_date):"",rating:n.vote_average,genres:n.genre_ids.map((function(n){var t;return null===(t=e.find((function(e){return e.id===n})))||void 0===t?void 0:t.name})).slice(0,3).join(", ")})}))}},9770:function(n,e,t){n.exports=t.p+"static/media/comingSoon.cb5d642226ea133c136d.jpg"}}]);
//# sourceMappingURL=679.7656ffb9.chunk.js.map