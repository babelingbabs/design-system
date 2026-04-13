export type ComponentStatus = 'stable' | 'beta' | 'experimental' | 'deprecated'

export interface ComponentEntry {
  name: string
  status: ComponentStatus
  category: string
  a11y: string
}

export const componentRegistry: ComponentEntry[] = [
  // Foundation
  { name: 'Button', status: 'stable', category: 'Foundation', a11y: 'WCAG AA' },
  { name: 'Input', status: 'stable', category: 'Foundation', a11y: 'WCAG AA' },
  { name: 'Badge', status: 'stable', category: 'Foundation', a11y: 'WCAG AA' },
  { name: 'Card', status: 'stable', category: 'Foundation', a11y: 'WCAG AA' },
  // Typography
  { name: 'Text', status: 'stable', category: 'Typography', a11y: 'N/A' },
  { name: 'Heading', status: 'stable', category: 'Typography', a11y: 'N/A' },
  { name: 'Code', status: 'stable', category: 'Typography', a11y: 'N/A' },
  { name: 'Label', status: 'stable', category: 'Typography', a11y: 'WCAG AA' },
  // Forms
  { name: 'Checkbox', status: 'stable', category: 'Forms', a11y: 'WCAG AA' },
  { name: 'Radio', status: 'stable', category: 'Forms', a11y: 'WCAG AA' },
  { name: 'Select', status: 'stable', category: 'Forms', a11y: 'WCAG AA' },
  { name: 'Switch', status: 'stable', category: 'Forms', a11y: 'WCAG AA' },
  { name: 'Textarea', status: 'stable', category: 'Forms', a11y: 'WCAG AA' },
  { name: 'FormField', status: 'stable', category: 'Forms', a11y: 'WCAG AA' },
  // Overlays
  { name: 'Dialog', status: 'stable', category: 'Overlays', a11y: 'WCAG AA' },
  { name: 'Tooltip', status: 'stable', category: 'Overlays', a11y: 'WCAG AA' },
  { name: 'Popover', status: 'stable', category: 'Overlays', a11y: 'WCAG AA' },
  { name: 'DropdownMenu', status: 'stable', category: 'Overlays', a11y: 'WCAG AA' },
  // Feedback
  { name: 'Alert', status: 'stable', category: 'Feedback', a11y: 'WCAG AA' },
  { name: 'Toast', status: 'stable', category: 'Feedback', a11y: 'WCAG AA' },
  // Navigation
  { name: 'Tabs', status: 'stable', category: 'Navigation', a11y: 'WCAG AA' },
  { name: 'Breadcrumbs', status: 'stable', category: 'Navigation', a11y: 'WCAG AA' },
  // Layout
  { name: 'Stack', status: 'stable', category: 'Layout', a11y: 'N/A' },
  { name: 'Container', status: 'stable', category: 'Layout', a11y: 'N/A' },
  { name: 'Divider', status: 'stable', category: 'Layout', a11y: 'WCAG AA' },
  // Data Display
  { name: 'Avatar', status: 'stable', category: 'Data Display', a11y: 'WCAG AA' },
  { name: 'AvatarGroup', status: 'stable', category: 'Data Display', a11y: 'WCAG AA' },
]
