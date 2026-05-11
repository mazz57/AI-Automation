"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Users, Mail, TrendingUp, MoreHorizontal } from "lucide-react"
import { fadeUp, scaleUp, staggerContainer, viewport } from "@/lib/motion"

const leads = [
  { name: "Sarah Chen", email: "sarah@company.co", status: "Qualified", score: 92 },
  { name: "Marcus Johnson", email: "marcus@startup.io", status: "New", score: 78 },
  { name: "Elena Rodriguez", email: "elena@agency.com", status: "Contacted", score: 85 },
  { name: "Alex Kim", email: "alex@venture.co", status: "Qualified", score: 94 },
]

const stats = [
  { icon: Users, label: "Total Leads", value: "12,847", change: "+12%" },
  { icon: Mail, label: "Contacted", value: "8,234", change: "+8%" },
  { icon: TrendingUp, label: "Qualified", value: "3,421", change: "+24%" },
  { icon: Users, label: "Converted", value: "1,892", change: "+18%" },
]

const tableRow = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function ProductShowcase() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 border-y border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/20 via-background to-background pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <motion.p variants={fadeUp} className="text-[0.8125rem] font-medium text-white/72 uppercase tracking-[0.22em] mb-3 sm:mb-4">
            Featured Product
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
            Automation Platform
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-base sm:text-lg">
            An intelligent system that automates workflows, scores leads, and nurtures relationships for maximum conversion.
          </motion.p>
        </motion.div>

        {/* Dashboard card — scale-up reveal */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="bg-surface-1/95 rounded-2xl border border-white/[0.1] overflow-hidden shadow-[0_28px_72px_rgba(0,0,0,0.42),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
        >
          <div className="border-b border-white/[0.08] px-4 sm:px-6 py-3.5 sm:py-4.5 flex items-center justify-between gap-4 bg-white/[0.015]">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-sm font-medium text-foreground/90">Dashboard</div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground/60">
              <span className="text-xs">app.omnimate.io</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <motion.div
              variants={staggerContainer(0.08, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="bg-surface-2/75 rounded-xl border border-white/[0.08] p-3 sm:p-4 cursor-default shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <stat.icon size={16} className="text-muted-foreground/70" />
                    <span className="text-xs text-green-400">{stat.change}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground/90 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <div className="bg-surface-2/55 rounded-xl border border-white/[0.08] overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
              <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.015]">
                <h3 className="font-medium text-sm sm:text-base text-foreground/90">Recent Leads</h3>
                <button className="text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>
              <motion.div
                variants={staggerContainer(0.07, 0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="divide-y divide-white/[0.04]"
              >
                {leads.map((lead) => (
                  <motion.div
                    key={lead.email}
                    variants={tableRow}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.02)", transition: { duration: 0.12 } }}
                    className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-surface-3 rounded-full flex items-center justify-center shrink-0 border border-white/[0.04]">
                        <span className="text-xs sm:text-sm font-medium text-foreground/80">
                          {lead.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-sm truncate text-foreground/90">{lead.name}</div>
                        <div className="text-xs text-muted-foreground/90 truncate hidden sm:block">{lead.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 shrink-0">
                      <span
                        className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                          lead.status === "Qualified"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : lead.status === "Contacted"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "bg-surface-3 text-muted-foreground/90 border border-white/[0.06]"
                        }`}
                      >
                        {lead.status}
                      </span>
                      <div className="text-sm font-medium hidden sm:block text-foreground/75">{lead.score}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
