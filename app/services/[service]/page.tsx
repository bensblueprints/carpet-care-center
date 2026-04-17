import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Phone, ArrowRight, Sparkles, ShieldCheck, Award } from "lucide-react";
import { SERVICES, getService } from "@/lib/seo-data";
import { BUSINESS } from "@/lib/utils";
import { PageNav } from "@/components/ui/page-nav";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ServiceAreaGrid } from "@/components/sections/ServiceAreaGrid";
import { PageFaq } from "@/components/ui/page-faq";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  const service = getService(params.service);
  if (!service) return {};
  const url = `https://carpetcare.advancedmarketing.co/services/${service.slug}/`;
  return {
    title: `${service.title} in Orange County, CA | Carpet Care Center`,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} — Carpet Care Center Inc.`,
      description: service.metaDescription,
      url,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} in Orange County`,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default function ServiceHubPage({ params }: { params: { service: string } }) {
  const service = getService(params.service);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
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
    areaServed: BUSINESS.serviceArea.map((n) => ({ "@type": "City", name: n })),
    url: `https://carpetcare.advancedmarketing.co/services/${service.slug}/`,
  };

  return (
    <>
      <PageNav />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand to-brand-dark text-cream">
          <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
          <div className="absolute -top-40 -right-40 h-[420px] w-[420px] rounded-full bg-brass/15 blur-3xl" />
          <div className="container mx-auto relative pt-10 pb-20 md:pt-12 md:pb-28">
            <div className="pt-4">
              <Breadcrumbs
                items={[
                  { href: "/services/residential-carpet-cleaning/", label: "Services" },
                  { href: `/services/${service.slug}/`, label: service.shortTitle },
                ]}
              />
            </div>
            <div className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-brass font-semibold">
                  <Sparkles className="h-3 w-3" /> {BUSINESS.tagline}
                </span>
                <h1 className="mt-4 font-display font-light leading-[1.05] text-4xl md:text-6xl lg:text-7xl text-cream">
                  {service.title} <em className="text-brass not-italic">in Orange County</em>
                </h1>
                <p className="mt-5 text-cream/85 text-lg max-w-2xl leading-relaxed">
                  {service.heroIntro}
                </p>
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
                    <Award className="h-4 w-4 text-brass" /> IICRC Master Technician
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-brass" /> Certified Firm since 1989
                  </span>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-warm-lg border border-brass/30">
                  <Image
                    src={service.image}
                    alt={service.title}
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
              <span className="eyebrow">Why This Matters</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                More than a surface clean.
              </h2>
              <div className="mt-6 space-y-5 text-ink-muted leading-relaxed text-lg">
                {service.longIntro.split(". ").reduce<string[][]>((acc, s, i) => {
                  const idx = Math.floor(i / 3);
                  acc[idx] = acc[idx] || [];
                  acc[idx].push(s);
                  return acc;
                }, []).map((group, i) => (
                  <p key={i}>{group.join(". ")}{group[group.length - 1]?.endsWith(".") ? "" : "."}</p>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-5">
              <div className="sticky top-24 rounded-card bg-white border border-black/5 shadow-warm p-6 md:p-8">
                <h3 className="font-display text-2xl text-ink">What's Included</h3>
                <ul className="mt-5 space-y-4">
                  {service.included.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success mt-0.5" />
                      <div>
                        <div className="font-semibold text-ink">{item.title}</div>
                        <p className="mt-0.5 text-sm text-ink-muted leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-7 btn-primary w-full justify-center">
                  Request Your Quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section bg-cream-dark/40">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Process</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                Four steps. Every job.
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
          <div className="container mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="eyebrow">Common Issues</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                Problems we <em className="text-brand not-italic">solve</em>.
              </h2>
              <p className="mt-5 text-ink-muted leading-relaxed">
                Every call we get starts with a specific problem. These are the ones that bring
                most customers through our door for {service.primaryKeyword}.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {service.problems.map((p) => (
                <div key={p.title} className="rounded-card bg-white border border-black/5 shadow-warm-sm p-5">
                  <h3 className="font-display text-xl text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-cream-dark/40">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <span className="eyebrow">Why Carpet Care Center</span>
              <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">
                Why choose us for {service.shortTitle.toLowerCase()}.
              </h2>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.whyChoose.map((w) => (
                <div key={w.title} className="rounded-card bg-white border border-black/5 shadow-warm-sm p-6">
                  <h3 className="font-display text-xl text-ink">{w.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreaGrid
          serviceSlug={service.slug}
          heading={`${service.shortTitle} across Southern Orange County`}
          intro={`We bring our ${service.primaryKeyword} service to every corner of the Saddleback Valley and the surrounding cities. Pick your community to see the specifics:`}
        />

        <PageFaq
          items={service.faqs}
          heading={`${service.shortTitle} — Questions`}
          intro={`Don't see yours? Call us at ${BUSINESS.phone} — Kurt or the team will answer straight.`}
        />

        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}
