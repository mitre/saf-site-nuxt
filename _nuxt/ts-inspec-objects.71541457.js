import{_ as c}from"./LibraryPage.vue.36d9dc68.js";import{u as l}from"./asyncData.e1824dc4.js";import{g as e,i as u,j as y,v as p,u as t,o as b}from"./entry.ba67b68e.js";import"./components.8bdb585d.js";const L={__name:"ts-inspec-objects",setup(m){const r=e(!1),n=e(""),s=e(""),i=async()=>{await l("getLibraryPageByName",()=>GqlGetLibraryPageByName({name:"TS InSpec Objects"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return u(async()=>{await y(async()=>{await i(),r.value=!0})}),(a,_)=>{const o=c;return b(),p(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{L as default};
