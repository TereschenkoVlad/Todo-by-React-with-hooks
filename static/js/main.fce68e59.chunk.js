(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(55)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),i=a.n(r),s=(a(36),a(37),function(e){return c.a.createElement("header",null,c.a.createElement("h1",null,e.name))}),l=(a(38),a(13)),o=(a(39),a(10)),u=a(11),p=a(12),m=a(7),d=a(25),E=a(28),h=a.n(E),v=a(6),f=[{id:1,value:"Test Shop",isEdit:!1,isChecked:!1,price:NaN}],b=a(14),k=a.n(b),y="_CHANGE_STATE_PROP",N="_PUSH_STATE_PROP",C="_SAVE_EDITED_STATE_PROP",S="_SPLICE_STATE_PROP";function T(e,t,a){return x.dispatch({type:a.toUpperCase()+N,state:{prop:e,value:t}})}function g(e,t,a){return x.dispatch({type:a.toUpperCase()+S,state:{prop:e,value:t}})}function O(e,t,a,n,c){return x.dispatch({type:c.toUpperCase()+C,state:{prop:e,value:t,index:a,itemProp:n}})}var w="TASKS",A={tasks:[{id:1,value:"Learn JS",isEdit:!1,isChecked:!1},{id:2,value:"Learn Drupal",isEdit:!1,isChecked:!1},{id:3,value:"do nothing",isEdit:!1,isChecked:!1},{id:4,value:"Learn PHP",isEdit:!1,isChecked:!1}],filterType:"All",shoppingList:f};var j=Object(m.b)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,a=t.state&&t.state.value?t.state.value:"",n=t.state&&t.state.prop?t.state.prop:"";switch(t.type){case w+y:return k()(e,Object(v.a)({},n,{$set:a}));case w+N:return k()(e,Object(v.a)({},n,{$unshift:[a]}));case w+S:return k()(e,Object(v.a)({},n,{$splice:[[a,1]]}));case w+C:var c=t.state.index,r=t.state.itemProp,i=e[n][c],s=k()(i,Object(v.a)({},r,{$set:a}));return k()(e,Object(v.a)({},n,{$splice:[[c,1,s]]}));default:return e}}}),_={key:"root",storage:h.a},L=Object(d.a)(_,j),P=Object(m.c)(L,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),x=P,F=(Object(d.b)(P),function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(0),m=Object(l.a)(s,2),d=m[0],E=m[1],h=Object(n.useState)({isActive:!1,index:NaN}),v=Object(l.a)(h,2),f=v[0],b=v[1],k="standard"===e.type?function(e){return e.tasks.tasks}:function(e){return e.tasks.shoppingList},y=Object(o.b)(k),N=Object(o.b)(function(e){return e.tasks.filterType}),C=function(t){"standard"===e.type?g("tasks",t,"TASKS"):g("shoppingList",t,"TASKS")},S=function(t,a,n){y.forEach(function(c,r){r===a&&(c.isEdit=!c.isEdit,i(t.value),E(t.price),n&&"standard"===e.type?O("tasks",n,a,"value","TASKS"):n&&"standard"!==e.type&&O("shoppingList",n,a,"value","TASKS"),d&&O("shoppingList",d,a,"price","TASKS"))})},T=function(t,a){y.forEach(function(n,c){c===a&&("standard"===e.type?O("tasks",!t.isChecked,a,"isChecked","TASKS"):O("shoppingList",!t.isChecked,a,"isChecked","TASKS"))})},w=function(e,t){return c.a.createElement("div",{className:"icon-cont"},c.a.createElement("span",{className:"edit",onClick:function(){return S(e,t)}},c.a.createElement(u.a,{icon:p.b})),c.a.createElement("span",{className:"remove-item",onClick:function(){return C(t)}},c.a.createElement(u.a,{icon:p.d})),c.a.createElement("div",{className:"switch"},c.a.createElement("input",{type:"checkbox",defaultChecked:e.isChecked,onClick:function(){return T(e,t)},id:"isCompleted-"+t,className:"switch-input"}),c.a.createElement("label",{htmlFor:"isCompleted-"+t,className:"switch-label"},"Switch")))},A=function(t,a){return c.a.createElement("div",{key:a,className:"item"},c.a.createElement("div",{className:"item-left-cont"},c.a.createElement("span",{className:t.isChecked?"number checked":"number"},a+1),t.isEdit?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)}})," ","standard"!==e.type?c.a.createElement("input",{type:"number",className:"edit-price",value:d,onChange:function(e){return E(e.target.value)}}):null," "):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:t.isChecked?"checked":""},t.value)," ","standard"!==e.type?c.a.createElement("p",{className:"price"},"".concat((t.price?t.price:0)+" \u0433\u0440\u043d.")):null," ")),t.isEdit?c.a.createElement("button",{className:"save",onClick:function(){return S(t,a,r)}},"Save"):c.a.createElement(c.a.Fragment,null,t.isChecked?c.a.createElement("div",{className:"icon-cont-small"},c.a.createElement("span",{className:"remove-item",onClick:function(){return C(a)}},c.a.createElement(u.a,{icon:p.d})),c.a.createElement("div",{className:"switch"},c.a.createElement("input",{type:"checkbox",defaultChecked:t.isChecked,onClick:function(){return T(t,a)},id:"isCompleted-"+a,className:"switch-input"}),c.a.createElement("label",{htmlFor:"isCompleted-"+a,className:"switch-label"},"Switch"))):window.innerWidth>540?c.a.createElement(c.a.Fragment,null,w(t,a)):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"menu-item",onClick:function(){return function(e){b({isActive:!f.isActive,index:e})}(a)}},c.a.createElement(u.a,{icon:p.c})),f.isActive&&f.index===a&&c.a.createElement("div",{className:"modal-menu-cont"},w(t,a)))))};return c.a.createElement("div",{className:"items-container  ".concat("standard"!==e.type?"shopping-list":"")},y&&y.map(function(e,t){switch(N){case"Active":return e.isChecked?null:A(e,t);case"Completed":return e.isChecked?A(e,t):null;default:return A(e,t)}}),"standard"!==e.type&&c.a.createElement("div",{className:"total-result"},c.a.createElement("span",{className:"total-price-label"},"Total:"),c.a.createElement("span",{className:"total-price-number"},"".concat(function(){var e=0;return y.forEach(function(t){var a=t.price?t.price:0;switch(N){case"Active":t.isChecked||(e+=parseFloat(a));break;case"Completed":t.isChecked&&(e+=parseFloat(a));break;default:e+=parseFloat(a)}}),e}()+" \u0433\u0440\u043d."))))}),D=a(29),K=(a(50),function(e){var t="standard"===e.type?{isEdit:!1,isChecked:!1,value:"",id:Math.random()}:{isEdit:!1,isChecked:!1,value:"",price:NaN,id:Math.random()},a=Object(n.useState)(t),r=Object(l.a)(a,2),i=r[0],s=r[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),p=u[0],m=u[1],d=function(e,t){i.value&&m(!1),s(Object(D.a)({},i,Object(v.a)({},e,t)))};return c.a.createElement("div",{className:"add-item"},c.a.createElement("div",{className:"standard"===e.type?"standard":"shopping-list-new"},c.a.createElement("span",null,"New item: "),"standard"!==e.type?c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",className:p?"error":"",onChange:function(e){return d("value",e.target.value)},value:i.value,placeholder:"Name"}),c.a.createElement("input",{type:"number",className:"".concat(p?"price-input error":"price-input"),placeholder:"Price",value:isNaN(i.price)?"":i.price,onChange:function(e){return d("price",e.target.value)}})):c.a.createElement("input",{type:"text",className:p?"error":"",onChange:function(e){return d("value",e.target.value)},value:i.value})),c.a.createElement("button",{className:"green-button",onClick:function(){var t,a;i.value&&i.price&&"standard"!==e.type?(t="price",a="",i.value&&i.price&&m(!1),s(Object(v.a)({isEdit:!1,isChecked:!1,value:"",id:Math.random()},t,a)),T("shoppingList",i,"TASKS")):i.value&&!i.price&&"standard"===e.type?(T("tasks",i,"TASKS"),d("value","")):m(!0)}},"Add +"))}),R=(a(51),function(e){var t=Object(o.b)(function(e){return e.tasks.filterType})===e.buttonType;return c.a.createElement("div",{className:"filter-button"},c.a.createElement("input",{onChange:function(){var t,a,n;t="filterType",a=e.buttonType,n="TASKS",x.dispatch({type:n.toUpperCase()+y,state:{prop:t,value:a}})},checked:t,type:"radio",className:"filter-point",id:e.buttonType}),c.a.createElement("label",{htmlFor:e.buttonType,className:t?"filter-item-label active":"filter-item-label"},c.a.createElement(u.a,{icon:p.a}),e.buttonType))}),U=(a(52),function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"buttons-container"},c.a.createElement(R,{buttonType:"All"}),c.a.createElement(R,{buttonType:"Active"}),c.a.createElement(R,{buttonType:"Completed"})))}),$=a(17),I=Object(n.memo)(function(e){return c.a.createElement("div",{className:"toto-wrapper"},c.a.createElement(K,{type:e.type}),c.a.createElement(U,null),c.a.createElement(F,{type:e.type}),"standard"===e.type?c.a.createElement($.b,{to:"/shopping-list"},"Shopping List"):c.a.createElement($.b,{to:"/"},"ToDo List"))}),X=(a(54),a(9));var H=function(){return c.a.createElement("div",{className:"App"},c.a.createElement($.a,{basename:"/Todo-by-React-with-hooks"},c.a.createElement(X.c,null,c.a.createElement(X.a,{exact:!0,path:"/"},c.a.createElement(s,{name:"ToDo On Every Day"}),c.a.createElement(I,{type:"standard"})),c.a.createElement(X.a,{exact:!0,path:"/shopping-list"},c.a.createElement(s,{name:"Shopping List On Every Day"}),c.a.createElement(I,{type:"shopping"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(o.a,{store:P},c.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.fce68e59.chunk.js.map