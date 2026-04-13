import { createContext } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export interface ThemeContextValue {
  /** The current user-selected preference (may be 'system') */
  theme: Theme
  /** The resolved theme actually applied to the DOM */
  resolvedTheme: ResolvedTheme
  /** Set the theme preference */
  setTheme: (theme: Theme) => void
  /** Toggle between light and dark (ignores system preference) */
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
