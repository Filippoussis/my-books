(this["webpackJsonpmy-books"]=this["webpackJsonpmy-books"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,o){},,function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){},function(t,e,o){"use strict";o.r(e);var a=o(1),n=o.n(a),c=o(9),r=o.n(c),i=o(7),s=o(3),l=o(6),b=(o(14),o(0));function u(t){var e=t.item,o=t.deleteBook,a=e.id,n=e.title,c=e.author;return Object(b.jsxs)("article",{className:"book",children:[Object(b.jsx)("div",{className:"book__cover"}),Object(b.jsxs)("div",{className:"book__info",children:[Object(b.jsx)("h3",{className:"book__title",children:n}),Object(b.jsx)("h3",{className:"book__author",children:c}),Object(b.jsx)("button",{type:"button",className:"book__button",onClick:function(){return o(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})}u.defaultProps={item:{}};var j=u;o(16);function d(t){var e=t.books,o=t.deleteBook,a=e.map((function(t){return Object(b.jsx)("li",{className:"book-list__item",children:Object(b.jsx)(j,{item:t,deleteBook:o})},t.id)}));return Object(b.jsx)("ul",{className:"book-list","data-testid":"book-list",children:a})}d.defaultProps={books:[]};var m=d,O=o(5);o(17);var h=function(t){var e=t.addBook,o=Object(a.useState)({title:"",author:""}),n=Object(l.a)(o,2),c=n[0],r=n[1],i=function(t){var e=t.target,o=e.value,a=e.name;r((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(O.a)({},a,o))}))},u=c.title,j=c.author;return Object(b.jsxs)("form",{className:"add-form",onSubmit:function(t){t.preventDefault(),e(c),r({title:"",author:""})},children:[Object(b.jsxs)("label",{htmlFor:"book-title",children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",Object(b.jsx)("input",{type:"text",id:"book-title",name:"title",value:u,onChange:i,required:!0})]}),Object(b.jsxs)("label",{htmlFor:"book-author",children:["\u0410\u0432\u0442\u043e\u0440",Object(b.jsx)("input",{type:"text",id:"book-author",name:"author",value:j,onChange:i,required:!0})]}),Object(b.jsx)("button",{type:"submit",className:"add-form__button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u043e\u043b\u043a\u0443"})]})},k=(o(18),100);var f,v=function(){var t,e=null!==(t=JSON.parse(localStorage.getItem("books")))&&void 0!==t?t:[],o=Object(a.useState)(e),n=Object(l.a)(o,2),c=n[0],r=n[1];return Object(b.jsxs)("div",{className:"page-content",children:[Object(b.jsx)("h1",{className:"page-title",children:"\u041c\u043e\u044f \u043a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430"}),Object(b.jsx)(m,{books:c,deleteBook:function(t){var e=c.findIndex((function(e){return e.id===t}));r((function(t){var o=[].concat(Object(i.a)(t.slice(0,e)),Object(i.a)(t.slice(e+1)));return localStorage.removeItem("books"),localStorage.setItem("books",JSON.stringify(o)),o}))}}),Object(b.jsx)(h,{addBook:function(t){var e=Object(s.a)({id:k++},t);r((function(t){var o=[].concat(Object(i.a)(t),[e]);return localStorage.removeItem("books"),localStorage.setItem("books",JSON.stringify(o)),o}))}})]})};o(19);null===(null!==(f=localStorage.getItem("books"))&&void 0!==f?f:null)&&localStorage.setItem("books",JSON.stringify([{id:1,title:"\u0410\u0439\u0432\u0435\u043d\u0433\u043e",author:"\u0412\u0430\u043b\u044c\u0442\u0435\u0440 \u0421\u043a\u043e\u0442\u0442"},{id:2,title:"\u041d\u0430\u0434 \u043f\u0440\u043e\u043f\u0430\u0441\u0442\u044c\u044e \u0432\u043e \u0440\u0436\u0438",author:"\u0414\u0436. \u0414. \u0421\u044d\u043b\u0438\u043d\u0434\u0436\u0435\u0440"}])),r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.ccfb642c.chunk.js.map