import Section from "../ui/Section.jsx";
import { useInView } from "../../useInView";

export default function ForWhom() {
  const [ref, inView] = useInView();
  return (
    <Section id="is-this-for-me" title="Who This Is For" className="bg-zinc-900">
      <p className="mt-2 text-zinc-400">This Is Not for Everyone.</p>
      <div
        ref={ref}
        className={`mt-8 grid gap-8 md:grid-cols-2 transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div>
          <h3 className="text-lg font-semibold">This is for you if…</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>✓ You&apos;ve been through a divorce, a loss, a breakdown</li>
            <li>✓ You&apos;re in your 40s or 50s and need a starting point</li>
            <li>✓ You&apos;ve tried things before and they haven&apos;t stuck</li>
            <li>✓ You want a method, not motivation</li>
            <li>✓ You want to feel like a man with his life together</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">This is not for you if…</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>— You&apos;re looking for a quick fix</li>
            <li>— You&apos;re not ready to look honestly at your habits</li>
            <li>— You need clinical mental health support</li>
            <li>— You&apos;re an advanced competitive athlete</li>
            <li>— You want to be told what you want to hear</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
