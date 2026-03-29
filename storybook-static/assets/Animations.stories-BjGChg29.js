import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as b}from"./index-Bc2G9s8g.js";import{f as p,s as u,a as h,b as g,c as y,d as j,e as k,p as f}from"./variants-C6mMCLCi.js";import{B as C}from"./Button-BbfP9HFH.js";import{M as r,C as s}from"./Typography-SXg8BEL6.js";import{m as a}from"./proxy-C-SjNVQx.js";import{A as N}from"./index-BvmJ1O94.js";const B={title:"Foundation/Animations",parameters:{layout:"padded",docs:{description:{component:`# Animations
Reusable Framer Motion variants. Precise, not bouncy. Architectural.

All durations are short (150–300ms). Easing curves are deceleration-based —
things arrive quickly and settle, rather than overshooting.`}}}};function n({label:i,children:l}){return e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx("div",{className:"w-full h-24 rounded-[var(--radius-md)] flex items-center justify-center",style:{backgroundColor:"var(--color-bg-subtle)",border:"1px solid var(--color-border-subtle)"},children:l}),e.jsx(s,{children:i})]})}function o(){return e.jsx("div",{className:"w-10 h-10 rounded-[var(--radius-md)]",style:{backgroundColor:"var(--color-accent-400)"}})}const t={name:"All Variants",render:()=>{const[i,l]=b.useState(0);return e.jsxs("div",{className:"p-6 space-y-8",style:{backgroundColor:"var(--color-bg-base)"},children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r,{size:"sm",children:"Animation variants"}),e.jsx(C,{size:"sm",variant:"secondary",onClick:()=>l(d=>d+1),children:"Replay"})]}),e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx(n,{label:"fadeIn",children:e.jsx(a.div,{variants:p,initial:"hidden",animate:"visible",children:e.jsx(o,{})},`fade-${i}`)}),e.jsx(n,{label:"slideUp",children:e.jsx(a.div,{variants:u,initial:"hidden",animate:"visible",children:e.jsx(o,{})},`sup-${i}`)}),e.jsx(n,{label:"slideDown",children:e.jsx(a.div,{variants:h,initial:"hidden",animate:"visible",children:e.jsx(o,{})},`sdn-${i}`)}),e.jsx(n,{label:"scaleIn",children:e.jsx(a.div,{variants:g,initial:"hidden",animate:"visible",children:e.jsx(o,{})},`scale-${i}`)})]}),e.jsxs("div",{children:[e.jsx(s,{className:"block mb-3",children:"staggerChildren — items appear in sequence"}),e.jsx(a.div,{variants:y,initial:"hidden",animate:"visible",className:"flex gap-2",children:Array.from({length:6}).map((d,c)=>e.jsx(a.div,{variants:j,children:e.jsx("div",{className:"w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center",style:{backgroundColor:"var(--color-accent-100)",border:"1px solid var(--color-accent-300)"},children:e.jsx(r,{size:"xs",accent:!0,children:c+1})})},c))},`stagger-${i}`)]}),e.jsxs("div",{children:[e.jsx(s,{className:"block mb-3",children:"cardHover — hover to see lift"}),e.jsxs(a.div,{initial:"rest",animate:"rest",whileHover:"hover",variants:k,className:"w-56 p-4 rounded-[var(--radius-lg)] cursor-pointer",style:{backgroundColor:"var(--color-bg-base)",border:"1px solid var(--color-border-subtle)"},children:[e.jsx(r,{size:"xs",accent:!0,className:"block mb-1",children:"Hover me"}),e.jsx(s,{children:"2px lift + deeper shadow"})]})]}),e.jsxs("div",{children:[e.jsx(s,{className:"block mb-3",children:"pageTransition — enter / exit"}),e.jsx(N,{mode:"wait",children:e.jsxs(a.div,{variants:f,initial:"hidden",animate:"visible",exit:"exit",className:"p-4 rounded-[var(--radius-md)] w-56",style:{backgroundColor:"var(--color-accent-50)",border:"1px solid var(--color-accent-200)"},children:[e.jsxs(r,{size:"xs",accent:!0,children:["Page ",i+1]}),e.jsx(s,{className:"block mt-1",children:"Press replay to transition"})]},i)})]})]})}};var m,v,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'All Variants',
  render: () => {
    const [key, setKey] = useState(0);
    return <div className="p-6 space-y-8" style={{
      backgroundColor: 'var(--color-bg-base)'
    }}>
        <div className="flex items-center justify-between">
          <Mono size="sm">Animation variants</Mono>
          <Button size="sm" variant="secondary" onClick={() => setKey(k => k + 1)}>
            Replay
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Demo label="fadeIn">
            <motion.div key={\`fade-\${key}\`} variants={fadeIn} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>

          <Demo label="slideUp">
            <motion.div key={\`sup-\${key}\`} variants={slideUp} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>

          <Demo label="slideDown">
            <motion.div key={\`sdn-\${key}\`} variants={slideDown} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>

          <Demo label="scaleIn">
            <motion.div key={\`scale-\${key}\`} variants={scaleIn} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>
        </div>

        <div>
          <Caption className="block mb-3">staggerChildren — items appear in sequence</Caption>
          <motion.div key={\`stagger-\${key}\`} variants={staggerChildren} initial="hidden" animate="visible" className="flex gap-2">
            {Array.from({
            length: 6
          }).map((_, i) => <motion.div key={i} variants={staggerItem}>
                <div className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center" style={{
              backgroundColor: 'var(--color-accent-100)',
              border: '1px solid var(--color-accent-300)'
            }}>
                  <Mono size="xs" accent>{i + 1}</Mono>
                </div>
              </motion.div>)}
          </motion.div>
        </div>

        <div>
          <Caption className="block mb-3">cardHover — hover to see lift</Caption>
          <motion.div initial="rest" animate="rest" whileHover="hover" variants={cardHover} className="w-56 p-4 rounded-[var(--radius-lg)] cursor-pointer" style={{
          backgroundColor: 'var(--color-bg-base)',
          border: '1px solid var(--color-border-subtle)'
        }}>
            <Mono size="xs" accent className="block mb-1">Hover me</Mono>
            <Caption>2px lift + deeper shadow</Caption>
          </motion.div>
        </div>

        <div>
          <Caption className="block mb-3">pageTransition — enter / exit</Caption>
          <AnimatePresence mode="wait">
            <motion.div key={key} variants={pageTransition} initial="hidden" animate="visible" exit="exit" className="p-4 rounded-[var(--radius-md)] w-56" style={{
            backgroundColor: 'var(--color-accent-50)',
            border: '1px solid var(--color-accent-200)'
          }}>
              <Mono size="xs" accent>Page {key + 1}</Mono>
              <Caption className="block mt-1">Press replay to transition</Caption>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>;
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const H=["AllVariants"];export{t as AllVariants,H as __namedExportsOrder,B as default};
