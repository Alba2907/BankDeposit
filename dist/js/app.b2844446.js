(()=>{"use strict";var e={6036:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727);var r=n(9963),a=n(6252);function o(e,t,n,r,o,u){return r.layout?((0,a.wg)(),(0,a.j4)((0,a.LL)(r.layout+"-layout"),{key:0})):(0,a.kq)("",!0)}var u=n(2119),s={class:"container with-nav"};function i(e,t,n,r,o,u){var i=(0,a.up)("the-navbar"),l=(0,a.up)("the-sidebar"),c=(0,a.up)("app-message"),p=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(i),(0,a.Wm)(l),(0,a._)("div",s,[(0,a.Wm)(c),(0,a.Wm)(p)])],64)}var l={class:"navbar"},c=(0,a._)("h3",null,"Online Bank",-1),p={class:"navbar-menu"},d=(0,a.Uk)("Заявки"),f=(0,a.Uk)("Помощь");function v(e,t,n,o,u,s){var i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",l,[c,(0,a._)("ul",p,[(0,a._)("li",null,[(0,a.Wm)(i,{to:"/"},{default:(0,a.w5)((function(){return[d]})),_:1})]),(0,a._)("li",null,[(0,a.Wm)(i,{to:"/help"},{default:(0,a.w5)((function(){return[f]})),_:1})]),(0,a._)("li",null,[(0,a._)("a",{href:"#",onClick:t[0]||(t[0]=(0,r.iM)((function(){return o.openSidebar&&o.openSidebar.apply(o,arguments)}),["prevent"]))},"Сообщения")]),(0,a._)("li",null,[(0,a._)("a",{href:"#",onClick:t[1]||(t[1]=(0,r.iM)((function(){return o.logout&&o.logout.apply(o,arguments)}),["prevent"]))},"Выход")])])])}var m=n(4526);const g={setup:function(){var e=(0,u.tv)(),t=(0,m.oR)();return{logout:function(){t.commit("auth/logout"),e.push("/auth")},openSidebar:function(){return t.commit("openSidebar")}}}};var h=n(3744);const b=(0,h.Z)(g,[["render",v]]),y=b;var w=n(3577),k={key:0,class:"alert-title"};function _(e,t,n,r,o,u){return r.message?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,w.C_)(["alert",r.message.type])},[r.title?((0,a.wg)(),(0,a.iD)("p",k,(0,w.zw)(r.title),1)):(0,a.kq)("",!0),(0,a._)("p",null,(0,w.zw)(r.message.value),1),(0,a._)("span",{class:"alert-close",onClick:t[0]||(t[0]=function(){return r.close&&r.close.apply(r,arguments)})},"×")],2)):(0,a.kq)("",!0)}const q={setup:function(){var e=(0,m.oR)(),t={primary:"Успешно",danger:"Ошибка",warning:"Внимание"},n=(0,a.Fl)((function(){return e.state.message})),r=(0,a.Fl)((function(){return n.value?t[n.value.type]:null}));return{message:n,title:r,close:function(){return e.commit("clearMessage")}}}},Z=(0,h.Z)(q,[["render",_]]),x=Z;var M=(0,a._)("span",{class:"sidebar-close"},"×",-1),S=(0,a._)("div",{class:"sidebar-content"},[(0,a._)("p",null,"Добро пожаловать в систему по учету заявок в нашем банке. Здесь вы найдете исчерпывающую информацию про систему и заявки")],-1),A=[M,S];function j(e,t,n,r,o,u){return r.sidebar?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"sidebar",onClick:t[0]||(t[0]=function(){return r.close&&r.close.apply(r,arguments)})},A)):(0,a.kq)("",!0)}const C={setup:function(){var e=(0,m.oR)(),t=(0,a.Fl)((function(){return e.state.sidebar}));return{sidebar:t,close:function(){return e.commit("closeSidebar")}}}},D=(0,h.Z)(C,[["render",j]]),E=D,B={components:{AppMessage:x,TheNavbar:y,TheSidebar:E}},O=(0,h.Z)(B,[["render",i]]),R=O;var U={class:"container"};function W(e,t,n,r,o,u){var s=(0,a.up)("app-message"),i=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",U,[(0,a.Wm)(s),(0,a.Wm)(i)])}const T={components:{AppMessage:x}},P=(0,h.Z)(T,[["render",W]]),z=P,V={setup:function(){var e=(0,u.yj)();return{layout:(0,a.Fl)((function(){return e.meta.layout}))}},components:{MainLayout:R,AuthLayout:z}},F=(0,h.Z)(V,[["render",o]]),I=F;var N=n(5205);(0,N.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(1539),n(8783),n(3948),n(7327);function H(e,t,n,r,o,u){var s=(0,a.up)("app-loader"),i=(0,a.up)("request-filter"),l=(0,a.up)("request-table"),c=(0,a.up)("request-modal"),p=(0,a.up)("app-modal"),d=(0,a.up)("app-page");return r.loading?((0,a.wg)(),(0,a.j4)(s,{key:0})):((0,a.wg)(),(0,a.j4)(d,{key:1,title:"Список заявок"},{header:(0,a.w5)((function(){return[(0,a._)("button",{class:"btn primary",onClick:t[0]||(t[0]=function(e){return r.modal=!0})},"Создать")]})),default:(0,a.w5)((function(){return[(0,a.Wm)(i,{modelValue:r.filter,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.filter=e})},null,8,["modelValue"]),(0,a.Wm)(l,{requests:r.requests},null,8,["requests"]),((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[r.modal?((0,a.wg)(),(0,a.j4)(p,{key:0,title:"Создать заявку",onClose:t[3]||(t[3]=function(e){return r.modal=!1})},{default:(0,a.w5)((function(){return[(0,a.Wm)(c,{onCreated:t[2]||(t[2]=function(e){return r.modal=!1})})]})),_:1})):(0,a.kq)("",!0)]))]})),_:1}))}var L=n(6835),$=n(8534),Y=(n(8309),n(6699),n(2023),n(2262)),K=n(4988),G={key:0,class:"text-center"},Q={key:1,class:"table"},J=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"#"),(0,a._)("th",null,"ФИО"),(0,a._)("th",null,"Телефон"),(0,a._)("th",null,"Сумма"),(0,a._)("th",null,"Статус"),(0,a._)("th",null,"Действие")])],-1),X=["onClick"];function ee(e,t,n,r,o,u){var s=(0,a.up)("app-status"),i=(0,a.up)("router-link");return 0===n.requests.length?((0,a.wg)(),(0,a.iD)("h4",G,"Заявок пока нет")):((0,a.wg)(),(0,a.iD)("table",Q,[J,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.requests,(function(e,t){return(0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,w.zw)(t+1),1),(0,a._)("td",null,(0,w.zw)(e.fio),1),(0,a._)("td",null,(0,w.zw)(e.phone),1),(0,a._)("td",null,(0,w.zw)(r.currency(e.amount)),1),(0,a._)("td",null,[(0,a.Wm)(s,{type:e.status},null,8,["type"])]),(0,a._)("td",null,[(0,a.Wm)(i,{custom:"",to:{name:"Request",params:{id:e.id}}},{default:(0,a.w5)((function(e){var t=e.navigate;return[(0,a._)("button",{class:"btn",onClick:t},"Открыть",8,X)]})),_:2},1032,["to"])])])})),128))])]))}var te=n(742),ne=n(2416);const re={components:{AppStatus:ne.Z},props:["requests"],setup:function(){return{currency:te.A}}},ae=(0,h.Z)(re,[["render",ee]]),oe=ae;var ue={class:"modal"},se={key:0};function ie(e,t,n,r,o,u){return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",{class:"modal-backdrop",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),(0,a._)("div",ue,[n.title?((0,a.wg)(),(0,a.iD)("h3",se,(0,w.zw)(n.title),1)):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"default")])],64)}const le={emits:["close"],props:{title:{type:String}}},ce=(0,h.Z)(le,[["render",ie]]),pe=ce;var de=(0,a._)("label",{for:"fio"},"ФИО",-1),fe={key:0},ve=(0,a._)("label",{for:"phone"},"Телефон",-1),me={key:0},ge=(0,a._)("label",{for:"amount"},"Сумма",-1),he={key:0},be={class:"form-control"},ye=(0,a._)("label",{for:"status"},"Статус",-1),we=(0,a._)("option",{value:"done"},"Завершен",-1),ke=(0,a._)("option",{value:"cancelled"},"Отменен",-1),_e=(0,a._)("option",{value:"active"},"Активен",-1),qe=(0,a._)("option",{value:"pending"},"Выполняется",-1),Ze=[we,ke,_e,qe],xe=["disabled"];function Me(e,t,n,o,u,s){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[7]||(t[7]=(0,r.iM)((function(){return e.onSubmit&&e.onSubmit.apply(e,arguments)}),["prevent"]))},[(0,a._)("div",{class:(0,w.C_)(["form-control",{invalid:e.fError}])},[de,(0,a.wy)((0,a._)("input",{type:"text",id:"fio","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.fio=t}),onBlur:t[1]||(t[1]=function(){return e.fBlur&&e.fBlur.apply(e,arguments)})},null,544),[[r.nr,e.fio]]),e.fError?((0,a.wg)(),(0,a.iD)("small",fe,"P"+(0,w.zw)(e.fError),1)):(0,a.kq)("",!0)],2),(0,a._)("div",{class:(0,w.C_)(["form-control",{invalid:e.pError}])},[ve,(0,a.wy)((0,a._)("input",{type:"text",id:"phone","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.phone=t}),onBlur:t[3]||(t[3]=function(){return e.pBlur&&e.pBlur.apply(e,arguments)})},null,544),[[r.nr,e.phone]]),e.pError?((0,a.wg)(),(0,a.iD)("small",me,"P"+(0,w.zw)(e.pError),1)):(0,a.kq)("",!0)],2),(0,a._)("div",{class:(0,w.C_)(["form-control",{invalid:e.aError}])},[ge,(0,a.wy)((0,a._)("input",{type:"text",id:"amount","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.amount=t}),onBlur:t[5]||(t[5]=function(){return e.aBlur&&e.aBlur.apply(e,arguments)})},null,544),[[r.nr,e.amount,void 0,{number:!0}]]),e.aError?((0,a.wg)(),(0,a.iD)("small",he,"P"+(0,w.zw)(e.aError),1)):(0,a.kq)("",!0)],2),(0,a._)("div",be,[ye,(0,a.wy)((0,a._)("select",{id:"status","onUpdate:modelValue":t[6]||(t[6]=function(t){return e.status=t})},Ze,512),[[r.bM,e.status]])]),(0,a._)("button",{class:"btn primary",disabled:e.isSubmitting},"Создать",8,xe)],32)}var Se=n(4648),Ae=(n(3210),n(2954)),je=n(9012);function Ce(e){var t=(0,Ae.cI)({initialValues:{status:"active"}}),n=t.isSubmitting,r=t.handleSubmit,a=(0,Ae.U$)("fio",je.Z_().trim().required("Введите ФИО клиента")),o=a.value,u=a.errorMessage,s=a.handleBlur,i=(0,Ae.U$)("phone",je.Z_().trim().required("Введите телефон")),l=i.value,c=i.errorMessage,p=i.handleBlur,d=(0,Ae.U$)("amount",je.Rx().required("Введите сумму").min(0,"Сумма не может быть меньше 0")),f=d.value,v=d.errorMessage,m=d.handleBlur,g=(0,Ae.U$)("status"),h=g.value,b=r(e);return{status:h,isSubmitting:n,onSubmit:b,fio:o,fError:u,fBlur:s,phone:l,amount:f,pError:c,pBlur:p,aBlur:m,aError:v}}const De={emits:["created"],setup:function(e,t){var n=t.emit,r=(0,m.oR)(),a=function(){var e=(0,$.Z)((0,L.Z)().mark((function e(t){return(0,L.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.dispatch("request/create",t);case 2:n("created");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,Se.Z)({},Ce(a))}},Ee=(0,h.Z)(De,[["render",Me]]),Be=Ee;var Oe=n(7660),Re={class:"filter"},Ue=(0,a.Uk)("Фильтры"),We={class:"form-control"},Te={class:"form-control"},Pe=(0,a.uE)('<option disabled selected>Выберите статус</option><option value="done">Завершен</option><option value="cancelled">Отменен</option><option value="active">Активен</option><option value="pending">Выполняется</option>',5),ze=[Pe];function Ve(e,t,n,o,u,s){var i=(0,a.up)("h7");return(0,a.wg)(),(0,a.iD)("div",Re,[(0,a.Wm)(i,null,{default:(0,a.w5)((function(){return[Ue]})),_:1}),(0,a._)("div",We,[(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Введите имя","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.name=e})},null,512),[[r.nr,o.name]])]),(0,a._)("div",Te,[(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.status=e})},ze,512),[[r.bM,o.status]])]),o.isActive?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn warning",onClick:t[2]||(t[2]=function(){return o.reset&&o.reset.apply(o,arguments)})},"Очистить")):(0,a.kq)("",!0)])}const Fe={emits:["update:modelValue"],props:["modelValue"],setup:function(e,t){var n=t.emit,r=(0,Y.iH)(),o=(0,Y.iH)();(0,a.YP)([r,o],(function(e){n("update:modelValue",{name:e[0],status:e[1]})}));var u=(0,a.Fl)((function(){return r.value||o.value}));return{name:r,status:o,isActive:u,reset:function(){r.value="",o.value=null}}}},Ie=(0,h.Z)(Fe,[["render",Ve]]),Ne=Ie,He={setup:function(){var e=(0,m.oR)(),t=(0,Y.iH)(!1),n=(0,Y.iH)(!1),r=(0,Y.iH)({});(0,a.bv)((0,$.Z)((0,L.Z)().mark((function t(){return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.value=!0,t.next=3,e.dispatch("request/load");case 3:n.value=!1;case 4:case"end":return t.stop()}}),t)}))));var o=(0,a.Fl)((function(){return e.getters["request/requests"].filter((function(e){return r.value.name?e.fio.includes(r.value.name):e})).filter((function(e){return r.value.status?r.value.status===e.status:e}))}));return{modal:t,requests:o,loading:n,filter:r}},components:{RequestFilter:Ne,AppLoader:Oe.Z,AppPage:K.Z,RequestTable:oe,AppModal:pe,RequestModal:Be}},Le=(0,h.Z)(He,[["render",H]]),$e=Le;n(2564);var Ye=n(9669),Ke=n.n(Ye),Ge=n(8288),Qe="jwt-token";const Je={namespaced:!0,state:function(){return{token:localStorage.getItem(Qe)}},mutations:{setToken:function(e,t){e.token=t,localStorage.setItem(Qe,t)},logout:function(e){e.token=null,localStorage.removeItem(Qe)}},actions:{login:function(e,t){return(0,$.Z)((0,L.Z)().mark((function n(){var r,a,o,u,s;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyAACvQaDT9iNCTcIA38eGKzAVdFty_m0n8"),n.next=5,Ke().post(o,(0,Se.Z)((0,Se.Z)({},t),{},{returnSecureToken:!0}));case 5:u=n.sent,s=u.data,r("setToken",s.idToken),r("clearMessage",null,{root:!0}),n.next=15;break;case 11:throw n.prev=11,n.t0=n["catch"](1),a("setMessage",{value:(0,Ge.v)(n.t0.response.data.error.message),type:"danger"},{root:!0}),new Error;case 15:case"end":return n.stop()}}),n,null,[[1,11]])})))()}},getters:{token:function(e){return e.token},isAuthenticated:function(e,t){return!!t.token}}};n(1249),n(7941),n(2222);var Xe=Ke().create({baseURL:"https://bank-d3526-default-rtdb.firebaseio.com"});Xe.interceptors.response.use(null,(function(e){return 401===e.response.status&&ut.push("/auth?message=auth"),Promise.reject(e)}));const et=Xe,tt={namespaced:!0,state:function(){return{requests:[]}},mutations:{setRequests:function(e,t){e.requests=t},addRequest:function(e,t){e.requests.push(t)}},actions:{create:function(e,t){return(0,$.Z)((0,L.Z)().mark((function n(){var r,a,o,u,s;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=e.dispatch,n.prev=1,o=rt.getters["auth/token"],n.next=5,et.post("/requests.json?auth=".concat(o),t);case 5:u=n.sent,s=u.data,r("addRequest",(0,Se.Z)((0,Se.Z)({},t),{},{id:s.name})),a("setMessage",{value:"Заявка успешно создана",type:"primary"},{root:!0}),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),a("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 14:case"end":return n.stop()}}),n,null,[[1,11]])})))()},load:function(e){return(0,$.Z)((0,L.Z)().mark((function t(){var n,r,a,o,u,s;return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.dispatch,t.prev=1,a=rt.getters["auth/token"],t.next=5,et.get("/requests.json?auth=".concat(a));case 5:o=t.sent,u=o.data,s=Object.keys(u).map((function(e){return(0,Se.Z)((0,Se.Z)({},u[e]),{},{id:e})})),n("setRequests",s),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),r("setMessage",{value:t.t0.message,type:"danger"},{root:!0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},loadOne:function(e,t){return(0,$.Z)((0,L.Z)().mark((function n(){var r,a,o,u;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,r=e.dispatch,n.prev=1,a=rt.getters["auth/token"],n.next=5,et.get("/requests/".concat(t,".json?auth=").concat(a));case 5:return o=n.sent,u=o.data,n.abrupt("return",u);case 10:n.prev=10,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))()},remove:function(e,t){return(0,$.Z)((0,L.Z)().mark((function n(){var r,a;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=rt.getters["auth/token"],n.next=5,et["delete"]("/requests/".concat(t,".json?auth=").concat(a));case 5:r("setMessage",{value:"Заявка удалена",type:"primary"},{root:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},update:function(e,t){return(0,$.Z)((0,L.Z)().mark((function n(){var r,a;return(0,L.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.prev=1,a=rt.getters["auth/token"],n.next=5,et.put("/requests/".concat(t.id,".json?auth=").concat(a),t);case 5:r("setMessage",{value:"Заявка обновлена",type:"primary"},{root:!0}),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),r("setMessage",{value:n.t0.message,type:"danger"},{root:!0});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}},getters:{requests:function(e){return e.requests}}};var nt=[];const rt=(0,m.MT)({plugins:nt,state:function(){return{message:null,sidebar:!1}},mutations:{setMessage:function(e,t){e.message=t},clearMessage:function(e){e.message=null},openSidebar:function(e){e.sidebar=!0},closeSidebar:function(e){e.sidebar=!1}},actions:{setMessage:function(e,t){var n=e.commit;n("setMessage",t),setTimeout((function(){n("clearMessage")}),5e3)}},modules:{auth:Je,request:tt}});var at=[{path:"/",name:"Home",component:$e,meta:{layout:"main",auth:!0}},{path:"/help",name:"Help",component:function(){return n.e(914).then(n.bind(n,7914))},meta:{layout:"main",auth:!0}},{path:"/request/:id",name:"Request",component:function(){return n.e(152).then(n.bind(n,4152))},meta:{layout:"main",auth:!0}},{path:"/auth",name:"Auth",component:function(){return n.e(730).then(n.bind(n,3730))},meta:{layout:"auth",auth:!1}}],ot=(0,u.p7)({history:(0,u.PO)("/"),routes:at,linkActiveClass:"active",linkExactActiveClass:"active"});ot.beforeEach((function(e,t,n){var r=e.meta.auth;r&&rt.getters["auth/isAuthenticated"]?n():r&&!rt.getters["auth/isAuthenticated"]?n("/auth?message=auth"):n()}));const ut=ot;(0,r.ri)(I).use(rt).use(ut).mount("#app")},742:(e,t,n)=>{n.d(t,{A:()=>a});var r=new Intl.NumberFormat("ru-RU",{currency:"RUB",style:"currency"});function a(e){return r.format(e)}},8288:(e,t,n)=>{n.d(t,{v:()=>a});var r={EMAIL_NOT_FOUND:"Такого пользователя не существует",INVALID_PASSWORD:"Неверный пароль",auth:"Пожалуйста, войдите в систему"};function a(e){return r[e]?r[e]:"Неизвестная ошибка"}},7660:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(6252),a={class:"loader"};function o(e,t,n,o,u,s){return(0,r.wg)(),(0,r.iD)("div",a)}const u={};var s=n(3744);const i=(0,s.Z)(u,[["render",o]]),l=i},4988:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(6252),a=n(3577),o={key:0,class:"breadcrumbs"},u=(0,r.Uk)("Вернуться к списку заявок"),s={class:"card"},i={class:"card-title"};function l(e,t,n,l,c,p){var d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n.back?((0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(d,{to:"/",class:"text-white"},{default:(0,r.w5)((function(){return[u]})),_:1})])):(0,r.kq)("",!0),(0,r._)("div",s,[(0,r._)("h1",i,[(0,r.Uk)((0,a.zw)(n.title)+" ",1),(0,r.WI)(e.$slots,"header")]),(0,r.WI)(e.$slots,"default")])],64)}const c={props:{title:{type:String,required:!0},back:{type:Boolean,default:!1}},setup:function(e){document.title="".concat(e.title," | Bank")}};var p=n(3744);const d=(0,p.Z)(c,[["render",l]]),f=d},2416:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(6252),a=n(3577);function o(e,t,n,o,u,s){return(0,r.wg)(),(0,r.iD)("span",{class:(0,a.C_)(["badge",o.className])},(0,a.zw)(o.text),3)}n(6699);var u=n(2262);const s={props:{type:{type:String,required:!0,validator:function(e){return["active","cancelled","done","pending"].includes(e)}}},setup:function(e){var t={active:"primary",cancelled:"danger",done:"primary",pending:"warning"},n={active:"Активен",cancelled:"Отменен",done:"Завершен",pending:"Выполняется"};(0,r.YP)(e,(function(e){a.value=t[e.type],o.value=n[e.type]}));var a=(0,u.iH)(t[e.type]),o=(0,u.iH)(n[e.type]);return{className:a,text:o}}};var i=n(3744);const l=(0,i.Z)(s,[["render",o]]),c=l}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var u=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],s=!0,i=0;i<r.length;i++)(!1&o||u>=o)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(s=!1,o<u&&(u=o));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{152:"cd0b4b84",730:"718aac62",914:"f233c7fc"}[e]+".js"})(),(()=>{n.miniCssF=e=>{}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="vue-practice-app:";n.l=(r,a,o,u)=>{if(e[r])e[r].push(a);else{var s,i;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var p=l[c];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+o){s=p;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var d=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(n))),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),i&&document.head.appendChild(s)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p="/"})(),(()=>{var e={143:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var u=n.p+n.u(t),s=new Error,i=r=>{if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+u+")",s.name="ChunkLoadError",s.type=o,s.request=u,a[1](s)}};n.l(u,i,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[u,s,i]=r,l=0;if(u.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(i)var c=i(n)}for(t&&t(r);l<u.length;l++)o=u[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunkvue_practice_app"]=self["webpackChunkvue_practice_app"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(6036)));r=n.O(r)})();
//# sourceMappingURL=app.b2844446.js.map