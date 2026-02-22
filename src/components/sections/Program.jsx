import Section from "../ui/Section.jsx";
import { useInView } from "../../useInView";

export default function Program() {
  const [ref, inView] = useInView();
  return (
    <Section id="program" title="The Rebuild Course — 12 Weeks. 4 Phases." className="bg-zinc-950">
      <div
        ref={ref}
        className={`mt-8 grid gap-6 md:grid-cols-2 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className={`rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          }`}>
          <h3 className="font-semibold">The Foundation</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>Week 1 — The Honest Inventory</li>
            <li>Week 2 — The Body Starts Here</li>
            <li>Week 3 — Building the Container</li>
          </ul>
        </div>
        <div className={`rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
  }`}>
          <h3 className="font-semibold">The Rewire</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>Week 4 — The Morning Protocol</li>
            <li>Week 5 — Feeding the Machine</li>
            <li>Week 6 — Strength as Practice</li>
          </ul>
        </div>
        <div className={`rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
  }`}>
          <h3 className="font-semibold">The Interior</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>Week 7 — Cortisol and the Body Under Stress</li>
            <li>Week 8 — Emotional Fitness</li>
            <li>Week 9 — Honest Relationship With Substances</li>
          </ul>
        </div>
        <div className={`rounded-lg border border-zinc-800 bg-zinc-900 p-6 transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
  }`}>
          <h3 className="font-semibold">The Becoming</h3>
          <ul className="mt-3 space-y-2 text-zinc-300">
            <li>Week 10 — Brotherhood</li>
            <li>Week 11 — Why You&apos;re Here</li>
            <li>Week 12 — The Man You&apos;re Becoming</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
