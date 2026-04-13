import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './index'

const FONT_OPTIONS = [
  { value: 'inter', label: 'Inter' },
  { value: 'geist', label: 'Geist' },
  { value: 'jetbrains', label: 'JetBrains Mono' },
  { value: 'ibm-plex', label: 'IBM Plex Sans' },
]

const FRAMEWORK_OPTIONS = [
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt (coming soon)', disabled: true },
]

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    label: 'Font family',
    options: FONT_OPTIONS,
    defaultValue: 'inter',
    helperText: 'Applied globally across all text elements.',
  },
}

export const WithPlaceholder: Story = {
  args: {
    label: 'Framework',
    options: FRAMEWORK_OPTIONS,
    placeholder: 'Choose a framework…',
    helperText: 'Select the framework for your new project.',
  },
}

export const WithDisabledOptions: Story = {
  args: {
    label: 'Framework',
    options: FRAMEWORK_OPTIONS,
    placeholder: 'Choose a framework…',
  },
}

export const WithError: Story = {
  args: {
    label: 'Country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
    ],
    placeholder: 'Select a country…',
    error: 'Please select your country.',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Region',
    options: [{ value: 'us-east-1', label: 'US East (N. Virginia)' }],
    defaultValue: 'us-east-1',
    helperText: 'Region is locked for this project.',
    disabled: true,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
      <Select
        size="sm"
        label="Small"
        options={FONT_OPTIONS}
        defaultValue="inter"
        placeholder="Choose font…"
      />
      <Select
        size="md"
        label="Medium"
        options={FONT_OPTIONS}
        defaultValue="inter"
        placeholder="Choose font…"
      />
      <Select
        size="lg"
        label="Large"
        options={FONT_OPTIONS}
        defaultValue="inter"
        placeholder="Choose font…"
      />
    </div>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
      <Select label="Default" options={FONT_OPTIONS} defaultValue="inter" />
      <Select label="With placeholder" options={FONT_OPTIONS} placeholder="Choose…" helperText="No default selected." />
      <Select label="Error state" options={FONT_OPTIONS} placeholder="Choose…" error="This field is required." />
      <Select label="Disabled" options={FONT_OPTIONS} defaultValue="inter" disabled helperText="Cannot be changed." />
    </div>
  ),
}
