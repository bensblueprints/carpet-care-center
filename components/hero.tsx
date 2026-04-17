"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Phone, Shield, Sparkles, Star } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { CountUp } from "@/components/count-up";

const stats = [
  { label: "Years Serving OC", value: 60, suffix: "+", icon: Award },
  { label: "IICRC Certified Since", value: 1989, icon: Shield },
  { label: "Master Technician", value: "IICRC", icon: Sparkles },
  { label: "Five-Star Service", value: 5, suffix: "★", icon: Star },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/carpet-in-living-room.avif"
          alt="Freshly cleaned living room carpet"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-noise opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="relative container mx-auto flex min-h-[100svh] flex-col justify-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brand-dark/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-brass backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" />
            Serving Southern Orange County Since {BUSINESS.founded}
          </div>

          <h1 className="mt-6 font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-cream">
            <span className="block text-balance">Carpets that</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brass via-[#E8D4A8] to-brass bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer italic">
                Revitalize
              </span>
            </span>{" "}
            <span className="block text-balance">the whole home.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg md:text-xl text-cream/85 font-light leading-relaxed"
          >
            Family-owned, IICRC Certified since 1989, and led by a Master Textile
            Technician. We refresh, revitalize, and restore the carpets, rugs, and
            upholstery that make your Orange County home feel new again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-brass group">
              Get a Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 bg-transparent px-7 py-3 text-sm font-semibold tracking-wide text-cream transition-all hover:bg-cream hover:text-brand -hover:translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
          }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-card border border-cream/15 bg-brand-dark/35 px-5 py-5 backdrop-blur-md hover:bg-brand-dark/55 transition-colors"
            >
              <s.icon className="h-5 w-5 text-brass" />
              <div className="mt-3 font-display text-3xl md:text-4xl text-cream leading-none">
                {typeof s.value === "number" ? (
                  <CountUp to={s.value} />
                ) : (
                  s.value
                )}
                {s.suffix && <span className="text-brass">{s.suffix}</span>}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cream/70">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-cream/60 text-[10px] uppercase tracking-[0.3em]">
          Scroll
          <div className="h-8 w-px bg-gradient-to-b from-cream/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
