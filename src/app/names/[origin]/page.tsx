import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import type { Origin } from "@/data/names";

const ORIGIN_META: Record<Origin, { label: string; emoji: string; tagline: string }> = {
  indian: {
    label: "Indian",
    emoji: "🪔",
    tagline: "Sanskrit, Vedic & modern Indian names",
  },
  english: {
    label: "English",
    emoji: "🌷",
    tagline: "Classic, modern & biblical English names",
  },
};

export function generateStaticParams() {
  return [{ origin: "indian" }, { origin: "english" }];
}

export default async function OriginPage({
  params,
}: {
  params: Promise<{ origin: string }>;
}) {
  const { origin } = await params;
  if (origin !== "indian" && origin !== "english") notFound();
  const meta = ORIGIN_META[origin as Origin];

  return (
    <div className="max-w-5xl mx-auto pt-6 sm:pt-10">
      <section className="text-center mb-10 animate-pop">
        <div className="inline-flex items-center gap-2 glass-soft rounded-full px-4 py-1.5 text-xs font-semibold text-purple-700/80 uppercase tracking-widest mb-5">
          {meta.emoji} {meta.label} Names
        </div>
        <h1 className="font-display font-bold text-4xl sm:text-5xl bg-gradient-to-br from-pink-500 via-purple-500 to-sky-500 bg-clip-text text-transparent">
          Is it a boy or a girl?
        </h1>
        <p className="mt-3 text-purple-900/70 text-base sm:text-lg">
          {meta.tagline}
        </p>
      </section>

      <div className="max-w-3xl mx-auto mb-10">
        <AdSlot slot={`${origin}_top`} label="Sponsored" />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <Link
          href={`/names/${origin}/boy`}
          className="glass-strong lift rounded-3xl p-8 text-center group focus:outline-none focus:ring-4 focus:ring-sky-300/50"
        >
          <div className="text-7xl mb-4 inline-block group-hover:animate-float">👦</div>
          <h2 className="font-display font-bold text-2xl text-purple-900 mb-2">Boy</h2>
          <p className="text-purple-900/70 text-sm">Strong, sweet & meaningful boy names.</p>
          <span className="mt-5 inline-block bubble-sky text-purple-900 font-semibold text-sm rounded-full px-5 py-2 shadow-glass">
            Show boy names →
          </span>
        </Link>

        <Link
          href={`/names/${origin}/girl`}
          className="glass-strong lift rounded-3xl p-8 text-center group focus:outline-none focus:ring-4 focus:ring-pink-300/50"
        >
          <div className="text-7xl mb-4 inline-block group-hover:animate-float">👧</div>
          <h2 className="font-display font-bold text-2xl text-purple-900 mb-2">Girl</h2>
          <p className="text-purple-900/70 text-sm">Graceful, pretty & meaningful girl names.</p>
          <span className="mt-5 inline-block bubble-pink text-purple-900 font-semibold text-sm rounded-full px-5 py-2 shadow-glass">
            Show girl names →
          </span>
        </Link>
      </section>

      <div className="text-center mt-8">
        <Link
          href="/"
          className="text-sm font-semibold text-purple-700/70 hover:text-purple-900 underline-offset-4 hover:underline"
        >
          ← Pick a different tradition
        </Link>
      </div>
    </div>
  );
}
