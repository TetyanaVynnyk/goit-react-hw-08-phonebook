"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{7215:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(9434),r=n(4942),c=n(1413),s=n(9439),i=n(2791),o=n(30),l=n(5984),u="contactForm_formWrapper__CxiG+",m="contactForm_inputTitle__jPwCu",d="contactForm_formInput__BEnGu",h="contactForm_btn__sLuHI",p=n(184),f=function(){var e=(0,a.I0)(),t=(0,i.useState)({name:"",number:""}),n=(0,s.Z)(t,2),f=n[0],b=n[1];(0,i.useEffect)((function(){e((0,o.CL)())}),[e]);var x=function(e){var t=e.target,n=t.name,a=t.value;b((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,r.Z)({},n,a))}))},v=f.name,_=f.number;return(0,p.jsxs)("form",{className:u,onSubmit:function(t){t.preventDefault(),function(t){var n=t.name,a=t.number;e((0,o.v6)({name:n,number:a}))}((0,c.Z)({},f)),b({name:"",number:""})},children:[(0,p.jsx)("label",{className:m,htmlFor:"nameId",children:"Name"}),(0,p.jsx)("input",{className:d,type:"text",name:"name",nameid:(0,l.x0)(),pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:v,onChange:x,placeholder:"enter name"}),(0,p.jsx)("label",{className:m,htmlFor:"phoneId",children:"Number"}),(0,p.jsx)("input",{className:d,type:"tel",name:"number",phoneid:(0,l.x0)(),pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:_,onChange:x,placeholder:"enter phone number"}),(0,p.jsx)("button",{className:h,type:"submit",children:"Add contacts"})]})},b=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){var t=e.name,n=e.number;return t.toLowerCase().includes(a)||n.toLowerCase().includes(a)}))},x={contact:"contactList_contact__SaMvM",btn:"contactList_btn__ouOld"},v=function(){var e=(0,a.v9)(b),t=(0,a.I0)();return(0,p.jsx)("ul",{children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,p.jsxs)("li",{className:x.contactItem,children:[(0,p.jsxs)("p",{className:x.contact,children:[a,":",r]}),(0,p.jsx)("button",{className:x.btn,onClick:function(){return function(e){t((0,o.in)(e))}(n)},type:"button",children:"Delete"})]},n)}))})},_={filterLabel:"filter_filterLabel__M5KSC",filterInput:"filter_filterInput__TVMSR"},j=n(5653),C=function(e){return e.filter},N=function(){var e=(0,a.v9)(C),t=(0,a.I0)();return(0,p.jsx)("div",{className:_.filterWrapper,children:(0,p.jsxs)("label",{className:_.filterLabel,htmlFor:"inputid",children:["Find contacts by name",(0,p.jsx)("input",{className:_.filterInput,type:"text",inputid:(0,l.x0)(),pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0,value:e,onChange:function(e){var n=e.target;t((0,j.T)(n.value))},placeholder:"enter the contact you want to find"})]})})},I=function(){var e=(0,a.v9)(b),t=Boolean(e.length);return(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Create your Phonebook"}),(0,p.jsx)(f,{}),(0,p.jsx)("h2",{children:"Contacts"}),t?(0,p.jsxs)("div",{children:[(0,p.jsx)(N,{}),(0,p.jsx)(v,{})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(N,{}),(0,p.jsx)("p",{children:"You have no contacts"})]})]})}}}]);
//# sourceMappingURL=215.cc22dc5e.chunk.js.map