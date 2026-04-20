export type ComponentStatus = 'stable' | 'beta' | 'experimental' | 'deprecated'

export interface ComponentEntry {
  name: string
  status: ComponentStatus
  category: string
  a11y: string
  description: string
  usageRules: {
    do: string[]
    dont: string[]
  }
  tokens: string[]
}

export const componentRegistry: ComponentEntry[] = [
  // Foundation
  {
    name: 'Button',
    status: 'stable',
    category: 'Foundation',
    a11y: 'WCAG AA',
    description: 'Interactive trigger for actions, form submission, or navigation.',
    usageRules: {
      do: [
        'Use variant="primary" for the single most important action in a view',
        'Use variant="danger" for destructive actions with Dialog confirmation',
        'Use variant="ghost" for icon-only or low-priority actions',
        'Set loading={true} during async operations',
      ],
      dont: [
        'Never place more than one primary Button per visual group',
        'Never use for page navigation — use anchor or router Link',
        'Never hardcode background or text colors',
        'Never remove the focus ring',
      ],
    },
    tokens: ['--color-primary-default', '--color-primary-hover', '--color-primary-active', '--shadow-focus-ring'],
  },
  {
    name: 'Input',
    status: 'stable',
    category: 'Foundation',
    a11y: 'WCAG AA',
    description: 'Single-line text input for forms. Always pair with FormField.',
    usageRules: {
      do: [
        'Always wrap in FormField for label and error handling',
        'Use error prop to show validation messages',
        'Use helperText for format hints (e.g., "mm/dd/yyyy")',
      ],
      dont: [
        'Never use for multi-line content — use Textarea',
        'Never use placeholder as a substitute for a label',
        'Never hardcode colors or borders',
      ],
    },
    tokens: ['--color-bg-default', '--color-border-default', '--color-fg-default', '--radius-sm'],
  },
  {
    name: 'Badge',
    status: 'stable',
    category: 'Foundation',
    a11y: 'WCAG AA',
    description: 'Small label for status, category, or metadata. Non-interactive.',
    usageRules: {
      do: ['Choose variant based on semantic meaning', 'Keep label to 1–3 words'],
      dont: ['Never make Badge interactive', 'Never use to replace Alert for page-level messages'],
    },
    tokens: ['--color-success-subtle', '--color-warning-subtle', '--color-error-subtle', '--radius-full'],
  },
  {
    name: 'Card',
    status: 'stable',
    category: 'Foundation',
    a11y: 'WCAG AA',
    description: 'Container for grouping related content with optional border or shadow.',
    usageRules: {
      do: [
        'Use variant="border" as default for top-level cards',
        'Use variant="ghost" for nested cards',
        'Only set hoverable={true} for fully-clickable navigation cards',
      ],
      dont: ['Never nest Card/border inside Card/border', 'Never use as page layout wrapper — use Container'],
    },
    tokens: ['--color-bg-raised', '--color-border-default', '--shadow-sm'],
  },
  // Typography
  {
    name: 'Text',
    status: 'stable',
    category: 'Typography',
    a11y: 'N/A',
    description: 'Body text with semantic color variants for default, muted, or subtle text.',
    usageRules: {
      do: ['Use color="muted" for secondary copy', 'Use color="subtle" for captions and metadata'],
      dont: ['Never use for headings — use Heading', 'Never apply inline font-size or color styles'],
    },
    tokens: ['--typography-font-size-md', '--color-fg-default', '--color-fg-muted'],
  },
  {
    name: 'Heading',
    status: 'stable',
    category: 'Typography',
    a11y: 'N/A',
    description: 'Semantic heading (h1–h6) with semantic font sizing. Size and level are separate props.',
    usageRules: {
      do: ['Always set level to match document hierarchy', 'Never skip heading levels'],
      dont: ['Never use more than one h1 per page', 'Never use for body copy'],
    },
    tokens: ['--typography-font-size-2xl', '--typography-font-size-xl', '--typography-font-size-lg'],
  },
  {
    name: 'Code',
    status: 'stable',
    category: 'Typography',
    a11y: 'N/A',
    description: 'Monospace text for code snippets, inline or block.',
    usageRules: {
      do: [],
      dont: [],
    },
    tokens: ['--typography-font-family-mono', '--color-bg-muted', '--color-fg-default'],
  },
  {
    name: 'Label',
    status: 'stable',
    category: 'Typography',
    a11y: 'WCAG AA',
    description: 'Semantic <label> tag for form inputs. FormField handles this automatically.',
    usageRules: {
      do: [],
      dont: [],
    },
    tokens: ['--typography-font-size-sm', '--typography-font-weight-medium'],
  },
  // Forms
  {
    name: 'Checkbox',
    status: 'stable',
    category: 'Forms',
    a11y: 'WCAG AA',
    description: 'Multi-select option. Use for selecting any number of items including none.',
    usageRules: {
      do: ['Use for selecting any number of options', 'Use indeterminate={true} for partial group selection'],
      dont: ['Never use for binary toggle — use Switch', 'Never use for single-exclusive selection — use Radio'],
    },
    tokens: ['--color-primary-default', '--shadow-focus-ring'],
  },
  {
    name: 'Radio',
    status: 'stable',
    category: 'Forms',
    a11y: 'WCAG AA',
    description: 'Single-select from mutually exclusive options. Always wrap in RadioGroup.',
    usageRules: {
      do: ['Always wrap in RadioGroup', 'Use for 2–6 mutually exclusive options'],
      dont: ['Never manage state outside RadioGroup', 'Never use for > 6 options — use Select'],
    },
    tokens: ['--color-primary-default', '--shadow-focus-ring'],
  },
  {
    name: 'Select',
    status: 'stable',
    category: 'Forms',
    a11y: 'WCAG AA',
    description: 'Dropdown select for many options. Use for 5+ choices.',
    usageRules: {
      do: ['Use for 5+ options', 'Always provide a placeholder for required fields'],
      dont: ['Never use for fewer than 3 options — use Radio', 'Never render option children manually'],
    },
    tokens: ['--color-bg-default', '--color-border-default', '--radius-sm'],
  },
  {
    name: 'Switch',
    status: 'stable',
    category: 'Forms',
    a11y: 'WCAG AA',
    description: 'Binary toggle that applies a setting immediately. Distinct from Checkbox.',
    usageRules: {
      do: ['Use for settings that apply immediately'],
      dont: ['Never use inside a form requiring explicit submission — use Checkbox'],
    },
    tokens: ['--color-success-default', '--shadow-focus-ring'],
  },
  {
    name: 'Textarea',
    status: 'stable',
    category: 'Forms',
    a11y: 'WCAG AA',
    description: 'Multi-line text input. Always pair with FormField.',
    usageRules: {
      do: [],
      dont: [],
    },
    tokens: ['--color-bg-default', '--color-border-default', '--radius-sm'],
  },
  {
    name: 'FormField',
    status: 'stable',
    category: 'Forms',
    a11y: 'WCAG AA',
    description: 'Wrapper for form controls. Handles label, helper text, error state, and a11y binding.',
    usageRules: {
      do: ['Wrap every form control in FormField', 'Pass error from form validation state'],
      dont: ['Never build custom label/error layouts outside FormField'],
    },
    tokens: [],
  },
  // Overlays
  {
    name: 'Dialog',
    status: 'stable',
    category: 'Overlays',
    a11y: 'WCAG AA',
    description: 'Modal dialog for confirmations, focused forms, or focused content. Blocks interaction with page.',
    usageRules: {
      do: [
        'Use for destructive confirmations, focused forms, and detail views',
        'Always include DialogTitle',
        'Place cancel left, confirm right in DialogFooter',
      ],
      dont: ['Never use for non-blocking notifications — use Toast', 'Never stack multiple Dialogs'],
    },
    tokens: ['--shadow-2xl', '--color-bg-default'],
  },
  {
    name: 'Tooltip',
    status: 'stable',
    category: 'Overlays',
    a11y: 'WCAG AA',
    description: 'Non-interactive text label anchored to a trigger element.',
    usageRules: {
      do: [
        'Use for icon buttons where the label is not always visible',
        'Keep content under 10 words',
      ],
      dont: ['Never put interactive elements inside tooltip', 'Never use as the only way to convey critical information'],
    },
    tokens: ['--color-bg-raised', '--color-fg-default'],
  },
  {
    name: 'Popover',
    status: 'stable',
    category: 'Overlays',
    a11y: 'WCAG AA',
    description: 'Floating contextual content anchored to a trigger. Non-modal, interactive.',
    usageRules: {
      do: [],
      dont: [],
    },
    tokens: ['--shadow-md', '--color-bg-raised'],
  },
  {
    name: 'DropdownMenu',
    status: 'stable',
    category: 'Overlays',
    a11y: 'WCAG AA',
    description: 'Menu of actions anchored to a trigger. Non-modal.',
    usageRules: {
      do: [],
      dont: [],
    },
    tokens: ['--shadow-md', '--color-bg-raised'],
  },
  // Feedback
  {
    name: 'Alert',
    status: 'stable',
    category: 'Feedback',
    a11y: 'WCAG AA',
    description: 'Persistent, in-context status message. Stays in layout until dismissed.',
    usageRules: {
      do: [
        'Use for persistent, in-context status messages',
        'Always match variant to semantic meaning',
      ],
      dont: ['Never use for transient messages — use Toast', 'Never use for per-field validation — use FormField error'],
    },
    tokens: ['--color-success-subtle', '--color-warning-subtle', '--color-error-subtle'],
  },
  {
    name: 'Toast',
    status: 'stable',
    category: 'Feedback',
    a11y: 'WCAG AA',
    description: 'Transient notification that auto-dismisses. Appears in corner.',
    usageRules: {
      do: ['Use for transient confirmations after user actions', 'Always trigger via useToast hook'],
      dont: [
        'Never use for destructive confirmations — use Dialog',
        'Never stack more than 3 toasts',
        'Never use for persistent status — use Alert',
      ],
    },
    tokens: ['--color-success-default', '--color-error-default'],
  },
  // Navigation
  {
    name: 'Tabs',
    status: 'stable',
    category: 'Navigation',
    a11y: 'WCAG AA',
    description: 'Secondary navigation and content grouping within a page.',
    usageRules: {
      do: ['Use for secondary navigation within a page', 'Always provide a default active tab'],
      dont: ['Never use for primary site navigation', 'Never exceed 7 tab items'],
    },
    tokens: ['--color-primary-default', '--color-border-default'],
  },
  {
    name: 'Breadcrumbs',
    status: 'stable',
    category: 'Navigation',
    a11y: 'WCAG AA',
    description: 'Hierarchical location indicator. Shows path from root to current page.',
    usageRules: {
      do: [],
      dont: [],
    },
    tokens: ['--color-fg-muted', '--color-fg-default'],
  },
  // Layout
  {
    name: 'Stack',
    status: 'stable',
    category: 'Layout',
    a11y: 'N/A',
    description: 'Flex layout primitive. Use for horizontal or vertical stacking with token-based gap.',
    usageRules: {
      do: ['Use as the primary flex layout primitive', 'Control spacing via gap prop'],
      dont: ['Never add margin/padding to Stack children for spacing', 'Never hardcode gap values'],
    },
    tokens: ['--spacing-2', '--spacing-4', '--spacing-6', '--spacing-8'],
  },
  {
    name: 'Container',
    status: 'stable',
    category: 'Layout',
    a11y: 'N/A',
    description: 'Constrained width wrapper for page content. Maximum width is fixed.',
    usageRules: {
      do: ['Use as the outermost page content wrapper', 'Use as="main" for primary content'],
      dont: ['Never nest Container inside Container', 'Never set custom max-width values'],
    },
    tokens: [],
  },
  {
    name: 'Divider',
    status: 'stable',
    category: 'Layout',
    a11y: 'WCAG AA',
    description: 'Visual separator between sections. Use sparingly.',
    usageRules: {
      do: [],
      dont: [],
    },
    tokens: ['--color-border-default'],
  },
  // Data Display
  {
    name: 'Avatar',
    status: 'stable',
    category: 'Data Display',
    a11y: 'WCAG AA',
    description: 'Profile image with initials fallback. Always provide alt and name props.',
    usageRules: {
      do: ['Always provide alt text when src is set', 'Always provide name for initials fallback'],
      dont: [
        'Never render more than 3 standalone Avatars side by side — use AvatarGroup',
        'Never apply custom border-radius',
      ],
    },
    tokens: ['--radius-full', '--color-bg-muted'],
  },
  {
    name: 'AvatarGroup',
    status: 'stable',
    category: 'Data Display',
    a11y: 'WCAG AA',
    description: 'Compact display of 3+ avatars. Set size on group, not individual avatars.',
    usageRules: {
      do: ['Use for 3 or more avatars in compact contexts', 'Set size on AvatarGroup, not on Avatar children'],
      dont: ['Never mix sizes across Avatar children', 'Never use for fewer than 3 avatars'],
    },
    tokens: ['--radius-full', '--spacing-2'],
  },
]

