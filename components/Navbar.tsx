"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-[76px] lg:h-[82px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <img
            src="https://i0.wp.com/mecindia.co.in/wp-content/uploads/2022/05/Design-1-web-png.png?fit=800%2C227&ssl=1"
            alt="MEC India"
            className="h-[54px] lg:h-[60px] w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            href="/"
            className={`font-semibold transition ${
              isActive("/")
                ? "text-[var(--accent)]"
                : "text-gray-700 hover:text-[var(--accent)]"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`font-semibold transition ${
              isActive("/about")
                ? "text-[var(--accent)]"
                : "text-gray-700 hover:text-[var(--accent)]"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/portfolio"
            className={`font-semibold transition ${
              isActive("/portfolio")
                ? "text-[var(--accent)]"
                : "text-gray-700 hover:text-[var(--accent)]"
            }`}
          >
            Portfolio
          </Link>

          <Link
            href="/blog"
            className={`font-semibold transition ${
              isActive("/blog")
                ? "text-[var(--accent)]"
                : "text-gray-700 hover:text-[var(--accent)]"
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`font-semibold transition ${
              isActive("/contact")
                ? "text-[var(--accent)]"
                : "text-gray-700 hover:text-[var(--accent)]"
            }`}
          >
            Contact Us
          </Link>

          <Link
            href="/contact"
            className="ml-3 bg-[var(--accent)] hover:bg-[var(--primary-dark)] text-white px-7 py-3.5 rounded-lg transition font-semibold"
          >
            Get Free Quote
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden w-11 h-11 rounded-lg border border-gray-200 flex items-center justify-center"
        >
          <Menu size={24} />
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/50 md:hidden">

          <div className="ml-auto h-full w-[84%] max-w-[340px] bg-white shadow-2xl p-6 overflow-y-auto">

            <div className="flex items-center justify-between mb-8">

              <img
                src="https://i0.wp.com/mecindia.co.in/wp-content/uploads/2022/05/Design-1-web-png.png?fit=800%2C227&ssl=1"
                alt="MEC India"
                className="h-10 w-auto"
              />

              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center"
              >
                <X size={22} />
              </button>

            </div>

            <div className="flex flex-col gap-2">

              <MobileLink
                href="/"
                label="Home"
                active={isActive("/")}
                onClick={() => setOpen(false)}
              />

              <MobileLink
                href="/about"
                label="About Us"
                active={isActive("/about")}
                onClick={() => setOpen(false)}
              />

              <MobileLink
                href="/portfolio"
                label="Portfolio"
                active={isActive("/portfolio")}
                onClick={() => setOpen(false)}
              />

              <MobileLink
                href="/blog"
                label="Blog"
                active={isActive("/blog")}
                onClick={() => setOpen(false)}
              />

              <MobileLink
                href="/contact"
                label="Contact Us"
                active={isActive("/contact")}
                onClick={() => setOpen(false)}
              />

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-5 bg-[var(--accent)] text-white text-center py-3.5 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition"
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
      className={`px-4 py-3 rounded-lg font-semibold transition ${
        active
          ? "bg-red-50 text-[var(--accent)]"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </Link>
  );
}