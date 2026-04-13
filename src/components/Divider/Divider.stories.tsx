import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './index'

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## When to use
- Visually separating distinct sections of content within a layout
- Breaking up long forms or settings panels into logical groups
- Adding a labeled section break within a list or content area

## When NOT to use
- Purely decorative spacing — use padding or margin instead
- Separating items that could be better grouped with a Stack gap

## Best practices
- Use \`orientation="horizontal"\` (default) between stacked sections
- Use \`orientation="vertical"\` for separating inline items (e.g., toolbar actions)
- Use the \`label\` prop to add section headers within a divider line
- Add \`decorative={true}\` when the divider is purely visual

## Accessibility
- Set \`decorative={true}\` for purely visual dividers to hide from the accessibility tree
- Labeled dividers (\`label\` prop) are announced as text, providing navigation context
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  render: () => (
    <div>
      <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Above the divider</p>
      <Divider />
      <p style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Below the divider</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
      <span style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Left</span>
      <Divider orientation="vertical" spacing="md" />
      <span style={{ fontSize: 'var(--typography-font-size-sm)', color: 'var(--color-fg-muted)' }}>Right</span>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Divider label="or" />
      <Divider label="Continue with" />
      <Divider label="Section title" />
    </div>
  ),
}

export const Spacing: Story = {
  render: () => (
    <div>
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>spacing="sm"</p>
      <Divider spacing="sm" />
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>spacing="md"</p>
      <Divider spacing="md" />
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>spacing="lg"</p>
      <Divider spacing="lg" />
      <p style={{ fontSize: 'var(--typography-font-size-xs)', color: 'var(--color-fg-muted)' }}>End</p>
    </div>
  ),
}
