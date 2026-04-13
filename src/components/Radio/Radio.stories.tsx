import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioGroup, Radio } from './index'

const meta: Meta<typeof RadioGroup> = {
  title: 'Forms/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## When to use
- Selecting exactly one option from a short list (2–5 options)
- Settings where seeing all options at once aids decision-making
- Mutually exclusive choices that cannot be combined

## When NOT to use
- Multiple selections (use Checkbox)
- More than 5 options (use Select — it's more compact)
- Immediate-effect toggles (use Switch)

## Best practices
- Always use Radio inside a RadioGroup for proper name/value handling
- Provide a default selection when there's a clear recommended option
- Lay out options vertically for readability; use horizontal only for 2–3 very short labels
- Never nest RadioGroups

## Accessibility
- RadioGroup renders a \`fieldset\` with \`legend\` for screen readers
- Arrow keys navigate between radios within a group — do not override this behavior
- Ensure the group label is visible, not just a \`title\` attribute
        `,
      },
    },
  },
  argTypes: {
    direction: { control: 'select', options: ['vertical', 'horizontal'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => (
    <RadioGroup label="Subscription plan" defaultValue="pro" {...args}>
      <Radio value="free" label="Free" />
      <Radio value="pro" label="Pro" />
      <Radio value="enterprise" label="Enterprise" />
    </RadioGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <RadioGroup label="Preferred contact method" direction="vertical" defaultValue="email">
      <Radio value="email" label="Email" />
      <Radio value="phone" label="Phone" />
      <Radio value="slack" label="Slack" />
    </RadioGroup>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup label="Theme" direction="horizontal" defaultValue="system">
      <Radio value="light" label="Light" />
      <Radio value="dark" label="Dark" />
      <Radio value="system" label="System" />
    </RadioGroup>
  ),
}

export const WithHelperText: Story = {
  render: () => (
    <RadioGroup
      label="Export format"
      helperText="Choose the format for your design handoff."
      defaultValue="svg"
    >
      <Radio value="svg" label="SVG" />
      <Radio value="png" label="PNG" />
      <Radio value="pdf" label="PDF" />
    </RadioGroup>
  ),
}

export const WithError: Story = {
  render: () => (
    <RadioGroup
      label="Billing cycle"
      error="Please select a billing cycle to continue."
    >
      <Radio value="monthly" label="Monthly" />
      <Radio value="annual" label="Annual (save 20%)" />
    </RadioGroup>
  ),
}

export const DisabledGroup: Story = {
  render: () => (
    <RadioGroup label="Region" disabled defaultValue="us-east">
      <Radio value="us-east" label="US East" />
      <Radio value="eu-west" label="EU West" />
      <Radio value="ap-south" label="AP South" />
    </RadioGroup>
  ),
}

export const IndividualDisabled: Story = {
  render: () => (
    <RadioGroup label="Runtime" defaultValue="node">
      <Radio value="node" label="Node.js" />
      <Radio value="bun" label="Bun" />
      <Radio value="deno" label="Deno (coming soon)" disabled />
    </RadioGroup>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('design')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <RadioGroup
          label="Role"
          value={value}
          onChange={setValue}
          direction="horizontal"
        >
          <Radio value="design" label="Design" />
          <Radio value="engineering" label="Engineering" />
          <Radio value="product" label="Product" />
        </RadioGroup>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-fg-muted)' }}>
          Selected: <strong>{value}</strong>
        </p>
      </div>
    )
  },
}
