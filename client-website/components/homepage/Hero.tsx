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

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 max-w-[330px] sm:max-w-none">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#C41E3A] hover:bg-[#A0182F] text-white px-7 py-4 rounded-md font-semibold text-center transition"
            >
              Get a Free Design 
            </Link>
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