import figma from '@figma/code-connect'
import { Button } from '../src/components/Button'

figma.connect(Button, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=button', {
  props: {
    variant: figma.enum('Variant', {
      Primary:   'primary',
      Secondary: 'secondary',
      Ghost:     'ghost',
      Danger:    'danger',
    }),
    size: figma.enum('Size', {
      Small:  'sm',
      Medium: 'md',
      Large:  'lg',
    }),
    loading:  figma.boolean('Loading'),
    disabled: figma.boolean('Disabled'),
    iconOnly: figma.boolean('Icon Only'),
  },
  example: ({ variant, size, loading, disabled, iconOnly }) => (
    <Button variant={variant} size={size} loading={loading} disabled={disabled} iconOnly={iconOnly}>
      Label
    </Button>
  ),
})
