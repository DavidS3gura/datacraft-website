import * as React from "react"
import { motion, type Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "none"

const OFFSET = 32

function getInitial(direction: Direction) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: OFFSET }
    case "down":
      return { opacity: 0, y: -OFFSET }
    case "left":
      return { opacity: 0, x: OFFSET }
    case "right":
      return { opacity: 0, x: -OFFSET }
    default:
      return { opacity: 0 }
  }
}

interface RevealProps extends React.ComponentProps<typeof motion.div> {
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

/** Fades/slides children into view as they enter the viewport. */
export function Reveal({
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps extends React.ComponentProps<typeof motion.div> {
  staggerDelay?: number
  once?: boolean
  amount?: number
}

/** Wrap a group of children to stagger their entrance; children should use `staggerItem` variants. */
export function StaggerGroup({
  staggerDelay = 0.12,
  once = true,
  amount = 0.2,
  children,
  ...props
}: StaggerProps) {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={containerVariants}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export const StaggerItem = motion.div
