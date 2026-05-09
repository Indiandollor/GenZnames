"use client";

import { useMemo, useState } from "react";
import type { BabyName } from "@/data/names";
import { AdSlot } from "@/components/AdSlot";

const PASTEL_PALETTE = [
  "bubble-pink",
  "bubble-sky",
  "bubble-mint",
  "bubble-peach",
  "bubble-lilac",
  "bubble-butter",
];

function pickPastel(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return PASTEL_PALETTE[h % PASTEL_PALETTE.length];
}

export function NameBrowser({ names }: { names: BabyName[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return names;
    return names.filter(
      (n) => n.name.toLowerCase().includes(q) || n.meaning.toLowerCase().includes(q),
    );
  }, [names, query]);

  // Sprinkle in-feed ads every N cards
  const AD_EVERY = 12;

  return (
    <>
      {/* Search bar */}
      <div className="glass-strong rounded-3xl p-2 sm:p-3 mb-8 flex items-center gap-2 sticky top-4 z-20 shadow-glass-lg">
        <div className="text-2xl pl-2">🔍</div>
        <input
          type="search"
          placeholder="Search by name or meaning…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent border-0 outline-none text-purple-900 placeholder:text-purple-400/70 px-2 py-3 text-base font-medium"
          aria-label="Search names"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="text-xs font-semibold text-purple-700/80 hover:text-purple-900 px-3 py-2 rounded-full hover:bg-white/40 transition"
          >
            Clear
          </button>
        )}
        <span className="hidden sm:inline-block text-xs font-semibold text-purple-700/60 pr-3">
          {filtered.length} {filtered.length === 1 ? "name" : "names"}
        </span>
      </div>

      {filtered.length === 0 ? (
        <div className="glass rounded-3xl p-10 text-center">
          <div className="text-5xl mb-3">🤔</div>
          <h3 className="font-display font-bold text-xl text-purple-900 mb-1">
            No matches
          </h3>
          <p className="text-purple-900/60">Try a different word or clear your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filtered.map((n, i) => (
            <NameCardWithAd key={n.name} name={n} showAdAfter={(i + 1) % AD_EVERY === 0} />
          ))}
        </div>
      )}
    </>
  );
}

function NameCardWithAd({ name, showAdAfter }: { name: BabyName; showAdAfter: boolean }) {
  const tint = pickPastel(name.name);
  return (
    <>
      <article
        className={`glass-strong lift rounded-3xl p-5 flex flex-col gap-3 animate-pop`}
        aria-label={`${name.name} — ${name.meaning}`}
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-2xl text-purple-900 leading-tight">
            {name.name}
          </h3>
          <span className={`${tint} text-purple-900/90 text-[10px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1 shadow-glass`}>
            {name.gender === "boy" ? "Boy" : "Girl"}
          </span>
        </div>
        <p className="text-purple-900/75 text-[15px] leading-relaxed flex-1">
          {name.meaning}
        </p>
        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest font-semibold text-purple-700/50">
          <span>{name.origin === "indian" ? "🪔 Indian" : "🌷 English"}</span>
          <span>·</span>
        </div>
      </article>

      {showAdAfter && (
        <div className="sm:col-span-2 lg:col-span-3 my-2">
          <AdSlot slot="in_feed" format="fluid" label="Sponsored" />
        </div>
      )}
    </>
  );
}
