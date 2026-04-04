import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

/**
 * # Skeleton
 * Placeholder loaders that mimic content shape while data is loading.
 *
 * A shimmer sweep animates left-to-right. Disable with `animate={false}` for reduced-motion contexts.
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'select', options: ['text', 'circular', 'rectangular'] },
    animate: { control: 'boolean' },
    lines: { control: { type: 'number', min: 1, max: 10 } },
  },
}
export default meta

type Story = StoryObj<typeof Skeleton>

export const TextLines: Story = {
  name: 'Text',
  args: { variant: 'text', lines: 4 },
}

export const Circular: Story = {
  args: { variant: 'circular', width: 48, height: 48 },
}

export const Rectangular: Story = {
  args: { variant: 'rectangular', width: 320, height: 180 },
}

export const CardPlaceholder: Story = {
  name: 'Card Placeholder',
  render: () => (
    <div
      className="flex gap-4 p-6 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]"
      style={{ backgroundColor: 'var(--color-bg-base)', width: 360 }}
    >
      <Skeleton variant="circular" width={40} height={40} />
      <div className="flex-1">
        <Skeleton variant="text" lines={3} />
      </div>
    </div>
  ),
}

export const NoAnimation: Story = {
  name: 'No Animation',
  render: () => (
    <div className="flex flex-col gap-4 p-6" style={{ backgroundColor: 'var(--color-bg-base)', width: 320 }}>
      <Skeleton variant="rectangular" height={120} animate={false} />
      <Skeleton variant="text" lines={3} animate={false} />
    </div>
  ),
}
