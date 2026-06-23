import Link from "next/link";

const heroImage =
  "https://mecindia.co.in/wp-content/uploads/slider/cache/4708a2322a6cfeb9ee11f44f76cc715a/CHEMTECH2023-BECMUMBAI.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] lg:min-h-[620px] overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-[36px] sm:text-[44px] lg:text-[60px] font-extrabold leading-[1.06] tracking-[-0.025em] text-white">
            India&apos;s most trusted{" "}
            <span className="text-[#C41E3A]">exhibition stall</span> design
            company.
          </h1>

          <p className="mt-5 text-[15px] sm:text-[17px] leading-7 text-white/70 max-w-xl">
            From concept to construction, anywhere in India. Over 15 years
            building stalls that attract, engage, and convert.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-[#C41E3A] hover:bg-[#A0182F] text-white px-6 py-3.5 rounded-md text-sm font-semibold text-center transition"
            >
              Get a Free Design →
            </Link>

            <Link
              href="/portfolio"
              className="border border-white/30 hover:border-white/70 text-white/80 hover:text-white px-6 py-3.5 rounded-md text-sm font-semibold text-center transition"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}