import type { Meta, StoryObj } from '@storybook/react'
import { Home, Slash } from 'lucide-react'
import { Breadcrumbs, BreadcrumbItem } from './index'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## When to use
- Hierarchical navigation within a multi-level site or application
- Helping users understand their current location and navigate back
- Pages that are 3+ levels deep in a navigation tree

## When NOT to use
- Single-level or two-level applications where location is always obvious
- Wizard steps or form progress (use a stepper component)
- Mobile navigation where space is constrained (consider a back button instead)

## Best practices
- Always make all items except the last one a link (\`href\`)
- Mark the current page with \`current={true}\` — do not add a link to the current item
- Use \`maxItems\` to collapse long breadcrumbs with a "…" ellipsis
- Keep breadcrumb labels short and match the page title

## Accessibility
- Rendered inside a \`<nav aria-label="Breadcrumb">\` landmark
- The current page item has \`aria-current="page"\`
- Collapsed items under \`maxItems\` remain accessible to screen readers
        `,
      },
    },
  },
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
