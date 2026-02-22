import Section from "../ui/Section.jsx";
import Card from "../ui/Card.jsx";

export default function Bundles() {
  return (
    <Section id="bundles" title="Bundles — Buy Together, Save More" className="bg-zinc-950">
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Card headline="Greek Gladiator Bundle" sub="Workbook + Book" link = "https://wellnessbookss.gumroad.com/l/greekgladiatorbundle">
          <p>Save $8 — buy together</p>
        </Card>
        <Card headline="Greek God Bundle" sub="Workbook + Fitness Guide " link = "https://wellnessbookss.gumroad.com/l/greekgodbundle">
          <p>Save $10 — buy together</p>
        </Card>
        <Card badge="Best Value" headline="Greek Titan Bundle" sub="All 3 products" link = "https://wellnessbookss.gumroad.com/l/exdpjfn">
          <p>Save $15 — everything included</p>
        </Card>
      </div>
      <ul className="mt-8 grid gap-2 text-zinc-300 md:grid-cols-2">
        <li>✓ Instant PDF download</li>
        <li>✓ Lifetime access</li>
        <li>✓ 30-day money-back guarantee</li>
        <li>✓ Secure checkout via Gumroad</li>
      </ul>
    </Section>
  );
}
