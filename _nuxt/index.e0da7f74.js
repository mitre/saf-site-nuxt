import{T as h,M as S,H as y}from"./components.be6aabdc.js";import{d as w,g as m,i as G,j as T,o as d,c as r,k as e,w as u,b as k,a as t,u as l,_ as M,l as H,ae as b,af as I,ag as C}from"./entry.cd87f4bf.js";import{_ as L}from"./LoadingSpinner.2de385ac.js";import{u as B}from"./asyncData.47a5955a.js";const N=n=>(b("data-v-de484ad7"),n=n(),I(),n),P={class:"max-w-8xl relative h-full min-h-screen bg-neutral-1 px-4 pt-4 sm:px-6 lg:px-8"},V={key:0},A={class:"sm:flex sm:items-center"},E={class:"sm:flex-auto"},F=N(()=>t("h1",{class:"text-center text-5xl font-bold text-header"},[t("strong",null,"Getting Started")],-1)),$=["innerHTML"],j={key:1,class:"text-center my-5"},q=w({__name:"index",setup(n){const p=m(!1),_=m(),x=async()=>{_.value=await B("getGettingStartedPage",()=>GqlGetGettingStartedPage()).then(({data:s})=>{var i,a,o,c;return(c=(o=(a=(i=s==null?void 0:s.value)==null?void 0:i.gettingStartedPage)==null?void 0:a.data)==null?void 0:o.attributes)==null?void 0:c.content})};return G(async()=>{await T(async()=>{await x(),p.value=!0})}),(s,i)=>{const a=h,o=S,c=y,g=M,f=L,v=H;return d(),r("div",null,[e(c,null,{default:u(()=>[e(a,null,{default:u(()=>[k("Getting Started")]),_:1}),e(o,{name:"description",content:"Getting started content for MITRE SAF©"})]),_:1}),t("div",null,[e(g),t("div",P,[l(p)&&l(_)?(d(),r("div",V,[t("div",A,[t("div",E,[F,t("div",{class:"prose-img prose prose-xl mx-auto mb-6 mt-8 max-w-5xl text-left leading-8 dark:prose-invert prose-code:text-start prose-li:text-start",style:{},innerHTML:l(_)},null,8,$)])])])):(d(),r("div",j,[e(f)])),e(v)])])])}}});const K=C(q,[["__scopeId","data-v-de484ad7"]]);export{K as default};
