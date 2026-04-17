import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, MapPin, Quote, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SERVICES, CITIES, getService, getCity, getComboContent } from "@/lib/seo-data";
import { BUSINESS } from "@/lib/utils";
import { PageNav } from "@/components/ui/page-nav";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PageFaq } from "@/components/ui/page-faq";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  const params: { service: string; city: string }[] = [];
  for (const s of SERVICES) {
    for (const c of CITIES) {
      params.push({ service: s.slug, city: c.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { service: string; city: string };
}): Promise<Metadata> {
  const service = getService(params.service);
  const city = getCity(params.city);
  if (!service || !city) return {};
  const url = `https://carpetcare.advancedmarketing.co/services/${service.slug}/${city.slug}/`;
  const title = `${service.title} in ${city.name}, CA | Carpet Care Center`;
  const description = `${service.title} in ${city.name}, CA. IICRC Master Textile Technician, truck-mounted power, honest estimates. Serving ${city.neighborhoods.slice(0, 2).join(" and ")} and all of ${city.name}.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: service.image, width: 1200, height: 630, alt: `${service.title} in ${city.name}` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
  };
}

export default function ComboPage({
  params,
}: {
  params: { service: string; city: string };
}) {
  const service = getService(params.service);
  const city = getCity(params.city);
  if (!service || !city) notFound();

  const combo = getComboContent(service.slug, city.slug, service, city);

  // Pick 3 sibling combo services for internal linking (other services in same city)
  const siblings = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${service.title} in ${city.name}`,
      serviceType: service.title,
      description: `${service.title} in ${city.name}, CA by Carpet Care Center Inc.`,
      provider: {
        "@type": "LocalBusiness",
        name: "Carpet Care Center Inc.",
        telephone: "+1-949-581-8726",
        address: {
          "@type": "PostalAddress",
          streetAddress: "23632 Via Fabricante, Suite C",
          addressLocality: "Mission Viejo",
          addressRegion: "CA",
          postalCode: "92691",
          addressCountry: "US",
        },
      },
      areaServed: { "@type": "City", name: city.name },
      url: `https://carpetcare.advancedmarketing.co/services/${service.slug}/${city.slug}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Carpet Care Center Inc.",
      image: "https://carpetcare.advancedmarketing.co/images/professional-carpet-cleaning.avif",
      telephone: "+1-949-581-8726",
      url: `https://carpetcare.advancedmarketing.co/services/${service.slug}/${city.slug}/`,
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
    },
  ];

  return (
    <>
      <PageNav />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark text-cream">
          <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
          <div className="container mx-auto relative pt-10 pb-16 md:pt-12 md:pb-24">
            <div className="pt-4">
              <Breadcrumbs
                items={[
                  { href: `/services/${service.slug}/`, label: service.shortTitle },
                  { href: `/services/${service.slug}/${city.slug}/`, label: city.name },
                ]}
              />
            </div>
            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-brass font-semibold">
                  <MapPin className="h-3 w-3" /> {city.name}, CA
                </span>
                <h1 className="mt-4 font-display font-light leading-[1.05] text-4xl md:text-6xl text-cream">
                  {service.title} in <em className="text-brass not-italic">{city.name}</em>
                </h1>
                <p className="mt-5 text-cream/85 text-lg max-w-2xl leading-relaxed">{combo.hero}</p>
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
                <div className="mt-6 flex flex-wrap gap-5 text-xs text-cream/70 uppercase tracking-[0.2em]">
                  <span className="inline-flex items-center gap-2">
                    <Award className="h-4 w-4 text-brass" /> IICRC Master Technician
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brass" /> Serving {city.name} since 1965
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-warm-lg border border-brass/30">
                  <Image
                    src={service.image}
                    alt={`${service.title} in ${city.name}`}
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
              <span className="eyebrow">What To Expect</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                {service.shortTitle} for <em className="text-brand not-italic">{city.name}</em> homes.
              </h2>
              <div className="mt-6 space-y-5 text-ink-muted leading-relaxed text-lg">
                <p>{combo.body1}</p>
                <p>{combo.body2}</p>
              </div>

              <div className="mt-10 rounded-card border border-brass/20 bg-brass/5 p-6">
                <h3 className="font-display text-2xl text-ink">What makes {city.name} homes different</h3>
                <p className="mt-3 text-ink-muted leading-relaxed">{combo.homesDifferent}</p>
              </div>
            </div>
            <aside className="lg:col-span-5">
              <div className="sticky top-24 rounded-card bg-white border border-black/5 shadow-warm p-6 md:p-8">
                <h3 className="font-display text-2xl text-ink">What's included</h3>
                <ul className="mt-5 space-y-4">
                  {service.included.slice(0, 4).map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
                      <div>
                        <div className="font-semibold text-ink">{item.title}</div>
                        <p className="mt-0.5 text-sm text-ink-muted leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-ink/10">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Service Area</div>
                  <p className="mt-2 text-sm text-ink">
                    All of {city.name} — including {city.neighborhoods.slice(0, 3).join(", ")}.
                  </p>
                </div>
                <a href="#contact" className="mt-7 btn-primary w-full justify-center">
                  Request Your {city.name} Quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section bg-cream-dark/40">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="eyebrow">How It Works</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                Our four-step process.
              </h2>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.process.map((p) => (
                <div key={p.step} className="rounded-card bg-white border border-black/5 shadow-warm-sm p-6">
                  <div className="font-display text-5xl text-brass">{p.step}</div>
                  <h3 className="mt-4 font-display text-2xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="eyebrow">{city.name} Reviews</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                From {city.name} <em className="text-brand not-italic">neighbors</em>.
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {combo.testimonials.map((t, i) => (
                <figure key={i} className="rounded-card bg-white border border-black/5 shadow-warm-sm p-6">
                  <Quote className="h-6 w-6 text-brass" />
                  <blockquote className="mt-4 text-ink leading-relaxed text-[15px]">{t.body}</blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-ink/10">
                    <div className="font-semibold text-ink">{t.author}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-ink-muted mt-0.5">{t.neighborhood}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <PageFaq
          items={combo.faqs}
          heading={`${service.shortTitle} in ${city.name} — Questions`}
          intro={`Specifics for ${service.primaryKeyword} in ${city.name}. Call ${BUSINESS.phone} for more.`}
        />

        <section className="section bg-cream-dark/40">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <span className="eyebrow">Explore More</span>
                <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                  Other services in {city.name}.
                </h2>
                <p className="mt-5 text-ink-muted leading-relaxed">
                  We do more than just {service.primaryKeyword}. Here are the other services we bring to {city.name} homes and businesses.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/services/${service.slug}/`} className="btn-secondary">
                    All {service.shortTitle} Info
                  </Link>
                  <Link href={`/service-area/${city.slug}/`} className="btn-secondary">
                    All {city.name} Services
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}/${city.slug}/`}
                    className="group rounded-card bg-white border border-black/5 shadow-warm-sm p-5 hover:shadow-brass hover:border-brass/50 transition-all"
                  >
                    <h3 className="font-display text-xl text-ink group-hover:text-brand transition-colors">
                      {s.title} in {city.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
