import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import type { SelectOptionDef } from './Select'
import { Folder, Star, Archive, Trash, Heart, BookmarkSimple } from '@phosphor-icons/react'

/**
 * # Select / Dropdown
 * Custom styled select replacement with keyboard navigation,
 * multi-select, search, and full accessibility.
 */
const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta
type Story = StoryObj<typeof Select>

const basicOptions: SelectOptionDef[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>('')
    return (
      <Select
        value={value as string}
        onChange={v => setValue(v)}
        options={basicOptions}
        placeholder="Pick a fruit…"
        label="Fruit"
      />
    )
  },
}

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => {
    const [sm, setSm] = useState<string>('')
    const [md, setMd] = useState<string>('')
    const [lg, setLg] = useState<string>('')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {([['sm', sm, setSm], ['md', md, setMd], ['lg', lg, setLg]] as const).map(([size, val, setter]) => (
          <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-fg-tertiary)', width: '20px' }}>{size}</span>
            <Select
              size={size}
              value={val}
              onChange={v => setter(v as string)}
              options={basicOptions}
              placeholder={`Size ${size}…`}
            />
          </div>
        ))}
      </div>
    )
  },
}

export const WithIcons: Story = {
  name: 'Options with Icons',
  render: () => {
    const [value, setValue] = useState<string>('')
    const iconOptions: SelectOptionDef[] = [
      { value: 'projects', label: 'Projects', icon: <Folder size={14} aria-hidden /> },
      { value: 'starred', label: 'Starred', icon: <Star size={14} aria-hidden /> },
      { value: 'archived', label: 'Archived', icon: <Archive size={14} aria-hidden /> },
      { value: 'saved', label: 'Saved', icon: <BookmarkSimple size={14} aria-hidden /> },
      { value: 'trash', label: 'Trash', icon: <Trash size={14} aria-hidden />, disabled: true },
    ]
    return (
      <Select
        value={value}
        onChange={v => setValue(v as string)}
        options={iconOptions}
        placeholder="Choose view…"
        label="View"
      />
    )
  },
}

export const WithDescriptions: Story = {
  name: 'Options with Descriptions',
  render: () => {
    const [value, setValue] = useState<string>('')
    const descOptions: SelectOptionDef[] = [
      { value: 'free', label: 'Free', description: 'Up to 3 projects, 1GB storage' },
      { value: 'pro', label: 'Pro', description: '$12/mo · Unlimited projects, 50GB' },
      { value: 'team', label: 'Team', description: '$49/mo · Everything in Pro + collaboration' },
      { value: 'enterprise', label: 'Enterprise', description: 'Custom pricing · SSO, audit logs, SLA' },
    ]
    return (
      <Select
        value={value}
        onChange={v => setValue(v as string)}
        options={descOptions}
        placeholder="Choose plan…"
        label="Plan"
        size="md"
      />
    )
  },
}

export const Searchable: Story = {
  name: 'Searchable',
  render: () => {
    const [value, setValue] = useState<string>('')
    const countries: SelectOptionDef[] = [
      { value: 'us', label: 'United States' },
      { value: 'gb', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan' },
      { value: 'kr', label: 'South Korea' },
      { value: 'br', label: 'Brazil' },
      { value: 'in', label: 'India' },
      { value: 'mx', label: 'Mexico' },
      { value: 'es', label: 'Spain' },
    ]
    return (
      <Select
        value={value}
        onChange={v => setValue(v as string)}
        options={countries}
        placeholder="Select country…"
        label="Country"
        searchable
      />
    )
  },
}

export const MultiSelect: Story = {
  name: 'Multi-Select',
  render: () => {
    const [values, setValues] = useState<string[]>([])
    const tagOptions: SelectOptionDef[] = [
      { value: 'design', label: 'Design' },
      { value: 'engineering', label: 'Engineering' },
      { value: 'product', label: 'Product' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Sales' },
      { value: 'support', label: 'Support' },
    ]
    return (
      <div>
        <Select
          value={values}
          onChange={v => setValues(v as string[])}
          options={tagOptions}
          placeholder="Select teams…"
          label="Teams"
          multi
          searchable
        />
        {values.length > 0 && (
          <p style={{ marginTop: '12px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-footnote)', color: 'var(--color-fg-secondary)' }}>
            Selected: {values.join(', ')}
          </p>
        )}
      </div>
    )
  },
}

export const CompoundPattern: Story = {
  name: 'Compound Pattern (JSX Options)',
  render: () => {
    const [value, setValue] = useState<string>('')
    return (
      <Select
        value={value}
        onChange={v => setValue(v as string)}
        placeholder="Choose priority…"
        label="Priority"
      >
        <Select.Option value="urgent" label="Urgent" description="Needs immediate attention" icon={<Heart size={14} color="var(--color-error)" aria-hidden />} />
        <Select.Option value="high" label="High" description="Address within 24h" />
        <Select.Option value="medium" label="Medium" description="Address within a week" />
        <Select.Option value="low" label="Low" description="Address when possible" />
      </Select>
    )
  },
}

export const Disabled: Story = {
  name: 'Disabled State',
  render: () => (
    <Select
      value="apple"
      options={basicOptions}
      placeholder="Select…"
      label="Disabled"
      disabled
    />
  ),
}
