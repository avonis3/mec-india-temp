import Link from "next/link";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  {
    label: "in",
    href: "https://www.linkedin.com/company/mec-india",
    aria: "LinkedIn",
  },
  {
    label: "wa",
    href: "https://wa.me/919920328287",
    aria: "WhatsApp",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] pt-16 lg:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-10 lg:gap-14 pb-12 border-b border-white/10">
          <div>
            <img
              src="/images/logo.webp"
              alt="MEC India"
              className="h-14 w-auto mb-6"
            />

            <p className="text-[14px] text-white/80 leading-7 max-w-[320px]">
              India&apos;s trusted exhibition stall design and build company.
              Serving brands across 20 plus cities for over 15 years.
            </p>

            <div className="flex gap-4 mt-7">

              <a
                href="https://www.linkedin.com/company/mec-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0A66C2] transition flex items-center justify-center"
              >
                <FaLinkedinIn size={18} className="text-white" />
              </a>

              <a
                href="https://wa.me/919920328287"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#25D366] transition flex items-center justify-center"
              >
                <FaWhatsapp size={20} className="text-white" />
              </a>

            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white mb-5">
              Company
            </h4>

            <div className="flex flex-col gap-3">
              <Link className="text-[13.5px] text-white/80 hover:text-[var(--accent)] transition hover:text-white" href="/about">
                About Us
              </Link>
              <Link className="text-[13.5px] text-white/80 hover:text-[var(--accent)] transition hover:text-white" href="/portfolio">
                Portfolio
              </Link>
              <Link className="text-[13.5px] text-white/80 hover:text-[var(--accent)] transition hover:text-white" href="/blog">
                Blog
              </Link>
              <Link className="text-[13.5px] text-white/80 hover:text-[var(--accent)] transition hover:text-white" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white mb-5">
              Contact
            </h4>

            <div className="flex flex-col gap-3 text-[13.5px] text-white/80 hover:text-[var(--accent)] transition">
              <a href="tel:+919920328287" className="hover:text-white">
                +91 9920 328 287
              </a>
              <a href="mailto:manoj.malpani@gmail.com" className="hover:text-white">
                manoj.malpani@gmail.com
              </a>
              <p>Prabhadevi, Mumbai 400025</p>
            </div>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row justify-between gap-3 text-[12.5px] text-white/60">
          <p>
            2024 MEC India, Materialistic Exhibitors Collection LLP. All rights
            reserved.
          </p>

          <a
            href="https://www.mecindia.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 hover:text-[var(--accent)] transition transition"
          >
            www.mecindia.co.in
          </a>
        </div>
      </div>
    </footer>
  );
}