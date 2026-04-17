"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Review = {
  name: string;
  city: string;
  body: string;
  featured?: boolean;
};

const reviews: Review[] = [
  {
    name: "Harold S.",
    city: "Irvine",
    body: "The carpet smells and looks great! Kurt cleaned all of the cat urine out of the carpet. I honestly didn't think it was salvageable — I was ready to rip it up and replace it. Game changer.",
    featured: true,
  },
  {
    name: "Jennifer M.",
    city: "Mission Viejo",
    body: "We hosted Thanksgiving and, well — red wine happened. Called Kurt the next morning and he was out that afternoon. Stain is completely gone. Our go-to from here on out.",
  },
  {
    name: "David R.",
    city: "Laguna Hills",
    body: "Hired Carpet Care Center for a rental turnover. Traffic lanes in the hallway looked unrecoverable. They look brand new. Tenants moved in the next day.",
  },
  {
    name: "Sarah K.",
    city: "Lake Forest",
    body: "Kurt is the real deal. Explained exactly what fiber our rug was, what he was using on it and why. No upsells, no gimmicks. Wool area rug looks incredible.",
  },
  {
    name: "Michael T.",
    city: "Rancho Santa Margarita",
    body: "Had them out for tile and grout in the kitchen and entry. I didn't realize how discolored the grout had gotten until I saw it after. Night and day.",
  },
  {
    name: "Patricia W.",
    city: "Aliso Viejo",
    body: "Third time using them over the years. Always on time, always careful with the furniture, always a fair price. Family business done right.",
  },
];

export function Testimonials() {
  const featured = reviews.find((r) => r.featured)!;
  const rest = reviews.filter((r) => !r.featured);

  return (
    <section id="testimonials" className="section bg-cream" aria-label="Customer reviews">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="eyebrow">Word of Mouth</span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-ink">
            What Orange County <em className="text-brand not-italic">homeowners</em> say.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-1 text-brass">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-ink-muted">5.0 average across 47+ reviews</span>
          </div>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2 relative rounded-card p-8 md:p-10 bg-gradient-to-br from-white to-cream-dark border border-brass/35 shadow-warm"
          >
            <div className="absolute inset-0 rounded-card pointer-events-none [mask-image:linear-gradient(black,transparent)] opacity-[0.04]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(184,149,106,1),transparent_60%)]" />
            </div>
            <Quote className="h-10 w-10 text-brass" />
            <blockquote className="mt-5 font-display text-2xl md:text-3xl leading-snug text-ink">
              “{featured.body}”
            </blockquote>
            <div className="mt-6 flex items-center gap-1 text-brass">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <figcaption className="mt-4 flex items-center gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-cream font-display text-lg">
                {featured.name[0]}
              </span>
              <div>
                <div className="font-semibold text-ink">{featured.name}</div>
                <div className="text-xs text-ink-muted uppercase tracking-[0.14em]">
                  {featured.city}, CA
                </div>
              </div>
            </figcaption>
          </motion.figure>

          {rest.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              whileHover={{ y: -3 }}
              className="rounded-card bg-white p-6 border border-black/5 shadow-warm-sm hover:shadow-warm transition-shadow"
            >
              <div className="flex items-center gap-1 text-brass">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-ink leading-relaxed">
                “{r.body}”
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <div className="font-semibold text-sm text-ink">{r.name}</div>
                <div className="text-[10px] text-ink-muted uppercase tracking-[0.16em]">
                  {r.city}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
