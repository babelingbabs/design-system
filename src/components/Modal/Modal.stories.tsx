import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Button } from '../Button/Button'

/**
 * # Modal / Dialog
 * Centered overlay with backdrop blur. Scale-in animation. Focus trapped.
 *
 * Compound pattern: `<Modal>` + `<Modal.Header>` + `<Modal.Body>` + `<Modal.Footer>`
 */
const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta
type Story = StoryObj<typeof Modal>

function ModalDemo({ size = 'md' as const, title = 'Dialog Title', body = 'This is the dialog body. It can contain any content.' }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open {size} Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} size={size}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export const Default: Story = {
  render: () => <ModalDemo />,
}

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <ModalDemo size="sm" title="Small Modal" />
      <ModalDemo size="md" title="Medium Modal" />
      <ModalDemo size="lg" title="Large Modal" />
      <ModalDemo size="full" title="Full Width Modal" />
    </div>
  ),
}

export const WithForm: Story = {
  name: 'With Form',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="md">
          <Modal.Header>Create Project</Modal.Header>
          <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-footnote)', fontWeight: '500', color: 'var(--color-fg-secondary)', marginBottom: '6px' }}>
                  Project Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Design System"
                  style={{
                    width: '100%',
                    height: '36px',
                    padding: '0 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-bg-base)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-subhead)',
                    color: 'var(--color-fg-primary)',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-footnote)', fontWeight: '500', color: 'var(--color-fg-secondary)', marginBottom: '6px' }}>
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Brief description…"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-default)',
                    backgroundColor: 'var(--color-bg-base)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-subhead)',
                    color: 'var(--color-fg-primary)',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Create Project</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  },
}

export const Destructive: Story = {
  name: 'Destructive Action',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Delete Item</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <Modal.Header>Delete Project</Modal.Header>
          <Modal.Body>
            <p style={{ margin: 0 }}>
              Are you sure you want to delete <strong style={{ color: 'var(--color-fg-primary)' }}>Design System</strong>?
              This action cannot be undone.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="danger" onClick={() => setOpen(false)}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  },
}

export const NoFooter: Story = {
  name: 'Without Footer',
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="secondary" onClick={() => setOpen(true)}>Open Info Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="md">
          <Modal.Header>Keyboard Shortcuts</Modal.Header>
          <Modal.Body>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                ['⌘ K', 'Open command palette'],
                ['⌘ /', 'Toggle sidebar'],
                ['⌘ S', 'Save changes'],
                ['⌘ Z', 'Undo'],
                ['⌘ ⇧ Z', 'Redo'],
                ['Esc', 'Close dialog'],
              ].map(([key, desc]) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-subhead)', color: 'var(--color-fg-secondary)' }}>{desc}</span>
                  <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-caption1)', padding: '2px 6px', borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-bg-muted)', color: 'var(--color-fg-primary)', border: '1px solid var(--color-border-default)' }}>{key}</kbd>
                </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </>
    )
  },
}
