import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
} from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretDown, Check, MagnifyingGlass } from '@phosphor-icons/react'

export type SelectSize = 'sm' | 'md' | 'lg'

export interface SelectOptionDef {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
  disabled?: boolean
}

export interface SelectProps {
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  options?: SelectOptionDef[]
  placeholder?: string
  size?: SelectSize
  /** Enable multi-select with checkboxes */
  multi?: boolean
  /** Show search input */
  searchable?: boolean
  disabled?: boolean
  label?: string
  id?: string
  className?: string
  children?: React.ReactNode
}

export interface SelectOptionProps extends SelectOptionDef {
  className?: string
}

// Context for compound pattern
interface SelectInternalContext {
  registerOption: (opt: SelectOptionDef) => void
}
const SelectInternalCtx = createContext<SelectInternalContext | null>(null)

const sizeConfig: Record<SelectSize, {
  height: string
  fontSize: string
  px: string
  iconSize: number
  optionPy: string
}> = {
  sm: { height: '28px', fontSize: 'var(--text-footnote)', px: '10px', iconSize: 12, optionPy: '6px' },
  md: { height: '36px', fontSize: 'var(--text-subhead)', px: '12px', iconSize: 14, optionPy: '8px' },
  lg: { height: '44px', fontSize: 'var(--text-callout)', px: '14px', iconSize: 16, optionPy: '10px' },
} as const

function getDropdownPos(trigger: DOMRect): { top: number; left: number; width: number; above: boolean } {
  const GAP = 4
  const ESTIMATED_HEIGHT = 280
  const viewportH = window.innerHeight
  const spaceBelow = viewportH - trigger.bottom
  const above = spaceBelow < ESTIMATED_HEIGHT && trigger.top > ESTIMATED_HEIGHT
  return {
    top: above
      ? trigger.top - ESTIMATED_HEIGHT - GAP + window.scrollY
      : trigger.bottom + GAP + window.scrollY,
    left: trigger.left + window.scrollX,
    width: trigger.width,
    above,
  }
}

