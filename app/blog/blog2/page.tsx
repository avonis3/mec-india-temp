import Link from "next/link";

export default function Blog2Page() {
  return (
    <>
      <BlogHero
        category="Modular Displays"
        title="Why Modular Exhibition Stalls Are the Future"
        image="/images/homepage/service2.png"
      />

      <BlogArticle>
        <p>
  Businesses today participate in multiple exhibitions throughout the year,
  making flexibility and cost efficiency more important than ever. Modular
  exhibition stalls have become a popular solution because they combine modern
  design with the ability to adapt to different exhibition spaces.
</p>

<h2>What is a modular exhibition stall?</h2>

<p>
  A modular stall is built using reusable structural components that can be
  assembled, dismantled, and reconfigured for different exhibitions. Unlike
  permanent custom-built structures, modular systems provide greater flexibility
  while maintaining a professional appearance.
</p>

<h2>Cost-effective for multiple events</h2>

<p>
  Companies exhibiting at several trade shows can significantly reduce costs by
  reusing key structural elements instead of building a completely new stall for
  every event. Graphics, branding panels, and display sections can also be
  updated without replacing the entire setup.
</p>

<p>
  This makes modular solutions an excellent choice for businesses looking to
  maintain a consistent brand presence while keeping exhibition budgets under
  control.
</p>

<h2>Easy to transport and install</h2>

<p>
  Modular systems are designed for efficient transportation and quick
  installation. Their lightweight construction reduces logistics challenges and
  allows installation teams to complete projects within tight exhibition
  schedules without compromising quality.
</p>

<h2>Designed for flexibility</h2>

<p>
  One of the biggest advantages of modular exhibition displays is their ability
  to adapt. The same components can often be configured for different stall
  sizes, layouts, and exhibition venues, allowing brands to maintain a
  professional image wherever they exhibit.
</p>

<p>
  At MEC India, we combine creative design with high-quality modular systems to
  deliver exhibition stalls that are attractive, practical, and built for
  repeated use.
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