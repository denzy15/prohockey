"use strict";exports.id=952,exports.ids=[952],exports.modules={25040:(e,r,t)=>{t.d(r,{Z:()=>C});var a=t(20997),n=t(24965),i=t.n(n);t(16689);var s=t(37290),l=t(61217),c=t.n(l),o=t(9875),d=t.n(o),x=t(32498),u=t.n(x),h=t(15234),p=t.n(h),m=t(3828),j=t.n(m),v=t(41664),f=t.n(v),y=t(11163);let g=({category:e})=>{let{asPath:r}=(0,y.useRouter)();return a.jsx(i(),{item:!0,xs:12,sm:6,md:4,children:a.jsx(c(),{sx:{bgcolor:"white"},children:a.jsx(f(),{href:`${r}/${e.urlPath}`,children:(0,a.jsxs)(d(),{children:[a.jsx(u(),{component:"img",image:`${s.LB}/${e.photo}`,height:"190",alt:e.name,sx:{objectFit:"contain"}}),a.jsx(p(),{sx:{bgcolor:"primary.light"},children:a.jsx(j(),{variant:"body2",sx:{color:"background.paper",fontWeight:600,textAlign:"center"},children:e.name.toUpperCase()})})]})})})})},C=({categories:e})=>a.jsx(i(),{container:!0,spacing:2,sx:{py:3},children:e.map(e=>a.jsx(g,{category:e},e._id))})},85002:(e,r,t)=>{t.d(r,{Z:()=>p});var a=t(20997),n=t(37290),i=t(26337),s=t.n(i),l=t(3828),c=t.n(l),o=t(34638),d=t(39573),x=t.n(d),u=t(94508),h=t.n(u);t(16689);let p=({param:e,handleSelect:r,activeValue:t})=>{let i=!!e.values[0].photo;return(0,a.jsxs)(s(),{sx:{my:2},children:[(0,a.jsxs)(c(),{variant:"body2",sx:{mb:1},children:[e.name,": ",t.value]}),a.jsx(o.ZP,{direction:"row",gap:1,flexWrap:"wrap",children:i?e.values.map((i,l)=>a.jsx(s(),{onClick:()=>r(e._id,i),sx:{cursor:"pointer",borderStyle:t._id===i._id?"solid":"dashed",borderColor:t._id===i._id?"black":"primary.main",borderWidth:t._id===i._id?3:1,borderRadius:2,overflow:"hidden"},children:a.jsx(x(),{title:i.value,children:a.jsx("img",{style:{maxWidth:"60px"},src:`${n.LB}/${i.photo}`})})},l)):e.values.map((n,i)=>a.jsx(h(),{variant:t._id===n._id?"outlined":"filled",onClick:()=>r(e._id,n),label:n.value,sx:{bgcolor:"primary.light",color:"background.default",borderRadius:3,borderColor:"primary.main",fontWeight:500,fontSize:15}},i))})]})}},37273:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>B});var n=t(20997),i=t(16689),s=t(89404),l=t.n(s),c=t(26337),o=t.n(c),d=t(3828),x=t.n(d),u=t(34596),h=t.n(u),p=t(12143),m=t.n(p),j=t(73426),v=t.n(j),f=t(35590),y=t.n(f),g=t(23890),C=t.n(g),b=t(41664),_=t.n(b),P=t(94144),Z=t(37290),w=t(11163),S=t(60531),$=t(56586),k=t(3590),I=t(97939),W=t(14026),J=e([k,I]);[k,I]=J.then?(await J)():J;let B=({product:e})=>{let{category:r}=(0,w.useRouter)().query,{cart:t,addToCart:a,removeFromCart:s}=(0,I.jD)(),[c,d]=(0,i.useState)(!1),[u,p]=(0,i.useState)(()=>{let r=[...e.parameters],t=0;return r=r.map(e=>{let r=e.values.find(e=>e.defaultValue);return r.extraPrice&&(t+=r.extraPrice),{name:e.name,value:r,_id:e._id}}),{...e,parameters:r,cartCounter:1,finalPrice:e.basePrice+t}});(0,i.useEffect)(()=>{d(t.some(e=>e._id===u._id&&(0,W.v)(u.parameters,e.parameters)));let r=e.basePrice;u.parameters.forEach(e=>{e.value.extraPrice&&(r+=e.value.extraPrice)}),p({...u,finalPrice:r})},[t,u.parameters,t,e._id]);let j=(r,t)=>{let a=[...u.parameters],n=e.parameters.findIndex(e=>e._id===r),i=e.parameters[n].values.find(e=>e._id===t);i&&(a[n].value=i,p(e=>({...e,parameters:a,photo:i.photo?i.photo:u.photo})))};return(0,n.jsxs)(l(),{sx:{bgcolor:"text.primary",color:"background.paper",transition:"0.1s",height:"100%",display:"flex",flexDirection:"column","&:hover":{transform:"scale(1.001)"}},elevation:5,children:[n.jsx(_(),{href:`/products/${r}/${u.name}`,passHref:!0,style:{flex:1},children:(0,n.jsxs)(o(),{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[n.jsx(o(),{sx:{height:240},children:n.jsx("img",{src:`${Z.LB}/${u.photo}`,alt:u.name,style:{width:"100%",height:"100%",objectFit:"contain"}})}),(0,n.jsxs)(o(),{sx:{p:1,textAlign:"center",justifySelf:"end"},children:[n.jsx(x(),{gutterBottom:!0,variant:"body2",children:u.name}),(0,n.jsxs)(x(),{variant:"h6",sx:{fontWeight:600},children:[(0,P.Jw)(u.finalPrice)," ₸"]})]})]})}),(0,n.jsxs)(o(),{sx:{p:2,bgcolor:"background.paper"},children:[e.parameters.map((e,r)=>(0,n.jsxs)(h(),{fullWidth:!0,sx:{mb:2},variant:"outlined",children:[n.jsx(m(),{children:e.name}),n.jsx(v(),{value:u.parameters[r].value._id,onChange:r=>j(e._id,r.target.value),children:e.values.map(e=>n.jsx(y(),{value:e._id,children:e.value},e.value))})]},e.name)),n.jsx(o(),{sx:{mb:2,textAlign:"center"},children:n.jsx($.Z,{isInCart:c,cartCounter:u.cartCounter,handleChangeCartCounter:e=>{if("remove"===e){if(u.cartCounter<=1){p({...u,cartCounter:1});return}p(e=>({...e,cartCounter:--e.cartCounter}));return}if(u.cartCounter>=10){p({...u,cartCounter:10}),k.toast.info("Для оптовой покупки на выгодных условиях свяжитесь с нами по телефону");return}p(e=>({...e,cartCounter:++e.cartCounter}))}})}),c?n.jsx(C(),{startIcon:n.jsx(S.Z,{}),fullWidth:!0,variant:"outlined",color:"error",onClick:()=>{if(!c)return;let e=t.findIndex(e=>e._id===u._id&&(0,W.v)(u.parameters,e.parameters));s(e)},children:"Удалить из корзины"}):n.jsx(C(),{startIcon:n.jsx(S.Z,{}),fullWidth:!0,variant:"contained",color:"primary",onClick:()=>{let e=JSON.parse(JSON.stringify(u));a(e),d(!0)},children:"В корзину"})]})]})};a()}catch(e){a(e)}})},48468:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>u});var n=t(20997);t(16689);var i=t(24965),s=t.n(i),l=t(78549),c=t.n(l),o=t(37273),d=t(17943),x=e([o]);o=(x.then?(await x)():x)[0];let u=()=>{let{products:e}=(0,d.r)();return e.length>0?n.jsx(s(),{container:!0,rowSpacing:2,columnSpacing:5,sx:{my:2},children:e.map(e=>n.jsx(s(),{item:!0,xs:12,sm:6,md:4,children:n.jsx(o.Z,{product:e})},e._id))}):n.jsx(c(),{severity:"info",sx:{textTransform:"uppercase",my:1},children:"Товары не найдены"})};a()}catch(e){a(e)}})},7463:(e,r,t)=>{t.d(r,{Z:()=>m});var a=t(20997);t(16689);var n=t(89404),i=t.n(n),s=t(3828),l=t.n(s),c=t(34596),o=t.n(c),d=t(73426),x=t.n(d),u=t(35590),h=t.n(u),p=t(17943);let m=()=>{let{sort:e,setSort:r}=(0,p.r)();return(0,a.jsxs)(i(),{sx:{bgcolor:"background.default",display:"flex",justifyContent:"start",alignItems:"center",gap:3,px:2,py:1,my:1},children:[a.jsx(l(),{children:"Сортировать по"}),a.jsx(o(),{children:(0,a.jsxs)(x(),{variant:"standard",value:e,onChange:e=>{r(e.target.value)},children:[a.jsx(h(),{value:"popularity",children:"Популярные"}),a.jsx(h(),{value:"price-asc",children:"Цена: по возрастанию"}),a.jsx(h(),{value:"price-desc",children:"Цена: по убыванию"})]})})]})}},65585:(e,r,t)=>{t.d(r,{B:()=>i,J:()=>s});var a=t(20997),n=t(16689);let i=(0,n.createContext)({}),s=({children:e,initialProducts:r})=>{let[t,s]=(0,n.useState)(r),[l,c]=(0,n.useState)("popularity");return console.log(t),a.jsx(i.Provider,{value:{products:t,sort:l,setSort:e=>{c(e),"popularity"===e?s(r):s(e=>e.sort((e,r)=>"price-desc"===l?e.basePrice-r.basePrice:"price-asc"===l?r.basePrice-e.basePrice:0))},setProducts:s},children:e})}},14026:(e,r,t)=>{t.d(r,{v:()=>a});let a=(e,r)=>e.every((e,t)=>e.value._id===r[t].value._id)},17943:(e,r,t)=>{t.d(r,{r:()=>i});var a=t(16689),n=t(65585);let i=()=>(0,a.useContext)(n.B)},35139:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{$s:()=>s.Z,ot:()=>n.Z,ww:()=>l.Z}),t(7463);var n=t(25040),i=t(48468),s=t(83008),l=t(17616),c=e([i,s,l]);[i,s,l]=c.then?(await c)():c,a()}catch(e){a(e)}})},17616:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>_});var n=t(20997),i=t(37290),s=t(94144),l=t(26337),c=t.n(l),o=t(34638),d=t(3828),x=t.n(d),u=t(23890),h=t.n(u),p=t(16689),m=t(85002),j=t(60531),v=t(3590),f=t(97939),y=t(56586),g=t(14026),C=t(11163),b=e([v,f]);[v,f]=b.then?(await b)():b;let _=({product:e})=>{let{name:r,shortDescription:t,detailedDescription:a,parameters:l,_id:d}=e,{cart:u,addToCart:b,removeFromCart:_}=(0,f.jD)(),[P,Z]=(0,p.useState)(!1),{query:w}=(0,C.useRouter)(),[S,$]=(0,p.useState)(()=>{let r=[...e.parameters],t=0;return r=r.map(e=>{let r=e.values.find(e=>e.defaultValue);return r.extraPrice&&(t+=r.extraPrice),{name:e.name,value:r,_id:e._id}}),{...e,parameters:r,cartCounter:1,finalPrice:e.basePrice+t}});(0,p.useEffect)(()=>{let e;let r=[...S.parameters];l.forEach((t,a)=>{if(w[t.name]){let n=t.values.find(e=>e.value===w[t.name]);n&&(r[a].value=n,n.photo&&(e=n.photo))}}),$(t=>({...t,parameters:r,photo:e||t.photo}))},[w]),(0,p.useEffect)(()=>{Z(u.some(e=>e._id===S._id&&(0,g.v)(S.parameters,e.parameters)));let e=S.parameters.reduce((e,r)=>r.value.extraPrice||0+e,S.basePrice);$({...S,finalPrice:e})},[u,S.parameters,u,d]);let k=(e,r)=>{let t=[...S.parameters];t[l.findIndex(r=>r._id===e)].value=r,$(e=>({...e,parameters:t,photo:r.photo?r.photo:S.photo}))};return(0,n.jsxs)(c(),{sx:{my:2},children:[(0,n.jsxs)(o.ZP,{sx:{gap:2,flexDirection:{md:"row",xs:"column"}},children:[n.jsx(c(),{sx:{flex:"1 0 50%"},children:n.jsx("img",{style:{height:500,width:"100%",objectFit:"contain"},src:`${i.LB}/${S.photo}`})}),(0,n.jsxs)(c(),{sx:{flexGrow:1},children:[n.jsx(x(),{variant:"h5",children:r}),n.jsx(x(),{variant:"body1",sx:{my:2},children:t}),(0,n.jsxs)(x(),{variant:"h6",sx:{color:"primary.main"},children:[(0,s.Jw)(S.finalPrice)," ₸"]}),l.map((e,r)=>n.jsx(m.Z,{activeValue:S.parameters[r].value,handleSelect:k,param:e},e._id)),(0,n.jsxs)(c(),{sx:{display:"flex",alignItems:"center",gap:2,my:2},children:[n.jsx(y.Z,{handleChangeCartCounter:e=>{if("remove"===e){if(S.cartCounter<=1){$({...S,cartCounter:1});return}$(e=>({...e,cartCounter:--e.cartCounter}));return}if(S.cartCounter>=10){$({...S,cartCounter:10}),v.toast.info("Для оптовой покупки на выгодных условиях свяжитесь с нами по телефону");return}$(e=>({...e,cartCounter:++e.cartCounter}))},isInCart:P,cartCounter:S.cartCounter}),P?n.jsx(h(),{startIcon:n.jsx(j.Z,{}),fullWidth:!0,variant:"outlined",color:"error",onClick:()=>{if(!P)return;let e=u.findIndex(e=>e._id===S._id&&(0,g.v)(S.parameters,e.parameters));_(e)},children:"Удалить из корзины"}):n.jsx(h(),{startIcon:n.jsx(j.Z,{}),fullWidth:!0,variant:"contained",color:"primary",onClick:()=>{let e=JSON.parse(JSON.stringify(S));b(e),Z(!0)},children:"В корзину"})]})]})]}),(0,n.jsxs)(c(),{children:[n.jsx(x(),{variant:"h5",sx:{mt:3,mb:2},children:"Описание товара:"}),n.jsx(x(),{sx:{whiteSpace:"pre-line"},children:a})]})]})};a()}catch(e){a(e)}})},83008:(e,r,t)=>{t.a(e,async(e,a)=>{try{t.d(r,{Z:()=>o});var n=t(20997);t(16689);var i=t(65585),s=t(7463),l=t(48468),c=e([l]);l=(c.then?(await c)():c)[0];let o=({initialProducts:e})=>(0,n.jsxs)(i.J,{initialProducts:e,children:[n.jsx(s.Z,{}),n.jsx(l.Z,{})]});a()}catch(e){a(e)}})},39981:(e,r,t)=>{t.r(r),t.d(r,{default:()=>i});var a=t(20997),n=t(56859);function i(){return(0,a.jsxs)(n.Html,{lang:"ru",children:[a.jsx(n.Head,{}),(0,a.jsxs)("body",{children:[a.jsx(n.Main,{}),a.jsx(n.NextScript,{})]})]})}}};