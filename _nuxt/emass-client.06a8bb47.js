import{_ as l}from"./LibraryPage.vue.40a050d9.js";import{u as c}from"./asyncData.47a5955a.js";import{g as e,i as u,j as m,m as y,u as t,o as p}from"./entry.cd87f4bf.js";import"./components.be6aabdc.js";const L={__name:"emass-client",setup(_){const r=e(!1),n=e(""),s=e(""),i=async()=>{await c("getLibraryPageByName",()=>GqlGetLibraryPageByName({name:"eMASS Client"}),{initialCache:!1}).then(({data:a})=>{n.value=a.value.libraryPages.data[0].attributes.content,s.value=a.value.libraryPages.data[0].attributes.library})};return u(async()=>{await m(async()=>{await i(),r.value=!0})}),(a,b)=>{const o=l;return p(),y(o,{"is-loaded":t(r),"page-title":t(s),"library-content":t(n)},null,8,["is-loaded","page-title","library-content"])}}};export{L as default};
