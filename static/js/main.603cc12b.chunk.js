(this["webpackJsonpproject-rick-"]=this["webpackJsonpproject-rick-"]||[]).push([[0],{23:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(24),s=a.n(r),i=(a(34),a(35),a(36),a(7)),o=a.n(i),j=a(9),l=a(25),u=a(26),h=new(function(){function e(){Object(l.a)(this,e)}return Object(u.a)(e,[{key:"getCharacter",value:function(){var e=Object(j.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),b=(a(38),a(21)),d=(a(39),a(1));var x,m=function(e){var t=e.character;return Object(d.jsx)("div",{className:"character-name",children:Object(d.jsx)("h2",{children:t.name})})},O=a(13),p=(a(41),a(14)),f=p.a.img(x||(x=Object(O.a)(["\n  max-width: 100%;\n  border-radius: 50%;\n"])));var v=function(e){var t=e.character;return Object(d.jsx)(f,{src:t.image,alt:t.name})};a(44);var g=function(e){var t=e.character;return Object(d.jsxs)("div",{className:"character-labels",children:[Object(d.jsxs)("h3",{className:"character-label",children:["G\xe9nero: ",t.gender]}),Object(d.jsxs)("h3",{className:"character-label",children:["Especie: ",t.species]}),Object(d.jsxs)("h3",{className:"character-label",children:["Status: ",t.status]})]})};a(45);var N=function(e){var t=e.character;return Object(d.jsx)("div",{className:"placeholder-container",children:Object(d.jsx)("h1",{id:"character-name-placeholder",className:"character-name-placeholder",children:t.name})})};a(46),a(47);var w=function(){return Object(d.jsxs)("div",{className:"social",children:[Object(d.jsx)("a",{href:"https://instagram.com/LeonidasEsteban",children:Object(d.jsx)("img",{src:"./images/instagram.svg",alt:"logo de instagram"})}),Object(d.jsx)("a",{href:"https://facebook.com/LeonidasEsteban",children:Object(d.jsx)("img",{src:"./images/facebook.svg",alt:"logo de facebook"})}),Object(d.jsx)("a",{href:"https://twitter.com/LeonidasEsteban",children:Object(d.jsx)("img",{src:"./images/twitter.svg",alt:"logo de twitter"})})]})};a(23);var k=function(){return Object(d.jsxs)("span",{className:"asset top",children:[Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"line"})]})};a(48);var C=function(){return Object(d.jsx)("img",{className:"logo",src:"./images/logo@2x.png",width:"280",alt:"logo"})};var y,E=function(){return Object(d.jsxs)("span",{className:"asset bottom",children:[Object(d.jsx)("span",{className:"line"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"})]})},I=p.a.a(y||(y=Object(O.a)(["\n  text-decoration: none;\n  color: black;\n  font-size: 25px;\n  text-transform: uppercase;\n"])));var V=function(e){var t=e.url,a=e.text;return Object(d.jsx)(I,{href:t,children:a})};var L=function(e){var t=e.name,a=e.image,n=e.description,r=(e.setInputValue,e.next);return Object(c.useRef)(null),Object(d.jsxs)("div",{className:"grid",children:[Object(d.jsx)(k,{}),Object(d.jsx)(C,{}),Object(d.jsx)(w,{}),Object(d.jsx)("div",{className:"navigation name",children:Object(d.jsx)(V,{url:"#",text:"name"})}),Object(d.jsx)("div",{id:"character-name-container",className:"character-name-container",children:t}),Object(d.jsx)("div",{id:"character-image-container",className:"character-image-container",children:a}),Object(d.jsx)("div",{className:"navigation about",children:Object(d.jsx)(V,{url:"#",text:"about"})}),Object(d.jsx)("div",{id:"character-description-container",className:"character-description-container",children:n}),Object(d.jsx)(E,{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{className:"learn-more",children:Object(d.jsx)("span",{children:"learn more"})}),r]})},S=(a(49),Object(c.createContext)({})),F=a(18),P=a.n(F),B=a(2);var J=function(e){e.inputValue,e.setInputValue,e.character;var t=Object(c.useContext)(S),a=Object(B.f)();function n(){return(n=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.a.start(),a.push("".concat(t.character.id+1)),e.t0=t,e.next=5,h.getCharacter(t.character.id+1);case 5:e.t1=e.sent,e.t0.setCharacter.call(e.t0,e.t1),P.a.done();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"arrow",id:"load-next",onClick:function(){return n.apply(this,arguments)}})};var T=function(e){var t=e.match,a=Object(c.useState)({}),n=Object(b.a)(a,2),r=n[0],s=n[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,h.getCharacter(t.params.id||1);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.params.id]);var i=Object(c.useState)(1),l=Object(b.a)(i,2),u=l[0],x=l[1];return Object(d.jsxs)(S.Provider,{value:{character:r,setCharacter:s},children:[Object(d.jsx)(N,{character:r}),Object(d.jsx)(L,{setInputValue:x,name:Object(d.jsx)(m,{character:r}),image:Object(d.jsx)(v,{character:r}),description:Object(d.jsx)(g,{character:r}),next:Object(d.jsx)(J,{character:r,inputValue:u,setInputValue:x})})]})},z=a(17);var D=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(z.a,{children:Object(d.jsxs)(B.c,{children:[Object(d.jsx)(B.a,{path:"/",exact:!0,component:T}),Object(d.jsx)(B.a,{path:"/:id",exact:!0,component:T})]})})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,55)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),G()}},[[54,1,2]]]);
//# sourceMappingURL=main.603cc12b.chunk.js.map