import Link from "next/link";

const projects = [
  {
    title: "Chemtech 2023",
    image:
      "https://mecindia.co.in/wp-content/uploads/slider/cache/4708a2322a6cfeb9ee11f44f76cc715a/CHEMTECH2023-BECMUMBAI.jpg",
  },
  {
    title: "Elecrama 2023",
    image:
      "https://mecindia.co.in/wp-content/uploads/slider/cache/49a8b2a0c00621a6db673ebb08864682/ELECRAMA-DELHI2023.jpg",
  },
  {
    title: "P-MEC 2022",
    image:
      "https://mecindia.co.in/wp-content/uploads/slider/cache/8ad8f3786c98cafbf52ad43d041385a3/P-MEC-2022-NOIDA.jpg",
  },
  {
    title: "ACREX 2023",
    image:
      "https://mecindia.co.in/wp-content/uploads/slider/cache/4708a2322a6cfeb9ee11f44f76cc715a/CHEMTECH2023-BECMUMBAI.jpg",
  },
  {
    title: "OSH India",
    image:
      "https://mecindia.co.in/wp-content/uploads/slider/cache/49a8b2a0c00621a6db673ebb08864682/ELECRAMA-DELHI2023.jpg",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#C41E3A]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">
                Portfolio
              </p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
              Recent projects and exhibition builds.
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="text-[#C41E3A] font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr] gap-4">
          <div className="relative overflow-hidden rounded-lg h-[450px] group">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
              <span className="text-white font-semibold">
                {projects[0].title}
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {projects.slice(1, 3).map((project) => (
              <div
                key={project.title}
                className="relative overflow-hidden rounded-lg h-[217px] group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-semibold">
                    {project.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            {projects.slice(3, 5).map((project) => (
              <div
                key={project.title}
                className="relative overflow-hidden rounded-lg h-[217px] group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-semibold">
                    {project.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}