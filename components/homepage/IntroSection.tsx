import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[var(--accent)]" />
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">About MEC India</p>
          </div>

          <h2 className="text-[30px] sm:text-[36px] lg:text-[46px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
            What is <span className="text-[var(--accent)]">MEC India ?</span>
          </h2>

          <p className="mt-5 text-[15px] sm:text-base text-[#4B5563] leading-7">
            MEC India is an exhibition stall design and fabrication company offering complete solutions from concept, planning, production, installation, and on-site support.
          </p>

          <p className="mt-4 text-[15px] sm:text-base text-[#4B5563] leading-7">
            With years of experience across major exhibitions and venues, we help businesses create stalls that are functional, attractive, and built for real visitor engagement.
          </p>

          <Link href="/about" className="inline-flex mt-7 bg-[var(--accent)] hover:bg-[var(--primary-dark)] text-white px-6 py-3 rounded-md text-sm font-semibold transition">
            Know More →
          </Link>
        </div>

        <div className="relative">
          <img src="/images/homepage/about_mec.png" alt="MEC India exhibition work" className="w-full aspect-[4/3] object-cover rounded-[10px]" />
          <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[var(--accent)] text-white px-6 py-5 rounded-lg shadow-xl">
            <div className="text-4xl font-extrabold leading-none">15+</div>
            <div className="mt-1 text-[11px] font-semibold tracking-[0.08em] uppercase opacity-80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}