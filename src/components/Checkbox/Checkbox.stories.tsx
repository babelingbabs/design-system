import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Checkbox } from './Checkbox'

/**
 * # Checkbox
 * Custom-styled checkbox with animated check mark.
 * Supports indeterminate state, all sizes, and is fully keyboard accessible.
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Checkbox>

function Controlled(props: Omit<React.ComponentProps<typeof Checkbox>, 'checked' | 'onChange'> & { defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(props.defaultChecked ?? false)
  return <Checkbox {...props} checked={checked} onChange={setChecked} />
}

export const Default: Story = {
  render: () => <Controlled label="Accept terms and conditions" />,
}

export const Checked: Story = {
  render: () => <Controlled label="Remember me" defaultChecked />,
}

export const Indeterminate: Story = {
  render: () => <Checkbox checked={false} onChange={() => {}} label="Select all" indeterminate />,
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Controlled size="sm" label="Small checkbox" defaultChecked />
      <Controlled size="md" label="Medium checkbox" defaultChecked />
      <Controlled size="lg" label="Large checkbox" defaultChecked />
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Checkbox checked={false} onChange={() => {}} label="Unchecked" />
      <Checkbox checked={true} onChange={() => {}} label="Checked" />
      <Checkbox checked={false} onChange={() => {}} label="Indeterminate" indeterminate />
      <Checkbox checked={false} onChange={() => {}} label="Disabled unchecked" disabled />
      <Checkbox checked={true} onChange={() => {}} label="Disabled checked" disabled />
    </div>
  ),
}

export const CheckboxGroup: Story = {
  name: 'Checkbox Group',
  render: () => {
    function Group() {
      const options = ['Design', 'Engineering', 'Product', 'Marketing']
      const [selected, setSelected] = useState<Set<string>>(new Set(['Design']))

      const toggle = (opt: string) =>
        setSelected((s) => {
          const next = new Set(s)
          next.has(opt) ? next.delete(opt) : next.add(opt)
          return next
        })

      const allChecked = selected.size === options.length
      const someChecked = selected.size > 0 && !allChecked

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Checkbox
            checked={allChecked}
            onChange={(v) => setSelected(v ? new Set(options) : new Set())}
            indeterminate={someChecked}
            label="All teams"
          />
          <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {options.map((opt) => (
              <Checkbox
                key={opt}
                checked={selected.has(opt)}
                onChange={() => toggle(opt)}
                label={opt}
              />
            ))}
          </div>
        </div>
      )
    }
    return <Group />
  },
}
