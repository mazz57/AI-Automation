import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ClientLogos } from "@/components/client-logos"
import { Services } from "@/components/services"
import { ProductShowcase } from "@/components/product-showcase"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global dot-grid background texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Subtle warm ambient glow — top left */}
      <div className="pointer-events-none fixed top-0 left-0 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.03),transparent_60%)] z-0" />
      {/* Cool ambient glow — bottom right */}
      <div className="pointer-events-none fixed bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(148,163,184,0.025),transparent_60%)] z-0" />
      {/* Vignette for cinematic depth */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_20%,rgba(0,0,0,0.4)_100%)]" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ClientLogos />
        <Services />
        <ProductShowcase />
        <Projects />
        <Process />
        <WhyChooseUs />
        <CTA />
        <Footer />
      </div>
    </main>
  )
}
