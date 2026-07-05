import { Clock, MapPin, Medal, Users } from "lucide-react";

const features = [
  ["End-to-End Execution", "From design to fabrication and on-site installation.", Users],
  ["Pan India Support", "Reliable execution across major exhibition cities.", MapPin],
  ["Premium Finish", "Clean detailing, strong materials, and professional presentation.", Medal],
  ["Timely Delivery", "Structured planning to meet exhibition deadlines.", Clock],
];

export default function WhyUs() {
  return (
    <section className="bg-[#F4F4F2] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[var(--accent)]" />
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
              Why Choose Us
            </p>
          </div>

          <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
            Built around quality, speed, and dependable execution.
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-[#4B5563] leading-7 max-w-xl">
            MEC India focuses on practical layouts, strong brand visibility,
            clean fabrication, and smooth project coordination from start to
            finish.
          </p>

          <div className="grid gap-4 mt-10 lg:grid-cols-2 lg:gap-5">
            {features.map(([title, desc, Icon]) => (
              <div
                key={title as string}
                className="bg-white border border-[#E5E7EB] rounded-xl p-5 lg:p-6 hover:shadow-md transition flex gap-4 lg:block items-center"
              >
                <div className="w-16 h-16 lg:w-10 lg:h-10 rounded-xl bg-red-50 mb-0 lg:mb-4 text-[var(--accent)] flex items-center justify-center shrink-0">
                  <Icon size={30} className="lg:w-5 lg:h-5" />
                </div>

                <div>
                  <h3 className="text-[16px] lg:text-[15px] font-bold text-[#111111] mb-2">
                    {title as string}
                  </h3>
                  <p className="text-[14px] lg:text-[13.5px] text-[#4B5563] leading-6">
                    {desc as string}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <img
            src="/images/homepage/whychoose.png"
            alt="Why choose MEC India"
            className="w-full aspect-[4/3] object-cover rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
}