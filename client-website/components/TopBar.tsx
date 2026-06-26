export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#111111] text-white text-[13px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2.5 flex justify-between items-center">
        <div className="flex gap-7">
          <a className="text-white/70 hover:text-white" href="tel:+919920328287">
            +91 9920 328 287
          </a>
          <a className="text-white/70 hover:text-white" href="mailto:sales@mecindia.co.in">
            sales@mecindia.co.in
          </a>
        </div>

        <div className="flex gap-5">
          <a
  className="text-white/60 hover:text-white"
  href="https://www.linkedin.com/company/mec-india/"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>
        </div>
      </div>
    </div>
  );
}