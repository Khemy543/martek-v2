"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{579:function(e,t,r){r.d(t,{Z:function(){return L}});var n=r(5666),a=r.n(n),s=r(5893),i=r(7294),c=r(1228),o=r(3746),l=r(9196),u=r(3801),d=r(5675),m=r(1361),x=r(2312),h=r(6546),f=r(1664),p=r(9669),v=r.n(p);function g(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(n,a)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){g(s,n,a,i,c,"next",e)}function c(e){g(s,n,a,i,c,"throw",e)}i(void 0)}))}}var b=(0,r(1752).default)().publicRuntimeConfig,j=v().create({baseURL:b.backendUrl,headers:{"Content-Type":"application/json"}}),w={login:y(a().mark((function e(t,r){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.post("auth/login",{email:t,password:r});case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),getProfile:y(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.localStorage.getItem("authToken"),e.prev=1,t){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,j.get("auth/user",{headers:{Authorization:"Bearer ".concat(t)}});case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),logoutUser:y(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("authToken"),e.prev=1,e.next=4,j.post("logout",{header:{Authorization:"Bearer ".concat(t)}});case 4:return r=e.sent,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),userCart:y(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.localStorage.getItem("authToken"),e.prev=1,e.next=4,j.get("user-cart",{headers:{Authorization:"Bearer ".concat(t)}});case 4:return r=e.sent,e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))},N=r(7718);function k(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(n,a)}var C=[{name:"Campus",href:"#",current:!1,icon:u.v4q},{name:"My Shop",href:"#",current:!1,icon:u.b_c},{name:"Shops",href:"#",current:!1,icon:null},{name:"Categories",href:"/categories",current:!1,icon:null}];function T(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}function P(){var e,t=(0,m.C)(x.dy),r=(0,m.C)(x.Ns),n=(0,m.T)(),p=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.logoutUser();case 3:e.sent&&(localStorage.removeItem("authToken"),n((0,N.av)(null))),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){k(s,n,a,i,c,"next",e)}function c(e){k(s,n,a,i,c,"throw",e)}i(void 0)}))});return(0,s.jsx)(c.p,{as:"nav",className:" bg-white fixed inset-x-0 z-40 shadow-sm",children:function(e){var a=e.open;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:(0,s.jsx)("div",{className:"relative flex items-center justify-between h-16",children:(0,s.jsxs)("div",{className:"flex-1 flex items-center justify-between",children:[(0,s.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,s.jsx)(f.default,{href:"/",children:(0,s.jsxs)("a",{children:[(0,s.jsx)("div",{className:"block lg:hidden h-8 w-8 relative",children:(0,s.jsx)(d.default,{src:"/assets/img/martek.png",alt:"Martek gh",layout:"fill"})}),(0,s.jsx)("div",{className:"hidden lg:block h-24 w-32 relative",children:(0,s.jsx)(d.default,{src:"/assets/img/martlogo.png",alt:"Martek gh",layout:"fill"})})]})})}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{type:"text",className:" w-auto lg:w-full px-5 py-2 rounded-lg outline-none appearance-none border-2 border-blue-300 focus:border-blue-500 text-sm font-normal",placeholder:"Search Product..."})}),(0,s.jsx)("div",{className:"hidden sm:block sm:ml-6",children:(0,s.jsx)("div",{className:"flex space-x-4",children:C.map((function(e){return(0,s.jsx)(f.default,{href:"".concat(e.href),children:(0,s.jsxs)("a",{className:"px-3 py-2 flex items-center flex-shrink-0 bg-blue-500 uppercase rounded-md text-xs text-white font-medium hover:bg-blue-600 hover:rounded-md","aria-current":"page",children:[e.icon?(0,s.jsx)(e.icon,{className:" h-4 w-4 mr-1"}):null,"  ",e.name]})},e.name)}))})}),(0,s.jsx)("div",{className:"flex items-center sm:hidden",children:(0,s.jsxs)(c.p.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open main menu"}),a?(0,s.jsx)(u.b0D,{className:"block h-6 w-6","aria-hidden":"true"}):(0,s.jsx)(u.Oqj,{className:"block h-6 w-6","aria-hidden":"true"})]})}),(0,s.jsxs)("div",{className:" flex",children:[(0,s.jsxs)("div",{onClick:function(){return n((0,h.g)(!0))},className:" shadow-md relative rounded-full bg-blue-500 h-10 cursor-pointer hover:bg-blue-600 w-10 text-white flex justify-center items-center",children:[(0,s.jsx)(u.Q1y,{className:" h-6 w-6"}),(0,s.jsx)("div",{style:{top:"-5px",right:"-5px"},className:" absolute h-5 w-5 text-sm font-bold flex justify-center items-center rounded-full bg-red-600 text-white",children:r.length})]}),t?(0,s.jsx)("div",{className:" hidden lg:flex items-center pr-2 sm:ml-6 sm:pr-0",children:(0,s.jsxs)(o.v,{as:"div",className:"relative",children:[(0,s.jsx)("div",{children:(0,s.jsxs)(o.v.Button,{className:"bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open user menu"}),(0,s.jsx)("div",{className:"h-8 w-8 rounded-full flex justify-center items-center text-white",children:(0,s.jsx)(u.tBG,{className:"h-5 w-5"})})]})}),(0,s.jsx)(l.u,{as:i.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsxs)(o.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,s.jsx)(o.v.Item,{children:function(e){var r=e.active;return(0,s.jsx)(f.default,{href:"/profile",children:(0,s.jsx)("a",{className:T(r?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:t.name})})}}),(0,s.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,s.jsx)("a",{href:"#",className:T(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700 cursor-pointer"),children:"Settings"})}}),(0,s.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,s.jsx)("div",{onClick:p,className:T(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Sign out"})}})]})})]})}):(0,s.jsx)("div",{children:(0,s.jsx)(o.v,{as:"div",className:" ml-3 relative",children:(0,s.jsxs)("div",{children:[(0,s.jsxs)(o.v.Button,{className:"bg-gray-500 py-1 px-2 rounded-full items-center flex space-x-2 text-white hover:text-white",children:[(0,s.jsx)(u.Oqj,{className:"h-6 w-6","aria-hidden":"true"}),(0,s.jsx)("div",{className:" h-8 w-8 rounded-full bg-white flex justify-center text-gray-500 items-center",children:(0,s.jsx)(u.tBG,{className:"h-5 w-5","aria-hidden":"true"})})]}),(0,s.jsx)(l.u,{as:i.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsxs)(o.v.Items,{className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:[(0,s.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,s.jsx)("div",{onClick:function(){return n((0,h.b)(!0))},className:T(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700 cursor-pointer"),children:"Login"})}}),(0,s.jsx)(o.v.Item,{children:function(e){var t=e.active;return(0,s.jsx)("div",{className:T(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700 cursor-pointer"),children:"Sign Up"})}})]})})]})})})]})]})})}),(0,s.jsx)(c.p.Panel,{className:"sm:hidden",children:(0,s.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:C.map((function(e){return(0,s.jsx)(c.p.Button,{as:"a",href:e.href,className:T(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})}})}var S=[{name:"Help Center",href:"#"},{name:"Contact Us",href:"#"},{name:"How to by on Martek",href:"#"}],F=[{name:"About Us",href:"#"},{name:"Terms and Conditions",href:"#"},{name:"Privacy Policy",href:"#"}],I=[{name:"Sell on Martek",href:"#"},{name:"Own a Shop on Martek",href:"#"},{name:"Service Charges",href:"#"}];function E(){return(0,s.jsx)("div",{className:" px-2",children:(0,s.jsxs)("div",{className:" w-full lg:flex justify-between space-y-6 lg:space-y-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mb-10 bg-gray-200 rounded-lg",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" text-base font-bold text-gray-900 uppercase",children:"Let us help you"}),(0,s.jsx)("div",{className:" mt-4 space-y-2",children:S.map((function(e){return(0,s.jsx)("div",{className:" text-sm font-normal text-gray-700 cursor-pointer hover:text-gray-900",children:e.name},e.name)}))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" text-base font-bold text-gray-900 uppercase",children:"About Martek"}),(0,s.jsx)("div",{className:" mt-4 space-y-2",children:F.map((function(e){return(0,s.jsx)("div",{className:" text-sm font-normal text-gray-700 cursor-pointer hover:text-gray-900",children:e.name},e.name)}))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" text-base font-bold text-gray-900 uppercase",children:"Make Money on martek"}),(0,s.jsx)("div",{className:" mt-4 space-y-2",children:I.map((function(e){return(0,s.jsx)("div",{className:" text-sm font-normal text-gray-700 cursor-pointer hover:text-gray-900",children:e.name},e.name)}))})]})]})})}var O=r(8346),A=r(8697),M=function(e){return e.modal.loginModal},B=function(e){return e.modal.cartModal};(0,A.P1)(M,(function(e){return e}));function _(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(n,a)}function z(){var e,t=(0,i.useState)(""),r=t[0],n=t[1],c=(0,i.useState)(""),o=c[0],d=c[1],x=(0,i.useRef)(null),f=(0,m.C)(M),p=(0,m.T)(),v=function(){p((0,h.b)(!1))},g=(e=a().mark((function e(t){var n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,w.login(r,o);case 4:if(!(n=e.sent.data)){e.next=11;break}return window.localStorage.setItem("authToken",n.access_token),e.next=9,w.getProfile();case 9:(s=e.sent)&&s.data&&(p((0,N.av)(s.data)),v());case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,13]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){_(s,n,a,i,c,"next",e)}function c(e){_(s,n,a,i,c,"throw",e)}i(void 0)}))});return(0,s.jsx)(l.u.Root,{show:f,as:i.Fragment,children:(0,s.jsx)(O.V,{as:"div",className:"fixed z-50 inset-0 overflow-y-auto",initialFocus:x,onClose:v,children:(0,s.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[(0,s.jsx)(l.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(O.V.Overlay,{className:"fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"})}),(0,s.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),(0,s.jsx)(l.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsx)("div",{className:"inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:(0,s.jsxs)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[(0,s.jsxs)("div",{className:" flex justify-between items-center mb-8",children:[(0,s.jsxs)("div",{className:"sm:flex items-center",children:[(0,s.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10",children:(0,s.jsx)(u.khe,{className:"h-6 w-6 text-blue-600","aria-hidden":"true"})}),(0,s.jsx)("div",{className:" text-center sm:ml-4 sm:text-left",children:(0,s.jsx)(O.V.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:"Login to Martek"})})]}),(0,s.jsx)(u.b0D,{className:" h-6 w-6 cursor-pointer",onClick:v})]}),(0,s.jsx)("div",{}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsx)("div",{className:"text-lg font-medium",children:"Welcome to Martek Gh"}),(0,s.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:g,children:[(0,s.jsx)("input",{type:"hidden",name:"remember",defaultValue:"true"}),(0,s.jsxs)("div",{className:"rounded-md shadow-sm -space-y-px",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),(0,s.jsx)("input",{id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Email address",value:r,onChange:function(e){return n(e.target.value)}})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password",className:"sr-only",children:"Password"}),(0,s.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm",placeholder:"Password",value:o,onChange:function(e){return d(e.target.value)}})]})]}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),(0,s.jsx)("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900",children:"Remember me"})]}),(0,s.jsx)("div",{className:"text-sm",children:(0,s.jsx)("a",{href:"#",className:"font-medium text-blue-600 hover:text-blue-500",children:"Forgot your password?"})})]}),(0,s.jsx)("div",{children:(0,s.jsxs)("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:[(0,s.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:(0,s.jsx)(u.khe,{className:"h-5 w-5 text-blue-500 group-hover:text-blue-400","aria-hidden":"true"})}),"Sign in"]})})]})]})]})})})]})})})}var R=r(3799);function U(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(n,a)}function V(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function q(){var e,t=(0,m.C)(B),r=(0,m.C)(x.Ns),n=(0,m.C)(x.aT),c=function(){o((0,h.g)(!1))},o=(0,m.T)(),d=(0,m.C)(x.dy),p=(e=a().mark((function e(t){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r.findIndex((function(e){return e.id===Number(t.id)}))>-1)){e.next=4;break}return e.abrupt("return");case 4:return(s=V(r)).filter((function(e){return e.id!==Number(t.id)})),e.next=8,R.Z.saveItemToCart({id:d.id,cart:s,amount:n+Number(t.price)});case 8:e.sent&&o((0,N.sQ)({value:[t],amount:Number(t.id)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){U(s,n,a,i,c,"next",e)}function c(e){U(s,n,a,i,c,"throw",e)}i(void 0)}))});return(0,s.jsx)(l.u.Root,{show:t,as:i.Fragment,children:(0,s.jsx)(O.V,{as:"div",className:"fixed z-50 inset-0 overflow-hidden",onClose:c,children:(0,s.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[(0,s.jsx)(l.u.Child,{as:i.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)(O.V.Overlay,{className:"absolute inset-0 bg-gray-900 bg-opacity-75 transition-opacity"})}),(0,s.jsx)("div",{className:"fixed inset-y-0 right-0 pl-10 max-w-full flex",children:(0,s.jsx)(l.u.Child,{as:i.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,s.jsx)("div",{className:"w-screen max-w-md",children:(0,s.jsxs)("div",{className:"h-full flex flex-col bg-white shadow-xl overflow-y-scroll",children:[(0,s.jsxs)("div",{className:"flex-1 py-6 overflow-y-auto px-4 sm:px-6",children:[(0,s.jsxs)("div",{className:"flex items-start justify-between",children:[(0,s.jsx)(O.V.Title,{className:"text-lg font-medium text-gray-900",children:"Shopping cart"}),(0,s.jsx)("div",{className:"ml-3 h-7 flex items-center",children:(0,s.jsxs)("button",{type:"button",className:"-m-2 p-2 text-gray-400 hover:text-gray-500",onClick:c,children:[(0,s.jsx)("span",{className:"sr-only",children:"Close panel"}),(0,s.jsx)(u.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,s.jsx)("div",{className:"mt-8",children:(0,s.jsx)("div",{className:"flow-root",children:(0,s.jsx)("ul",{role:"list",className:"-my-6 divide-y divide-gray-200",children:r.map((function(e){return(0,s.jsxs)("li",{className:"py-6 flex",children:[(0,s.jsx)("div",{className:"flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden",children:e.product_images[0]?(0,s.jsx)("img",{src:"https://backend-api.martekgh.com/".concat(e.product_images[0].path),alt:e.product_name,className:"w-full h-full object-center object-cover"}):(0,s.jsx)("div",{className:" w-full h-full bg-gray-200"})}),(0,s.jsxs)("div",{className:"ml-4 flex-1 flex flex-col",children:[(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[(0,s.jsx)("h3",{className:" text-sm",children:(0,s.jsx)(f.default,{href:"/product/".concat(e.id),children:(0,s.jsx)("a",{children:e.product_name})})}),(0,s.jsxs)("p",{className:"ml-4 text-sm",children:["GHS ",e.price]})]})}),(0,s.jsxs)("div",{className:"flex-1 flex items-end justify-between text-sm",children:[(0,s.jsxs)("p",{className:"text-gray-500",children:["Qty ",e.quantity]}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("button",{onClick:function(){return p(e.id)},type:"button",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Remove"})})]})]})]},e.id)}))})})})]}),(0,s.jsxs)("div",{className:"border-t border-gray-200 py-6 px-4 sm:px-6",children:[(0,s.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[(0,s.jsx)("p",{children:"Subtotal"}),(0,s.jsxs)("p",{children:["GHS ",n.toFixed(2)]})]}),(0,s.jsx)("p",{className:"mt-0.5 text-sm text-gray-500",children:"Shipping and taxes calculated at checkout."}),(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsx)("a",{href:"#",className:"flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",children:"Checkout"})}),(0,s.jsx)("div",{className:"mt-6 flex justify-center text-sm text-center text-gray-500",children:(0,s.jsxs)("p",{children:["or"," ",(0,s.jsxs)("button",{type:"button",className:"text-indigo-600 font-medium hover:text-indigo-500",onClick:c,children:["Continue Shopping",(0,s.jsx)("span",{"aria-hidden":"true",children:" \u2192"})]})]})})]})]})})})})]})})})}function D(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(n,a)}function G(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){D(s,n,a,i,c,"next",e)}function c(e){D(s,n,a,i,c,"throw",e)}i(void 0)}))}}function L(e){var t=e.children,r=(0,m.C)(x.dy),n=(0,m.T)();return(0,i.useEffect)((function(){function e(){return(e=G(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.getProfile();case 3:(t=e.sent.data)&&n((0,N.av)(t)),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function t(){return(t=G(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.userCart();case 3:(t=e.sent.data)&&(r=t.cart[0],n((0,N.sQ)({value:r,amount:t.cart[1]}))),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}r||(function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}())}),[n,r]),(0,s.jsxs)("div",{children:[(0,s.jsx)(P,{}),(0,s.jsx)("main",{className:" max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-24",children:t}),(0,s.jsx)(z,{}),(0,s.jsx)(q,{}),(0,s.jsx)(E,{})]})}},1361:function(e,t,r){r.d(t,{T:function(){return a},C:function(){return s}});var n=r(1043),a=function(){return(0,n.I0)()},s=n.v9},2312:function(e,t,r){r.d(t,{dy:function(){return a},Ns:function(){return s},aT:function(){return i}});var n=r(8697),a=function(e){return e.user.user},s=function(e){return e.user.cart},i=function(e){return e.user.cartTotal};(0,n.P1)(a,(function(e){return e}))},3799:function(e,t,r){var n=r(5666),a=r.n(n),s=r(9669),i=r.n(s);function c(e,t,r,n,a,s,i){try{var c=e[s](i),o=c.value}catch(l){return void r(l)}c.done?t(o):Promise.resolve(o).then(n,a)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var s=e.apply(t,r);function i(e){c(s,n,a,i,o,"next",e)}function o(e){c(s,n,a,i,o,"throw",e)}i(void 0)}))}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=(0,r(1752).default)().publicRuntimeConfig,d=i().create({baseURL:u.backendUrl,headers:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},{},{"Content-Type":"application/json"})}),m={weekProducts:o(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("fetch/new-this-week");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),phonesAndAccessories:o(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/2/product-index");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),getProductDetails:o(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("product/".concat(t,"/details"));case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),getProductCategories:o(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("categories");case 3:return t=e.sent,e.abrupt("return",t);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),getCategoryProducts:o(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("category/".concat(t,"/products"));case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),saveItemToCart:o(a().mark((function e(t){var r,n,s,i,c,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,n=t.cart,s=t.amount,i=window.localStorage.getItem("authToken"),c=[n,s],e.prev=3,e.next=6,d.post("user/".concat(r,"/add-cart"),{cart:c},{headers:{Authorization:"Bearer ".concat(i)}});case 6:return o=e.sent,e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(3),new Error(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))};t.Z=m}}]);