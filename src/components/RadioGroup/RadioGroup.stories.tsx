import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { RadioGroup, RadioItem } from './RadioGroup'

/**
 * # RadioGroup
 * Accessible radio group with custom-styled indicators.
 * Supports keyboard navigation (arrow keys), horizontal/vertical orientation.
 */
const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof RadioGroup>

function Controlled(props: Omit<React.ComponentProps<typeof RadioGroup>, 'value' | 'onChange'> & { defaultValue?: string }) {
  const [value, setValue] = useState(props.defaultValue ?? '')
  return <RadioGroup {...props} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: () => (
    <Controlled label="Preferred contact" defaultValue="email">
      <RadioItem value="email" label="Email" />
      <RadioItem value="phone" label="Phone" />
      <RadioItem value="sms" label="SMS" />
    </Controlled>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Controlled label="Size" defaultValue="md" orientation="horizontal">
      <RadioItem value="sm" label="Small" />
      <RadioItem value="md" label="Medium" />
      <RadioItem value="lg" label="Large" />
    </Controlled>
  ),
}

export const WithDisabled: Story = {
  render: () => (
    <Controlled label="Plan" defaultValue="pro">
      <RadioItem value="free" label="Free" />
      <RadioItem value="pro" label="Pro" />
      <RadioItem value="enterprise" label="Enterprise" disabled />
    </Controlled>
  ),
}

export const GroupDisabled: Story = {
  render: () => (
    <Controlled label="Theme" defaultValue="light" disabled>
      <RadioItem value="light" label="Light" />
      <RadioItem value="dark" label="Dark" />
      <RadioItem value="system" label="System" />
    </Controlled>
  ),
}

export const FormExample: Story = {
  name: 'Form Example',
  render: () => {
    function Form() {
      const [plan, setPlan] = useState('monthly')
      const [delivery, setDelivery] = useState('standard')

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '320px' }}>
          <RadioGroup value={plan} onChange={setPlan} label="Billing period">
            <RadioItem value="monthly" label="Monthly ($12/mo)" />
            <RadioItem value="annual" label="Annual ($99/yr — save 30%)" />
          </RadioGroup>
          <RadioGroup value={delivery} onChange={setDelivery} label="Delivery speed" orientation="horizontal">
            <RadioItem value="standard" label="Standard" />
            <RadioItem value="express" label="Express" />
            <RadioItem value="overnight" label="Overnight" />
          </RadioGroup>
        </div>
      )
    }
    return <Form />
  },
}
