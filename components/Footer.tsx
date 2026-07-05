import Link from "next/link";

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
              src="https://i0.wp.com/mecindia.co.in/wp-content/uploads/2022/05/Design-1-web-png.png?fit=800%2C227&ssl=1"
              alt="MEC India"
              className="h-10 w-auto brightness-0 invert opacity-70 mb-5"
            />

            <p className="text-[13.5px] text-white/35 leading-7 max-w-[290px]">
              India&apos;s trusted exhibition stall design and build company.
              Serving brands across 20 plus cities for over 15 years.
            </p>

            <div className="flex gap-3 mt-7">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.aria}
                  className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-[12px] font-semibold text-white/35 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 mb-5">
              Services
            </h4>

            <div className="flex flex-col gap-3">
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/services/exhibition-stall-design">
                Exhibition Stall Design
              </Link>
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/services/german-hanger-structure">
                German Hanger Structure
              </Link>
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/services/octanorm-stall">
                Octanorm Stall
              </Link>
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/contact">
                Free Design Consultation
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 mb-5">
              Company
            </h4>

            <div className="flex flex-col gap-3">
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/about">
                About Us
              </Link>
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/portfolio">
                Portfolio
              </Link>
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/blog">
                Blog
              </Link>
              <Link className="text-[13.5px] text-white/45 hover:text-white" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold tracking-[0.12em] uppercase text-white/30 mb-5">
              Contact
            </h4>

            <div className="flex flex-col gap-3 text-[13.5px] text-white/45">
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

        <div className="pt-7 flex flex-col sm:flex-row justify-between gap-3 text-[12.5px] text-white/20">
          <p>
            2024 MEC India, Materialistic Exhibitors Collection LLP. All rights
            reserved.
          </p>

          <a
            href="https://www.mecindia.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/45 transition"
          >
            www.mecindia.co.in
          </a>
        </div>
      </div>
    </footer>
  );
}