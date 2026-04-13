import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarGroup } from './index'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## When to use
- Representing a user or entity with an image, initials, or icon
- Profile headers, comment threads, mention lists, team rosters
- AvatarGroup for showing multiple users in a compact stack

## When NOT to use
- Generic icons or illustrations (use an icon component)
- Logos or brand marks (use an image directly)

## Best practices
- Provide both \`src\` and \`name\` — name is used for alt text and initials fallback
- Fallback chain: image → initials (from \`name\`) → \`fallbackIcon\` → generic icon
- Use consistent sizes within the same context; \`md\` is the default
- In AvatarGroup, set \`max\` to limit visible avatars and show a "+N" overflow

## Accessibility
- Provide meaningful \`alt\` text for user avatars (e.g., "Jane Doe's avatar")
- When used decoratively alongside the user's name, \`alt=""\` is acceptable
- AvatarGroup overflow count is rendered as visible text for screen readers
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  render: () => (
    <Avatar
      src="https://i.pravatar.cc/150?img=32"
      alt="Jane Doe"
      name="Jane Doe"
      size="md"
    />
  ),
}

export const WithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
      <Avatar name="Kingsley Wong" />
      <Avatar name="Alice Johnson" />
      <Avatar name="Bob Smith" />
      <Avatar name="Carol White" />
      <Avatar name="David Lee" />
    </div>
  ),
}

export const WithIconFallback: Story = {
  render: () => <Avatar size="md" />,
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} name="Kingsley Wong" size={size} />
      ))}
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
      <Avatar name="Kingsley Wong" status="online" />
      <Avatar name="Alice Johnson" status="away" />
      <Avatar name="Bob Smith" status="busy" />
      <Avatar name="Carol White" status="offline" />
    </div>
  ),
}

export const SquareShape: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} name="Kingsley Wong" size={size} shape="square" />
      ))}
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar name="Kingsley Wong" />
      <Avatar name="Alice Johnson" />
      <Avatar name="Bob Smith" />
    </AvatarGroup>
  ),
}

export const GroupWithOverflow: Story = {
  render: () => (
    <AvatarGroup max={3} size="md">
      <Avatar name="Kingsley Wong" />
      <Avatar name="Alice Johnson" />
      <Avatar name="Bob Smith" />
      <Avatar name="Carol White" />
      <Avatar name="David Lee" />
      <Avatar name="Emma Davis" />
    </AvatarGroup>
  ),
}

export const GroupSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <AvatarGroup key={size} max={4} size={size}>
          <Avatar name="Kingsley Wong" />
          <Avatar name="Alice Johnson" />
          <Avatar name="Bob Smith" />
          <Avatar name="Carol White" />
          <Avatar name="David Lee" />
        </AvatarGroup>
      ))}
    </div>
  ),
}
