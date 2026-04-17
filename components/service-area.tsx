"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

export function ServiceArea() {
  return (
    <section className="section bg-cream-dark/40" aria-label="Service area">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Service Area</span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-ink">
            Proudly serving <em className="text-brand not-italic">Southern Orange County</em>.
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed max-w-lg">
            Based in Mission Viejo, we work across the Saddleback Valley and the
            surrounding cities. If your home is nearby and not on this list, just call —
            we probably cover you.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {BUSINESS.serviceArea.map((c) => (
              <motion.li
                key={c}
                variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-brand/15 px-4 py-1.5 text-sm font-medium text-ink shadow-warm-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-brand" />
                {c}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-card overflow-hidden shadow-warm-lg border border-black/5"
        >
          <div className="aspect-[4/3] w-full bg-brand-dark">
            <iframe
              title="Carpet Care Center service area map"
              src="https://www.google.com/maps?q=23632+Via+Fabricante+Suite+C+Mission+Viejo+CA+92691&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-4 py-2 text-xs font-semibold text-brand shadow-warm-sm border border-brand/10">
            Mission Viejo HQ
          </div>
        </motion.div>
      </div>
    </section>
  );
}
