(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{41:function(e,t,s){"use strict";s.r(t);var n=s(2),r=s(12),c=s.n(r),a=s(13),o=s(14),l=s(17),i=s(16),j=s(0),d=function(e){var t=e.sortedEmployees;return Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",children:"Profile Image"}),Object(j.jsx)("th",{scope:"col",children:"Name"}),Object(j.jsx)("th",{scope:"col",children:"Phone"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Birth Date"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"row",children:Object(j.jsx)("img",{src:e.picture.large,alt:""})}),Object(j.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(j.jsx)("td",{children:e.phone}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:e.dob.date})]},t)}))})]})},h=s(15),u=s.n(h),b=function(e){Object(l.a)(s,e);var t=Object(i.a)(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={sortState:"",employees:[]},n}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://randomuser.me/api/?results=50").then((function(t){var s=t.data.results;e.setState({sortState:"asc",employees:s})}))}},{key:"handleClick",value:function(){var e=this.state.sortState,t=this.state.employees;switch(e){case"asc":var s=t.sort((function(e,t){return e.name.last>t.name.last?1:-1}));return console.log("descSort",s),console.log("sortstate",e),this.setState({sortState:"desc",employees:s});case"desc":var n=t.sort((function(e,t){return t.name>e.name?1:-1}));return console.log("ascsort",n),console.log(e),this.setState({sortState:"asc",employees:n});default:return this.setState({sortState:"desc",employees:t})}}},{key:"renderButtons",value:function(){switch(this.state.sortState){case"asc":return Object(j.jsx)("i",{className:"fas fa-arrow-up"});case"desc":return Object(j.jsx)("i",{className:"fas fa-arrow-down"});case"none":return Object(j.jsx)("span",{children:Object(j.jsx)("b",{children:"--"})})}}},{key:"renderAZ",value:function(){var e=this;return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h4",{children:"Filter by Age"}),Object(j.jsx)("button",{className:"btn btn-link",onClick:function(t){return e.handleFilter(t)},children:"Under 40"})]})}},{key:"handleFilter",value:function(e){var t=e.currentTarget.dataset.id,s=this.state.employees;if(console.log("hit",t),"reset"===t)return window.location.reload();var n=s.filter((function(e){if(parseInt(e.dob.age)<=39)return e}));this.setState({employees:n})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("nav",{className:"navbar bg-light",children:[Object(j.jsx)("h1",{children:"Employee Directory"}),Object(j.jsxs)("button",{className:"btn btn-secondary",onClick:function(){return e.handleClick()},children:[Object(j.jsx)("b",{children:"Sort by Name"})," ",this.renderButtons()]}),this.renderAZ()]}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(d,{sortedEmployees:this.state.employees})})]})}}]),s}(n.Component),m=function(e){var t=e.sortState,s=e.employees;return Object(j.jsxs)("div",{children:[Object(j.jsx)(b,{sortState:t,employees:s}),Object(j.jsx)("div",{className:"container"})]})},p=function(){return Object(j.jsx)(m,{})};c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e3aa835e.chunk.js.map