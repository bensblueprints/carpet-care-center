"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Home, ShieldCheck, Sparkles } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "IICRC Certified Firm" },
  { icon: Award, label: "Master Textile Technician" },
  { icon: Sparkles, label: "Serving OC Since 1965" },
  { icon: BadgeCheck, label: "Licensed & Insured" },
  { icon: Home, label: "Orange County Locals" },
];

export function TrustBar() {
  return (
    <section aria-label="Credentials" className="relative -mt-px border-y border-brand/10 bg-cream-dark/60 backdrop-blur">
      <div className="container mx-auto py-6">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
        >
          {badges.map((b) => (
            <motion.li
              key={b.label}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center gap-2.5 text-ink/75"
            >
              <b.icon className="h-5 w-5 text-brand" />
              <span className="text-xs md:text-sm uppercase tracking-[0.16em] font-medium">
                {b.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
