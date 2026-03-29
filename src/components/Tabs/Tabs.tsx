import React, { createContext, useContext } from 'react'
import { motion } from 'framer-motion'

export type TabsVariant = 'underline' | 'pill'
export type TabsSize = 'sm' | 'md'

// ─── Context ─────────────────────────────────────────

interface TabsContextValue {
  value: string
  onChange: (value: string) => void
  variant: TabsVariant
  size: TabsSize
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('<Tabs.Tab> must be used inside <Tabs>')
  return ctx
}

// ─── Size config ─────────────────────────────────────

const sizeConfig: Record<TabsSize, {
  height: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  px: string
  gap: string
  iconSize: string
}> = {
  sm: {
    height:        '28px',
    fontSize:      '0.8125rem',   // footnote 13px
    fontWeight:    '500',
    letterSpacing: '-0.08px',
    px:            '10px',
    gap:           '5px',
    iconSize:      '12px',
  },
  md: {
    height:        '34px',
    fontSize:      '0.9375rem',   // subhead 15px
    fontWeight:    '500',
    letterSpacing: '-0.23px',
    px:            '14px',
    gap:           '6px',
    iconSize:      '14px',
  },
}

// ─── Tab ─────────────────────────────────────────────

export interface TabItem {
  value: string
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

// Internal Tab (used inside Tabs compound component)
interface TabProps {
  value: string
  label: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

function Tab({ value, label, icon, disabled = false }: TabProps) {
  const { value: activeValue, onChange, variant, size } = useTabsContext()
  const isActive = value === activeValue
  const cfg = sizeConfig[size]

  const handleClick = () => {
    if (!disabled) onChange(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!disabled) onChange(value)
    }
  }

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled || undefined}
      tabIndex={isActive ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: cfg.gap,
        height: cfg.height,
        padding: `0 ${cfg.px}`,
        border: 'none',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: cfg.fontSize,
        fontWeight: isActive ? '600' : cfg.fontWeight,
        letterSpacing: cfg.letterSpacing,
        color: isActive
          ? (variant === 'pill' ? '#FFFFFF' : 'var(--color-accent-500)')
          : disabled
            ? 'var(--color-fg-disabled)'
            : 'var(--color-fg-secondary)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        borderRadius: variant === 'pill' ? '9999px' : '0',
        transition: 'color 0.15s ease',
        outline: 'none',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        WebkitTapHighlightColor: 'transparent',
        flexShrink: 0,
      }}
      className="focus-visible:shadow-[var(--shadow-focus)]"
    >
      {icon && (
        <span style={{ display: 'flex', alignItems: 'center', fontSize: cfg.iconSize, flexShrink: 0 }}>
          {icon}
        </span>
      )}
      {label}
    </button>
  )
}
Tab.displayName = 'Tabs.Tab'

// ─── Tabs ─────────────────────────────────────────────

export interface TabsProps {
  value: string
  onChange: (value: string) => void
  variant?: TabsVariant
  size?: TabsSize
  tabs?: TabItem[]
  children?: React.ReactNode
  className?: string
}

function TabsRoot({
  value,
  onChange,
  variant = 'underline',
  size = 'md',
  tabs,
  children,
  className = '',
}: TabsProps) {
  const cfg = sizeConfig[size]

  // Collect tab items — either from `tabs` prop or compound children
  const tabItems: TabItem[] = tabs ?? []

  return (
    <TabsContext.Provider value={{ value, onChange, variant, size }}>
      {variant === 'underline' ? (
        <div
          role="tablist"
          className={className}
          style={{
            display: 'inline-flex',
            alignItems: 'flex-end',
            position: 'relative',
            gap: '0',
            borderBottom: '1px solid var(--color-border-subtle)',
          }}
        >
          {/* Render tab buttons from `tabs` array */}
          {tabItems.map((tab) => (
            <div key={tab.value} style={{ position: 'relative' }}>
              <Tab
                value={tab.value}
                label={tab.label}
                icon={tab.icon}
                disabled={tab.disabled}
              />
              {tab.value === value && (
                <motion.div
                  layoutId="tabs-underline-indicator"
                  style={{
                    position: 'absolute',
                    bottom: '-1px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--color-accent-500)',
                    borderRadius: '1px',
                  }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              )}
            </div>
          ))}
          {/* Compound children */}
          {children && (
            <UnderlineChildren activeValue={value}>{children}</UnderlineChildren>
          )}
        </div>
      ) : (
        /* pill variant */
        <div
          role="tablist"
          className={className}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '2px',
            borderRadius: '9999px',
            backgroundColor: 'var(--color-bg-muted)',
            gap: '0',
          }}
        >
          {/* Active pill indicator — slides behind tabs */}
          {tabItems.map((tab) =>
            tab.value === value ? (
              <motion.div
                key="pill-indicator"
                layoutId="tabs-pill-indicator"
                style={{
                  position: 'absolute',
                  top: '2px',
                  height: `calc(${cfg.height} - 0px)`,
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-accent-500)',
                  zIndex: 0,
                }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            ) : null
          )}

          {tabItems.map((tab) => (
            <div key={tab.value} style={{ position: 'relative' }}>
              <Tab
                value={tab.value}
                label={tab.label}
                icon={tab.icon}
                disabled={tab.disabled}
              />
            </div>
          ))}
          {children && (
            <PillChildren activeValue={value} height={cfg.height}>{children}</PillChildren>
          )}
        </div>
      )}
    </TabsContext.Provider>
  )
}

// Helper wrappers for compound pattern children
function UnderlineChildren({ children, activeValue }: { children: React.ReactNode; activeValue: string }) {
  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        const tabValue = (child.props as { value?: string }).value
        const isActive = tabValue === activeValue
        return (
          <div style={{ position: 'relative' }}>
            {child}
            {isActive && tabValue && (
              <motion.div
                layoutId="tabs-underline-indicator"
                style={{
                  position: 'absolute',
                  bottom: '-1px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--color-accent-500)',
                  borderRadius: '1px',
                }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            )}
          </div>
        )
      })}
    </>
  )
}

function PillChildren({ children, activeValue, height }: { children: React.ReactNode; activeValue: string; height: string }) {
  const childArray = React.Children.toArray(children)
  return (
    <>
      {childArray.map((child, i) => {
        if (!React.isValidElement(child)) return child
        const tabValue = (child.props as { value?: string }).value
        const isActive = tabValue === activeValue
        return (
          <div key={i} style={{ position: 'relative' }}>
            {isActive && tabValue && (
              <motion.div
                layoutId="tabs-pill-indicator"
                style={{
                  position: 'absolute',
                  inset: 0,
                  height,
                  borderRadius: '9999px',
                  backgroundColor: 'var(--color-accent-500)',
                  zIndex: 0,
                }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
            )}
            {child}
          </div>
        )
      })}
    </>
  )
}

// ─── Compound export ──────────────────────────────────

export const Tabs = Object.assign(TabsRoot, { Tab })
