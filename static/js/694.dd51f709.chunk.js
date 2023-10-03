"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[694],{68:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var a,i,r,d,o,p,s,x,c,l,u,h=t(9434),m=t(9460),f=t(2791),g=t(2381),b=t(168),Z=t(3081),w=Z.Z.div(a||(a=(0,b.Z)(["\n  /* @media (max-width: 768px) {\n width:768px;\n\n  } */\n"]))),j=Z.Z.ul(i||(i=(0,b.Z)(["\n    justify-content: space-around; \n  padding:0;\n \n\n"]))),v=Z.Z.li(r||(r=(0,b.Z)(["\nwidth: 400px;\n    display: flex;\n    justify-content: space-between;\n    @media (max-width: 768px) {\n  width:300px;\n\n  }\n"]))),y=Z.Z.div(d||(d=(0,b.Z)(["\n      display: flex;\n"]))),k=Z.Z.p(o||(o=(0,b.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding-left: 10px;\n    \n"]))),C=Z.Z.button(p||(p=(0,b.Z)(["\n    background-color: #aee2e2;\n    width: 100px;\n    padding: 10px;\n    margin-left: 30px;\n    margin-bottom: 10px;\n    border-radius: 6px;\n    &:hover{\n        background-color: red;\n        color:#aee2e2;\n    }\n    \n"]))),z=t(575),A=t(184),_=function(){var n=(0,h.v9)(m.DI),e=(0,h.I0)();return(0,A.jsx)(w,{children:(0,A.jsx)(j,{children:n.map((function(n){return(0,A.jsxs)(v,{children:[(0,A.jsxs)(y,{children:[(0,A.jsx)(z.Z,{alt:n.name,src:"https://ui-avatars.com/api/?name=".concat(n.name[0],"&length=1&background=random&size=262")}),(0,A.jsxs)(k,{children:[n.name,(0,A.jsx)("span",{children:n.number})]})]}),(0,A.jsx)(C,{type:"submit",onClick:function(){return e((0,g.GK)(n.id))},children:"Delete"})]},n.id)}))})})},I=t(9439),D=Z.Z.form(s||(s=(0,b.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: space-around;\nborder: 3px solid #aee2e2;\nborder-radius: 30px;\nwidth: 250px;\nheight: 200px;\npadding: 15px 30px;\nmargin-top: 20px;\n@media (max-width: 768px) {\n    width: 150px;\nheight: 100px;\n  }\n"]))),F=Z.Z.label(x||(x=(0,b.Z)(["\nwidth: 100px;\ndisplay: flex;\nflex-direction: column;\nmargin-top: 8px;\nfont-size: 20px;\nfont-weight: bold;\n@media (max-width: 768px) {\n    /* width: 50px; */\n    font-size: 10px;\n\n  }\n"]))),S=Z.Z.input(c||(c=(0,b.Z)(["\nmargin-top: 8px;\nborder-radius: 6px;\nborder-color: #aee2e2;\nwidth: 200px;\nheight: 30px;\n@media (max-width: 768px) {\n    width: 80px;\nheight: 15px;\n  }\n\n"]))),N=Z.Z.button(l||(l=(0,b.Z)(["\n    background-color: #aee2e2;\n    width: 150px;\n    padding: 10px;\n    margin-top: 10px;\n    margin-left: 30px;\n    margin-bottom: 10px;\n    border-radius: 6px;\n    &:hover{\n        background-color: red;\n        color:#aee2e2;\n    }\n    @media (max-width: 768px) {\n    width: 80px;\n    /* height: px; */\n    font-size: 8px;\n    padding: 5px;\n  }\n    \n"]))),q=function(){var n=(0,f.useState)(""),e=(0,I.Z)(n,2),t=e[0],a=e[1],i=(0,f.useState)(""),r=(0,I.Z)(i,2),d=r[0],o=r[1],p=(0,h.I0)(),s=(0,h.v9)(m.Af),x=function(n){var e=n.currentTarget,t=e.name,i=e.value;switch(t){case"name":a(i);break;case"number":o(i);break;default:return}},c=function(){a(""),o("")};return(0,A.jsx)("div",{children:(0,A.jsxs)(D,{onSubmit:function(n){if(n.preventDefault(),s.find((function(n){return n.name===t||n.number===d})))return alert("".concat(t,":").concat(d," already in contacts"));p((0,g.uK)({name:t,number:d})),c()},children:[(0,A.jsxs)(F,{children:["Name",(0,A.jsx)(S,{type:"text",name:"name",value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:x})]}),(0,A.jsxs)(F,{children:[" Number",(0,A.jsx)(S,{type:"tel",name:"number",value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:x})]}),(0,A.jsx)(N,{type:"submit",children:"Add contact"})]})})},K=t(3456),L=Z.Z.input(u||(u=(0,b.Z)(["\nmargin-top: 8px;\nborder-radius: 6px;\nborder-color: #aee2e2;\nwidth: 200px;\nheight: 30px;\n\n"]))),M=function(){var n=(0,h.I0)(),e=(0,h.v9)(m.AD);return(0,A.jsx)(L,{type:"text",value:e,name:"filter",onChange:function(e){n((0,K.W)(e.currentTarget.value.toLowerCase()))}})},O=t(5243);function P(){return(0,A.jsx)(O.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}var T,U,B,E,G=t.p+"static/media/Mano.7c24d8540c97fbfd3966.jpg",J=Z.Z.div(T||(T=(0,b.Z)(["\nmin-height: 89vh;\npadding:10px 30px;\ndisplay: flex;\njustify-content: flex-start;\nfont-size: 40;\nborder-width: medium;\ncolor: #010101;\nbackground-image: url(",");\n    background-repeat: no-repeat;\n  background-size: 30%;\n  background-position: right;\n\n  @media (max-width: 768px) {\n  flex-direction:column;\n  background-size: 50%;\n  background-position:right ;\n\n  }\n"])),G),Q=Z.Z.div(U||(U=(0,b.Z)(["\n    margin-left: 150px;\n    margin-top: 60px;\n    @media (max-width: 768px) {\n        margin-left: 30px;\n  \n\n  }\n"]))),W=Z.Z.h1(B||(B=(0,b.Z)(["\n    font-family:Croissant One;\n    padding-left: 40px;\n    color: red;\n    \n"]))),$=Z.Z.h2(E||(E=(0,b.Z)(["\n    font-family:Croissant One;\n    margin-left: 15px;\n"]))),H=function(){var n=(0,h.I0)(),e=(0,h.v9)(m.Qb),t=(0,h.v9)(m.xU),a=(0,h.v9)(m.wU);return(0,f.useEffect)((function(){a||n((0,g.yF)())}),[n,a]),(0,A.jsxs)(A.Fragment,{children:[e&&!a&&(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(J,{children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(W,{children:"Phonebook"}),(0,A.jsx)(q,{})]}),(0,A.jsxs)(Q,{children:[(0,A.jsx)($,{children:"Contacts"}),(0,A.jsx)(M,{}),(0,A.jsx)(_,{})]})]})}),t&&(0,A.jsx)(P,{})]})}}}]);
//# sourceMappingURL=694.dd51f709.chunk.js.map