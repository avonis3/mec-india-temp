import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center"
        style={{
          backgroundImage: "url('/images/homepage/hero-banner.png')",
        }}
      />

      <div className="absolute inset-0 bg-black/70 md:bg-gradient-to-r md:from-black/85 md:via-black/58 md:to-black/15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="min-h-[640px] md:min-h-[720px] flex flex-col justify-center py-14 md:py-20">
          <div className="hidden md:flex items-center gap-3 mb-7">
            <span className="w-16 h-[2px] bg-[#C41E3A]" />
            <p className="uppercase tracking-[0.14em] text-white text-sm font-semibold">
              Building Experiences. Delivering Impact.
            </p>
          </div>

          <h1 className="max-w-[650px] font-extrabold leading-[0.96] md:leading-[0.92] tracking-[-0.04em] text-white">
            <span className="block text-[38px] sm:text-[46px] md:text-[60px] lg:text-[68px] xl:text-[74px]">
              India&apos;s most trusted
            </span>

            <span className="block text-[#C41E3A] text-[38px] sm:text-[46px] md:text-[60px] lg:text-[68px] xl:text-[74px]">
              exhibition stall
            </span>

            <span className="block text-[38px] sm:text-[46px] md:text-[60px] lg:text-[68px] xl:text-[74px]">
              design company.
            </span>
          </h1>

          <p className="mt-6 max-w-[330px] md:max-w-[560px] text-[15px] md:text-[17px] leading-7 md:leading-8 text-white/80">
            From concept to construction anywhere in India. Over 15 years
            designing exhibition spaces that attract visitors and build brands.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 max-w-[330px] sm:max-w-none">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#C41E3A] hover:bg-[#A0182F] text-white px-7 py-4 rounded-md font-semibold text-center transition"
            >
              Get a Free Design →
            </Link>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto border border-white/40 hover:border-white hover:bg-white/10 text-white px-7 py-4 rounded-md font-semibold text-center transition"
            >
              View Our Work →
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative z-10 bg-black/55 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4">
            <Stat number="15+" title="Years" subtitle="Industry Experience" />
            <Stat number="Pan India" title="" subtitle="Installation Support" />
            <Stat number="500+" title="Projects" subtitle="Successfully Delivered" />
            <Stat number="Turnkey" title="Solutions" subtitle="End-to-End Execution" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="border-r border-white/10 last:border-r-0 p-8 text-white">
      <div className="text-[30px] font-bold text-white">
        {number}
        {title && <span className="ml-2 text-white text-xl">{title}</span>}
      </div>

      <p className="mt-2 text-white/75">{subtitle}</p>
    </div>
  );
}