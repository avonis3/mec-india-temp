import Link from "next/link";

export default function Blog1Page() {
  return (
    <>
      <BlogHero
        category="Occupational Health"
        title="Pre-employment Health Check-up for Food Handlers"
        image="/images/homepage/service1.png"
      />

      <BlogArticle>
        <p>
          Food handlers work directly with raw ingredients, cooked food,
          packaging materials, serving counters, and storage areas. Because of
          this, their health has a direct impact on food safety. A
          pre-employment health check-up helps confirm that a new employee is
          medically fit to work in a food-handling environment.
        </p>

        <h2>Why this check-up matters</h2>

        <p>
          Food-borne infections can spread quickly if hygiene standards are not
          maintained. Even one infected worker can create a risk for customers,
          co-workers, and the company. Medical screening helps detect visible
          and hidden health problems before the person starts work.
        </p>

        <p>
          These checks are especially important for hotels, restaurants,
          canteens, food factories, cloud kitchens, catering companies, and
          packaging units. They help businesses maintain hygiene standards and
          build customer confidence.
        </p>

        <h2>What tests are usually included?</h2>

        <p>
          A basic food handler check-up may include a general physical
          examination, skin inspection, respiratory screening, stool test, blood
          test, and other tests depending on company policy or industry
          requirements.
        </p>

        <p>
          The purpose is not to reject employees unfairly. The purpose is to
          identify health risks early and guide the worker towards proper
          treatment when required.
        </p>

        <h2>How often should it be done?</h2>

        <p>
          A pre-employment check-up should be done before joining. After that,
          companies should conduct periodic medical checks based on workplace
          risk, hygiene requirements, and applicable rules.
        </p>

        <p>
          Regular health monitoring, combined with training in hand hygiene,
          protective clothing, and safe food handling, creates a safer workplace
          and reduces avoidable risks.
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

        <p className="mt-8 text-[12px] font-semibold tracking-[0.14em] uppercase text-[#C41E3A]">
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
            className="inline-flex mt-6 bg-[#C41E3A] hover:bg-[#A0182F] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </section>
  );
}