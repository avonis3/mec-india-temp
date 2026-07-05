export default function StatsStrip() {
  const stats = [
    ["15+", "Years of Experience"],
    ["500+", "Stalls Designed"],
    ["100+", "Happy Clients"],
    ["15+", "Cities Covered"],
  ];

  return (
    <section className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-8 text-center lg:text-left">
        {stats.map(([num, label], index) => (
          <div
            key={label}
            className={`lg:px-10 ${
              index !== 0 ? "lg:border-l lg:border-white/10" : ""
            }`}
          >
            <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-extrabold text-white leading-none tracking-[-0.03em]">
              {num.replace("+", "")}
              <span className="text-[var(--accent)] text-[0.65em] align-super">
                +
              </span>
            </h2>

            <p className="mt-2 text-[13px] text-white/40 font-medium">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}