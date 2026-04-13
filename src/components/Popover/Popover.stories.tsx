import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from './index'

const meta: Meta<typeof PopoverContent> = {
  title: 'Overlay/Popover',
  component: PopoverContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof PopoverContent>

export const Basic: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-default)', margin: 0 }}>
          This is a simple popover with some content inside it.
        </p>
      </PopoverContent>
    </Popover>
  ),
}

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="secondary">Edit dimensions</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <p style={{ fontSize: 'var(--typography-font-size-sm)', fontWeight: 'var(--typography-font-weight-semibold)', color: 'var(--color-fg-default)', margin: 0 }}>
              Dimensions
            </p>
            <Input label="Width" defaultValue="100" size="sm" />
            <Input label="Height" defaultValue="200" size="sm" />
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--spacing-2)' }}>
              <PopoverClose asChild>
                <Button variant="ghost" size="sm">Cancel</Button>
              </PopoverClose>
              <Button size="sm" onClick={() => setOpen(false)}>Apply</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  },
}

export const PlacementOptions: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '12px', alignItems: 'center', justifyItems: 'center', padding: '80px' }}>
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="secondary" size="sm">{side}</Button>
          </PopoverTrigger>
          <PopoverContent side={side}>
            <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-default)', margin: 0 }}>
              Positioned on the <strong>{side}</strong>.
            </p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
