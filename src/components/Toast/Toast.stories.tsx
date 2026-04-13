import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider, ToastViewport, useToast } from './index'
import { Button } from '../Button'

const meta: Meta = {
  title: 'Overlay/Toast',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## When to use
- Brief confirmation that an action completed ("Saved", "Copied to clipboard")
- Non-critical warnings or informational messages that don't block the user
- Background task updates (upload complete, sync finished)

## When NOT to use
- Persistent errors that require user action (use Alert)
- Blocking confirmations that require a decision (use Dialog)
- Messages with more than one sentence of context (use Alert instead)

## Best practices
- Keep toast messages to a single short sentence
- Default duration (5s) is appropriate for most cases; use longer for important warnings
- Avoid queuing more than 3 toasts simultaneously — batch them or use an Alert
- Do not rely on toasts for critical error reporting

## Accessibility
- Uses \`role="status"\` with \`aria-live="polite"\` for non-critical announcements
- Error toasts use \`aria-live="assertive"\` for immediate announcement
- Toast messages are announced to screen readers without moving focus
        `,
      },
    },
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
