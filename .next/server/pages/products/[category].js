"use strict";(()=>{var e={};e.id=708,e.ids=[708,888],e.modules={32573:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{config:()=>d,default:()=>n,getServerSideProps:()=>q,getStaticPaths:()=>x,getStaticProps:()=>c,reportWebVitals:()=>g,routeModule:()=>f,unstable_getServerProps:()=>h,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>b,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>y});var i=t(87093),u=t(35244),o=t(1323),a=t(39981),p=t(49413),l=t(47541),m=e([p,l]);[p,l]=m.then?(await m)():m;let n=(0,o.l)(l,"default"),c=(0,o.l)(l,"getStaticProps"),x=(0,o.l)(l,"getStaticPaths"),q=(0,o.l)(l,"getServerSideProps"),d=(0,o.l)(l,"config"),g=(0,o.l)(l,"reportWebVitals"),y=(0,o.l)(l,"unstable_getStaticProps"),P=(0,o.l)(l,"unstable_getStaticPaths"),b=(0,o.l)(l,"unstable_getStaticParams"),h=(0,o.l)(l,"unstable_getServerProps"),S=(0,o.l)(l,"unstable_getServerSideProps"),f=new i.PagesRouteModule({definition:{kind:u.x.PAGES,page:"/products/[category]",pathname:"/products/[category]",bundlePath:"",filename:""},components:{App:p.default,Document:a.default},userland:l});s()}catch(e){s(e)}})},47541:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>d,getStaticPaths:()=>x,getStaticProps:()=>q});var i=t(20997),u=t(35139),o=t(37290),a=t(94144),p=t(99648),l=t(40968),m=t.n(l),n=t(11163),c=e([u,p]);async function x(){return{paths:(await p.default.get(`${o.LB}/categories`)).data.map(e=>({params:{category:e.urlPath}})),fallback:"blocking"}}async function q({params:e}){let{category:r}=e;try{let{data:e}=await p.default.get(`${o.LB}/products?category=${r}`);return{props:{initialProducts:e},revalidate:60}}catch(e){return console.error(e),{props:{initialProducts:[]}}}}[u,p]=c.then?(await c)():c;let d=({initialProducts:e})=>{let{category:r}=(0,n.useRouter)().query,t=(0,a.Qo)(r);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(m(),{children:[(0,i.jsxs)("title",{children:[t," - ProHockey"]}),i.jsx("meta",{name:"description",content:`Товары категории ${t}`}),i.jsx("meta",{name:"keywords",content:`${t}, ключевые слова`}),i.jsx("meta",{property:"og:title",content:`${t} - ProHockey`}),i.jsx("meta",{property:"og:description",content:`Описание категории ${t}`}),i.jsx("meta",{property:"og:url",content:`https://yourwebsite.com/products/${t}`})]}),i.jsx(u.$s,{initialProducts:e})]})};s()}catch(e){s(e)}})},63013:e=>{e.exports=require("@mui/base")},27123:e=>{e.exports=require("@mui/base/ClassNameGenerator")},57483:e=>{e.exports=require("@mui/base/FocusTrap")},84683:e=>{e.exports=require("@mui/base/Popper")},48951:e=>{e.exports=require("@mui/base/Portal")},75194:e=>{e.exports=require("@mui/base/unstable_useModal")},35412:e=>{e.exports=require("@mui/base/useBadge")},79799:e=>{e.exports=require("@mui/base/utils")},26179:e=>{e.exports=require("@mui/icons-material/NavigateNext")},18442:e=>{e.exports=require("@mui/material/styles")},57077:e=>{e.exports=require("@mui/material/utils")},97986:e=>{e.exports=require("@mui/system")},243:e=>{e.exports=require("@mui/system/RtlProvider")},79590:e=>{e.exports=require("@mui/system/colorManipulator")},39826:e=>{e.exports=require("@mui/system/createStyled")},51573:e=>{e.exports=require("@mui/system/createTheme")},42681:e=>{e.exports=require("@mui/system/styleFunctionSx")},9021:e=>{e.exports=require("@mui/system/useMediaQuery")},40845:e=>{e.exports=require("@mui/system/useThemeProps")},46024:e=>{e.exports=require("@mui/system/useThemeWithoutDefault")},90657:e=>{e.exports=require("@mui/utils")},72031:e=>{e.exports=require("@mui/utils/HTMLElementType")},3543:e=>{e.exports=require("@mui/utils/capitalize")},76686:e=>{e.exports=require("@mui/utils/chainPropTypes")},73559:e=>{e.exports=require("@mui/utils/composeClasses")},46517:e=>{e.exports=require("@mui/utils/createChainedFunction")},62583:e=>{e.exports=require("@mui/utils/debounce")},90697:e=>{e.exports=require("@mui/utils/deepmerge")},10065:e=>{e.exports=require("@mui/utils/deprecatedPropType")},77968:e=>{e.exports=require("@mui/utils/elementAcceptingRef")},92450:e=>{e.exports=require("@mui/utils/elementTypeAcceptingRef")},91416:e=>{e.exports=require("@mui/utils/formatMuiErrorMessage")},71392:e=>{e.exports=require("@mui/utils/generateUtilityClass")},62558:e=>{e.exports=require("@mui/utils/generateUtilityClasses")},44676:e=>{e.exports=require("@mui/utils/getScrollbarSize")},89846:e=>{e.exports=require("@mui/utils/integerPropType")},83713:e=>{e.exports=require("@mui/utils/isMuiElement")},98880:e=>{e.exports=require("@mui/utils/ownerDocument")},87653:e=>{e.exports=require("@mui/utils/ownerWindow")},70515:e=>{e.exports=require("@mui/utils/refType")},91080:e=>{e.exports=require("@mui/utils/requirePropFactory")},71459:e=>{e.exports=require("@mui/utils/resolveProps")},31009:e=>{e.exports=require("@mui/utils/setRef")},67229:e=>{e.exports=require("@mui/utils/unsupportedProp")},59315:e=>{e.exports=require("@mui/utils/useControlled")},27319:e=>{e.exports=require("@mui/utils/useEnhancedEffect")},6440:e=>{e.exports=require("@mui/utils/useEventCallback")},21954:e=>{e.exports=require("@mui/utils/useForkRef")},43018:e=>{e.exports=require("@mui/utils/useId")},23157:e=>{e.exports=require("@mui/utils/useIsFocusVisible")},45122:e=>{e.exports=require("@mui/utils/usePreviousProps")},79790:e=>{e.exports=require("@mui/utils/useTimeout")},68103:e=>{e.exports=require("clsx")},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},40968:e=>{e.exports=require("next/head")},580:e=>{e.exports=require("prop-types")},16689:e=>{e.exports=require("react")},66405:e=>{e.exports=require("react-dom")},1469:e=>{e.exports=require("react-is")},84466:e=>{e.exports=require("react-transition-group")},20997:e=>{e.exports=require("react/jsx-runtime")},99648:e=>{e.exports=import("axios")},3590:e=>{e.exports=import("react-toastify")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},12781:e=>{e.exports=require("stream")},59796:e=>{e.exports=require("zlib")}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[567,330,859,288,413,952],()=>t(32573));module.exports=s})();