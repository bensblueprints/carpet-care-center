"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const SERVICES = [
  {
    slug: "residential",
    title: "Residential Carpet Cleaning",
    blurb: "Truck-mounted hot water extraction that lifts dirt DIY rentals can't reach.",
    image: "/images/residential-carpet-cleaning.avif",
  },
  {
    slug: "commercial",
    title: "Commercial Carpet Cleaning",
    blurb: "Offices, retail, and HOA common areas — scheduled around your hours.",
    image: "/images/commercial-carpet-cleaning.avif",
  },
  {
    slug: "upholstery",
    title: "Upholstery Cleaning",
    blurb: "Sofas, sectionals and dining chairs refreshed with fabric-safe solutions.",
    image: "/images/upholstery.avif",
  },
  {
    slug: "tile-grout",
    title: "Tile & Grout Cleaning",
    blurb: "Deep-pressure steam restores grout lines to their original color.",
    image: "/images/tile-grout.avif",
  },
  {
    slug: "drapery",
    title: "Drapery Cleaning",
    blurb: "On-site drapery cleaning that protects pleats, liners and hardware.",
    image: "/images/draperies.avif",
  },
  {
    slug: "pet-odor",
    title: "Pet Odor & Stain Removal",
    blurb: "Enzyme-based treatment that neutralizes odors at the source — pad and all.",
    image: "/images/pet-odor-removal.avif",
  },
  {
    slug: "area-rug",
    title: "Area Rug Cleaning",
    blurb: "Oriental, wool and synthetic rugs cleaned in-plant or in-home.",
    image: "/images/area-rug-cleaning.avif",
  },
  {
    slug: "repairs",
    title: "Carpet Repairs",
    blurb: "Reseaming, patching, and power stretching to make carpet look new again.",
    image: "/images/carpet-repairs.avif",
  },
];

export function Services() {
  return (
    <section id="services" className="section relative bg-cream-dark/40" aria-label="Our services">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="eyebrow">Our Services</span>
            <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-ink">
              A full-service clean, <em className="text-brand not-italic">tailored</em> to your home.
            </h2>
          </div>
          <p className="max-w-md text-ink-muted">
            Every fiber is different. We identify it, we treat it right, and we leave
            it looking the way you remember — from Mission Viejo to Irvine.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((s) => (
            <motion.a
              key={s.slug}
              href="#contact"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative rounded-card overflow-hidden bg-white border border-black/5 shadow-warm-sm hover:shadow-brass hover:border-brass/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl text-ink leading-snug">{s.title}</h3>
                  <ArrowUpRight className="h-4 w-4 text-brand/60 mt-1 transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </div>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.blurb}</p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                  Learn more
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
