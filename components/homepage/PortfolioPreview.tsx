import Link from "next/link";

const projects = [
  { title: "Recent Exhibition Build", image: "/images/homepage/ourwork1.png" },
  { title: "Custom Stall Design", image: "/images/homepage/ourwork2.png" },
  { title: "Premium Exhibition Stall", image: "/images/homepage/ourwork3.png" },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#C41E3A]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[#C41E3A]">Portfolio</p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
              Recent projects and exhibition builds.
            </h2>
          </div>

          <Link href="/portfolio" className="text-[#C41E3A] font-semibold">View All →</Link>
        </div>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-4">
          <ProjectCard project={projects[0]} large />
          <div className="grid gap-4">
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: { title: string; image: string }; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-lg group h-[360px] lg:${large ? "h-[450px]" : "h-[217px]"}`}>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
        <span className="text-white font-semibold">{project.title}</span>
      </div>
    </div>
  );
}