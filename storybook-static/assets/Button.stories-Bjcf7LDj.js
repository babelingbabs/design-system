import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{B as r}from"./Button-BbfP9HFH.js";import"./index-Bc2G9s8g.js";import"./proxy-C-SjNVQx.js";const F={title:"Components/Button",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`# Button
Four variants. Three sizes. Clean states. No decoration.

Buttons use \`framer-motion\` for a subtle press (scale 0.97) that gives
physicality without being cartoonish.`}}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg"]},loading:{control:"boolean"},disabled:{control:"boolean"},iconOnly:{control:"boolean"}}},e={args:{children:"Button",variant:"primary",size:"md"}},n={name:"All Variants",render:()=>a.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:[a.jsx(r,{variant:"primary",children:"Primary"}),a.jsx(r,{variant:"secondary",children:"Secondary"}),a.jsx(r,{variant:"ghost",children:"Ghost"}),a.jsx(r,{variant:"danger",children:"Danger"})]})},s={name:"All Sizes",render:()=>a.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:[a.jsx(r,{size:"sm",children:"Small"}),a.jsx(r,{size:"md",children:"Medium"}),a.jsx(r,{size:"lg",children:"Large"})]})},o={name:"States",render:()=>a.jsxs("div",{className:"space-y-6 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-[var(--color-fg-tertiary)] mb-3",style:{fontFamily:"var(--font-mono)"},children:"Default"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx(r,{variant:"primary",children:"Primary"}),a.jsx(r,{variant:"secondary",children:"Secondary"}),a.jsx(r,{variant:"ghost",children:"Ghost"}),a.jsx(r,{variant:"danger",children:"Danger"})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-[var(--color-fg-tertiary)] mb-3",style:{fontFamily:"var(--font-mono)"},children:"Disabled"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx(r,{variant:"primary",disabled:!0,children:"Primary"}),a.jsx(r,{variant:"secondary",disabled:!0,children:"Secondary"}),a.jsx(r,{variant:"ghost",disabled:!0,children:"Ghost"}),a.jsx(r,{variant:"danger",disabled:!0,children:"Danger"})]})]}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-[var(--color-fg-tertiary)] mb-3",style:{fontFamily:"var(--font-mono)"},children:"Loading"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx(r,{variant:"primary",loading:!0,children:"Loading"}),a.jsx(r,{variant:"secondary",loading:!0,children:"Loading"}),a.jsx(r,{variant:"ghost",loading:!0,children:"Loading"})]})]})]})},C=()=>a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M2 7h10M8 3l4 4-4 4"})}),d=()=>a.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",children:a.jsx("path",{d:"M7 2v10M2 7h10"})}),c=()=>a.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"7",cy:"7",r:"2"}),a.jsx("path",{d:"M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.9 2.9l1.1 1.1M10 10l1.1 1.1M2.9 11.1 4 10M10 4l1.1-1.1"})]}),i={name:"With Icons",render:()=>a.jsxs("div",{className:"flex flex-wrap items-center gap-3 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:[a.jsx(r,{icon:a.jsx(d,{}),children:"Add item"}),a.jsx(r,{variant:"secondary",trailingIcon:a.jsx(C,{}),children:"Continue"}),a.jsx(r,{variant:"ghost",icon:a.jsx(c,{}),children:"Settings"}),a.jsx(r,{iconOnly:!0,icon:a.jsx(d,{}),variant:"primary",children:"Add"}),a.jsx(r,{iconOnly:!0,icon:a.jsx(c,{}),variant:"secondary",children:"Settings"}),a.jsx(r,{iconOnly:!0,icon:a.jsx(c,{}),variant:"ghost",size:"sm",children:"Settings"})]})},l={name:"Size × Variant Matrix",render:()=>a.jsx("div",{className:"p-6 space-y-4",style:{backgroundColor:"var(--color-bg-base)"},children:["primary","secondary","ghost","danger"].map(t=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-[10px] text-[var(--color-fg-tertiary)] w-20 shrink-0",style:{fontFamily:"var(--font-mono)"},children:t}),a.jsx(r,{variant:t,size:"sm",children:"Small"}),a.jsx(r,{variant:t,size:"md",children:"Medium"}),a.jsx(r,{variant:t,size:"lg",children:"Large"})]},t))})};var m,u,g;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md'
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,p,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="flex flex-wrap items-center gap-3 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,y,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'All Sizes',
  render: () => <div className="flex flex-wrap items-center gap-3 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var j,f,b;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'States',
  render: () => <div className="space-y-6 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{
        fontFamily: 'var(--font-mono)'
      }}>Default</p>
        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{
        fontFamily: 'var(--font-mono)'
      }}>Disabled</p>
        <div className="flex gap-3">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="danger" disabled>Danger</Button>
        </div>
      </div>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{
        fontFamily: 'var(--font-mono)'
      }}>Loading</p>
        <div className="flex gap-3">
          <Button variant="primary" loading>Loading</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="ghost" loading>Loading</Button>
        </div>
      </div>
    </div>
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,N,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'With Icons',
  render: () => <div className="flex flex-wrap items-center gap-3 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Button icon={<Plus />}>Add item</Button>
      <Button variant="secondary" trailingIcon={<ArrowRight />}>Continue</Button>
      <Button variant="ghost" icon={<Gear />}>Settings</Button>
      <Button iconOnly icon={<Plus />} variant="primary">Add</Button>
      <Button iconOnly icon={<Gear />} variant="secondary">Settings</Button>
      <Button iconOnly icon={<Gear />} variant="ghost" size="sm">Settings</Button>
    </div>
}`,...(k=(N=i.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var z,M,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Size × Variant Matrix',
  render: () => <div className="p-6 space-y-4" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      {(['primary', 'secondary', 'ghost', 'danger'] as const).map(variant => <div key={variant} className="flex items-center gap-4">
          <span className="text-[10px] text-[var(--color-fg-tertiary)] w-20 shrink-0" style={{
        fontFamily: 'var(--font-mono)'
      }}>
            {variant}
          </span>
          <Button variant={variant} size="sm">Small</Button>
          <Button variant={variant} size="md">Medium</Button>
          <Button variant={variant} size="lg">Large</Button>
        </div>)}
    </div>
}`,...(w=(M=l.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const P=["Default","Variants","Sizes","States","WithIcons","Matrix"];export{e as Default,l as Matrix,s as Sizes,o as States,n as Variants,i as WithIcons,P as __namedExportsOrder,F as default};
