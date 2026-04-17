import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, Quote, Award, ShieldCheck, Clock } from "lucide-react";
import { CITIES, getCity } from "@/lib/seo-data";
import { BUSINESS } from "@/lib/utils";
import { PageNav } from "@/components/ui/page-nav";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { PageFaq } from "@/components/ui/page-faq";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}): Promise<Metadata> {
  const city = getCity(params.city);
  if (!city) return {};
  const url = `https://carpetcare.advancedmarketing.co/service-area/${city.slug}/`;
  const title = `Carpet Cleaning in ${city.name}, CA | Carpet Care Center`;
  const description = `Carpet, upholstery, tile and rug cleaning in ${city.name}. IICRC Master Textile Technician, truck-mounted extraction, free in-home estimates across ${city.neighborhoods.slice(0, 2).join(" and ")}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: "/images/professional-carpet-cleaning.avif", width: 1200, height: 630, alt: `Carpet cleaning in ${city.name}` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/professional-carpet-cleaning.avif"],
    },
  };
}

export default function CityHubPage({ params }: { params: { city: string } }) {
  const city = getCity(params.city);
  if (!city) notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Carpet Care Center Inc.",
    image: "https://carpetcare.advancedmarketing.co/images/professional-carpet-cleaning.avif",
    telephone: "+1-949-581-8726",
    priceRange: "$$",
    url: `https://carpetcare.advancedmarketing.co/service-area/${city.slug}/`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "23632 Via Fabricante, Suite C",
      addressLocality: "Mission Viejo",
      addressRegion: "CA",
      postalCode: "92691",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: city.lat, longitude: city.lng },
    areaServed: { "@type": "City", name: city.name },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47" },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <>
      <PageNav />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark text-cream">
          <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
          <div className="container mx-auto relative pt-10 pb-20 md:pt-12 md:pb-28">
            <div className="pt-4">
              <Breadcrumbs
                items={[
                  { href: "/service-area/mission-viejo/", label: "Service Area" },
                  { href: `/service-area/${city.slug}/`, label: city.name },
                ]}
              />
            </div>
            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-brass font-semibold">
                  <MapPin className="h-3 w-3" /> {city.name}, CA · {city.zip}
                </span>
                <h1 className="mt-4 font-display font-light leading-[1.05] text-4xl md:text-6xl lg:text-7xl text-cream">
                  Carpet Cleaning in <em className="text-brass not-italic">{city.name}</em>
                </h1>
                <p className="mt-5 text-cream/85 text-lg max-w-2xl leading-relaxed">{city.intro}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="btn-brass">
                    Get a Free Estimate <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-cream/30 px-7 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-brand transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {BUSINESS.phone}
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-5 text-xs text-cream/70 uppercase tracking-[0.2em]">
                  <span className="inline-flex items-center gap-2">
                    <Award className="h-4 w-4 text-brass" /> Serving {city.name} since 1965
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brass" /> IICRC Certified Firm
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-warm-lg border border-brass/30">
                  <Image
                    src="/images/morning-coffee-clean-carpets.avif"
                    alt={`Carpet cleaning in ${city.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="container mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <span className="eyebrow">About {city.name}</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                A city we know <em className="text-brand not-italic">by heart</em>.
              </h2>
              <p className="mt-6 text-ink-muted leading-relaxed text-lg">{city.longAbout}</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-card border border-black/5 bg-white p-5 shadow-warm-sm">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Neighborhoods We Serve</div>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink">
                    {city.neighborhoods.map((n) => (
                      <li key={n} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand" /> {n}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-card border border-black/5 bg-white p-5 shadow-warm-sm">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Local Landmarks</div>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink">
                    {city.landmarks.map((n) => (
                      <li key={n} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brass" /> {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <aside className="lg:col-span-5">
              <div className="sticky top-24 rounded-card bg-gradient-burgundy text-cream p-6 md:p-8 shadow-warm-lg">
                <h3 className="font-display text-2xl text-cream">Why {city.name} homeowners choose us</h3>
                <ul className="mt-5 space-y-5">
                  {city.localReasons.map((r) => (
                    <li key={r.title}>
                      <div className="font-semibold text-brass">{r.title}</div>
                      <p className="mt-1 text-sm text-cream/80 leading-relaxed">{r.body}</p>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-7 btn-brass w-full justify-center">
                  Book Your {city.name} Clean <ArrowRight className="h-4 w-4" />
                </a>
                <div className="mt-4 flex items-center gap-2 text-xs text-cream/70">
                  <Clock className="h-3.5 w-3.5" /> Monday – Friday · 9am – 5pm
                </div>
              </div>
            </aside>
          </div>
        </section>

        <ServiceGrid
          citySlug={city.slug}
          heading={`Every service we offer — available in ${city.name}`}
          intro={`From residential carpet cleaning to area rug restoration, here's what we bring to ${city.name} homes and businesses. Tap any service for the details and schedule.`}
        />

        <section className="section bg-cream-dark/40">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="eyebrow">{city.name} Reviews</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                What your neighbors <em className="text-brand not-italic">say</em>.
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {city.testimonials.map((t, i) => (
                <figure key={i} className="rounded-card bg-white border border-black/5 shadow-warm-sm p-6">
                  <Quote className="h-6 w-6 text-brass" />
                  <blockquote className="mt-4 text-ink leading-relaxed text-[15px]">{t.body}</blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-ink/10">
                    <div className="font-semibold text-ink">{t.author}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-0.5">
                      {t.neighborhood} · {t.service}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <PageFaq
          items={city.faqs}
          heading={`${city.name} — Questions`}
          intro={`Specifics for ${city.name}. Call us at ${BUSINESS.phone} if you have more.`}
        />

        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}
