(this.webpackJsonpanimal_album=this.webpackJsonpanimal_album||[]).push([[0],{37:function(e,n,t){e.exports=t(64)},42:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(28),i=t.n(c),l=(t(42),t(1)),o=t(13),u=t(29),m=t.n(u),s=Object(a.createContext)(),f=function(e){var n=Object(a.useState)([]),t=Object(o.a)(n,2),c=t[0],i=t[1],l=Object(a.useState)(!0),u=Object(o.a)(l,2),f=u[0],h=u[1],d=Object(a.useCallback)((function(e){m.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("636e1481b4f3c446d26b8eb6ebfe7127","&tags=").concat(e,"&per_page=20&format=json&nojsoncallback=1")).then((function(e){i(e.data.photos.photo),h(!1)})).catch((function(e){console.log("error")}))}),[]);return r.a.createElement(s.Provider,{value:{images:c,loading:f,runSearch:d}},e.children)},h=t(7),d=t(3),g=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"No Images Found"),r.a.createElement("p",null,"Please try a different animal!!"))},p=t(2);function b(){var e=Object(l.a)(["\n  width: 100%;\n  height: 175px;\n  transform: scale(1.2);\n  transition: transform 1.5s;\n  &:hover {\n    transform: scale(1.5);\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(l.a)(["\n  width: 240px;\n  height: 175px;\n  overflow: hidden;\n  margin-left: 0.5em;\n  margin-right: 0.5em;\n  margin-bottom: 1em;\n"]);return E=function(){return e},e}var v=p.a.li(E()),x=p.a.img(b()),j=function(e){var n=e.url,t=e.key,a=e.title;return r.a.createElement(v,null,r.a.createElement(x,{src:n,alt:a,key:t}))};function O(){var e=Object(l.a)(["\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  -ms-align-items: flex-start;\n  align-items: flex-start;\n  margin: 2em 2em;\n"]);return O=function(){return e},e}var w=p.a.ul(O()),y=function(e){var n,t,a=e.images;return a.length>0?n=a.map((function(e){var n=e.farm,t=e.server,a=e.id,c=e.secret,i=e.title,l="https://farm".concat(n,".staticflickr.com/").concat(t,"/").concat(a,"_").concat(c,"_m.jpg");return r.a.createElement("div",{key:a},r.a.createElement(j,{url:l,alt:i}))})):t=r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement(w,null,n),t)},k=function(){return r.a.createElement("div",{className:"loader"})},T=function(e){var n=e.searchTerm,t=Object(a.useContext)(s),c=t.images,i=t.loading,l=t.runSearch;return Object(a.useEffect)((function(){l(n)}),[n]),r.a.createElement("div",null,i?r.a.createElement(k,null):r.a.createElement(y,{images:c}))},S=function(e){var n=e.searchTerm;return r.a.createElement("div",null,r.a.createElement("h2",null,n," pictures"),r.a.createElement(T,{searchTerm:n}))};function _(){var e=Object(l.a)(["\n  font-size: 1em;\n  width: 100%;\n  background-color: #edeff0;\n  padding: 10px 15px;\n  border: 3px solid #d7dbdf;\n  border-right: none;\n  border-radius: 0.35em 0 0 0.35em;\n  outline: none;\n"]);return _=function(){return e},e}function I(){var e=Object(l.a)(["\n  outline: none;\n  border: none;\n  background-color: #d7dbdf;\n  padding: 0px 15px;\n  border-radius: 0 0.35em 0.35em 0;\n  cursor: pointer;\n"]);return I=function(){return e},e}function N(){var e=Object(l.a)(["\n  max-width: 460px;\n  display: flex;\n  margin: 0 auto 32px;\n"]);return N=function(){return e},e}function C(){var e=Object(l.a)(["\n  width: 32px;\n  height: 32px;\n"]);return C=function(){return e},e}var F=p.a.img(C()),L=p.a.form(N()),q=p.a.button(I()),B=p.a.input(_()),J=function(e){var n=e.history,t=e.handleSubmit,c=Object(a.useState)(""),i=Object(o.a)(c,2),l=i[0],u=i[1];return r.a.createElement(L,{onSubmit:function(e){return t(e,n,l)}},r.a.createElement(B,{type:"text",name:"search",placeholder:"Search for sceneries...",onChange:function(e){u(e.target.value)},value:l}),r.a.createElement(q,{type:"submit",disbaled:!l.trim()},r.a.createElement(F,{src:"images/search.svg",alt:"search"})))},P=Object(d.g)((function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Taiwan Hotspots"),r.a.createElement(J,{history:e.history,handleSubmit:e.handleSubmit}))})),z=function(e){var n=e.searchTerm;return r.a.createElement("div",null,r.a.createElement("h2",null,n," Images"),r.a.createElement(T,{searchTerm:n}))},H=function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h2",null,"Page Not Found"))};function M(){var e=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    width: 50%;\n    max-width: 50%;\n    margin:auto;\n    flex-wrap: wrap;\n"]);return M=function(){return e},e}function W(){var e=Object(l.a)(["\n    width: 140px;\n    margin: 10px;\n    font-size: 18px;\n"]);return W=function(){return e},e}var A=p.a.li(W()),D=p.a.ul(M()),K=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement(D,null,r.a.createElement(A,null,r.a.createElement(h.b,{to:"/taipei101"},"Taipei 101")),r.a.createElement(A,null,r.a.createElement(h.b,{to:"/jioufen"},"Jioufen")),r.a.createElement(A,null,r.a.createElement(h.b,{to:"/yangmingshan"},"Yangmingshan")),r.a.createElement(A,null,r.a.createElement(h.b,{to:"/kenting"},"Kenting")),r.a.createElement(A,null,r.a.createElement(h.b,{to:"/shifen"},"Shifen")),r.a.createElement(A,null,r.a.createElement(h.b,{to:"/sunmoonlake"},"Sun Moon Lake")),r.a.createElement(A,null,r.a.createElement(h.b,{to:"/qingjing"},"Qingjing")),r.a.createElement(A,null,r.a.createElement(h.b,{to:"/Sanxiantai"},"Sanxiantai"))))},Q=t(33),V=t(34),Y=t(36),$=t(35);function G(){var e=Object(l.a)(["\n  margin-left: 15px;\n  padding: 10px;\n"]);return G=function(){return e},e}function R(){var e=Object(l.a)(["\n  height: 30px;\n  width: 30px;\n"]);return R=function(){return e},e}function U(){var e=Object(l.a)(["\n  padding: 5px;\n"]);return U=function(){return e},e}function X(){var e=Object(l.a)(["\n  margin-left: 30px;\n  font-family: 'Inter beta', sans-serif;\n  color: #5f6368;\n  font-style: normal;\n  font-weight: 300;\n"]);return X=function(){return e},e}function Z(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return Z=function(){return e},e}function ee(){var e=Object(l.a)(["\n  display: flex;\n  height: 60px;\n  align-items: center;\n  justify-content: center;  \n  margin-left: auto;\n  margin-right: auto;\n  background-color: #edeff0;\n  box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, .1);\n"]);return ee=function(){return e},e}var ne=p.a.div(ee()),te=p.a.div(Z()),ae=p.a.div(X()),re=p.a.a(U()),ce=p.a.img(R()),ie=p.a.a(G()),le=function(e){Object(Y.a)(t,e);var n=Object($.a)(t);function t(){return Object(Q.a)(this,t),n.apply(this,arguments)}return Object(V.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"Footer",className:"footer"},r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(re,{href:"mailto:hic.ch.ntu@gmail.com"},r.a.createElement(ce,{src:"images/mail.png",alt:"mail"})),r.a.createElement(ie,{href:"https://github.com/mickey7799",target:"_blank",rel:"noopener noreferrer",className:"Footer__InstagramLink-sc-1mb098p-0 bBdLAF"},r.a.createElement(ce,{src:"images/github.svg",alt:"github"})),r.a.createElement(ae,null,"\xa9 2020 Vickey Lee"))))}}]),t}(a.Component);function oe(){var e=Object(l.a)(["\n    max-width: 1400px;\n    margin: auto;\n"]);return oe=function(){return e},e}var ue=p.a.div(oe());var me=function(){return r.a.createElement(f,null,r.a.createElement(h.a,{basename:"/Taiwan_Hotspots"},r.a.createElement(ue,null,r.a.createElement(P,{handleSubmit:function(e,n,t){e.preventDefault(),e.currentTarget.reset();var a="/search/".concat(t);n.push(a)}}),r.a.createElement(K,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(d.a,{to:"/taipei101"})}}),r.a.createElement(d.b,{path:"/taipei101",render:function(){return r.a.createElement(S,{searchTerm:"taipei101"})}}),r.a.createElement(d.b,{path:"/jioufen",render:function(){return r.a.createElement(S,{searchTerm:"jioufen"})}}),r.a.createElement(d.b,{path:"/yangmingshan",render:function(){return r.a.createElement(S,{searchTerm:"yangmingshan"})}}),r.a.createElement(d.b,{path:"/kenting",render:function(){return r.a.createElement(S,{searchTerm:"kenting"})}}),r.a.createElement(d.b,{path:"/shifen",render:function(){return r.a.createElement(S,{searchTerm:"shifen"})}}),r.a.createElement(d.b,{path:"/sunmoonlake",render:function(){return r.a.createElement(S,{searchTerm:"sun moon lake"})}}),r.a.createElement(d.b,{path:"/qingjing",render:function(){return r.a.createElement(S,{searchTerm:"qingjing"})}}),r.a.createElement(d.b,{path:"/Sanxiantai",render:function(){return r.a.createElement(S,{searchTerm:"sanxiantai"})}}),r.a.createElement(d.b,{path:"/search/:searchInput",render:function(e){return r.a.createElement(z,{searchTerm:e.match.params.searchInput})}}),r.a.createElement(d.b,{component:H}))),r.a.createElement(le,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.d6df1d18.chunk.js.map