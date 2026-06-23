const industries = [
  "Pharma",
  "Engineering",
  "Automobile",
  "Food & Beverage",
  "Healthcare",
  "Technology",
  "Industrial",
  "Manufacturing",
];

export default function IndustriesSection() {
  return (
    <section className="bg-[#111111] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-8 lg:items-center">
        <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-white/35 shrink-0">
          Industries Served
        </p>

        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="border border-white/10 text-white/60 rounded-full px-4 py-2 text-[13px] hover:bg-[#C41E3A] hover:border-[#C41E3A] hover:text-white transition"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}