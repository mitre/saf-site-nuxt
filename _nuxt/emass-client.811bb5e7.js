import{_ as l}from"./LibraryPage.vue.c2e31e60.js";import{u as c,r as u}from"./gql.f972eafe.js";import{g as e,i as m,j as y,m as p,u as t,o as _}from"./entry.5dacb799.js";import"./components.c411cf5c.js";const P={__name:"emass-client",setup(b){const r=e(!1),n=e(""),s=e(""),i=async()=>{await c("getLibraryPageByName",()=>u({name:"eMASS Client"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return m(async()=>{await y(async()=>{await i(),r.value=!0})}),(a,g)=>{const o=l;return _(),p(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{P as default};
