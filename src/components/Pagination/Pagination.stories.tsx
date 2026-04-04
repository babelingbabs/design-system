import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

/**
 * # Pagination
 * Page navigation with smart ellipsis truncation.
 *
 * - `siblingCount` controls how many pages appear around the current page
 * - `showFirstLast` toggles the First/Last jump buttons
 * - Current page is highlighted with accent background
 * - Prev/Next disabled at boundaries
 */
const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  name: 'Default',
  render: () => {
    const [page, setPage] = useState(5)
    return (
      <div className="flex flex-col gap-3" style={{ fontFamily: 'var(--font-sans)' }}>
        <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
        <p className="text-sm text-[var(--color-fg-secondary)]">Current page: {page}</p>
      </div>
    )
  },
}

export const FewPages: Story = {
  name: 'Few pages (no ellipsis)',
  render: () => {
    const [page, setPage] = useState(1)
    return <Pagination currentPage={page} totalPages={7} onPageChange={setPage} />
  },
}

export const AtStart: Story = {
  name: 'At start',
  render: () => {
    const [page, setPage] = useState(1)
    return <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
  },
}

export const AtEnd: Story = {
  name: 'At end',
  render: () => {
    const [page, setPage] = useState(20)
    return <Pagination currentPage={page} totalPages={20} onPageChange={setPage} />
  },
}

export const WideSiblings: Story = {
  name: 'siblingCount=2',
  render: () => {
    const [page, setPage] = useState(10)
    return (
      <Pagination
        currentPage={page}
        totalPages={20}
        onPageChange={setPage}
        siblingCount={2}
      />
    )
  },
}

export const NoFirstLast: Story = {
  name: 'No first/last buttons',
  render: () => {
    const [page, setPage] = useState(5)
    return (
      <Pagination
        currentPage={page}
        totalPages={20}
        onPageChange={setPage}
        showFirstLast={false}
      />
    )
  },
}

export const SinglePage: Story = {
  name: 'Single page',
  render: () => <Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />,
}
