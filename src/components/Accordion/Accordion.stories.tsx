import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem } from './Accordion'

/**
 * # Accordion
 * Collapsible content panels with animated height and chevron.
 *
 * - `type="single"` — only one item open at a time (default)
 * - `type="multiple"` — any number of items can be open simultaneously
 *
 * Keyboard: `Enter` or `Space` toggles the focused item.
 */
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'select', options: ['single', 'multiple'] },
  },
}
export default meta

type Story = StoryObj<typeof Accordion>

export const Single: Story = {
  name: 'Single (default)',
  render: () => (
    <Accordion type="single" defaultValue="item-1" className="w-[480px]">
      <AccordionItem value="item-1" title="What is a design system?">
        A design system is a collection of reusable components and guidelines that helps teams build
        consistent, high-quality interfaces faster.
      </AccordionItem>
      <AccordionItem value="item-2" title="How do I install this package?">
        Run <code>npm install @kingsley/design-system</code> and import the CSS in your app entry
        point: <code>import '@kingsley/design-system/dist/style.css'</code>.
      </AccordionItem>
      <AccordionItem value="item-3" title="Is dark mode supported?">
        Yes — wrap your app in <code>&lt;ThemeProvider&gt;</code> and toggle the <code>theme</code>{' '}
        prop between <code>"light"</code> and <code>"dark"</code>.
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  name: 'Multiple open',
  render: () => (
    <Accordion type="multiple" defaultValue={['item-1', 'item-3']} className="w-[480px]">
      <AccordionItem value="item-1" title="Can multiple items be open?">
        Yes — set <code>type="multiple"</code> and any number of items can be expanded at once.
      </AccordionItem>
      <AccordionItem value="item-2" title="What animation library is used?">
        Framer Motion handles the height animation and chevron rotation.
      </AccordionItem>
      <AccordionItem value="item-3" title="Does it support keyboard navigation?">
        Yes — press <kbd>Enter</kbd> or <kbd>Space</kbd> on a focused trigger to toggle it.
      </AccordionItem>
    </Accordion>
  ),
}

export const WithDisabled: Story = {
  name: 'With Disabled Item',
  render: () => (
    <Accordion type="single" className="w-[480px]">
      <AccordionItem value="item-1" title="Available section">
        This item can be opened normally.
      </AccordionItem>
      <AccordionItem value="item-2" title="Disabled section (locked)" disabled>
        This content is not accessible.
      </AccordionItem>
      <AccordionItem value="item-3" title="Another available section">
        This item can also be opened normally.
      </AccordionItem>
    </Accordion>
  ),
}

export const Controlled: Story = {
  name: 'Controlled',
  render: () => {
    const [open, setOpen] = useState('item-1')
    return (
      <div className="flex flex-col gap-4 w-[480px]" style={{ fontFamily: 'var(--font-sans)' }}>
        <div className="flex gap-2 text-xs text-[var(--color-fg-tertiary)]">
          {['item-1', 'item-2', 'item-3'].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setOpen(v)}
              className={`px-2 py-1 rounded border text-xs transition-colors ${
                open === v
                  ? 'border-[var(--color-accent-500)] text-[var(--color-accent-500)]'
                  : 'border-[var(--color-border-default)] text-[var(--color-fg-tertiary)]'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
        <Accordion type="single" value={open} onChange={(v) => setOpen(v as string)}>
          <AccordionItem value="item-1" title="First panel">
            Controlled by external state — click the buttons above to switch panels.
          </AccordionItem>
          <AccordionItem value="item-2" title="Second panel">
            The active panel is driven by the <code>value</code> prop.
          </AccordionItem>
          <AccordionItem value="item-3" title="Third panel">
            Use <code>onChange</code> to sync back to your state.
          </AccordionItem>
        </Accordion>
      </div>
    )
  },
}
