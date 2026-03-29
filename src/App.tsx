import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { H1, H2, H3, H4, H5, H6, Text, Caption, Mono, Label, Lead } from './components/Typography'
import { Button } from './components/Button'
import { Card, CardHeader, CardBody, CardFooter } from './components/Card'
import { Input } from './components/Input'
import { Grid, GridItem, Stack } from './components/Grid'
import {
  fadeIn,
  slideUp,
  scaleIn,
  staggerChildren,
  staggerItem,
  hoverLift,
} from './animations/variants'

// ─── Dark mode hook ───────────────────────────────────────────────────────────

function useDarkMode(): [boolean, () => void] {
  const [dark, setDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('ds-theme')
      if (saved !== null) return saved === 'dark'
    } catch {
      // localStorage unavailable
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    try {
      localStorage.setItem('ds-theme', dark ? 'dark' : 'light')
    } catch {
      // localStorage unavailable
    }
  }, [dark])

  return [dark, () => setDark(d => !d)]
}

// ─── Section wrapper ──────────────────────────────────────────────────────────

function Section({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-10"
    >
      <div
        className="flex items-baseline gap-5 pb-5"
        style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
      >
        <Mono size="xs" accent>{index}</Mono>
        <H2>{title}</H2>
      </div>
      {children}
    </motion.section>
  )
}

// ─── Subsection ───────────────────────────────────────────────────────────────

function Subsection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <H3>{title}</H3>
      {children}
    </div>
  )
}

// ─── Color swatch ─────────────────────────────────────────────────────────────

function Swatch({ label, variable, hex }: { label: string; variable: string; hex: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-10 rounded-[var(--radius-md)]"
        style={{
          background: `var(${variable}, ${hex})`,
          border: '1px solid rgba(0,0,0,0.06)',
        }}
      />
      <div className="space-y-0.5">
        <span
          className="block text-xs font-medium"
          style={{ color: 'var(--color-fg-primary)', fontFamily: 'var(--font-sans)' }}
        >
          {label}
        </span>
        <Mono size="xs">{hex}</Mono>
      </div>
    </div>
  )
}

// ─── Spacing bar ──────────────────────────────────────────────────────────────

