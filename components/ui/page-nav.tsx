import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/utils";

export function PageNav() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-brand/10 shadow-warm-sm">
      <nav className="container mx-auto flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Carpet Care Center home">
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
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <Link href="/services/residential-carpet-cleaning/" className="px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors">
            Services
          </Link>
          <Link href="/service-area/mission-viejo/" className="px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors">
            Service Area
          </Link>
          <Link href="/#process" className="px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors">
            Process
          </Link>
          <Link href="/#testimonials" className="px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors">
            Reviews
          </Link>
          <Link href="/#contact" className="px-4 py-2 text-sm font-medium text-ink/80 hover:text-brand transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream shadow-warm-sm transition-all hover:bg-brand-dark hover:shadow-warm hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {BUSINESS.phone}
          </a>
        </div>
      </nav>
    </header>
  );
}
