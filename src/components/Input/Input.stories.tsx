import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

/**
 * # Input
 * Minimal. Precise. The border animates to accent color on focus,
 * a focus ring provides a clear accessibility indicator.
 *
 * States: default, focus (CSS), error, success, disabled.
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    inputState: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Field label',
    placeholder: 'Placeholder text',
    hint: 'Helper text goes here',
  },
  render: (args: Story['args']) => (
    <div className="w-80">
      <Input {...args} />
    </div>
  ),
}

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="space-y-4 p-6 w-80" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  ),
}

export const States: Story = {
  name: 'All States',
  render: () => (
    <div className="space-y-4 p-6 w-80" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Input
        label="Default"
        placeholder="Type something..."
        hint="This is helper text"
      />
      <Input
        label="With value"
        defaultValue="Kingsley Design"
        hint="Looks great"
      />
      <Input
        label="Error state"
        defaultValue="invalid@"
        inputState="error"
        errorMessage="Please enter a valid email address"
      />
      <Input
        label="Success state"
        defaultValue="kingsley@design.com"
        inputState="success"
        successMessage="Email verified"
      />
      <Input
        label="Disabled"
        defaultValue="Cannot edit this"
        disabled
        hint="This field is read-only"
      />
    </div>
  ),
}

// ─── Icon SVGs ──────────────────────────────────────

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="6" cy="6" r="4" />
    <path d="M9 9l3 3" />
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="12" height="9" rx="1" />
    <path d="M1 4l6 5 6-5" />
  </svg>
)

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 7C1 7 3.5 3 7 3s6 4 6 4-2.5 4-6 4-6-4-6-4Z" />
    <circle cx="7" cy="7" r="1.5" />
  </svg>
)

export const WithAdornments: Story = {
  name: 'With Prefix / Suffix',
  render: () => (
    <div className="space-y-4 p-6 w-80" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Input
        label="Search"
        placeholder="Search components..."
        prefix={<SearchIcon />}
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        prefix={<MailIcon />}
        type="email"
      />
      <Input
        label="Password"
        placeholder="Enter password"
        type="password"
        suffix={<EyeIcon />}
      />
      <Input
        label="Amount"
        placeholder="0.00"
        prefix={<span className="text-xs font-medium" style={{ fontFamily: 'var(--font-mono)' }}>$</span>}
        suffix={<span className="text-xs" style={{ fontFamily: 'var(--font-mono)' }}>USD</span>}
        type="number"
      />
    </div>
  ),
}

export const FormExample: Story = {
  name: 'Form Example',
  render: () => (
    <div className="p-8 max-w-sm space-y-4" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-6" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
          NEW PROJECT
        </p>
      </div>
      <Input label="Project name" placeholder="My Design System" required fullWidth />
      <Input label="Description" placeholder="A brief description..." fullWidth />
      <Input
        label="Repository URL"
        placeholder="github.com/user/repo"
        prefix={<span className="text-xs" style={{ fontFamily: 'var(--font-mono)' }}>https://</span>}
        fullWidth
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        inputState="error"
        errorMessage="This email is already in use"
        fullWidth
      />
    </div>
  ),
}
