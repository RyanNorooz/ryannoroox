var b=Object.defineProperty,f=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var r=(o,t,e)=>t in o?b(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,c=(o,t)=>{for(var e in t||(t={}))x.call(t,e)&&r(o,e,t[e]);if(a)for(var e of a(t))y.call(t,e)&&r(o,e,t[e]);return o},_=(o,t)=>f(o,k(t));import{a as C,b as g}from"./index.8dd086bd.js";import{b as h,y as u,o as v,e as B,x as n,f as m,C as w,t as F,u as N,F as T,h as V}from"./vendor.013a0997.js";const $={class:"text-center text-teal-700 dark:text-gray-200"},j=V(" Back to Home "),E=defineComponent({name:"ErrorLayout"});function H(o){const{t}=useI18n();return(e,s)=>{const i=C,p=u("router-view"),l=u("router-link"),d=g;return v(),B(T,null,[n(i),m("main",$,[n(p),n(l,{to:"/",class:"btn btn-primary m-3"},{default:w(()=>[j]),_:1}),m("button",{class:"btn btn-secondary m-3",onClick:s[0]||(s[0]=D=>e.$router.back())},F(N(t)("button.back")),1)]),n(d)],64)}}const q=h(_(c({},E),{setup:H}));export{q as default};
