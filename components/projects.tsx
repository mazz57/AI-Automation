"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, TrendingUp, BarChart3, DollarSign, ShoppingCart } from "lucide-react"
import { fadeUp, scaleUp, staggerContainer, viewport } from "@/lib/motion"

const projects = [
  {
    title: "Fintech Dashboard",
    category: "SaaS Product",
    description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    metrics: [
      { label: "ARR", value: "$2.4M", icon: DollarSign },
      { label: "Users", value: "12K", icon: TrendingUp },
    ],
    chartData: [28, 35, 42, 38, 55, 48, 62, 70, 65, 78, 82, 88],
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description: "High-converting online store with seamless checkout flow and inventory management system.",
    metrics: [
      { label: "GMV", value: "$890K", icon: ShoppingCart },
      { label: "Conv.", value: "4.2%", icon: BarChart3 },
    ],
    chartData: [45, 52, 48, 58, 52, 65, 60, 72, 68, 75, 80, 85],
  },
]

export function Projects() {
  return (
    <section id="work" className="relative py-20 sm:py-24 lg:py-32 border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/15 via-background to-background pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(251,191,36,0.02),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16"
        >
          <div>
            <motion.p variants={fadeUp} className="text-[0.8125rem] font-medium text-white/72 uppercase tracking-[0.22em] mb-3 sm:mb-4">
              Our Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Recent projects
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#"
            whileHover={{ x: 3, transition: { duration: 0.18 } }}
            className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-1 shrink-0"
          >
            View all projects
            <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        {/* Cards — richer dashboard previews */}
        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, projectIndex) => (
            <motion.article
              key={project.title}
              variants={scaleUp}
              className="group cursor-pointer"
            >
              {/* Image container — realistic dashboard */}
              <motion.div
                whileHover={{ scale: 1.01, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } }}
                className="relative aspect-[16/10] bg-surface-1/95 rounded-2xl border border-white/[0.1] overflow-hidden mb-5 sm:mb-6 shadow-[0_14px_48px_rgba(0,0,0,0.38),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                <div className="absolute inset-0 p-3 sm:p-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <div className="w-2 h-2 rounded-full bg-green-500/80" />
                    <span className="text-[9px] text-muted-foreground/50 ml-2 font-mono">dashboard.app</span>
                  </div>

                  <div className="flex gap-2 mb-3">
                    {project.metrics.map((metric) => (
                      <div 
                        key={metric.label} 
                        className="flex-1 bg-surface-2/80 rounded-lg border border-white/[0.08] p-2 sm:p-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]"
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <metric.icon size={10} className="text-muted-foreground/70" />
                          <span className="text-[8px] sm:text-[9px] text-white/68 uppercase tracking-[0.18em]">{metric.label}</span>
                        </div>
                        <span className="text-sm sm:text-base font-semibold text-white">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-surface-2/60 rounded-lg border border-white/[0.08] p-2 sm:p-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] sm:text-[10px] text-white/76 font-medium">Performance</span>
                      <span className="text-[8px] sm:text-[9px] text-emerald-400">+24%</span>
                    </div>
                    <div className="h-10 sm:h-14 flex items-end gap-0.5 sm:gap-1">
                      {project.chartData.map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm transition-all duration-300"
                          style={{ 
                            height: `${h}%`,
                            background: i >= 10 
                              ? `linear-gradient(to top, rgba(251,191,36,0.5), rgba(251,191,36,0.25))` 
                              : `rgba(255,255,255,${0.08 + (h / 100) * 0.1})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-2 sm:mt-3 space-y-1.5">
                    {[0.7, 0.5, 0.35].map((w, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-surface-3/70 rounded-full border border-white/[0.06]" />
                        <div className="flex-1 space-y-1">
                          <div className="h-1.5 sm:h-2 bg-surface-3/50 rounded" style={{ width: `${w * 100}%` }} />
                          <div className="h-1 sm:h-1.5 bg-surface-3/30 rounded w-1/3" />
                        </div>
                        <div className="text-[8px] sm:text-[9px] text-muted-foreground/70">{["Active", "Pending", "New"][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <div className="space-y-2">
                <span className="text-[0.75rem] font-medium text-white/72 uppercase tracking-[0.22em]">
                  {project.category}
                </span>
                <motion.h3
                  whileHover={{ x: 3, transition: { duration: 0.18 } }}
                  className="text-lg sm:text-xl font-semibold text-white group-hover:text-white/80 transition-colors inline-flex items-center gap-1.5"
                >
                  {project.title}
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 -translate-y-0.5 group-hover:opacity-50 transition-opacity duration-200"
                  />
                </motion.h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
