import Link from "next/link";

const services = [
  {
    title: "Exhibition Stall Design",
    text: "Custom exhibition stalls designed to attract visitors, showcase your brand, and create strong on-ground impact.",
    img: "https://mecindia.co.in/wp-content/uploads/slider/cache/4708a2322a6cfeb9ee11f44f76cc715a/CHEMTECH2023-BECMUMBAI.jpg",
  },
  {
    title: "German Hanger Structure",
    text: "Large-scale, durable and professional hanger structures for exhibitions, events, and industrial setups.",
    img: "https://mecindia.co.in/wp-content/uploads/slider/cache/49a8b2a0c00621a6db673ebb08864682/ELECRAMA-DELHI2023.jpg",
  },
  {
    title: "Octanorm Stall",
    text: "Clean modular stall systems for quick execution, flexible layouts, and polished exhibition presentation.",
    img: "https://mecindia.co.in/wp-content/uploads/slider/cache/8ad8f3786c98cafbf52ad43d041385a3/P-MEC-2022-NOIDA.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Exhibition Stall Design Company</p>
          <h1>
            Build exhibition spaces that make your brand impossible to ignore.
          </h1>
          <p className="heroSub">
            MEC India designs and executes exhibition stalls, German Hanger
            structures, and Octanorm stalls across India with end-to-end
            project support.
          </p>
          <div className="heroBtns">
            <Link href="#contact" className="btnRed">Get Free Quote</Link>
            <Link href="#services" className="btnGhost">Explore Services</Link>
          </div>
        </div>

        <div className="heroImageWrap">
          <img
            src="https://mecindia.co.in/wp-content/uploads/slider/cache/4708a2322a6cfeb9ee11f44f76cc715a/CHEMTECH2023-BECMUMBAI.jpg"
            alt="MEC India exhibition stall"
            className="heroImage"
          />
          <div className="heroBadge">
            <strong>15+</strong>
            <span>Years of Exhibition Expertise</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div><strong>500+</strong><span>Projects Delivered</span></div>
        <div><strong>15+</strong><span>Years Experience</span></div>
        <div><strong>Pan India</strong><span>Execution Network</span></div>
        <div><strong>3</strong><span>Core Services</span></div>
      </section>

      <section className="section" id="services">
        <p className="eyebrow">Our Services</p>
        <h2>Everything your exhibition presence needs.</h2>
        <p className="sectionSub">
          From premium custom stalls to scalable modular systems, MEC India
          handles design, fabrication, setup, and execution.
        </p>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <img src={service.img} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="#contact">Enquire Now →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="splitSection">
        <div>
          <p className="eyebrow">Why MEC India</p>
          <h2>Cleaner execution, stronger branding, smoother experience.</h2>
          <p>
            We focus on practical layouts, premium visual presentation, better
            visitor flow, reliable installation, and brand-first design.
          </p>
        </div>
        <div className="whyCards">
          <div>Custom Design</div>
          <div>On-site Execution</div>
          <div>Premium Finish</div>
          <div>Reliable Timelines</div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h2>Tell us about your next exhibition.</h2>
          <p>Call or email MEC India for exhibition stall design enquiries.</p>
          <p><strong>Phone:</strong> +91 9920 328 287</p>
          <p><strong>Email:</strong> sales@mecindia.co.in</p>
        </div>

        <form className="form">
          <input placeholder="Your Name" />
          <input placeholder="Company Name" />
          <input placeholder="Phone Number" />
          <input placeholder="Email Address" />
          <textarea placeholder="Tell us about your requirement" />
          <button type="submit">Send Enquiry</button>
        </form>
      </section>

      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <div>
        <a href="tel:+919920328287">+91 9920 328 287</a>
        <a href="mailto:sales@mecindia.co.in">sales@mecindia.co.in</a>
      </div>
      <div>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">Facebook</a>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <img
          src="https://i0.wp.com/mecindia.co.in/wp-content/uploads/2022/05/Design-1-web-png.png?fit=800%2C227&ssl=1"
          alt="MEC India"
        />
      </Link>
      <div className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="#services">Our Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="#contact" className="navCta">Get Free Quote</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <h3>MEC India</h3>
      <p>Exhibition stall design, German Hanger structures, and Octanorm stalls.</p>
      <p>© 2026 MEC India. All rights reserved.</p>
    </footer>
  );
}