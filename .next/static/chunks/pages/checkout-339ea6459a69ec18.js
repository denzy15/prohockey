(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{2590:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return t(6233)}])},6233:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return v}});var a=t(5893),n=t(7294),o=t(4440),l=t(4246),s=t(4934),i=t(2191),u=t(3875),c=t(8163),m=t(1163),h=t(5678),p=t(4144),d=e=>{let{value:r,onChange:t}=e,n=e=>{let r=e.replace(/\D/g,"").replace(/\s/g,"").slice(1);return r.length>10&&(r=r.slice(0,10)),"+7"+r};return(0,a.jsx)(u.Z,{label:"Телефон",value:(0,p.ZQ)(r),onChange:e=>{t({target:{name:"phone",value:n(e.target.value)}})},fullWidth:!0,sx:{"& input":{color:"primary.dark"},"& fieldset":{borderColor:"#b1b1b1"}},margin:"normal",autoComplete:"off",placeholder:"+7 XXX XXX XX XX"})},f=t(603),x=t(7066);let b=async(e,r)=>{try{await x.Z.post("".concat(f.LB,"/orders"),{...e,products:r})}catch(e){throw console.error(e),Error(e.response.data.message)}};var g=t(8656),j=()=>{let[e,r]=(0,n.useState)(!1),[t,p]=(0,n.useState)({name:"",phone:"+7",email:""}),{cart:f,clearCart:x}=(0,g.jD)(),j=(0,m.useRouter)(),v=e=>{let{name:r,value:t}=e.target;p(e=>({...e,[r]:t}))},w=async e=>{if(e.preventDefault(),!t.name||!t.phone||!t.email){h.Am.warn("Пожалуйста, заполните все поля.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)){h.Am.warn("Неверный адрес электронной почты.");return}if(12!==t.phone.length){h.Am.warn("Неверный номер телефона");return}r(!0);try{await b(t,f),x(),j.push("/thank-you")}catch(e){h.Am.error("Произошла ошибка при оформлении заказа."),r(!1)}};return(0,a.jsx)(o.Z,{component:"form",onSubmit:w,sx:{mt:3},children:e?(0,a.jsxs)(o.Z,{sx:{textAlign:"center",mt:4},children:[(0,a.jsx)(l.Z,{variant:"h4",sx:{mb:2},children:"Создание заказа..."}),(0,a.jsx)(s.Z,{size:115})]}):(0,a.jsxs)(i.Z,{sx:{p:2,bgcolor:"primary.light"},children:[(0,a.jsx)(l.Z,{variant:"h6",sx:{color:"primary.dark"},children:"Введите своим контактные данные, чтобы наш менеджер смог с вами связаться"}),(0,a.jsx)(u.Z,{label:"Имя",name:"name",fullWidth:!0,sx:{"& input":{color:"primary.dark"},"& fieldset":{borderColor:"#b1b1b1"}},margin:"normal",value:t.name,onChange:v,autoComplete:"off"}),(0,a.jsx)(d,{value:t.phone,onChange:v}),(0,a.jsx)(u.Z,{label:"Email",name:"email",sx:{"& input":{color:"primary.dark"},"& fieldset":{borderColor:"#b1b1b1"}},autoComplete:"off",fullWidth:!0,margin:"normal",value:t.email,onChange:v}),(0,a.jsx)(c.Z,{type:"submit",variant:"contained",color:"primary",sx:{mt:2},children:"Оформить заказ"})]})})},v=()=>(0,a.jsx)(j,{})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=2590)}),_N_E=e.O()}]);