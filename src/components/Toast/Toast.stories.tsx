import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, useToast } from './Toast'
import { Button } from '../Button/Button'

/**
 * # Toast / Notification
 * Auto-dismissing notifications with slide-in animation.
 *
 * Wrap your app with `<ToastProvider>` and use the `useToast()` hook.
 */
const meta: Meta<typeof ToastProvider> = {
  title: 'Components/Toast',
  component: ToastProvider,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [
    (Story) => (
      <ToastProvider position="bottom-right">
        <Story />
      </ToastProvider>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof ToastProvider>

function ToastTriggers() {
  const { toast, dismissAll } = useToast()
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button onClick={() => toast('Changes saved', { variant: 'success', description: 'Your project has been updated.' })}>
        Success Toast
      </Button>
      <Button variant="secondary" onClick={() => toast('Update available', { variant: 'info', description: 'Version 2.1 is ready to install.' })}>
        Info Toast
      </Button>
      <Button variant="secondary" onClick={() => toast('Storage almost full', { variant: 'warning', description: '90% of your quota is used.' })}>
        Warning Toast
      </Button>
      <Button variant="danger" onClick={() => toast('Connection failed', { variant: 'error', description: 'Unable to reach the server.' })}>
        Error Toast
      </Button>
      <Button variant="ghost" onClick={() => toast('Copied to clipboard')}>
        Default Toast
      </Button>
      <Button variant="ghost" onClick={dismissAll}>
        Dismiss All
      </Button>
    </div>
  )
}

export const Default: Story = {
  render: () => <ToastTriggers />,
}

export const Variants: Story = {
  name: 'All Variants',
  render: () => {
    function AllVariants() {
      const { toast } = useToast()
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-footnote)', color: 'var(--color-fg-tertiary)', margin: '0 0 8px' }}>
            Click each button to trigger the toast variant:
          </p>
          {(['default', 'success', 'info', 'warning', 'error'] as const).map(v => (
            <Button key={v} variant="secondary" size="sm" onClick={() => toast(`${v.charAt(0).toUpperCase() + v.slice(1)} notification`, { variant: v, description: `This is a ${v} message with more context.` })}>
              {v}
            </Button>
          ))}
        </div>
      )
    }
    return <AllVariants />
  },
}

export const Stacking: Story = {
  name: 'Stacking Multiple',
  render: () => {
    function StackDemo() {
      const { toast } = useToast()
      const fire = () => {
        toast('File uploaded', { variant: 'success' })
        setTimeout(() => toast('Processing started', { variant: 'info', description: 'This may take a moment.' }), 300)
        setTimeout(() => toast('Quota warning', { variant: 'warning', description: '80% storage used.' }), 600)
      }
      return <Button onClick={fire}>Fire 3 Toasts</Button>
    }
    return <StackDemo />
  },
}

export const NoDismiss: Story = {
  name: 'Persistent (No Auto-Dismiss)',
  render: () => {
    function PersistDemo() {
      const { toast, dismissAll } = useToast()
      return (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button onClick={() => toast('Action required', { variant: 'warning', description: 'Please review before continuing.', duration: 0 })}>
            Show Persistent
          </Button>
          <Button variant="ghost" onClick={dismissAll}>Dismiss All</Button>
        </div>
      )
    }
    return <PersistDemo />
  },
}

export const TopRight: Story = {
  name: 'Top-Right Position',
  decorators: [
    (Story) => (
      <ToastProvider position="top-right">
        <Story />
      </ToastProvider>
    ),
  ],
  render: () => {
    function TopRightDemo() {
      const { toast } = useToast()
      return <Button onClick={() => toast('Top-right toast', { variant: 'success' })}>Top-Right Toast</Button>
    }
    return <TopRightDemo />
  },
}