function SpacingBar({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <Mono size="xs" className="shrink-0" style={{ width: '2rem', textAlign: 'right' }}>{label}</Mono>
      <div
        className="h-4 rounded-[var(--radius-xs)] shrink-0"
        style={{
          width: value,
          background: 'var(--color-accent-200)',
        }}
      />
      <Caption>{value}</Caption>
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ color: 'var(--color-fg-tertiary)' }}>
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, toggleDark] = useDarkMode()
  const [animKey, setAnimKey] = useState(0)
  const [inputValue, setInputValue] = useState('')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-base)', fontFamily: 'var(--font-sans)' }}>

      {/* ── Sticky header ── */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          height: '3.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem',
          background: 'var(--color-bg-base)',
          borderBottom: '1px solid var(--color-border-subtle)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '1.25rem',
              height: '1.25rem',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-accent-500)',
            }}
          />
          <Mono size="xs" accent>KINGSLEY / DS</Mono>
          <span
            style={{
              fontSize: '0.625rem',
              padding: '0.125rem 0.375rem',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-fg-tertiary)',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.05em',
            }}
          >
            v0.1.0
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleDark}
          icon={dark ? <SunIcon /> : <MoonIcon />}
        >
          {dark ? 'Light' : 'Dark'}
        </Button>
      </header>

      {/* ── Hero ── */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        style={{ maxWidth: '56rem', padding: '4rem 3rem 3rem' }}
      >
        <Mono size="xs" accent style={{ display: 'block', marginBottom: '1rem' } as React.CSSProperties}>
          DESIGN SYSTEM — PLAYGROUND
        </Mono>
        <H1 style={{ marginBottom: '1rem' } as React.CSSProperties}>Kingsley DS</H1>
        <Lead>
          Swiss precision meets technical blueprints. Architectural tokens, minimal components, precise motion — built for production.
        </Lead>
      </motion.div>

      {/* ── Main ── */}
      <main
        style={{
          maxWidth: '72rem',
          margin: '0 auto',
          padding: '0 1.5rem 6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '5rem',
        }}
      >

        {/* ══ 01 / FOUNDATIONS ══════════════════════════════ */}
        <Section index="01" title="Foundations">

          {/* Colors */}
          <Subsection title="Color">
            <div className="space-y-6">
              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>Backgrounds</Label>
                <Grid cols={4} gap="sm">
                  {[
                    { label: 'Base',    variable: '--color-bg-base',    hex: '#FAFAFA' },
                    { label: 'Subtle',  variable: '--color-bg-subtle',  hex: '#F5F5F5' },
                    { label: 'Muted',   variable: '--color-bg-muted',   hex: '#EFEFEF' },
                    { label: 'Inverse', variable: '--color-bg-inverse', hex: '#1A1A1A' },
                  ].map(s => <GridItem key={s.label}><Swatch {...s} /></GridItem>)}
                </Grid>
              </div>

              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>Accent — Steel Blue</Label>
                <Grid cols={4} gap="sm">
                  {[
                    { label: '50',     variable: '--color-accent-50',  hex: '#F0F4F8' },
                    { label: '100',    variable: '--color-accent-100', hex: '#D9E4EE' },
                    { label: '200',    variable: '--color-accent-200', hex: '#B3C9DD' },
                    { label: '300',    variable: '--color-accent-300', hex: '#8DAECC' },
                    { label: '400',    variable: '--color-accent-400', hex: '#6793BB' },
                    { label: '500 ↑',  variable: '--color-accent-500', hex: '#4A7BA7' },
                    { label: '600',    variable: '--color-accent-600', hex: '#3B6286' },
                    { label: '700',    variable: '--color-accent-700', hex: '#2C4A65' },
                  ].map(s => <GridItem key={s.label}><Swatch {...s} /></GridItem>)}
                </Grid>
              </div>

              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>Semantic</Label>
                <Grid cols={4} gap="sm">
                  {[
                    { label: 'Success', variable: '--color-success', hex: '#2D6A4F' },
                    { label: 'Warning', variable: '--color-warning', hex: '#7B5800' },
                    { label: 'Error',   variable: '--color-error',   hex: '#9B1D20' },
                    { label: 'Info',    variable: '--color-info',    hex: '#1A4A6E' },
                  ].map(s => <GridItem key={s.label}><Swatch {...s} /></GridItem>)}
                </Grid>
              </div>
            </div>
          </Subsection>

          {/* Type scale */}
          <Subsection title="Typography">
            <div
              style={{
                border: '1px solid var(--color-border-subtle)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
              }}
            >
              {([
                { tag: 'H1',      el: <H1>The quick brown fox</H1> },
                { tag: 'H2',      el: <H2>The quick brown fox</H2> },
                { tag: 'H3',      el: <H3>The quick brown fox</H3> },
                { tag: 'H4',      el: <H4>The quick brown fox</H4> },
                { tag: 'H5',      el: <H5>The quick brown fox</H5> },
                { tag: 'H6',      el: <H6>The quick brown fox jumps over the lazy dog</H6> },
                { tag: 'Lead',    el: <Lead>Precision in every detail. Architectural discipline.</Lead> },
                { tag: 'Body',    el: <Text>The building blocks of a disciplined visual system — clear, purposeful, enduring.</Text> },
                { tag: 'Caption', el: <Caption>Auxiliary information. Metadata. Labels. Secondary context.</Caption> },
                { tag: 'Mono',    el: <Mono accent>v0.1.0 — DS_TOKEN_REF_001 — KINSLEY/DS</Mono> },
              ] as Array<{ tag: string; el: React.ReactNode }>).map(({ tag, el }, i) => (
                <div
                  key={tag}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.5rem',
                    padding: '1rem 1.5rem',
                    borderBottom: i < 9 ? '1px solid var(--color-border-subtle)' : undefined,
                    background: i % 2 === 0 ? 'var(--color-bg-base)' : 'var(--color-bg-subtle)',
                  }}
                >
                  <Mono size="xs" style={{ width: '3rem', flexShrink: 0, textAlign: 'right' } as React.CSSProperties}>{tag}</Mono>
                  <div style={{ flex: 1, overflow: 'hidden' }}>{el}</div>
                </div>
              ))}
            </div>
          </Subsection>

          {/* Spacing */}
          <Subsection title="Spacing — 4px Grid">
            <div className="space-y-2">
              {[
                { label: '1',  value: '4px' },
                { label: '2',  value: '8px' },
                { label: '3',  value: '12px' },
                { label: '4',  value: '16px' },
                { label: '6',  value: '24px' },
                { label: '8',  value: '32px' },
                { label: '12', value: '48px' },
                { label: '16', value: '64px' },
                { label: '24', value: '96px' },
              ].map(s => <SpacingBar key={s.label} {...s} />)}
            </div>
          </Subsection>

          {/* Shadows */}
          <Subsection title="Shadows">
            <Grid cols={3} gap="md">
              {[
                { label: 'xs',     shadow: 'var(--shadow-xs)' },
                { label: 'sm',     shadow: 'var(--shadow-sm)' },
                { label: 'md',     shadow: 'var(--shadow-md)' },
                { label: 'lg',     shadow: 'var(--shadow-lg)' },
                { label: 'lifted', shadow: 'var(--shadow-lifted)' },
                { label: 'focus',  shadow: 'var(--shadow-focus)' },
              ].map(({ label, shadow }) => (
                <GridItem key={label}>
                  <div
                    style={{
                      height: '4rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-bg-base)',
                      border: '1px solid var(--color-border-subtle)',
                      boxShadow: shadow,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mono size="xs">{label}</Mono>
                  </div>
                </GridItem>
              ))}
            </Grid>
          </Subsection>

        </Section>

        {/* ══ 02 / COMPONENTS ═══════════════════════════════ */}
        <Section index="02" title="Components">

          {/* Buttons */}
          <Subsection title="Button">
            <div className="space-y-5">
              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>Primary</Label>
                <Stack direction="row" gap="sm" align="center" wrap>
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                  <Button variant="primary" size="md" disabled>Disabled</Button>
                  <Button variant="primary" size="md" loading>Loading</Button>
                </Stack>
              </div>
              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>Secondary</Label>
                <Stack direction="row" gap="sm" align="center" wrap>
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="md">Medium</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                  <Button variant="secondary" size="md" disabled>Disabled</Button>
                  <Button variant="secondary" size="md" loading>Loading</Button>
                </Stack>
              </div>
              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>Ghost</Label>
                <Stack direction="row" gap="sm" align="center" wrap>
                  <Button variant="ghost" size="sm">Small</Button>
                  <Button variant="ghost" size="md">Medium</Button>
                  <Button variant="ghost" size="lg">Large</Button>
                  <Button variant="ghost" size="md" disabled>Disabled</Button>
                </Stack>
              </div>
              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>Danger</Label>
                <Stack direction="row" gap="sm" align="center" wrap>
                  <Button variant="danger" size="sm">Delete</Button>
                  <Button variant="danger" size="md">Remove item</Button>
                  <Button variant="danger" size="lg">Destroy</Button>
                  <Button variant="danger" size="md" disabled>Disabled</Button>
                </Stack>
              </div>
              <div>
                <Label style={{ display: 'block', marginBottom: '0.75rem' } as React.CSSProperties}>With icons</Label>
                <Stack direction="row" gap="sm" align="center" wrap>
                  <Button variant="primary" icon={<PlusIcon />}>New item</Button>
                  <Button variant="secondary" trailingIcon={<ArrowRightIcon />}>Continue</Button>
                  <Button variant="ghost" icon={<SearchIcon />}>Search</Button>
                  <Button variant="primary" size="sm" iconOnly icon={<PlusIcon />}>Add</Button>
                </Stack>
              </div>
            </div>
          </Subsection>

          {/* Cards */}
          <Subsection title="Card">
            <Grid cols={2} gap="md">
              <GridItem>
                <Card variant="default">
                  <CardHeader>
                    <H4>Default Card</H4>
                  </CardHeader>
                  <CardBody>
                    <Text size="sm" secondary>
                      A standard card with a subtle border and shadow. Clean container for grouped content.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Caption>Last updated: now</Caption>
                    <Button variant="ghost" size="sm">View</Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem>
                <Card variant="outlined">
                  <CardHeader>
                    <H4>Outlined Card</H4>
                  </CardHeader>
                  <CardBody>
                    <Text size="sm" secondary>
                      Stronger border, no shadow. For explicitly weighted content areas.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Caption>Status: active</Caption>
                    <Button variant="secondary" size="sm">Edit</Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem>
                <Card variant="elevated">
                  <CardHeader>
                    <H4>Elevated Card</H4>
                  </CardHeader>
                  <CardBody>
                    <Text size="sm" secondary>
                      Lifted shadow. Use sparingly for primary content that needs to float above the page.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Caption>Priority: high</Caption>
                    <Button variant="primary" size="sm">Action</Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem>
                <Card variant="default" interactive>
                  <CardHeader>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <H4>Interactive Card</H4>
                      <Mono size="xs" accent>hover me</Mono>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Text size="sm" secondary>
                      Hover to see the lift animation. Click-to-interact pattern via Framer Motion.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Caption>Interactive</Caption>
                    <Button variant="ghost" size="sm">Open</Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </Grid>
          </Subsection>

          {/* Inputs */}
          <Subsection title="Input">
            <Grid cols={2} gap="md">
              <GridItem>
                <Input
                  label="Default"
                  placeholder="Type something..."
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  hint="Hint text — brief contextual guidance"
                />
              </GridItem>
              <GridItem>
                <Input
                  label="With prefix icon"
                  placeholder="Search..."
                  prefix={<SearchIcon />}
                />
              </GridItem>
              <GridItem>
                <Input
                  label="Error state"
                  defaultValue="invalid@"
                  inputState="error"
                  errorMessage="Enter a valid email address"
                  required
                />
              </GridItem>
              <GridItem>
                <Input
                  label="Success state"
                  defaultValue="user@example.com"
                  inputState="success"
                  successMessage="Email address verified"
                />
              </GridItem>
              <GridItem>
                <Input
                  label="Disabled"
                  value="Readonly value"
                  disabled
                  hint="This field cannot be edited"
                />
              </GridItem>
              <GridItem>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-end' }}>
                  <div style={{ flex: 1 }}><Input size="sm" placeholder="sm" /></div>
                  <div style={{ flex: 1 }}><Input size="md" placeholder="md" /></div>
                  <div style={{ flex: 1 }}><Input size="lg" placeholder="lg" /></div>
                </div>
              </GridItem>
            </Grid>
          </Subsection>

          {/* Grid */}
          <Subsection title="Grid — 12 Column">
            <Text size="sm" secondary>
              Configurable column grid with span support. Each row below shows a different span value.
            </Text>
            <div className="space-y-1.5">
              {[12, 8, 6, 4, 3, 2, 1].map(span => {
                const count = Math.floor(12 / span)
                const shade = span <= 2 ? '600' : span <= 4 ? '500' : span <= 6 ? '400' : span <= 8 ? '300' : '200'
                return (
                  <div key={span} style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '0.25rem' }}>
                    {Array.from({ length: count }, (_, i) => (
                      <div
                        key={i}
                        style={{
                          gridColumn: `span ${span}`,
                          height: '2rem',
                          borderRadius: 'var(--radius-xs)',
                          background: `var(--color-accent-${shade})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Mono size="xs">{span}</Mono>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </Subsection>

        </Section>

        {/* ══ 03 / MOTION ═══════════════════════════════════ */}
        <Section index="03" title="Motion">
          <Text size="sm" secondary>
            Framer Motion variants — precise, architectural, never bouncy. All animations tuned for 100–300ms durations.
          </Text>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setAnimKey(k => k + 1)}
            >
              Replay all
            </Button>
          </div>

          <Grid cols={3} gap="md">
            {/* fadeIn */}
            <GridItem>
              <Card variant="ghost" noPadding>
                <div style={{ padding: '1.25rem' }}>
                  <Label style={{ display: 'block', marginBottom: '1rem' } as React.CSSProperties}>fadeIn</Label>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`fade-${animKey}`}
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                      style={{
                        height: '4rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-accent-100)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Mono size="xs" accent>opacity</Mono>
                    </motion.div>
                  </AnimatePresence>
                  <Caption style={{ display: 'block', marginTop: '0.5rem' } as React.CSSProperties}>200ms · easeOut</Caption>
                </div>
              </Card>
            </GridItem>

            {/* slideUp */}
            <GridItem>
              <Card variant="ghost" noPadding>
                <div style={{ padding: '1.25rem' }}>
                  <Label style={{ display: 'block', marginBottom: '1rem' } as React.CSSProperties}>slideUp</Label>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`slide-${animKey}`}
                      variants={slideUp}
                      initial="hidden"
                      animate="visible"
                      style={{
                        height: '4rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-accent-100)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Mono size="xs" accent>y + opacity</Mono>
                    </motion.div>
                  </AnimatePresence>
                  <Caption style={{ display: 'block', marginTop: '0.5rem' } as React.CSSProperties}>250ms · cubic</Caption>
                </div>
              </Card>
            </GridItem>

            {/* scaleIn */}
            <GridItem>
              <Card variant="ghost" noPadding>
                <div style={{ padding: '1.25rem' }}>
                  <Label style={{ display: 'block', marginBottom: '1rem' } as React.CSSProperties}>scaleIn</Label>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`scale-${animKey}`}
                      variants={scaleIn}
                      initial="hidden"
                      animate="visible"
                      style={{
                        height: '4rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--color-accent-100)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Mono size="xs" accent>scale + opacity</Mono>
                    </motion.div>
                  </AnimatePresence>
                  <Caption style={{ display: 'block', marginTop: '0.5rem' } as React.CSSProperties}>200ms · cubic</Caption>
                </div>
              </Card>
            </GridItem>

            {/* staggerChildren */}
            <GridItem span={3}>
              <Card variant="ghost" noPadding>
                <div style={{ padding: '1.25rem' }}>
                  <Label style={{ display: 'block', marginBottom: '1rem' } as React.CSSProperties}>staggerChildren + staggerItem</Label>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`stagger-${animKey}`}
                      variants={staggerChildren}
                      initial="hidden"
                      animate="visible"
                      style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem' }}
                    >
                      {Array.from({ length: 6 }, (_, i) => (
                        <motion.div
                          key={i}
                          variants={staggerItem}
                          style={{
                            height: '3rem',
                            borderRadius: 'var(--radius-sm)',
                            background: 'var(--color-accent-100)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Mono size="xs" accent>{String(i + 1).padStart(2, '0')}</Mono>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                  <Caption style={{ display: 'block', marginTop: '0.5rem' } as React.CSSProperties}>60ms stagger · 200ms per item</Caption>
                </div>
              </Card>
            </GridItem>

            {/* hoverLift */}
            <GridItem span={3}>
              <Card variant="ghost" noPadding>
                <div style={{ padding: '1.25rem' }}>
                  <Label style={{ display: 'block', marginBottom: '1rem' } as React.CSSProperties}>hoverLift — hover the element below</Label>
                  <motion.div
                    variants={hoverLift}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    style={{
                      height: '5rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-accent-50)',
                      border: '1px solid var(--color-accent-200)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <Mono size="xs" accent>y −2px + shadow lift</Mono>
                  </motion.div>
                  <Caption style={{ display: 'block', marginTop: '0.5rem' } as React.CSSProperties}>200ms · easeOut · boxShadow transition</Caption>
                </div>
              </Card>
            </GridItem>
          </Grid>

        </Section>

      </main>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: '1px solid var(--color-border-subtle)',
          background: 'var(--color-bg-subtle)',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Mono size="xs">KINGSLEY/DS — v0.1.0</Mono>
        <Caption>React 18 · TypeScript · Tailwind v4 · Framer Motion</Caption>
      </footer>
    </div>
  )
}
