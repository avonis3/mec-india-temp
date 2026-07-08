import Link from "next/link";

export default function Blog3Page() {
  return (
    <>
      <BlogHero
        category="Branding Solutions"
        title="Exhibition Branding That Makes Your Stall Stand Out"
        image="/images/homepage/service3.png"
      />

      <BlogArticle>
        <p>
  A successful exhibition stall is more than an attractive structure—it is a
  physical representation of your brand. Every colour, graphic, product display,
  and visitor interaction should communicate a consistent brand identity. Strong
  branding helps visitors remember your company long after the exhibition has
  ended.
</p>

<h2>Why branding matters at exhibitions</h2>

<p>
  Exhibition halls are filled with competing businesses, making it essential for
  brands to stand out instantly. A professionally branded stall attracts
  attention, builds credibility, and encourages visitors to explore your
  products and services.
</p>

<p>
  Clear messaging, consistent colours, high-quality graphics, and well-placed
  logos make it easier for visitors to recognise your company even from a
  distance. Strong visual branding also improves recall after the event.
</p>

<h2>Creating a consistent experience</h2>

<p>
  Effective branding goes beyond banners and signboards. Furniture, lighting,
  digital displays, product showcases, uniforms, and interactive elements should
  all reflect the same visual identity. Consistency creates a professional
  impression and strengthens customer confidence.
</p>

<h2>Communicating your message</h2>

<p>
  Visitors should immediately understand who you are and what your business
  offers. Short, impactful messaging combined with attractive visuals helps
  communicate your value proposition without overwhelming the audience.
</p>

<h2>Building lasting brand recognition</h2>

<p>
  A memorable exhibition experience encourages visitors to remember your company
  long after the event. At MEC India, we create branding solutions that combine
  creativity, functionality, and strategic design to maximise your exhibition
  presence.
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

        <div className="mt-12 rounded-xl bg-[#F4F4F2] p-7 text-center">
          <h2 className="text-[24px] font-extrabold text-[#111111]">
            Need a workplace health package?
          </h2>
          <p className="mt-3 text-[15px] text-[#6B7280] leading-7">
            Speak to our team for customised health check-up solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-6 bg-[var(--accent)] hover:bg-[var(--primary-dark)] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </section>
  );
}