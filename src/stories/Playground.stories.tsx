import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '../components/Badge/Badge'
import { Toggle } from '../components/Toggle/Toggle'
import { Tabs } from '../components/Tabs/Tabs'
import type { TabItem } from '../components/Tabs/Tabs'
import { Button } from '../components/Button/Button'
import { H1, H4, H5, Text, Caption, Label, Mono } from '../components/Typography/Typography'
import { staggerChildren, staggerItem } from '../animations/variants'

/**
 * # Playground
 * All components composing together in real-world layouts.
 * Tokens + components + animations — the full system in action.
 */
const meta: Meta = {
  title: 'Playground/Overview',
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj

// ─── Theme toggle ─────────────────────────────────────

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  const apply = (next: typeof theme) => {
    setTheme(next)
    const root = document.documentElement
    if (next === 'dark') {
      root.setAttribute('data-theme', 'dark')
    } else if (next === 'light') {
      root.setAttribute('data-theme', 'light')
    } else {
      root.removeAttribute('data-theme')
    }
  }

  const tabs: TabItem[] = [
    { value: 'light', label: 'Light' },
    { value: 'system', label: 'System' },
    { value: 'dark', label: 'Dark' },
  ]

  return (
    <Tabs value={theme} onChange={(v) => apply(v as typeof theme)} variant="pill" size="sm" tabs={tabs} />
  )
}

// ─── Section wrapper ──────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '56px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        paddingBottom: '12px',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--color-fg-tertiary)',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.1em',
        }}>
          {title}
        </span>
      </div>
      {children}
    </section>
  )
}

// ─── Badge section ────────────────────────────────────

function BadgeShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="accent">Accent</Badge>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
        <Badge variant="default" size="sm">Small</Badge>
        <Badge variant="success" size="sm">Deployed</Badge>
        <Badge variant="warning" size="sm">Pending</Badge>
        <Badge variant="error" size="sm">Failed</Badge>
        <Badge variant="info" size="sm">Draft</Badge>
        <Badge variant="accent" size="sm">New</Badge>
      </div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Badge variant="success" dot size="sm" />
        <Badge variant="warning" dot size="sm" />
        <Badge variant="error" dot size="sm" />
        <Badge variant="info" dot size="sm" />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'var(--color-fg-tertiary)' }}>
          dot indicators
        </span>
      </div>
    </div>
  )
}

// ─── Toggle section ───────────────────────────────────

