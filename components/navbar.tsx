"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollY = useMotionValue(0)
  const bgOpacity = useTransform(scrollY, [0, 48], [0, 0.92])
  const borderOpacity = useTransform(scrollY, [0, 48], [0, 1])

  useEffect(() => {
    const update = () => scrollY.set(window.scrollY)
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [scrollY])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Scroll-driven blur backdrop with surface color */}
      <motion.div
        className="absolute inset-0 backdrop-blur-xl bg-surface-1 pointer-events-none"
        style={{ opacity: bgOpacity }}
      />
      {/* Scroll-driven bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06] pointer-events-none"
        style={{ opacity: borderOpacity }}
      />

      <nav className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.15 }}
              className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center"
            >
              <span className="text-background font-bold text-sm">N</span>
            </motion.div>
            <span className="text-lg font-semibold tracking-tight">Nexus</span>
          </Link>

          {/* Desktop nav links — staggered entrance */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
              <Button className="bg-foreground text-background hover:bg-white/90 rounded-full px-6 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.5)]">
                Start a Project
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile toggle — icon crossfade */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.88 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu — height collapse + stagger items */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:hidden overflow-hidden border-t border-white/[0.06]"
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                }}
                className="flex flex-col gap-1 py-4"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] } },
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 py-2.5 px-2"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 6 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] } },
                  }}
                  className="pt-2"
                >
                  <Button className="bg-foreground text-background hover:bg-white/90 rounded-full w-full mt-2 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_1px_2px_rgba(0,0,0,0.5)]">
                    Start a Project
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
