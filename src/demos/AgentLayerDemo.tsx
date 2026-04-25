/**
 * AgentLayerDemo.tsx
 *
 * Interactive before/after demo showing AI-generated UI
 * without vs. with design token constraints.
 *
 * Portfolio artifact: "Design System as Agent Control Layer"
 */

import React, { useState } from 'react'

/* ─── Types ───────────────────────────────────────────────────────── */

interface Violation {
  property: string
  aiValue: string
  tokenValue: string
  tokenName: string
  category: 'guardrail' | 'aesthetic' | 'structural'
}

/* ─── Violations data ─────────────────────────────────────────────── */

const VIOLATIONS: Violation[] = [
  {
    property: 'padding',
    aiValue: '14px 18px',
    tokenValue: '12px 16px',
    tokenName: 'spacing.3 / spacing.4',
    category: 'guardrail',
  },
  {
    property: 'border-radius',
    aiValue: '6px',
    tokenValue: '8px',
    tokenName: 'radius.md',
    category: 'guardrail',
  },
  {
    property: 'background (badge)',
    aiValue: '#dbeafe',
    tokenValue: 'var(--color-accent-subtle)',
    tokenName: 'color.semantic.accent-subtle',
    category: 'guardrail',
  },
  {
    property: 'color (badge text)',
    aiValue: '#1e40af',
    tokenValue: 'var(--color-accent-fg)',
    tokenName: 'color.semantic.accent-fg',
    category: 'guardrail',
  },
  {
    property: 'transition-timing-function',
    aiValue: 'linear',
    tokenValue: 'cubic-bezier(0.22, 1, 0.36, 1)',
    tokenName: 'motion.easing.spring-smooth',
    category: 'aesthetic',
  },
  {
    property: 'transition-duration',
    aiValue: '250ms',
    tokenValue: '200ms',
    tokenName: 'motion.duration.normal',
    category: 'aesthetic',
  },
  {
    property: 'gap (layout)',
    aiValue: '10px',
    tokenValue: '8px',
    tokenName: 'spacing.2',
    category: 'structural',
  },
  {
    property: 'font-size (label)',
    aiValue: '11px',
    tokenValue: '12px',
    tokenName: 'typography.scale.xs',
    category: 'structural',
  },
]

const CATEGORY_LABELS: Record<Violation['category'], string> = {
  guardrail: '🔒 Hard Guardrail',
  aesthetic: '🎨 Aesthetic',
  structural: '📐 Structural',
}

const CATEGORY_COLORS: Record<Violation['category'], string> = {
  guardrail: 'var(--color-status-error-subtle-fg, #dc2626)',
  aesthetic: 'var(--color-status-warning-subtle-fg, #d97706)',
  structural: 'var(--color-accent-fg, #4f46e5)',
}

/* ─── Unconstrained (AI) notification card ───────────────────────── */

