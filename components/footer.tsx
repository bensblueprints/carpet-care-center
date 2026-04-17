"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { SERVICES as SEO_SERVICES, CITIES as SEO_CITIES } from "@/lib/seo-data";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent" />
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-cream p-1">
                <Image
                  src="/images/carpet-care-center-inc-logo.avif"
                  alt={BUSINESS.name}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="font-display text-xl text-cream">{BUSINESS.shortName}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-brass">
                  Orange County • Since 1965
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/70">
              Family-owned carpet, upholstery, tile & rug care — IICRC Certified Firm
              since 1989. Master Textile Technician on every job.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SEO_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-brass transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream">Service Areas</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SEO_CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/service-area/${c.slug}/`} className="hover:text-brass transition-colors">
                    {c.name}, CA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-cream">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-brass flex-shrink-0" />
                <a href={BUSINESS.phoneHref} className="hover:text-brass transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-brass flex-shrink-0" />
                <span>{BUSINESS.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-brass flex-shrink-0" />
                <span>
                  {BUSINESS.address}<br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </span>
              </li>
            </ul>
            <a
              href="#top"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream hover:bg-brass hover:text-brand-dark hover:border-brass transition-colors"
            >
              <ArrowUp className="h-3.5 w-3.5" /> Back to top
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-cream/60">
          <div>
            © 2026 {BUSINESS.name}. Licensed & insured. IICRC Certified Firm since 1989.
          </div>
          <div className="flex items-center gap-4">
            <span>Master Textile Technician #6256</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
