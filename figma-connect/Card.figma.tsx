import figma from '@figma/code-connect'
import { Card } from '../src/components/Card'

figma.connect(Card, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=card', {
  props: {
    variant:     figma.enum('Variant', { Default: 'default', Outlined: 'outlined', Elevated: 'elevated', Ghost: 'ghost' }),
    interactive: figma.boolean('Interactive'),
    noPadding:   figma.boolean('No Padding'),
  },
  example: ({ variant, interactive, noPadding }) => (
    <Card variant={variant} interactive={interactive} noPadding={noPadding}>
      Card content
    </Card>
  ),
})
