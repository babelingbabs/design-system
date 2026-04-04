import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table'
import type { SortDirection } from './Table'

/**
 * # Table
 * Compound table components for displaying structured data.
 *
 * - `striped` — alternating row backgrounds
 * - `hoverable` — row highlight on hover
 * - `bordered` — no extra column borders (clean default)
 * - `compact` — tighter padding for dense data
 * - `TableHead` supports `sortable` with directional sort indicators
 */
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}
export default meta

type Story = StoryObj<typeof Table>

const people = [
  { name: 'Alice Johnson', role: 'Engineer', dept: 'Platform', status: 'Active' },
  { name: 'Bob Smith', role: 'Designer', dept: 'Product', status: 'Active' },
  { name: 'Carol White', role: 'Manager', dept: 'Engineering', status: 'On leave' },
  { name: 'David Brown', role: 'Analyst', dept: 'Data', status: 'Active' },
  { name: 'Eve Davis', role: 'Engineer', dept: 'Frontend', status: 'Inactive' },
]

export const Default: Story = {
  name: 'Default',
  render: () => (
    <Table className="max-w-2xl">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead align="center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((p) => (
          <TableRow key={p.name}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>{p.dept}</TableCell>
            <TableCell align="center">{p.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Striped: Story = {
  name: 'Striped rows',
  render: () => (
    <Table striped className="max-w-2xl">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead align="center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((p) => (
          <TableRow key={p.name}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>{p.dept}</TableCell>
            <TableCell align="center">{p.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Hoverable: Story = {
  name: 'Hoverable rows',
  render: () => (
    <Table hoverable className="max-w-2xl">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead align="center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((p) => (
          <TableRow key={p.name}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>{p.dept}</TableCell>
            <TableCell align="center">{p.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Compact: Story = {
  name: 'Compact',
  render: () => (
    <Table compact striped hoverable className="max-w-2xl">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead align="right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((p) => (
          <TableRow key={p.name}>
            <TableCell>{p.name}</TableCell>
            <TableCell>{p.role}</TableCell>
            <TableCell>{p.dept}</TableCell>
            <TableCell align="right">{p.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const Sortable: Story = {
  name: 'Sortable columns',
  render: () => {
    const [sortCol, setSortCol] = useState<string | null>(null)
    const [sortDir, setSortDir] = useState<SortDirection>(null)

    const handleSort = (col: string) => {
      if (sortCol !== col) {
        setSortCol(col)
        setSortDir('asc')
      } else if (sortDir === 'asc') {
        setSortDir('desc')
      } else {
        setSortCol(null)
        setSortDir(null)
      }
    }

    const sorted = [...people].sort((a, b) => {
      if (!sortCol || !sortDir) return 0
      const av = a[sortCol as keyof typeof a]
      const bv = b[sortCol as keyof typeof b]
      return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av)
    })

    const dir = (col: string): SortDirection =>
      sortCol === col ? sortDir : null

    return (
      <Table hoverable className="max-w-2xl">
        <TableHeader>
          <TableRow>
            <TableHead sortable sortDirection={dir('name')} onSort={() => handleSort('name')}>
              Name
            </TableHead>
            <TableHead sortable sortDirection={dir('role')} onSort={() => handleSort('role')}>
              Role
            </TableHead>
            <TableHead sortable sortDirection={dir('dept')} onSort={() => handleSort('dept')}>
              Department
            </TableHead>
            <TableHead align="center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((p) => (
            <TableRow key={p.name}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.role}</TableCell>
              <TableCell>{p.dept}</TableCell>
              <TableCell align="center">{p.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  },
}
