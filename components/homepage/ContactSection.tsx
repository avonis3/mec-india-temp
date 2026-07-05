import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#F4F4F2] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[var(--accent)]" />
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
              Get In Touch
            </p>
          </div>

          <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#111111] max-w-xl">
            Ready to build your next exhibition stall?
          </h2>

          <p className="mt-5 text-[15.5px] text-[#4B5563] leading-7 max-w-lg">
            Get a free design consultation with our team. Share your requirement
            and we will come back with concepts within 48 hours.
          </p>

          <div className="mt-10 space-y-6">
            <ContactItem icon={<Phone size={20} />} label="Phone and WhatsApp" value="+91 9920 328 287" />
            <ContactItem icon={<Mail size={20} />} label="Email" value="manoj.malpani@gmail.com" />
            <ContactItem icon={<MapPin size={20} />} label="Location" value="Mumbai, Maharashtra. Pan India service." />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 lg:p-8 shadow-sm">
          <h3 className="text-[24px] font-bold text-[#111111]">
            Request a Free Design
          </h3>

          <p className="mt-2 text-[15px] text-[#64748B]">
            Our design team will get back to you within 48 hours.
          </p>

          <form className="mt-7 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your Name" placeholder="Full name" />
              <Field label="Mobile Number" placeholder="+91 98765 43210" />
            </div>

            <Field label="Email Address" placeholder="you@company.com" />

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Exhibition Name" placeholder="e.g. Chemtech 2024" />

              <div>
                <label className="block mb-2 text-[13px] font-semibold text-[#111827]">
                  Service Required
                </label>
                <select className="w-full rounded-md border border-[#E5E7EB] bg-[#F4F4F2] px-4 py-3 text-[14px] outline-none focus:border-[var(--accent)]">
                  <option>Select a service</option>
                  <option>Exhibition Stall Design</option>
                  <option>German Hanger Structure</option>
                  <option>Octanorm Stall</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-[13px] font-semibold text-[#111827]">
                Tell Us More
              </label>
              <textarea
                rows={5}
                placeholder="Stall size, venue, exhibition date, special requirements..."
                className="w-full rounded-md border border-[#E5E7EB] bg-[#F4F4F2] px-4 py-3 text-[14px] outline-none focus:border-[var(--accent)]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--accent)] hover:bg-[var(--primary-dark)] transition text-white py-3.5 rounded-md text-[15px] font-semibold"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-11 h-11 rounded-lg bg-white border border-[#E5E7EB] text-[var(--accent)] flex items-center justify-center shrink-0">
        {icon}
      </div>

      <div>
        <p className="text-[12px] uppercase tracking-[0.1em] font-bold text-[#64748B]">
          {label}
        </p>
        <p className="mt-1 text-[17px] font-semibold text-[#111111]">
          {value}
        </p>
      </div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="block mb-2 text-[13px] font-semibold text-[#111827]">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full rounded-md border border-[#E5E7EB] bg-[#F4F4F2] px-4 py-3 text-[14px] outline-none focus:border-[var(--accent)]"
      />
    </div>
  );
}