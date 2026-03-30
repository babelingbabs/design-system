import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from '../Button/Button'

/**
 * # Tooltip
 * Hover/focus-triggered content bubble with positional arrow.
 * Renders in a portal to avoid overflow clipping.
 */
const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: 'number' },
    maxWidth: { control: 'number' },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => (
    <Tooltip content="This is a helpful tooltip" {...args}>
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
}

export const Positions: Story = {
  name: 'All Positions',
  parameters: { layout: 'centered' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '80px' }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(pos => (
        <Tooltip key={pos} content={`Position: ${pos}`} position={pos}>
          <Button variant="secondary" size="sm">{pos}</Button>
        </Tooltip>
      ))}
    </div>
  ),
}

export const WithRichContent: Story = {
  name: 'Rich Content',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', padding: '40px' }}>
      <Tooltip
        content="Shortcut: ⌘ K"
        position="top"
      >
        <Button variant="ghost" size="sm">Command Palette</Button>
      </Tooltip>
      <Tooltip
        content="Files are saved automatically every 30 seconds"
        position="bottom"
        maxWidth={200}
      >
        <Button variant="secondary" size="sm">Auto-save</Button>
      </Tooltip>
      <Tooltip
        content="You don't have permission to edit this item. Contact your admin."
        position="right"
        maxWidth={220}
      >
        <Button variant="ghost" size="sm" disabled>Locked field</Button>
      </Tooltip>
    </div>
  ),
}

export const OnIcons: Story = {
  name: 'On Icon Buttons',
  render: () => (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', padding: '60px' }}>
      {[
        { label: 'Save', key: '⌘S' },
        { label: 'Undo', key: '⌘Z' },
        { label: 'Redo', key: '⌘⇧Z' },
        { label: 'Copy', key: '⌘C' },
      ].map(({ label, key }) => (
        <Tooltip key={label} content={`${label} (${key})`} position="bottom">
          <Button variant="ghost" size="sm">{label}</Button>
        </Tooltip>
      ))}
    </div>
  ),
}

export const CustomDelay: Story = {
  name: 'Custom Delay (0ms)',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '60px', justifyContent: 'center' }}>
      <Tooltip content="300ms delay (default)" position="top">
        <Button variant="secondary" size="sm">Default delay</Button>
      </Tooltip>
      <Tooltip content="Instant!" position="top" delay={0}>
        <Button variant="secondary" size="sm">No delay</Button>
      </Tooltip>
      <Tooltip content="800ms delay" position="top" delay={800}>
        <Button variant="secondary" size="sm">Slow delay</Button>
      </Tooltip>
    </div>
  ),
}
