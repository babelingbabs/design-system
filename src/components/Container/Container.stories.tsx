import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './index'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof Container>

const Content = ({ label }: { label: string }) => (
  <div
    style={{
      background: 'var(--color-primary-subtle)',
      border: '1px dashed var(--color-border-default)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--spacing-6)',
      fontSize: 'var(--typography-font-size-sm)',
      color: 'var(--color-fg-muted)',
      textAlign: 'center',
    }}
  >
    {label}
  </div>
)

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', padding: 'var(--spacing-4) 0', background: 'var(--color-bg-subtle)' }}>
      {(['sm', 'md', 'lg', 'xl', 'full'] as const).map((size) => (
        <Container key={size} size={size}>
          <Content label={`size="${size}" — max-width: ${{ sm: '640px', md: '768px', lg: '1024px', xl: '1280px', full: '100%' }[size]}`} />
        </Container>
      ))}
    </div>
  ),
}

export const WithoutPadding: Story = {
  render: () => (
    <div style={{ background: 'var(--color-bg-subtle)' }}>
      <Container size="md" padding={false}>
        <Content label='padding={false} — no horizontal padding' />
      </Container>
    </div>
  ),
}

export const AsMain: Story = {
  render: () => (
    <Container as="main" size="lg">
      <Content label='as="main" — semantic main element' />
    </Container>
  ),
}

export const Nested: Story = {
  render: () => (
    <Container size="xl">
      <Content label="Outer: xl" />
      <div style={{ marginTop: 'var(--spacing-4)' }}>
        <Container size="md">
          <Content label="Inner: md" />
        </Container>
      </div>
    </Container>
  ),
}
