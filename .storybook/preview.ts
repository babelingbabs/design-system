import type { Preview } from '@storybook/react'
import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Overview',
          ['Introduction', 'Component Status', 'Design Tokens', 'Accessibility'],
          'Foundation',
          'Typography',
          'Forms',
          'Overlays',
          'Feedback',
          'Navigation',
          'Layout',
          'Data Display',
          '*',
        ],
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
}

export default preview
