import Section from "../ui/Section.jsx";
import { useInView } from "../../useInView";

export default function Hero() {
  const [ref, inView] = useInView();
  return (
    <Section id="top" className="bg-zinc-950">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl text-center transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
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
            className="inline-flex items-center justify-center rounded-lg bg-amber-700 px-6 py-2.5 text-white font-medium border border-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(0,0,0,0.25)] hover:border-amber-300/70 hover:ring-1 hover:ring-amber-300/40 active:translate-y-0 active:scale-95 rounded-lg bg-amber-700 px-5 py-3 text-white hover:bg-amber-800"
          >
            Explore Resources
          </a>
          <a
            href="#is-this-for-me"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-5 py-3 text-zinc-100 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-amber-400/80 hover:bg-zinc-900 hover:shadow-[0_18px_35px_rgba(0,0,0,0.35)] hover:ring-1 hover:ring-amber-400/40 active:translate-y-0 active:scale-95"
          >
            See If This Is For You
          </a>
        </div>
      </div>
    </Section>
  );
}
