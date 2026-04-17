import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/seo-data";

export function ServiceGrid({
  citySlug,
  heading = "Our Services",
  intro = "Every fiber and floor surface gets its own method. Choose the service you need:",
}: {
  citySlug?: string;
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="section bg-cream">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">What We Clean</span>
          <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">{heading}</h2>
          <p className="mt-5 text-ink-muted leading-relaxed">{intro}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => {
            const href = citySlug
              ? `/services/${s.slug}/${citySlug}/`
              : `/services/${s.slug}/`;
            return (
              <Link
                key={s.slug}
                href={href}
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
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.tagline}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
