import Link from "next/link";
import { ChevronDown, LayoutPanelTop, Warehouse, CircleDot } from "lucide-react";

const serviceLinks = [
  {
    href: "/services/exhibition-stall-design",
    title: "Exhibition Stall Design",
    desc: "Custom stalls for any exhibition",
    icon: LayoutPanelTop,
  },
  {
    href: "/services/german-hanger-structure",
    title: "German Hanger Structure",
    desc: "Large-scale aluminum structures",
    icon: Warehouse,
  },
  {
    href: "/services/octanorm-stall",
    title: "Octanorm Stall",
    desc: "Modular system stalls",
    icon: CircleDot,
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-10 h-[82px] flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <img
            src="https://i0.wp.com/mecindia.co.in/wp-content/uploads/2022/05/Design-1-web-png.png?fit=800%2C227&ssl=1"
            alt="MEC India"
            className="h-[46px] w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-2 text-[15px] font-semibold text-gray-700">
          <Link className="px-4 py-3 text-[#C41E3A]" href="/">
            Home
          </Link>

          <Link className="px-4 py-3 hover:text-[#C41E3A]" href="/about">
            About Us
          </Link>

          <div className="relative group">
            <Link
              href="/services"
              className="flex items-center gap-1 px-4 py-3 rounded-md bg-gray-50 hover:text-[#C41E3A]"
            >
              Our Services
              <ChevronDown
                size={15}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </Link>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div className="w-[292px] rounded-xl border border-gray-200 bg-white shadow-2xl p-3">
                {serviceLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex gap-3 p-3 rounded-lg hover:bg-red-50 transition"
                    >
                      <span className="w-10 h-10 rounded-lg bg-gray-100 text-[#C41E3A] flex items-center justify-center shrink-0">
                        <Icon size={18} />
                      </span>

                      <span>
                        <span className="block text-[14px] font-bold text-gray-800 leading-snug">
                          {item.title}
                        </span>
                        <span className="block text-[12.5px] text-gray-500 mt-1 leading-relaxed">
                          {item.desc}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link className="px-4 py-3 hover:text-[#C41E3A]" href="/portfolio">
            Portfolio
          </Link>

          <Link className="px-4 py-3 hover:text-[#C41E3A]" href="/blog">
            Blog
          </Link>

          <Link className="px-4 py-3 hover:text-[#C41E3A]" href="/contact">
            Contact Us
          </Link>

          <Link
            href="/contact"
            className="ml-4 bg-[#C41E3A] text-white px-7 py-4 rounded-md hover:bg-[#A0182F] transition"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}