import Section from "../ui/Section.jsx";

export default function Author() {
  return (
    <Section id="author" title="The Author" className="bg-zinc-950">
      <div className="mt-6 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <p className="text-sm uppercase tracking-widest text-zinc-400">Evander Richard</p>
          <p className="text-zinc-300">Author of The Wreckage and the Man</p>
          <p className="text-zinc-300">Creator of The Rebuild</p>
        </div>
        <div className="md:col-span-2 space-y-4 text-zinc-300">
          <p>
            "I&apos;m not asking you to trust me because I have credentials. I&apos;m asking you
            to trust the work because the work is real — and because you&apos;re out of better
            ideas. Or you wouldn&apos;t be reading this."
          </p>
          <p>
            My name is Evander Richard. I&apos;m fifty-five years old. I built these resources
            because ten years ago I needed them and they didn&apos;t exist. By the time I was
            forty-six, I had survived — barely — a divorce that took the house, the kids&apos; primary
            address, and most of my identity...
          </p>
        </div>
      </div>
    </Section>
  );
}
