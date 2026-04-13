import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { User, Lock, Bell, CreditCard, LayoutDashboard, FileText, Settings } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './index'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Manage your account details and preferences.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Change your password and manage security settings.
        </p>
      </TabsContent>
      <TabsContent value="notifications">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Configure how and when you receive notifications.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const Pill: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="pill">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Overview of your workspace activity and recent updates.
        </p>
      </TabsContent>
      <TabsContent value="analytics">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Detailed analytics and performance metrics.
        </p>
      </TabsContent>
      <TabsContent value="reports">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Generated reports and data exports.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Workspace settings and configuration.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile" icon={<User size={14} />}>Profile</TabsTrigger>
          <TabsTrigger value="security" icon={<Lock size={14} />}>Security</TabsTrigger>
          <TabsTrigger value="notifications" icon={<Bell size={14} />}>Notifications</TabsTrigger>
          <TabsTrigger value="billing" icon={<CreditCard size={14} />}>Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
            Update your profile information and public display name.
          </p>
        </TabsContent>
        <TabsContent value="security">
          <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
            Manage two-factor authentication and active sessions.
          </p>
        </TabsContent>
        <TabsContent value="notifications">
          <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
            Control email and in-app notification preferences.
          </p>
        </TabsContent>
        <TabsContent value="billing">
          <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
            View invoices and manage your subscription plan.
          </p>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="dashboard">
        <TabsList variant="pill">
          <TabsTrigger value="dashboard" icon={<LayoutDashboard size={14} />}>Dashboard</TabsTrigger>
          <TabsTrigger value="docs" icon={<FileText size={14} />}>Docs</TabsTrigger>
          <TabsTrigger value="settings" icon={<Settings size={14} />}>Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
            Your main workspace dashboard.
          </p>
        </TabsContent>
        <TabsContent value="docs">
          <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
            Documentation and guides.
          </p>
        </TabsContent>
        <TabsContent value="settings">
          <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
            Workspace configuration.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="archived" disabled>Archived</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Currently active items.
        </p>
      </TabsContent>
      <TabsContent value="pending">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Items awaiting review.
        </p>
      </TabsContent>
      <TabsContent value="archived">
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)', lineHeight: 1.6 }}>
          Archived items.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [tab, setTab] = useState('tab1')

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
          {['tab1', 'tab2', 'tab3'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: '4px 10px',
                fontSize: 'var(--typography-font-size-xs)',
                cursor: 'pointer',
                opacity: tab === t ? 1 : 0.5,
              }}
            >
              Jump to {t}
            </button>
          ))}
        </div>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList variant="pill">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1 — controlled externally.</TabsContent>
          <TabsContent value="tab2">Content for Tab 2 — controlled externally.</TabsContent>
          <TabsContent value="tab3">Content for Tab 3 — controlled externally.</TabsContent>
        </Tabs>
      </div>
    )
  },
}
