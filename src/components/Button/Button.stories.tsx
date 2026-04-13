import type { Meta, StoryObj } from '@storybook/react'
import {
  ArrowRight as LucideArrowRight,
  Download as LucideDownload,
  Plus as LucidePlus,
} from 'lucide-react'
import { Button } from './index'

// Simple SVG icons for stories
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

const Download = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v8M5 7l3 3 3-3M2 13h12" />
  </svg>
)

const Plus = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M8 3v10M3 8h10" />
  </svg>
)

const meta: Meta<typeof Button> = {
  title: 'Foundation/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Get started',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const WithLeadingIcon: Story = {
  args: {
    children: 'Download',
    leadingIcon: <Download />,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    children: 'Continue',
    trailingIcon: <ArrowRight />,
  },
}

export const LoadingState: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" loading>Primary</Button>
      <Button variant="secondary" loading>Secondary</Button>
      <Button variant="ghost" loading>Ghost</Button>
      <Button variant="danger" loading>Danger</Button>
    </div>
  ),
}

export const DisabledState: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="ghost" disabled>Ghost</Button>
      <Button variant="danger" disabled>Danger</Button>
    </div>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '320px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button variant="primary" fullWidth leadingIcon={<Plus />}>Create new project</Button>
      <Button variant="secondary" fullWidth>Import existing</Button>
    </div>
  ),
}

export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary" size="sm" aria-label="Add item" style={{ padding: '0 8px', width: '32px' }}>
        <Plus />
      </Button>
      <Button variant="secondary" size="md" aria-label="Add item" style={{ padding: '0 10px', width: '40px' }}>
        <Plus />
      </Button>
      <Button variant="ghost" size="lg" aria-label="Add item" style={{ padding: '0 12px', width: '48px' }}>
        <Plus />
      </Button>
    </div>
  ),
}

export const DangerVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="danger" size="sm">Delete</Button>
      <Button variant="danger" size="md">Delete account</Button>
      <Button variant="danger" size="lg" loading>Deleting...</Button>
    </div>
  ),
}

export const WithLucideIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" trailingIcon={<LucideArrowRight size={16} />}>
        Get started
      </Button>
      <Button variant="secondary" leadingIcon={<LucideDownload size={16} />}>
        Download
      </Button>
      <Button variant="ghost" leadingIcon={<LucidePlus size={16} />}>
        New item
      </Button>
    </div>
  ),
}
