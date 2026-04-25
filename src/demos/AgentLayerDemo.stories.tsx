import type { Meta, StoryObj } from '@storybook/react'
import { AgentLayerDemo } from './AgentLayerDemo'

const meta: Meta<typeof AgentLayerDemo> = {
  title: 'Demos/Agent Layer — Design System as AI Control Surface',
  component: AgentLayerDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Design System as Agent Control Layer

This demo shows what happens when an AI agent generates UI **without** design token constraints
vs. **with** token grounding.

The same notification card — built both ways. 8 violations surface in the unconstrained version:
hard guardrails (spacing, radius, color), aesthetic tokens (motion easing, duration),
and structural tokens (grid alignment, typography scale).

**The insight:** Design tokens aren't just a consistency tool. They're a constraint surface
for AI-generated interfaces — collapsing the agent's solution space to what the system allows.

See \`AGENT-LAYER.md\` in the repo root for the full brief.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AgentLayerDemo>

export const Default: Story = {}
