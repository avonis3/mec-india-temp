import Link from "next/link";

const features = [
  ["Quick Assembly", "The modular connector system allows large structures to be assembled quickly."],
  ["Reusable Components", "Every component is reusable, making it cost-effective for recurring events."],
  ["Highly Versatile", "Can be configured into different shapes, sizes, and event footprints."],
  ["Weatherproof", "Suitable covers and sealing make it ideal for outdoor exhibitions."],
  ["Load Bearing", "Engineered to safely carry branding, lighting, AV equipment, and suspended loads."],
  ["Pan India Deployment", "Our teams deploy German Hanger structures across major Indian venues."],
];

const applications = [
  "Trade Show Pavilions",
  "Corporate Events",
  "Product Launches",
  "Outdoor Exhibitions",
  "Music and Cultural Events",
  "Sports Events",
  "Government Expos",
  "Food and Agri Fairs",
];

const gallery = [
  "/images/homepage/service2.png",
  "/images/homepage/ourwork1.png",
  "/images/homepage/ourwork2.png",
];

export default function GermanHangerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/homepage/service2.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">German Hanger Structure</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[var(--accent)]" />
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
              Service 02
            </p>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            German Hanger Structure
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Lightweight aluminum space frame systems for large-scale events and outdoor exhibitions.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-5 h-[2px] bg-[var(--accent)]" />
                <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
                  What Is It
                </p>
              </div>

              <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
                The gold standard for large-scale events.
              </h2>

              <p className="mt-5 text-[15.5px] text-[#4B5563] leading-7">
                German Hanger Structure, also known as space frame or aluminum hanger structure, is a modular building system made from high-grade aluminum alloy tubes and connectors.
              </p>

              <p className="mt-4 text-[15.5px] text-[#4B5563] leading-7">
                MEC India designs, fabricates, and installs German Hanger structures across the country for covered walkways, branded pavilions, and full exhibition halls.
              </p>
            </div>

            <img
              src="/images/homepage/service2.png"
              alt="German Hanger Structure"
              className="w-full aspect-[4/3] object-cover rounded-[10px]"
            />
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[var(--accent)]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
                Why Choose It
              </p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111] mb-8">
              Built for scale, designed for flexibility.
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {features.map(([title, desc]) => (
                <div key={title} className="bg-[#F4F4F2] rounded-lg p-5 flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                  <div>
                    <h3 className="text-[15px] font-bold text-[#111111] mb-1">{title}</h3>
                    <p className="text-[13.5px] text-[#4B5563] leading-6">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F4F4F2] rounded-xl p-6 lg:p-10 mt-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[var(--accent)]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
                Applications
              </p>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111] mb-6">
              Where German Hanger works best
            </h2>

            <div className="flex flex-wrap gap-3">
              {applications.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-[13px] text-[#4B5563]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {gallery.map((img, index) => (
              <div key={index} className="h-[210px] rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt="German Hanger gallery"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Planning a large-scale event?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-white/50 leading-7">
            Tell us your requirements and we’ll design the right German Hanger solution for you.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-8 bg-[var(--accent)] hover:bg-[var(--primary-dark)] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}