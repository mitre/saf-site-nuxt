import{H as y,T as M,M as w}from"./components.0f07fe70.js";import{_ as H}from"./Component.vue.88a155c6.js";import{g as e,h as C,i as L,j as N,y as I,c as S,k as r,w as x,u as n,p as A,o as B,b as E}from"./entry.92446cf5.js";import{u as R,f as F}from"./gql.d766a4f7.js";import{s as T}from"./useSlugify.31da7e80.js";import"./scrollToTop.vue.e05ad0cc.js";import"./LoadingSpinner.40eef0e9.js";const z={__name:"index",setup(G){const d=e({}),m=e(""),p=e([]),f=e(""),u=e(""),_=e([]),D=e(0),b=e(""),h=e(!1),g=C(),k=async()=>{d.value=await R("getIndexDocumentation",()=>F()).then(({data:o})=>{if(!o.value||!o.value.currentDoc.data[0])return A("/docs");const s=o.value.currentDoc.data[0].attributes;b.value=s.subsections[0].title,f.value=s.section_title,_.value=o.value.allLinks.data.flatMap(t=>t.attributes.subsections),u.value=g.hash.replace(/^#+/,"");const{content:i}=s.subsections[0],a=[],c=new DOMParser().parseFromString(i,"text/html");let l=-1;for(const t of c.body.childNodes)t.localName==="h1"&&(a.push({title:t.outerText,subtitles:[]}),l+=1,t.id=T(t.outerText)),t.localName==="h2"&&l!=-1&&(a[l].subtitles.push(t.outerText),t.id=T(t.outerText));return m.value=c.documentElement.outerHTML,p.value=a,o.value.allLinks.data.map(t=>({section_title:t.attributes.section_title,subsections:t.attributes.subsections}))})};return L(async()=>{await N(async()=>{await k(),h.value=!0})}),I(async o=>{u.value=o.hash.replace(/^#+/,"")}),(o,s)=>{const i=M,a=w,v=y,c=H;return B(),S("div",null,[r(v,null,{default:x(()=>[r(i,null,{default:x(()=>[E("Documentation")]),_:1}),r(a,{name:"description",content:"Collection of MITRE SAF© documentation"})]),_:1}),r(c,{"all-links":n(_),"current-heading":n(u),"current-index":n(D),"current-section-title":n(f),"current-subsection":n(b),"doc-data":n(d),"is-loaded":n(h),"table-of-contents":n(p),"rendered-content":n(m)},null,8,["all-links","current-heading","current-index","current-section-title","current-subsection","doc-data","is-loaded","table-of-contents","rendered-content"])])}}};export{z as default};
