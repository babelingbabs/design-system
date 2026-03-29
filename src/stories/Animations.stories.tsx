import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  fadeIn,
  slideUp,
  slideDown,
  scaleIn,
  staggerChildren,
  staggerItem,
  cardHover,
  pageTransition,
} from '../animations/variants'
import { Button } from '../components/Button/Button'
import { Mono, Caption } from '../components/Typography/Typography'

/**
 * # Animations
 * Reusable Framer Motion variants. Precise, not bouncy. Architectural.
 *
 * All durations are short (150–300ms). Easing curves are deceleration-based —
 * things arrive quickly and settle, rather than overshooting.
 */
const meta: Meta = {
  title: 'Foundation/Animations',
  parameters: {
    layout: 'padded',
  },
}
export default meta

function Demo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full h-24 rounded-[var(--radius-md)] flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-bg-subtle)', border: '1px solid var(--color-border-subtle)' }}>
        {children}
      </div>
      <Caption>{label}</Caption>
    </div>
  )
}

function Box() {
  return (
    <div
      className="w-10 h-10 rounded-[var(--radius-md)]"
      style={{ backgroundColor: 'var(--color-accent-400)' }}
    />
  )
}

export const AllVariants: StoryObj = {
  name: 'All Variants',
  render: () => {
    const [key, setKey] = useState(0)
    return (
      <div className="p-6 space-y-8" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="flex items-center justify-between">
          <Mono size="sm">Animation variants</Mono>
          <Button size="sm" variant="secondary" onClick={() => setKey((k) => k + 1)}>
            Replay
          </Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <Demo label="fadeIn">
            <motion.div key={`fade-${key}`} variants={fadeIn} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>

          <Demo label="slideUp">
            <motion.div key={`sup-${key}`} variants={slideUp} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>

          <Demo label="slideDown">
            <motion.div key={`sdn-${key}`} variants={slideDown} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>

          <Demo label="scaleIn">
            <motion.div key={`scale-${key}`} variants={scaleIn} initial="hidden" animate="visible">
              <Box />
            </motion.div>
          </Demo>
        </div>

        <div>
          <Caption className="block mb-3">staggerChildren — items appear in sequence</Caption>
          <motion.div
            key={`stagger-${key}`}
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="flex gap-2"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} variants={staggerItem}>
                <div
                  className="w-10 h-10 rounded-[var(--radius-sm)] flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-accent-100)', border: '1px solid var(--color-accent-300)' }}
                >
                  <Mono size="xs" accent>{i + 1}</Mono>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <Caption className="block mb-3">cardHover — hover to see lift</Caption>
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            variants={cardHover}
            className="w-56 p-4 rounded-[var(--radius-lg)] cursor-pointer"
            style={{
              backgroundColor: 'var(--color-bg-base)',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <Mono size="xs" accent className="block mb-1">Hover me</Mono>
            <Caption>2px lift + deeper shadow</Caption>
          </motion.div>
        </div>

        <div>
          <Caption className="block mb-3">pageTransition — enter / exit</Caption>
          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              variants={pageTransition}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="p-4 rounded-[var(--radius-md)] w-56"
              style={{
                backgroundColor: 'var(--color-accent-50)',
                border: '1px solid var(--color-accent-200)',
              }}
            >
              <Mono size="xs" accent>Page {key + 1}</Mono>
              <Caption className="block mt-1">Press replay to transition</Caption>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    )
  },
}
