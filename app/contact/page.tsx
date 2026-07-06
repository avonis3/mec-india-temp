"use client";

import Link from "next/link";
import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const faqs = [
  [
    "What is the typical lead time for stall design and fabrication?",
    "For a standard custom exhibition stall, the typical lead time is 3 to 4 weeks from brief to installation. For complex builds or German Hanger structures, allow 4 to 6 weeks.",
  ],
  [
    "Do you provide installation services across India?",
    "Yes, MEC India handles exhibition stall installation across major Indian cities including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Ahmedabad, Noida, and more.",
  ],
  [
    "Can I see a 3D visualization before fabrication begins?",
    "Yes. We share detailed 3D renders for approval before fabrication begins, so you can review the design clearly before execution.",
  ],
  [
    "What is the minimum stall size you work with?",
    "We work with stalls of all sizes, starting from 9 sqm booths to large custom-built exhibition spaces.",
  ],
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !phone || !email || !company || !service || !message) {
    alert("Please fill all fields before sending.");
    return;
  }

  const whatsappMessage = `*New MEC India Enquiry*

*Name:* ${name}
*Phone:* ${phone}
*Email:* ${email}
*Company:* ${company}
*Service Interested In:* ${service}

*Message:*
${message}`;

  window.open(
    `https://wa.me/919920328287?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank"
  );
};

  return (
    <>
      <section className="relative overflow-hidden bg-[#111111] py-20 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/homepage/ourwork1.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-[13px] text-white/35 mb-5">
            <Link href="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Contact Us</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-[2px] bg-[var(--accent)]" />
            <p className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
              Get in Touch
            </p>
          </div>

          <h1 className="text-[34px] sm:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Contact MEC India
          </h1>

          <p className="mt-4 max-w-xl text-[16px] lg:text-[17px] leading-7 text-white/60">
            Ready to start your next exhibition project? Our team is here to
            help.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[var(--accent)]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
                Our Details
              </p>
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-extrabold leading-[1.12] tracking-[-0.02em] text-[#111111]">
              We&apos;d love to hear from you.
            </h2>

            <p className="mt-4 text-[15px] text-[#4B5563] leading-7 max-w-lg">
              Whether you have a project brief ready or just want to explore
              options, reach out and our team will get back to you within 24
              hours.
            </p>

            <div className="mt-9 space-y-6">
              <ContactItem
                icon={<MapPin size={18} />}
                label="Address"
                value="Off. No. 6, Ivory Tower, Gokhale Road(S), Prabhadevi, Mumbai - 400025"
              />
              <ContactItem
                icon={<Phone size={18} />}
                label="Phone and WhatsApp"
                value="+91 9920 328 287"
              />
              <ContactItem
                icon={<Mail size={18} />}
                label="Email"
                value="manoj.malpani@gmail.com"
              />
              <ContactItem
                icon={<Clock size={18} />}
                label="Working Hours"
                value="Monday to Saturday, 9:00 AM to 6:00 PM"
              />
            </div>

            <div className="mt-9 overflow-hidden rounded-xl border border-[#E5E7EB] h-[260px]">
  <a
    href="https://maps.app.goo.gl/rqvLekfecCVetw376?g_st=iw"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <iframe
  src="https://maps.google.com/maps?q=19.017614,72.829825&z=17&output=embed"
  className="w-full h-full"
  loading="lazy"
/>
  </a>
</div>
          </div>

          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 lg:p-8 shadow-sm">
            <h3 className="text-[26px] font-bold text-[#111111]">
              Send Us a Message
            </h3>

            <p className="mt-2 text-[15px] text-[#64748B]">
              We reply to all enquiries within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Your Name"
                  placeholder="Full name"
                  value={name}
                  onChange={setName}
                />
                <Field
                  label="Mobile Number"
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={setPhone}
                  type="tel"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Email Address"
                  placeholder="you@company.com"
                  value={email}
                  onChange={setEmail}
                  type="email"
                />
                <Field
                  label="Company Name"
                  placeholder="Your company"
                  value={company}
                  onChange={setCompany}
                />
              </div>

              <div>
                <label className="block mb-2 text-[13px] font-semibold text-[#111827]">
                  Service Interested In
                </label>
                <select
                required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full rounded-md border border-[#E5E7EB] bg-[#F4F4F2] px-4 py-3 text-[14px] outline-none focus:border-[var(--accent)]"
                >
                  <option value="">Select a service</option>
                  <option>Exhibition Stall Design</option>
                  <option>German Hanger Structure</option>
                  <option>Octanorm Stall</option>
                  <option>Custom Fabrication</option>
                  <option>Graphics and Branding</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-[13px] font-semibold text-[#111827]">
                  Your Message
                </label>
                <textarea
                required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project, stall size, exhibition name, venue, and timeline..."
                  className="w-full rounded-md border border-[#E5E7EB] bg-[#F4F4F2] px-4 py-3 text-[14px] outline-none focus:border-[var(--accent)]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--accent)] hover:bg-[var(--primary-dark)] transition text-white py-3.5 rounded-md text-[15px] font-semibold"
              >
                Send Message on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F2] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[var(--accent)]" />
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--accent)]">
                FAQ
              </p>
            </div>

            <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#111111]">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map(([q, a]) => (
              <div
                key={q}
                className="rounded-lg border border-[#E5E7EB] bg-white p-6"
              >
                <h3 className="text-[15px] font-bold text-[#111111]">{q}</h3>
                <p className="mt-3 text-[14px] text-[#4B5563] leading-7">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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
      <div className="w-11 h-11 rounded-lg bg-red-50 text-[var(--accent)] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[12px] uppercase tracking-[0.1em] font-bold text-[#64748B]">
          {label}
        </p>
        <p className="mt-1 text-[15px] font-semibold text-[#111111] leading-6">
          {value}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block mb-2 text-[13px] font-semibold text-[#111827]">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#E5E7EB] bg-[#F4F4F2] px-4 py-3 text-[14px] outline-none focus:border-[var(--accent)]"
      />
    </div>
  );
}