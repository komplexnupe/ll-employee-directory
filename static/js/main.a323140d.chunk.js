(this["webpackJsonpll-employee-directory"]=this["webpackJsonpll-employee-directory"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"userId":"krish","jobTitle":"Developer","firstName":"Krish","lastName":"Lee","employeeCode":"E1","region":"NC","phoneNumber":"555-4293","emailAddress":"krish.lee@lovedev.com"},{"userId":"devid","jobTitle":"Developer","firstName":"David","lastName":"Rome","employeeCode":"E2","region":"NC","phoneNumber":"555-3425","emailAddress":"david.rome@lovedev.com"},{"userId":"lynn","jobTitle":"Program Directory","firstName":"Lynn","lastName":"Johnson","employeeCode":"E3","region":"NC","phoneNumber":"555-3241","emailAddress":"lynn.johnson@lovedev.com"},{"userId":"robert","jobTitle":"Front-end Developer","firstName":"Robert","lastName":"Mills","employeeCode":"E4","region":"NC","phoneNumber":"555-7897","emailAddress":"robert.mills@lovedev.com"},{"userId":"lejeana","jobTitle":"Program Directory","firstName":"Lejeana","lastName":"Black","employeeCode":"E5","region":"NC","phoneNumber":"555-9302","emailAddress":"lejeana.black@lovedev.com"},{"userId":"melvin","jobTitle":"Program Directory","firstName":"Melvin","lastName":"James","employeeCode":"E6","region":"NC","phoneNumber":"555-7824","emailAddress":"lynn.johnson@lovedev.com"}]')},,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(5),o=a.n(l),m=(a(13),a(7)),i=a(3);var s=function(e){return n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,e.userId),n.a.createElement("td",null,e.jobTitle),n.a.createElement("td",null,e.firstName),n.a.createElement("td",null,e.lastName),n.a.createElement("td",null,e.region),n.a.createElement("td",null,e.phoneNumber),n.a.createElement("td",null,e.emailAddress)))},c=a(6);var u=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"jumbotron bg-dark rounded text-white"},n.a.createElement("h1",{className:"display-4"},"Love Development"),n.a.createElement("p",{className:"lead"},"Where innovation begins")))};a(14);var d=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(r.useState)([]),d=Object(i.a)(o,2),N=d[0],h=d[1];Object(r.useEffect)((function(){h(c)}),[]),console.log("DATA---\x3e ",N);var E=Object(m.a)(N).sort((function(e,t){var a=e.jobTitle.toLowerCase(),r=t.jobTitle.toLowerCase();return a<r?-1:a>r?1:0}));return n.a.createElement("span",null,n.a.createElement(u,null),n.a.createElement("div",{style:{margin:"auto",width:1e3}},n.a.createElement("h1",{className:"title"},"Employee Directory"),n.a.createElement("input",{placeholder:"Search Employee",value:a,onChange:function(e){return l(e.target.value)}}),n.a.createElement("table",{className:"mt-2",width:"100%"},n.a.createElement("thead",{className:"bg-secondary text-white"},n.a.createElement("tr",null,n.a.createElement("th",null,"User ID"),n.a.createElement("th",{onClick:function(e){return h(E)}},"Job Title"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Region"),n.a.createElement("th",null,"Phone Number"),n.a.createElement("th",null,"Company Email"))),N.filter((function(e){return e.firstName.toLowerCase().includes(a.toLowerCase())})).map((function(e){return n.a.createElement(s,{key:[e.userId,e.phoneNumber].join(":"),userId:e.userId,jobTitle:e.jobTitle,firstName:e.firstName,lastName:e.lastName,region:e.region,phoneNumber:e.phoneNumber,emailAddress:e.emailAddress})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.a323140d.chunk.js.map