import Image from 'next/image';

export const AboutPastor = () => {
  return (
    <section className="relative h-[42vh] sm:h-[45vh] md:h-[40vh] w-full overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/assets/banner.png" // <-- your couple image
        alt="Prophet Donny and Mama Bee"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: '65% 30%' }} 
        // ↑ move focus right/up so faces sit nicely
      />

      {/* Contrast overlays */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120014]/85 via-[#120014]/35 to-transparent" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_left,rgba(217,164,65,0.25),transparent_55%)]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="ml-4 sm:ml-10 lg:ml-28 w-[92%] sm:w-[34rem] lg:w-[40rem]">
          <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-8 shadow-xl shadow-black/25 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/15 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
              <p className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wide">
                Our Leadership
              </p>
            </div>

            <h1 className="font-extrabold uppercase text-xl sm:text-2xl md:text-3xl">
              Meet Our Prophets
            </h1>

            <p className="mt-2 text-[#D9A441] font-extrabold text-sm sm:text-base">
              Prophet Donny and Mama Bee
            </p>

            <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
              Prophet Donny and Mama Bee lead with humility, wisdom, and a deep love for
              God’s people. They are committed to nurturing families, strengthening
              communities, and creating a church home where everyone can grow in faith,
              discover purpose, and experience the love of Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
