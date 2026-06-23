const steps = [
  [
    "01",
    "Share Your Brief",
    "Tell us your exhibition name, stall size, brand guidelines, and goals. We take it from there.",
  ],
  [
    "02",
    "Get Design Options",
    "We create 2 to 3 custom design concepts tailored to your brief. Free of charge, no obligations.",
  ],
  [
    "03",
    "Approve and Build",
    "Once you approve, production begins with full project management and regular updates.",
  ],
  [
    "04",
    "Install and Go Live",
    "Our on-site team handles everything from setup to dismantling. You show up and exhibit.",
  ],
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-4">
          <span className="w-5 h-[2px] bg-[#C41E3A]" />
          <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">
            How We Work
          </p>
        </div>

        <h2 className="mx-auto max-w-2xl text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#111111]">
          From brief to build in four steps.
        </h2>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="hidden lg:block absolute top-[34px] left-[9%] right-[9%] h-px bg-[#E5E7EB]" />

          {steps.map(([num, title, desc], index) => (
            <div key={num} className="relative z-10">
              <div
              className="
                mx-auto mb-7 flex h-[70px] w-[70px]
                items-center justify-center
                rounded-full border-2
                border-[#E5E7EB]
                bg-white
                text-lg font-bold text-[#6B7280]
                transition-all duration-300
                hover:bg-[#C41E3A]
                hover:border-[#C41E3A]
                hover:text-white
                cursor-pointer
                "
              >
                {num}
              </div>

              <h3 className="text-[17px] font-bold text-[#111111]">
                {title}
              </h3>

              <p className="mx-auto mt-4 max-w-[260px] text-[14.5px] leading-7 text-[#6B7280]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}