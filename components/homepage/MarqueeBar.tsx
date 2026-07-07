const logos = [
  "/images/marquee/ace.png",
  "/images/marquee/avicn.png",
  "/images/marquee/battery.jpg",
  "/images/marquee/bauma.webp",
  "/images/marquee/bharat.jpg",
  "/images/marquee/energy.png",
  "/images/marquee/ifat.jpg",
  "/images/marquee/ihff.png",
  "/images/marquee/intimasia.png",
  "/images/marquee/laser.png",
  "/images/marquee/matecia.png",
  "/images/marquee/osh.png",
  "/images/marquee/plastasia.png",
  "/images/marquee/poperex.png",
  "/images/marquee/prod.jpg",
  "/images/marquee/renew.png",
  "/images/marquee/satte.png",
  "/images/marquee/smart.jpg",
  "/images/marquee/tools.png",
  "/images/marquee/wade.png",
  "/images/marquee/world.png",
];

export default function MarqueeBar() {
  return (
    <section className="bg-[var(--accent)] overflow-hidden py-5">
      <div className="flex whitespace-nowrap animate-[marquee_35s_linear_infinite]">

        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="mx-8 flex h-20 w-44 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-md"
          >
            <img
              src={logo}
              alt=""
              draggable={false}
              className="max-h-12 max-w-[120px] w-auto object-contain transition duration-300 hover:scale-110"
            />
          </div>
        ))}

      </div>
    </section>
  );
}