import type { Meta, StoryObj } from '@storybook/react'
import { Info, Settings, Trash2 } from 'lucide-react'
import { Button } from '../Button'
import { Tooltip } from './index'

const meta: Meta<typeof Tooltip> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## When to use
- Supplementary, non-essential information for UI elements (icon buttons, truncated text)
- Surfacing keyboard shortcut hints on hover
- Clarifying the purpose of an icon without adding permanent text to the layout

## When NOT to use
- Essential information the user needs to complete a task — put it inline
- Interactive content like links or buttons (use Popover)
- Long descriptions (use a Popover or helper text)
- Mobile-first experiences where hover is unavailable

## Best practices
- Keep tooltip content under ~80 characters
- Default side is "top" — switch to "bottom" only when top is clipped
- Do not trigger tooltips on elements that already have a visible text label

## Accessibility
- Tooltips are triggered by both hover and keyboard focus
- Content is announced via \`aria-describedby\` by Radix UI
- Never place actionable elements (links, buttons) inside a tooltip
        `,
      },
    },
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    delayDuration: { control: 'number' },
    sideOffset: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    side: 'top',
    delayDuration: 200,
    sideOffset: 8,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="secondary">Hover me</Button>
    </Tooltip>
  ),
}

export const AllSides: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '48px', alignItems: 'center', justifyItems: 'center', padding: '60px' }}>
      <div />
      <Tooltip content="Top tooltip" side="top">
        <Button variant="secondary">Top</Button>
      </Tooltip>
      <div />
      <Tooltip content="Left tooltip" side="left">
        <Button variant="secondary">Left</Button>
      </Tooltip>
      <div />
      <Tooltip content="Right tooltip" side="right">
        <Button variant="secondary">Right</Button>
      </Tooltip>
      <div />
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="secondary">Bottom</Button>
      </Tooltip>
      <div />
    </div>
  ),
}

export const DifferentTriggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Tooltip content="Primary action button">
        <Button variant="primary">Button trigger</Button>
      </Tooltip>

      <Tooltip content="Open settings panel">
        <Button variant="ghost" aria-label="Settings">
          <Settings size={16} />
        </Button>
      </Tooltip>

      <Tooltip content="Permanently delete this item">
        <Button variant="danger" aria-label="Delete">
          <Trash2 size={16} />
        </Button>
      </Tooltip>

      <Tooltip content="Your API key is kept secret and never shared with third parties.">
        <span
          style={{ display: 'inline-flex', alignItems: 'center', cursor: 'help', color: 'var(--color-fg-muted)' }}
          tabIndex={0}
          role="button"
          aria-label="More information"
        >
          <Info size={16} />
        </span>
      </Tooltip>

      <Tooltip content="Hover over any text">
        <span
          style={{
            fontSize: 'var(--typography-font-size-sm)',
            color: 'var(--color-fg-default)',
            textDecoration: 'underline dotted',
            textUnderlineOffset: '3px',
            cursor: 'help',
          }}
          tabIndex={0}
        >
          What does this mean?
        </span>
      </Tooltip>
    </div>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Tooltip content="Instant (0ms delay)" delayDuration={0}>
        <Button variant="secondary" size="sm">Instant</Button>
      </Tooltip>
      <Tooltip content="Default (200ms delay)" delayDuration={200}>
        <Button variant="secondary" size="sm">Default</Button>
      </Tooltip>
      <Tooltip content="Slow (700ms delay)" delayDuration={700}>
        <Button variant="secondary" size="sm">Slow</Button>
      </Tooltip>
    </div>
  ),
}
