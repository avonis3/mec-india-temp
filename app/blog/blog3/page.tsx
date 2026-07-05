import Link from "next/link";

export default function Blog3Page() {
  return (
    <>
      <BlogHero
        category="Factory Health"
        title="Why Annual Medical Check-up Is Essential in Factories"
        image="/images/homepage/service3.png"
      />

      <BlogArticle>
        <p>
          Factory work can involve machinery, dust, heat, noise, chemicals,
          heavy lifting, repetitive movement, and long working hours. Annual
          medical check-ups help identify health issues early and protect
          workers from occupational risks.
        </p>

        <h2>Early detection protects workers</h2>

        <p>
          Many health problems develop silently. High blood pressure, diabetes,
          lung issues, hearing loss, and vision problems may not show clear
          symptoms in the early stages. A yearly check-up helps detect these
          problems before they become serious.
        </p>

        <h2>What can be included?</h2>

        <p>
          A factory medical check-up may include blood tests, urine tests, ECG,
          lung function test, audiometry, vision test, chest X-ray, and general
          physician examination. The exact test package depends on the industry
          and worker exposure.
        </p>

        <p>
          For example, workers exposed to dust may need lung function testing,
          while workers exposed to noise may need regular hearing checks.
        </p>

        <h2>Benefits for companies</h2>

        <p>
          Annual check-ups support employee wellbeing, reduce absenteeism, and
          help maintain health records. They also help management understand
          workplace risks and improve safety measures.
        </p>

        <h2>A safer workplace culture</h2>

        <p>
          Medical check-ups should not be seen only as a compliance activity.
          They are part of a responsible safety culture where employee health is
          treated as a priority.
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