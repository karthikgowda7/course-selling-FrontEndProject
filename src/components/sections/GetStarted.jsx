import Section from "../ui/Section.jsx";
import { useInView } from "../../useInView";

export default function GetStarted() {
  const [ref, inView] = useInView();
  return (
    <Section id="get-started" className="bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-3xl text-center transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="text-3xl text-zinc-700 md:text-4xl font-semibold">Start Your Rebuild Today</h2>
        <p className="mt-4 text-zinc-700">
          You&apos;ve read this far because part of you recognized something. That recognition is the first step toward change.
        </p>
        <div className="mt-8">
          <a href="#products" className="rounded-lg bg-amber-700 px-6 py-3 text-white hover:bg-amber-800">
            Get Started
          </a>
        </div>
        <p className="mt-4 text-sm text-zinc-500">30-day guarantee · Lifetime access · Start any time</p>
      </div>
    </Section>
  );
}
