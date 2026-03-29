import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

/**
 * # Button
 * Four variants. Three sizes. Clean states. No decoration.
 *
 * Buttons use `framer-motion` for a subtle press (scale 0.97) that gives
 * physicality without being cartoonish.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Button>

// ─── Default ────────────────────────────────────────

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
}

// ─── All Variants ────────────────────────────────────

export const Variants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}

// ─── All Sizes ───────────────────────────────────────

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

// ─── States ──────────────────────────────────────────

export const States: Story = {
  name: 'States',
  render: () => (
    <div className="space-y-6 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Default</p>
        <div className="flex gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </div>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Disabled</p>
        <div className="flex gap-3">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="danger" disabled>Danger</Button>
        </div>
      </div>
      <div>
        <p className="text-xs text-[var(--color-fg-tertiary)] mb-3" style={{ fontFamily: 'var(--font-mono)' }}>Loading</p>
        <div className="flex gap-3">
          <Button variant="primary" loading>Loading</Button>
          <Button variant="secondary" loading>Loading</Button>
          <Button variant="ghost" loading>Loading</Button>
        </div>
      </div>
    </div>
  ),
}

// ─── With Icons ──────────────────────────────────────

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
)

const Plus = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M7 2v10M2 7h10" />
  </svg>
)

const Gear = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="7" r="2" />
    <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.9 2.9l1.1 1.1M10 10l1.1 1.1M2.9 11.1 4 10M10 4l1.1-1.1" />
  </svg>
)

export const WithIcons: Story = {
  name: 'With Icons',
  render: () => (
    <div className="flex flex-wrap items-center gap-3 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Button icon={<Plus />}>Add item</Button>
      <Button variant="secondary" trailingIcon={<ArrowRight />}>Continue</Button>
      <Button variant="ghost" icon={<Gear />}>Settings</Button>
      <Button iconOnly icon={<Plus />} variant="primary">Add</Button>
      <Button iconOnly icon={<Gear />} variant="secondary">Settings</Button>
      <Button iconOnly icon={<Gear />} variant="ghost" size="sm">Settings</Button>
    </div>
  ),
}

// ─── Size × Variant Matrix ───────────────────────────

export const Matrix: Story = {
  name: 'Size × Variant Matrix',
  render: () => (
    <div className="p-6 space-y-4" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {(['primary', 'secondary', 'ghost', 'danger'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          <span
            className="text-[10px] text-[var(--color-fg-tertiary)] w-20 shrink-0"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {variant}
          </span>
          <Button variant={variant} size="sm">Small</Button>
          <Button variant={variant} size="md">Medium</Button>
          <Button variant={variant} size="lg">Large</Button>
        </div>
      ))}
    </div>
  ),
}
