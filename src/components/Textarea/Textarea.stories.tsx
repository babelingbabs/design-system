import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'

/**
 * # Textarea
 * Multi-line text input following the same patterns as Input.
 * Supports character count, resize control, error/success states.
 */
const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    inputState: { control: 'select', options: ['default', 'error', 'success'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    resize: { control: 'select', options: ['none', 'vertical', 'both'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Write something...',
    hint: 'Keep it concise',
  },
  render: (args: Story['args']) => (
    <div className="w-96">
      <Textarea {...args} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Textarea size="sm" label="Small" placeholder="Small textarea" rows={2} />
      <Textarea size="md" label="Medium" placeholder="Medium textarea" rows={3} />
      <Textarea size="lg" label="Large" placeholder="Large textarea" rows={4} />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Textarea label="Default" placeholder="Type here..." hint="This is helper text" />
      <Textarea
        label="Error"
        defaultValue="Too short"
        inputState="error"
        errorMessage="Description must be at least 20 characters"
      />
      <Textarea
        label="Success"
        defaultValue="This description looks great and meets all requirements."
        inputState="success"
        successMessage="Looks good!"
      />
      <Textarea label="Disabled" defaultValue="Cannot edit this field." disabled hint="Read-only" />
    </div>
  ),
}

export const WithCharacterCount: Story = {
  name: 'With Character Count',
  render: () => (
    <div className="space-y-4 w-96">
      <Textarea
        label="Bio"
        placeholder="Tell us about yourself..."
        maxLength={160}
        hint="Twitter-style bio"
        rows={4}
      />
      <Textarea
        label="Short note"
        placeholder="Quick note..."
        maxLength={50}
        rows={2}
      />
    </div>
  ),
}

export const ResizeOptions: Story = {
  name: 'Resize Options',
  render: () => (
    <div className="space-y-4 w-96">
      <Textarea label="No resize" placeholder="Fixed size" resize="none" rows={3} />
      <Textarea label="Vertical only" placeholder="Drag bottom edge" resize="vertical" rows={3} />
      <Textarea label="Both axes" placeholder="Drag corner" resize="both" rows={3} />
    </div>
  ),
}
