import Section from "../ui/Section.jsx";

export default function FAQ() {
  return (
    <Section id="faq" title="Frequently Asked Questions" className="bg-zinc-950">
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="font-semibold">Is this wellness or fitness?</h3>
          <p className="mt-2 text-zinc-300">
            Both, in the honest sense. The physical and psychological are treated as inseparable.
          </p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="font-semibold">Do I need a gym?</h3>
          <p className="mt-2 text-zinc-300">
            No. The workbook requires time and honesty. Movement ranges from walking to bodyweight.
          </p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="font-semibold">Is this a recovery program?</h3>
          <p className="mt-2 text-zinc-300">
            No. It&apos;s complementary to recovery. Week 9 is handled with care; use your judgment.
          </p>
        </div>
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
          <h3 className="font-semibold">How much time per week?</h3>
          <p className="mt-2 text-zinc-300">
            Budget 4–6 hours for lessons, worksheets, and daily habits.
          </p>
        </div>
      </div>
    </Section>
  );
}
