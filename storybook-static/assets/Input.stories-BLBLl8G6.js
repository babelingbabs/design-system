import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as U}from"./index-Bc2G9s8g.js";import{a as B}from"./Typography-SXg8BEL6.js";import{m as H}from"./proxy-C-SjNVQx.js";const J={sm:{input:"text-xs px-2.5",height:"h-7"},md:{input:"text-sm px-3",height:"h-9"},lg:{input:"text-base px-4",height:"h-11"}};function a({label:r,hint:q,errorMessage:h,successMessage:x,inputState:f="default",size:z="md",prefix:c,suffix:d,fullWidth:D=!1,id:$,className:P="",disabled:g,...b}){const _=U.useId(),p=$??_,y=`${p}-hint`,s=f==="error"||!!h,u=f==="success"||!!x,m=h??x??q,V=s?"border-[var(--color-error)] focus-within:shadow-[0_0_0_3px_rgba(155,29,32,0.15)]":u?"border-[var(--color-success)] focus-within:shadow-[0_0_0_3px_rgba(45,106,79,0.15)]":"border-[var(--color-border-default)] focus-within:border-[var(--color-accent-500)] focus-within:shadow-[var(--shadow-focus)]",{input:A,height:O}=J[z];return e.jsxs("div",{className:`flex flex-col gap-1.5 ${D?"w-full":""} ${P}`,children:[r&&e.jsx(B,{htmlFor:p,required:b.required,children:r}),e.jsxs(H.div,{className:`
          relative flex items-center
          ${O}
          bg-[var(--color-bg-base)]
          border rounded-[var(--radius-md)]
          transition-all duration-150
          shadow-[var(--shadow-inner)]
          ${V}
          ${g?"opacity-50 cursor-not-allowed bg-[var(--color-bg-subtle)]":""}
        `.replace(/\s+/g," ").trim(),children:[c&&e.jsx("span",{className:"flex items-center pl-3 text-[var(--color-fg-tertiary)] shrink-0",children:c}),e.jsx("input",{id:p,"aria-describedby":m?y:void 0,"aria-invalid":s,disabled:g,className:`
            w-full h-full bg-transparent
            ${A}
            text-[var(--color-fg-primary)]
            placeholder:text-[var(--color-fg-tertiary)]
            focus:outline-none
            disabled:cursor-not-allowed
            ${c?"pl-1.5":""}
            ${d?"pr-1.5":""}
          `.replace(/\s+/g," ").trim(),style:{fontFamily:"var(--font-sans)"},...b}),d&&e.jsx("span",{className:"flex items-center pr-3 text-[var(--color-fg-tertiary)] shrink-0",children:d})]}),m&&e.jsx("p",{id:y,className:`
            text-xs leading-normal
            ${s?"text-[var(--color-error)]":""}
            ${u?"text-[var(--color-success)]":""}
            ${!s&&!u?"text-[var(--color-fg-tertiary)]":""}
          `.replace(/\s+/g," ").trim(),children:m})]})}a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},successMessage:{required:!1,tsType:{name:"string"},description:""},inputState:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},prefix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Leading icon or adornment"},suffix:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Trailing icon or adornment"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const ae={title:"Components/Input",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`# Input
Minimal. Precise. The border animates to accent color on focus,
a focus ring provides a clear accessibility indicator.

States: default, focus (CSS), error, success, disabled.`}}},argTypes:{inputState:{control:"select",options:["default","error","success"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},fullWidth:{control:"boolean"}}},l={args:{label:"Field label",placeholder:"Placeholder text",hint:"Helper text goes here"},render:r=>e.jsx("div",{className:"w-80",children:e.jsx(a,{...r})})},t={name:"All Sizes",render:()=>e.jsxs("div",{className:"space-y-4 p-6 w-80",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(a,{size:"sm",label:"Small",placeholder:"Small input"}),e.jsx(a,{size:"md",label:"Medium",placeholder:"Medium input"}),e.jsx(a,{size:"lg",label:"Large",placeholder:"Large input"})]})},o={name:"All States",render:()=>e.jsxs("div",{className:"space-y-4 p-6 w-80",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(a,{label:"Default",placeholder:"Type something...",hint:"This is helper text"}),e.jsx(a,{label:"With value",defaultValue:"Kingsley Design",hint:"Looks great"}),e.jsx(a,{label:"Error state",defaultValue:"invalid@",inputState:"error",errorMessage:"Please enter a valid email address"}),e.jsx(a,{label:"Success state",defaultValue:"kingsley@design.com",inputState:"success",successMessage:"Email verified"}),e.jsx(a,{label:"Disabled",defaultValue:"Cannot edit this",disabled:!0,hint:"This field is read-only"})]})},K=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:[e.jsx("circle",{cx:"6",cy:"6",r:"4"}),e.jsx("path",{d:"M9 9l3 3"})]}),Z=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"1",y:"3",width:"12",height:"9",rx:"1"}),e.jsx("path",{d:"M1 4l6 5 6-5"})]}),G=()=>e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M1 7C1 7 3.5 3 7 3s6 4 6 4-2.5 4-6 4-6-4-6-4Z"}),e.jsx("circle",{cx:"7",cy:"7",r:"1.5"})]}),i={name:"With Prefix / Suffix",render:()=>e.jsxs("div",{className:"space-y-4 p-6 w-80",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(a,{label:"Search",placeholder:"Search components...",prefix:e.jsx(K,{})}),e.jsx(a,{label:"Email",placeholder:"you@example.com",prefix:e.jsx(Z,{}),type:"email"}),e.jsx(a,{label:"Password",placeholder:"Enter password",type:"password",suffix:e.jsx(G,{})}),e.jsx(a,{label:"Amount",placeholder:"0.00",prefix:e.jsx("span",{className:"text-xs font-medium",style:{fontFamily:"var(--font-mono)"},children:"$"}),suffix:e.jsx("span",{className:"text-xs",style:{fontFamily:"var(--font-mono)"},children:"USD"}),type:"number"})]})},n={name:"Form Example",render:()=>e.jsxs("div",{className:"p-8 max-w-sm space-y-4",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx("div",{children:e.jsx("p",{className:"text-xs text-[var(--color-fg-tertiary)] mb-6",style:{fontFamily:"var(--font-mono)",letterSpacing:"0.08em"},children:"NEW PROJECT"})}),e.jsx(a,{label:"Project name",placeholder:"My Design System",required:!0,fullWidth:!0}),e.jsx(a,{label:"Description",placeholder:"A brief description...",fullWidth:!0}),e.jsx(a,{label:"Repository URL",placeholder:"github.com/user/repo",prefix:e.jsx("span",{className:"text-xs",style:{fontFamily:"var(--font-mono)"},children:"https://"}),fullWidth:!0}),e.jsx(a,{label:"Email",type:"email",placeholder:"you@example.com",inputState:"error",errorMessage:"This email is already in use",fullWidth:!0})]})};var v,j,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Field label',
    placeholder: 'Placeholder text',
    hint: 'Helper text goes here'
  },
  render: (args: Story['args']) => <div className="w-80">
      <Input {...args} />
    </div>
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,N,I;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="space-y-4 p-6 w-80" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
}`,...(I=(N=t.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var k,E,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'All States',
  render: () => <div className="space-y-4 p-6 w-80" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Input label="Default" placeholder="Type something..." hint="This is helper text" />
      <Input label="With value" defaultValue="Kingsley Design" hint="Looks great" />
      <Input label="Error state" defaultValue="invalid@" inputState="error" errorMessage="Please enter a valid email address" />
      <Input label="Success state" defaultValue="kingsley@design.com" inputState="success" successMessage="Email verified" />
      <Input label="Disabled" defaultValue="Cannot edit this" disabled hint="This field is read-only" />
    </div>
}`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var W,C,M;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'With Prefix / Suffix',
  render: () => <div className="space-y-4 p-6 w-80" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Input label="Search" placeholder="Search components..." prefix={<SearchIcon />} />
      <Input label="Email" placeholder="you@example.com" prefix={<MailIcon />} type="email" />
      <Input label="Password" placeholder="Enter password" type="password" suffix={<EyeIcon />} />
      <Input label="Amount" placeholder="0.00" prefix={<span className="text-xs font-medium" style={{
      fontFamily: 'var(--font-mono)'
    }}>$</span>} suffix={<span className="text-xs" style={{
      fontFamily: 'var(--font-mono)'
    }}>USD</span>} type="number" />
    </div>
}`,...(M=(C=i.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var F,L,R;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Form Example',
  render: () => <div className="p-8 max-w-sm space-y-4" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-6" style={{
        fontFamily: 'var(--font-mono)',
        letterSpacing: '0.08em'
      }}>
          NEW PROJECT
        </p>
      </div>
      <Input label="Project name" placeholder="My Design System" required fullWidth />
      <Input label="Description" placeholder="A brief description..." fullWidth />
      <Input label="Repository URL" placeholder="github.com/user/repo" prefix={<span className="text-xs" style={{
      fontFamily: 'var(--font-mono)'
    }}>https://</span>} fullWidth />
      <Input label="Email" type="email" placeholder="you@example.com" inputState="error" errorMessage="This email is already in use" fullWidth />
    </div>
}`,...(R=(L=n.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const re=["Default","Sizes","States","WithAdornments","FormExample"];export{l as Default,n as FormExample,t as Sizes,o as States,i as WithAdornments,re as __namedExportsOrder,ae as default};
