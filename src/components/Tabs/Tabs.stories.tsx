import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tabs } from './Tabs'
import type { TabItem } from './Tabs'

/**
 * # Tabs
 * Apple-style segmented control / tab bar with animated indicator.
 * Two variants: underline (minimal) and pill (filled background slide).
 * Compound component: <Tabs tabs={[...]} /> or <Tabs><Tabs.Tab /></Tabs>
 */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Tabs>

// ─── Underline variant ───────────────────────────────

export const Underline: Story = {
  render: () => {
    function Demo() {
      const [tab, setTab] = useState('all')
      const tabs: TabItem[] = [
        { value: 'all', label: 'All' },
        { value: 'active', label: 'Active' },
        { value: 'completed', label: 'Completed' },
        { value: 'archived', label: 'Archived' },
      ]
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Tabs value={tab} onChange={setTab} variant="underline" tabs={tabs} />
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-fg-secondary)' }}>
            Active tab: <strong style={{ color: 'var(--color-fg-primary)' }}>{tab}</strong>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}

// ─── Pill variant ─────────────────────────────────────

export const Pill: Story = {
  render: () => {
    function Demo() {
      const [tab, setTab] = useState('day')
      const tabs: TabItem[] = [
        { value: 'day', label: 'Day' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
        { value: 'year', label: 'Year' },
      ]
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Tabs value={tab} onChange={setTab} variant="pill" tabs={tabs} />
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--color-fg-secondary)' }}>
            Active: <strong style={{ color: 'var(--color-fg-primary)' }}>{tab}</strong>
          </div>
        </div>
      )
    }
    return <Demo />
  },
}

// ─── Sizes ───────────────────────────────────────────

export const Sizes: Story = {
  render: () => {
    function Demo() {
      const [tabU1, setTabU1] = useState('overview')
      const [tabU2, setTabU2] = useState('overview')
      const [tabP1, setTabP1] = useState('day')
      const [tabP2, setTabP2] = useState('day')

      const navTabs: TabItem[] = [
        { value: 'overview', label: 'Overview' },
        { value: 'analytics', label: 'Analytics' },
        { value: 'settings', label: 'Settings' },
      ]
      const timeTabs: TabItem[] = [
        { value: 'day', label: 'Day' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
      ]

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>underline — sm</p>
            <Tabs value={tabU1} onChange={setTabU1} variant="underline" size="sm" tabs={navTabs} />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>underline — md</p>
            <Tabs value={tabU2} onChange={setTabU2} variant="underline" size="md" tabs={navTabs} />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>pill — sm</p>
            <Tabs value={tabP1} onChange={setTabP1} variant="pill" size="sm" tabs={timeTabs} />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>pill — md</p>
            <Tabs value={tabP2} onChange={setTabP2} variant="pill" size="md" tabs={timeTabs} />
          </div>
        </div>
      )
    }
    return <Demo />
  },
}

// ─── With icons ───────────────────────────────────────

export const WithIcons: Story = {
  render: () => {
    function Demo() {
      const [tab, setTab] = useState('home')
      const tabs: TabItem[] = [
        { value: 'home', label: 'Home', icon: <HomeIcon /> },
        { value: 'search', label: 'Search', icon: <SearchIcon /> },
        { value: 'settings', label: 'Settings', icon: <SettingsIcon /> },
        { value: 'profile', label: 'Profile', icon: <ProfileIcon /> },
      ]
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>underline with icons</p>
            <Tabs value={tab} onChange={setTab} variant="underline" tabs={tabs} />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-fg-tertiary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>pill with icons</p>
            <Tabs value={tab} onChange={setTab} variant="pill" tabs={tabs} />
          </div>
        </div>
      )
    }
    return <Demo />
  },
}

// ─── Compound pattern ────────────────────────────────

export const CompoundPattern: Story = {
  render: () => {
    function Demo() {
      const [tab, setTab] = useState('code')
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Tabs value={tab} onChange={setTab} variant="underline">
            <Tabs.Tab value="code" label="Code" />
            <Tabs.Tab value="preview" label="Preview" />
            <Tabs.Tab value="docs" label="Docs" />
          </Tabs>
          <div
            style={{
              padding: '16px',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border-subtle)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--color-fg-secondary)',
            }}
          >
            {tab === 'code' && '// your code here'}
            {tab === 'preview' && '[ rendered component ]'}
            {tab === 'docs' && '## Documentation'}
          </div>
        </div>
      )
    }
    return <Demo />
  },
}

// ─── Icon SVGs ───────────────────────────────────────

function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 6L7 1l6 5v7H9V9H5v4H1V6z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="4.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M9.5 9.5l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.5 2.5l1 1M10.5 10.5l1 1M11.5 2.5l-1 1M3.5 10.5l-1 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ProfileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 13c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
