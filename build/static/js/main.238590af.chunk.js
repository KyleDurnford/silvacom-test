(this.webpackJsonpsilvacom=this.webpackJsonpsilvacom||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),r=c.n(s),i=c(2),l=(c(9),c(10),c(0)),j=function(e){var t=e.handleClick;return Object(l.jsx)("div",{className:"cities",children:["Edmonton","Tokyo","New York City","Los Angeles","Mykonos"].map((function(e,c){return Object(l.jsx)("div",{onClick:function(){return t(e)},className:"place",style:{background:"url(../img/"+e.replace(/\s+/g,"")+".jpg) center/cover no-repeat"},children:Object(l.jsx)("h2",{className:"placeTitle",children:e})},c)}))})},o=function(e){Object(a.useEffect)((function(){e.place&&fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.place,"&appid=a7410da00e5141746d511f305afc33ee")).then((function(e){return e.json()})).then((function(e){s(e)}))}),[e]);var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],s=c[1];return n.main?Object(l.jsxs)("div",{className:"weatherInfo",children:[Object(l.jsx)("h2",{className:"weatherTitle",children:"Current Weather"}),Object(l.jsx)("p",{className:"temp",children:Math.round(n.main.temp-273.15)+"\xb0 C"}),Object(l.jsx)("p",{className:"desc",children:n.weather[0].description})]}):Object(l.jsxs)("div",{className:"weatherInfo",children:[Object(l.jsx)("h2",{className:"weatherTitle",children:"Current Weather"}),Object(l.jsx)("p",{className:"temp"}),Object(l.jsx)("p",{className:"desc"})]})},p=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){e.place&&fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&titles=".concat(e.place)).then((function(e){return e.json()})).then((function(e){s(e)}))}),[e]),n.query?Object(l.jsxs)("div",{className:"excerpt",children:[Object(l.jsx)("h2",{className:"excerptTitle",children:e.place}),Object(l.jsx)("p",{className:"excerptInfo",children:n.query.pages[Object.keys(n.query.pages)[0]].extract}),Object(l.jsx)("p",{})]}):Object(l.jsxs)("div",{className:"excerpt",children:[Object(l.jsx)("h2",{className:"excerptTitle",children:"Travel Planner"}),Object(l.jsx)("p",{className:"excerptInfo",children:"Click on a city to learn more!"}),Object(l.jsx)("p",{})]})},h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{handleClick:n}),Object(l.jsxs)("div",{className:"placeInfo",children:[Object(l.jsx)(p,{place:c}),Object(l.jsx)(o,{place:c})]})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.238590af.chunk.js.map