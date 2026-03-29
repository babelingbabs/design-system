import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, useTheme, type Theme } from '../components/ThemeProvider'
import { Button } from '../components/Button'
import { Card, CardHeader, CardBody } from '../components/Card'
import { Input } from '../components/Input'
import { H2, H3, Text, Caption, Mono } from '../components/Typography'

/**
 * # Theme Toggle
 * Demonstrates the ThemeProvider and dark mode token layer.
 * All components reference CSS custom properties — no JS theming needed at the component level.
 */

const meta: Meta = {
  title: 'System/ThemeToggle',
  parameters: {
    layout: 'fullscreen',
  },
}
export default meta

// ─── Toggle Bar ────────────────────────────────────────

function ThemeToggleBar() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const options: Theme[] = ['light', 'dark', 'system']

  return (
    <div
      className="flex items-center gap-3 p-4 border-b"
      style={{
        backgroundColor: 'var(--color-bg-subtle)',
        borderColor: 'var(--color-border-subtle)',
      }}
    >
      <span
        className="text-xs uppercase tracking-widest"
        style={{ color: 'var(--color-fg-tertiary)', fontFamily: 'var(--font-mono)' }}
      >
        Theme
      </span>
      <div className="flex gap-1">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setTheme(opt)}
            className="px-3 py-1 rounded text-xs transition-colors"
            style={{
              fontFamily: 'var(--font-mono)',
              backgroundColor: theme === opt ? 'var(--color-accent-500)' : 'transparent',
              color: theme === opt ? '#fff' : 'var(--color-fg-secondary)',
              border: `1px solid ${theme === opt ? 'var(--color-accent-500)' : 'var(--color-border-default)'}`,
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      <span
        className="text-xs ml-auto"
        style={{ color: 'var(--color-fg-tertiary)', fontFamily: 'var(--font-mono)' }}
      >
        resolved: {resolvedTheme}
      </span>
    </div>
  )
}

// ─── Side-by-side panel ────────────────────────────────

