import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Icon } from './Icon'
import type { IconSize, IconWeight } from './Icon'
import {
  House, MagnifyingGlass, Bell, Gear, User, Heart,
  Plus, Minus, X, Check, ArrowRight, ArrowLeft,
  EnvelopeSimple, ChatCircle, Phone, Camera,
  Moon, Sun, Star, Lightning, Fire, Leaf,
  PencilSimple, Trash, Copy, Download, Upload, Share,
  Eye, EyeSlash, Lock, LockOpen, Shield, Key,
  Folder, File, FileText, Image, Code, Terminal,
  Play, Pause, SkipForward, SkipBack, SpeakerHigh, Microphone,
  MapPin, Globe, Clock, Calendar, Tag, Bookmark,
  ChartBar, TrendUp, TrendDown, CurrencyDollar,
  Users, UserPlus, SignOut, DotsThree, List, GridFour,
} from '@phosphor-icons/react'

const meta: Meta = {
  title: 'Foundation/Icons',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Phosphor Icons — 3000+ icons with 6 weight variants. Clean, consistent, and perfectly sized for our design system.',
      },
    },
  },
}
export default meta

// ─── Curated Icon Set ────────────────────────────────

const iconGroups = {
  'Navigation': [
    { icon: House, name: 'House' },
    { icon: MagnifyingGlass, name: 'MagnifyingGlass' },
    { icon: Bell, name: 'Bell' },
    { icon: Gear, name: 'Gear' },
    { icon: User, name: 'User' },
    { icon: ArrowRight, name: 'ArrowRight' },
    { icon: ArrowLeft, name: 'ArrowLeft' },
    { icon: List, name: 'List' },
    { icon: GridFour, name: 'GridFour' },
    { icon: DotsThree, name: 'DotsThree' },
  ],
  'Actions': [
    { icon: Plus, name: 'Plus' },
    { icon: Minus, name: 'Minus' },
    { icon: X, name: 'X' },
    { icon: Check, name: 'Check' },
    { icon: PencilSimple, name: 'PencilSimple' },
    { icon: Trash, name: 'Trash' },
    { icon: Copy, name: 'Copy' },
    { icon: Download, name: 'Download' },
    { icon: Upload, name: 'Upload' },
    { icon: Share, name: 'Share' },
  ],
  'Communication': [
    { icon: EnvelopeSimple, name: 'EnvelopeSimple' },
    { icon: ChatCircle, name: 'ChatCircle' },
    { icon: Phone, name: 'Phone' },
    { icon: Camera, name: 'Camera' },
    { icon: Microphone, name: 'Microphone' },
    { icon: Heart, name: 'Heart' },
  ],
  'Status & Feedback': [
    { icon: Eye, name: 'Eye' },
    { icon: EyeSlash, name: 'EyeSlash' },
    { icon: Lock, name: 'Lock' },
    { icon: LockOpen, name: 'LockOpen' },
    { icon: Shield, name: 'Shield' },
    { icon: Key, name: 'Key' },
    { icon: Star, name: 'Star' },
    { icon: Lightning, name: 'Lightning' },
    { icon: Fire, name: 'Fire' },
    { icon: Leaf, name: 'Leaf' },
  ],
  'Files & Media': [
    { icon: Folder, name: 'Folder' },
    { icon: File, name: 'File' },
    { icon: FileText, name: 'FileText' },
    { icon: Image, name: 'Image' },
    { icon: Code, name: 'Code' },
    { icon: Terminal, name: 'Terminal' },
    { icon: Play, name: 'Play' },
    { icon: Pause, name: 'Pause' },
    { icon: SkipForward, name: 'SkipForward' },
    { icon: SkipBack, name: 'SkipBack' },
    { icon: SpeakerHigh, name: 'SpeakerHigh' },
  ],
  'Data & Info': [
    { icon: MapPin, name: 'MapPin' },
    { icon: Globe, name: 'Globe' },
    { icon: Clock, name: 'Clock' },
    { icon: Calendar, name: 'Calendar' },
    { icon: Tag, name: 'Tag' },
    { icon: Bookmark, name: 'Bookmark' },
    { icon: ChartBar, name: 'ChartBar' },
    { icon: TrendUp, name: 'TrendUp' },
    { icon: TrendDown, name: 'TrendDown' },
    { icon: CurrencyDollar, name: 'CurrencyDollar' },
    { icon: Users, name: 'Users' },
    { icon: UserPlus, name: 'UserPlus' },
    { icon: SignOut, name: 'SignOut' },
    { icon: Sun, name: 'Sun' },
    { icon: Moon, name: 'Moon' },
  ],
}

