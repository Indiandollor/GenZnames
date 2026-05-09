import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import { AdSenseScript } from "@/components/AdSlot";
import { VisitorCounter } from "@/components/VisitorCounter";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://genznames.vercel.app";

const SITE_DESCRIPTION =
  "Find the perfect baby name for your newborn. GenZnames is a hand-picked collection of beautiful Indian and English baby boy and girl names with meanings — modern, traditional, unique, and trending. Search by name or meaning. Free baby name finder for new parents.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GenZnames — Baby Names with Meanings | Indian & English Boy & Girl Names",
    template: "%s | GenZnames",
  },
  description: SITE_DESCRIPTION,
  applicationName: "GenZnames",
  authors: [{ name: "GenZnames" }],
  generator: "Next.js",
  keywords: [
    // Core head terms
    "baby names",
    "baby names with meanings",
    "kids names",
    "children names",
    "newborn names",
    "naming a new baby",
    "name your baby",
    "baby name finder",
    "baby name ideas",
    "baby name meanings",
    "name meanings",
    // Gender splits
    "baby boy names",
    "baby girl names",
    "boy names with meanings",
    "girl names with meanings",
    "names for boys",
    "names for girls",
    // Indian / Hindu / Sanskrit
    "indian baby names",
    "indian baby boy names",
    "indian baby girl names",
    "hindu baby names",
    "hindu boy names",
    "hindu girl names",
    "sanskrit baby names",
    "vedic names",
    "modern indian names",
    "unique indian names",
    "indian newborn names",
    // English / Western
    "english baby names",
    "english boy names",
    "english girl names",
    "modern english names",
    "classic english names",
    "biblical baby names",
    "christian baby names",
    "western baby names",
    // Trending / unique / modern
    "unique baby names",
    "modern baby names",
    "trending baby names",
    "popular baby names",
    "rare baby names",
    "cute baby names",
    "short baby names",
    "gen z baby names",
    "baby names 2026",
    // Toddler / kid related
    "toddler names",
    "child names",
    "kid name ideas",
    // Long-tail
    "baby boy names with meanings",
    "baby girl names with meanings",
    "indian baby names with meanings",
    "english baby names with meanings",
    "search baby names by meaning",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GenZnames — Baby Names with Meanings",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "GenZnames",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GenZnames — Baby Names with Meanings",
    description: SITE_DESCRIPTION,
  },
  category: "parenting",
};

export const viewport: Viewport = {
  themeColor: "#FFE3CC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <AdSenseScript />
      </head>
      <body className="font-body antialiased">
        {/* decorative floating blobs */}
        <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="blob bubble-pink animate-float-slow" style={{ width: 380, height: 380, top: -80, left: -100 }} />
          <div className="blob bubble-sky animate-float" style={{ width: 320, height: 320, top: 120, right: -80 }} />
          <div className="blob bubble-mint animate-float-slow" style={{ width: 360, height: 360, bottom: -100, left: 100 }} />
          <div className="blob bubble-lilac animate-float" style={{ width: 280, height: 280, bottom: 80, right: 120 }} />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col">
          <header className="px-4 sm:px-8 pt-6 pb-4">
            <nav className="max-w-6xl mx-auto glass rounded-3xl px-5 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="text-3xl group-hover:animate-pop">🍼</span>
                <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
                  GenZnames
                </span>
              </Link>
              <Link
                href="/"
                className="text-sm font-semibold text-purple-700/80 hover:text-purple-900 px-4 py-2 rounded-full hover:bg-white/40 transition"
              >
                Start over
              </Link>
            </nav>
          </header>

          <main className="flex-1 px-4 sm:px-8 pb-12">{children}</main>

          <footer className="px-4 sm:px-8 pb-8">
            <div className="max-w-6xl mx-auto glass-soft rounded-3xl px-6 py-5 text-center text-sm text-purple-900/70 flex flex-col items-center gap-3">
              <VisitorCounter />
              <p>
                Made with 💜 for parents-to-be · © {new Date().getFullYear()} GenZnames
              </p>
              <p className="text-xs text-purple-900/50">
                Name meanings are curated for inspiration; verify cultural and linguistic nuances with family elders or scholars.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
