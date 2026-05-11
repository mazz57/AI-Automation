"use client"

import { motion } from "framer-motion"
import { Search, FileText, Hammer, Rocket } from "lucide-react"
import { fadeUp, staggerContainer, viewport } from "@/lib/motion"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business, goals, and challenges to understand exactly what you need.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Proposal",
    description: "A detailed roadmap with timeline, deliverables, and transparent pricing for your approval.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build",
    description: "Our team executes with precision, keeping you updated at every milestone along the way.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    description: "Launch your solution with confidence. We provide support and optimization post-launch.",
  },
]

const stepItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-24 lg:py-32 border-y border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/25 via-surface-1/10 to-background pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-[0.8125rem] font-medium text-white/72 uppercase tracking-[0.22em] mb-3 sm:mb-4">
            Our Process
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
            How we work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg">
            A streamlined approach to deliver results efficiently without the overhead.
          </motion.p>
        </motion.div>

        {/* Steps — coordinated stagger via container variants */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {steps.map((step, i) => (
            <motion.div key={step.number} variants={stepItem} className="relative">
              {i < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-8 left-[60%] h-px bg-white/[0.08] origin-left"
                  style={{ width: "calc(100% - 10px)" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}

              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="relative cursor-default"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-surface-2 rounded-2xl flex items-center justify-center shrink-0 border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                    <step.icon size={22} className="text-foreground/80" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-bold text-white/[0.12]">{step.number}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
