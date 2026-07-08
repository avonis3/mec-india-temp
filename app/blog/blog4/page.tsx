import Link from "next/link";

export default function Blog4Page() {
  return (
    <>
      <BlogHero
        category="Fabrication"
        title="Behind the Scenes: Exhibition Stall Fabrication Process"
        image="/images/homepage/ourwork1.png"
      />

      <BlogArticle>
        <p>
  Turning a creative design into a finished exhibition stall requires precision,
  planning, and skilled craftsmanship. The fabrication process plays a crucial
  role in ensuring every design is built safely, accurately, and on schedule for
  the exhibition.
</p>

<h2>From concept to production</h2>

<p>
  Once a design is approved, detailed production drawings are prepared before
  fabrication begins. Every structural element, display panel, lighting fixture,
  and branding component is carefully planned to ensure smooth assembly at the
  venue.
</p>

<h2>Quality materials matter</h2>

<p>
  Selecting the right materials is essential for durability, appearance, and
  safety. Depending on the project requirements, fabrication may involve wood,
  metal, acrylic, glass, modular systems, fabric graphics, and premium finishes
  that enhance the overall presentation.
</p>

<h2>Precision and workmanship</h2>

<p>
  Skilled fabrication teams ensure every component is manufactured with attention
  to detail. Accurate measurements, clean finishes, and strong structural
  construction help deliver a professional exhibition stall that performs
  reliably throughout the event.
</p>

<h2>Installation and final execution</h2>

<p>
  After fabrication, all components are transported to the venue where the stall
  is assembled, branded, and inspected before the exhibition opens. Careful
  project management ensures timely completion without compromising quality.
</p>

<p>
  At MEC India, our in-house fabrication capabilities allow us to maintain high
  quality standards while delivering exhibition stalls that are visually
  impressive and built to last.
</p>
      </BlogArticle>
    </>
  );
}

function BlogHero({
  category,
  title,
  image,
}: {
  category: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 lg:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        <Link href="/blog" className="text-[13px] text-white/45 hover:text-white">
          ← Back to Blog
        </Link>

        <p className="mt-8 text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
          {category}
        </p>

        <h1 className="mt-4 text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
          {title}
        </h1>

        <p className="mt-5 text-[14px] text-white/45">January 2026 • 5 min read</p>
      </div>
    </section>
  );
}

function BlogArticle({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-14 lg:py-16">
      <article className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="prose-content">{children}</div>
      </article>
    </section>
  );
}