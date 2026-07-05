import Link from "next/link";

const blogs = [
  {
    title: "Pre-employment Health Check-up for Food Handlers",
    category: "Occupational Health",
    date: "January 2026",
    excerpt:
      "Why food handlers should undergo medical screening before employment and how it helps maintain hygiene and workplace safety.",
    image: "/images/homepage/service1.png",
    href: "/blog/blog1"
  },
  {
    title: "Blood Lead Test: Meaning, Importance, and When It Is Needed",
    category: "Lab Testing",
    date: "January 2026",
    excerpt:
      "A simple guide to blood lead testing, who needs it, and why regular monitoring matters in high-risk work environments.",
    image: "/images/homepage/service2.png",
    href: "/blog/blog2",
  },
  {
    title: "Why Annual Medical Check-up Is Essential in Factories",
    category: "Factory Health",
    date: "January 2026",
    excerpt:
      "Annual check-ups help detect early health risks, support compliance, and protect factory workers from occupational illnesses.",
    image: "/images/homepage/service3.png",
    href: "/blog/blog3",
  },
  {
    title: "Stress Management in IT Companies",
    category: "Corporate Wellness",
    date: "January 2026",
    excerpt:
      "Practical ways companies can identify workplace stress and support employee wellbeing in high-pressure IT environments.",
    image: "/images/homepage/ourwork1.png",
    href: "/blog/blog4",
  },
  {
    title: "Why Vitamin B12 and Vitamin D Tests Should Be Done Regularly",
    category: "Preventive Health",
    date: "January 2026",
    excerpt:
      "Vitamin deficiencies are common and often ignored. Regular testing can help detect problems before symptoms become severe.",
    image: "/images/homepage/ourwork2.png",
    href: "/blog/blog5",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/homepage/ourwork1.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Blog</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[var(--accent)]" />
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
              Insights
            </p>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Insights and Updates
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Helpful articles on occupational health, workplace wellness, and
            preventive medical testing.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <article
                key={blog.title}
                className="group bg-white rounded-[10px] overflow-hidden border border-[#E5E7EB] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[var(--accent)]">
                      {blog.category}
                    </span>
                    <span className="text-[12px] text-[#6B7280]">
                      {blog.date}
                    </span>
                  </div>

                  <h2 className="text-[20px] font-bold leading-snug text-[#111111] mb-3">
                    {blog.title}
                  </h2>

                  <p className="text-[14.5px] text-[#4B5563] leading-7 mb-5">
                    {blog.excerpt}
                  </p>

                  <Link
                    href={blog.href}
                    className="inline-flex text-[13.5px] font-semibold text-[var(--accent)]"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}