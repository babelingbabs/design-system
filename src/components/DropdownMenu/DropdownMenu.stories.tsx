import type { Meta, StoryObj } from '@storybook/react'
import {
  Settings,
  User,
  LogOut,
  Mail,
  CreditCard,
  Bell,
  HelpCircle,
  Trash2,
  Edit,
  Copy,
  Share,
} from 'lucide-react'
import { Button } from '../Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from './index'

const meta: Meta<typeof DropdownMenuContent> = {
  title: 'Overlay/DropdownMenu',
  component: DropdownMenuContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenuContent>

export const Basic: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Help</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithIconsAndShortcuts: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem icon={<User size={14} />} shortcut="⌘P">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem icon={<Mail size={14} />} shortcut="⌘M">
          Messages
        </DropdownMenuItem>
        <DropdownMenuItem icon={<Bell size={14} />} shortcut="⌘N">
          Notifications
        </DropdownMenuItem>
        <DropdownMenuItem icon={<CreditCard size={14} />}>
          Billing
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<Settings size={14} />} shortcut="⌘,">
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<LogOut size={14} />} shortcut="⌘⇧Q">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithGroupsAndSeparators: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem icon={<Edit size={14} />} shortcut="⌘E">
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem icon={<Copy size={14} />} shortcut="⌘C">
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuItem icon={<Share size={14} />} shortcut="⌘S">
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Support</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem icon={<HelpCircle size={14} />}>
            Documentation
          </DropdownMenuItem>
          <DropdownMenuItem icon={<Mail size={14} />}>
            Contact support
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<Trash2 size={14} />}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const WithDisabledItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem icon={<Edit size={14} />}>Edit</DropdownMenuItem>
        <DropdownMenuItem icon={<Copy size={14} />} disabled>
          Duplicate (unavailable)
        </DropdownMenuItem>
        <DropdownMenuItem icon={<Share size={14} />} disabled>
          Share (unavailable)
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem icon={<Trash2 size={14} />}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
