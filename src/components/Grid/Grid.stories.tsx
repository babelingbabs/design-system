import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Grid, GridItem, GridOverlay, Stack } from './Grid'
import { Button } from '../Button/Button'
import { Mono, Caption } from '../Typography/Typography'

/**
 * # Grid
 * Layout primitives and the architectural grid overlay.
 *
 * The `GridOverlay` can be toggled on any surface to reveal the underlying
 * column grid and dot grid — useful during design review and development.
 *
 * The `Stack` component handles flex layouts with typed gap/alignment props.
 */
const meta: Meta = {
  title: 'Components/Grid',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}
export default meta

// ─── Column Cell for demos ────────────────────────────

function Cell({ span, children }: { span?: number; children?: React.ReactNode }) {
  return (
    <div
      className="h-12 rounded-[var(--radius-sm)] flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-accent-100)', border: '1px solid var(--color-accent-200)' }}
    >
      <Mono size="xs" accent>{children ?? `${span} col`}</Mono>
    </div>
  )
}

// ─── Stories ─────────────────────────────────────────

export const LayoutGrid: StoryObj = {
  name: 'Layout Grid (12-col)',
  render: () => (
    <div className="p-6 space-y-4" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Caption className="block mb-4">12-column grid, 16px gap</Caption>
      <Grid cols={12} gap="md">
        {Array.from({ length: 12 }).map((_, i) => (
          <GridItem key={i} span={1}>
            <Cell>{i + 1}</Cell>
          </GridItem>
        ))}
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={6}><Cell span={6} /></GridItem>
        <GridItem span={6}><Cell span={6} /></GridItem>
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={4}><Cell span={4} /></GridItem>
        <GridItem span={4}><Cell span={4} /></GridItem>
        <GridItem span={4}><Cell span={4} /></GridItem>
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={3}><Cell span={3} /></GridItem>
        <GridItem span={9}><Cell span={9} /></GridItem>
      </Grid>
      <Grid cols={12} gap="md">
        <GridItem span={8}><Cell span={8} /></GridItem>
        <GridItem span={2}><Cell span={2} /></GridItem>
        <GridItem span={2}><Cell span={2} /></GridItem>
      </Grid>
    </div>
  ),
}

export const OverlayToggle: StoryObj = {
  name: 'Grid Overlay (Toggle)',
  render: () => {
    const [visible, setVisible] = useState(false)
    return (
      <div className="p-6 relative min-h-64" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="flex items-center justify-between mb-6">
          <Mono size="sm">Architectural Grid Overlay</Mono>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setVisible((v) => !v)}
          >
            {visible ? 'Hide grid' : 'Show grid'}
          </Button>
        </div>

        <Grid cols={12} gap="md">
          {[8, 4, 6, 6, 3, 3, 6].map((span, i) => (
            <GridItem key={i} span={span as 1|2|3|4|5|6|7|8|9|10|11|12}>
              <div
                className="h-24 rounded-[var(--radius-md)] flex items-end p-3"
                style={{
                  backgroundColor: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <Mono size="xs">{span} col</Mono>
              </div>
            </GridItem>
          ))}
        </Grid>

        <GridOverlay visible={visible} columns={12} unit={8} />
      </div>
    )
  },
}

export const StackLayouts: StoryObj = {
  name: 'Stack Layouts',
  render: () => (
    <div className="p-6 space-y-8" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div>
        <Caption className="block mb-3">Vertical stack (default)</Caption>
        <Stack gap="sm" className="w-48">
          {['Item A', 'Item B', 'Item C'].map((label) => (
            <div
              key={label}
              className="h-8 rounded-[var(--radius-sm)] flex items-center px-3"
              style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-subtle)' }}
            >
              <Mono size="xs">{label}</Mono>
            </div>
          ))}
        </Stack>
      </div>

      <div>
        <Caption className="block mb-3">Horizontal stack</Caption>
        <Stack direction="row" gap="sm" align="center">
          {['Item A', 'Item B', 'Item C'].map((label) => (
            <div
              key={label}
              className="h-8 rounded-[var(--radius-sm)] flex items-center px-3"
              style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-subtle)' }}
            >
              <Mono size="xs">{label}</Mono>
            </div>
          ))}
        </Stack>
      </div>

      <div>
        <Caption className="block mb-3">Row with space-between</Caption>
        <Stack direction="row" gap="md" justify="between" align="center">
          <Mono size="sm">Left content</Mono>
          <Button size="sm" variant="secondary">Action</Button>
        </Stack>
      </div>
    </div>
  ),
}
