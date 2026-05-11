"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Linkedin, Github } from "lucide-react"
import { fadeUp, viewport } from "@/lib/motion"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Documentation", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
]

// Each column staggers independently using a custom delay via `custom` prop
const colVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.1] bg-gradient-to-b from-surface-2/45 to-background">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-1/30 to-surface-1/10 pointer-events-none" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          <motion.div custom={0} variants={colVariant} className="col-span-2 sm:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">N</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">Omnimate</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              We build AI-powered systems, SaaS products, and websites that help businesses grow and scale.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -2, scale: 1.15, transition: { duration: 0.15 } }}
                  className="text-muted-foreground/70 hover:text-foreground transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div custom={1} variants={colVariant}>
            <h4 className="font-medium mb-4 text-sm tracking-[0.16em] uppercase text-white/80">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div custom={2} variants={colVariant}>
            <h4 className="font-medium mb-4 text-sm tracking-[0.16em] uppercase text-white/80">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div custom={3} variants={colVariant} className="col-span-1">
            <h4 className="font-medium mb-4 text-sm tracking-[0.16em] uppercase text-white/80">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
        >
          <p className="text-muted-foreground/80 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Omnimate. All rights reserved.
          </p>
          <p className="text-muted-foreground/80 text-sm text-center sm:text-right">
            Built with precision in San Francisco.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
