"use client";

import { motion } from "framer-motion";
import { Droplets, Footprints, PawPrint, Wind } from "lucide-react";

const problems = [
  {
    icon: Droplets,
    title: "Stubborn stains",
    body: "Red wine, coffee, ink, mud — the spots that shrug off DIY spray-and-scrub sessions.",
  },
  {
    icon: Wind,
    title: "Trapped allergens",
    body: "Dust mites, pollen and pet dander that live deep in the pile and aggravate allergies.",
  },
  {
    icon: PawPrint,
    title: "Pet odors",
    body: "Lingering smells you've stopped noticing but every guest does — neutralized at the source.",
  },
  {
    icon: Footprints,
    title: "Worn traffic lanes",
    body: "Dingy halls and entryways from years of foot traffic, rebuilt to match the room.",
  },
];

export function Problems() {
  return (
    <section className="section bg-cream" aria-label="Common carpet problems">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">Sound familiar?</span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-ink">
            Tired of <em className="text-brand not-italic">dingy, dirty</em> carpets?
          </h2>
          <p className="mt-4 text-ink-muted">
            If your floors are telling on you, we can fix that. Sixty years of Orange
            County homes have taught us exactly what works — and what doesn't.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              className="group relative rounded-card bg-white p-7 border border-black/5 shadow-warm-sm hover:shadow-warm transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-cream transition-colors">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
