import type { Meta, StoryObj } from '@storybook/react'
import { Search, Mail, Lock } from 'lucide-react'
import { Input } from './index'

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="6.5" r="4" />
    <path d="M11 11l2.5 2.5" />
  </svg>
)

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="12" height="10" rx="1.5" />
    <path d="M2 5l6 4 6-4" />
  </svg>
)

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
    <circle cx="8" cy="8" r="2" />
  </svg>
)

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="10" height="7" rx="1.5" />
    <path d="M5 7V5a3 3 0 016 0v2" />
  </svg>
)

const meta: Meta<typeof Input> = {
  title: 'Foundation/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## When to use
- Single-line text entry: names, emails, passwords, search queries
- Any free-form data that doesn't fit a constrained set of options
- Authentication forms and structured data entry

## When NOT to use
- Multi-line content (use Textarea)
- Selecting from a list of options (use Select or Radio)
- Boolean on/off settings (use Switch or Checkbox)

## Best practices
- Always include a visible label — never rely on placeholder text alone
- Use helper text to hint at expected format (e.g., "email@example.com")
- Make error messages specific and actionable ("Email is invalid", not "Error")
- Prefer \`inputSize="md"\` as the default; use \`sm\` for dense UIs, \`lg\` for prominent forms

## Accessibility
- Link label via \`htmlFor\` matching the input \`id\`
- Use \`aria-describedby\` to associate helper text and error messages
- Set \`aria-invalid="true"\` when in an error state
- Do not remove the focus ring styling
        `,
      },
    },
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    helperText: "We'll never share your email.",
  },
}

export const WithError: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    defaultValue: 'invalid-email',
    error: 'Please enter a valid email address.',
  },
}

export const WithLeadingIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search components...',
    leadingIcon: <SearchIcon />,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    leadingIcon: <LockIcon />,
    trailingIcon: <EyeIcon />,
  },
}

export const WithAddons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
      <Input
        label="Website"
        placeholder="yoursite.com"
        leadingAddon="https://"
      />
      <Input
        label="Username"
        placeholder="kingsley"
        trailingAddon="@studio.com"
      />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
      <Input inputSize="sm" label="Small" placeholder="Small input" leadingIcon={<SearchIcon />} />
      <Input inputSize="md" label="Medium" placeholder="Medium input" leadingIcon={<SearchIcon />} />
      <Input inputSize="lg" label="Large" placeholder="Large input" leadingIcon={<SearchIcon />} />
    </div>
  ),
}

export const DisabledState: Story = {
  args: {
    label: 'Account email',
    defaultValue: 'kingsley@studio.com',
    helperText: 'Contact support to change your email.',
    disabled: true,
    leadingIcon: <MailIcon />,
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '320px' }}>
      <Input label="Default" placeholder="Default state" />
      <Input label="With value" defaultValue="Some value here" />
      <Input label="With helper" placeholder="Placeholder" helperText="This is some helpful guidance text." />
      <Input label="Error state" defaultValue="bad input" error="This field is required." />
      <Input label="Disabled" defaultValue="Cannot edit this" disabled />
    </div>
  ),
}

export const WithLucideIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px' }}>
      <Input
        label="Search"
        placeholder="Search components..."
        leadingIcon={<Search size={16} />}
      />
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        leadingIcon={<Mail size={16} />}
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        leadingIcon={<Lock size={16} />}
      />
    </div>
  ),
}
