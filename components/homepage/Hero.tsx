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
      {/* DESKTOP */}
<div className="hidden lg:block relative min-h-[760px] overflow-hidden">

  {/* Background Slideshow */}
  {images.map((image, index) => (
    <img
      key={image}
      src={image}
      alt=""
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ${
        currentImage === index
          ? "opacity-100 scale-100"
          : "opacity-0 scale-105"
      }`}
    />
  ))}

  {/* Main Dark Blue Gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#031B3C]/95 via-[#031B3C]/82 via-20% to-[#031B3C]/25" />

  {/* Vertical Fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

  {/* Orange Glow */}
  <div className="absolute -bottom-36 -left-24 w-[420px] h-[420px] rounded-full bg-[var(--accent)]/20 blur-[50px]" />

  {/* Hero Content */}
  <div className="relative z-20 max-w-7xl mx-auto h-[760px] px-10 flex items-center">

    <div className="max-w-[700px]">

      <h1 className="font-extrabold leading-[1.03] tracking-[-0.03em] text-white">

        <span className="block text-[72px]">
          India's most
        </span>

        <span className="block text-[72px]">
          trusted
        </span>

        <span className="block text-[72px] text-[var(--accent)]">
          exhibition stall
        </span>

        <span className="block text-[72px]">
          design company.
        </span>

      </h1>

      {/* <p className="mt-8 max-w-[560px] text-lg leading-8 text-white/75">
        We design and build premium exhibition stalls that elevate your
        brand, attract visitors, and create memorable exhibition
        experiences across India.
      </p> */}

      <Link
        href="/contact"
        className="inline-flex mt-13 bg-[var(--accent)] hover:brightness-110 text-white px-9 py-4 rounded-xl font-semibold transition shadow-[0_20px_50px_rgba(255,111,0,0.35)]"
      >
        Book a Free Consultation
      </Link>

    </div>

  </div>

  {/* Slider Dots */}
  <div className="absolute bottom-10 right-14 flex gap-3 z-30">

    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`transition-all duration-500 rounded-full ${
          currentImage === index
            ? "w-10 h-2 bg-[var(--accent)]"
            : "w-2 h-2 bg-white/45"
        }`}
      />
    ))}

  </div>

</div>
{/* MOBILE */}

<div className="lg:hidden relative min-h-[100svh] overflow-hidden">

  {images.map((image, index) => (
    <img
      key={image}
      src={image}
      alt=""
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        currentImage === index
          ? "opacity-100"
          : "opacity-0"
      }`}
    />
  ))}

  {/* Better Overlay */}

  {/* Vertical gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black/85" />

{/* Left-side gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

  <div className="relative z-10 flex h-full min-h-[100svh] flex-col justify-end px-6 pb-14">

    <div className="mb-8">

      <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-white backdrop-blur-sm">
        MEC INDIA
      </span>

    </div>

    <h1 className="font-extrabold leading-[0.95] tracking-[-0.045em] text-white">

      <span className="block text-[42px]">
        India's most
      </span>

      <span className="block text-[42px]">
        trusted
      </span>

      <span className="block text-[42px] text-[var(--accent)]">
        exhibition stall
      </span>

      <span className="block text-[42px]">
        design company.
      </span>

    </h1>

    <p className="mt-5 max-w-sm text-[15px] leading-7 text-white/80">
      Premium exhibition stall designing and execution trusted by leading
      brands across India.
    </p>

    <Link
      href="/contact"
      className="mt-8 flex h-14 items-center justify-center rounded-xl bg-[var(--accent)] font-semibold text-white shadow-xl transition active:scale-95"
    >
      Book a Free Consultation
    </Link>

    {/* Slider Dots */}

    <div className="mt-8 flex justify-center gap-2">

      {images.map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`rounded-full transition-all duration-500 ${
            currentImage === index
              ? "h-2 w-8 bg-white"
              : "h-2 w-2 bg-white/40"
          }`}
        />

      ))}

    </div>

  </div>

</div>
    </section>
  );
}