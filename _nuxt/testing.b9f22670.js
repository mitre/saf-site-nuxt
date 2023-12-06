import{d as f,t as h,o,c,a as t,F as p,r as v,k as e,w as r,v as k,bA as T,e as b,u as w,x as y,b as C,ci as s,cj as H,_ as L,l as M}from"./entry.609befc3.js";import{H as D,T as F,M as S}from"./components.8829a41d.js";const A={class:"my-10"},B={class:"mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8"},N=t("div",{class:"mx-auto max-w-3xl flex-row text-left"},[t("h1",{class:"mt-2 max-w-prose text-3xl font-bold tracking-tight text-center text-header sm:text-4xl"}," Our Documentation Collection ")],-1),V={class:"mt-20"},$={class:"grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"},j={class:"flow-root rounded-lg px-6 pb-8"},E={class:"inline-flex items-center justify-center rounded-xl bg-neutral-2 p-6 shadow-lg"},I={class:"mt-8 text-xl font-bold leading-8 tracking-tight"},R=["innerHTML"],q=f({__name:"Collections",props:{collection:{type:Array,required:!0}},setup(d){const i=d,{collection:_}=h(i);return(u,m)=>{const a=y;return o(),c("div",A,[t("div",B,[N,t("div",V,[t("div",$,[(o(!0),c(p,null,v(w(_),(n,l)=>(o(),c("div",{key:l,class:"border-2 border-neutral-3 bg-neutral-1 pt-6 hover:border-nav-active hover:bg-opacity-60"},[e(a,{to:n.link},{default:r(()=>[t("div",j,[t("div",null,[t("div",E,[(o(),k(T(n.icon),{class:"h-12 w-12 flex-shrink-0 text-fill","aria-hidden":"true"}))]),t("h3",I,b(n.name),1),t("p",{class:"ml-8 mt-5 text-left leading-7",innerHTML:n.description},null,8,R)])])]),_:2},1032,["to"])]))),128))])])])])}}}),z={__name:"testing",setup(d){const i=[{name:"General",icon:s,description:"Testing",link:"/"},{name:"Heimdall©",icon:H,description:"Testing",link:"/"},{name:"Vulcan©",icon:s,description:"Testing",link:"/"},{name:"SAF CLI",icon:s,description:"Testing",link:"/"},{name:"eMasser",icon:s,description:"Testing",link:"/"}];return(_,u)=>{const m=L,a=F,n=S,l=D,x=q,g=M;return o(),c(p,null,[e(m),t("div",null,[e(l,null,{default:r(()=>[e(a,null,{default:r(()=>[C("Documentation")]),_:1}),e(n,{name:"description",content:"Collection of MITRE SAF© documentation"})]),_:1}),e(x,{collection:i})]),e(g)],64)}}};export{z as default};
