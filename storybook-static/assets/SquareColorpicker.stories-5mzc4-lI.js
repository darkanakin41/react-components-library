import{f as u}from"./index-Cq_GZlP2.js";import{j as s}from"./jsx-runtime-BZf_YgVj.js";import"./index-Bqoxw6Vv.js";import"./index-CEThVCg_.js";const m=({colors:o,onClick:i})=>s.jsx("div",{className:"color-picker",children:Object.keys(o).map((n,p)=>{const r=o[n];return r===void 0?null:s.jsx("div",{className:"color-picker-color",onClick:()=>i(parseInt(n)),style:{backgroundColor:`rgb(${r[0]}, ${r[1]}, ${r[2]})`}},p)})});m.__docgenInfo={description:"",methods:[],displayName:"SquareColorpicker",props:{colors:{required:!0,tsType:{name:"Map",elements:[{name:"string"},{name:"tuple",raw:"[number, number, number]",elements:[{name:"number"},{name:"number"},{name:"number"}]}],raw:"Map<string, RGB>"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(colorIndex: number) => void",signature:{arguments:[{type:{name:"number"},name:"colorIndex"}],return:{name:"void"}}},description:""}}};const k={title:"Atoms/Form/Square Colorpicker",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{colors:{control:"object"}},args:{onClick:u()}},e={args:{colors:{0:[255,0,0],1:[0,255,0],2:[0,0,255]}}};var t,a,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    colors: {
      // @ts-ignore
      0: [255, 0, 0],
      1: [0, 255, 0],
      2: [0, 0, 255]
    }
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const f=["Basic"];export{e as Basic,f as __namedExportsOrder,k as default};
