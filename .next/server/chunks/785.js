exports.id=785,exports.ids=[785],exports.modules={4761:(e,s,r)=>{"use strict";r.a(e,async(e,t)=>{try{r.d(s,{Z:()=>d});var a=r(997),n=r(6689),o=r(6197),i=r(4009),l=r(4066),c=e([o,i]);[o,i]=c.then?(await c)():c;let d=()=>{let[e,s]=(0,i.useInView)({triggerOnce:!0,threshold:.1}),[r,t]=(0,n.useState)({name:"",email:"",phone:"",subject:"",message:""}),c=[{icon:l.I7T,title:"Tel\xe9fono",content:"+34 XXX XXX XXX",link:"tel:+34XXXXXXXXX",color:"text-blue-500"},{icon:l.xpo,title:"WhatsApp",content:"+34 XXX XXX XXX",link:"https://wa.me/34XXXXXXXXX",color:"text-green-500"},{icon:l.SRX,title:"Email",content:"info@construccioneselite.es",link:"mailto:info@construccioneselite.es",color:"text-red-500"},{icon:l.Nh4,title:"Direcci\xf3n",content:"C. Consuegra, 3, Chamart\xedn, 28036 Madrid",link:"https://maps.app.goo.gl/rzZEVE8eQABpyepP7"}],d=async e=>{e.preventDefault(),console.log(r)},m=e=>{t({...r,[e.target.name]:e.target.value})};return a.jsx("section",{className:"py-20 bg-white",ref:e,children:(0,a.jsxs)("div",{className:"container-custom",children:[(0,a.jsxs)(o.motion.div,{initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{duration:.6},className:"text-center mb-16",children:[a.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-primary mb-4",children:"Cont\xe1ctenos"}),a.jsx("p",{className:"text-text-secondary text-lg max-w-2xl mx-auto",children:"Estamos aqu\xed para ayudarle con su pr\xf3ximo proyecto"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[a.jsx(o.motion.div,{initial:{opacity:0,x:-20},animate:s?{opacity:1,x:0}:{},transition:{duration:.6,delay:.2},className:"bg-gray-50 p-8 rounded-xl shadow-lg",children:(0,a.jsxs)("form",{onSubmit:d,className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Nombre"}),a.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),a.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0})]})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Tel\xe9fono"}),a.jsx("input",{type:"tel",id:"phone",name:"phone",value:r.phone,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700 mb-2",children:"Asunto"}),(0,a.jsxs)("select",{id:"subject",name:"subject",value:r.subject,onChange:m,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0,children:[a.jsx("option",{value:"",children:"Seleccione un asunto"}),a.jsx("option",{value:"presupuesto",children:"Solicitar Presupuesto"}),a.jsx("option",{value:"informacion",children:"Informaci\xf3n General"}),a.jsx("option",{value:"proyecto",children:"Consulta sobre Proyecto"}),a.jsx("option",{value:"otro",children:"Otro"})]})]}),(0,a.jsxs)("div",{children:[a.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Mensaje"}),a.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:m,rows:4,className:"w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300",required:!0})]}),a.jsx("button",{type:"submit",className:"w-full bg-secondary text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary/90 transform hover:scale-105 transition-all duration-300",children:"Enviar Mensaje"})]})}),(0,a.jsxs)(o.motion.div,{initial:{opacity:0,x:20},animate:s?{opacity:1,x:0}:{},transition:{duration:.6,delay:.2},className:"space-y-8",children:[a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",children:c.map((e,s)=>(0,a.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300",children:[a.jsx("div",{className:`${e.color} mb-4 text-2xl`,children:a.jsx(e.icon,{})}),a.jsx("h3",{className:"font-semibold text-primary mb-2",children:e.title}),a.jsx("p",{className:"text-gray-600 group-hover:text-secondary transition-colors duration-300",children:e.content})]},s))}),a.jsx("div",{className:"h-[300px] rounded-xl overflow-hidden shadow-lg",children:a.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5776428523207!2d-3.7112587235507566!3d40.41869797143838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287943417f3b%3A0x71a6fb4707b13a23!2sC.%20de%20Campomanes%2C%204%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1709834431039!5m2!1ses!2ses",width:"100%",height:"100%",style:{border:0},allowFullScreen:!1,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",className:"w-full h-full",title:"Ubicaci\xf3n de nuestra oficina"})})]})]})]})})};t()}catch(e){t(e)}})},7458:(e,s,r)=>{"use strict";r.d(s,{Z:()=>x});var t=r(997),a=r(6689),n=r(1664),o=r.n(n),i=r(1163);let l=()=>{let[e,s]=(0,a.useState)(!1),r=(0,i.useRouter)();(0,a.useEffect)(()=>{let e=()=>{window.scrollY>0?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let n="/"===r.pathname;return t.jsx("header",{className:`fixed w-full z-50 transition-all duration-300 ${e||!n?"bg-white shadow-lg py-4":"bg-transparent py-6"}`,children:t.jsx("div",{className:"container-custom",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[t.jsx(o(),{href:"/",className:`text-2xl font-bold transition-colors duration-300 ${e||!n?"text-primary":"text-white"}`,children:"Construcciones Elite"}),t.jsx("nav",{className:"hidden md:flex items-center space-x-8",children:[{name:"Inicio",href:"/"},{name:"Servicios",href:"/servicios"},{name:"Portafolio",href:"/portfolio"},{name:"Nosotros",href:"/nosotros"},{name:"Contacto",href:"/contacto"}].map(s=>t.jsx(o(),{href:s.href,className:`
                  font-medium transition-colors duration-300
                  ${e||!n?"text-gray-600 hover:text-secondary":"text-white hover:text-secondary"}
                  ${r.pathname===s.href?"text-secondary":""}
                `,children:s.name},s.href))}),t.jsx(o(),{href:"/contacto",className:`
              hidden md:inline-block px-6 py-2 rounded-lg font-semibold 
              transition-all duration-300 transform hover:scale-105
              ${e||!n?"bg-secondary text-white hover:bg-secondary/90":"bg-white text-primary hover:bg-gray-100"}
            `,children:"Solicitar Presupuesto"}),t.jsx("button",{className:`md:hidden transition-colors duration-300 ${e||!n?"text-primary":"text-white"}`,children:t.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]})})})};var c=r(1377),d=r(4066);let m=()=>{let{t:e}=(0,c.useTranslation)("common"),s=[{icon:d.I7T,text:"+34 XXX XXX XXX",href:"tel:+34XXXXXXXXX"},{icon:d.SRX,text:"info@construccioneselite.es",href:"mailto:info@construccioneselite.es"},{icon:d.Nh4,text:"C. Consuegra, 3, Chamart\xedn, 28036 Madrid",href:"https://maps.app.goo.gl/rzZEVE8eQABpyepP7"},{icon:d.qyc,text:"Lun - Vie: 9:00 - 18:00",href:"#"}],r=[{icon:d.Am9,href:"https://facebook.com",label:"Facebook"},{icon:d.fWC,href:"https://twitter.com",label:"Twitter"},{icon:d.Zf_,href:"https://instagram.com",label:"Instagram"},{icon:d.ltd,href:"https://linkedin.com",label:"LinkedIn"}];return t.jsx("footer",{className:"bg-primary text-white",children:(0,t.jsxs)("div",{className:"container-custom py-16",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[(0,t.jsxs)("div",{children:[t.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Construcciones Elite"}),t.jsx("p",{className:"text-gray-300 mb-6",children:"Expertos en construcci\xf3n y renovaci\xf3n con m\xe1s de 20 a\xf1os de experiencia."}),t.jsx("div",{className:"flex space-x-4",children:r.map((e,s)=>t.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-300 hover:text-secondary transition-colors","aria-label":e.label,children:t.jsx(e.icon,{className:"w-6 h-6"})},s))})]}),[{title:"Empresa",links:[{text:"Sobre Nosotros",href:"/about"},{text:"Servicios",href:"/services"},{text:"Proyectos",href:"/projects"},{text:"Contacto",href:"/contact"}]},{title:"Servicios",links:[{text:"Construcci\xf3n Residencial",href:"/services#residential"},{text:"Proyectos Comerciales",href:"/services#commercial"},{text:"Renovaciones",href:"/services#renovation"},{text:"Construcci\xf3n Industrial",href:"/services#industrial"}]}].map((e,s)=>(0,t.jsxs)("div",{children:[t.jsx("h3",{className:"text-xl font-bold mb-6",children:e.title}),t.jsx("ul",{className:"space-y-4",children:e.links.map((e,s)=>t.jsx("li",{children:t.jsx(o(),{href:e.href,className:"text-gray-300 hover:text-secondary transition-colors",children:e.text})},s))})]},s)),(0,t.jsxs)("div",{children:[t.jsx("h3",{className:"text-xl font-bold mb-6",children:"Contacto"}),t.jsx("ul",{className:"space-y-4",children:s.map((e,s)=>t.jsx("li",{children:(0,t.jsxs)("a",{href:e.href,className:"flex items-center text-gray-300 hover:text-secondary transition-colors",children:[t.jsx(e.icon,{className:"w-5 h-5 mr-3"}),t.jsx("span",{children:e.text})]})},s))})]})]}),t.jsx("div",{className:"border-t border-gray-700 mt-12 pt-8 text-center text-gray-400",children:(0,t.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Construcciones Elite. Todos los derechos reservados."]})})]})})};function x({children:e}){return(0,t.jsxs)("div",{className:"min-h-screen flex flex-col bg-background-light",children:[t.jsx(l,{}),t.jsx("main",{className:"flex-grow",children:e}),t.jsx(m,{})]})}},5143:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>i});var t=r(997),a=r(5402),n=r.n(a),o=r(1377);r(108);let i=(0,o.appWithTranslation)(function({Component:e,pageProps:s}){return t.jsx("main",{className:n().className,children:t.jsx(e,{...s})})})},108:()=>{}};