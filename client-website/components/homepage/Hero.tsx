import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">

      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-[position:68%_center]
          sm:bg-[position:64%_center]
          md:bg-center
          scale-[1.02]
          brightness-110
        "
        style={{
          backgroundImage: "url('/images/homepage/hero-banner.png')",
        }}
      />

      {/* Main overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/82
          via-black/45
          to-black/5

          md:from-black/78
          md:via-black/18
          md:to-transparent
        "
      />

      {/* Bottom vignette */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/50
          via-transparent
          to-black/10
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="min-h-[600px] md:min-h-[650px] flex flex-col justify-center">

          <h1 className="max-w-[620px] font-extrabold leading-[0.95] tracking-[-0.045em] text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">

            <span className="block text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76px]">
              India's most
            </span>

            <span className="block text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76px]">
              trusted
            </span>

            <span className="block text-[#C41E3A] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76px]">
              exhibition stall
            </span>

            <span className="block text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76px]">
              design
            </span>

            <span className="block text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[76px]">
              company.
            </span>

          </h1>

          <div className="mt-8">
            <Link
              href="/contact"
              className="
                inline-flex
                bg-[#C41E3A]
                hover:bg-[#A0182F]
                text-white
                px-8
                py-4
                rounded-md
                font-semibold
                transition
                shadow-[0_15px_35px_rgba(196,30,58,0.35)]
              "
            >
              Get a Free Design
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}