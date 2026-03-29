import type { Meta, StoryObj } from '@storybook/react'
import { H1, H2, H3, H4, H5, H6, Text, Caption, Mono, Label, Lead } from './Typography'

/**
 * # Typography
 * Two typefaces. One system.
 *
 * **Inter** — the workhorse. Clean, neutral, humanist. Does the heavy lifting for UI text.
 *
 * **JetBrains Mono** — the accent. Technical labels, metadata, code. Brings the blueprint feel.
 */
const meta: Meta = {
  title: 'Foundation/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}
export default meta

export const HeadingScale: StoryObj = {
  name: 'Heading Scale',
  render: () => (
    <div className="space-y-6 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <H1>H1 — Heading One</H1>
      <H2>H2 — Heading Two</H2>
      <H3>H3 — Heading Three</H3>
      <H4>H4 — Heading Four</H4>
      <H5>H5 — Heading Five</H5>
      <H6>H6 — Heading Six</H6>
    </div>
  ),
}

export const BodyText: StoryObj = {
  name: 'Body Text',
  render: () => (
    <div className="space-y-4 p-6 max-w-2xl" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Text size="lg">
        Large body — Precision and restraint define this system. Every decision is deliberate,
        every token considered.
      </Text>
      <Text>
        Base body — The spacing scale runs on a 4px grid. The type scale follows optical
        proportions. Nothing arbitrary.
      </Text>
      <Text size="sm">
        Small body — Details matter. A 1px border, a 2px shadow. These are the things
        that separate good from great.
      </Text>
      <Text size="xs" secondary>
        Extra small body, secondary — Version 0.1.0
      </Text>
    </div>
  ),
}

export const TextColors: StoryObj = {
  name: 'Text Colors',
  render: () => (
    <div className="space-y-2 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Text>Primary — main content text</Text>
      <Text secondary>Secondary — supporting text, captions</Text>
      <Text muted>Muted — placeholders, disabled labels</Text>
    </div>
  ),
}

export const AccentElements: StoryObj = {
  name: 'Accent Elements',
  render: () => (
    <div className="space-y-4 p-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Lead>Lead text — a larger, lighter paragraph style used for introductions and summaries.</Lead>
      <div className="space-y-2">
        <Label>Field label</Label>
        <Label required>Required field</Label>
      </div>
      <div className="space-y-1">
        <Caption>Caption text — small, muted</Caption>
        <Caption muted={false}>Caption text — secondary color</Caption>
      </div>
      <div className="space-y-1">
        <Mono>const value = 42</Mono>
        <Mono accent>accent.500 / #4A7BA7</Mono>
        <Mono size="xs">v0.1.0 · build 2026</Mono>
      </div>
    </div>
  ),
}

export const TypographyComposition: StoryObj = {
  name: 'In Context',
  render: () => (
    <div className="p-8 max-w-xl space-y-3" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <Mono accent size="xs">design system / components</Mono>
      <H2>Clean, precise, architectural.</H2>
      <Lead>
        Built for product designers who think in systems. Every detail is intentional.
      </Lead>
      <Text secondary>
        Inspired by Swiss design principles and technical blueprints. The grid is your friend.
        Whitespace is not wasted space.
      </Text>
      <Caption>v0.1.0 · Kingsley Design System · 2026</Caption>
    </div>
  ),
}
