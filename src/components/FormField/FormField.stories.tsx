import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './index'
import { Input } from '../Input'
import { Select } from '../Select'
import { Textarea } from '../Textarea'

const meta: Meta<typeof FormField> = {
  title: 'Forms/FormField',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof FormField>

export const WithInput: Story = {
  render: (args) => (
    <FormField label="Email address" htmlFor="email-field" helperText="We'll never share your email." {...args}>
      <Input id="email-field" placeholder="you@example.com" type="email" />
    </FormField>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormField label="Username" htmlFor="username-field" error="This username is already taken.">
      <Input id="username-field" defaultValue="kingsley" />
    </FormField>
  ),
}

export const Required: Story = {
  render: () => (
    <FormField label="Full name" htmlFor="name-field" required helperText="As it appears on your ID.">
      <Input id="name-field" placeholder="Kingsley Wong" />
    </FormField>
  ),
}

export const Disabled: Story = {
  render: () => (
    <FormField label="Account email" htmlFor="account-email" disabled helperText="Contact support to change your email.">
      <Input id="account-email" defaultValue="kingsley@studio.com" disabled />
    </FormField>
  ),
}

export const WithSelect: Story = {
  render: () => (
    <FormField label="Country" htmlFor="country-field" required helperText="Used for billing and tax purposes.">
      <Select
        id="country-field"
        options={[
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' },
          { value: 'au', label: 'Australia' },
        ]}
        placeholder="Select a country…"
      />
    </FormField>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <FormField label="Project description" htmlFor="desc-field" helperText="Max 500 characters.">
      <Textarea
        id="desc-field"
        placeholder="Describe your project…"
        showCount
        maxLength={500}
        rows={4}
      />
    </FormField>
  ),
}

export const CompositionPattern: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <FormField label="Full name" htmlFor="full-name" required>
        <Input id="full-name" placeholder="Kingsley Wong" />
      </FormField>

      <FormField label="Email" htmlFor="email" required error="Please enter a valid email.">
        <Input id="email" type="email" defaultValue="not-an-email" />
      </FormField>

      <FormField label="Framework" htmlFor="framework">
        <Select
          id="framework"
          options={[
            { value: 'next', label: 'Next.js' },
            { value: 'remix', label: 'Remix' },
            { value: 'astro', label: 'Astro' },
          ]}
          placeholder="Choose a framework…"
        />
      </FormField>

      <FormField label="Bio" htmlFor="bio" helperText="Tell us about yourself.">
        <Textarea id="bio" placeholder="I'm a product designer…" rows={3} />
      </FormField>
    </div>
  ),
}
