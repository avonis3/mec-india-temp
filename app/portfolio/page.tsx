"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    company: "Botanic Healthcare",
    exhibition: "CPHI India 2024",
    logo: "/images/logos/botanic.png",
    image: "/images/portfolio/botanic.jpeg",
  },

  {
    company: "VTS",
    exhibition: "PlastIndia 2024",
    logo: "/images/logos/vts.png",
    image: "/images/portfolio/vts.jpeg",
  },

  {
    company: "ADN",
    exhibition: "India Warehousing Show",
    logo: "/images/logos/adn.png",
    image: "/images/portfolio/adn.jpeg",
  },
  {
    company: "Siddh",
    exhibition: "India Pharma Expo",
    logo: "/images/logos/siddh.png",
    image: "/images/homepage/siddh.jpeg",
  },

  {
    company: "Vent",
    exhibition: "Industrial Expo",
    logo: "/images/logos/vent.png",
    image: "/images/homepage/vent.jpg",
  },

  {
    company: "Yasham",
    exhibition: "Garment Technology Expo",
    logo: "/images/logos/yasham.png",
    image: "/images/homepage/yasham.jpeg",
  },

];

export default function PortfolioPage() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileFlip, setMobileFlip] = useState(false);

  const prev = () => {
    setMobileFlip(false);

    setMobileIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const next = () => {
    setMobileFlip(false);

    setMobileIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url('/images/homepage/ourwork3.png')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-[13px] text-white/35 mb-5">

            <Link href="/" className="hover:text-white/70">
              Home
            </Link>

            <span className="mx-2">/</span>

            <span className="text-white/60">
              Portfolio
            </span>

          </div>

          <div className="flex items-center gap-2 mb-4">

            <span className="w-5 h-[2px] bg-[var(--accent)]" />

            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
              Our Work
            </p>

          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Our Portfolio
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Over 500 stalls designed and built across India.
            Browse some of our favourite exhibition projects.
          </p>

        </div>

      </section>

      <section className="bg-white py-16 lg:py-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* ================= DESKTOP ================= */}

<div className="hidden lg:grid lg:grid-cols-3 gap-7">

  {projects.map((project, index) => (

    <div
      key={index}
      className="group [perspective:1500px]"
    >

      <div
        className="
          relative
          h-[290px]
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
            shadow-xl
            [backface-visibility:hidden]
          "
        >

          <img
            src={project.image}
            alt={project.company}
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
            px-8
            text-center
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >

          <img
            src={project.logo}
            alt={project.company}
            className="h-16 object-contain mb-6"
          />

          <h3 className="text-2xl font-bold">
            {project.company}
          </h3>

          <p className="mt-3 text-white/80">
            {project.exhibition}
          </p>

          <div className="w-12 h-[2px] bg-[var(--accent)] my-5" />

          <p className="text-sm text-white/70">
            Designed & Executed by
          </p>

          <p className="font-semibold mt-1">
            MEC India
          </p>

        </div>

      </div>

    </div>

  ))}

</div>

{/* ================= MOBILE ================= */}

<div className="lg:hidden">

  <div className="relative">

    <div
      className="[perspective:1200px]"
      onClick={() => setMobileFlip(!mobileFlip)}
    >

      <div
        className={`
          relative
          h-[340px]
          rounded-2xl
          transition-transform
          duration-700
          [transform-style:preserve-3d]
          ${mobileFlip ? "[transform:rotateY(180deg)]" : ""}
        `}
      >

        {/* FRONT */}

        <div
          className="
            absolute
            inset-0
            rounded-2xl
            overflow-hidden
            shadow-xl
            [backface-visibility:hidden]
          "
        >

          <img
            src={projects[mobileIndex].image}
            alt={projects[mobileIndex].company}
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
            px-8
            text-center
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
          "
        >

          <img
            src={projects[mobileIndex].logo}
            alt=""
            className="h-16 object-contain mb-6"
          />

          <h3 className="text-2xl font-bold">
            {projects[mobileIndex].company}
          </h3>

          <p className="mt-3 text-white/80">
            {projects[mobileIndex].exhibition}
          </p>

          <div className="w-12 h-[2px] bg-[var(--accent)] my-5" />

          <p className="text-sm text-white/70">
            Designed & Executed by
          </p>

          <p className="font-semibold mt-1">
            MEC India
          </p>

        </div>

      </div>

    </div>

    {/* LEFT */}

    <button
      onClick={prev}
      className="
        absolute
        left-3
        top-1/2
        -translate-y-1/2
        w-11
        h-11
        rounded-full
        bg-white
        shadow-xl
        flex
        items-center
        justify-center
      "
    >
      <ChevronLeft size={22} />
    </button>

    {/* RIGHT */}

    <button
      onClick={next}
      className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        w-11
        h-11
        rounded-full
        bg-white
        shadow-xl
        flex
        items-center
        justify-center
      "
    >
      <ChevronRight size={22} />
    </button>

  </div>

  {/* DOTS */}

  <div className="flex justify-center gap-2 mt-6">

    {projects.map((_, i) => (

      <button
        key={i}
        onClick={() => {
          setMobileIndex(i);
          setMobileFlip(false);
        }}
        className={`transition-all duration-300 rounded-full ${
          mobileIndex === i
            ? "w-8 h-2 bg-[var(--accent)]"
            : "w-2 h-2 bg-gray-300"
        }`}
      />

    ))}

  </div>

</div>
          {/* CTA */}

          <div className="mt-16 rounded-2xl bg-[#F4F4F2] px-6 py-14 text-center">

            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[var(--accent)]" />

              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
                Start a Project
              </p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-tight tracking-[-0.02em] text-[#111]">
              Have a project in mind?
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-[#6B7280] leading-7">
              Share your exhibition brief and let our team create a custom
              exhibition stall that attracts visitors and elevates your brand.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                mt-8
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
              Get a Free Design
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}
