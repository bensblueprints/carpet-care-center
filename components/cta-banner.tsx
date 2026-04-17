"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-burgundy text-cream">
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
      <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-brass/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-brass/10 blur-3xl" />

      <div className="container mx-auto relative py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-brass font-semibold">
            {BUSINESS.tagline}
          </span>
          <h2 className="mt-4 font-display font-light text-4xl md:text-6xl text-cream leading-[1.05]">
            Ready for carpets that feel <em className="text-brass not-italic">like new</em>?
          </h2>
          <p className="mt-5 text-cream/80 text-lg max-w-xl leading-relaxed">
            Free estimates across Southern Orange County. No pressure, no upsells —
            just sixty years of craft and a Master Textile Technician on every job.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-brass group">
              Get a Free Estimate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-7 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-brand transition-colors"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
