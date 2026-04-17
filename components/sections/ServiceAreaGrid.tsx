import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { CITIES } from "@/lib/seo-data";

export function ServiceAreaGrid({
  serviceSlug,
  heading = "Service Areas",
  intro = "Southern Orange County — one team, one truck, one standard. Choose your city:",
}: {
  serviceSlug: string;
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="section bg-cream-dark/40">
      <div className="container mx-auto">
        <div className="max-w-2xl">
          <span className="eyebrow">Where We Work</span>
          <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">{heading}</h2>
          <p className="mt-5 text-ink-muted leading-relaxed">{intro}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/services/${serviceSlug}/${c.slug}/`}
              className="group relative rounded-card bg-white border border-black/5 shadow-warm-sm hover:shadow-brass hover:border-brass/50 transition-all duration-300 p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand/8 text-brand">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-display text-lg text-ink leading-tight">{c.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-ink-muted mt-0.5">
                      {c.zip} · CA
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-brand/60 transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">
                {c.neighborhoods.slice(0, 3).join(" · ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
