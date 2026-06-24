import Link from "next/link";
import {
  Clock,
  Layers,
  MonitorCog,
  PackageCheck,
  PanelTop,
  Users,
} from "lucide-react";

const services = [
  {
    num: "Service 01",
    title: "Exhibition Stall Design",
    desc: "Custom-designed stalls built around your brand identity and exhibition goals. We handle 3D visualization, material selection, fabrication, graphics, and on-site installation.",
    img: "/images/homepage/service1.png",
    href: "/services/exhibition-stall-design",
    tags: ["Custom Fabrication", "3D Visualization", "Turnkey", "Pan India"],
  },
  {
    num: "Service 02",
    title: "German Hanger Structure",
    desc: "Lightweight yet powerful aluminum space frame systems for large-scale events, outdoor exhibitions, and product launches. Engineered for durability and quick assembly.",
    img: "/images/homepage/service2.png",
    href: "/services/german-hanger-structure",
    tags: ["Aluminum Alloy", "Weatherproof", "Large Events"],
  },
  {
    num: "Service 03",
    title: "Octanorm Stall",
    desc: "India's most popular modular exhibition system. Octanorm stalls offer a premium look with the flexibility to reconfigure for different exhibitions and venues.",
    img: "/images/homepage/service3.png",
    href: "/services/octanorm-stall",
    tags: ["Modular System", "Reusable", "Quick Setup"],
  },
];

const offerings = [
  {
    icon: PanelTop,
    title: "Custom Fabrication",
    desc: "Bespoke furniture, counters, displays, and structural elements built to your specifications.",
  },
  {
    icon: Layers,
    title: "Graphics and Branding",
    desc: "Large format printing, wall graphics, fascia boards, LED signage, and branded collateral.",
  },
  {
    icon: Clock,
    title: "Turnkey Solutions",
    desc: "End-to-end project management from design brief to post-event dismantling and storage.",
  },
  {
    icon: Users,
    title: "On-site Support",
    desc: "Dedicated supervisors and installation teams at the venue, ensuring smooth setup and breakdown.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/homepage/service1.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Our Services</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#C41E3A]" />
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#C41E3A]">
              What We Do
            </p>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Our Services
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Three specialized services, one dedicated team. From modular booths
            to large-scale custom builds.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <article
                key={service.title}
                className="group bg-white rounded-[10px] overflow-hidden border border-[#E5E7EB] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-7">
                  <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#C41E3A] mb-2">
                    {service.num}
                  </p>

                  <h2 className="text-xl font-bold leading-snug text-[#111111] mb-3">
                    {service.title}
                  </h2>

                  <p className="text-[14.5px] text-[#4B5563] leading-7 mb-5">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11.5px] text-[#6B7280] bg-[#F4F4F2] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-[13.5px] font-semibold text-[#C41E3A] transition-all group-hover:gap-2"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 lg:mt-16 bg-[#F4F4F2] rounded-xl p-6 sm:p-8 lg:p-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[2px] bg-[#C41E3A]" />
                <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">
                  Additional Offerings
                </p>
              </div>

              <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
                More ways we can help
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {offerings.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 rounded-lg bg-red-50 text-[#C41E3A] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-[15px] font-bold text-[#111111] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[14px] text-[#4B5563] leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-16 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Not sure which service you need?
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-white/50 leading-7">
            Talk to our team and we&apos;ll recommend the right solution for
            your exhibition.
          </p>

          <Link
            href="/contact"
            className="inline-flex mt-8 bg-[#C41E3A] hover:bg-[#A0182F] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}