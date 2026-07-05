"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/images/homepage/vts.jpeg",
    "/images/homepage/botanic.jpeg",
    "/images/homepage/yasham.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[var(--primary)] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-8 xl:px-14">

        <div className="min-h-[650px] flex items-center justify-between gap-20">

          {/* LEFT CONTENT */}
          <div className="max-w-[720px] flex-shrink-0">

            <h1 className="font-extrabold leading-[0.93] tracking-[-0.05em] text-white">

              <span className="block text-[68px] xl:text-[78px]">
                India's most
              </span>

              <span className="block text-[68px] xl:text-[78px]">
                trusted
              </span>

              <span className="block text-[68px] xl:text-[78px] text-[var(--accent)]">
                exhibition stall
              </span>

              <span className="block text-[68px] xl:text-[78px]">
                design company.
              </span>

            </h1>

            <Link
              href="/contact"
              className="inline-flex mt-10 bg-[var(--accent)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex-1 h-[560px]">

            <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,.45)]">

              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms]
                  ${
                    currentImage === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}

            </div>

            {/* Dots */}

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`transition-all duration-500 rounded-full ${
                    currentImage === index
                      ? "w-10 h-2 bg-[var(--accent)]"
                      : "w-2 h-2 bg-white/50"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* MOBILE */}

      <div className="lg:hidden relative h-[560px]">

        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 h-full flex flex-col justify-center px-7">

          <h1 className="font-extrabold leading-[0.98] tracking-[-0.04em] text-white">

            <span className="block text-[40px]">
              India's most
            </span>

            <span className="block text-[40px]">
              trusted
            </span>

            <span className="block text-[40px] text-[var(--accent)]">
              exhibition stall
            </span>

            <span className="block text-[40px]">
              design company.
            </span>

          </h1>

          <Link
            href="/contact"
            className="mt-8 w-fit bg-[var(--accent)] px-7 py-4 rounded-xl text-white font-semibold"
          >
            Book a Free Consultation
          </Link>

        </div>

      </div>
    </section>
  );
}