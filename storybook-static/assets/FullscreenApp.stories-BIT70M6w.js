import{j as e}from"./jsx-runtime-BZf_YgVj.js";import{r as L}from"./index-CEThVCg_.js";import{B as s}from"./Block-DFdio_GI.js";import{fivemParameters as b}from"./preview-DdazCiV1.js";const g=({classeName:i,headerLeft:u,headerCenter:v,headerRight:x,children:n,contentLeft:l,contentRight:a,footerLeft:j,footerCenter:_,footerRight:T})=>{const k=L.useMemo(()=>{const t=["app"];return i&&t.push(i),l&&t.push("app--left-column"),a&&t.push("app--right-column"),t.join(" ")},[i,l,a]);return e.jsxs("div",{className:k,children:[e.jsxs("div",{className:"app__header",children:[e.jsx("div",{className:"app__header-left",children:u}),e.jsx("div",{className:"app__header-center",children:v}),e.jsx("div",{className:"app__header-right",children:x})]}),e.jsxs("div",{className:"app__content",children:[n,!n&&e.jsx("div",{className:"app__content-left",children:l}),!n&&e.jsx("div",{className:"app__content-right",children:a})]}),e.jsxs("div",{className:"app__footer",children:[e.jsx("div",{className:"app__footer-left",children:j}),e.jsx("div",{className:"app__footer-center",children:_}),e.jsx("div",{className:"app__footer-right",children:T})]})]})};g.__docgenInfo={description:"",methods:[],displayName:"FullscreenApp",props:{classeName:{required:!1,tsType:{name:"string"},description:""},headerLeft:{required:!1,tsType:{name:"JSX.Element"},description:""},headerCenter:{required:!1,tsType:{name:"JSX.Element"},description:""},headerRight:{required:!1,tsType:{name:"JSX.Element"},description:""},footerLeft:{required:!1,tsType:{name:"JSX.Element"},description:""},footerCenter:{required:!1,tsType:{name:"JSX.Element"},description:""},footerRight:{required:!1,tsType:{name:"JSX.Element"},description:""},contentLeft:{required:!1,tsType:{name:"JSX.Element"},description:""},contentRight:{required:!1,tsType:{name:"JSX.Element"},description:""},footer:{required:!1,tsType:{name:"JSX.Element"},description:""}}};const y=""+new URL("logo-transparent-white-CsRZX-ir.png",import.meta.url).href,S={title:"Organisms/Layout/Fullscreen App",component:g,parameters:{layout:"centered",...b},argTypes:{},args:{}},r={args:{headerRight:e.jsx("img",{src:y,alt:"logo",className:"logo",style:{height:"3rem",opacity:.6}}),contentLeft:e.jsx(s,{title:"Left Column",overflowBody:!0,children:e.jsx("div",{style:{height:"100vh"},children:"This is the body of the block.'"})})}},o={args:{headerRight:e.jsx("img",{src:y,alt:"logo",className:"logo",style:{height:"3rem",opacity:.6}}),contentLeft:e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Left Column",children:"This is the body of the block."}),e.jsx(s,{title:"Second Left Column",overflowBody:!0,children:e.jsx("div",{style:{height:"100vh"},children:"This is the body of the block.'"})})]}),contentRight:e.jsx(s,{title:"Right Column",overflowBody:!0,children:e.jsx("div",{style:{height:"100vh"},children:"This is the body of the block.'"})}),footerLeft:e.jsx("div",{style:{padding:".5rem 1rem"},children:"Footer Left"}),footerCenter:e.jsx("div",{style:{padding:".5rem 1rem"},children:"Footer Center"}),footerRight:e.jsx("div",{style:{padding:".5rem 1rem"},children:"Footer Right"})}};var d,c,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headerRight: <img src={logo} alt="logo" className="logo" style={{
      height: "3rem",
      opacity: .60
    }} />,
    contentLeft: <Block title="Left Column" overflowBody>\r
      <div style={{
        height: '100vh'
      }}>This is the body of the block.'</div>\r
    </Block>
  }
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headerRight: <img src={logo} alt="logo" className="logo" style={{
      height: "3rem",
      opacity: .60
    }} />,
    contentLeft: <>\r
      <Block title="Left Column">\r
        This is the body of the block.\r
      </Block>\r
      <Block title="Second Left Column" overflowBody>\r
      <div style={{
          height: '100vh'
        }}>This is the body of the block.'</div>\r
    </Block></>,
    contentRight: <Block title="Right Column" overflowBody>\r
      <div style={{
        height: '100vh'
      }}>This is the body of the block.'</div>\r
    </Block>,
    footerLeft: <div style={{
      padding: ".5rem 1rem"
    }}>Footer Left</div>,
    footerCenter: <div style={{
      padding: ".5rem 1rem"
    }}>Footer Center</div>,
    footerRight: <div style={{
      padding: ".5rem 1rem"
    }}>Footer Right</div>
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const E=["Simple","Full"];export{o as Full,r as Simple,E as __namedExportsOrder,S as default};
