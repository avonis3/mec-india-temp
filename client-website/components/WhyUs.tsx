const features = [
  ["End-to-End Execution", "From design to fabrication and on-site installation."],
  ["Pan India Support", "Reliable execution across major exhibition cities."],
  ["Premium Finish", "Clean detailing, strong materials, and professional presentation."],
  ["Timely Delivery", "Structured planning to meet exhibition deadlines."],
];

export default function WhyUs() {
  return (
    <section className="bg-[#F4F4F2] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#C41E3A]" />
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">
              Why Choose Us
            </p>
          </div>

          <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
            Built around quality, speed, and dependable execution.
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-[#4B5563] leading-7 max-w-xl">
            MEC India focuses on practical layouts, strong brand visibility,
            clean fabrication, and smooth project coordination from start to finish.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {features.map(([title, desc]) => (
              <div
                key={title}
                className="bg-white border border-[#E5E7EB] rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 mb-4" />
                <h3 className="text-[15px] font-bold text-[#111111] mb-2">
                  {title}
                </h3>
                <p className="text-[13.5px] text-[#4B5563] leading-6">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://mecindia.co.in/wp-content/uploads/slider/cache/49a8b2a0c00621a6db673ebb08864682/ELECRAMA-DELHI2023.jpg"
            alt="MEC India execution quality"
            className="w-full aspect-[4/3] object-cover rounded-[10px]"
          />

          <img
            src="https://mecindia.co.in/wp-content/uploads/slider/cache/8ad8f3786c98cafbf52ad43d041385a3/P-MEC-2022-NOIDA.jpg"
            alt="MEC India exhibition detail"
            className="hidden sm:block absolute -bottom-5 -right-5 w-[48%] aspect-[4/3] object-cover rounded-lg border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}