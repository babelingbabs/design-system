import figma from '@figma/code-connect'
import { Badge } from '../src/components/Badge'

figma.connect(Badge, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=badge', {
  props: {
    variant: figma.enum('Variant', {
      Default: 'default',
      Success: 'success',
      Warning: 'warning',
      Error:   'error',
      Info:    'info',
      Accent:  'accent',
    }),
    size: figma.enum('Size', { Small: 'sm', Medium: 'md' }),
    dot:  figma.boolean('Dot'),
  },
  example: ({ variant, size, dot }) => (
    <Badge variant={variant} size={size} dot={dot}>
      Label
    </Badge>
  ),
})