function ToggleShowcase() {
  const [states, setStates] = useState({ wifi: true, bt: true, airplane: false, vpn: false, hotspot: false })
  const toggle = (k: keyof typeof states) => setStates(s => ({ ...s, [k]: !s[k] }))

  return (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Toggle checked={states.wifi} onChange={() => toggle('wifi')} size="md" />
            <Mono size="xs" accent={states.wifi}>md</Mono>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Toggle checked={states.bt} onChange={() => toggle('bt')} size="sm" />
            <Mono size="xs" accent={states.bt}>sm</Mono>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Toggle checked={false} onChange={() => {}} disabled />
            <Mono size="xs">disabled</Mono>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, minWidth: '280px', maxWidth: '360px' }}>
        {([
          { key: 'wifi', label: 'Wi-Fi' },
          { key: 'bt', label: 'Bluetooth' },
          { key: 'airplane', label: 'Airplane Mode' },
          { key: 'vpn', label: 'VPN' },
          { key: 'hotspot', label: 'Personal Hotspot' },
        ] as const).map(({ key, label }) => (
          <div key={key} style={{ padding: '11px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <Toggle checked={states[key]} onChange={() => toggle(key)} label={label} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Tabs section ─────────────────────────────────────

function TabsShowcase() {
  const [underlineTab, setUnderlineTab] = useState('overview')
  const [pillTab, setPillTab] = useState('week')

  const navTabs: TabItem[] = [
    { value: 'overview', label: 'Overview' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'reports', label: 'Reports' },
    { value: 'settings', label: 'Settings' },
  ]
  const timeTabs: TabItem[] = [
    { value: 'day', label: 'Day' },
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'year', label: 'Year' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <Caption muted style={{ display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          underline
        </Caption>
        <Tabs value={underlineTab} onChange={setUnderlineTab} variant="underline" tabs={navTabs} />
      </div>
      <div>
        <Caption muted style={{ display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          pill
        </Caption>
        <Tabs value={pillTab} onChange={setPillTab} variant="pill" tabs={timeTabs} />
      </div>
      <div>
        <Caption muted style={{ display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          compound
        </Caption>
        <Tabs value={underlineTab} onChange={setUnderlineTab} variant="underline" size="sm">
          <Tabs.Tab value="overview" label="Overview" />
          <Tabs.Tab value="analytics" label="Analytics" />
          <Tabs.Tab value="reports" label="Reports" />
          <Tabs.Tab value="settings" label="Settings" />
        </Tabs>
      </div>
    </div>
  )
}

// ─── Real-world: Settings panel ───────────────────────

function SettingsPanel() {
  const [tab, setTab] = useState('general')
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    analytics: true,
    betaFeatures: false,
  })
  const toggle = (k: keyof typeof settings) => setSettings(s => ({ ...s, [k]: !s[k] }))

  const tabs: TabItem[] = [
    { value: 'general', label: 'General' },
    { value: 'privacy', label: 'Privacy' },
    { value: 'advanced', label: 'Advanced' },
  ]

  return (
    <div
      style={{
        width: '420px',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-base)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{
        padding: '20px 24px 0',
        borderBottom: '1px solid var(--color-border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <H4 style={{ marginBottom: '2px' }}>Settings</H4>
            <Text variant="footnote" secondary>Manage your preferences</Text>
          </div>
          <Badge variant="accent" size="sm">v2.1</Badge>
        </div>
        <Tabs value={tab} onChange={setTab} variant="underline" size="sm" tabs={tabs} />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15 }}
          style={{ padding: '0 24px' }}
        >
          {tab === 'general' && (
            <>
              {([
                { key: 'notifications', label: 'Push Notifications', desc: 'Receive alerts and updates' },
                { key: 'darkMode', label: 'Dark Appearance', desc: 'Use dark color scheme' },
              ] as const).map(({ key, label, desc }) => (
                <div key={key} style={{ padding: '14px 0', borderBottom: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <Text variant="callout" style={{ margin: 0 }}>{label}</Text>
                    <Caption muted>{desc}</Caption>
                  </div>
                  <Toggle checked={settings[key]} onChange={() => toggle(key)} />
                </div>
              ))}
              <div style={{ padding: '14px 0' }}>
                <Button variant="secondary" size="sm">Reset to defaults</Button>
              </div>
            </>
          )}
          {tab === 'privacy' && (
            <>
              {([
                { key: 'analytics', label: 'Share Analytics', desc: 'Help us improve the product' },
              ] as const).map(({ key, label, desc }) => (
                <div key={key} style={{ padding: '14px 0', borderBottom: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <Text variant="callout" style={{ margin: 0 }}>{label}</Text>
                    <Caption muted>{desc}</Caption>
                  </div>
                  <Toggle checked={settings[key]} onChange={() => toggle(key)} />
                </div>
              ))}
              <div style={{ padding: '14px 0' }}>
                <Badge variant="info" size="sm">GDPR compliant</Badge>
              </div>
            </>
          )}
          {tab === 'advanced' && (
            <>
              {([
                { key: 'betaFeatures', label: 'Beta Features', desc: 'Access experimental features' },
              ] as const).map(({ key, label, desc }) => (
                <div key={key} style={{ padding: '14px 0', borderBottom: '1px solid var(--color-border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <div>
                    <Text variant="callout" style={{ margin: 0 }}>{label}</Text>
                    <Caption muted>{desc}</Caption>
                  </div>
                  <Toggle checked={settings[key]} onChange={() => toggle(key)} />
                </div>
              ))}
              <div style={{ padding: '14px 0' }}>
                <Badge variant="warning" size="sm" icon={<WarnIcon />}>Experimental</Badge>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// ─── Real-world: Notification card ────────────────────

function NotificationCard() {
  const [dismissed, setDismissed] = useState<string[]>([])

  const notifications = [
    { id: '1', title: 'Build succeeded', desc: 'main → production deployed in 1m 42s', badge: { text: 'Success', variant: 'success' as const }, time: '2m ago' },
    { id: '2', title: 'Review requested', desc: 'Alex Kim requested your review on PR #142', badge: { text: 'Pending', variant: 'warning' as const }, time: '14m ago' },
    { id: '3', title: 'Test suite failed', desc: '3 tests failed in CI — coverage dropped 2%', badge: { text: 'Failed', variant: 'error' as const }, time: '1h ago' },
    { id: '4', title: 'New comment', desc: 'Sarah left a comment on your draft', badge: { text: 'Info', variant: 'info' as const }, time: '3h ago' },
  ].filter(n => !dismissed.includes(n.id))

  return (
    <div
      style={{
        width: '420px',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-base)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <H5 style={{ margin: 0 }}>Notifications</H5>
        <Badge variant="error" size="sm">{notifications.length}</Badge>
      </div>
      <motion.div layout style={{ padding: '0 24px' }}>
        <AnimatePresence>
          {notifications.map((n) => (
            <motion.div
              key={n.id}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div style={{
                padding: '14px 0',
                borderBottom: '1px solid var(--color-border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              }}>
                <Badge variant={n.badge.variant} dot style={{ marginTop: '6px' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '2px' }}>
                    <Text variant="callout" style={{ margin: 0, fontWeight: '500' }}>{n.title}</Text>
                    <Caption muted style={{ whiteSpace: 'nowrap' }}>{n.time}</Caption>
                  </div>
                  <Caption muted>{n.desc}</Caption>
                </div>
                <Badge variant={n.badge.variant} size="sm">{n.badge.text}</Badge>
                <button
                  onClick={() => setDismissed(d => [...d, n.id])}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: 'var(--color-fg-tertiary)', lineHeight: 1 }}
                  aria-label="Dismiss"
                >
                  <CloseIcon />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {notifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ padding: '32px 0', textAlign: 'center' }}
          >
            <Caption muted>All caught up</Caption>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

// ─── Real-world: form example ─────────────────────────

function FormExample() {
  const [plan, setPlan] = useState('pro')
  const [prefs, setPrefs] = useState({ email: true, sms: false, push: true })
  const togglePref = (k: keyof typeof prefs) => setPrefs(s => ({ ...s, [k]: !s[k] }))

  const planTabs: TabItem[] = [
    { value: 'free', label: 'Free' },
    { value: 'pro', label: 'Pro' },
    { value: 'enterprise', label: 'Enterprise' },
  ]

  return (
    <div
      style={{
        width: '420px',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-base)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
          <H4 style={{ margin: 0 }}>Subscription</H4>
          <Badge variant="success" size="sm">Active</Badge>
        </div>
        <Text variant="footnote" secondary style={{ margin: 0 }}>Manage your plan and notifications</Text>
      </div>

      <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <Label style={{ display: 'block', marginBottom: '10px' }}>Plan</Label>
        <Tabs value={plan} onChange={setPlan} variant="pill" size="sm" tabs={planTabs} />
        <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {plan === 'free' && <><Badge variant="default" size="sm">1 seat</Badge><Badge variant="default" size="sm">5GB storage</Badge></>}
          {plan === 'pro' && <><Badge variant="accent" size="sm">5 seats</Badge><Badge variant="accent" size="sm">50GB storage</Badge><Badge variant="accent" size="sm">Priority support</Badge></>}
          {plan === 'enterprise' && <><Badge variant="success" size="sm">Unlimited seats</Badge><Badge variant="success" size="sm">1TB storage</Badge><Badge variant="success" size="sm">SLA</Badge></>}
        </div>
      </div>

      <div style={{ padding: '0 24px' }}>
        <Label style={{ display: 'block', padding: '16px 0 8px' }}>Notifications</Label>
        {([
          { key: 'email', label: 'Email' },
          { key: 'sms', label: 'SMS' },
          { key: 'push', label: 'Push' },
        ] as const).map(({ key, label }) => (
          <div key={key} style={{ padding: '11px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
            <Toggle checked={prefs[key]} onChange={() => togglePref(key)} label={label} size="sm" />
          </div>
        ))}
        <div style={{ padding: '16px 0', display: 'flex', gap: '8px' }}>
          <Button variant="primary" size="sm">Save changes</Button>
          <Button variant="ghost" size="sm">Cancel</Button>
        </div>
      </div>
    </div>
  )
}

// ─── System Colors palette ────────────────────────────

function SystemColorPalette() {
  const colors = [
    { name: 'Red',    light: '#FF3B30', dark: '#FF453A', var: '--color-system-red' },
    { name: 'Orange', light: '#FF9500', dark: '#FF9F0A', var: '--color-system-orange' },
    { name: 'Yellow', light: '#FFCC00', dark: '#FFD60A', var: '--color-system-yellow' },
    { name: 'Green',  light: '#34C759', dark: '#30D158', var: '--color-system-green' },
    { name: 'Mint',   light: '#00C7BE', dark: '#63E6E2', var: '--color-system-mint' },
    { name: 'Teal',   light: '#30B0C7', dark: '#40CBE0', var: '--color-system-teal' },
    { name: 'Cyan',   light: '#32ADE6', dark: '#64D2FF', var: '--color-system-cyan' },
    { name: 'Blue',   light: '#007AFF', dark: '#0A84FF', var: '--color-system-blue' },
    { name: 'Indigo', light: '#5856D6', dark: '#5E5CE6', var: '--color-system-indigo' },
    { name: 'Purple', light: '#AF52DE', dark: '#BF5AF2', var: '--color-system-purple' },
    { name: 'Pink',   light: '#FF2D55', dark: '#FF375F', var: '--color-system-pink' },
    { name: 'Brown',  light: '#A2845E', dark: '#AC8E68', var: '--color-system-brown' },
  ]
  const grays = [
    { name: 'Gray 1', var: '--color-system-gray-1' },
    { name: 'Gray 2', var: '--color-system-gray-2' },
    { name: 'Gray 3', var: '--color-system-gray-3' },
    { name: 'Gray 4', var: '--color-system-gray-4' },
    { name: 'Gray 5', var: '--color-system-gray-5' },
    { name: 'Gray 6', var: '--color-system-gray-6' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Caption muted style={{ display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          12 system colors (auto light/dark)
        </Caption>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px' }}>
          {colors.map(c => (
            <div key={c.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{
                height: '40px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: `var(${c.var})`,
              }} />
              <Mono size="2xs" style={{ color: 'var(--color-fg-tertiary)' }}>{c.name}</Mono>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Caption muted style={{ display: 'block', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          6 system grays
        </Caption>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px' }}>
          {grays.map(g => (
            <div key={g.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{
                height: '40px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: `var(${g.var})`,
                border: '1px solid var(--color-border-subtle)',
              }} />
              <Mono size="2xs" style={{ color: 'var(--color-fg-tertiary)' }}>{g.name}</Mono>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main story ───────────────────────────────────────

export const AllComponents: Story = {
  render: () => (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-base)',
        fontFamily: 'var(--font-sans)',
        color: 'var(--color-fg-primary)',
      }}
    >
      {/* Top bar */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--color-bg-base)',
        borderBottom: '1px solid var(--color-border-subtle)',
        backdropFilter: 'blur(12px)',
        padding: '12px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Mono size="sm" accent>@kingsley/design-system</Mono>
          <Badge variant="accent" size="sm">v1.0</Badge>
        </div>
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '48px 40px' }}>
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {/* Hero */}
          <motion.div variants={staggerItem} style={{ marginBottom: '64px' }}>
            <H1 style={{ marginBottom: '12px' }}>Component Playground</H1>
            <Text variant="body" secondary style={{ maxWidth: '480px' }}>
              Swiss design meets Apple aesthetic. Every token, component, and animation — composing together.
            </Text>
          </motion.div>

          {/* System Colors */}
          <motion.div variants={staggerItem}>
            <Section title="01 — Apple System Colors">
              <SystemColorPalette />
            </Section>
          </motion.div>

          {/* Badge */}
          <motion.div variants={staggerItem}>
            <Section title="02 — Badge">
              <BadgeShowcase />
            </Section>
          </motion.div>

          {/* Toggle */}
          <motion.div variants={staggerItem}>
            <Section title="03 — Toggle">
              <ToggleShowcase />
            </Section>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={staggerItem}>
            <Section title="04 — Tabs">
              <TabsShowcase />
            </Section>
          </motion.div>

          {/* Real-world layouts */}
          <motion.div variants={staggerItem}>
            <Section title="05 — Real-world layouts">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}>
                <SettingsPanel />
                <NotificationCard />
                <FormExample />
              </div>
            </Section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  ),
}

// ─── Individual panels as separate stories ────────────

export const SettingsPanelStory: Story = {
  name: 'Settings Panel',
  render: () => (
    <div style={{ padding: '40px', backgroundColor: 'var(--color-bg-subtle)', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <SettingsPanel />
    </div>
  ),
}

export const NotificationFeed: Story = {
  name: 'Notification Feed',
  render: () => (
    <div style={{ padding: '40px', backgroundColor: 'var(--color-bg-subtle)', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <NotificationCard />
    </div>
  ),
}

export const SubscriptionForm: Story = {
  name: 'Subscription Form',
  render: () => (
    <div style={{ padding: '40px', backgroundColor: 'var(--color-bg-subtle)', minHeight: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <FormExample />
    </div>
  ),
}

// ─── Tiny icons ───────────────────────────────────────

function WarnIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M5 2v3.5M5 7.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}
