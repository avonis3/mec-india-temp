import Link from "next/link";

const projects = [
  {
    title: "FIHI 2022, Bangalore",
    cat: "Exhibition Stall",
    image: "/images/homepage/ourwork1.png",
  },
  {
    title: "Chemtech 2023, Mumbai",
    cat: "Exhibition Stall",
    image: "/images/homepage/ourwork2.png",
  },
  {
    title: "ACREX 2023, Mumbai",
    cat: "Octanorm",
    image: "/images/homepage/ourwork3.png",
  },
  {
    title: "OSH India 2023, Hyderabad",
    cat: "Octanorm",
    image: "/images/homepage/service3.png",
  },
  {
    title: "German Hanger, Mumbai",
    cat: "German Hanger",
    image: "/images/homepage/service2.png",
  },
  {
    title: "Custom Stall Design",
    cat: "Exhibition Stall",
    image: "/images/homepage/service1.png",
  },
  {
    title: "Premium Exhibition Build",
    cat: "Exhibition Stall",
    image: "/images/homepage/about_mec.png",
  },
  {
    title: "Large Scale Event Setup",
    cat: "German Hanger",
    image: "/images/homepage/whychoose.png",
  },
];

const filters = ["All Projects", "Exhibition Stall", "German Hanger", "Octanorm"];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/homepage/ourwork1.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Portfolio</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[#C41E3A]" />
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[#C41E3A]">
              Our Work
            </p>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Our Portfolio
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Over 500 stalls designed and built across India. Here is a selection of our favourite projects.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full border px-5 py-2.5 text-[13.5px] font-semibold transition ${
                  index === 0
                    ? "bg-[#C41E3A] border-[#C41E3A] text-white"
                    : "border-[#E5E7EB] text-[#6B7280] hover:bg-[#C41E3A] hover:border-[#C41E3A] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative h-[250px] rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition duration-300 flex flex-col justify-end p-5">
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/70 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                    {project.cat}
                  </p>

                  <h2 className="mt-1 text-[15px] font-semibold text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                    {project.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-xl bg-[#F4F4F2] px-6 py-12 text-center">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#C41E3A]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">
                Start a Project
              </p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold tracking-[-0.02em] leading-[1.1] text-[#111111]">
              Have a project in mind?
            </h2>

            <p className="mt-3 max-w-xl mx-auto text-[15px] text-[#6B7280] leading-7">
              Share your exhibition brief and we will create a custom design for you.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-7 bg-[#C41E3A] hover:bg-[#A0182F] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
            >
              Get a Free Design
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}