import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext, type Theme, type ResolvedTheme } from './ThemeContext'

const STORAGE_KEY = 'kds-theme'
const ATTRIBUTE = 'data-theme'

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system'
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  } catch {
    // localStorage unavailable (e.g. SSR, private browsing)
  }
  return 'system'
}

function resolveTheme(theme: Theme): ResolvedTheme {
  if (theme === 'system') return getSystemTheme()
  return theme
}

export interface ThemeProviderProps {
  children: React.ReactNode
  /** Default theme when no stored preference exists */
  defaultTheme?: Theme
  /** DOM element to apply the data-theme attribute to (defaults to documentElement) */
  target?: HTMLElement
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  target,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = getInitialTheme()
    return stored !== 'system' ? stored : defaultTheme
  })

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() =>
    resolveTheme(theme)
  )

  // Apply theme attribute to DOM
  useEffect(() => {
    const resolved = resolveTheme(theme)
    setResolvedTheme(resolved)

    const el = target ?? document.documentElement
    el.setAttribute(ATTRIBUTE, resolved)
  }, [theme, target])

  // Watch system preference changes
  useEffect(() => {
    if (theme !== 'system') return

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const resolved = getSystemTheme()
      setResolvedTheme(resolved)
      const el = target ?? document.documentElement
      el.setAttribute(ATTRIBUTE, resolved)
    }

    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme, target])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme, toggleTheme }),
    [theme, resolvedTheme, setTheme, toggleTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
