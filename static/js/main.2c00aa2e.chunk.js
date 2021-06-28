(this["webpackJsonpproject-rick-"]=this["webpackJsonpproject-rick-"]||[]).push([[0],{23:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(24),s=a.n(r),i=(a(34),a(35),a(36),a(37),a(7)),o=a.n(i),j=a(9),l=a(21),u=(a(39),a(1));var h,b=function(e){var t=e.character;return Object(u.jsx)("div",{className:"character-name",children:Object(u.jsx)("h2",{children:t.name})})},d=a(13),x=(a(41),a(14)),m=x.a.img(h||(h=Object(d.a)(["\n  max-width: 100%;\n  border-radius: 50%;\n"])));var O=function(e){var t=e.character;return Object(u.jsx)(m,{src:t.image,alt:t.name})};a(44);var p=function(e){var t=e.character;return Object(u.jsxs)("div",{className:"character-labels",children:[Object(u.jsxs)("h3",{className:"character-label",children:["G\xe9nero: ",t.gender]}),Object(u.jsxs)("h3",{className:"character-label",children:["Especie: ",t.species]}),Object(u.jsxs)("h3",{className:"character-label",children:["Status: ",t.status]})]})};a(45);var f=function(e){var t=e.character;return Object(u.jsx)("div",{className:"placeholder-container",children:Object(u.jsx)("h1",{id:"character-name-placeholder",className:"character-name-placeholder",children:t.name})})};a(46),a(47);var v=function(){return Object(u.jsxs)("div",{className:"social",children:[Object(u.jsx)("a",{href:"https://instagram.com/LeonidasEsteban",children:Object(u.jsx)("img",{src:"./images/instagram.svg",alt:"logo de instagram"})}),Object(u.jsx)("a",{href:"https://facebook.com/LeonidasEsteban",children:Object(u.jsx)("img",{src:"./images/facebook.svg",alt:"logo de facebook"})}),Object(u.jsx)("a",{href:"https://twitter.com/LeonidasEsteban",children:Object(u.jsx)("img",{src:"./images/twitter.svg",alt:"logo de twitter"})})]})};a(23);var g=function(){return Object(u.jsxs)("span",{className:"asset top",children:[Object(u.jsx)("span",{className:"dot"}),Object(u.jsx)("span",{className:"dot"}),Object(u.jsx)("span",{className:"dot"}),Object(u.jsx)("span",{className:"line"})]})};a(48);var N=function(){return Object(u.jsx)("img",{className:"logo",src:"./images/logo@2x.png",width:"280",alt:"logo"})};var k,w=function(){return Object(u.jsxs)("span",{className:"asset bottom",children:[Object(u.jsx)("span",{className:"line"}),Object(u.jsx)("span",{className:"dot"}),Object(u.jsx)("span",{className:"dot"}),Object(u.jsx)("span",{className:"dot"})]})},y=x.a.a(k||(k=Object(d.a)(["\n  text-decoration: none;\n  color: black;\n  font-size: 25px;\n  text-transform: uppercase;\n"])));var C=function(e){var t=e.url,a=e.text;return Object(u.jsx)(y,{href:t,children:a})};var E=function(e){var t=e.name,a=e.image,n=e.description,r=(e.setInputValue,e.next);return Object(c.useRef)(null),Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsx)(g,{}),Object(u.jsx)(N,{}),Object(u.jsx)(v,{}),Object(u.jsx)("div",{className:"navigation name",children:Object(u.jsx)(C,{url:"#",text:"name"})}),Object(u.jsx)("div",{id:"character-name-container",className:"character-name-container",children:t}),Object(u.jsx)("div",{id:"character-image-container",className:"character-image-container",children:a}),Object(u.jsx)("div",{className:"navigation about",children:Object(u.jsx)(C,{url:"#",text:"about"})}),Object(u.jsx)("div",{id:"character-description-container",className:"character-description-container",children:n}),Object(u.jsx)(w,{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{className:"learn-more",children:Object(u.jsx)("span",{children:"learn more"})}),r]})},I=(a(49),Object(c.createContext)({})),L=a(28),S=a(29),F=new(function(){function e(){Object(L.a)(this,e)}return Object(S.a)(e,[{key:"getCharacter",value:function(){var e=Object(j.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),V=a(18),P=a.n(V),B=a(2);var J=function(){var e=Object(c.useContext)(I),t=Object(B.f)();function a(){return(a=Object(j.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return P.a.start(),t.push("".concat("/rick-and-morty-react","/").concat(e.character.id+1)),a.t0=e,a.next=5,F.getCharacter(e.character.id+1);case 5:a.t1=a.sent,a.t0.setCharacter.call(a.t0,a.t1),P.a.done();case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"arrow",id:"load-next",onClick:function(){return a.apply(this,arguments)}})};var T=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(l.a)(a,2),r=n[0],s=n[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,F.getCharacter(t.params.id||1);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.params.id]);var i=Object(c.useState)(1),h=Object(l.a)(i,2),d=h[0],x=h[1];return Object(u.jsxs)(I.Provider,{value:{character:r,setCharacter:s},children:[Object(u.jsx)(f,{character:r}),Object(u.jsx)(E,{setInputValue:x,name:Object(u.jsx)(b,{character:r}),image:Object(u.jsx)(O,{character:r}),description:Object(u.jsx)(p,{character:r}),next:Object(u.jsx)(J,{character:r,inputValue:d,setInputValue:x})})]})},z=a(17);var D=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(z.a,{children:Object(u.jsxs)(B.c,{children:[Object(u.jsx)(B.a,{path:"".concat("/rick-and-morty-react","/"),exact:!0,component:T}),Object(u.jsx)(B.a,{path:"".concat("/rick-and-morty-react","/:id"),exact:!0,component:T})]})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),G()}},[[54,1,2]]]);
//# sourceMappingURL=main.2c00aa2e.chunk.js.map