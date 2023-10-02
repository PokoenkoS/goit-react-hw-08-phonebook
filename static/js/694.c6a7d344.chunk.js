"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[694],{68:function(n,e,r){r.r(e),r.d(e,{default:function(){return W}});var t,a,i,o,d,s,c,l,p,u,x=r(9434),h=r(9460),m=r(2791),f=r(2381),g=r(168),b=r(3081),Z=b.Z.div(t||(t=(0,g.Z)(["\n\n"]))),j=b.Z.ul(a||(a=(0,g.Z)(["\n    justify-content: space-around; \n  padding:0;\n \n\n"]))),v=b.Z.li(i||(i=(0,g.Z)(["\nwidth: 400px;\n    display: flex;\n    /* justify-content: space-around; */\n   \n    /* text-align: center; */\n     /* align-items: center; */\n"]))),y=b.Z.p(o||(o=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    \n"]))),w=b.Z.button(d||(d=(0,g.Z)(["\n    background-color: #aee2e2;\n    width: 100px;\n    padding: 10px;\n    /* margin-top: 10px; */\n    margin-left: 30px;\n    margin-bottom: 10px;\n    border-radius: 6px;\n    &:hover{\n        background-color: red;\n        color:#aee2e2;\n    }\n    \n"]))),k=r(575),C=r(184),z=function(){var n=(0,x.v9)(h.DI),e=(0,x.I0)();return(0,C.jsx)(Z,{children:(0,C.jsx)(j,{children:n.map((function(n){return(0,C.jsxs)(v,{children:[(0,C.jsx)(k.Z,{alt:n.name,src:"https://ui-avatars.com/api/?name=".concat(n.name[0],"&length=1&background=random&size=262")}),(0,C.jsxs)(y,{children:[n.name,(0,C.jsx)("span",{children:n.number})]}),(0,C.jsx)(w,{type:"submit",onClick:function(){return e((0,f.GK)(n.id))},children:"Delete"})]},n.id)}))})})},A=r(9439),_=b.Z.form(s||(s=(0,g.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: space-around;\nborder: 3px solid #aee2e2;\nborder-radius: 30px;\nwidth: 250px;\nheight: 200px;\npadding: 15px 30px;\nmargin-top: 20px;\n\n"]))),I=b.Z.label(c||(c=(0,g.Z)(["\nwidth: 100px;\ndisplay: flex;\nflex-direction: column;\nmargin-top: 8px;\nfont-size: 20px;\nfont-weight: bold;\n"]))),D=b.Z.input(l||(l=(0,g.Z)(["\nmargin-top: 8px;\nborder-radius: 6px;\nborder-color: #aee2e2;\nwidth: 200px;\nheight: 30px;\n\n"]))),F=b.Z.button(p||(p=(0,g.Z)(["\n    background-color: #aee2e2;\n    width: 150px;\n    padding: 10px;\n    margin-top: 10px;\n    margin-left: 30px;\n    margin-bottom: 10px;\n    border-radius: 6px;\n    &:hover{\n        background-color: red;\n        color:#aee2e2;\n    }\n    \n"]))),S=function(){var n=(0,m.useState)(""),e=(0,A.Z)(n,2),r=e[0],t=e[1],a=(0,m.useState)(""),i=(0,A.Z)(a,2),o=i[0],d=i[1],s=(0,x.I0)(),c=(0,x.v9)(h.Af),l=function(n){var e=n.currentTarget,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":d(a);break;default:return}},p=function(){t(""),d("")};return(0,C.jsx)("div",{children:(0,C.jsxs)(_,{onSubmit:function(n){if(n.preventDefault(),c.find((function(n){return n.name===r||n.number===o})))return alert("".concat(r,":").concat(o," already in contacts"));s((0,f.uK)({name:r,number:o})),p()},children:[(0,C.jsxs)(I,{children:["Name",(0,C.jsx)(D,{type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:l})]}),(0,C.jsxs)(I,{children:[" Number",(0,C.jsx)(D,{type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:l})]}),(0,C.jsx)(F,{type:"submit",children:"Add contact"})]})})},N=r(3456),q=b.Z.input(u||(u=(0,g.Z)(["\nmargin-top: 8px;\nborder-radius: 6px;\nborder-color: #aee2e2;\nwidth: 200px;\nheight: 30px;\n\n"]))),K=function(){var n=(0,x.I0)(),e=(0,x.v9)(h.AD);return(0,C.jsx)(q,{type:"text",value:e,name:"filter",onChange:function(e){n((0,N.W)(e.currentTarget.value.toLowerCase()))}})},L=r(5243);function M(){return(0,C.jsx)(L.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}var O,P,T,U,B=r.p+"static/media/Mano.7c24d8540c97fbfd3966.jpg",E=b.Z.div(O||(O=(0,g.Z)(["\n/* margin-right: auto;\nmargin-left: auto; */\nmin-height: 89vh;\npadding:10px 30px;\ndisplay: flex;\njustify-content: flex-start;\n/* align-items: center; */\nfont-size: 40;\nborder-width: medium;\ncolor: #010101;\nbackground-image: url(",");\n    background-repeat: no-repeat;\n  background-size: 30%;\n  background-position: right;\n"])),B),G=b.Z.div(P||(P=(0,g.Z)(["\n    margin-left: 150px;\n    margin-top: 60px;\n"]))),J=b.Z.h1(T||(T=(0,g.Z)(["\n    font-family:Croissant One;\n    padding-left: 40px;\n    color: red;\n    \n"]))),Q=b.Z.h2(U||(U=(0,g.Z)(["\n    font-family:Croissant One;\n    margin-left: 15px;\n"]))),W=function(){var n=(0,x.I0)(),e=(0,x.v9)(h.Qb),r=(0,x.v9)(h.xU),t=(0,x.v9)(h.wU);return(0,m.useEffect)((function(){t||n((0,f.yF)())}),[n,t]),(0,C.jsxs)(C.Fragment,{children:[e&&!t&&(0,C.jsx)(C.Fragment,{children:(0,C.jsxs)(E,{children:[(0,C.jsxs)("div",{children:[(0,C.jsx)(J,{children:"Phonebook"}),(0,C.jsx)(S,{})]}),(0,C.jsxs)(G,{children:[(0,C.jsx)(Q,{children:"Contacts"}),(0,C.jsx)(K,{}),(0,C.jsx)(z,{})]})]})}),r&&(0,C.jsx)(M,{})]})}}}]);
//# sourceMappingURL=694.c6a7d344.chunk.js.map