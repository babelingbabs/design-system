import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from './Breadcrumb'

/**
 * # Breadcrumb
 * Navigation trail showing the current page location within a hierarchy.
 *
 * - Separators are inserted automatically between items
 * - `active` item is rendered as plain text with `aria-current="page"`
 * - `separator` prop accepts any React node (string, icon, etc.)
 */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  name: 'Default',
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/components">Components</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const DeepNesting: Story = {
  name: 'Deep nesting',
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/docs">Docs</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components">Components</BreadcrumbItem>
      <BreadcrumbItem href="/docs/components/navigation">Navigation</BreadcrumbItem>
      <BreadcrumbItem active>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const CustomSeparator: Story = {
  name: 'Custom separator — chevron',
  render: () => (
    <Breadcrumb
      separator={
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      }
    >
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
      <BreadcrumbItem active>Profile</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const CustomSeparatorDot: Story = {
  name: 'Custom separator — dot',
  render: () => (
    <Breadcrumb separator="·">
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
      <BreadcrumbItem active>Post title</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const ManualSeparator: Story = {
  name: 'Manual BreadcrumbSeparator',
  render: () => (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-sans)' }}>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem href="/products">Products</BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem active>Details</BreadcrumbItem>
      </ol>
    </nav>
  ),
}