function UnconstainedCard({ highlighted }: { highlighted: string | null }) {
  const [hovered, setHovered] = useState(false)

  // Deliberately off-system values — what an unconstrained agent produces
  const style: React.CSSProperties = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: highlighted === 'border-radius' ? '6px' : 6, // off-token
    padding: highlighted === 'padding' ? undefined : '14px 18px', // off-token
    paddingTop: highlighted === 'padding' ? 14 : undefined,
    paddingBottom: highlighted === 'padding' ? 14 : undefined,
    paddingLeft: highlighted === 'padding' ? 18 : undefined,
    paddingRight: highlighted === 'padding' ? 18 : undefined,
    boxShadow: hovered
      ? '0 4px 12px rgba(0,0,0,0.1)'
      : '0 1px 3px rgba(0,0,0,0.08)',
    transition: `box-shadow 250ms linear`, // off-token: wrong duration + easing
    cursor: 'pointer',
    maxWidth: 320,
    fontFamily: 'Inter, sans-serif',
    outline: highlighted === 'border-radius' ? '2px solid #ef4444' : 'none',
    outlineOffset: 2,
  }

  return (
    <div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: highlighted === 'gap (layout)' ? '10px' : 10, // off-token
          marginBottom: 10,
          outline: highlighted === 'gap (layout)' ? '2px solid #ef4444' : 'none',
          outlineOffset: 2,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #818cf8, #6366f1)',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: '#111827',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Design review ready
          </div>
          <div
            style={{
              fontSize: highlighted === 'font-size (label)' ? 11 : 11, // off-token
              color: '#6b7280',
              marginTop: 1,
              outline:
                highlighted === 'font-size (label)' ? '2px solid #ef4444' : 'none',
            }}
          >
            Apollo.io · 2 min ago
          </div>
        </div>
        {/* Badge — off-system colors */}
        <div
          style={{
            padding: '2px 8px',
            borderRadius: 4,
            background:
              highlighted === 'background (badge)' ? '#dbeafe' : '#dbeafe', // hardcoded hex
            color:
              highlighted === 'color (badge text)' ? '#1e40af' : '#1e40af', // hardcoded hex
            fontSize: 11,
            fontWeight: 500,
            whiteSpace: 'nowrap',
            outline:
              highlighted === 'background (badge)' || highlighted === 'color (badge text)'
                ? '2px solid #ef4444'
                : 'none',
            outlineOffset: 1,
          }}
        >
          New
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          fontSize: 13,
          color: '#374151',
          lineHeight: 1.5,
          marginBottom: 12,
        }}
      >
        Figma file updated with final component specs. Ready for engineering handoff.
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8 }}>
        <button
          style={{
            flex: 1,
            padding: '7px 12px', // off-token
            borderRadius: 6, // off-token
            background: '#4f46e5',
            color: '#fff',
            fontSize: 12,
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Open in Figma
        </button>
        <button
          style={{
            flex: 1,
            padding: '7px 12px', // off-token
            borderRadius: 6, // off-token
            background: '#f3f4f6',
            color: '#374151',
            fontSize: 12,
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}

/* ─── Token-constrained notification card ────────────────────────── */

function ConstrainedCard({ highlighted }: { highlighted: string | null }) {
  const [hovered, setHovered] = useState(false)

  const style: React.CSSProperties = {
    background: 'var(--color-bg-raised, #fafaf9)',
    border: '1px solid var(--color-border-default, #e3e2df)',
    borderRadius: 'var(--radius-md)', // 8px — token
    padding: 'var(--spacing-3) var(--spacing-4)', // 12px 16px — token
    boxShadow: hovered
      ? 'var(--shadow-md)'
      : 'var(--shadow-sm)',
    transition: `box-shadow var(--motion-duration-normal) var(--motion-easing-spring-smooth)`, // token
    cursor: 'pointer',
    maxWidth: 320,
    fontFamily: 'var(--typography-font-family-sans)',
    outline: highlighted === 'border-radius' ? '2px solid #16a34a' : 'none',
    outlineOffset: 2,
  }

  return (
    <div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--spacing-2)', // 8px — token
          marginBottom: 'var(--spacing-2)',
          outline: highlighted === 'gap (layout)' ? '2px solid #16a34a' : 'none',
          outlineOffset: 2,
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-primitive-indigo-400), var(--color-primitive-indigo-500))',
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 'var(--typography-scale-sm)', // 13px — token
              fontWeight: 600,
              color: 'var(--color-fg-default)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Design review ready
          </div>
          <div
            style={{
              fontSize: 'var(--typography-scale-xs)', // 12px — token
              color: 'var(--color-fg-muted)',
              marginTop: 'var(--spacing-0-5, 2px)',
              outline:
                highlighted === 'font-size (label)' ? '2px solid #16a34a' : 'none',
            }}
          >
            Apollo.io · 2 min ago
          </div>
        </div>
        {/* Badge — semantic token colors */}
        <div
          style={{
            padding: 'var(--spacing-0-5, 2px) var(--spacing-2)',
            borderRadius: 'var(--radius-sm)', // 4px — token
            background: 'var(--color-accent-subtle, #eef2ff)',
            color: 'var(--color-accent-fg, #4f46e5)',
            fontSize: 'var(--typography-scale-xs)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            outline:
              highlighted === 'background (badge)' || highlighted === 'color (badge text)'
                ? '2px solid #16a34a'
                : 'none',
            outlineOffset: 1,
          }}
        >
          New
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          fontSize: 'var(--typography-scale-sm)',
          color: 'var(--color-fg-subtle)',
          lineHeight: 'var(--typography-line-height-relaxed)',
          marginBottom: 'var(--spacing-3)',
        }}
      >
        Figma file updated with final component specs. Ready for engineering handoff.
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 'var(--spacing-2)' }}>
        <button
          style={{
            flex: 1,
            padding: 'var(--spacing-2) var(--spacing-3)', // token
            borderRadius: 'var(--radius-md)', // token
            background: 'var(--color-accent-emphasis, #4f46e5)',
            color: '#fff',
            fontSize: 'var(--typography-scale-xs)',
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
            transition: `background var(--motion-duration-fast) var(--motion-easing-ease-out)`,
          }}
        >
          Open in Figma
        </button>
        <button
          style={{
            flex: 1,
            padding: 'var(--spacing-2) var(--spacing-3)', // token
            borderRadius: 'var(--radius-md)', // token
            background: 'var(--color-bg-subtle, #f5f4f2)',
            color: 'var(--color-fg-subtle)',
            fontSize: 'var(--typography-scale-xs)',
            fontWeight: 500,
            border: '1px solid var(--color-border-default)',
            cursor: 'pointer',
            transition: `background var(--motion-duration-fast) var(--motion-easing-ease-out)`,
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}

/* ─── Violation row ───────────────────────────────────────────────── */

function ViolationRow({
  v,
  isHighlighted,
  onHover,
}: {
  v: Violation
  isHighlighted: boolean
  onHover: (prop: string | null) => void
}) {
  return (
    <div
      onMouseEnter={() => onHover(v.property)}
      onMouseLeave={() => onHover(null)}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto auto',
        alignItems: 'start',
        gap: 12,
        padding: '8px 10px',
        borderRadius: 6,
        backgroundColor: isHighlighted ? 'var(--color-status-error-subtle, #fff1f0)' : 'transparent',
        transition: 'background-color 150ms ease',
        cursor: 'default',
      }}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
          <span
            style={{
              fontSize: 9,
              fontWeight: 600,
              color: CATEGORY_COLORS[v.category],
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {CATEGORY_LABELS[v.category]}
          </span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-fg-default)', marginBottom: 1 }}>
          {v.property}
        </div>
        <div style={{ fontSize: 11, color: 'var(--color-fg-muted)', fontFamily: 'var(--typography-font-family-mono)' }}>
          → {v.tokenName}
        </div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 9, color: 'var(--color-fg-muted)', marginBottom: 2 }}>AI output</div>
        <code
          style={{
            fontSize: 11,
            color: '#dc2626',
            background: '#fff1f0',
            padding: '1px 5px',
            borderRadius: 3,
            fontFamily: 'var(--typography-font-family-mono)',
          }}
        >
          {v.aiValue}
        </code>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: 9, color: 'var(--color-fg-muted)', marginBottom: 2 }}>Token</div>
        <code
          style={{
            fontSize: 11,
            color: '#16a34a',
            background: '#f0fdf4',
            padding: '1px 5px',
            borderRadius: 3,
            fontFamily: 'var(--typography-font-family-mono)',
          }}
        >
          {v.tokenValue}
        </code>
      </div>
    </div>
  )
}

