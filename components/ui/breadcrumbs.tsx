import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = {
  href: string;
  label: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const last = items.length - 1;
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://carpetcare.advancedmarketing.co/" },
      ...items.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        item: `https://carpetcare.advancedmarketing.co${c.href}`,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.18em] text-ink-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="inline-flex items-center gap-1 hover:text-brand transition-colors">
            <Home className="h-3 w-3" aria-hidden /> Home
          </Link>
          <ChevronRight className="h-3 w-3 opacity-50" aria-hidden />
        </li>
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i === last ? (
              <span className="text-brand font-semibold" aria-current="page">
                {c.label}
              </span>
            ) : (
              <>
                <Link href={c.href} className="hover:text-brand transition-colors">
                  {c.label}
                </Link>
                <ChevronRight className="h-3 w-3 opacity-50" aria-hidden />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
