const logos = [
  "/images/marquee/cmd.png",
  "/images/marquee/acrex.png",
  "/images/marquee/aidac.png",
  "/images/marquee/cphi.jpg",
  "/images/marquee/elecrama.png",
  "/images/marquee/fi.png",
  "/images/marquee/gsse.png",
  "/images/marquee/hgh.jpg",
  "/images/marquee/hpci.png",
  "/images/marquee/iffe.png",
  "/images/marquee/india.jpg",
  "/images/marquee/inmex.png",
  "/images/marquee/isbti.png",
  "/images/marquee/kisan.png",
  "/images/marquee/oil.png",
  "/images/marquee/optic.png",
  "/images/marquee/osh.png",
  "/images/marquee/renew.png",
  "/images/marquee/supply.png",
  "/images/marquee/inmex.png",
  // "/images/marquee/ace.png",
  // "/images/marquee/avicn.png",
  // "/images/marquee/battery.jpg",
  // "/images/marquee/bauma.webp",
  // "/images/marquee/bharat.jpg",
  // "/images/marquee/energy.png",
  // "/images/marquee/ifat.jpg",
  // "/images/marquee/ihff.png",
  // "/images/marquee/intimasia.png",
  // "/images/marquee/laser.png",
  // "/images/marquee/matecia.png",
  // "/images/marquee/osh.png",
  // "/images/marquee/plastasia.png",
  // "/images/marquee/poperex.png",
  // "/images/marquee/prod.jpg",
  // "/images/marquee/renew.png",
  // "/images/marquee/satte.png",
  // "/images/marquee/smart.jpg",
  // "/images/marquee/tools.png",
  // "/images/marquee/wade.png",
  "/images/marquee/world.png",
];

export default function MarqueeBar() {
  return (
    <section className="bg-[var(--accent)] overflow-hidden py-3 md:py-5">
      <div className="flex whitespace-nowrap animate-[marquee_6s_linear_infinite] md:animate-[marquee_11s_linear_infinite]">

        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="
              mx-3
              md:mx-8

              flex
              shrink-0
              items-center
              justify-center

              h-12
              w-24

              md:h-20
              md:w-44

              rounded-lg
              md:rounded-xl

              bg-white
              p-2
              md:p-3

              shadow-md
            "
          >
            <img
              src={logo}
              alt=""
              draggable={false}
              className="
                max-h-7
                max-w-[70px]

                md:max-h-12
                md:max-w-[120px]

                w-auto
                object-contain
                transition
                duration-300
                hover:scale-110
              "
            />
          </div>
        ))}

      </div>
    </section>
  );
}