function SelectRoot({
  value,
  onChange,
  options: optionsProp = [],
  placeholder = 'Select…',
  size = 'md',
  multi = false,
  searchable = false,
  disabled = false,
  label,
  id: idProp,
  className = '',
  children,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0, above: false })

  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const childOptsRef = useRef<SelectOptionDef[]>([])

  const rawId = useId()
  const id = idProp ?? `select-${rawId.replace(/:/g, '')}`
  const listboxId = `${id}-listbox`
  const labelId = label ? `${id}-label` : undefined

  const cfg = sizeConfig[size]

  const registerOption = useCallback((opt: SelectOptionDef) => {
    childOptsRef.current = [
      ...childOptsRef.current.filter(o => o.value !== opt.value),
      opt,
    ]
  }, [])

  const allOptions: SelectOptionDef[] = children ? childOptsRef.current : optionsProp

  const selectedValues: string[] = value === undefined
    ? []
    : Array.isArray(value) ? value : [value]

  const filtered = search.trim()
    ? allOptions.filter(o => o.label.toLowerCase().includes(search.toLowerCase()))
    : allOptions

  const displayLabel = (() => {
    if (selectedValues.length === 0) return null
    if (multi) {
      if (selectedValues.length === 1) {
        return allOptions.find(o => o.value === selectedValues[0])?.label ?? selectedValues[0]
      }
      return `${selectedValues.length} selected`
    }
    return allOptions.find(o => o.value === selectedValues[0])?.label ?? selectedValues[0]
  })()

  const openMenu = () => {
    if (disabled || open) return
    if (triggerRef.current) setPos(getDropdownPos(triggerRef.current.getBoundingClientRect()))
    setOpen(true)
    setActiveIndex(-1)
    setSearch('')
  }

  const closeMenu = useCallback(() => {
    setOpen(false)
    setSearch('')
    triggerRef.current?.focus()
  }, [])

  const selectOpt = useCallback((opt: SelectOptionDef) => {
    if (opt.disabled) return
    if (multi) {
      const next = selectedValues.includes(opt.value)
        ? selectedValues.filter(v => v !== opt.value)
        : [...selectedValues, opt.value]
      onChange?.(next)
    } else {
      onChange?.(opt.value)
      closeMenu()
    }
  }, [multi, selectedValues, onChange, closeMenu])

  // Scroll active into view
  useEffect(() => {
    if (!open || activeIndex < 0 || !listRef.current) return
    const el = listRef.current.children[activeIndex] as HTMLElement
    el?.scrollIntoView({ block: 'nearest' })
  }, [activeIndex, open])

  // Focus search or list when open
  useEffect(() => {
    if (!open) return
    const raf = requestAnimationFrame(() => {
      if (searchable) searchInputRef.current?.focus()
      else listRef.current?.focus()
    })
    return () => cancelAnimationFrame(raf)
  }, [open, searchable])

  // Outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (
        !triggerRef.current?.contains(e.target as Node) &&
        !dropdownRef.current?.contains(e.target as Node)
      ) closeMenu()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, closeMenu])

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault()
      openMenu()
    }
    if (e.key === 'Escape') closeMenu()
  }

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); return }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(i => Math.min(i + 1, filtered.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActiveIndex(i => Math.max(i - 1, 0)) }
    if ((e.key === 'Enter' || e.key === ' ') && activeIndex >= 0) {
      e.preventDefault()
      selectOpt(filtered[activeIndex])
    }
    if (e.key === 'Tab') closeMenu()
    // Type-ahead (non-searchable only)
    if (!searchable && e.key.length === 1) {
      const ch = e.key.toLowerCase()
      const idx = filtered.findIndex(o => o.label.toLowerCase().startsWith(ch))
      if (idx >= 0) setActiveIndex(idx)
    }
  }

  return (
    <SelectInternalCtx.Provider value={{ registerOption }}>
      {children && <div style={{ display: 'none' }}>{children}</div>}

      <div className={className} style={{ display: 'inline-block' }}>
        {label && (
          <label
            id={labelId}
            htmlFor={id}
            style={{
              display: 'block',
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-footnote)',
              fontWeight: '500',
              color: 'var(--color-fg-secondary)',
              marginBottom: '6px',
            }}
          >
            {label}
          </label>
        )}
        <button
          ref={triggerRef}
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-controls={open ? listboxId : undefined}
          aria-labelledby={labelId}
          disabled={disabled}
          onClick={() => open ? closeMenu() : openMenu()}
          onKeyDown={handleTriggerKeyDown}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '6px',
            width: '100%',
            minWidth: '160px',
            height: cfg.height,
            padding: `0 ${cfg.px}`,
            backgroundColor: 'var(--color-bg-base)',
            border: `1px solid ${open ? 'var(--color-accent-500)' : 'var(--color-border-default)'}`,
            borderRadius: 'var(--radius-md)',
            fontFamily: 'var(--font-sans)',
            fontSize: cfg.fontSize,
            color: displayLabel ? 'var(--color-fg-primary)' : 'var(--color-fg-tertiary)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            boxShadow: open ? 'var(--shadow-focus)' : 'none',
            transition: 'border-color 150ms ease, box-shadow 150ms ease',
            outline: 'none',
          }}
        >
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'left' }}>
            {displayLabel ?? placeholder}
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: 'flex', flexShrink: 0, color: 'var(--color-fg-tertiary)' }}
          >
            <CaretDown size={cfg.iconSize} weight="bold" aria-hidden />
          </motion.span>
        </button>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, scaleY: 0.95, y: pos.above ? 4 : -4 }}
              animate={{ opacity: 1, scaleY: 1, y: 0 }}
              exit={{ opacity: 0, scaleY: 0.95 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              onKeyDown={handleMenuKeyDown}
              style={{
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                width: pos.width,
                zIndex: 'var(--z-dropdown)' as unknown as number,
                backgroundColor: 'var(--color-bg-base)',
                border: '1px solid var(--color-border-default)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden',
                transformOrigin: pos.above ? 'bottom center' : 'top center',
              }}
            >
              {searchable && (
                <div style={{ padding: '6px', borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    height: '28px',
                    padding: '0 8px',
                    backgroundColor: 'var(--color-bg-subtle)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-subtle)',
                  }}>
                    <MagnifyingGlass size={12} color="var(--color-fg-tertiary)" aria-hidden />
                    <input
                      ref={searchInputRef}
                      value={search}
                      onChange={e => { setSearch(e.target.value); setActiveIndex(-1) }}
                      onKeyDown={handleMenuKeyDown}
                      placeholder="Search…"
                      style={{
                        flex: 1,
                        border: 'none',
                        background: 'transparent',
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'var(--text-footnote)',
                        color: 'var(--color-fg-primary)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>
              )}
              <ul
                ref={listRef}
                id={listboxId}
                role="listbox"
                aria-multiselectable={multi || undefined}
                tabIndex={searchable ? -1 : 0}
                style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: '4px',
                  maxHeight: '240px',
                  overflowY: 'auto',
                  outline: 'none',
                }}
              >
                {filtered.length === 0 ? (
                  <li style={{
                    padding: '10px 12px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-footnote)',
                    color: 'var(--color-fg-tertiary)',
                    textAlign: 'center',
                  }}>
                    No results
                  </li>
                ) : filtered.map((opt, i) => {
                  const isSelected = selectedValues.includes(opt.value)
                  const isActive = i === activeIndex
                  return (
                    <li
                      key={opt.value}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={opt.disabled || undefined}
                      onClick={() => selectOpt(opt)}
                      onMouseEnter={() => setActiveIndex(i)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: `${cfg.optionPy} 10px`,
                        borderRadius: 'var(--radius-md)',
                        fontFamily: 'var(--font-sans)',
                        fontSize: cfg.fontSize,
                        color: opt.disabled ? 'var(--color-fg-disabled)' : 'var(--color-fg-primary)',
                        backgroundColor: isActive && !opt.disabled ? 'var(--color-bg-subtle)' : 'transparent',
                        cursor: opt.disabled ? 'not-allowed' : 'pointer',
                        userSelect: 'none',
                        transition: 'background-color 80ms ease',
                      }}
                    >
                      {multi && (
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 14,
                          height: 14,
                          borderRadius: 'var(--radius-xs)',
                          border: isSelected
                            ? '1.5px solid var(--color-accent-500)'
                            : '1.5px solid var(--color-border-default)',
                          backgroundColor: isSelected ? 'var(--color-accent-500)' : 'transparent',
                          flexShrink: 0,
                          transition: 'border-color 100ms, background-color 100ms',
                        }}>
                          {isSelected && <Check size={9} weight="bold" color="white" aria-hidden />}
                        </span>
                      )}
                      {opt.icon && (
                        <span style={{ display: 'flex', flexShrink: 0, color: 'var(--color-fg-secondary)' }}>
                          {opt.icon}
                        </span>
                      )}
                      <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {opt.label}
                        {opt.description && (
                          <span style={{
                            display: 'block',
                            fontSize: 'var(--text-caption1)',
                            color: 'var(--color-fg-tertiary)',
                            marginTop: '1px',
                            whiteSpace: 'normal',
                          }}>
                            {opt.description}
                          </span>
                        )}
                      </span>
                      {!multi && isSelected && (
                        <Check size={12} weight="bold" color="var(--color-accent-500)" aria-hidden />
                      )}
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </SelectInternalCtx.Provider>
  )
}

// Compound Option — registers itself when rendered inside Select
function SelectOption({ value, label, description, icon, disabled }: SelectOptionProps) {
  const ctx = useContext(SelectInternalCtx)
  useEffect(() => {
    ctx?.registerOption({ value, label, description, icon, disabled })
  }, [value, label, description, disabled])
  return null
}
SelectOption.displayName = 'Select.Option'

export const Select = Object.assign(SelectRoot, { Option: SelectOption })
