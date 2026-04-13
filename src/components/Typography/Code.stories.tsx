import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'
import { Text } from './Text'

const meta: Meta<typeof Code> = {
  title: 'Typography/Code',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    inline: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Code>

export const Inline: Story = {
  args: {
    inline: true,
    children: 'const greeting = "hello"',
  },
}

export const InlineInContext: Story = {
  render: () => (
    <Text as="p" size="base">
      Use the <Code>forwardRef</Code> helper to expose a ref on your component,
      and always set <Code>displayName</Code> for clear DevTools labels.
    </Text>
  ),
}

export const Block: Story = {
  args: {
    inline: false,
    children: `import { forwardRef } from 'react'
import type { ButtonProps } from './Button.types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, ...rest }, ref) => {
    return (
      <button ref={ref} data-variant={variant} {...rest}>
        {children}
      </button>
    )
  }
)`,
  },
}

export const BlockMultiline: Story = {
  render: () => (
    <Code inline={false}>{`// Token-driven design system
:root {
  --color-accent-default: #6366f1;
  --typography-font-size-base: 1rem;
  --spacing-4: 16px;
}`}</Code>
  ),
}
