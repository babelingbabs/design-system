import type { Meta, StoryObj } from '@storybook/react'
import { Home, Slash } from 'lucide-react'
import { Breadcrumbs, BreadcrumbItem } from './index'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Basic: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/components">Components</BreadcrumbItem>
      <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const ManyItems: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/navigation">Navigation</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/navigation/breadcrumbs">Breadcrumbs</BreadcrumbItem>
      <BreadcrumbItem current>Usage</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const CollapsedWithMaxItems: Story = {
  render: () => (
    <Breadcrumbs maxItems={3}>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/navigation">Navigation</BreadcrumbItem>
      <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Breadcrumbs separator={<Slash size={12} />}>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/components">Components</BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs separator="›">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/components">Components</BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs separator={<Home size={12} />}>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/components">Components</BreadcrumbItem>
        <BreadcrumbItem current>Breadcrumbs</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  ),
}
