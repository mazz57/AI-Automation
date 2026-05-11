"use client"

import { motion } from "framer-motion"
import { Zap, Target, Layers, Code, MousePointer } from "lucide-react"
import { fadeUp, slideInRight, staggerContainer, viewport } from "@/lib/motion"

const reasons = [
  {
    icon: Zap,
    title: "Fast Execution",
    description: "We move quickly without sacrificing quality. Most projects launch in weeks, not months.",
  },
  {
    icon: Target,
    title: "Business-Focused",
    description: "Every decision is made with your business goals in mind. We build for ROI, not just aesthetics.",
  },
  {
    icon: Layers,
    title: "Scalable Systems",
    description: "Architecture designed to grow with you. No rebuilds needed when you hit the next milestone.",
  },
  {
    icon: Code,
    title: "Modern Stack",
    description: "We use cutting-edge technologies that ensure performance, security, and maintainability.",
  },
  {
    icon: MousePointer,
    title: "Conversion-Focused",
    description: "Design that drives action. Every element is optimized to convert visitors into customers.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-32">
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_20%_50%,rgba(255,255,255,0.015),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
          {/* Left — sticky on lg, staggered text entrance */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.p variants={fadeUp} className="text-sm text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
                Why Nexus
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
                Built for founders who move fast
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                We&apos;re not a traditional agency. We&apos;re a focused team of engineers and designers who
                understand that time-to-market matters. No endless meetings, no scope creep — just
                results that move the needle.
              </motion.p>
            </motion.div>
          </div>

          {/* Right — reasons slide in from right, staggered */}
          <motion.div
            variants={staggerContainer(0.09, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="space-y-2"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={slideInRight}
                whileHover={{
                  x: 4,
                  backgroundColor: "rgba(255,255,255,0.025)",
                  transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
                }}
                className="group flex gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl border border-transparent hover:border-white/[0.06] transition-colors duration-200 cursor-default"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-surface-2 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-surface-3 transition-colors duration-200 border border-white/[0.04]">
                  <reason.icon size={18} className="text-foreground/80" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
