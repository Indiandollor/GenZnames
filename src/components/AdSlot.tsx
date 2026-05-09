"use client";

import { useEffect } from "react";

/**
 * AdSlot — drop-in Google AdSense slot.
 *
 * BEFORE LAUNCH:
 *   1. Get approved for Google AdSense.
 *   2. Set NEXT_PUBLIC_ADSENSE_CLIENT (e.g. "ca-pub-1234567890123456") in .env.local
 *      and on Vercel (Project Settings → Environment Variables).
 *   3. Create ad units in AdSense and pass their slot IDs as the `slot` prop.
 *
 * Until then, this renders a stylish placeholder so the layout breathes correctly.
 */
export function AdSlot({
  slot,
  format = "auto",
  label = "Advertisement",
  className = "",
}: {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal" | "vertical";
  label?: string;
  className?: string;
}) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const isLive = !!client && !!slot;

  useEffect(() => {
    if (!isLive) return;
    try {
      // @ts-expect-error AdSense pushes onto window.adsbygoogle
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* ignore — AdSense may not be loaded yet during nav transitions */
    }
  }, [isLive]);

  if (!isLive) {
    return (
      <div
        className={`glass-soft rounded-2xl border-dashed border-2 border-purple-200/60 flex items-center justify-center text-purple-700/40 text-xs font-semibold uppercase tracking-widest min-h-[100px] ${className}`}
        aria-label="Ad placeholder"
      >
        {label} placeholder
      </div>
    );
  }

  return (
    <div className={className} aria-label={label}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

/**
 * Loads the AdSense script once, in <head>. No-op when the env var is missing.
 */
export function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return null;
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
    />
  );
}
