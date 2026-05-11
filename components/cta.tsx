"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { fadeUp, staggerContainer, viewport } from "@/lib/motion"

export function CTA() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 border-t border-white/[0.05]">
      {/* Layered section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/20 via-background to-background pointer-events-none" />
      
      {/* Top gradient separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card scales up as it enters viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-1 border border-white/[0.08] p-8 sm:p-12 lg:p-20 shadow-[0_24px_64px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.04)]"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[300px] sm:h-[400px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          {/* Content — staggered children */}
          <motion.div
            variants={staggerContainer(0.1, 0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-balance text-white"
            >
              Ready to build something great?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-xl mx-auto"
            >
              Let&apos;s discuss how we can help you achieve your goals. No commitment,
              just a conversation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full bg-foreground text-background text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.4)] hover:bg-white/90 transition-colors duration-150"
              >
                Start a Project
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/[0.1] bg-surface-2/50 text-foreground text-sm font-medium hover:bg-surface-2 hover:border-white/[0.15] transition-all duration-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]"
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
