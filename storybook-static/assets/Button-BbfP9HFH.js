import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{m}from"./proxy-C-SjNVQx.js";const b={primary:`
    bg-[var(--color-accent-500)]
    text-white
    border border-[var(--color-accent-600)]
    hover:bg-[var(--color-accent-600)]
    active:bg-[var(--color-accent-700)]
    disabled:bg-[var(--color-fg-disabled)]
    disabled:border-[var(--color-fg-disabled)]
    disabled:text-white
  `,secondary:`
    bg-[var(--color-bg-subtle)]
    text-[var(--color-fg-primary)]
    border border-[var(--color-border-default)]
    hover:bg-[var(--color-bg-muted)]
    hover:border-[var(--color-border-strong)]
    active:bg-[var(--color-bg-muted)]
    disabled:text-[var(--color-fg-disabled)]
    disabled:border-[var(--color-border-subtle)]
  `,ghost:`
    bg-transparent
    text-[var(--color-fg-secondary)]
    border border-transparent
    hover:bg-[var(--color-bg-subtle)]
    hover:text-[var(--color-fg-primary)]
    active:bg-[var(--color-bg-muted)]
    disabled:text-[var(--color-fg-disabled)]
  `,danger:`
    bg-[var(--color-error-bg)]
    text-[var(--color-error)]
    border border-[var(--color-error-bg)]
    hover:bg-[var(--color-error)]
    hover:text-white
    hover:border-[var(--color-error)]
    active:opacity-90
    disabled:opacity-50
  `},p={sm:"h-7 px-3 text-xs gap-1.5",md:"h-9 px-4 text-sm gap-2",lg:"h-11 px-5 text-base gap-2.5"},v={sm:"h-7 w-7 p-0",md:"h-9 w-9 p-0",lg:"h-11 w-11 p-0"},g={sm:12,md:14,lg:16};function f({variant:r="primary",size:o="md",iconOnly:a=!1,icon:s,trailingIcon:l,loading:i=!1,disabled:n,children:t,className:c="",...u}){const d=n||i;return e.jsx(m.button,{whileTap:d?{}:{scale:.97},transition:{duration:.1},disabled:d,className:`
        inline-flex items-center justify-center
        font-medium
        rounded-[var(--radius-md)]
        transition-colors duration-150
        cursor-pointer
        select-none
        focus-visible:outline-none
        focus-visible:shadow-[var(--shadow-focus)]
        disabled:cursor-not-allowed
        ${a?v[o]:p[o]}
        ${b[r]}
        ${c}
      `.replace(/\s+/g," ").trim(),style:{fontFamily:"var(--font-sans)"},...u,children:i?e.jsx(h,{size:g[o]}):e.jsxs(e.Fragment,{children:[s&&e.jsx("span",{className:"shrink-0",children:s}),!a&&t&&e.jsx("span",{children:t}),a&&e.jsx("span",{className:"sr-only",children:t}),l&&!a&&e.jsx("span",{className:"shrink-0",children:l})]})})}function h({size:r}){return e.jsxs("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",className:"animate-spin","aria-hidden":!0,children:[e.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeOpacity:"0.25"}),e.jsx("path",{d:"M14 8a6 6 0 0 0-6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"Icon-only button — renders square, hides label from layout",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Leading icon"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Trailing icon"},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{f as B};
