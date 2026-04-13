import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './index'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message to help you understand something.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Changes saved',
    children: 'Your profile has been updated successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Heads up',
    children: 'This action may have unintended side effects. Review before continuing.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Something went wrong',
    children: 'We could not process your request. Please try again later.',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
      <Alert variant="info" title="Info">An informational alert.</Alert>
      <Alert variant="success" title="Success">Operation completed successfully.</Alert>
      <Alert variant="warning" title="Warning">Proceed with caution.</Alert>
      <Alert variant="error" title="Error">Something went wrong.</Alert>
    </div>
  ),
}

export const Closable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
      <Alert variant="info" title="Dismissible alert" closable>
        Click the X to dismiss this alert with an animated collapse.
      </Alert>
      <Alert variant="success" title="Success" closable>
        This one can be dismissed too.
      </Alert>
      <Alert variant="warning" closable>
        A warning with no title — just a description and a close button.
      </Alert>
    </div>
  ),
}

export const TitleOnly: Story = {
  args: {
    variant: 'info',
    title: 'This alert has a title but no description text.',
  },
}

export const LongContent: Story = {
  render: () => (
    <Alert variant="warning" title="Your subscription is expiring soon" closable>
      Your current plan will expire in 3 days. After expiry, you will lose access to premium
      features including advanced analytics, custom exports, and priority support. To avoid
      interruption, please renew your subscription from the billing settings page before the
      deadline. Contact our team if you need assistance or have questions about your plan.
    </Alert>
  ),
}
