import figma from '@figma/code-connect'
import { Tabs } from '../src/components/Tabs'

figma.connect(Tabs, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=tabs', {
  props: {
    variant: figma.enum('Variant', { Underline: 'underline', Pill: 'pill' }),
    size:    figma.enum('Size', { Small: 'sm', Medium: 'md' }),
  },
  example: ({ variant, size }) => (
    <Tabs value="tab1" onChange={() => {}} variant={variant} size={size}>
      <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
      <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
      <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
    </Tabs>
  ),
})
