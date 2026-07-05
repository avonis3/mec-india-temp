const items = [
  "Chemtech 2023 • BEC Mumbai",
  "Elecrama 2023 • New Delhi",
  "P-MEC 2022 • Noida",
  "ACREX 2023 • BEC Mumbai",
  "OSH India 2023 • Hyderabad",
  "Kisan Expo 2023 • Pune",
  "Tube India 2022 • Mumbai",
];

export default function MarqueeBar() {
  return (
    <section className="bg-[var(--accent)] overflow-hidden py-3">
      <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="px-8 text-[12px] font-semibold tracking-[0.12em] uppercase text-white/90"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}