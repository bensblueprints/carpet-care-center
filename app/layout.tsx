import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Carpet Care Center Inc. | Professional Carpet Cleaning in Orange County Since 1965",
  description:
    "Family-owned carpet cleaning in Southern Orange County since 1965. IICRC Certified Firm since 1989. Residential, commercial, upholstery, tile & grout, pet odor removal, and carpet repair — from a Master Textile Technician. Free estimates in Mission Viejo, Irvine, Lake Forest & beyond.",
  metadataBase: new URL("https://carpetcare.advancedmarketing.co"),
  openGraph: {
    title: "Carpet Care Center Inc. — 60 Years of Trusted Carpet Cleaning in Orange County",
    description:
      "Refresh. Revitalize. Restore. Serving Southern Orange County since 1965. IICRC Master Textile Technician on every job.",
    url: "https://carpetcare.advancedmarketing.co",
    siteName: "Carpet Care Center Inc.",
    images: [
      {
        url: "/images/professional-carpet-cleaning.avif",
        width: 1200,
        height: 630,
        alt: "Professional Carpet Cleaning by Carpet Care Center Inc.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Care Center Inc. | Orange County Since 1965",
    description:
      "IICRC Certified carpet cleaning for Southern Orange County. Free estimates. Call 949.581.8726.",
    images: ["/images/professional-carpet-cleaning.avif"],
  },
  icons: {
    icon: "/images/carpet-care-center-inc-logo.avif",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://carpetcare.advancedmarketing.co",
  name: "Carpet Care Center Inc.",
  image: "https://carpetcare.advancedmarketing.co/images/professional-carpet-cleaning.avif",
  telephone: "+1-949-581-8726",
  email: "info@carpetcarecenter.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "23632 Via Fabricante, Suite C",
    addressLocality: "Mission Viejo",
    addressRegion: "CA",
    postalCode: "92691",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.5928, longitude: -117.6615 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  foundingDate: "1965",
  areaServed: [
    "Mission Viejo",
    "Irvine",
    "Lake Forest",
    "Laguna Hills",
    "Laguna Niguel",
    "Rancho Santa Margarita",
    "Aliso Viejo",
  ].map((n) => ({ "@type": "City", name: n })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47" },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
