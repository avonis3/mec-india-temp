import Link from "next/link";

export default function Blog5Page() {
  return (
    <>
      <BlogHero
        category="Exhibition Tips"
        title="10 Best Practices for a Successful Exhibition Stall"
        image="/images/homepage/ourwork2.png"
      />

      <BlogArticle>
        <p>
  A successful exhibition is about much more than an attractive stall. The best
  exhibition experiences combine thoughtful design, visitor engagement, clear
  communication, and professional execution to create meaningful business
  opportunities.
</p>

<h2>Define clear exhibition goals</h2>

<p>
  Before designing a stall, identify your objectives. Whether the goal is lead
  generation, product launches, networking, or brand awareness, every design
  decision should support the desired outcome.
</p>

<h2>Create an inviting visitor journey</h2>

<p>
  Open layouts, comfortable meeting spaces, interactive product displays, and
  clear signage encourage visitors to enter the stall naturally. Avoid clutter
  and make it easy for people to understand your products and services.
</p>

<h2>Train your exhibition team</h2>

<p>
  Even the best-designed stall relies on knowledgeable and approachable staff.
  Team members should greet visitors confidently, understand the products, and
  engage in meaningful conversations that build lasting business relationships.
</p>

<h2>Use technology wisely</h2>

<p>
  Digital displays, LED walls, touchscreens, product demonstrations, and QR
  codes can enhance the visitor experience when used strategically. Technology
  should support the conversation rather than distract from it.
</p>

<h2>Measure success after the event</h2>

<p>
  Review visitor engagement, qualified leads, customer feedback, and overall
  return on investment after every exhibition. These insights help improve future
  exhibition strategies and maximise long-term business growth.
</p>

<p>
  At MEC India, we combine design expertise, quality fabrication, and seamless
  execution to create exhibition experiences that leave a lasting impression on
  every visitor.
</p>
      </BlogArticle>
    </>
  );
}

function BlogHero({
  category,
  title,
  image,
}: {
  category: string;
  title: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 lg:py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
        <Link href="/blog" className="text-[13px] text-white/45 hover:text-white">
          ← Back to Blog
        </Link>

        <p className="mt-8 text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--accent)]">
          {category}
        </p>

        <h1 className="mt-4 text-[32px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
          {title}
        </h1>

        <p className="mt-5 text-[14px] text-white/45">January 2026 • 5 min read</p>
      </div>
    </section>
  );
}

function BlogArticle({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-14 lg:py-16">
      <article className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="prose-content">{children}</div>

        <div className="mt-12 rounded-xl bg-[#F4F4F2] p-7 text-center">
          <h2 className="text-[24px] font-extrabold text-[#111111]">
            Need a workplace health package?
          </h2>
          <p className="mt-3 text-[15px] text-[#6B7280] leading-7">
            Speak to our team for customised health check-up solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-6 bg-[var(--accent)] hover:bg-[var(--primary-dark)] text-white px-7 py-3.5 rounded-md text-sm font-semibold transition"
          >
            Contact Us
          </Link>
        </div>
      </article>
    </section>
  );
}