const steps = [
  ["01", "Share Your Brief", "Tell us your exhibition name, stall size, brand guidelines, and goals. We take it from there."],
  ["02", "Get Design Options", "We create 2 to 3 custom design concepts tailored to your brief. Free of charge, no obligations."],
  ["03", "Approve and Build", "Once you approve, production begins with full project management and regular updates."],
  ["04", "Install and Go Live", "Our on-site team handles setup, installation, and final checks at the venue."],
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

        {/* MOBILE SLIDER */}
        <div className="lg:hidden mt-12 overflow-x-auto snap-x snap-mandatory flex gap-5 pb-6 px-1">
          {steps.map(([num, title, desc]) => (
            <div
              key={num}
              className="min-w-[82%] snap-center bg-white border border-[#E5E7EB] rounded-2xl px-6 py-9 shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
            >
              <p className="text-[15px] font-bold text-[#111111]">
                Step {Number(num)}
              </p>

              <div className="mx-auto mt-6 mb-7 flex h-[100px] w-[100px] items-center justify-center rounded-full border border-[#C41E3A] text-[#C41E3A] text-[34px] font-extrabold">
                {num}
              </div>

              <h3 className="text-[20px] font-extrabold text-[#111111]">
                {title}
              </h3>

              <p className="mx-auto mt-5 max-w-[260px] text-[15px] leading-8 text-[#64748B]">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:hidden flex justify-center gap-2 -mt-2">
          <span className="w-7 h-2 rounded-full bg-[#C41E3A]" />
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
        </div>

        {/* DESKTOP ORIGINAL */}
        <div className="hidden lg:grid relative mt-14 gap-10 grid-cols-4">
          <div className="absolute top-[34px] left-[9%] right-[9%] h-px bg-[#E5E7EB]" />

          {steps.map(([num, title, desc]) => (
            <div key={num} className="relative z-10">
              <div className="mx-auto mb-7 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-[#E5E7EB] bg-white text-lg font-bold text-[#6B7280] transition-all duration-300 hover:bg-[#C41E3A] hover:border-[#C41E3A] hover:text-white cursor-pointer">
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