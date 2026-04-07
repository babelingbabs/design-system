import figma from '@figma/code-connect'

// Toast is rendered via the ToastProvider + useToast hook.
// This Code Connect file documents the visual Toast item appearance.
import { ToastProvider } from '../src/components/Toast'

figma.connect(ToastProvider, 'https://www.figma.com/design/PLACEHOLDER/Kingsley-DS?node-id=toast', {
  props: {
    position: figma.enum('Position', {
      'Top Right':    'top-right',
      'Bottom Right': 'bottom-right',
      'Top Left':     'top-left',
      'Bottom Left':  'bottom-left',
    }),
  },
  example: ({ position }) => (
    <ToastProvider position={position}>
      {/* Wrap your app root with ToastProvider. */}
      {/* Trigger toasts with the useToast() hook: */}
      {/* const { toast } = useToast()            */}
      {/* toast('Saved!', { variant: 'success' })  */}
    </ToastProvider>
  ),
})
