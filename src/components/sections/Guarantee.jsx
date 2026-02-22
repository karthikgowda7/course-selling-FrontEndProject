import Section from "../ui/Section.jsx";
import { useInView } from "../../useInView";

export default function Guarantee() {
  const [ref, inView] = useInView();
  return (
    <Section id="guarantee" className="bg-gray-900 text-white">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl text-center transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl font-bold ring-2 ring-amber-700">
          30
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold">Do the Work. Money Back if it Doesn&apos;t Move You.</h2>
        <p className="mt-4 text-zinc-200">
          Complete the first four weeks — worksheets, habits, movement. If after 30 days you don&apos;t feel a meaningful shift,
          email us and we&apos;ll return every dollar.
        </p>
      </div>
    </Section>
  );
}
