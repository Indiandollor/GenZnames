import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto pt-6 sm:pt-10">
      <section className="text-center mb-10 animate-pop">
        <div className="inline-flex items-center gap-2 glass-soft rounded-full px-4 py-1.5 text-xs font-semibold text-purple-700/80 uppercase tracking-widest mb-5">
          <span>✨</span> Find the perfect name
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-tight bg-gradient-to-br from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
          Beautiful Baby Names <br className="hidden sm:block" />
          <span className="text-purple-900/90">with meanings.</span>
        </h1>
        <p className="mt-4 text-purple-900/70 text-base sm:text-lg max-w-xl mx-auto">
          Hand-picked baby names from around the world. Tap a tradition to begin.
        </p>
      </section>

      {/* Top-of-page ad — high-value placement */}
      <div className="max-w-3xl mx-auto mb-10">
        <AdSlot slot="home_top" label="Sponsored" />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <Link
          href="/names/indian"
          className="glass-strong lift rounded-3xl p-8 text-center group focus:outline-none focus:ring-4 focus:ring-pink-300/50"
        >
          <div className="text-7xl mb-4 inline-block group-hover:animate-float">🪔</div>
          <h2 className="font-display font-bold text-2xl text-purple-900 mb-2">
            Indian Names
          </h2>
          <p className="text-purple-900/70 text-sm">
            Sanskrit, Vedic, and modern Indian names with rich meanings.
          </p>
          <span className="mt-5 inline-block bubble-pink text-purple-900 font-semibold text-sm rounded-full px-5 py-2 shadow-glass">
            Explore →
          </span>
        </Link>

        <Link
          href="/names/english"
          className="glass-strong lift rounded-3xl p-8 text-center group focus:outline-none focus:ring-4 focus:ring-sky-300/50"
        >
          <div className="text-7xl mb-4 inline-block group-hover:animate-float">🌷</div>
          <h2 className="font-display font-bold text-2xl text-purple-900 mb-2">
            English Names
          </h2>
          <p className="text-purple-900/70 text-sm">
            Classic, modern, and biblical English names for boys & girls.
          </p>
          <span className="mt-5 inline-block bubble-sky text-purple-900 font-semibold text-sm rounded-full px-5 py-2 shadow-glass">
            Explore →
          </span>
        </Link>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="glass rounded-2xl p-5 text-center">
          <div className="text-3xl mb-2">📖</div>
          <h3 className="font-display font-semibold text-purple-900 mb-1">Real meanings</h3>
          <p className="text-sm text-purple-900/60">Every name comes with the story behind it.</p>
        </div>
        <div className="glass rounded-2xl p-5 text-center">
          <div className="text-3xl mb-2">🔍</div>
          <h3 className="font-display font-semibold text-purple-900 mb-1">Smart search</h3>
          <p className="text-sm text-purple-900/60">Search by name or by what it means.</p>
        </div>
        <div className="glass rounded-2xl p-5 text-center">
          <div className="text-3xl mb-2">💜</div>
          <h3 className="font-display font-semibold text-purple-900 mb-1">Lovingly curated</h3>
          <p className="text-sm text-purple-900/60">No clutter, no spam — just names.</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto mt-12">
        <AdSlot slot="home_bottom" label="Sponsored" />
      </div>
    </div>
  );
}
