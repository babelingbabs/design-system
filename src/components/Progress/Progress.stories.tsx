import React, { useState, useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

/**
 * # Progress
 * Horizontal progress bar with animated fill, four semantic variants, and indeterminate mode.
 *
 * Uses Framer Motion to animate width changes smoothly.
 */
const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'warning', 'error'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
    indeterminate: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: { value: 60, label: 'Uploading…', showValue: true },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-col gap-4 p-6 w-96" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Progress value={70} variant="default" label="Default" showValue />
      <Progress value={85} variant="success" label="Success" showValue />
      <Progress value={45} variant="warning" label="Warning" showValue />
      <Progress value={20} variant="error" label="Error" showValue />
    </div>
  ),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-5 p-6 w-96" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[var(--color-fg-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>sm</span>
        <Progress value={60} size="sm" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[var(--color-fg-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>md</span>
        <Progress value={60} size="md" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[var(--color-fg-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>lg</span>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
}

export const Indeterminate: Story = {
  name: 'Indeterminate',
  render: () => (
    <div className="flex flex-col gap-4 p-6 w-96" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Progress indeterminate label="Processing…" size="sm" />
      <Progress indeterminate label="Loading data…" size="md" variant="success" />
      <Progress indeterminate label="Syncing…" size="lg" variant="warning" />
    </div>
  ),
}

export const Animated: Story = {
  name: 'Animated (live)',
  render: () => {
    const [val, setVal] = useState(0)
    useEffect(() => {
      const t = setInterval(() => setVal((v) => (v >= 100 ? 0 : v + 5)), 300)
      return () => clearInterval(t)
    }, [])
    return (
      <div className="p-6 w-96" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <Progress value={val} label="Deploying…" showValue size="md" variant="default" />
      </div>
    )
  },
}
