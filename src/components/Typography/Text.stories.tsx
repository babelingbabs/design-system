import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'base', 'lg', 'xl'] },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    color: { control: 'select', options: ['default', 'muted', 'subtle', 'accent', 'error'] },
    align: { control: 'select', options: ['left', 'center', 'right'] },
    as: { control: 'select', options: ['span', 'p', 'div'] },
    truncate: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text size="xs">Extra small — xs (0.75rem)</Text>
      <Text size="sm">Small — sm (0.875rem)</Text>
      <Text size="base">Base — base (1rem)</Text>
      <Text size="lg">Large — lg (1.125rem)</Text>
      <Text size="xl">Extra large — xl (1.25rem)</Text>
    </div>
  ),
}

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text weight="regular">Regular (400) — The quick brown fox</Text>
      <Text weight="medium">Medium (500) — The quick brown fox</Text>
      <Text weight="semibold">Semibold (600) — The quick brown fox</Text>
      <Text weight="bold">Bold (700) — The quick brown fox</Text>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text color="default">Default — primary foreground</Text>
      <Text color="muted">Muted — secondary foreground</Text>
      <Text color="subtle">Subtle — tertiary foreground</Text>
      <Text color="accent">Accent — indigo brand color</Text>
      <Text color="error">Error — danger/destructive</Text>
    </div>
  ),
}

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
      <Text as="p" align="left">Left aligned — default reading direction.</Text>
      <Text as="p" align="center">Center aligned — useful for labels and captions.</Text>
      <Text as="p" align="right">Right aligned — for metadata or timestamps.</Text>
    </div>
  ),
}

export const Truncate: Story = {
  render: () => (
    <div style={{ width: '240px', border: '1px dashed #ccc', padding: '8px', borderRadius: '6px' }}>
      <Text truncate>
        This very long text string will be truncated with an ellipsis when it overflows its container.
      </Text>
    </div>
  ),
}

export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Text as="span" color="muted" size="sm">Rendered as &lt;span&gt;</Text>
      <Text as="p" size="base">Rendered as &lt;p&gt; — block element with paragraph semantics.</Text>
      <Text as="div" weight="semibold">Rendered as &lt;div&gt; — block container.</Text>
    </div>
  ),
}
