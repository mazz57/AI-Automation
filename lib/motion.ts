import type { Variants } from "framer-motion"

// ─── Easing ───────────────────────────────────────────────────────────────────
export const ease = [0.25, 0.1, 0.25, 1] as const
export const easeOut = [0, 0, 0.2, 1] as const

// ─── Fade Up (scroll-triggered sections) ──────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
}

// ─── Fade In (pure opacity) ───────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease },
  },
}

// ─── Slide in from right ──────────────────────────────────────────────────────
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease },
  },
}

// ─── Scale up (cards, images) ─────────────────────────────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

// ─── Stagger container ────────────────────────────────────────────────────────
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

// ─── Viewport defaults (use once: true everywhere) ───────────────────────────
export const viewport = { once: true, margin: "-60px" } as const
