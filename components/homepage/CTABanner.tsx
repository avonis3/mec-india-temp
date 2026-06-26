import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-[#111111] py-16 lg:py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
          Ready to build your next exhibition stall?
        </h2>

        <p className="mt-4 text-[15px] sm:text-base text-white/50 leading-7">
          Share your exhibition details and our team will help you with a
          suitable design and execution plan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="bg-[#C41E3A] hover:bg-[#A0182F] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Get Free Quote
          </Link>

          <a
            href="tel:+919920328287"
            className="border border-white/20 hover:border-white/60 text-white/80 hover:text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}