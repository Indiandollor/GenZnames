import Link from "next/link";
import { notFound } from "next/navigation";
import { NAMES, type Origin, type Gender } from "@/data/names";
import { NameBrowser } from "@/components/NameBrowser";
import { AdSlot } from "@/components/AdSlot";

const ORIGIN_LABEL: Record<Origin, { label: string; emoji: string }> = {
  indian: { label: "Indian", emoji: "🪔" },
  english: { label: "English", emoji: "🌷" },
};

const GENDER_LABEL: Record<Gender, { label: string; emoji: string; accent: string }> = {
  boy: { label: "Boy", emoji: "👦", accent: "bubble-sky" },
  girl: { label: "Girl", emoji: "👧", accent: "bubble-pink" },
};

export function generateStaticParams() {
  const out: { origin: string; gender: string }[] = [];
  for (const o of ["indian", "english"]) for (const g of ["boy", "girl"]) out.push({ origin: o, gender: g });
  return out;
}

export default async function NamesListPage({
  params,
}: {
  params: Promise<{ origin: string; gender: string }>;
}) {
  const { origin, gender } = await params;
  if (origin !== "indian" && origin !== "english") notFound();
  if (gender !== "boy" && gender !== "girl") notFound();

  const list = NAMES.filter(
    (n) => n.origin === (origin as Origin) && n.gender === (gender as Gender),
  ).sort((a, b) => a.name.localeCompare(b.name));

  const o = ORIGIN_LABEL[origin as Origin];
  const g = GENDER_LABEL[gender as Gender];

  return (
    <div className="max-w-5xl mx-auto pt-6 sm:pt-10">
      <section className="mb-8 animate-pop">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-700/70 mb-4">
          <Link href="/" className="hover:text-purple-900 hover:underline underline-offset-4">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/names/${origin}`}
            className="hover:text-purple-900 hover:underline underline-offset-4"
          >
            {o.label}
          </Link>
          <span>/</span>
          <span className="text-purple-900">{g.label}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:justify-between">
          <div>
            <div className={`inline-flex items-center gap-2 ${g.accent} text-purple-900 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-3 shadow-glass`}>
              {o.emoji} {o.label} {g.emoji} {g.label}
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-purple-900">
              {o.label} {g.label} Names
            </h1>
            <p className="mt-2 text-purple-900/70">
              {list.length} curated names with meanings.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-8">
        <AdSlot slot={`${origin}_${gender}_top`} label="Sponsored" />
      </div>

      <NameBrowser names={list} />

      <div className="mt-10">
        <AdSlot slot={`${origin}_${gender}_bottom`} label="Sponsored" />
      </div>
    </div>
  );
}