/* ─── Main Demo ───────────────────────────────────────────────────── */

export function AgentLayerDemo() {
  const [highlighted, setHighlighted] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'violations' | 'prompt'>('violations')

  const guardRailCount = VIOLATIONS.filter((v) => v.category === 'guardrail').length
  const aestheticCount = VIOLATIONS.filter((v) => v.category === 'aesthetic').length
  const structuralCount = VIOLATIONS.filter((v) => v.category === 'structural').length

  return (
    <div
      style={{
        fontFamily: 'var(--typography-font-family-sans)',
        color: 'var(--color-fg-default)',
        padding: 'var(--spacing-8)',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '3px 10px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--color-border-default)',
            fontSize: 11,
            color: 'var(--color-fg-muted)',
            marginBottom: 'var(--spacing-3)',
            fontFamily: 'var(--typography-font-family-mono)',
            letterSpacing: '0.05em',
          }}
        >
          <span>●</span> Agent Layer Demo
        </div>
        <h2
          style={{
            fontSize: 'var(--typography-scale-2xl)',
            fontWeight: 600,
            margin: '0 0 var(--spacing-2)',
            letterSpacing: '-0.01em',
          }}
        >
          Design System as Agent Control Layer
        </h2>
        <p
          style={{
            fontSize: 'var(--typography-scale-base)',
            color: 'var(--color-fg-muted)',
            margin: 0,
            maxWidth: 580,
            lineHeight: 'var(--typography-line-height-relaxed)',
          }}
        >
          The same component, generated by an AI agent — unconstrained vs. grounded
          in design tokens. Hover the violation list to highlight what's different.
        </p>
      </div>

      {/* Summary badges */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 'var(--spacing-6)' }}>
        {[
          { label: 'Hard Guardrail', count: guardRailCount, color: '#dc2626', bg: '#fff1f0' },
          { label: 'Aesthetic', count: aestheticCount, color: '#d97706', bg: '#fffbeb' },
          { label: 'Structural', count: structuralCount, color: '#4f46e5', bg: '#eef2ff' },
        ].map((badge) => (
          <div
            key={badge.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              background: badge.bg,
              fontSize: 11,
              fontWeight: 500,
              color: badge.color,
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                fontFamily: 'var(--typography-font-family-mono)',
              }}
            >
              {badge.count}
            </span>
            {badge.label} violations
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-6)',
          marginBottom: 'var(--spacing-6)',
          alignItems: 'start',
        }}
      >
        {/* Unconstrained */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 'var(--spacing-3)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#ef4444',
              }}
            />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-default)' }}>
              Unconstrained AI output
            </span>
            <span
              style={{
                fontSize: 10,
                color: 'var(--color-fg-muted)',
                padding: '1px 6px',
                background: 'var(--color-bg-subtle)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border-default)',
              }}
            >
              8 violations
            </span>
          </div>
          <UnconstainedCard highlighted={highlighted} />
        </div>

        {/* Constrained */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 'var(--spacing-3)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#16a34a',
              }}
            />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-fg-default)' }}>
              Token-constrained output
            </span>
            <span
              style={{
                fontSize: 10,
                color: '#16a34a',
                padding: '1px 6px',
                background: '#f0fdf4',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #bbf7d0',
              }}
            >
              ✓ on-system
            </span>
          </div>
          <ConstrainedCard highlighted={highlighted} />
        </div>
      </div>

      {/* Bottom panel */}
      <div
        style={{
          border: '1px solid var(--color-border-default)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }}
      >
        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            borderBottom: '1px solid var(--color-border-default)',
            background: 'var(--color-bg-subtle)',
          }}
        >
          {(['violations', 'prompt'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 16px',
                fontSize: 12,
                fontWeight: 500,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: activeTab === tab ? 'var(--color-fg-default)' : 'var(--color-fg-muted)',
                borderBottom: activeTab === tab ? '2px solid var(--color-accent-emphasis)' : '2px solid transparent',
                fontFamily: 'var(--typography-font-family-sans)',
                transition: 'color 150ms ease',
              }}
            >
              {tab === 'violations' ? `Token Violations (${VIOLATIONS.length})` : 'Prompt Grounding'}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ padding: 'var(--spacing-3)' }}>
          {activeTab === 'violations' ? (
            <div>
              <p
                style={{
                  fontSize: 11,
                  color: 'var(--color-fg-muted)',
                  margin: '0 0 var(--spacing-2)',
                  padding: '0 var(--spacing-1)',
                }}
              >
                Hover a row to highlight the corresponding element in both cards above.
              </p>
              {VIOLATIONS.map((v) => (
                <ViolationRow
                  key={v.property}
                  v={v}
                  isHighlighted={highlighted === v.property}
                  onHover={setHighlighted}
                />
              ))}
            </div>
          ) : (
            <div style={{ padding: 'var(--spacing-2)' }}>
              <p style={{ fontSize: 12, color: 'var(--color-fg-muted)', margin: '0 0 var(--spacing-3)' }}>
                The prompt sent to the AI agent when generating the constrained version:
              </p>
              <pre
                style={{
                  fontSize: 11,
                  lineHeight: 1.7,
                  color: 'var(--color-fg-default)',
                  background: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border-default)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-4)',
                  overflow: 'auto',
                  margin: 0,
                  fontFamily: 'var(--typography-font-family-mono)',
                }}
              >
{`Generate a notification card component.

Use ONLY these design token values:

SPACING (4px grid):
  4px (spacing.1), 8px (spacing.2), 12px (spacing.3),
  16px (spacing.4), 24px (spacing.6), 32px (spacing.8)

RADIUS:
  sm: 4px  |  md: 8px  |  lg: 12px  |  full: 9999px

COLORS — semantic tokens only, no raw hex:
  bg: --color-bg-raised | --color-bg-subtle
  border: --color-border-default
  text: --color-fg-default | --color-fg-muted | --color-fg-subtle
  accent: --color-accent-emphasis | --color-accent-subtle | --color-accent-fg
  status: --color-status-{error,warning,success}-subtle

MOTION:
  Duration: fast (100ms), normal (200ms), slow (300ms)
  Easing: entrance → spring-smooth | exit → ease-in | state → ease-out

TYPOGRAPHY:
  Font: var(--typography-font-family-sans)
  Scale: xs (12px), sm (13px), base (16px), lg (18px)
  Line height: normal (1.5), relaxed (1.625)

Do not invent values outside this set.`}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AgentLayerDemo
