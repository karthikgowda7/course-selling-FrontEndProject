import Section from "../ui/Section.jsx";

export default function Hero() {
  return (
    <Section id="top" className="bg-zinc-950">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-widest text-zinc-400">
          For Men 40–60 Ready to Rebuild
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
          A Clear Path Back to Strength, Clarity, and Self-Respect
        </h1>
        <div className="mt-8 flex flex-col items-center gap-3 text-zinc-400 md:flex-row md:justify-center">
          <span>Instant download</span>
          <span className="hidden md:block">·</span>
          <span>Lifetime access</span>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#products"
            className="rounded-lg bg-amber-700 px-5 py-3 text-white hover:bg-amber-800"
          >
            Explore Resources
          </a>
          <a
            href="#is-this-for-me"
            className="rounded-lg border border-zinc-700 px-5 py-3 text-zinc-100 hover:bg-zinc-900"
          >
            See If This Is For You
          </a>
        </div>
      </div>
    </Section>
  );
}
