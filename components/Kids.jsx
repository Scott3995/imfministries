import Image from 'next/image';
import kids from '../public/assets/kids.jpg';

export const Kids = () => {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Give it a minimum banner height, but allow growth */}
      <div className="relative min-h-[42vh] sm:min-h-[48vh] lg:min-h-[52vh]">
        <Image
          src={kids}
          alt="Kids Ministry"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: '50% 35%' }}
        />

        {/* Brand overlay (IMF) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120014]/70 via-[#b100aa]/30 to-[#D9A441]/20" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_left,rgba(30,64,255,0.25),transparent_55%)]" />

        {/* Content (no absolute card clipping) */}
        <div className="relative z-10 h-full flex items-center">
          <div className="lg:max-w-5xl md:max-w-3xl mx-auto px-5 py-10 w-full">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-md sm:max-w-lg">
                <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-7 shadow-xl shadow-black/25 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/15 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                    <p className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wide">
                      Kids Ministry
                    </p>
                  </div>

                  <h1 className="font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl">
                    Kids
                  </h1>

                  <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                    We love kids! We have Pastors who are richly educated in the Word of God and
                    who teach children from the age of 5–15 about the wonderful Word of God.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      className="w-full sm:w-auto px-6 py-3 rounded-full font-extrabold uppercase tracking-wide
                                 bg-[#1E40FF] hover:bg-[#1632cc] text-white shadow-lg shadow-black/20 transition"
                    >
                      Kids Program
                    </button>

                    <button
                      className="w-full sm:w-auto px-6 py-3 rounded-full font-extrabold uppercase tracking-wide
                                 bg-white/10 hover:bg-white/15 text-white border border-white/20 transition"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                {/* end card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
