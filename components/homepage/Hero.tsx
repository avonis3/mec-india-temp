import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111f]">
      {/* MOBILE BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-[position:72%_center] lg:hidden"
        style={{ backgroundImage: "url('/images/homepage/hero-banner.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/62 to-black/78 lg:hidden" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/75 via-[#07111f]/35 to-transparent lg:hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative min-h-[560px] lg:min-h-[620px] flex flex-col justify-center lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-center py-12 lg:py-0">
          {/* LEFT TEXT */}
          <div className="relative z-20">
            <h1 className="font-extrabold leading-[0.98] lg:leading-[0.92] tracking-[-0.04em] lg:tracking-[-0.045em] text-white max-w-[760px] lg:max-w-none">
              {/* Mobile */}
              <div className="lg:hidden">
                <span className="block text-[38px] sm:text-[52px]">
                  India&apos;s most
                </span>

                <span className="block text-[38px] sm:text-[52px]">
                  trusted
                </span>

                <span className="block text-[#C41E3A] text-[38px] sm:text-[52px]">
                  exhibition stall
                </span>

                <span className="block text-[38px] sm:text-[52px]">
                  design company.
                </span>
              </div>

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

            <div className="mt-9 lg:mt-8">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center bg-[#C41E3A] hover:bg-[#A0182F] text-white px-8 py-4 rounded-md font-semibold transition shadow-[0_14px_32px_rgba(196,30,58,0.35)]"
              >
                Get a Free Design
              </Link>
            </div>
          </div>

          {/* DESKTOP IMAGE ONLY */}
          <div className="hidden lg:block relative h-[560px] -ml-36 -mr-10">
            <img
              src="/images/homepage/hero-banner.png"
              alt="MEC India Exhibition Stall"
              className="absolute inset-0 w-full h-full object-cover object-left"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/14 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}