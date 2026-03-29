import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'

// ─── Types ─────────────────────────────────────────────

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export interface ThemeContextValue {
  /** The current theme setting (may be 'system') */
  theme: Theme
  /** The resolved theme after evaluating 'system' against OS preference */
  resolvedTheme: ResolvedTheme
  /** Update the theme */
  setTheme: (theme: Theme) => void
}

// ─── Context ───────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue | null>(null)

// ─── Helpers ───────────────────────────────────────────

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(theme: Theme): ResolvedTheme {
  return theme === 'system' ? getSystemTheme() : theme
}

function applyTheme(resolved: ResolvedTheme) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', resolved)
}

// ─── Provider ──────────────────────────────────────────

export interface ThemeProviderProps {
  /** Initial theme. Defaults to 'system'. */
  defaultTheme?: Theme
  children: React.ReactNode
}

export function ThemeProvider({ defaultTheme = 'system', children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(defaultTheme)
  )

  // Apply on resolved change
  useEffect(() => {
    applyTheme(resolvedTheme)
  }, [resolvedTheme])

  // Listen to OS preference changes when theme is 'system'
  useEffect(() => {
    if (theme !== 'system') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      const next: ResolvedTheme = e.matches ? 'dark' : 'light'
      setResolvedTheme(next)
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    setResolvedTheme(resolveTheme(next))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// ─── Hook ──────────────────────────────────────────────

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}
