import Section from "../ui/Section.jsx";
import { useInView } from "../../useInView";

export default function Reviews() {
  const [ref, inView] = useInView();

  return (
    <Section id="reviews" title="What Men Say" className="bg-zinc-900">
      <div
        ref={ref}
        className={`mt-8 grid gap-6 md:grid-cols-2 transition-all duration-700 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
     
        <blockquote
          className={`rounded-lg border border-zinc-800 bg-zinc-950 p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <p className="text-zinc-200">
            I came in skeptical... Week 3 I cried writing a worksheet for the first time in
            twenty years. By Week 9 I was off the nightly scotch.
          </p>
          <footer className="mt-3 text-sm text-zinc-400">
            David M., 52 — Atlanta, GA
          </footer>
        </blockquote>

       
        <blockquote
          className={`rounded-lg border border-zinc-800 bg-zinc-950 p-6 transition-all duration-700 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <p className="text-zinc-200">
            The physical stuff was exactly what I needed... Week 8 is the one. I&apos;ve recommended
            this to four men in the last six months.
          </p>
          <footer className="mt-3 text-sm text-zinc-400">
            Mark T., 47 — Denver, CO
          </footer>
        </blockquote>

       
        <blockquote
          className={`rounded-lg border border-zinc-800 bg-zinc-950 p-6 transition-all duration-700 delay-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <p className="text-zinc-200">
            I bought this three months after my divorce... It gave me structure. And structure was
            exactly what I was missing.
          </p>
          <footer className="mt-3 text-sm text-zinc-400">
            James R., 55 — Portland, OR
          </footer>
        </blockquote>

       
        <blockquote
          className={`rounded-lg border border-zinc-800 bg-zinc-950 p-6 transition-all duration-700 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            inView
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <p className="text-zinc-200">
            Evander doesn&apos;t pretend this is easy... The fitness guide paired with the course is the
            combination. I&apos;ve lost 22 lbs and feel like myself again.
          </p>
          <footer className="mt-3 text-sm text-zinc-400">
            Paul K., 49 — Austin, TX
          </footer>
        </blockquote>
      </div>
    </Section>
  );
}