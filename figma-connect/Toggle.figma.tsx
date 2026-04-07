import figma from '@figma/code-connect'
import { Toggle } from '../src/components/Toggle'

figma.connect(Toggle, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=toggle', {
  props: {
    checked:  figma.boolean('Checked'),
    disabled: figma.boolean('Disabled'),
    size:     figma.enum('Size', { Small: 'sm', Medium: 'md' }),
    label:    figma.string('Label'),
  },
  example: ({ checked, disabled, size, label }) => (
    <Toggle
      checked={checked}
      onChange={() => {}}
      disabled={disabled}
      size={size}
      label={label || undefined}
    />
  ),
})
