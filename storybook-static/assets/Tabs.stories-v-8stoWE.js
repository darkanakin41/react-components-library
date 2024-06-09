import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{N as h}from"./NavigatorTab-w-PuxUCy.js";import{r as j}from"./index-CEThVCg_.js";import"./Button-Dzwbzz2o.js";import"./Keystroke-cC3_-6Gz.js";const f=({tabs:o,prevNext:T=!1,expanded:v=!1})=>{var c;const[n,N]=j.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(h,{currentTab:n,onTabClick:N,tabs:o,prevNext:T,expanded:v}),(c=o[n])==null?void 0:c.component]})};f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{prevNext:{defaultValue:{value:"false",computed:!1},required:!1},expanded:{defaultValue:{value:"false",computed:!1},required:!1}}};const q={title:"Organisms/Tabs",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{prevNext:{control:{type:"boolean"}},expanded:{control:{type:"boolean"}},tabs:{control:{type:"object"}}},args:{}},s=[{label:"Tab 1",component:e.jsx(e.Fragment,{children:"This is tab 1"})},{label:"Tab 2",component:e.jsx(e.Fragment,{children:"This is tab 2"})},{label:"Tab 3",component:e.jsx(e.Fragment,{children:"This is tab 3"})}],a={args:{tabs:s}},r={args:{prevNext:!0,tabs:s}},t={args:{prevNext:!0,expanded:!0,tabs:s}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tabs
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,i,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    prevNext: true,
    tabs
  }
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var x,b,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    prevNext: true,
    expanded: true,
    tabs
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const B=["Basic","WithPrevNext","Expanded"];export{a as Basic,t as Expanded,r as WithPrevNext,B as __namedExportsOrder,q as default};
