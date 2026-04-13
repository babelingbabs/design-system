import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from './index'

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Stack>

const Box = ({ label }: { label: string }) => (
  <div
    style={{
      padding: 'var(--spacing-3) var(--spacing-4)',
      background: 'var(--color-primary-subtle)',
      border: '1px solid var(--color-border-default)',
      borderRadius: 'var(--radius-md)',
      fontSize: 'var(--typography-font-size-sm)',
      color: 'var(--color-fg-muted)',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </div>
)

export const Vertical: Story = {
  render: () => (
    <Stack direction="vertical" gap={4}>
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap={4}>
      <Box label="Item 1" />
      <Box label="Item 2" />
      <Box label="Item 3" />
    </Stack>
  ),
}

export const Nested: Story = {
  render: () => (
    <Stack direction="vertical" gap={6}>
      <Stack direction="horizontal" gap={4}>
        <Box label="A1" />
        <Box label="A2" />
        <Box label="A3" />
      </Stack>
      <Stack direction="horizontal" gap={4}>
        <Box label="B1" />
        <Box label="B2" />
      </Stack>
    </Stack>
  ),
}

export const Gaps: Story = {
  render: () => (
    <Stack direction="vertical" gap={6}>
      {([2, 4, 8, 12] as const).map((gap) => (
        <div key={gap}>
          <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)', marginBottom: 'var(--spacing-2)' }}>gap={gap}</p>
          <Stack direction="horizontal" gap={gap}>
            <Box label="Item 1" />
            <Box label="Item 2" />
            <Box label="Item 3" />
          </Stack>
        </div>
      ))}
    </Stack>
  ),
}

export const AlignOptions: Story = {
  render: () => (
    <Stack direction="vertical" gap={6}>
      {(['start', 'center', 'end'] as const).map((align) => (
        <div key={align}>
          <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)', marginBottom: 'var(--spacing-2)' }}>align="{align}"</p>
          <Stack direction="horizontal" gap={4} align={align} style={{ background: 'var(--color-bg-subtle)', padding: 'var(--spacing-3)', borderRadius: 'var(--radius-md)' }}>
            <Box label="Short" />
            <div style={{ padding: 'var(--spacing-4) var(--spacing-4)', background: 'var(--color-accent-subtle)', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-md)', fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Tall<br />Item</div>
            <Box label="Short" />
          </Stack>
        </div>
      ))}
    </Stack>
  ),
}

export const Wrapping: Story = {
  render: () => (
    <Stack direction="horizontal" gap={3} wrap style={{ maxWidth: 320 }}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i} label={`Tag ${i + 1}`} />
      ))}
    </Stack>
  ),
}
