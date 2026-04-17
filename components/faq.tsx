"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does carpet cleaning take?",
    a: "Most homes take 1–2 hours. A typical three-bedroom runs around 90 minutes depending on soil level and pre-treatment needs. Carpet is usually dry to the touch in 4–6 hours, fully dry within 24.",
  },
  {
    q: "Are your products safe for pets and kids?",
    a: "Yes. We use IICRC-approved, non-toxic cleaning solutions and rinse thoroughly, so there's no sticky residue left behind. Pets and little ones can be back on the carpet as soon as it's dry.",
  },
  {
    q: "Do you move furniture?",
    a: "We move most furniture you'd reasonably expect — sofas, chairs, dining tables, beds. Extremely heavy pieces (armoires, pianos, large entertainment centers) stay put, and we clean around and under where we can.",
  },
  {
    q: "How often should I clean my carpets?",
    a: "IICRC recommends every 12–18 months for most homes, and every 6–12 months if you have pets, kids, or allergies. High-traffic commercial spaces often need quarterly service.",
  },
  {
    q: "Can you remove pet stains and odors?",
    a: "In most cases, yes — even old urine. We use enzyme-based treatments that break down the odor compounds at the source. Severe cases may need pad treatment or replacement, which we'll identify during the estimate.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Always. We'll come to your home, assess fibers, stains, and any repair needs, and give you a flat written quote. No obligation and no surprise fees.",
  },
  {
    q: "What's your service area?",
    a: "Southern Orange County — including Mission Viejo, Irvine, Lake Forest, Laguna Hills, Laguna Niguel, Rancho Santa Margarita, Aliso Viejo and the broader Saddleback Valley. If you're nearby, call and ask.",
  },
  {
    q: "How soon can you come out?",
    a: "Usually within 2–5 business days. For urgent situations (flooding, fresh stains, move-out deadlines) we try to get a truck out the same or next day. Call us — we'll make it work.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-cream" aria-label="Frequently asked questions">
      <div className="container mx-auto grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-ink">
            Things folks often <em className="text-brand not-italic">ask</em>.
          </h2>
          <p className="mt-5 text-ink-muted">
            Don't see yours here? Call us at{" "}
            <a href="tel:1-949-581-8726" className="text-brand font-semibold hover:underline">
              949.581.8726
            </a>{" "}
            — Kurt or the team will answer straight.
          </p>
        </motion.div>

        <div className="lg:col-span-8 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-display text-xl md:text-2xl text-ink group-hover:text-brand transition-colors">
                  {f.q}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink group-hover:bg-brand group-hover:border-brand group-hover:text-cream transition-colors"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-12 text-ink-muted leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
