import{T as V,M as E,H as F}from"./components.c411cf5c.js";import{o as s,m as L,k as c,d as A,g,i as B,j as N,c as a,w as f,b as w,a as e,F as u,r as b,ai as G,_ as I,l as R,e as h,u as U,f as z}from"./entry.5dacb799.js";import{_ as q}from"./LoadingSpinner.134bb367.js";import{u as y,w as O,x as $}from"./gql.f972eafe.js";function j(k,r){return s(),L("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[c("path",{"fill-rule":"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clip-rule":"evenodd"})])}const J={class:"h-full min-h-screen"},K={class:"relative px-6 sm:py-12 lg:pb-28 lg:pt-16"},P={key:0,class:"relative md:flex"},Q={class:"mx-auto flex-1"},W={id:"Content Area",class:"relative mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-6xl lg:px-8"},X=G('<div id="Overview Section" class="sm:pl-4"><h1 class="block text-4xl font-extrabold leading-8 tracking-tight text-header sm:text-5xl"> Our Training </h1><p class="mt-6"> The MITRE SAF <sup>©</sup> team offers training classes. Dates and sign-up links to participate in synchronous (typically virtual) class offerings are posted on this page when training dates are finalized. To preview classes, watch asynchronously, or reference class content, see the class details, materials, and recordings below. </p><div class="flex gap-8"><a href="https://mitre.github.io/saf-training/" class="hover:underline"><p class="mt-4 text-nav-active after:content-[&#39;_↗&#39;]"> MITRE SAF <sup>©</sup> Training Site - GitHub </p></a><a href="https://mitre-saf-training.netlify.app/" class="hover:underline"><p class="mt-4 text-nav-active after:content-[&#39;_↗&#39;]"> MITRE SAF <sup>©</sup> Training Site - Netlify </p></a></div></div>',1),Y={id:"Schedule",class:"pointer-events-auto relative order-2 pr-6 pt-8"},Z=e("h2",{class:"pt-6 text-4xl font-bold sm:pl-3"}," Upcoming Classes ",-1),tt={key:0,class:"lg:grid lg:grid-cols-2"},et={class:"mt-4 leading-6 lg:col-span-7 xl:col-span-8"},st={class:"flex-0 pl-4"},at={class:"font-semibold"},nt={class:"mt-2 flex flex-col text-muted xl:flex-row"},it={class:"flex items-start space-x-3 pl-1"},ot={class:"mt-0.5"},lt=e("span",{class:"sr-only"},"Date",-1),rt={key:0},ct=["datetime"],dt={key:1},_t=e("p",null,"TBD",-1),pt=[_t],mt={key:0,class:"flex-end right-2 top-0 pt-3"},xt=["href"],ht={key:1,class:"flex-end right-2 top-0 pt-3"},gt=e("a",{type:"button","aria-disabled":"true",class:"inline-flex items-center rounded-full border border-transparent bg-button-disabled px-3 py-1.5 text-center text-sm font-medium text-button-disabled-text shadow-sm sm:px-3 sm:py-1.5"}," Coming Soon! ",-1),vt=[gt],ft={key:1,class:"relative mt-6 max-w-sm pl-2"},ut=e("p",null,[w(" Sorry there are no upcoming classes at this time. If you would like to host a class please contact, "),e("a",{href:"mailto:saf@groups.mitre.org",class:"text-nav-active hover:underline"},"saf@groups.mitre.org")],-1),bt=[ut],yt={id:"Embeded Videos",class:"order-1 flex-1 pt-9"},wt=e("h2",{class:"block pt-4 text-4xl font-bold leading-8 tracking-tight sm:pl-4"}," Classes ",-1),kt=e("hr",{class:"mt-4 w-full"},null,-1),Tt={key:0},St={class:"mt-7 w-full sm:pl-4"},Dt={class:"text-3xl font-semibold"},Ct=["innerHTML"],Mt={key:0,class:"mt-5 w-full"},Ht={key:1},Vt=e("p",{class:"relative mt-6 max-w-sm pl-2"}," Classes are being updated. Check back later! ",-1),Et=[Vt],Ft={key:1,class:"grid h-screen place-items-center"},Gt=A({__name:"index",setup(k){const r=g([]),m=g([]),v=g(!1),T=async()=>{r.value=await y("getTrainingData",()=>O()).then(({data:n})=>{var i,l;return((l=(i=n==null?void 0:n.value)==null?void 0:i.trainingCourses)==null?void 0:l.data.map(t=>{var d,_,p;return{name:((d=t==null?void 0:t.attributes)==null?void 0:d.name)??"",description:((_=t==null?void 0:t.attributes)==null?void 0:_.description)??"",index:((p=t==null?void 0:t.attributes)==null?void 0:p.index)??0}}))??[]})},S=async()=>{m.value=await y("getScheduleData",()=>$()).then(({data:n})=>{var i,l;return((l=(i=n==null?void 0:n.value)==null?void 0:i.courseSchedules)==null?void 0:l.data.map(t=>{var d,_,p,x;return{title:((d=t==null?void 0:t.attributes)==null?void 0:d.title)??"",date:((_=t==null?void 0:t.attributes)==null?void 0:_.date)??"",link:((p=t==null?void 0:t.attributes)==null?void 0:p.link)??"",index:((x=t==null?void 0:t.attributes)==null?void 0:x.index)??0}}))??[]})},D=()=>{var n,i;(n=r==null?void 0:r.value)==null||n.sort((l,t)=>l.index-t.index),(i=m==null?void 0:m.value)==null||i.sort((l,t)=>l.index-t.index)},C=(n,i="en-US")=>new Date(n).toLocaleDateString(i),M=(n,i="en-US")=>new Date(n).toLocaleTimeString(i,{hour:"2-digit",minute:"2-digit"});return B(async()=>{await N(async()=>{await T(),await S(),D(),v.value=!0})}),(n,i)=>{const l=V,t=E,d=F,_=I,p=q,x=R;return s(),a("div",null,[c(d,null,{default:f(()=>[c(l,null,{default:f(()=>[w("Training")]),_:1}),c(t,{name:"description",content:"Collection of MITRE SAF© training content"})]),_:1}),e("div",null,[c(_),e("div",J,[e("div",K,[v.value?(s(),a("div",P,[e("div",Q,[e("div",W,[X,e("div",Y,[e("div",null,[Z,m.value.length?(s(),a("div",tt,[e("ol",et,[(s(!0),a(u,null,b(m.value,o=>(s(),a("li",{key:o.index,class:"relative flex space-x-6 py-6"},[e("div",st,[e("h3",at,h(o.title),1),e("div",nt,[e("div",it,[e("span",ot,[lt,c(U(j),{class:"h-5 w-5 text-muted","aria-hidden":"true"})]),o.date!==""?(s(),a("span",rt,[e("time",{datetime:o.date},h(C(o.date))+" at "+h(M(o.date))+" EST ",9,ct)])):(s(),a("span",dt,pt))])])]),o.link!=""?(s(),a("div",mt,[e("a",{type:"button",href:o.link,target:"_blank",class:"inline-flex items-center rounded-full border border-transparent bg-button-accent px-3 py-1.5 text-center text-sm font-medium text-button-text shadow-sm ring-1 ring-accent hover:bg-opacity-80 sm:px-3 sm:py-1.5"},"Sign Up",8,xt)])):(s(),a("div",ht,vt))]))),128))])])):(s(),a("div",ft,bt))])]),e("div",yt,[wt,kt,r.value.length?(s(),a("div",Tt,[(s(!0),a(u,null,b(r.value,(o,H)=>(s(),a("div",{key:o.index},[e("div",St,[e("h1",Dt,h(o.name),1),e("div",{class:"prose prose-xl mb-8 mt-8 text-left leading-8 dark:prose-invert max-w-full prose-code:text-start prose-li:text-start",innerHTML:o.description},null,8,Ct)]),H!=r.value.length-1?(s(),a("hr",Mt)):z("",!0)]))),128))])):(s(),a("div",Ht,Et))])])])])):(s(),a("div",Ft,[c(p)]))])]),c(x)])])}}});export{Gt as default};
