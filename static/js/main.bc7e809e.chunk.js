(this["webpackJsonpproject-rick-"]=this["webpackJsonpproject-rick-"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(13),s=a.n(r),i=(a(23),a(2)),o=a.n(i),j=a(3),l=a(10),u=(a(25),a(26),a(14)),h=a(15),b=new(function(){function e(){Object(u.a)(this,e)}return Object(h.a)(e,[{key:"getCharacter",value:function(){var e=Object(j.a)(o.a.mark((function e(t){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://rickandmortyapi.com/api/character/".concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),d=(a(27),a(0));var x,m=function(e){var t=e.character;return Object(d.jsx)("div",{className:"character-name",children:Object(d.jsx)("h2",{children:t.name})})},O=a(4),p=(a(29),a(5)),f=p.a.img(x||(x=Object(O.a)(["\n  max-width: 100%;\n  border-radius: 50%;\n"])));var v=function(e){var t=e.character;return Object(d.jsx)(f,{src:t.image,alt:t.name})};a(32);var g=function(e){var t=e.character;return Object(d.jsxs)("div",{className:"character-labels",children:[Object(d.jsxs)("h3",{className:"character-label",children:["G\xe9nero: ",t.gender]}),Object(d.jsxs)("h3",{className:"character-label",children:["Especie: ",t.species]}),Object(d.jsxs)("h3",{className:"character-label",children:["Status: ",t.status]})]})};a(33);var N=function(e){var t=e.character;return Object(d.jsx)("div",{className:"placeholder-container",children:Object(d.jsx)("h1",{id:"character-name-placeholder",className:"character-name-placeholder",children:t.name})})};a(34),a(35);var w=function(){return Object(d.jsxs)("div",{className:"social",children:[Object(d.jsx)("a",{href:"https://instagram.com/LeonidasEsteban",children:Object(d.jsx)("img",{src:"./images/instagram.svg",alt:"logo de instagram"})}),Object(d.jsx)("a",{href:"https://facebook.com/LeonidasEsteban",children:Object(d.jsx)("img",{src:"./images/facebook.svg",alt:"logo de facebook"})}),Object(d.jsx)("a",{href:"https://twitter.com/LeonidasEsteban",children:Object(d.jsx)("img",{src:"./images/twitter.svg",alt:"logo de twitter"})})]})};a(12);var k=function(){return Object(d.jsxs)("span",{className:"asset top",children:[Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"line"})]})};a(36);var C=function(){return Object(d.jsx)("img",{className:"logo",src:"./images/logo@2x.png",width:"280",alt:"logo"})};var y,E=function(){return Object(d.jsxs)("span",{className:"asset bottom",children:[Object(d.jsx)("span",{className:"line"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"}),Object(d.jsx)("span",{className:"dot"})]})},I=p.a.a(y||(y=Object(O.a)(["\n  text-decoration: none;\n  color: black;\n  font-size: 25px;\n  text-transform: uppercase;\n"])));var V=function(e){var t=e.url,a=e.text;return Object(d.jsx)(I,{href:t,children:a})};var L=function(e){var t=e.name,a=e.image,n=e.description,r=(e.setInputValue,e.next);return Object(c.useRef)(null),Object(d.jsxs)("div",{className:"grid",children:[Object(d.jsx)(k,{}),Object(d.jsx)(C,{}),Object(d.jsx)(w,{}),Object(d.jsx)("div",{className:"navigation name",children:Object(d.jsx)(V,{url:"#",text:"name"})}),Object(d.jsx)("div",{id:"character-name-container",className:"character-name-container",children:t}),Object(d.jsx)("div",{id:"character-image-container",className:"character-image-container",children:a}),Object(d.jsx)("div",{className:"navigation about",children:Object(d.jsx)(V,{url:"#",text:"about"})}),Object(d.jsx)("div",{id:"character-description-container",className:"character-description-container",children:n}),Object(d.jsx)(E,{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{className:"learn-more",children:Object(d.jsx)("span",{children:"learn more"})}),r]})},S=(a(37),Object(c.createContext)({})),F=a(9),P=a.n(F);var B=function(e){e.inputValue,e.setInputValue;var t=Object(c.useContext)(S);function a(){return(a=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.a.start(),e.t0=t,e.next=4,b.getCharacter(t.character.id+1);case 4:e.t1=e.sent,e.t0.setCharacter.call(e.t0,e.t1),P.a.done();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"arrow",id:"load-next",onClick:function(){return a.apply(this,arguments)}})};a(38);var J=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),s=Object(l.a)(r,2),i=s[0],u=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:2,e.t0=n,e.next=4,b.getCharacter(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(i)}),[i]),Object(d.jsxs)(S.Provider,{value:{character:a,setCharacter:n},children:[Object(d.jsx)(N,{character:a}),Object(d.jsx)(L,{setInputValue:u,name:Object(d.jsx)(m,{character:a}),image:Object(d.jsx)(v,{character:a}),description:Object(d.jsx)(g,{character:a}),next:Object(d.jsx)(B,{character:a,inputValue:i,setInputValue:u})})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,40)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(J,{})}),document.getElementById("root")),T()}],[[39,1,2]]]);
//# sourceMappingURL=main.bc7e809e.chunk.js.map