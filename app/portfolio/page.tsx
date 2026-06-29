"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    title: "Shakti Foods Stall",
    cat: "Exhibition Stall",
    image: "/images/homepage/ourwork1.png",
  },
  {
    title: "Chemtech 2023 Mumbai",
    cat: "Exhibition Stall",
    image: "/images/homepage/service1.png",
  },
  {
    title: "Lalbaba Engineering Stall",
    cat: "Exhibition Stall",
    image: "/images/homepage/ourwork2.png",
  },
  {
    title: "Zoomlion Exhibition Stall",
    cat: "Exhibition Stall",
    image: "/images/homepage/ourwork3.png",
  },
  {
    title: "German Hanger Structure",
    cat: "German Hanger",
    image: "/images/homepage/service2.png",
  },
  {
    title: "Elecrama 2023 Delhi",
    cat: "Exhibition Stall",
    image: "/images/homepage/about_mec.png",
  },
  {
    title: "Smart Energiplus Stall",
    cat: "Octanorm",
    image: "/images/homepage/service3.png",
  },
  {
    title: "Salvator Octanorm Stall",
    cat: "Octanorm",
    image: "/images/homepage/whychoose.png",
  },
  {
    title: "Microtek Octanorm Stall",
    cat: "Octanorm",
    image: "/images/homepage/ourwork1.png",
  },
];

const filters = ["All Projects", "Exhibition Stall", "German Hanger", "Octanorm"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All Projects");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleProjects =
    active === "All Projects"
      ? projects
      : projects.filter((project) => project.cat === active);

  const selectedProject =
    selectedIndex !== null ? visibleProjects[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? visibleProjects.length - 1 : selectedIndex - 1
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === visibleProjects.length - 1 ? 0 : selectedIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, visibleProjects.length]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/homepage/ourwork3.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
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
            Over 500 stalls designed and built across India. Here is a selection
            of our favourite projects.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActive(filter);
                  setSelectedIndex(null);
                }}
                className={`rounded-full border px-6 py-2.5 text-[13.5px] font-semibold transition ${
                  active === filter
                    ? "bg-[#C41E3A] border-[#C41E3A] text-white"
                    : "bg-white border-[#E5E7EB] text-[#6B7280] hover:bg-[#C41E3A] hover:border-[#C41E3A] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleProjects.map((project, index) => (
              <button
                key={`${project.title}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative h-[250px] rounded-lg overflow-hidden bg-[#F4F4F2] text-left cursor-zoom-in"
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
                  <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/70">
                    {project.cat}
                  </p>

                  <h2 className="mt-1 text-[15px] font-semibold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-[12px] text-white/70">
                    Click to enlarge
                  </p>
                </div>
              </button>
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
              Share your exhibition brief and we will create a custom design for
              you.
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

      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 px-4 py-6 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Close image"
          >
            <X size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[75vh] object-contain bg-black"
              />

              <div className="px-5 py-4 bg-white">
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#C41E3A]">
                  {selectedProject.cat}
                </p>
                <h2 className="mt-1 text-[18px] font-bold text-[#111111]">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            <div className="sm:hidden mt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={showPrev}
                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center"
                aria-label="Previous image"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                type="button"
                onClick={showNext}
                className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center"
                aria-label="Next image"
              >
                <ChevronRight size={26} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}