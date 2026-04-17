"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

type DropdownItem = { href: string; label: string };
type NavLink =
  | { type: "link"; href: string; label: string }
  | { type: "dropdown"; label: string; hubHref: string; items: DropdownItem[] };

const SERVICES: DropdownItem[] = [
  { href: "/services/residential-carpet-cleaning", label: "Residential Carpet Cleaning" },
  { href: "/services/commercial-carpet-cleaning", label: "Commercial Carpet Cleaning" },
  { href: "/services/upholstery-cleaning", label: "Upholstery Cleaning" },
  { href: "/services/tile-grout-cleaning", label: "Tile & Grout Cleaning" },
  { href: "/services/drapery-cleaning", label: "Drapery Cleaning" },
  { href: "/services/pet-odor-stain-removal", label: "Pet Odor & Stain Removal" },
  { href: "/services/area-rug-cleaning", label: "Area Rug Cleaning" },
  { href: "/services/carpet-repairs", label: "Carpet Repairs & Restretching" },
];

const AREAS: DropdownItem[] = [
  { href: "/service-area/mission-viejo", label: "Mission Viejo" },
  { href: "/service-area/irvine", label: "Irvine" },
  { href: "/service-area/lake-forest", label: "Lake Forest" },
  { href: "/service-area/laguna-hills", label: "Laguna Hills" },
  { href: "/service-area/laguna-niguel", label: "Laguna Niguel" },
  { href: "/service-area/rancho-santa-margarita", label: "Rancho Santa Margarita" },
  { href: "/service-area/aliso-viejo", label: "Aliso Viejo" },
  { href: "/service-area/saddleback-valley", label: "Saddleback Valley" },
];

const links: NavLink[] = [
  { type: "dropdown", label: "Services", hubHref: "/services/residential-carpet-cleaning", items: SERVICES },
  { type: "dropdown", label: "Service Area", hubHref: "/service-area/mission-viejo", items: AREAS },
  { type: "link", href: "/#process", label: "Process" },
  { type: "link", href: "/#testimonials", label: "Reviews" },
  { type: "link", href: "/#contact", label: "Contact" },
];

function DesktopDropdown({ label, items, hubHref }: { label: string; items: DropdownItem[]; hubHref: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const handleEnter = () => {
    clearTimer();
    setOpen(true);
  };
  const handleLeave = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <a
        href={hubHref}
        aria-haspopup="true"
        aria-expanded={open}
        className="group relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
        <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
      </a>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 pt-1"
          >
            <div className="overflow-hidden rounded-2xl border border-brand/10 bg-cream/95 backdrop-blur-xl shadow-warm">
              <ul className="py-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between px-5 py-2.5 text-sm font-medium text-ink/80 hover:bg-brand/5 hover:text-brand transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: DropdownItem[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="mx-auto flex items-center gap-2 font-display text-3xl text-cream hover:text-brass transition-colors py-2"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {items.map((item) => (
              <li key={item.href} className="py-1">
                <a
                  href={item.href}
                  onClick={onNavigate}
                  className="block text-base text-cream/80 hover:text-brass transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

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
          <a href="/" className="flex items-center gap-3 group" aria-label="Carpet Care Center home">
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
            {links.map((l) =>
              l.type === "dropdown" ? (
                <DesktopDropdown key={l.label} label={l.label} items={l.items} hubHref={l.hubHref} />
              ) : (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              )
            )}
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
              className="relative flex min-h-screen flex-col items-center justify-start gap-2 px-6 pt-24 pb-12 text-center overflow-y-auto"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 rounded-full border border-cream/20 p-2.5 text-cream"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
              {links.map((l) =>
                l.type === "dropdown" ? (
                  <MobileAccordion
                    key={l.label}
                    label={l.label}
                    items={l.items}
                    onNavigate={() => setOpen(false)}
                  />
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-cream hover:text-brass transition-colors py-2"
                  >
                    {l.label}
                  </a>
                )
              )}
              <a
                href={BUSINESS.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brass px-7 py-3.5 text-sm font-semibold text-brand-dark"
              >
                <Phone className="h-4 w-4" /> {BUSINESS.phone}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
