import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './Separator'

/**
 * # Separator
 * A thin dividing line, horizontal or vertical, with optional centered text label.
 *
 * By default `decorative=true` — the element is hidden from assistive technology.
 * Set `decorative={false}` when the separator conveys meaningful section structure.
 */
const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    decorative: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Separator>

export const Horizontal: Story = {
  render: () => (
    <div className="p-6 w-80" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <p className="text-sm text-[var(--color-fg-primary)] mb-4" style={{ fontFamily: 'var(--font-sans)' }}>Section A</p>
      <Separator />
      <p className="text-sm text-[var(--color-fg-primary)] mt-4" style={{ fontFamily: 'var(--font-sans)' }}>Section B</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-6" style={{ backgroundColor: 'var(--color-bg-base)', height: 48 }}>
      <span className="text-sm text-[var(--color-fg-primary)]" style={{ fontFamily: 'var(--font-sans)' }}>Home</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-[var(--color-fg-primary)]" style={{ fontFamily: 'var(--font-sans)' }}>Blog</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-[var(--color-fg-primary)]" style={{ fontFamily: 'var(--font-sans)' }}>About</span>
    </div>
  ),
}

export const WithLabel: Story = {
  name: 'With Label',
  render: () => (
    <div className="flex flex-col gap-6 p-6 w-80" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Separator label="or continue with" />
      <Separator label="January 2025" />
      <Separator label="Advanced settings" />
    </div>
  ),
}

export const Semantic: Story = {
  name: 'Semantic (non-decorative)',
  args: {
    decorative: false,
    orientation: 'horizontal',
  },
}
