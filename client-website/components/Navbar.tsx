"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  CircleDot,
  LayoutPanelTop,
  Menu,
  Warehouse,
  X,
} from "lucide-react";
import { useState } from "react";

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const servicesActive = pathname.startsWith("/services");

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[76px] lg:h-[82px] flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <img
            src="https://i0.wp.com/mecindia.co.in/wp-content/uploads/2022/05/Design-1-web-png.png?fit=800%2C227&ssl=1"
            alt="MEC India"
            className="h-[40px] lg:h-[46px] w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2 text-[15px] font-semibold text-gray-700">
          <Link
            className={`px-4 py-3 transition ${
              isActive("/") ? "text-[#C41E3A]" : "hover:text-[#C41E3A]"
            }`}
            href="/"
          >
            Home
          </Link>

          <Link
            className={`px-4 py-3 transition ${
              isActive("/about") ? "text-[#C41E3A]" : "hover:text-[#C41E3A]"
            }`}
            href="/about"
          >
            About Us
          </Link>

          <div className="relative group">
            <Link
              href="/services"
              className={`flex items-center gap-1 px-4 py-3 rounded-md transition ${
                servicesActive
                  ? "text-[#C41E3A] bg-gray-50"
                  : "hover:text-[#C41E3A] hover:bg-gray-50"
              }`}
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
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex gap-3 p-3 rounded-lg transition ${
                        active ? "bg-red-50" : "hover:bg-red-50"
                      }`}
                    >
                      <span
                        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          active
                            ? "bg-[#C41E3A] text-white"
                            : "bg-gray-100 text-[#C41E3A]"
                        }`}
                      >
                        <Icon size={18} />
                      </span>

                      <span>
                        <span
                          className={`block text-[14px] font-bold leading-snug ${
                            active ? "text-[#C41E3A]" : "text-gray-800"
                          }`}
                        >
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

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              className={`px-4 py-3 transition ${
                isActive(link.href)
                  ? "text-[#C41E3A]"
                  : "hover:text-[#C41E3A]"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="ml-4 bg-[#C41E3A] text-white px-7 py-4 rounded-md hover:bg-[#A0182F] transition"
          >
            Get Free Quote
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden w-10 h-10 rounded-md border border-gray-200 flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/40 md:hidden">
          <div className="ml-auto h-full w-[82%] max-w-[340px] bg-white p-6 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <img
                src="https://i0.wp.com/mecindia.co.in/wp-content/uploads/2022/05/Design-1-web-png.png?fit=800%2C227&ssl=1"
                alt="MEC India"
                className="h-[38px] w-auto"
              />

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-md border border-gray-200 flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-1 text-[15px] font-semibold">
              <MobileLink href="/" label="Home" active={isActive("/")} onClick={() => setOpen(false)} />
              <MobileLink href="/about" label="About Us" active={isActive("/about")} onClick={() => setOpen(false)} />

              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-md ${
                  servicesActive
                    ? "text-[#C41E3A] bg-red-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Our Services
              </Link>

              <div className="ml-3 mt-1 mb-2 border-l border-gray-200 pl-3 space-y-1">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 rounded-md text-[14px] ${
                      isActive(item.href)
                        ? "text-[#C41E3A] bg-red-50"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <MobileLink href="/portfolio" label="Portfolio" active={isActive("/portfolio")} onClick={() => setOpen(false)} />
              <MobileLink href="/blog" label="Blog" active={isActive("/blog")} onClick={() => setOpen(false)} />
              <MobileLink href="/contact" label="Contact Us" active={isActive("/contact")} onClick={() => setOpen(false)} />

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 bg-[#C41E3A] text-white text-center px-6 py-3.5 rounded-md hover:bg-[#A0182F] transition"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-3 rounded-md ${
        active
          ? "text-[#C41E3A] bg-red-50"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {label}
    </Link>
  );
}