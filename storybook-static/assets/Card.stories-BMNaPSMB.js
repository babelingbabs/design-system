import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{e as $}from"./variants-C6mMCLCi.js";import{m as I}from"./proxy-C-SjNVQx.js";import{B as A}from"./Button-BbfP9HFH.js";import{e as c,T as m,M as u,C as q,d as P}from"./Typography-SXg8BEL6.js";import"./index-Bc2G9s8g.js";const D={default:`
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-subtle)]
    shadow-[var(--shadow-sm)]
  `,outlined:`
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-default)]
  `,elevated:`
    bg-[var(--color-bg-base)]
    border border-[var(--color-border-subtle)]
    shadow-[var(--shadow-md)]
  `,ghost:`
    bg-[var(--color-bg-subtle)]
    border border-transparent
  `};function s({children:a,variant:r="default",interactive:p=!1,noPadding:B=!1,className:_="",onClick:t}){const g=`
    rounded-[var(--radius-lg)]
    overflow-hidden
    ${B?"":"p-6"}
    ${D[r]}
    ${t?"cursor-pointer":""}
    ${_}
  `.replace(/\s+/g," ").trim();return p||t?e.jsx(I.div,{className:g,initial:"rest",animate:"rest",whileHover:"hover",variants:$,onClick:t,role:t?"button":void 0,tabIndex:t?0:void 0,onKeyDown:t?x=>{(x.key==="Enter"||x.key===" ")&&t()}:void 0,children:a}):e.jsx("div",{className:g,children:a})}function v({children:a,className:r=""}){return e.jsx("div",{className:`
        px-6 py-4
        border-b border-[var(--color-border-subtle)]
        -mx-6 -mt-6 mb-6
        ${r}
      `.replace(/\s+/g," ").trim(),children:a})}v.displayName="Card.Header";function f({children:a,className:r=""}){return e.jsx("div",{className:r,children:a})}f.displayName="Card.Body";function b({children:a,className:r=""}){return e.jsx("div",{className:`
        px-6 py-4
        border-t border-[var(--color-border-subtle)]
        -mx-6 -mb-6 mt-6
        flex items-center justify-between
        gap-3
        ${r}
      `.replace(/\s+/g," ").trim(),children:a})}b.displayName="Card.Footer";s.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"Enables hover lift animation",defaultValue:{value:"false",computed:!1}},noPadding:{required:!1,tsType:{name:"boolean"},description:"Remove default padding",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"Card.Header",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"Card.Body",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};b.__docgenInfo={description:"",methods:[],displayName:"Card.Footer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const J={title:"Components/Card",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`# Card
A clean container. Four variants, composable sections.

The \`interactive\` prop enables the hover lift animation via Framer Motion —
a 2px vertical lift with a deeper shadow. Subtle but physical.`}}},argTypes:{variant:{control:"select",options:["default","outlined","elevated","ghost"]},interactive:{control:"boolean"},noPadding:{control:"boolean"}}},o={args:{variant:"default"},render:a=>e.jsxs(s,{...a,className:"max-w-sm",children:[e.jsx(c,{children:"Card Title"}),e.jsx(m,{secondary:!0,className:"mt-1",children:"A clean container for your content. Supports header, body, and footer sections."})]})},l={name:"All Variants",render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-4 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:["default","outlined","elevated","ghost"].map(a=>e.jsxs(s,{variant:a,children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx(c,{children:a}),e.jsx(u,{size:"xs",accent:!0,children:`variant="${a}"`})]}),e.jsxs(m,{secondary:!0,size:"sm",children:["Card content with the ",a," visual treatment."]})]},a))})},d={name:"With Header / Body / Footer",render:()=>e.jsxs(s,{className:"max-w-md",children:[e.jsx(v,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(c,{children:"Project Status"}),e.jsx(u,{size:"xs",accent:!0,children:"v2.4.1"})]})}),e.jsxs(f,{children:[e.jsx(m,{secondary:!0,size:"sm",children:"Design system is in active development. All tokens are finalized. Component library at 60% coverage."}),e.jsx("div",{className:"mt-4 space-y-2",children:[{label:"Tokens",pct:100},{label:"Components",pct:60},{label:"Stories",pct:80}].map(({label:a,pct:r})=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs text-[var(--color-fg-tertiary)] w-24",style:{fontFamily:"var(--font-mono)"},children:a}),e.jsx("div",{className:"flex-1 h-1 bg-[var(--color-bg-muted)] rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-[var(--color-accent-500)] rounded-full transition-all",style:{width:`${r}%`}})}),e.jsxs("span",{className:"text-xs text-[var(--color-fg-tertiary)]",style:{fontFamily:"var(--font-mono)"},children:[r,"%"]})]},a))})]}),e.jsxs(b,{children:[e.jsx(q,{children:"Last updated: today"}),e.jsx(A,{size:"sm",variant:"secondary",children:"View details"})]})]})},n={name:"Interactive (Hover Lift)",render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4 p-6",style:{backgroundColor:"var(--color-bg-base)"},children:["Research","Synthesis","Prototype"].map((a,r)=>e.jsxs(s,{interactive:!0,onClick:()=>{},children:[e.jsx(u,{size:"xs",accent:!0,className:"mb-2",children:String(r+1).padStart(2,"0")}),e.jsx(c,{children:a}),e.jsx(m,{secondary:!0,size:"sm",className:"mt-1",children:"Hover to see the lift effect. Click for interaction."})]},a))})},i={name:"Metric Cards",render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4 p-6",style:{backgroundColor:"var(--color-bg-subtle)"},children:[{label:"Components",value:"5",delta:"+3 this week"},{label:"Tokens",value:"48",delta:"Finalized"},{label:"Stories",value:"24",delta:"+8 this week"}].map(({label:a,value:r,delta:p})=>e.jsxs(s,{variant:"default",children:[e.jsx(q,{className:"block mb-2",children:a}),e.jsx(P,{children:r}),e.jsx(u,{size:"xs",accent:!0,className:"mt-1",children:p})]},a))})};var y,h,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  },
  render: (args: Story['args']) => <Card {...args} className="max-w-sm">
      <H5>Card Title</H5>
      <Text secondary className="mt-1">
        A clean container for your content. Supports header, body, and footer sections.
      </Text>
    </Card>
}`,...(N=(h=o.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var C,j,w;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => <div className="grid grid-cols-2 gap-4 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      {(['default', 'outlined', 'elevated', 'ghost'] as const).map(variant => <Card key={variant} variant={variant}>
          <div className="flex items-center justify-between mb-2">
            <H5>{variant}</H5>
            <Mono size="xs" accent>{\`variant="\${variant}"\`}</Mono>
          </div>
          <Text secondary size="sm">
            Card content with the {variant} visual treatment.
          </Text>
        </Card>)}
    </div>
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var T,H,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'With Header / Body / Footer',
  render: () => <Card className="max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <H5>Project Status</H5>
          <Mono size="xs" accent>v2.4.1</Mono>
        </div>
      </CardHeader>
      <CardBody>
        <Text secondary size="sm">
          Design system is in active development. All tokens are finalized.
          Component library at 60% coverage.
        </Text>
        <div className="mt-4 space-y-2">
          {[{
          label: 'Tokens',
          pct: 100
        }, {
          label: 'Components',
          pct: 60
        }, {
          label: 'Stories',
          pct: 80
        }].map(({
          label,
          pct
        }) => <div key={label} className="flex items-center gap-3">
              <span className="text-xs text-[var(--color-fg-tertiary)] w-24" style={{
            fontFamily: 'var(--font-mono)'
          }}>
                {label}
              </span>
              <div className="flex-1 h-1 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-accent-500)] rounded-full transition-all" style={{
              width: \`\${pct}%\`
            }} />
              </div>
              <span className="text-xs text-[var(--color-fg-tertiary)]" style={{
            fontFamily: 'var(--font-mono)'
          }}>
                {pct}%
              </span>
            </div>)}
        </div>
      </CardBody>
      <CardFooter>
        <Caption>Last updated: today</Caption>
        <Button size="sm" variant="secondary">View details</Button>
      </CardFooter>
    </Card>
}`,...(S=(H=d.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var k,z,R;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Interactive (Hover Lift)',
  render: () => <div className="grid grid-cols-3 gap-4 p-6" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      {['Research', 'Synthesis', 'Prototype'].map((title, i) => <Card key={title} interactive onClick={() => {}}>
          <Mono size="xs" accent className="mb-2">
            {String(i + 1).padStart(2, '0')}
          </Mono>
          <H5>{title}</H5>
          <Text secondary size="sm" className="mt-1">
            Hover to see the lift effect. Click for interaction.
          </Text>
        </Card>)}
    </div>
}`,...(R=(z=n.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var F,M,V;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Metric Cards',
  render: () => <div className="grid grid-cols-3 gap-4 p-6" style={{
    backgroundColor: 'var(--color-bg-subtle)'
  }}>
      {[{
      label: 'Components',
      value: '5',
      delta: '+3 this week'
    }, {
      label: 'Tokens',
      value: '48',
      delta: 'Finalized'
    }, {
      label: 'Stories',
      value: '24',
      delta: '+8 this week'
    }].map(({
      label,
      value,
      delta
    }) => <Card key={label} variant="default">
          <Caption className="block mb-2">{label}</Caption>
          <H4>{value}</H4>
          <Mono size="xs" accent className="mt-1">{delta}</Mono>
        </Card>)}
    </div>
}`,...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const Q=["Default","Variants","WithSections","Interactive","MetricCards"];export{o as Default,n as Interactive,i as MetricCards,l as Variants,d as WithSections,Q as __namedExportsOrder,J as default};
