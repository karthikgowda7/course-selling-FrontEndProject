import Section from "../ui/Section.jsx";

export default function Guarantee() {
  return (
    <Section id="guarantee" className="bg-gray-900 text-white">
      <div className="mx-auto max-w-4xl text-center">
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
