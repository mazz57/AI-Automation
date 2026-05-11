"use client"

import { motion } from "framer-motion"
import { Bot, Code2, Palette, TrendingUp } from "lucide-react"
import { fadeUp, scaleUp, staggerContainer, viewport } from "@/lib/motion"

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Custom AI agents and workflow automation that eliminate repetitive tasks and scale your operations effortlessly.",
  },
  {
    icon: Code2,
    title: "SaaS Products",
    description:
      "End-to-end SaaS development from MVP to scale. Modern architecture built for performance and growth.",
  },
  {
    icon: Palette,
    title: "Web Design & Development",
    description:
      "High-converting websites with premium aesthetics. From landing pages to complex web applications.",
  },
  {
    icon: TrendingUp,
    title: "Marketing & SEO",
    description:
      "Data-driven marketing strategies and SEO optimization to increase visibility and drive qualified traffic.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/20 via-background to-background pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(255,255,255,0.015),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — staggered children */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-2xl mb-10 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-[0.8125rem] font-medium text-white/72 uppercase tracking-[0.22em] mb-3 sm:mb-4">
            Services
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
            Everything you need to grow
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg">
            From strategy to execution, we deliver solutions that drive real business results.
          </motion.p>
        </motion.div>

        {/* Cards — staggered scale-up + whileHover lift */}
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={scaleUp}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } }}
              className="group relative bg-surface-1/95 rounded-2xl border border-white/8 p-6 sm:p-8 hover:border-white/[0.14] transition-colors duration-300 cursor-default shadow-[0_10px_30px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.04)]"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-surface-2 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-surface-3 transition-colors duration-300 border border-white/6">
                <service.icon size={22} className="text-foreground/80" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{service.description}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
