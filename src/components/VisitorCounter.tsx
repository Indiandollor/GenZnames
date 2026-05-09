"use client";

import { useEffect, useState } from "react";

/**
 * Live visitor counter — uses the free public Abacus counter API
 * (https://abacus.jasoncameron.dev). No signup, no auth, no backend needed.
 *
 * The namespace + key uniquely identify our counter; pick something
 * unguessable so others can't spam it. To swap providers later, replace
 * the two URLs below — the rest of the component stays the same.
 *
 * On first visit per browser session we hit /hit (which increments and
 * returns the new count). Subsequent renders use /get (read-only).
 */
const NAMESPACE = "genznames-com";
const KEY = "site-visits-v1";
const HIT_URL = `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;
const GET_URL = `https://abacus.jasoncameron.dev/get/${NAMESPACE}/${KEY}`;

const SESSION_FLAG = "gz_visit_counted";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const alreadyCounted =
          typeof window !== "undefined" &&
          window.sessionStorage.getItem(SESSION_FLAG) === "1";

        const url = alreadyCounted ? GET_URL : HIT_URL;
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`status ${res.status}`);
        const data = (await res.json()) as { value?: number };

        if (!alreadyCounted) {
          window.sessionStorage.setItem(SESSION_FLAG, "1");
        }
        if (!cancelled && typeof data.value === "number") {
          setCount(data.value);
        }
      } catch {
        if (!cancelled) setErrored(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (errored) return null; // fail silently — don't break the footer

  return (
    <div
      className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-purple-900/80"
      aria-live="polite"
    >
      <span className="text-base">👀</span>
      <span>
        {count === null ? (
          <span className="text-purple-900/40">Loading visitors…</span>
        ) : (
          <>
            <span className="font-bold text-purple-900">
              {count.toLocaleString()}
            </span>{" "}
            <span className="text-purple-900/60">happy parents have visited</span>
          </>
        )}
      </span>
    </div>
  );
}
