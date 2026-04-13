import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, ToastViewport, useToast } from './index'
import { Button } from '../Button'

const meta: Meta = {
  title: 'Overlay/Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
}

export default meta
type Story = StoryObj

function ToastDemo({ variant, title, description }: { variant?: 'default' | 'success' | 'error' | 'warning'; title?: string; description?: string }) {
  const { toast } = useToast()
  return (
    <Button
      variant="secondary"
      onClick={() => toast({ variant, title, description })}
    >
      Show {variant ?? 'default'} toast
    </Button>
  )
}

export const Default: Story = {
  render: () => <ToastDemo title="Heads up" description="Something happened that you should know about." />,
}

export const Success: Story = {
  render: () => <ToastDemo variant="success" title="Saved!" description="Your changes have been saved successfully." />,
}

export const Error: Story = {
  render: () => <ToastDemo variant="error" title="Failed to save" description="An unexpected error occurred. Please try again." />,
}

export const Warning: Story = {
  render: () => <ToastDemo variant="warning" title="Quota nearly reached" description="You have used 90% of your monthly storage limit." />,
}

export const AllVariants: Story = {
  render: () => {
    const { toast } = useToast()
    return (
      <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
        <Button onClick={() => toast({ title: 'Default', description: 'A default notification.' })}>Default</Button>
        <Button onClick={() => toast({ variant: 'success', title: 'Success', description: 'Operation completed.' })}>Success</Button>
        <Button onClick={() => toast({ variant: 'warning', title: 'Warning', description: 'Proceed carefully.' })}>Warning</Button>
        <Button onClick={() => toast({ variant: 'error', title: 'Error', description: 'Something went wrong.' })}>Error</Button>
      </div>
    )
  },
}

export const TitleOnly: Story = {
  render: () => {
    const { toast } = useToast()
    return (
      <Button variant="secondary" onClick={() => toast({ variant: 'success', title: 'Profile updated' })}>
        Show title-only toast
      </Button>
    )
  },
}

export const WithDescription: Story = {
  render: () => {
    const { toast } = useToast()
    return (
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            variant: 'default',
            title: 'Scheduled for later',
            description: 'Your email will be sent at 9:00 AM tomorrow.',
          })
        }
      >
        Show with description
      </Button>
    )
  },
}

export const AutoDismissDemo: Story = {
  render: () => {
    const { toast } = useToast()
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        <Button onClick={() => toast({ title: 'Quick toast', description: 'Dismisses in 2 seconds.', duration: 2000 })}>
          2s dismiss
        </Button>
        <Button variant="secondary" onClick={() => toast({ title: 'Persistent toast', description: 'Will not auto-dismiss.', duration: Infinity })}>
          No auto-dismiss
        </Button>
      </div>
    )
  },
}
