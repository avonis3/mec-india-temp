import Link from "next/link";

const features = [
  ["3D Visualization", "See your stall before it is built with detailed 3D renders."],
  ["Custom Fabrication", "Every structural element is built using quality materials."],
  ["Brand Integration", "Your colors, logos, messaging, and graphics are built into the design."],
  ["Turnkey Execution", "We manage the project timeline from brief to handover."],
  ["Lighting Design", "Lighting, LED strips, backlit panels, and display highlights."],
  ["On-site Support", "Our team supports installation, adjustments, and dismantling."],
];

const gallery = [
  "/images/homepage/service1.png",
  "/images/homepage/ourwork1.png",
  "/images/homepage/ourwork2.png",
  "/images/homepage/ourwork3.png",
  "/images/homepage/about_mec.png",
  "/images/homepage/service3.png",
];

export default function ExhibitionStallPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/homepage/service1.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Exhibition Stall Design</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[var(--accent)]" />
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
              Service 01
            </p>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Exhibition Stall Design
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Custom-built stalls designed around your brand, your goals, and your audience.
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
                  What We Offer
                </p>
              </div>

              <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
                Stalls designed to perform.
              </h2>

              <p className="mt-5 text-[15.5px] text-[#4B5563] leading-7">
                Every MEC India exhibition stall begins with a thorough understanding of your brand objectives. We design from scratch using your brief, your brand guidelines, and the exhibition context.
              </p>

              <p className="mt-4 text-[15.5px] text-[#4B5563] leading-7">
                From a compact 9 sqm shell scheme to a 200 sqm island booth, our team manages concept, 3D rendering, fabrication, graphics production, logistics, installation, and dismantling.
              </p>
            </div>

            <img
              src="/images/homepage/service1.png"
              alt="Exhibition Stall Design"
              className="w-full aspect-[4/3] object-cover rounded-[10px]"
            />
          </div>

          <div className="mt-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[var(--accent)]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
                Key Features
              </p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111] mb-8">
              Everything included.
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {features.map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-[#F4F4F2] rounded-lg p-5 flex gap-4 items-start"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                  <div>
                    <h3 className="text-[15px] font-bold text-[#111111] mb-1">
                      {title}
                    </h3>
                    <p className="text-[13.5px] text-[#4B5563] leading-6">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
            {gallery.map((img, index) => (
              <div key={index} className="h-[210px] rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt="Exhibition stall gallery"
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111e6] py-16 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Let&apos;s design your next stall.
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-white/50 leading-7">
            Share your brief and we&apos;ll have design concepts ready within 48 hours.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-8 bg-[var(--accent)] hover:bg-[var(--primary-dark)] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}