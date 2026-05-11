"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, ArrowUpRight } from "lucide-react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
})

const chartBars = [38, 52, 44, 68, 58, 80, 62, 88, 70, 94, 78, 90]

const metrics = [
  { label: "Monthly Revenue", value: "$124K", change: "+18%", positive: true },
  { label: "Active Users", value: "8,294", change: "+24%", positive: true },
  { label: "Conversion Rate", value: "4.7%", change: "+1.2%", positive: true },
]

const recentActivity = [
  { name: "Lead captured", action: "Qualification in progress", time: "2m ago", dot: "bg-emerald-400" },
  { name: "Workflow executed", action: "Automation triggered", time: "5m ago", dot: "bg-blue-400" },
  { name: "Campaign sent", action: "Email delivery complete", time: "12m ago", dot: "bg-amber-400" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">

      {/* Warm radial glow — hero centerpiece */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.06),transparent_60%)] pointer-events-none" />

      {/* Cool accent glow — top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_top_right,rgba(148,163,184,0.04),transparent_60%)] pointer-events-none" />

      {/* Soft neutral glow behind dashboard */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] rounded-full bg-white/[0.015] blur-[100px] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 xl:gap-20 items-center">

          {/* ── Left Content ─────────────────────── */}
          <div className="space-y-6 sm:space-y-8 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Badge */}
            <motion.div {...fadeUp(0)} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-surface-1/80 text-[13px] text-muted-foreground tracking-wide shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]">
                <Sparkles size={13} className="text-amber-400/70" />
                AI-Powered Automation Agency
              </span>
            </motion.div>

            {/* Headline — brighter white */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-semibold tracking-[-0.03em] leading-[1.08] text-balance text-white"
            >
              Build systems that{" "}
              <span className="text-white/40">scale your</span>{" "}
              business
            </motion.h1>

            {/* Body copy */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] text-muted-foreground leading-relaxed"
            >
              We design and ship AI automation, SaaS products, and high-converting
              websites — so your team can focus on what matters most.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.24)}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
            >
              {/* Primary — warm accent glow */}
              <button className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-background text-sm font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.5),0_4px_16px_rgba(251,191,36,0.1)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.5),0_8px_24px_rgba(251,191,36,0.15)] hover:bg-white/95 transition-all duration-200">
                Start a Project
                <ArrowRight size={15} className="transition-transform duration-150 group-hover:translate-x-0.5" />
              </button>

              {/* Secondary */}
              <button className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/[0.1] bg-surface-1/50 text-sm font-medium text-foreground/90 hover:bg-surface-2 hover:border-white/[0.15] transition-all duration-150 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
                View Our Work
                <ArrowUpRight size={14} className="opacity-50 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div {...fadeUp(0.32)} className="flex items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex -space-x-2">
                {["#f59e0b", "#3b82f6", "#8b5cf6", "#10b981"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-background"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <p className="text-[13px] text-muted-foreground">
                Trusted by <span className="text-white font-medium">40+ companies</span> worldwide
              </p>
            </motion.div>
          </div>

          {/* ── Right Visual — Dashboard ──────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mt-10 lg:mt-0"
          >
            {/* Outer glow ring with warm tint */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] via-amber-500/[0.03] to-transparent blur-sm pointer-events-none" />

            {/* Dashboard shell */}
            <div className="relative bg-surface-1 rounded-2xl border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.03),inset_0_1px_0_0_rgba(255,255,255,0.05)] overflow-hidden">

              {/* Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[11px] text-muted-foreground/60 font-mono tracking-wide">automation.app/dashboard</span>
                <div className="w-16" />
              </div>

              <div className="p-3 sm:p-5 space-y-3 sm:space-y-4">

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.08 }}
                      className="bg-surface-2/60 rounded-xl border border-white/[0.06] p-2.5 sm:p-3.5 space-y-1.5 sm:space-y-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]"
                    >
                      <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-none truncate">{m.label}</p>
                      <p className="text-base sm:text-xl font-semibold tracking-tight text-white">{m.value}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-emerald-400">
                        <TrendingUp size={9} />
                        {m.change}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Chart area — warm accent bars */}
                <div className="bg-surface-2/40 rounded-xl border border-white/[0.06] p-3 sm:p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] sm:text-[12px] text-white/80 font-medium">Revenue overview</span>
                    <span className="text-[10px] sm:text-[11px] text-muted-foreground/60">Last 12 months</span>
                  </div>
                  <div className="h-20 sm:h-24 flex items-end gap-1 sm:gap-1.5">
                    {chartBars.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ 
                          background: i >= 9 
                            ? `linear-gradient(to top, rgba(251,191,36,0.6), rgba(251,191,36,0.3))` 
                            : `rgba(255,255,255,${0.06 + (h / 100) * 0.12})`
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 0.55 + i * 0.04, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                  {/* X-axis labels */}
                  <div className="flex justify-between mt-2">
                    {["Jan", "Apr", "Jul", "Oct", "Dec"].map((l) => (
                      <span key={l} className="text-[9px] sm:text-[10px] text-muted-foreground/50">{l}</span>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="bg-surface-2/40 rounded-xl border border-white/[0.06] p-3 sm:p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] sm:text-[12px] text-white/80 font-medium">Recent activity</span>
                    <span className="text-[10px] sm:text-[11px] text-amber-400/80 cursor-pointer hover:text-amber-400 transition-colors">View all</span>
                  </div>
                  <div className="space-y-2 sm:space-y-2.5">
                    {recentActivity.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.08 }}
                        className="flex items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
                          <div className="min-w-0">
                            <p className="text-[11px] sm:text-[12px] font-medium leading-none mb-0.5 truncate text-white/90">{item.name}</p>
                            <p className="text-[10px] sm:text-[11px] text-muted-foreground truncate">{item.action}</p>
                          </div>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-muted-foreground/50 shrink-0">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Floating pills — hidden on very small screens */}
            <motion.div
              initial={{ opacity: 0, y: 12, x: -8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute -bottom-4 -left-3 sm:-left-5 hidden sm:flex items-center gap-2.5 bg-surface-1 border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.04)]"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center shrink-0">
                <Zap size={13} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-[12px] font-medium leading-none mb-0.5 text-white/90">Automation triggered</p>
                <p className="text-[11px] text-muted-foreground">Lead scored &amp; routed in 0.4s</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -12, x: 8 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="absolute -top-4 -right-3 sm:-right-5 hidden sm:flex items-center gap-2.5 bg-surface-1 border border-white/[0.08] rounded-xl px-3 sm:px-4 py-2.5 shadow-[0_12px_32px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.04)]"
            >
              <div className="w-7 h-7 rounded-full bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0">
                <Users size={13} className="text-amber-400" />
              </div>
              <div>
                <p className="text-[12px] font-medium leading-none mb-0.5 text-white/90">+128 users this week</p>
                <p className="text-[11px] text-muted-foreground">Organic &amp; referral traffic</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
