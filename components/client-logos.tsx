"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer, viewport } from "@/lib/motion"

const logos = [
  { name: "Vercel" },
  { name: "Linear" },
  { name: "Stripe" },
  { name: "Notion" },
  { name: "Figma" },
  { name: "Slack" },
]

const logoItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function ClientLogos() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 border-y border-white/[0.06]">
      {/* Subtle gradient overlay for section depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center text-sm text-muted-foreground mb-8 sm:mb-10"
        >
          Trusted by teams at
        </motion.p>

        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-8"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={logoItem}
              whileHover={{ opacity: 1, scale: 1.06, transition: { duration: 0.18 } }}
              className="text-muted-foreground/35 hover:text-muted-foreground/70 cursor-default select-none transition-colors duration-200"
            >
              <span className="text-lg sm:text-xl font-semibold tracking-tight">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
