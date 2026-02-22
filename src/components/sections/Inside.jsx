import Section from "../ui/Section.jsx";
import Card from "../ui/Card.jsx";

export default function Inside() {
  return (
    <Section id="inside" title="What&apos;s Inside Each Product" className="bg-zinc-900">
      <p className="mt-2 text-zinc-400">A Closer Look</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card headline="The Wreckage and the Man (BOOK)">
          <div className="mx-auto max-w-sm">
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>The memoir that started everything</li>
              <li>Context behind the course</li>
              <li>Available in print and digital</li>
              <li>Personal transformation stories</li>
              <li>Lessons learned from adversity</li>
              <li>Exclusive author insights</li>
              <li>Bonus chapter: Moving Forward</li>
            </ul>
          </div>
        </Card>
        <Card headline="The Rebuild Workbook">
          <div className="mx-auto max-w-sm">
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>12-week guided workbook across 4 phases</li>
              <li>All weeks of mindset lessons and worksheets</li>
              <li>Habit tracker, movement & nutrition guides</li>
              <li>Print-ready PDF, lifetime access</li>
              <li>Step-by-step progress tracking system</li>
            </ul>
          </div>
        </Card>
        <Card headline="Lean &amp; Strong After 40">
          <div className="mx-auto max-w-sm">
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>3-phase progressive training</li>
              <li>Home & gym tracks</li>
              <li>Macro targets, meal plans, recipes</li>
              <li>12-week progress log</li>
              <li>Recovery and injury prevention tips</li>
              <li>Community support access</li>
              <li>Supplement guidance for optimal results</li>
            </ul>
          </div>
        </Card>
        
      </div>
    </Section>
  );
}
