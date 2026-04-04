import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'
import { Button } from '../Button'

/**
 * # Drawer
 * Slides in from any edge. Portal-rendered with overlay, focus trap, and spring animation.
 *
 * - `position` — `left` | `right` | `bottom` (default `right`)
 * - `size` — `sm` | `md` | `lg` | `full`
 * - Escape key or overlay click closes the drawer
 * - Focus is trapped inside while open
 */
const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta

type Story = StoryObj<typeof Drawer>

function DrawerDemo({ position = 'right' as const, size = 'md' as const, title = 'Drawer' }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="secondary">
        Open {position} drawer
      </Button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        position={position}
        size={size}
        title={title}
      >
        <div
          className="flex flex-col gap-4 text-sm text-[var(--color-fg-secondary)]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <p>
            This drawer slides in from the <strong>{position}</strong> edge. Press{' '}
            <kbd className="px-1 py-0.5 rounded border border-[var(--color-border-default)] text-xs">
              Esc
            </kbd>{' '}
            or click the overlay to close.
          </p>
          <p>Focus is trapped inside while the drawer is open.</p>
          <div className="flex gap-2 pt-2">
            <Button size="sm" onClick={() => setOpen(false)}>
              Confirm
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export const Right: Story = {
  name: 'Right (default)',
  render: () => <DrawerDemo position="right" title="Right Drawer" />,
}

export const Left: Story = {
  name: 'Left',
  render: () => <DrawerDemo position="left" title="Left Drawer" />,
}

export const Bottom: Story = {
  name: 'Bottom sheet',
  render: () => <DrawerDemo position="bottom" size="sm" title="Bottom Drawer" />,
}

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div className="flex gap-3 flex-wrap">
      {(['sm', 'md', 'lg'] as const).map((size) => {
        const [open, setOpen] = useState(false)
        return (
          <React.Fragment key={size}>
            <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>
              {size}
            </Button>
            <Drawer
              open={open}
              onClose={() => setOpen(false)}
              size={size}
              title={`Size: ${size}`}
            >
              <p
                className="text-sm text-[var(--color-fg-secondary)]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Drawer with <code>size="{size}"</code>.
              </p>
            </Drawer>
          </React.Fragment>
        )
      })}
    </div>
  ),
}

export const NoOverlay: Story = {
  name: 'No overlay',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)} variant="secondary">
          Open without overlay
        </Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          overlay={false}
          title="No overlay"
          size="sm"
        >
          <p
            className="text-sm text-[var(--color-fg-secondary)]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            The backdrop is disabled. Close with the X button or Escape.
          </p>
        </Drawer>
      </>
    )
  },
}
