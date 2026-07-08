import Link from "next/link";

export default function Blog1Page() {
  return (
    <>
      <BlogHero
        category="Exhibition Design"
        title="The Complete Guide to Exhibition Stall Design"
        image="/images/homepage/service1.png"
      />

      <BlogArticle>
        <p>
  An exhibition is one of the few places where customers can experience your
  brand in person. In a crowded exhibition hall, visitors make decisions within
  seconds about which stalls deserve their attention. A thoughtfully designed
  exhibition stall not only attracts footfall but also creates meaningful
  conversations that can turn into valuable business opportunities.
</p>

<h2>First impressions matter</h2>

<p>
  Visitors often walk past hundreds of exhibitors during a single event.
  Attractive lighting, clear branding, open layouts, and well-planned product
  displays immediately communicate professionalism and encourage people to step
  inside. A clean, welcoming stall creates confidence before a conversation even
  begins.
</p>

<p>
  Every exhibition has different objectives. Some brands want to launch a new
  product, others aim to generate leads, while many focus on strengthening
  relationships with existing customers. The stall design should always support
  these business goals rather than simply looking attractive.
</p>

<h2>Design that reflects your brand</h2>

<p>
  An exhibition stall should feel like an extension of your company's identity.
  Consistent colours, graphics, messaging, and product presentation help
  visitors instantly recognise your brand. Custom-designed spaces also make it
  easier to communicate your values and create a memorable experience.
</p>

<p>
  Functional planning is equally important. Meeting areas, product displays,
  storage space, digital screens, and visitor movement should all be considered
  during the design stage to ensure the stall works efficiently throughout the
  exhibition.
</p>

<h2>Planning makes the difference</h2>

<p>
  Successful exhibition projects begin long before the event. Understanding the
  venue, stall dimensions, visitor flow, and exhibition regulations allows the
  design team to create a space that is visually appealing while remaining
  practical to build and manage.
</p>

<p>
  At MEC India, every project is carefully planned to combine creative design,
  quality fabrication, and seamless execution, helping brands maximise their
  presence at exhibitions across India.
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
        <div
  className="
    prose-content
    max-w-none

    [&>p]:text-[19px]
    [&>p]:leading-[2]
    [&>p]:text-[#4B5563]
    [&>p]:mb-8

    [&>h2]:text-[36px]
    [&>h2]:font-extrabold
    [&>h2]:leading-tight
    [&>h2]:text-[#111111]
    [&>h2]:mt-14
    [&>h2]:mb-6
  "
>
  {children}
</div>

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