const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl']
const weights: IconWeight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone']

// ─── Stories ─────────────────────────────────────────

function IconGrid() {
  const [selectedWeight, setSelectedWeight] = useState<IconWeight>('regular')
  const [selectedSize, setSelectedSize] = useState<IconSize>('md')

  return (
    <div className="p-8 max-w-5xl" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <h1
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-large-title)',
          fontWeight: 400,
          lineHeight: 'var(--lh-large-title)',
          letterSpacing: '0.40px',
          color: 'var(--color-fg-primary)',
          marginBottom: '8px',
        }}
      >
        Phosphor Icons
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-body)',
          color: 'var(--color-fg-secondary)',
          marginBottom: '32px',
        }}
      >
        3,000+ icons · 6 weights · tree-shakeable
      </p>

      {/* Controls */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '32px',
          padding: '16px',
          backgroundColor: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-subtle)',
        }}
      >
        <div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: 'var(--color-fg-tertiary)',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Weight
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            {weights.map((w) => (
              <button
                key={w}
                onClick={() => setSelectedWeight(w)}
                style={{
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: w === selectedWeight ? 'var(--color-accent-500)' : 'var(--color-bg-muted)',
                  color: w === selectedWeight ? '#fff' : 'var(--color-fg-secondary)',
                  transition: 'all 150ms',
                }}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
        <div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: 'var(--color-fg-tertiary)',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Size
          </span>
          <div style={{ display: 'flex', gap: '4px' }}>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                style={{
                  padding: '4px 10px',
                  fontSize: '12px',
                  fontFamily: 'var(--font-sans)',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: s === selectedSize ? 'var(--color-accent-500)' : 'var(--color-bg-muted)',
                  color: s === selectedSize ? '#fff' : 'var(--color-fg-secondary)',
                  transition: 'all 150ms',
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Icon Groups */}
      {Object.entries(iconGroups).map(([group, icons]) => (
        <div key={group} style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: 'var(--color-fg-tertiary)',
              marginBottom: '12px',
              paddingBottom: '8px',
              borderBottom: '1px solid var(--color-border-subtle)',
            }}
          >
            {group}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
              gap: '4px',
            }}
          >
            {icons.map(({ icon, name }) => (
              <div
                key={name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 4px',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'default',
                  transition: 'background-color 150ms',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-subtle)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Icon
                  icon={icon}
                  size={selectedSize}
                  weight={selectedWeight}
                  color="var(--color-fg-primary)"
                />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: 'var(--color-fg-tertiary)',
                    textAlign: 'center',
                    lineHeight: 1.2,
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Usage */}
      <div
        style={{
          marginTop: '48px',
          padding: '24px',
          backgroundColor: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border-subtle)',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: 'var(--color-fg-tertiary)',
            marginBottom: '12px',
          }}
        >
          Usage
        </h2>
        <pre
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            lineHeight: 1.6,
            color: 'var(--color-fg-primary)',
            margin: 0,
          }}
        >
{`import { Bell } from '@phosphor-icons/react'
import { Icon } from '@kingsley/design-system'

// With wrapper (standardized sizing)
<Icon icon={Bell} size="md" weight="regular" />
<Icon icon={Bell} size="lg" weight="fill" color="var(--color-accent-500)" />

// Direct usage (Phosphor native)
<Bell size={20} weight="regular" />`}
        </pre>
      </div>
    </div>
  )
}

export const Icons: StoryObj = {
  name: 'Icon Library',
  render: () => <IconGrid />,
}
