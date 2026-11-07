import type { Metadata, Viewport } from "next";
import { Playfair_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://vineandvibe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vine & Vibe Event | Best Event Management & Wedding Planner in Rangpur",
    template: "%s | Vine & Vibe Event",
  },
  description:
    "Vine & Vibe Event is Rangpur's premier event management company. We craft extraordinary weddings, corporate events, birthday parties, stage décor, professional photography, and hospitality services across Bangladesh.",
  applicationName: "Vine & Vibe Event",
  authors: [{ name: "Vine & Vibe Event", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "event management rangpur",
    "best event management company in rangpur",
    "wedding planner rangpur",
    "vine and vibe event",
    "vine & vibe event",
    "birthday party decoration rangpur",
    "corporate event planner bangladesh",
    "wedding stage decoration rangpur",
    "event photography rangpur",
    "hospitality management rangpur",
    "event manpower rangpur",
    "surprise party planner rangpur",
    "promotional activities rangpur",
    "event organizer rangpur",
    "luxury wedding decor bangladesh",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Vine & Vibe Event",
  publisher: "Vine & Vibe Event",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Vine & Vibe Event | Best Event Management & Wedding Planner in Rangpur",
    description:
      "Turning moments into memories. Rangpur's top-rated event management team for luxury weddings, corporate galas, birthday celebrations, and photography.",
    url: SITE_URL,
    siteName: "Vine & Vibe Event",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vine & Vibe Event - Premium Event Management in Rangpur, Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vine & Vibe Event | Best Event Management in Rangpur",
    description:
      "From royal weddings to corporate galas, we craft unforgettable experiences with precision and passion in Rangpur, Bangladesh.",
    images: ["/og-image.jpg"],
    creator: "@vineandvibe",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  category: "Event Planning & Management",
  classification: "Event Management Company",
  other: {
    "geo.region": "BD-54",
    "geo.placename": "Rangpur",
    "geo.position": "25.7439;89.2752",
    ICBM: "25.7439, 89.2752",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Vine & Vibe Event",
      alternateName: [
        "Vine & Vibe Event Management",
        "Vine and Vibe Rangpur",
        "Vine & Vibe Event Planner",
      ],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/logo.jpg`,
        contentUrl: `${SITE_URL}/logo.jpg`,
        caption: "Vine & Vibe Event Logo",
        width: 826,
        height: 834,
      },
      image: [
        `${SITE_URL}/og-image.jpg`,
        `${SITE_URL}/logo.jpg`,
      ],
      description:
        "Vine & Vibe Event is Rangpur's premier event management company. We specialize in wedding planning, corporate events, birthday party decorations, photography, hospitality management, surprise party planning, and promotional branding.",
      telephone: ["+8801750951093", "+8801750622423"],
      priceRange: "$$",
      currenciesAccepted: "BDT",
      paymentAccepted: "Cash, Bank Transfer, bKash, Nagad",
      address: {
        "@type": "PostalAddress",
        streetAddress: "JK Tower, G.L Roy Road, Kamal Kachna, Sailor Building",
        addressLocality: "Rangpur",
        addressRegion: "Rangpur Division",
        postalCode: "5400",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.7439,
        longitude: 89.2752,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "22:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Rangpur" },
        { "@type": "AdministrativeArea", name: "Rangpur Division" },
        { "@type": "Country", name: "Bangladesh" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Event Management Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wedding Event Planning & Décor",
              description: "Flawless wedding planning from bridal stage décor to ceremony management and lighting.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Photography & Videography",
              description: "Cinematic and professional event photography capturing candid smiles and emotional moments.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Event Management",
              description: "Tailored corporate conferences, seminars, annual galas, and team-building summits.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Birthday Party Decoration",
              description: "Creative themed decorations, customized backdrops, and entertainment for all ages.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Surprise Party Planning",
              description: "Orchestrated surprise parties, romantic proposals, and anniversary setups.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hospitality & Guest Management",
              description: "End-to-end guest reception, VIP protocol coordination, and ushering.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Promotional Activities & Branding",
              description: "High-impact brand activations, experiential marketing, and promotional booth setups.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Professional Event Manpower",
              description: "Trained, dedicated event staff and manpower for flawless on-ground execution.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Vine & Vibe Event",
      description: "Best Event Management & Wedding Planner in Rangpur, Bangladesh",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What event management services do you provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a wide range of services including photography, wedding events, corporate events, birthday party decoration, surprise party planning, corporate parties, promotional activities, hospitality management, branding, and professional manpower team services.",
          },
        },
        {
          "@type": "Question",
          name: "How early should I book your services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend booking at least 2–3 months in advance for weddings and large corporate events. For smaller events, 2–4 weeks notice is usually sufficient.",
          },
        },
        {
          "@type": "Question",
          name: "What is the booking process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply contact us via phone or visit our office. We'll schedule a consultation to discuss your event needs, provide a customized plan, and confirm with a booking agreement.",
          },
        },
        {
          "@type": "Question",
          name: "How can I find out more about your pricing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing varies by event type and requirements. Contact us at 01750951093 or 01750622423 for a personalized quote tailored to your event.",
          },
        },
        {
          "@type": "Question",
          name: "Do you manage events outside Rangpur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! While we are based in Rangpur, we can arrange services across Bangladesh for the right project.",
          },
        },
        {
          "@type": "Question",
          name: "Can you support large-scale corporate events?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Our professional manpower team and hospitality management experience make us well-equipped for events of any scale.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${instrumentSans.variable}`}>
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
