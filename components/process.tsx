"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Droplets, SprayCan, ThumbsUp } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Free Estimate",
    body: "We walk the home, identify fibers, note stains and traffic, and give you a flat price — no surprises.",
  },
  {
    n: "02",
    icon: SprayCan,
    title: "Pre-Treatment",
    body: "We vacuum, apply fiber-appropriate pre-spray, and agitate to break down soils and spots.",
  },
  {
    n: "03",
    icon: Droplets,
    title: "Deep Clean",
    body: "Truck-mounted hot water extraction rinses everything — soil, pre-spray, allergens — out of the fibers.",
  },
  {
    n: "04",
    icon: ThumbsUp,
    title: "Satisfaction Check",
    body: "We walk every room with you. If something isn't right, we stay until it is. That's the guarantee.",
  },
];

export function Process() {
  return (
    <section id="process" className="section bg-brand-dark text-cream relative overflow-hidden" aria-label="Our process">
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-[11px] uppercase tracking-[0.25em] text-brass font-semibold">
            How It Works
          </span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-cream">
            Four steps, zero <em className="text-brass not-italic">guesswork</em>.
          </h2>
          <p className="mt-4 text-cream/75 leading-relaxed">
            The same process every time, refined over 60 years of residential work in
            Southern Orange County.
          </p>
        </motion.div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5"
          >
            {steps.map((s) => (
              <motion.div
                key={s.n}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="relative text-center lg:text-left"
              >
                <div className="mx-auto lg:mx-0 relative inline-flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-brass text-brand-dark shadow-[0_0_0_6px_rgba(107,31,42,1),0_0_0_7px_rgba(184,149,106,0.5)]">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-6 font-display text-5xl text-brass/30 leading-none">{s.n}</div>
                <h3 className="mt-2 font-display text-2xl text-cream">{s.title}</h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed max-w-xs mx-auto lg:mx-0">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
