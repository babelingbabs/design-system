import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from './DropdownMenu'
import { Button } from '../Button'

/**
 * # DropdownMenu
 * Accessible dropdown menu with keyboard navigation, portal rendering, and spring animation.
 *
 * - Opens on click, closes on outside click or `Escape`
 * - Arrow keys navigate items, `Enter` selects, `Tab` closes
 * - Items support icon, label, shortcut text, and disabled state
 */
const meta: Meta = {
  title: 'Components/DropdownMenu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}
export default meta

type Story = StoryObj

const GearIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.8 2.8l1.06 1.06M10.14 10.14l1.06 1.06M2.8 11.2l1.06-1.06M10.14 3.86l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <circle cx="7" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M1.5 12.5c0-3.03 2.46-5.5 5.5-5.5s5.5 2.47 5.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M2 3.5h10M5 3.5V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1M3.5 3.5l.5 8h6l.5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Default: Story = {
  name: 'Default',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary" trailingIcon={
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        }>
          Options
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<UserIcon />} onSelect={() => alert('Profile')}>
          Profile
        </DropdownItem>
        <DropdownItem icon={<GearIcon />} shortcut="⌘," onSelect={() => alert('Settings')}>
          Settings
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem
          icon={<TrashIcon />}
          onSelect={() => alert('Delete')}
          className="text-[var(--color-error)]"
        >
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
}

export const WithLabel: Story = {
  name: 'With label and sections',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Account</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownItem icon={<UserIcon />}>Profile</DropdownItem>
        <DropdownItem icon={<GearIcon />} shortcut="⌘,">Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>Team</DropdownLabel>
        <DropdownItem>Invite members</DropdownItem>
        <DropdownItem disabled>Manage roles</DropdownItem>
        <DropdownSeparator />
        <DropdownItem>Sign out</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
}

export const WithDisabled: Story = {
  name: 'Disabled items',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="ghost">Actions</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem shortcut="⌘Z">Undo</DropdownItem>
        <DropdownItem shortcut="⌘⇧Z" disabled>Redo</DropdownItem>
        <DropdownSeparator />
        <DropdownItem shortcut="⌘X">Cut</DropdownItem>
        <DropdownItem shortcut="⌘C">Copy</DropdownItem>
        <DropdownItem shortcut="⌘V" disabled>Paste</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
}

export const Controlled: Story = {
  name: 'Tracking selection',
  render: () => {
    const [selected, setSelected] = useState<string | null>(null)
    const themes = ['System', 'Light', 'Dark']
    return (
      <div className="flex flex-col items-center gap-4" style={{ fontFamily: 'var(--font-sans)' }}>
        <DropdownMenu>
          <DropdownTrigger>
            <Button variant="secondary">{selected ?? 'Select theme'}</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownLabel>Theme</DropdownLabel>
            {themes.map((t) => (
              <DropdownItem key={t} onSelect={() => setSelected(t)}>
                {t}
              </DropdownItem>
            ))}
          </DropdownContent>
        </DropdownMenu>
        {selected && (
          <p className="text-sm text-[var(--color-fg-secondary)]">
            Selected: <strong>{selected}</strong>
          </p>
        )}
      </div>
    )
  },
}
