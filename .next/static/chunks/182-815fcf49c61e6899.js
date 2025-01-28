"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[182],{4761:function(e,r,t){var s=t(5893),n=t(7294),a=t(607),o=t(8357),i=t(2091);r.Z=()=>{let[e,r]=(0,o.YD)({triggerOnce:!0,threshold:.1}),[t,l]=(0,n.useState)({name:"",email:"",phone:"",subject:"",message:""}),c=[{icon:i.I7T,title:"Tel\xe9fono",content:"+34 XXX XXX XXX",link:"tel:+34XXXXXXXXX",color:"text-blue-500"},{icon:i.xpo,title:"WhatsApp",content:"+34 XXX XXX XXX",link:"https://wa.me/34XXXXXXXXX",color:"text-green-500"},{icon:i.SRX,title:"Email",content:"info@construccioneselite.es",link:"mailto:info@construccioneselite.es",color:"text-red-500"},{icon:i.Nh4,title:"Direcci\xf3n",content:"C. Consuegra, 3, Chamart\xedn, 28036 Madrid",link:"https://maps.app.goo.gl/rzZEVE8eQABpyepP7"}],d=async e=>{e.preventDefault(),console.log(t)},m=e=>{l({...t,[e.target.name]:e.target.value})};return(0,s.jsx)("section",{className:"py-20 bg-white",ref:e,children:(0,s.jsxs)("div",{className:"container-custom",children:[(0,s.jsxs)(a.E.div,{initial:{opacity:0,y:20},animate:r?{opacity:1,y:0}:{},transition:{duration:.6},className:"text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-4xl md:text-5xl font-bold text-primary mb-4",children:"Cont\xe1ctenos"}),(0,s.jsx)("p",{className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Estamos aqu\xed para ayudarle con su pr\xf3ximo proyecto"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[(0,s.jsx)(a.E.div,{initial:{opacity:0,x:-20},animate:r?{opacity:1,x:0}:{},transition:{duration:.6,delay:.2},className:"bg-gray-50 p-8 rounded-xl shadow-lg",children:(0,s.jsxs)("form",{onSubmit:d,className:"space-y-6",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Nombre"}),(0,s.jsx)("input",{type:"text",id:"name",name:"name",value:t.name,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),(0,s.jsx)("input",{type:"email",id:"email",name:"email",value:t.email,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Tel\xe9fono"}),(0,s.jsx)("input",{type:"tel",id:"phone",name:"phone",value:t.phone,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-2",children:"Asunto"}),(0,s.jsxs)("select",{id:"subject",name:"subject",value:t.subject,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0,children:[(0,s.jsx)("option",{value:"",children:"Seleccione un asunto"}),(0,s.jsx)("option",{value:"presupuesto",children:"Solicitar Presupuesto"}),(0,s.jsx)("option",{value:"informacion",children:"Informaci\xf3n General"}),(0,s.jsx)("option",{value:"proyecto",children:"Consulta sobre Proyecto"}),(0,s.jsx)("option",{value:"otro",children:"Otro"})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Mensaje"}),(0,s.jsx)("textarea",{id:"message",name:"message",value:t.message,onChange:m,rows:4,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0})]}),(0,s.jsx)("button",{type:"submit",className:"w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300",children:"Enviar Mensaje"})]})}),(0,s.jsxs)(a.E.div,{initial:{opacity:0,x:20},animate:r?{opacity:1,x:0}:{},transition:{duration:.6,delay:.2},className:"space-y-8",children:[(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:c.map((e,r)=>(0,s.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300",children:[(0,s.jsx)("div",{className:"".concat(e.color," mb-4 text-2xl"),children:(0,s.jsx)(e.icon,{})}),(0,s.jsx)("h3",{className:"font-semibold text-primary mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-gray-600 group-hover:text-secondary transition-colors duration-300",children:e.content})]},r))}),(0,s.jsx)("div",{className:"h-[300px] rounded-xl overflow-hidden shadow-lg",children:(0,s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5776428523207!2d-3.7112587235507566!3d40.41869797143838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287943417f3b%3A0x71a6fb4707b13a23!2sC.%20de%20Campomanes%2C%204%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1709834431039!5m2!1ses!2ses",width:"100%",height:"100%",style:{border:0},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full",title:"Ubicaci\xf3n de nuestra oficina"})})]})]})]})})}},7458:function(e,r,t){t.d(r,{Z:function(){return h}});var s=t(5893),n=t(7294),a=t(1664),o=t.n(a),i=t(1163),l=()=>{let[e,r]=(0,n.useState)(!1),t=(0,i.useRouter)();(0,n.useEffect)(()=>{let e=()=>{window.scrollY>0?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let a="/"===t.pathname;return(0,s.jsx)("header",{className:"fixed w-full z-50 transition-all duration-300 ".concat(e||!a?"bg-white shadow-lg py-4":"bg-transparent py-6"),children:(0,s.jsx)("div",{className:"container-custom",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(o(),{href:"/",className:"text-2xl font-bold transition-colors duration-300 ".concat(e||!a?"text-primary":"text-white"),children:"Construcciones Elite"}),(0,s.jsx)("nav",{className:"hidden md:flex items-center space-x-8",children:[{name:"Inicio",href:"/"},{name:"Servicios",href:"/servicios"},{name:"Portafolio",href:"/portfolio"},{name:"Nosotros",href:"/nosotros"},{name:"Contacto",href:"/contacto"}].map(r=>(0,s.jsx)(o(),{href:r.href,className:"\n                  font-medium transition-colors duration-300\n                  ".concat(e||!a?"text-gray-600 hover:text-secondary":"text-white hover:text-secondary","\n                  ").concat(t.pathname===r.href?"text-secondary":"","\n                "),children:r.name},r.href))}),(0,s.jsx)(o(),{href:"/contacto",className:"\n              hidden md:inline-block px-6 py-2 rounded-lg font-semibold \n              transition-all duration-300 transform hover:scale-105\n              ".concat(e||!a?"bg-secondary text-white hover:bg-secondary/90":"bg-white text-primary hover:bg-gray-100","\n            "),children:"Solicitar Presupuesto"}),(0,s.jsx)("button",{className:"md:hidden transition-colors duration-300 ".concat(e||!a?"text-primary":"text-white"),children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})})})},c=t(1798),d=t(2091),m=()=>{let{t:e}=(0,c.$G)("common"),r=[{icon:d.I7T,text:"+34 XXX XXX XXX",href:"tel:+34XXXXXXXXX"},{icon:d.SRX,text:"info@construccioneselite.es",href:"mailto:info@construccioneselite.es"},{icon:d.Nh4,text:"C. Consuegra, 3, Chamart\xedn, 28036 Madrid",href:"https://maps.app.goo.gl/rzZEVE8eQABpyepP7"},{icon:d.qyc,text:"Lun - Vie: 9:00 - 18:00",href:"#"}],t=[{icon:d.Am9,href:"https://facebook.com",label:"Facebook"},{icon:d.fWC,href:"https://twitter.com",label:"Twitter"},{icon:d.Zf_,href:"https://instagram.com",label:"Instagram"},{icon:d.ltd,href:"https://linkedin.com",label:"LinkedIn"}];return(0,s.jsx)("footer",{className:"bg-primary text-white",children:(0,s.jsxs)("div",{className:"container-custom py-16",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-2xl font-bold mb-6",children:"Construcciones Elite"}),(0,s.jsx)("p",{className:"text-gray-300 mb-6",children:"Expertos en construcci\xf3n y renovaci\xf3n con m\xe1s de 20 a\xf1os de experiencia."}),(0,s.jsx)("div",{className:"flex space-x-4",children:t.map((e,r)=>(0,s.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-secondary transition-colors","aria-label":e.label,children:(0,s.jsx)(e.icon,{className:"w-6 h-6"})},r))})]}),[{title:"Empresa",links:[{text:"Sobre Nosotros",href:"/about"},{text:"Servicios",href:"/services"},{text:"Proyectos",href:"/projects"},{text:"Contacto",href:"/contact"}]},{title:"Servicios",links:[{text:"Construcci\xf3n Residencial",href:"/services#residential"},{text:"Proyectos Comerciales",href:"/services#commercial"},{text:"Renovaciones",href:"/services#renovation"},{text:"Construcci\xf3n Industrial",href:"/services#industrial"}]}].map((e,r)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-6",children:e.title}),(0,s.jsx)("ul",{className:"space-y-4",children:e.links.map((e,r)=>(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:e.href,className:"text-gray-300 hover:text-secondary transition-colors",children:e.text})},r))})]},r)),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-6",children:"Contacto"}),(0,s.jsx)("ul",{className:"space-y-4",children:r.map((e,r)=>(0,s.jsx)("li",{children:(0,s.jsxs)("a",{href:e.href,className:"flex items-center text-gray-300 hover:text-secondary transition-colors",children:[(0,s.jsx)(e.icon,{className:"w-5 h-5 mr-3"}),(0,s.jsx)("span",{children:e.text})]})},r))})]})]}),(0,s.jsx)("div",{className:"border-t border-gray-700 mt-12 pt-8 text-center text-gray-400",children:(0,s.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Construcciones Elite. Todos los derechos reservados."]})})]})})};function h(e){let{children:r}=e;return(0,s.jsxs)("div",{className:"min-h-screen flex flex-col bg-background-light",children:[(0,s.jsx)(l,{}),(0,s.jsx)("main",{className:"flex-grow",children:r}),(0,s.jsx)(m,{})]})}}}]);