import Link from "next/link";

export default function Blog4Page() {
  return (
    <>
      <BlogHero
        category="Corporate Wellness"
        title="Stress Management in IT Companies"
        image="/images/homepage/ourwork1.png"
      />

      <BlogArticle>
        <p>
          IT employees often work under tight deadlines, long screen hours,
          continuous client communication, and fast-changing project
          requirements. Over time, this can create stress, fatigue, poor sleep,
          reduced focus, and burnout.
        </p>

        <h2>Why stress management matters</h2>

        <p>
          Stress does not only affect mental health. It can also affect physical
          health, productivity, communication, teamwork, and employee retention.
          A stressed team may complete work, but not always with energy,
          creativity, or consistency.
        </p>

        <h2>What companies can do</h2>

        <p>
          IT companies can support employees through wellness sessions,
          counselling support, ergonomic workstations, planned breaks, realistic
          deadlines, health check-ups, and manager awareness training.
        </p>

        <p>
          Stress management should not be treated as a one-day workshop. It
          should become part of the company culture.
        </p>

        <h2>Role of health check-ups</h2>

        <p>
          Regular health screening can identify stress-related issues such as
          high blood pressure, sleep problems, low vitamin levels, and other
          early warning signs. This helps employees take corrective steps before
          problems become severe.
        </p>

        <h2>Healthy employees build stronger teams</h2>

        <p>
          When employees feel supported, they communicate better, perform better,
          and stay longer with the organisation. Stress management is good for
          people and good for business.
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