import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto text-center pt-16">
      <div className="text-7xl mb-4">🍼</div>
      <h1 className="font-display font-bold text-3xl text-purple-900 mb-3">
        Page not found
      </h1>
      <p className="text-purple-900/70 mb-6">
        That page wandered off. Let&apos;s get you back to the names.
      </p>
      <Link
        href="/"
        className="inline-block bubble-pink text-purple-900 font-semibold rounded-full px-6 py-3 shadow-glass"
      >
        ← Back home
      </Link>
    </div>
  );
}
