import{_ as c}from"./LibraryPage.vue.c2e31e60.js";import{u as l,r as u}from"./gql.f972eafe.js";import{g as e,i as y,j as m,m as p,u as t,o as _}from"./entry.5dacb799.js";import"./components.c411cf5c.js";const P={__name:"ohdf-converters",setup(b){const r=e(!1),n=e(""),s=e(""),o=async()=>{await l("getLibraryPageByName",()=>u({name:"OHDF Converters"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return y(async()=>{await m(async()=>{await o(),r.value=!0})}),(a,f)=>{const i=c;return _(),p(i,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{P as default};
