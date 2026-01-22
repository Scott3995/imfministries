import Image from 'next/image';
import youth from '../public/assets/youth.jpg';

export const Youth = () => {
  return (
    <section className="relative min-h-[42vh] sm:min-h-[48vh] lg:min-h-[52vh] overflow-hidden text-white">
      {/* Background image */}
      <Image
        src={youth}
        alt="Youth"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: '50% 35%' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120014]/80 via-[#b100aa]/35 to-[#1E40FF]/20" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_right,rgba(217,164,65,0.25),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="lg:max-w-5xl md:max-w-3xl mx-auto px-5 py-10 h-full">
          <div className="h-full flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg">
              {/* Glass card */}
              <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-5 sm:p-7 shadow-xl shadow-black/25">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/15 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                  <p className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wide">
                    Theme: Matthew 6:33
                  </p>
                </div>

                <h1 className="font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl">
                  Youth of Integrity
                </h1>

                <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed">
                  Matthew 6:33 is more than a memory verse—it’s a lifestyle. We are a generation
                  choosing God over pressure, purpose over popularity, and calling over comfort.
                  When we seek God first—in our friendships, decisions, studies, and dreams—He
                  shapes our lives with meaning and direction. We don’t follow Jesus as a weekend
                  habit; we follow Him as our first priority.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    className="w-full sm:w-auto px-6 py-3 rounded-full font-extrabold uppercase tracking-wide
                               bg-[#1E40FF] hover:bg-[#1632cc] text-white shadow-lg shadow-black/20 transition"
                  >
                    Join Youth
                  </button>

                  <button
                    className="w-full sm:w-auto px-6 py-3 rounded-full font-extrabold uppercase tracking-wide
                               bg-white/10 hover:bg-white/15 text-white border border-white/20 transition"
                  >
                    View Programs
                  </button>
                </div>
              </div>
              {/* End card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
