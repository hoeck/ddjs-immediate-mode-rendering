import{d as _,$ as u,y as h,b as a,e as t,x as s,A as c,F as f,Z as g,o as n,a0 as v,l as x,g as b}from"../modules/vue-BhYfuUkS.js";import{u as y,h as N,c as m,b as k}from"../index-BnNzGnf4.js";import{N as w}from"./NoteDisplay-C_HboPxv.js";import"../modules/shiki-DoU7puTF.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},j={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},D={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=_({__name:"print",setup(M){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const l=h(()=>d.value.map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,i)=>(n(),a("div",L,[t("div",T,[t("div",V,[t("h1",j,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(l.value,(e,r)=>(n(),a("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",D,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(c(p)),1),v(" "+s(e==null?void 0:e.title)+" ",1),A])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<l.value.length-1?(n(),a("hr",C)):b("v-if",!0)]))),128))])]))}}),Z=k(F,[["__file","/home/erik/projects/ddjs-immediate-mode-rendering/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
