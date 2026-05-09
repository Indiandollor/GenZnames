import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { AdSenseScript } from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "GenZnames — Beautiful Baby Names with Meanings",
  description:
    "Discover beautiful baby names with meanings. Browse curated Indian and English boy & girl names, search by meaning, and find the perfect name for your little one.",
  keywords: [
    "baby names",
    "indian baby names",
    "english baby names",
    "boy names",
    "girl names",
    "baby name meanings",
    "name meanings",
    "gen z baby names",
  ],
  openGraph: {
    title: "GenZnames — Beautiful Baby Names with Meanings",
    description:
      "Curated Indian & English baby names with meanings. Find the perfect name for your little one.",
    type: "website",
  },
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
            <div className="max-w-6xl mx-auto glass-soft rounded-3xl px-6 py-5 text-center text-sm text-purple-900/70">
              <p>
                Made with 💜 for parents-to-be · © {new Date().getFullYear()} GenZnames
              </p>
              <p className="mt-1 text-xs text-purple-900/50">
                Name meanings are curated for inspiration; verify cultural and linguistic nuances with family elders or scholars.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
