import Link from "next/link";

export default function Blog5Page() {
  return (
    <>
      <BlogHero
        category="Preventive Health"
        title="Why Vitamin B12 and Vitamin D Tests Should Be Done Regularly"
        image="/images/homepage/ourwork2.png"
      />

      <BlogArticle>
        <p>
          Vitamin B12 and Vitamin D deficiencies are very common today,
          especially among people with indoor lifestyles, limited sunlight
          exposure, vegetarian diets, irregular meals, and long working hours.
        </p>

        <h2>Why Vitamin B12 is important</h2>

        <p>
          Vitamin B12 supports nerve function, blood cell formation, energy
          levels, and brain health. Low B12 may cause tiredness, weakness,
          numbness, memory issues, mood changes, and nerve-related symptoms.
        </p>

        <h2>Why Vitamin D is important</h2>

        <p>
          Vitamin D supports bone strength, muscle function, immunity, and
          overall wellbeing. Low Vitamin D can lead to body pain, weakness,
          frequent fatigue, low mood, and increased risk of bone-related issues.
        </p>

        <h2>Why regular testing helps</h2>

        <p>
          Many people ignore symptoms or blame them on workload and stress.
          Regular testing helps identify deficiencies early. Once detected,
          doctors can recommend diet changes, supplements, sunlight exposure, or
          further evaluation.
        </p>

        <h2>Useful for workplace wellness</h2>

        <p>
          Including Vitamin B12 and Vitamin D tests in employee wellness packages
          can help companies support energy, productivity, and preventive health.
        </p>

        <p>
          Regular testing is simple, practical, and useful for long-term health
          management.
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