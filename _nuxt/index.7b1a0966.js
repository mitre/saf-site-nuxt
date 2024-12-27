import{T as f,M as w,H as k}from"./components.8bdb585d.js";import{d as F,g as x,i as N,j as A,o as d,c as u,k as s,w as _,b as m,a as e,F as M,r as T,_ as H,l as Q,e as g,u as V,x as B}from"./entry.ba67b68e.js";import{u as C}from"./asyncData.e1824dc4.js";const D={class:"relativ h-full min-h-screen px-4 pt-4 sm:px-6 lg:px-8"},E={"aria-labelledby":"faq-heading"},L={class:"max-2xl mx-auto px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"},$=e("div",null,[e("h2",{id:"faq-heading",class:"text-4xl font-bold tracking-tight text-header"}," Frequently asked questions "),e("p",{class:"mt-4 text-xl"},[m(" Have a question you don't see covered here? Please contact "),e("a",{href:"mailto:saf@groups.mitre.org",class:"text-nav-active"},"saf@groups.mitre.org")])],-1),P={class:"mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3"},S={class:"text-2xl font-bold"},j={class:"prose prose-xl mt-3 text-base dark:prose-invert"},q={class:"mt-4 font-bold text-nav-active"},J=F({__name:"index",setup(G){const h=x(!1),p=x([]),v=new DOMParser,b=async()=>{p.value=await C("getAllFAQs",()=>GqlFAQs()).then(({data:o})=>{var c,n;return((n=(c=o==null?void 0:o.value)==null?void 0:c.faqs)==null?void 0:n.data.map(t=>{var a,r,i;return{questionNumber:((a=t==null?void 0:t.attributes)==null?void 0:a.question_number)??0,question:((r=t==null?void 0:t.attributes)==null?void 0:r.question)??"Error",answer:((i=t==null?void 0:t.attributes)==null?void 0:i.answer)??"Error"}}))??[]})};return N(async()=>{await A(async()=>{await b(),h.value=!0})}),(o,c)=>{const n=f,t=w,a=k,r=H,i=B,y=Q;return d(),u("div",null,[s(a,null,{default:_(()=>[s(n,null,{default:_(()=>[m("FAQ")]),_:1}),s(t,{name:"description",content:"Collection of frequently asked questions"})]),_:1}),e("div",null,[s(r),e("div",D,[e("section",E,[e("div",L,[$,e("div",P,[(d(!0),u(M,null,T(p.value,l=>(d(),u("div",{key:l.questionNumber,class:"flex flex-col"},[e("span",S,g(l.question),1),e("span",j,g(V(v).parseFromString(l.answer??"","text/html").body.childNodes[0].innerText.substring(0,125)+"..."),1),e("span",q,[s(i,{to:`/faq/${l.questionNumber}`},{default:_(()=>[m("View More")]),_:2},1032,["to"])])]))),128))])])])]),s(y)])])}}});export{J as default};
