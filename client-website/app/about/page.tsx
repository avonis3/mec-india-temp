import Link from "next/link";

const stats = [
  ["20+", "Years Experience"],
  ["500+", "Projects Completed"],
  ["200+", "Satisfied Clients"],
  ["15+", "Industries Served"],
];

const values = [
  [
    "Innovation",
    "We bring fresh ideas to every brief, designing stalls that stand apart from the crowd.",
  ],
  [
    "Quality",
    "No shortcuts. We use premium materials and skilled craftsmen on every project.",
  ],
  [
    "Reliability",
    "Deadlines are sacred to us. Our clients rely on us to deliver, and we always do.",
  ],
  [
    "Client Focus",
    "Your success at the exhibition is our success. We work as a true partner, not just a vendor.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: "url('/images/homepage/about_mec.png')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">About Us</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#C41E3A]" />
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#C41E3A]">
              Our Story
            </p>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            About MEC India
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Materialistic Exhibitors Collection LLP, building exceptional
            exhibition experiences since 2005.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#C41E3A]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">
                Who We Are
              </p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
              20 years of building brand presence.
            </h2>

            <p className="mt-5 text-[15.5px] text-[#4B5563] leading-7">
              MEC India was founded in 2005 by a team of exhibition design
              professionals with a simple vision: deliver high-quality stalls on
              time, every time. What started as a small workshop in Mumbai has
              grown into one of India&apos;s trusted exhibition stall design and
              build companies.
            </p>

            <p className="mt-4 text-[15.5px] text-[#4B5563] leading-7">
              We serve clients across pharmaceuticals, manufacturing,
              agriculture, technology, healthcare, and more. From a 9 sqm
              Octanorm booth to a 200 sqm custom German Hanger structure, our
              team handles every project with the same attention to detail.
            </p>

            <p className="mt-4 text-[15.5px] text-[#4B5563] leading-7">
              Today, MEC India operates Pan India, delivering stalls at major
              venues in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune,
              Ahmedabad, and beyond.
            </p>
          </div>

          <div className="relative">
            <img
              src="/images/homepage/whychoose.png"
              alt="About MEC India"
              className="w-full aspect-[4/3] object-cover rounded-[10px]"
            />

            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#C41E3A] text-white px-6 py-5 rounded-lg shadow-xl">
              <div className="text-4xl font-extrabold leading-none">20+</div>
              <div className="mt-1 text-[11px] font-semibold tracking-[0.08em] uppercase opacity-80">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-12 lg:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {stats.map(([num, label], index) => (
            <div
              key={label}
              className={`lg:px-10 ${
                index !== 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              <h2 className="text-[38px] sm:text-[46px] lg:text-[56px] font-extrabold text-white leading-none tracking-[-0.03em]">
                {num.replace("+", "")}
                <span className="text-[#C41E3A] text-[0.65em] align-super">
                  +
                </span>
              </h2>

              <p className="mt-3 text-[13px] sm:text-sm text-white/40 font-semibold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F4F2] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#C41E3A]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">
                What We Stand For
              </p>
            </div>

            <h2 className="text-[34px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
              Our core values
            </h2>

            <p className="mt-4 text-[#6B7280]">
              These are the principles that guide every project we take on.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(([title, desc]) => (
              <div
                key={title}
                className="bg-white border border-[#E5E7EB] rounded-[10px] p-8 text-center hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)] transition"
              >
                <div className="mx-auto mb-6 w-14 h-14 rounded-xl bg-red-50" />

                <h3 className="text-[18px] font-bold text-[#111111] mb-4">
                  {title}
                </h3>

                <p className="text-[14.5px] text-[#4B5563] leading-7">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}