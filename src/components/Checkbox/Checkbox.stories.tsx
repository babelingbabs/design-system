import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './index'

const meta: Meta<typeof Checkbox> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## When to use
- Selecting one or more independent options from a list
- Boolean settings that take effect on form submission (not immediately)
- "Select all" patterns with indeterminate state for partial selection

## When NOT to use
- Mutually exclusive options (use Radio — only one can be selected)
- Immediate on/off settings (use Switch — effect is instant)
- More than ~7 options in a list (consider a multi-select instead)

## Best practices
- Group related checkboxes under a shared legend or label
- Use \`indeterminate\` to represent partial selection in "select all" patterns
- Keep labels concise — ideally one line
- Align checkboxes vertically for easier scanning

## Accessibility
- Each checkbox must have an associated \`label\`
- Use \`aria-describedby\` for helper text and error messages
- The indeterminate state must be set programmatically — it is not a native HTML attribute value
        `,
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    helperText: 'You must accept before continuing.',
  },
}

export const Checked: Story = {
  args: {
    label: 'Remember me',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
    helperText: 'Some items are selected.',
  },
}

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Email notifications',
    helperText: 'Contact your admin to change this setting.',
    disabled: true,
    defaultChecked: true,
  },
}

export const DisabledUnchecked: Story = {
  args: {
    label: 'SMS notifications',
    disabled: true,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox size="sm" label="Small checkbox" helperText="14px control" />
      <Checkbox size="md" label="Medium checkbox" helperText="18px control" defaultChecked />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox label="Unchecked" helperText="Default state" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate helperText="Partial selection" />
      <Checkbox label="Error state" error="This field is required." />
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        label={`Controlled: ${checked ? 'on' : 'off'}`}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    )
  },
}

export const SelectAllPattern: Story = {
  render: () => {
    const items = ['Figma', 'Sketch', 'Adobe XD']
    const [selected, setSelected] = useState<string[]>([])
    const allSelected = selected.length === items.length
    const someSelected = selected.length > 0 && !allSelected

    const toggleAll = () =>
      setSelected(allSelected ? [] : items)
    const toggleItem = (item: string) =>
      setSelected((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      )

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox
          label="Select all tools"
          checked={allSelected}
          indeterminate={someSelected}
          onChange={toggleAll}
        />
        <div style={{ paddingLeft: '28px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {items.map((item) => (
            <Checkbox
              key={item}
              label={item}
              checked={selected.includes(item)}
              onChange={() => toggleItem(item)}
            />
          ))}
        </div>
      </div>
    )
  },
}
