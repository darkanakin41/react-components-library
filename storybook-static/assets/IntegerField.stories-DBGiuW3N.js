import{j as t}from"./jsx-runtime-BZf_YgVj.js";import{G as d}from"./iconBase-BZzzhtsF.js";import{r as v}from"./index-CEThVCg_.js";import{B as u}from"./Button-Dzwbzz2o.js";import"./Keystroke-cC3_-6Gz.js";function h(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 11h14v2H5z"},child:[]}]})(a)}function x(a){return d({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"},child:[]}]})(a)}const p=({value:a,onChange:g,minValue:i=-1/0,maxValue:o=1/0})=>{const[n,f]=v.useState(a),s=e=>{e<i&&(e=o),e>o&&(e=i),f(e),g(e)};return t.jsxs("div",{className:"integer-field",children:[t.jsx(u,{className:"minus",onClick:()=>s(n-1),children:t.jsx(h,{})}),t.jsx("input",{type:"number",onChange:e=>s(parseInt(e.target.value)),value:n}),t.jsx(u,{className:"plus",onClick:()=>s(n+1),children:t.jsx(x,{})})]})};p.__docgenInfo={description:"",methods:[],displayName:"IntegerField",props:{value:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},minValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"-Infinity",computed:!1}},maxValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"Infinity",computed:!0}}}};const V={title:"Molecules/Form/Integer Field",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{minValue:{control:"number"},maxValue:{control:"number"}},args:{onChange:()=>{}}},r={args:{value:150,minValue:0,maxValue:151}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 150,
    minValue: 0,
    maxValue: 151
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const C=["Basic"];export{r as Basic,C as __namedExportsOrder,V as default};