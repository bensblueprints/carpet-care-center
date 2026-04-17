import { ChevronDown } from "lucide-react";

export function PageFaq({
  items,
  heading = "Frequently Asked Questions",
  intro,
}: {
  items: { q: string; a: string }[];
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="section bg-cream" aria-label="Frequently asked questions">
      <div className="container mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-3 font-display font-light text-3xl md:text-5xl text-ink">{heading}</h2>
          {intro && <p className="mt-5 text-ink-muted leading-relaxed">{intro}</p>}
        </div>
        <div className="lg:col-span-8 divide-y divide-ink/10 border-y border-ink/10">
          {items.map((f, i) => (
            <details key={i} className="group py-5" open={i === 0}>
              <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                <span className="font-display text-xl md:text-2xl text-ink group-hover:text-brand transition-colors">
                  {f.q}
                </span>
                <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink group-hover:bg-brand group-hover:border-brand group-hover:text-cream transition-colors group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>
              <p className="mt-3 pr-12 text-ink-muted leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
