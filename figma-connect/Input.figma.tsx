import figma from '@figma/code-connect'
import { Input } from '../src/components/Input'

figma.connect(Input, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=input', {
  props: {
    size:        figma.enum('Size', { Small: 'sm', Medium: 'md', Large: 'lg' }),
    placeholder: figma.string('Placeholder'),
    label:       figma.string('Label'),
    disabled:    figma.boolean('Disabled'),
    error:       figma.boolean('Error'),
    hint:        figma.string('Hint'),
  },
  example: ({ size, placeholder, label, disabled, error, hint }) => (
    <Input
      size={size}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
      error={error ? 'This field is required' : undefined}
      hint={hint}
    />
  ),
})
