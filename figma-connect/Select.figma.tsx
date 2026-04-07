import figma from '@figma/code-connect'
import { Select } from '../src/components/Select'

figma.connect(Select, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=select', {
  props: {
    size:        figma.enum('Size', { Small: 'sm', Medium: 'md', Large: 'lg' }),
    placeholder: figma.string('Placeholder'),
    disabled:    figma.boolean('Disabled'),
    multiple:    figma.boolean('Multiple'),
    searchable:  figma.boolean('Searchable'),
  },
  example: ({ size, placeholder, disabled, multiple, searchable }) => (
    <Select
      size={size}
      placeholder={placeholder || 'Select an option'}
      disabled={disabled}
      multiple={multiple}
      searchable={searchable}
      options={[
        { value: 'option-1', label: 'Option 1' },
        { value: 'option-2', label: 'Option 2' },
        { value: 'option-3', label: 'Option 3' },
      ]}
      onChange={() => {}}
    />
  ),
})
