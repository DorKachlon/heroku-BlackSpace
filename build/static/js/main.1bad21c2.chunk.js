(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),a=n(36),r=n.n(a),o=(n(46),n(47),n(37)),u=n(40),l=n(2),d=n(38),j=n.n(d),f=i.a.createContext();function b(){return Object(s.useContext)(f)}function h(e){var t=e.children,n=Object(s.useState)(),i=Object(l.a)(n,2),a={uid:i[0],setUid:i[1]};return Object(c.jsx)(f.Provider,{value:a,children:t})}var m=i.a.createContext();function O(){return Object(s.useContext)(m)}function v(e){var t=e.children,n=Object(s.useState)(null),i=Object(l.a)(n,2),a=i[0],r=i[1],o=b().setUid;return Object(s.useEffect)((function(){if(null!==a)return a.on("userId",(function(e){o(e)})),function(){return a.off("userId")}}),[a]),Object(s.useEffect)((function(){var e=j()("http://localhost:4001/");return e.emit("join",{room:"XPITG"}),e.on("connect",(function(){r(e)})),function(){return e.close()}}),[]),Object(c.jsx)(m.Provider,{value:a,children:t})}var g=i.a.createContext();function x(){return Object(s.useContext)(g)}function p(e){var t=e.children,n=Object(s.useState)([]),i=Object(l.a)(n,2),a=i[0],r=i[1],d=O(),j=b().uid;Object(s.useEffect)((function(){if(null!==d)return d.on("receive-message",(function(e){r((function(t){return[].concat(Object(u.a)(t),[e])}))})),d.on("old-messages",(function(e){r(e)})),function(){d.off("userId"),d.off("old-messages")}}),[d]);var f={messages:a,setMessages:r,sendMessage:function(e){d.emit("send-message",{text:e,uid:j,time:(new Date).getTime()})},removeMessage:function(){r((function(e){var t=Object(o.a)(e);t[0];return t.slice(1)}))}};return Object(c.jsx)(g.Provider,{value:f,children:t})}n(79);var w=20;function N(e){var t,n=e.messageTime,i=e.setEnded,a=Object(s.useState)(),r=Object(l.a)(a,2),o=r[0],u=r[1],d=Object(s.useState)(!1),j=Object(l.a)(d,2),f=j[0],b=j[1],h=Math.PI;function m(){t++;var e=(t%=360)*h/180,n=10*Math.sin(e),c=-10*Math.cos(e),s=t>180?1:0,a="M 0 0 v -".concat(10," A ").concat(10," ").concat(10," 1 ").concat(s," 1 ").concat(n," ").concat(c," z");u(a),setTimeout(m,180),t>358&&i(!0),t>270&&b(!0)}return Object(s.useEffect)((function(){t=((new Date).getTime()-n)/166,m()}),[]),Object(c.jsx)("div",{className:f?"timer flashing-timer":"timer",children:Object(c.jsx)("div",{className:"circle-background",style:{width:w,height:w},children:Object(c.jsxs)("svg",{width:w,height:w,viewBox:"0 0 ".concat(w," ").concat(w),children:[Object(c.jsx)("path",{id:"border",d:o,transform:"translate(".concat(10,",").concat(10,")")}),Object(c.jsx)("path",{id:"loader",d:o,transform:"translate(".concat(10,",").concat(10,") scale(.84)")})]})})})}n(80);function k(e){var t=e.message,n=e.uid,i=e.time,a=Object(s.useState)(!1),r=Object(l.a)(a,2),o=r[0],u=r[1],d=x().removeMessage;return Object(s.useEffect)((function(){o&&setTimeout((function(){d()}),500)}),[o]),Object(c.jsxs)("div",{className:o?"message-container message-ended":"message-container",children:[Object(c.jsx)("div",{className:"message-name",children:n}),Object(c.jsx)(N,{messageTime:i,setEnded:u}),Object(c.jsx)("div",{className:"message-context",children:t})]})}n(81);function S(){var e=x().messages;return Object(c.jsx)("div",{className:"chat",children:e.map((function(e){return Object(c.jsx)(k,{message:e.text,uid:e.uid,time:e.time},e.time)}))})}n(82);var E=["63647852","77f9hs9f","ju538kf3","kjh789dk","25463794"];function y(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(s.useState)(),r=Object(l.a)(a,2),o=r[0],u=r[1],d=Object(s.useState)(),j=Object(l.a)(d,2),f=j[0],b=j[1],h=O();return Object(s.useEffect)((function(){if(null!==h)return h.on("online-users",(function(e){b(e)})),u(setInterval((function(){i((function(e){return e+1}))}),5e3)),function(){h.off("online-users"),clearInterval(o)}}),[h]),Object(c.jsxs)("header",{className:"header",children:[Object(c.jsxs)("section",{className:"header-top",children:[Object(c.jsx)("div",{className:"circle-progress"}),Object(c.jsx)("div",{className:"title",children:"black space"})]}),Object(c.jsx)("div",{className:"progress",children:Object(c.jsx)("div",{className:"indeterminate"})}),Object(c.jsxs)("section",{className:"information",children:[Object(c.jsx)("div",{className:"square"}),Object(c.jsx)("div",{className:"hash",children:E[n%E.length]}),f&&Object(c.jsx)("div",{className:"users",children:C(f)}),Object(c.jsx)("div",{className:"room",children:"xpttg"})]})]})}function C(e){return e.length<4?e.join(","):e.slice(0,2).join(",")+"...(".concat(e.length,")")}var T=n(39);n(83);function M(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],a=x().sendMessage,r=O();return Object(c.jsx)("footer",{className:"input-area",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(n),i("")},className:"form",children:[Object(c.jsx)("input",{disabled:null===r,value:n,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("button",{className:"send-button",disabled:""===n,type:"submit",children:Object(c.jsx)(T.a,{style:{color:"black"}})})]})})}n(84);n(85);function I(){var e=O();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{}),e?Object(c.jsx)(S,{}):Object(c.jsx)("h1",{style:{color:"white"},children:"ERROR"}),Object(c.jsx)(M,{})]})})}var P=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h,{children:Object(c.jsx)(v,{children:Object(c.jsx)(p,{children:Object(c.jsx)(I,{})})})})})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(t,e)}))}}(),U()}},[[86,1,2]]]);
//# sourceMappingURL=main.1bad21c2.chunk.js.map