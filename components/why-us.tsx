"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";

const points = [
  "IICRC Certified Firm since 1989 — 36+ years of proof",
  "60 years of Saddleback Valley heritage under one roof",
  "Family-owned, owner-operated — never a call center",
  "Pet- and kid-safe, non-toxic cleaning solutions",
  "100% satisfaction guarantee on every job",
  "Fully licensed and insured in the state of California",
];

export function WhyUs() {
  return (
    <section id="about" className="section bg-cream" aria-label="About Carpet Care Center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Why Carpet Care Center</span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-ink leading-[1.05]">
            Six decades of Orange County carpets, <em className="text-brand not-italic">one standard of care</em>.
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed">
            Kurt Holsinger started cleaning carpet in 1979 in Northern California. When
            Larry Auer — who had been serving Saddleback Valley homes since 1965 —
            decided to retire in 2012, the two companies merged to form Carpet Care
            Center, Inc. What you get today is a business built on sixty years of
            accumulated craft, with a Master Textile Technician on every job.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand/8 text-brand">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-ink leading-snug">{p}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Request a Free Estimate</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-warm-lg">
            <Image
              src="/images/morning-coffee-clean-carpets.avif"
              alt="Clean Orange County living room carpet"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 md:-left-10 rounded-card bg-white/95 backdrop-blur p-5 shadow-warm-lg border border-brass/25 max-w-[220px]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brass text-cream">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-lg leading-none text-brand">IICRC</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  Certified Firm
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-ink leading-snug">
              Certified since <strong className="text-brand">1989</strong>. Master
              Textile Technician #6256.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -top-5 right-4 md:-right-8 rounded-card bg-brand text-cream px-5 py-3 shadow-warm-lg"
          >
            <div className="font-display text-3xl leading-none">60+</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-cream/80 mt-1">
              Years Since 1965
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
