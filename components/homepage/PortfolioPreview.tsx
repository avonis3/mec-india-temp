"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    image: "/images/homepage/vts.jpeg",
    logo: "/images/logos/vts.png",
    name: "VTS",
  },
  {
    image: "/images/homepage/adn.jpeg",
    logo: "/images/logos/adn.png",
    name: "ADN",
  },
  {
    image: "/images/homepage/siddh.jpeg",
    logo: "/images/logos/siddh.png",
    name: "Siddh",
  },
  {
    image: "/images/homepage/vent.jpg",
    logo: "/images/logos/vent.png",
    name: "Vent",
  },
  {
    image: "/images/homepage/yasham.jpeg",
    logo: "/images/logos/yasham.png",
    name: "Yasham",
  },
  {
    image: "/images/homepage/botanic.jpeg",
    logo: "/images/logos/botanic.png",
    name: "Botanic",
  },
];

export default function PortfolioPreview() {
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group perspective"
            >

              <div
                className="
                  relative
                  h-[230px]
                  lg:h-[280px]
                  rounded-2xl
                  transition-transform
                  duration-700
                  [transform-style:preserve-3d]
                  group-hover:[transform:rotateY(180deg)]
                "
              >

                {/* FRONT */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    overflow-hidden
                    [backface-visibility:hidden]
                    shadow-lg
                  "
                >
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* BACK */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-[var(--primary)]
                    text-white
                    flex
                    flex-col
                    justify-center
                    items-center
                    px-6
                    text-center
                    [transform:rotateY(180deg)]
                    [backface-visibility:hidden]
                  "
                >
                  <h3 className="font-bold text-xl mb-3">
                    Exhibition Project
                  </h3>

                  <p className="text-white/75 text-sm leading-6">
                    Designed & Executed by MEC India
                  </p>

                </div>

              </div>

            </div>

          ))}

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