function ThemedPanel({ forceTheme }: { forceTheme: 'light' | 'dark' }) {
  const label = forceTheme === 'light' ? 'Light' : 'Dark'

  return (
    <div
      data-theme={forceTheme}
      className="flex-1 min-w-0 p-8 space-y-8"
      style={{ backgroundColor: 'var(--color-bg-base)' }}
    >
      {/* Label */}
      <div className="flex items-center gap-3">
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: 'var(--color-fg-tertiary)', fontFamily: 'var(--font-mono)' }}
        >
          {label} mode
        </span>
        <div
          className="h-px flex-1"
          style={{ backgroundColor: 'var(--color-border-subtle)' }}
        />
      </div>

      {/* Typography */}
      <section className="space-y-2">
        <H2>Architectural Design</H2>
        <Text>
          Swiss precision meets technical blueprints. Clean surfaces, deliberate spacing,
          barely-there depth.
        </Text>
        <Caption>Version 0.1.0 — @kingsley/design-system</Caption>
        <Mono size="xs" style={{ color: 'var(--color-fg-tertiary)' }}>
          --color-fg-primary: {forceTheme === 'light' ? '#1A1A1A' : '#FFFFFF'}
        </Mono>
      </section>

      {/* Buttons */}
      <section className="space-y-3">
        <H3>Buttons</H3>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
          <Button variant="danger" size="sm">Danger</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="primary" size="sm" loading>Loading</Button>
          <Button variant="secondary" size="sm" disabled>Disabled</Button>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-3">
        <H3>Cards</H3>
        <div className="grid grid-cols-2 gap-3">
          <Card variant="default">
            <CardHeader>
              <Text size="sm" style={{ fontWeight: 500 }}>Default</Text>
            </CardHeader>
            <CardBody>
              <Caption>Subtle background, hairline border.</Caption>
            </CardBody>
          </Card>
          <Card variant="elevated">
            <CardHeader>
              <Text size="sm" style={{ fontWeight: 500 }}>Elevated</Text>
            </CardHeader>
            <CardBody>
              <Caption>Shadow-lifted above the surface.</Caption>
            </CardBody>
          </Card>
          <Card variant="outlined">
            <CardHeader>
              <Text size="sm" style={{ fontWeight: 500 }}>Outlined</Text>
            </CardHeader>
            <CardBody>
              <Caption>Strong border, no fill.</Caption>
            </CardBody>
          </Card>
          <Card variant="ghost">
            <CardHeader>
              <Text size="sm" style={{ fontWeight: 500 }}>Ghost</Text>
            </CardHeader>
            <CardBody>
              <Caption>Transparent, structural.</Caption>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-3">
        <H3>Inputs</H3>
        <Input label="Label" placeholder="Default state" />
        <Input label="Error" placeholder="Something went wrong" inputState="error" hint="Field is required." />
        <Input label="Success" placeholder="All good" inputState="success" hint="Looks great." />
      </section>

      {/* Color swatches */}
      <section className="space-y-3">
        <H3>Surfaces</H3>
        <div className="grid grid-cols-3 gap-2">
          {(['--color-bg-base', '--color-bg-subtle', '--color-bg-muted'] as const).map((v) => (
            <div key={v} className="space-y-1">
              <div
                className="h-10 rounded border"
                style={{
                  backgroundColor: `var(${v})`,
                  borderColor: 'var(--color-border-subtle)',
                }}
              />
              <Mono size="xs" style={{ color: 'var(--color-fg-tertiary)' }}>
                {v.replace('--color-bg-', '')}
              </Mono>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ─── Interactive demo ──────────────────────────────────

function ThemeDemo() {
  const { resolvedTheme } = useTheme()

  return (
    <div
      style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg-base)' }}
      data-theme={resolvedTheme}
    >
      <ThemeToggleBar />
      <div className="p-8 space-y-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        {/* Controlled */}
        <section className="space-y-3">
          <H2>Live Preview</H2>
          <Text>Components respond to the active theme via CSS custom properties.</Text>
          <div className="grid grid-cols-1 gap-4 max-w-sm">
            <Button variant="primary">Primary Action</Button>
            <Card variant="elevated">
              <CardHeader>
                <Text size="sm" style={{ fontWeight: 500 }}>Elevated Card</Text>
              </CardHeader>
              <CardBody>
                <Caption>Shadow and surface adapt to the current theme.</Caption>
              </CardBody>
            </Card>
            <Input label="Input" placeholder="Theme-aware field" />
          </div>
        </section>

        {/* Accent scale */}
        <section className="space-y-3">
          <H2>Accent Scale</H2>
          <div className="flex gap-1">
            {([50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const).map((stop) => (
              <div key={stop} className="flex-1 space-y-1">
                <div
                  className="h-8 rounded-sm"
                  style={{ backgroundColor: `var(--color-accent-${stop})` }}
                />
                <Mono size="xs" style={{ color: 'var(--color-fg-tertiary)', fontSize: '9px' }}>
                  {stop}
                </Mono>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

// ─── Stories ───────────────────────────────────────────

type Story = StoryObj<typeof meta>

/** Interactive single-panel theme demo */
export const Interactive: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system">
      <ThemeDemo />
    </ThemeProvider>
  ),
}

/** Side-by-side comparison — light and dark simultaneously */
export const SideBySide: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <ThemedPanel forceTheme="light" />
      <div style={{ width: '1px', backgroundColor: '#38383A', flexShrink: 0 }} />
      <ThemedPanel forceTheme="dark" />
    </div>
  ),
}

/** System preference passthrough */
export const SystemPreference: Story = {
  render: () => (
    <ThemeProvider defaultTheme="system">
      <ThemeDemo />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Follows OS-level `prefers-color-scheme`. Change your system preference to see the live switch.',
      },
    },
  },
}
