import{j as a}from"./jsx-runtime-BZf_YgVj.js";import{r}from"./index-CEThVCg_.js";const n=({format:c={hour:"2-digit",minute:"2-digit",second:"2-digit"},locale:d="fr-FR"})=>{const[t,m]=r.useState(new Date);return r.useEffect(()=>{const l=setInterval(()=>{m(new Date)},1e3);return()=>clearInterval(l)},[t]),a.jsx(a.Fragment,{children:t.toLocaleTimeString(d,c)})};n.__docgenInfo={description:"Display Time in a given format and update it automatically",methods:[],displayName:"DateDisplay",props:{format:{required:!1,tsType:{name:"Intl.DateTimeFormatOptions"},description:"",defaultValue:{value:`{
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}`,computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'fr-FR'",computed:!1}}}};const g={title:"Atoms/DateDisplay",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{}},e={args:{}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const f=["Basic"];export{e as Basic,f as __namedExportsOrder,g as default};
