import{f as S}from"./index-Cq_GZlP2.js";import{j as n}from"./jsx-runtime-BZf_YgVj.js";import{r as t}from"./index-CEThVCg_.js";import"./index-Bqoxw6Vv.js";const b=(e,r)=>{const s=t.useCallback(i=>{e.current&&!e.current.contains(i.target)&&r()},[e,r]);t.useEffect(()=>(window.addEventListener("click",s),()=>{window.removeEventListener("click",s)}),[s])},w=({placeholder:e,choices:r,value:s,updateValue:i,displayedValue:d,openBottom:m=!1})=>{const[l,u]=t.useState(!1),p=t.useRef(null),j=t.useMemo(()=>{const a=["select-field"];return l&&a.push("select-field--open"),m&&a.push("select-field--bottom"),a.join(" ")},[l,m]),_=a=>{i(a),u(!1)};return b(p,()=>u(!1)),n.jsxs("div",{className:j,onClick:()=>u(!l),ref:p,children:[n.jsx("div",{className:"select-field__placeholder",children:s?d(s):e}),l&&n.jsx("div",{className:"select-field__choices-wrapper",children:n.jsx("div",{className:"select-field__choices",children:r.map((a,x)=>n.jsx("div",{className:"select-field__choice",onClick:()=>_(a),children:d(a)},x))})})]})};w.__docgenInfo={description:"",methods:[],displayName:"SelectField",props:{placeholder:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"T | null",elements:[{name:"T"},{name:"null"}]},description:""},choices:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"Array<T>"},description:""},displayedValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => string",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"string"}}},description:""},updateValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""},openBottom:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const E={title:"Atoms/Form/Select Field",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text"},value:{control:"object"},choices:{control:"object"},openBottom:{control:"boolean"}},args:{updateValue:S(),displayedValue:e=>e}},c={args:{placeholder:"Select a value",value:null,choices:["One","Two","Three"],displayedValue:e=>e}},o={args:{placeholder:"Select a value",value:null,choices:[{id:1,name:"One"},{id:2,name:"Two"},{id:3,name:"Three"}],displayedValue:e=>e.name}};var f,h,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a value',
    value: null,
    choices: ['One', 'Two', 'Three'],
    displayedValue: value => (value as string)
  }
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var T,g,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select a value',
    value: null,
    choices: [{
      id: 1,
      name: 'One'
    }, {
      id: 2,
      name: 'Two'
    }, {
      id: 3,
      name: 'Three'
    }],
    displayedValue: value => value.name
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const N=["Basic","WithObject"];export{c as Basic,o as WithObject,N as __namedExportsOrder,E as default};
