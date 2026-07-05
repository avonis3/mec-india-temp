"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    image: "/images/homepage/vts.jpeg",
    // logo: "/images/logos/vts.png",
    name: "VTS",
  },
  {
    image: "/images/homepage/adn.jpeg",
    // logo: "/images/logos/adn.png",
    name: "ADN",
  },
  {
    image: "/images/homepage/siddh.jpeg",
    // logo: "/images/logos/siddh.png",
    name: "Siddh",
  },
  {
    image: "/images/homepage/vent.jpg",
    // logo: "/images/logos/vent.png",
    name: "Vent",
  },
  {
    image: "/images/homepage/yasham.jpeg",
    // logo: "/images/logos/yasham.png",
    name: "Yasham",
  },
  {
    image: "/images/homepage/botanic.jpeg",
    // logo: "/images/logos/botanic.png",
    name: "Botanic",
  },
];

export default function PortfolioPreview() {
  const [current, setCurrent] = useState(0);

const next = () =>
  setCurrent((prev) => (prev + 1) % projects.length);

const prev = () =>
  setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  return (
    <section className="bg-[#FAFAF8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-14">

          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-[var(--accent)]" />
            <p className="uppercase tracking-[0.16em] text-xs font-bold text-[var(--accent)]">
              Portfolio
            </p>
          </div>

          <h2 className="text-[34px] lg:text-[48px] font-extrabold text-[#111] leading-tight">
            Our Recent Exhibition Projects
          </h2>

          <p className="mt-4 text-[#6B7280] max-w-2xl mx-auto leading-7">
            Every stall is designed to create impact, attract visitors and
            strengthen your brand presence on the exhibition floor.
          </p>

        </div>

        {/* Desktop */}

<div className="hidden lg:grid lg:grid-cols-3 gap-7">

  {projects.map((project, index) => (

    <div
      key={index}
      className="group perspective"
    >

      <div
        className="
        relative
        h-[280px]
        rounded-2xl
        transition-transform
        duration-700
        [transform-style:preserve-3d]
        group-hover:[transform:rotateY(180deg)]
      "
      >

        {/* FRONT */}

        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg [backface-visibility:hidden]">

          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

        {/* BACK */}

        <div className="absolute inset-0 rounded-2xl bg-[var(--primary)] flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

          <img
            src={project.logo}
            alt={project.name}
            className="max-w-[170px] max-h-[90px] object-contain"
          />

        </div>

      </div>

    </div>

  ))}

</div>

{/* MOBILE */}

<div className="lg:hidden">

  <div className="relative">

    <div
      className="group perspective"
    >

      <div
        className="
          relative
          h-[260px]
          rounded-2xl
          transition-transform
          duration-700
          [transform-style:preserve-3d]
          active:[transform:rotateY(180deg)]
        "
      >

        {/* FRONT */}

        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg [backface-visibility:hidden]">

          <img
            src={projects[current].image}
            alt=""
            className="w-full h-full object-cover"
          />

        </div>

        {/* BACK */}

        <div className="absolute inset-0 rounded-2xl bg-[var(--primary)] flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">

          <img
            src={projects[current].logo}
            alt={projects[current].name}
            className="max-w-[160px] max-h-[80px] object-contain"
          />

        </div>

      </div>

    </div>

    {/* LEFT */}

    <button
      onClick={prev}
      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center"
    >
      <ArrowLeft size={20} />
    </button>

    {/* RIGHT */}

    <button
      onClick={next}
      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center"
    >
      <ArrowRight size={20} />
    </button>

  </div>

  {/* Dots */}

  <div className="flex justify-center gap-2 mt-5">

    {projects.map((_, index) => (

      <button
        key={index}
        onClick={() => setCurrent(index)}
        className={`rounded-full transition-all ${
          current === index
            ? "w-7 h-2 bg-[var(--accent)]"
            : "w-2 h-2 bg-gray-300"
        }`}
      />

    ))}

  </div>

</div>

        <div className="flex justify-center mt-14">

          <Link
            href="/portfolio"
            className="
              inline-flex
              items-center
              gap-3
              bg-[var(--accent)]
              hover:bg-[var(--primary)]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
            "
          >
            View More Projects

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>
    </section>
  );
}