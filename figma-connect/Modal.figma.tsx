import figma from '@figma/code-connect'
import { Modal } from '../src/components/Modal'
import { Button } from '../src/components/Button'

figma.connect(Modal, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=modal', {
  props: {
    size: figma.enum('Size', {
      Small:    'sm',
      Medium:   'md',
      Large:    'lg',
      'Full Screen': 'full',
    }),
    open: figma.boolean('Open'),
  },
  example: ({ size, open }) => (
    <Modal open={open} onClose={() => {}} size={size}>
      <Modal.Header>Dialog Title</Modal.Header>
      <Modal.Body>
        Dialog content goes here.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => {}}>Cancel</Button>
        <Button variant="primary" onClick={() => {}}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  ),
})
