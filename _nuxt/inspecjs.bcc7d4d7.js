import{_ as c}from"./LibraryPage.vue.6ca22b53.js";import{u as l,t as u}from"./gql.d766a4f7.js";import{g as e,i as y,j as p,v as m,u as t,o as _}from"./entry.92446cf5.js";import"./components.0f07fe70.js";const P={__name:"inspecjs",setup(b){const r=e(!1),n=e(""),s=e(""),i=async()=>{await l("getLibraryPageByName",()=>u({name:"InSpecJS"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return y(async()=>{await p(async()=>{await i(),r.value=!0})}),(a,g)=>{const o=c;return _(),m(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{P as default};
