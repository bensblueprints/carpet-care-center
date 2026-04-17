"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

const links = [
  { href: "/services/residential-carpet-cleaning/", label: "Services" },
  { href: "/service-area/mission-viejo/", label: "Service Area" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/85 backdrop-blur-xl border-b border-brand/10 shadow-warm-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between py-3 md:py-4">
          <a href="#top" className="flex items-center gap-3 group" aria-label="Carpet Care Center home">
            <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-brand/15 bg-white transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/carpet-care-center-inc-logo.avif"
                alt="Carpet Care Center Inc."
                fill
                sizes="44px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-xl font-medium text-brand">Carpet Care Center</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-brass font-semibold">
                Orange County • Since 1965
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream shadow-warm-sm transition-all hover:bg-brand-dark hover:shadow-warm hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {BUSINESS.phone}
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden rounded-full border border-brand/20 p-2.5 text-brand hover:bg-brand hover:text-cream transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex min-h-screen flex-col items-center justify-center gap-2 px-6 py-10 text-center"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 rounded-full border border-cream/20 p-2.5 text-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-4xl text-cream hover:text-brass transition-colors py-2"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={BUSINESS.phoneHref}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-brand-dark"
              >
                <Phone className="h-4 w-4" /> {BUSINESS.phone}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
