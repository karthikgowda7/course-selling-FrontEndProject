import Section from "../ui/Section.jsx";
import Card from "../ui/Card.jsx";
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"

export default function Products() {
  return (
    <Section id="products" title="Choose Your Starting Point" className="bg-zinc-900">
      <p className="mt-3 text-zinc-400">Instant download · Lifetime access</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          headline="Book"
          sub="The Wreckage and the Man"
          imageSrc={image1}
          imageAlt="Book cover"
          link = "https://wellnessbookss.gumroad.com/l/thewreckageandtheman"
        >
          <p>
            Evander&apos;s raw account of losing everything — and finding his way
            back. The foundation beneath all the other work.
          </p>
        </Card>


        <Card
          badge="Most Popular"
          headline="12-Week Workbook"
          sub="The Rebuild Workbook"
          imageSrc={image2}
          imageAlt="Workbook"
          link = "https://wellnessbookss.gumroad.com/l/therebuildworkbook"
        >
          <p>
            12 weeks. 4 phases. Written worksheets, mindset lessons, habit tracker, and
            movement guide. Print it and do the work.
          </p>
        </Card>


        <Card
          headline="Fitness Guide"
          sub="Lean &amp; Strong After 40"
          imageSrc={image3}
          imageAlt="Fitness guide"
          link = "https://wellnessbookss.gumroad.com/l/leanandstrongafter40fitnessguide"
        >
          <p>
            Science-based 12-week fat loss and strength plan. Home and gym tracks, full
            meal plans, macro targets.
          </p>
        </Card>
      </div>
    </Section>
  );
}
