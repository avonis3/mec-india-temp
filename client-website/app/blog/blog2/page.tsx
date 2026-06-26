import Link from "next/link";

export default function Blog2Page() {
  return (
    <>
      <BlogHero
        category="Lab Testing"
        title="Blood Lead Test: Meaning, Importance, and When It Is Needed"
        image="/images/homepage/service2.png"
      />

      <BlogArticle>
        <p>
          A blood lead test measures the amount of lead present in a person’s
          blood. Lead exposure is a serious occupational health concern in
          industries where workers may come in contact with lead dust, fumes, or
          contaminated materials.
        </p>

        <h2>Where can lead exposure happen?</h2>

        <p>
          Lead exposure can happen in battery manufacturing, painting,
          construction, metal work, welding, recycling, printing, ceramics, and
          similar industrial environments. Workers may inhale lead particles or
          accidentally ingest them through contaminated hands, food, or surfaces.
        </p>

        <h2>Why is lead dangerous?</h2>

        <p>
          Lead can affect the nervous system, kidneys, blood cells, digestive
          system, and overall health. In many cases, symptoms develop slowly.
          Workers may experience tiredness, stomach pain, headache, irritability,
          weakness, or concentration issues.
        </p>

        <p>
          Because early symptoms may look minor, regular testing becomes
          important. It helps identify exposure before it becomes a serious
          health problem.
        </p>

        <h2>Who should get tested?</h2>

        <p>
          Employees working in high-risk environments should undergo blood lead
          testing at regular intervals. The frequency depends on the nature of
          the job, workplace exposure level, and safety policy.
        </p>

        <p>
          If a worker shows high lead levels, the company should review workplace
          controls, ventilation, PPE use, housekeeping, and medical follow-up.
        </p>

        <h2>How does testing help companies?</h2>

        <p>
          Blood lead testing protects employees and also helps companies monitor
          whether safety systems are working. It supports occupational health
          compliance and reduces long-term health risks.
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