import Link from "next/link";

const services = [
  {
    num: "Service 01",
    title: "Exhibition Stall Design",
    desc: "Custom exhibition stalls designed for strong brand visibility, visitor engagement, and premium presentation.",
    img: "/images/homepage/service1.png",
    href: "/services/exhibition-stall-design",
    tags: ["Custom Design", "Fabrication", "Execution"],
  },
  {
    num: "Service 02",
    title: "German Hanger Structure",
    desc: "Large-scale aluminium hanger structures for exhibitions, events, industrial shows, and temporary venues.",
    img: "/images/homepage/service2.png",
    href: "/services/german-hanger-structure",
    tags: ["Large Scale", "Durable", "Pan India"],
  },
  {
    num: "Service 03",
    title: "Octanorm Stall",
    desc: "Modular stall systems with quick setup, professional layouts, flexible sizes, and clean execution.",
    img: "/images/homepage/service3.png",
    href: "/services/octanorm-stall",
    tags: ["Modular", "Fast Setup", "Flexible"],
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F4F4F2] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#C41E3A]" />
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">Our Services</p>
          </div>

          <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
            Exhibition solutions built for impact.
          </h2>

          <p className="mt-3 text-[15px] sm:text-base text-[#6B7280] max-w-xl leading-7">
            From custom stall design to modular execution, MEC India delivers complete exhibition infrastructure with reliable on-ground support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title} className="group bg-white rounded-[10px] overflow-hidden border border-[#E5E7EB] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
              <img src={service.img} alt={service.title} className="w-full h-[220px] object-cover" />

              <div className="p-7">
                <p className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#C41E3A] mb-2">{service.num}</p>
                <h3 className="text-xl font-bold leading-snug text-[#111111] mb-3">{service.title}</h3>
                <p className="text-[14.5px] text-[#4B5563] leading-7 mb-5">{service.desc}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[11.5px] text-[#6B7280] bg-[#F4F4F2] px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>

                <Link href={service.href} className="inline-flex text-[13.5px] font-semibold text-[#C41E3A]">
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}