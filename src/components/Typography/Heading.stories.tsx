import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## When to use
- Page titles, section headings, and content hierarchy
- Any place where heading semantics matter for screen reader navigation

## When NOT to use
- Body text or captions (use Text)
- Decorative large type with no semantic meaning (use Text with a size override)

## Best practices
- Maintain a logical heading hierarchy — never skip levels (h1 → h3)
- Use the \`size\` prop to adjust visual scale independently of semantic level
- Use \`as\` only when the rendered element must differ from the semantic level for layout reasons
- Default weights: bold for h1–h2, semibold for h3–h4

## Accessibility
- There should be exactly one h1 per page
- Screen readers use heading levels to navigate — maintain a meaningful document outline
- Do not use headings purely for styling; use Text with a size override instead
        `,
      },
    },
  },
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'],
    },
    weight: { control: 'select', options: ['medium', 'semibold', 'bold'] },
    color: { control: 'select', options: ['default', 'muted', 'subtle', 'accent'] },
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    level: 2,
    children: 'Design system foundations',
  },
}

export const AllLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Heading level={1}>Level 1 — Display / Hero (4xl)</Heading>
      <Heading level={2}>Level 2 — Page title (3xl)</Heading>
      <Heading level={3}>Level 3 — Section header (2xl)</Heading>
      <Heading level={4}>Level 4 — Subsection (xl)</Heading>
      <Heading level={5}>Level 5 — Card title (lg)</Heading>
      <Heading level={6}>Level 6 — Label heading (base)</Heading>
    </div>
  ),
}

export const VisualSizeOverride: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={1} size="lg">h1 rendered at lg — semantic h1, compact visual</Heading>
      <Heading level={3} size="4xl">h3 rendered at 4xl — semantic h3, hero visual</Heading>
    </div>
  ),
}

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={3} weight="medium">Medium weight heading</Heading>
      <Heading level={3} weight="semibold">Semibold weight heading</Heading>
      <Heading level={3} weight="bold">Bold weight heading</Heading>
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={3} color="default">Default — primary foreground</Heading>
      <Heading level={3} color="muted">Muted — secondary foreground</Heading>
      <Heading level={3} color="subtle">Subtle — tertiary foreground</Heading>
      <Heading level={3} color="accent">Accent — brand indigo</Heading>
    </div>
  ),
}

export const ElementOverride: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Heading level={1} as="h3">
        Visually level 1 (4xl), rendered as h3 for correct page outline
      </Heading>
    </div>
  ),
}
