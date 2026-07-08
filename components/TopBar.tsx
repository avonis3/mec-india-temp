import { FaLinkedinIn } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#111111] text-white text-[13px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex justify-between items-center">
        <div className="flex gap-7">
          <a
            className="text-white/70 hover:text-white transition"
            href="tel:+919920328287"
          >
            +91 9920 328 287
          </a>

          <a
            className="text-white/70 hover:text-white transition"
            href="mailto:manoj.malpani@mecindia.co.in"
          >
            manoj.malpani@mecindia.co.in
          </a>
        </div>

        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/company/mec-india/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-[#0A66C2] transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={16} />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}