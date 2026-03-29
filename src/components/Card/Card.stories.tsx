import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardFooter } from './Card'
import { Button } from '../Button/Button'
import { H4, H5, Text, Caption, Mono } from '../Typography/Typography'

/**
 * # Card
 * A clean container. Four variants, composable sections.
 *
 * The `interactive` prop enables the hover lift animation via Framer Motion —
 * a 2px vertical lift with a deeper shadow. Subtle but physical.
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated', 'ghost'],
    },
    interactive: { control: 'boolean' },
    noPadding: { control: 'boolean' },
  },
}
export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args: Story['args']) => (
    <Card {...args} className="max-w-sm">
      <H5>Card Title</H5>
      <Text secondary className="mt-1">
        A clean container for your content. Supports header, body, and footer sections.
      </Text>
    </Card>
  ),
}

export const Variants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {(['default', 'outlined', 'elevated', 'ghost'] as const).map((variant) => (
        <Card key={variant} variant={variant}>
          <div className="flex items-center justify-between mb-2">
            <H5>{variant}</H5>
            <Mono size="xs" accent>{`variant="${variant}"`}</Mono>
          </div>
          <Text secondary size="sm">
            Card content with the {variant} visual treatment.
          </Text>
        </Card>
      ))}
    </div>
  ),
}

export const WithSections: Story = {
  name: 'With Header / Body / Footer',
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <H5>Project Status</H5>
          <Mono size="xs" accent>v2.4.1</Mono>
        </div>
      </CardHeader>
      <CardBody>
        <Text secondary size="sm">
          Design system is in active development. All tokens are finalized.
          Component library at 60% coverage.
        </Text>
        <div className="mt-4 space-y-2">
          {[
            { label: 'Tokens',     pct: 100 },
            { label: 'Components', pct: 60 },
            { label: 'Stories',    pct: 80 },
          ].map(({ label, pct }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-xs text-[var(--color-fg-tertiary)] w-24" style={{ fontFamily: 'var(--font-mono)' }}>
                {label}
              </span>
              <div className="flex-1 h-1 bg-[var(--color-bg-muted)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-accent-500)] rounded-full transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <span className="text-xs text-[var(--color-fg-tertiary)]" style={{ fontFamily: 'var(--font-mono)' }}>
                {pct}%
              </span>
            </div>
          ))}
        </div>
      </CardBody>
      <CardFooter>
        <Caption>Last updated: today</Caption>
        <Button size="sm" variant="secondary">View details</Button>
      </CardFooter>
    </Card>
  ),
}

export const Interactive: Story = {
  name: 'Interactive (Hover Lift)',
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      {['Research', 'Synthesis', 'Prototype'].map((title, i) => (
        <Card key={title} interactive onClick={() => {}}>
          <Mono size="xs" accent className="mb-2">
            {String(i + 1).padStart(2, '0')}
          </Mono>
          <H5>{title}</H5>
          <Text secondary size="sm" className="mt-1">
            Hover to see the lift effect. Click for interaction.
          </Text>
        </Card>
      ))}
    </div>
  ),
}

export const MetricCards: Story = {
  name: 'Metric Cards',
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-6" style={{ backgroundColor: 'var(--color-bg-subtle)' }}>
      {[
        { label: 'Components', value: '5', delta: '+3 this week' },
        { label: 'Tokens',     value: '48', delta: 'Finalized' },
        { label: 'Stories',    value: '24', delta: '+8 this week' },
      ].map(({ label, value, delta }) => (
        <Card key={label} variant="default">
          <Caption className="block mb-2">{label}</Caption>
          <H4>{value}</H4>
          <Mono size="xs" accent className="mt-1">{delta}</Mono>
        </Card>
      ))}
    </div>
  ),
}
