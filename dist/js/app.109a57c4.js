(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"099b":function(t,e,n){t.exports=n.p+"img/facebook.07f7b1ea.png"},1838:function(t,e,n){t.exports=n.p+"img/Arrow_L.9d671e87.svg"},"44f0":function(t,e,n){t.exports=n.p+"img/Arrow_R.0415d2c7.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],o={name:"App"},s=o,c=n("2877"),l=Object(c["a"])(s,a,i,!1,null,null,null),d=l.exports,u=n("4af9"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body"},[r("div",{staticClass:"canvasBackground"},[r("canvas",{attrs:{id:"BackgroundCanvas",width:"100vw",height:"100vh"}})]),r("div",{staticClass:"btns"},[r("img",{staticClass:"imgArrow",attrs:{src:n("1838"),id:"Arrow_L",alt:""}}),r("input",{attrs:{type:"radio",name:"view",onclick:"window.location.href='#sec1'",id:"btn1"}}),r("input",{attrs:{type:"radio",name:"view",onclick:"window.location.href='#sec2'",id:"btn2"}}),r("img",{staticClass:"imgArrow",attrs:{src:n("44f0"),id:"Arrow_R",alt:""}})]),r("div",{staticClass:"sections"},[r("section",{attrs:{id:"sec1"}},[r("div",{staticClass:"parent"},[r("div",{staticClass:"child"},[r("h1",[t._v("WELCOME")]),r("p",[t._v("I'm David Diaz, if you want to know more about me, I invite you to explore my website")])])])]),r("section",{attrs:{id:"sec2"}},[r("div",{staticClass:"parent"},[r("div",{staticClass:"child"},[r("h1",[t._v("ABOUT ME")]),r("p",[t._v("I am a novice developer, my experience is due to personal practice projects, in addition to some courses that I have taken. "),r("br"),t._v(" I have experience in fields such as: back-end, front-end, database, using javascript as a programming language, "),r("br"),t._v(" I have also developed Java applications with the Eclipse environment as course projects at the university. "),r("br"),t._v(" I have experience with technologies such as: Git, Boostrap, Node.Js, Vue.Js, PostgreSQL, MySQL")]),r("div",{staticClass:"socialNetworks"},[r("a",{attrs:{href:"https://www.facebook.com/daivdiz",target:"_blank"}},[r("img",{attrs:{src:n("099b"),alt:""}})]),r("a",{attrs:{href:"https://twitter.com/daivdiz",target:"_blank"}},[r("img",{attrs:{src:n("ea17"),alt:""}})]),r("a",{attrs:{href:"https://github.com/daivdiz",target:"_blank"}},[r("img",{attrs:{src:n("e656"),alt:""}})]),r("a",{attrs:{href:"https://www.linkedin.com/in/daivdiz",target:"_blank"}},[r("img",{attrs:{src:n("e0e8"),alt:""}})]),r("a",{attrs:{href:"https://www.instagram.com/daivdiz/",target:"_blank"}},[r("img",{attrs:{src:n("8dc5"),alt:""}})])])])])])])])}],v=(n("d3b7"),n("25f0"),{mounted:function(){var t=document.getElementsByTagName("input"),e=document.getElementsByTagName("section"),n=1,r=document.getElementById("Arrow_L"),a=document.getElementById("Arrow_R");location.href="#sec1",t[0].checked="true",window.addEventListener("keydown",(function(t){39===t.keyCode&&p("+"),37===t.keyCode&&p("-")})),r.addEventListener("click",(function(){p("-")})),a.addEventListener("click",(function(){p("+")}));var i=document.getElementById("BackgroundCanvas"),o=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;var s=i.width,c=i.height,l=function(){o.lineWidth=1,o.fillStyle="black",o.fillRect(0,0,s,c);for(var t=-200;t<180;t+=c/100){o.strokeStyle="rgba(255,125,0,0.8)",o.beginPath(),o.moveTo(0,c/2);for(var e=-s;e<s;e+=s/200)o.lineTo(5*Math.cos(t)+e+1*e,Math.floor(c/2+e/2*Math.cos(e/50-d/50-t/118)+.9*t*Math.cos(e/25-(t+d)/65)));o.stroke()}},d=0,u=function t(){window.requestAnimationFrame(t),d+=5,l()};function p(r){"+"==r&&n++,"-"==r&&n--,n>e.length&&(n=1),n<1&&(n=e.length),t[n-1].checked="true",location.href="#sec"+n.toString()}u()}}),h=v,g=Object(c["a"])(h,p,f,!1,null,null,null),m=g.exports;r["a"].use(u["a"]);var w=[{path:"/",name:["Index"],component:m}],b=new u["a"]({mode:"history",routes:w}),y=b;r["a"].config.productionTip=!0,new r["a"]({router:y,render:function(t){return t(d)}}).$mount("#app")},"8dc5":function(t,e,n){t.exports=n.p+"img/instagram.61755bd6.png"},e0e8:function(t,e,n){t.exports=n.p+"img/linkedin.b21d888f.png"},e656:function(t,e,n){t.exports=n.p+"img/github.0a423a64.png"},ea17:function(t,e,n){t.exports=n.p+"img/twitter.0921f738.png"}});
//# sourceMappingURL=app.109a57c4.js.map