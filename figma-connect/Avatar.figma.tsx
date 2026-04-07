import figma from '@figma/code-connect'
import { Avatar } from '../src/components/Avatar'

figma.connect(Avatar, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=avatar', {
  props: {
    size: figma.enum('Size', {
      'Extra Small': 'xs',
      Small:         'sm',
      Medium:        'md',
      Large:         'lg',
      'Extra Large': 'xl',
    }),
    shape:  figma.enum('Shape', { Circle: 'circle', Rounded: 'rounded' }),
    status: figma.enum('Status', {
      None:    undefined,
      Online:  'online',
      Offline: 'offline',
      Busy:    'busy',
      Away:    'away',
    }),
    src:  figma.string('Image URL'),
    name: figma.string('Name'),
  },
  example: ({ size, shape, status, src, name }) => (
    <Avatar
      size={size}
      shape={shape}
      status={status}
      src={src || undefined}
      name={name || 'User Name'}
    />
  ),
})
