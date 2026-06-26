import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111f]">
      {/* MOBILE BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-[position:70%_center] lg:hidden"
        style={{ backgroundImage: "url('/images/homepage/hero-banner.png')" }}
      />
      <div className="absolute inset-0 bg-black/68 lg:hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative min-h-[500px] lg:min-h-[620px] flex flex-col justify-start lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-center pt-28 pb-10 lg:py-0">
          {/* LEFT TEXT */}
          <div className="relative z-20">
            <h1 className="font-extrabold leading-[0.95] lg:leading-[0.92] tracking-[-0.045em] text-white max-w-[760px] lg:max-w-none">
              {/* Mobile - unchanged */}
              <div className="lg:hidden">
                <span className="block text-[40px] sm:text-[52px]">
                  India&apos;s most
                </span>

                <span className="block text-[40px] sm:text-[52px]">
                  trusted
                </span>

                <span className="block text-[#C41E3A] text-[40px] sm:text-[52px]">
                  exhibition stall
                </span>

                <span className="block text-[40px] sm:text-[52px]">
                  design company.
                </span>
              </div>

              {/* Desktop - 4 lines */}
              {/* Desktop - 4 lines */}
<div className="hidden lg:block">
  <span className="block text-[64px] xl:text-[72px]">
    India&apos;s most
  </span>

  <span className="block text-[64px] xl:text-[72px]">
    trusted
  </span>

  <span className="block text-[#C41E3A] text-[64px] xl:text-[72px]">
    exhibition stall
  </span>

  <span className="block text-[64px] xl:text-[72px]">
    design company.
  </span>
</div>
            </h1>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center bg-[#C41E3A] hover:bg-[#A0182F] text-white px-8 py-4 rounded-md font-semibold transition"
              >
                Get a Free Design
              </Link>
            </div>
          </div>

          {/* DESKTOP IMAGE ONLY */}
          <div className="hidden lg:block relative h-[560px] -ml-20 -mr-24">
            <img
              src="/images/homepage/hero-banner.png"
              alt="MEC India Exhibition Stall"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/14 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}