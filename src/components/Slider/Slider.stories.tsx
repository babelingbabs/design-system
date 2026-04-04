import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Slider } from './Slider'

/**
 * # Slider
 * Custom track + thumb slider with pointer drag support.
 * Fully keyboard accessible: arrow keys, Home/End, Shift+arrow for large steps.
 */
const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Slider>

function Controlled(props: Omit<React.ComponentProps<typeof Slider>, 'value' | 'onChange'> & { defaultValue?: number }) {
  const [value, setValue] = useState(props.defaultValue ?? 50)
  return <Slider {...props} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Controlled label="Volume" showValue defaultValue={60} />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '288px' }}>
      <Controlled size="sm" label="Small" showValue defaultValue={30} />
      <Controlled size="md" label="Medium" showValue defaultValue={50} />
      <Controlled size="lg" label="Large" showValue defaultValue={70} />
    </div>
  ),
}

export const WithStep: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '288px' }}>
      <Controlled label="Steps of 10" step={10} showValue defaultValue={40} />
      <Controlled label="Steps of 25" step={25} showValue defaultValue={50} />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-72">
      <Slider value={40} onChange={() => {}} label="Disabled" showValue disabled />
    </div>
  ),
}

export const FormExample: Story = {
  name: 'Settings Panel',
  render: () => {
    function Settings() {
      const [volume, setVolume] = useState(72)
      const [brightness, setBrightness] = useState(85)
      const [fontSize, setFontSize] = useState(16)

      return (
        <div
          style={{
            width: '360px',
            padding: '20px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border-subtle)',
            backgroundColor: 'var(--color-bg-base)',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600, color: 'var(--color-fg-primary)', margin: 0 }}>
            Display & Sound
          </p>
          <Slider value={volume} onChange={setVolume} label="Volume" showValue min={0} max={100} />
          <Slider value={brightness} onChange={setBrightness} label="Brightness" showValue min={0} max={100} />
          <Slider value={fontSize} onChange={setFontSize} label="Font size" showValue min={10} max={24} step={1} />
        </div>
      )
    }
    return <Settings />
  },
}
