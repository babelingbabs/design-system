import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{L as S,a as c,C as d,M as i,T as s,H as N,b as w,c as k,d as L,e as M,f as B}from"./Typography-SXg8BEL6.js";import"./index-Bc2G9s8g.js";const F={title:"Foundation/Typography",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`# Typography
Two typefaces. One system.

**Inter** — the workhorse. Clean, neutral, humanist. Does the heavy lifting for UI text.

**JetBrains Mono** — the accent. Technical labels, metadata, code. Brings the blueprint feel.`}}}},a={name:"Heading Scale",render:()=>e.jsxs("div",{className:"space-y-6 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(N,{children:"H1 — Heading One"}),e.jsx(w,{children:"H2 — Heading Two"}),e.jsx(k,{children:"H3 — Heading Three"}),e.jsx(L,{children:"H4 — Heading Four"}),e.jsx(M,{children:"H5 — Heading Five"}),e.jsx(B,{children:"H6 — Heading Six"})]})},r={name:"Body Text",render:()=>e.jsxs("div",{className:"space-y-4 p-6 max-w-2xl",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(s,{size:"lg",children:"Large body — Precision and restraint define this system. Every decision is deliberate, every token considered."}),e.jsx(s,{children:"Base body — The spacing scale runs on a 4px grid. The type scale follows optical proportions. Nothing arbitrary."}),e.jsx(s,{size:"sm",children:"Small body — Details matter. A 1px border, a 2px shadow. These are the things that separate good from great."}),e.jsx(s,{size:"xs",secondary:!0,children:"Extra small body, secondary — Version 0.1.0"})]})},o={name:"Text Colors",render:()=>e.jsxs("div",{className:"space-y-2 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(s,{children:"Primary — main content text"}),e.jsx(s,{secondary:!0,children:"Secondary — supporting text, captions"}),e.jsx(s,{muted:!0,children:"Muted — placeholders, disabled labels"})]})},t={name:"Accent Elements",render:()=>e.jsxs("div",{className:"space-y-4 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(S,{children:"Lead text — a larger, lighter paragraph style used for introductions and summaries."}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(c,{children:"Field label"}),e.jsx(c,{required:!0,children:"Required field"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(d,{children:"Caption text — small, muted"}),e.jsx(d,{muted:!1,children:"Caption text — secondary color"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(i,{children:"const value = 42"}),e.jsx(i,{accent:!0,children:"accent.500 / #4A7BA7"}),e.jsx(i,{size:"xs",children:"v0.1.0 · build 2026"})]})]})},n={name:"In Context",render:()=>e.jsxs("div",{className:"p-8 max-w-xl space-y-3",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(i,{accent:!0,size:"xs",children:"design system / components"}),e.jsx(w,{children:"Clean, precise, architectural."}),e.jsx(S,{children:"Built for product designers who think in systems. Every detail is intentional."}),e.jsx(s,{secondary:!0,children:"Inspired by Swiss design principles and technical blueprints. The grid is your friend. Whitespace is not wasted space."}),e.jsx(d,{children:"v0.1.0 · Kingsley Design System · 2026"})]})};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Heading Scale',
  render: () => <div className="space-y-6 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <H1>H1 — Heading One</H1>
      <H2>H2 — Heading Two</H2>
      <H3>H3 — Heading Three</H3>
      <H4>H4 — Heading Four</H4>
      <H5>H5 — Heading Five</H5>
      <H6>H6 — Heading Six</H6>
    </div>
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,y,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Body Text',
  render: () => <div className="space-y-4 p-6 max-w-2xl" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Text size="lg">
        Large body — Precision and restraint define this system. Every decision is deliberate,
        every token considered.
      </Text>
      <Text>
        Base body — The spacing scale runs on a 4px grid. The type scale follows optical
        proportions. Nothing arbitrary.
      </Text>
      <Text size="sm">
        Small body — Details matter. A 1px border, a 2px shadow. These are the things
        that separate good from great.
      </Text>
      <Text size="xs" secondary>
        Extra small body, secondary — Version 0.1.0
      </Text>
    </div>
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,u,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Text Colors',
  render: () => <div className="space-y-2 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Text>Primary — main content text</Text>
      <Text secondary>Secondary — supporting text, captions</Text>
      <Text muted>Muted — placeholders, disabled labels</Text>
    </div>
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,H,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Accent Elements',
  render: () => <div className="space-y-4 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Lead>Lead text — a larger, lighter paragraph style used for introductions and summaries.</Lead>
      <div className="space-y-2">
        <Label>Field label</Label>
        <Label required>Required field</Label>
      </div>
      <div className="space-y-1">
        <Caption>Caption text — small, muted</Caption>
        <Caption muted={false}>Caption text — secondary color</Caption>
      </div>
      <div className="space-y-1">
        <Mono>const value = 42</Mono>
        <Mono accent>accent.500 / #4A7BA7</Mono>
        <Mono size="xs">v0.1.0 · build 2026</Mono>
      </div>
    </div>
}`,...(T=(H=t.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var j,C,f;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'In Context',
  render: () => <div className="p-8 max-w-xl space-y-3" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Mono accent size="xs">design system / components</Mono>
      <H2>Clean, precise, architectural.</H2>
      <Lead>
        Built for product designers who think in systems. Every detail is intentional.
      </Lead>
      <Text secondary>
        Inspired by Swiss design principles and technical blueprints. The grid is your friend.
        Whitespace is not wasted space.
      </Text>
      <Caption>v0.1.0 · Kingsley Design System · 2026</Caption>
    </div>
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const I=["HeadingScale","BodyText","TextColors","AccentElements","TypographyComposition"];export{t as AccentElements,r as BodyText,a as HeadingScale,o as TextColors,n as TypographyComposition,I as __namedExportsOrder,F as default};
