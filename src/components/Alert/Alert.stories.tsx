import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

/**
 * # Alert
 * Contextual feedback banners with a left-border accent.
 *
 * Four variants map to semantic meaning: `info`, `success`, `warning`, and `error`.
 * Use `aria-live="assertive"` variants (warning/error) sparingly — they interrupt screen readers.
 */
const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    closable: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'info',
    title: 'Heads up',
    children: 'This is an informational message with some context.',
  },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-3 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Alert variant="info" title="Information">
        Your session will expire in 10 minutes.
      </Alert>
      <Alert variant="success" title="Success">
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        This action cannot be undone. Please proceed with caution.
      </Alert>
      <Alert variant="error" title="Error">
        Failed to save changes. Please try again.
      </Alert>
    </div>
  ),
}

export const WithClose: Story = {
  name: 'Closable',
  render: () => (
    <div className="flex flex-col gap-3 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Alert variant="info" title="Dismissible" closable onClose={() => alert('closed')}>
        Click the X to dismiss this alert.
      </Alert>
      <Alert variant="success" closable onClose={() => alert('closed')}>
        Operation completed. You can dismiss this.
      </Alert>
      <Alert variant="error" title="Critical error" closable onClose={() => alert('closed')}>
        Something went wrong. Check the console for details.
      </Alert>
    </div>
  ),
}

export const TitleOnly: Story = {
  name: 'Title Only',
  render: () => (
    <div className="flex flex-col gap-3 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Alert variant="info" title="Read-only mode is active" />
      <Alert variant="warning" title="Your account is over the free tier limit" />
      <Alert variant="success" title="All systems operational" />
    </div>
  ),
}

export const CustomIcon: Story = {
  name: 'Custom Icon',
  args: {
    variant: 'info',
    title: 'Pro tip',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1a5 5 0 0 1 2 9.58V12H6v-1.42A5 5 0 0 1 8 1zM6 13h4v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V13z" fill="currentColor" />
      </svg>
    ),
    children: 'You can use keyboard shortcut ⌘K to open the command palette.',
  },
}
