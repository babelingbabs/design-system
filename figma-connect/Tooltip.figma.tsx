import figma from '@figma/code-connect'
import { Tooltip } from '../src/components/Tooltip'
import { Button } from '../src/components/Button'

figma.connect(Tooltip, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=tooltip', {
  props: {
    position: figma.enum('Position', {
      Top:    'top',
      Bottom: 'bottom',
      Left:   'left',
      Right:  'right',
    }),
    content:  figma.string('Content'),
    disabled: figma.boolean('Disabled'),
  },
  example: ({ position, content, disabled }) => (
    <Tooltip content={content || 'Tooltip text'} position={position} disabled={disabled}>
      <Button variant="secondary" size="sm">Hover me</Button>
    </Tooltip>
  ),
})
