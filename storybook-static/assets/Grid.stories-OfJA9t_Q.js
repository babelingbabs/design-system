import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as S}from"./index-Bc2G9s8g.js";import{A as V}from"./index-BvmJ1O94.js";import{m as $}from"./proxy-C-SjNVQx.js";import{B as C}from"./Button-BbfP9HFH.js";import{C as p,M as o}from"./Typography-SXg8BEL6.js";const z={1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4",6:"grid-cols-6",8:"grid-cols-8",12:"grid-cols-12"},I={none:"gap-0",xs:"gap-1",sm:"gap-2",md:"gap-4",lg:"gap-6",xl:"gap-8"};function i({children:a,cols:r=12,gap:s="md",className:n=""}){return e.jsx("div",{className:`grid ${z[r]} ${I[s]} ${n}`,children:a})}const q={1:"col-span-1",2:"col-span-2",3:"col-span-3",4:"col-span-4",5:"col-span-5",6:"col-span-6",7:"col-span-7",8:"col-span-8",9:"col-span-9",10:"col-span-10",11:"col-span-11",12:"col-span-12"};function l({children:a,span:r=1,className:s=""}){return e.jsx("div",{className:`${q[r]} ${s}`,children:a})}function w({visible:a=!0,columns:r=12,color:s="var(--color-accent-500)",unit:n=8}){return e.jsx(V,{children:a&&e.jsxs($.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:"fixed inset-0 pointer-events-none z-[9999]","aria-hidden":!0,children:[e.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`radial-gradient(circle, ${s}33 1px, transparent 1px)`,backgroundSize:`${n}px ${n}px`}}),e.jsx("div",{className:"absolute inset-0 mx-auto max-w-screen-xl px-6",style:{width:"100%"},children:e.jsx("div",{className:"h-full",style:{display:"grid",gridTemplateColumns:`repeat(${r}, 1fr)`,gap:"16px"},children:Array.from({length:r}).map((x,v)=>e.jsx("div",{style:{backgroundColor:`${s}0D`,borderLeft:`1px solid ${s}33`}},v))})}),e.jsx("div",{className:"absolute bottom-4 right-4 flex items-center gap-2",style:{fontFamily:"var(--font-mono)"},children:e.jsxs("span",{className:"text-[10px] px-1.5 py-0.5 rounded-sm",style:{color:s,border:`1px solid ${s}66`,backgroundColor:`${s}1A`,letterSpacing:"0.08em"},children:[r,"col / ",n,"px"]})})]})})}const M={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},R={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around"};function u({children:a,direction:r="col",gap:s="md",align:n="stretch",justify:x="start",wrap:v=!1,className:T=""}){return e.jsx("div",{className:`
        flex
        ${r==="col"?"flex-col":"flex-row"}
        ${I[s]}
        ${M[n]}
        ${R[x]}
        ${v?"flex-wrap":""}
        ${T}
      `.replace(/\s+/g," ").trim(),children:a})}i.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cols:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 6 | 8 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"12",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"GridItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},span:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"GridOverlay",props:{visible:{required:!1,tsType:{name:"boolean"},description:"Whether the overlay is visible",defaultValue:{value:"true",computed:!1}},columns:{required:!1,tsType:{name:"number"},description:"Number of columns",defaultValue:{value:"12",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Column color",defaultValue:{value:"'var(--color-accent-500)'",computed:!1}},unit:{required:!1,tsType:{name:"number"},description:"Base unit in px for dot grid",defaultValue:{value:"8",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'col'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'col'"}]},description:"",defaultValue:{value:"'col'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'stretch'",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'between' | 'around'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'between'"},{name:"literal",value:"'around'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const E={title:"Components/Grid",tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`# Grid
Layout primitives and the architectural grid overlay.

The \`GridOverlay\` can be toggled on any surface to reveal the underlying
column grid and dot grid — useful during design review and development.

The \`Stack\` component handles flex layouts with typed gap/alignment props.`}}}};function t({span:a,children:r}){return e.jsx("div",{className:"h-12 rounded-[var(--radius-sm)] flex items-center justify-center",style:{backgroundColor:"var(--color-accent-100)",border:"1px solid var(--color-accent-200)"},children:e.jsx(o,{size:"xs",accent:!0,children:r??`${a} col`})})}const d={name:"Layout Grid (12-col)",render:()=>e.jsxs("div",{className:"p-6 space-y-4",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsx(p,{className:"block mb-4",children:"12-column grid, 16px gap"}),e.jsx(i,{cols:12,gap:"md",children:Array.from({length:12}).map((a,r)=>e.jsx(l,{span:1,children:e.jsx(t,{children:r+1})},r))}),e.jsxs(i,{cols:12,gap:"md",children:[e.jsx(l,{span:6,children:e.jsx(t,{span:6})}),e.jsx(l,{span:6,children:e.jsx(t,{span:6})})]}),e.jsxs(i,{cols:12,gap:"md",children:[e.jsx(l,{span:4,children:e.jsx(t,{span:4})}),e.jsx(l,{span:4,children:e.jsx(t,{span:4})}),e.jsx(l,{span:4,children:e.jsx(t,{span:4})})]}),e.jsxs(i,{cols:12,gap:"md",children:[e.jsx(l,{span:3,children:e.jsx(t,{span:3})}),e.jsx(l,{span:9,children:e.jsx(t,{span:9})})]}),e.jsxs(i,{cols:12,gap:"md",children:[e.jsx(l,{span:8,children:e.jsx(t,{span:8})}),e.jsx(l,{span:2,children:e.jsx(t,{span:2})}),e.jsx(l,{span:2,children:e.jsx(t,{span:2})})]})]})},c={name:"Grid Overlay (Toggle)",render:()=>{const[a,r]=S.useState(!1);return e.jsxs("div",{className:"p-6 relative min-h-64",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx(o,{size:"sm",children:"Architectural Grid Overlay"}),e.jsx(C,{variant:"secondary",size:"sm",onClick:()=>r(s=>!s),children:a?"Hide grid":"Show grid"})]}),e.jsx(i,{cols:12,gap:"md",children:[8,4,6,6,3,3,6].map((s,n)=>e.jsx(l,{span:s,children:e.jsx("div",{className:"h-24 rounded-[var(--radius-md)] flex items-end p-3",style:{backgroundColor:"var(--color-bg-subtle)",border:"1px solid var(--color-border-subtle)"},children:e.jsxs(o,{size:"xs",children:[s," col"]})})},n))}),e.jsx(w,{visible:a,columns:12,unit:8})]})}},m={name:"Stack Layouts",render:()=>e.jsxs("div",{className:"p-6 space-y-8",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsxs("div",{children:[e.jsx(p,{className:"block mb-3",children:"Vertical stack (default)"}),e.jsx(u,{gap:"sm",className:"w-48",children:["Item A","Item B","Item C"].map(a=>e.jsx("div",{className:"h-8 rounded-[var(--radius-sm)] flex items-center px-3",style:{backgroundColor:"var(--color-bg-subtle)",border:"1px solid var(--color-border-subtle)"},children:e.jsx(o,{size:"xs",children:a})},a))})]}),e.jsxs("div",{children:[e.jsx(p,{className:"block mb-3",children:"Horizontal stack"}),e.jsx(u,{direction:"row",gap:"sm",align:"center",children:["Item A","Item B","Item C"].map(a=>e.jsx("div",{className:"h-8 rounded-[var(--radius-sm)] flex items-center px-3",style:{backgroundColor:"var(--color-bg-subtle)",border:"1px solid var(--color-border-subtle)"},children:e.jsx(o,{size:"xs",children:a})},a))})]}),e.jsxs("div",{children:[e.jsx(p,{className:"block mb-3",children:"Row with space-between"}),e.jsxs(u,{direction:"row",gap:"md",justify:"between",align:"center",children:[e.jsx(o,{size:"sm",children:"Left content"}),e.jsx(C,{size:"sm",variant:"secondary",children:"Action"})]})]})]})};var g,b,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Layout Grid (12-col)',
  render: () => <div className="p-6 space-y-4" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <Caption className="block mb-4">12-column grid, 16px gap</Caption>
      <Grid cols={12} gap="md">
        {Array.from({
        length: 12
      }).map((_, i) => <GridItem key={i} span={1}>
            <Cell>{i + 1}</Cell>
          </GridItem>)}
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={6}><Cell span={6} /></GridItem>
        <GridItem span={6}><Cell span={6} /></GridItem>
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={4}><Cell span={4} /></GridItem>
        <GridItem span={4}><Cell span={4} /></GridItem>
        <GridItem span={4}><Cell span={4} /></GridItem>
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={3}><Cell span={3} /></GridItem>
        <GridItem span={9}><Cell span={9} /></GridItem>
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={8}><Cell span={8} /></GridItem>
        <GridItem span={2}><Cell span={2} /></GridItem>
        <GridItem span={2}><Cell span={2} /></GridItem>
      </Grid>
    </div>
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Grid Overlay (Toggle)',
  render: () => {
    const [visible, setVisible] = useState(false);
    return <div className="p-6 relative min-h-64" style={{
      backgroundColor: 'var(--color-bg-base)'
    }}>
        <div className="flex items-center justify-between mb-6">
          <Mono size="sm">Architectural Grid Overlay</Mono>
          <Button variant="secondary" size="sm" onClick={() => setVisible(v => !v)}>
            {visible ? 'Hide grid' : 'Show grid'}
          </Button>
        </div>

        <Grid cols={12} gap="md">
          {[8, 4, 6, 6, 3, 3, 6].map((span, i) => <GridItem key={i} span={span as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}>
              <div className="h-24 rounded-[var(--radius-md)] flex items-end p-3" style={{
            backgroundColor: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border-subtle)'
          }}>
                <Mono size="xs">{span} col</Mono>
              </div>
            </GridItem>)}
        </Grid>

        <GridOverlay visible={visible} columns={12} unit={8} />
      </div>;
  }
}`,...(j=(h=c.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var G,k,N;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Stack Layouts',
  render: () => <div className="p-6 space-y-8" style={{
    backgroundColor: 'var(--color-bg-base)'
  }}>
      <div>
        <Caption className="block mb-3">Vertical stack (default)</Caption>
        <Stack gap="sm" className="w-48">
          {['Item A', 'Item B', 'Item C'].map(label => <div key={label} className="h-8 rounded-[var(--radius-sm)] flex items-center px-3" style={{
          backgroundColor: 'var(--color-bg-subtle)',
          border: '1px solid var(--color-border-subtle)'
        }}>
              <Mono size="xs">{label}</Mono>
            </div>)}
        </Stack>
      </div>

      <div>
        <Caption className="block mb-3">Horizontal stack</Caption>
        <Stack direction="row" gap="sm" align="center">
          {['Item A', 'Item B', 'Item C'].map(label => <div key={label} className="h-8 rounded-[var(--radius-sm)] flex items-center px-3" style={{
          backgroundColor: 'var(--color-bg-subtle)',
          border: '1px solid var(--color-border-subtle)'
        }}>
              <Mono size="xs">{label}</Mono>
            </div>)}
        </Stack>
      </div>

      <div>
        <Caption className="block mb-3">Row with space-between</Caption>
        <Stack direction="row" gap="md" justify="between" align="center">
          <Mono size="sm">Left content</Mono>
          <Button size="sm" variant="secondary">Action</Button>
        </Stack>
      </div>
    </div>
}`,...(N=(k=m.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const D=["LayoutGrid","OverlayToggle","StackLayouts"];export{d as LayoutGrid,c as OverlayToggle,m as StackLayouts,D as __namedExportsOrder,E as default};
