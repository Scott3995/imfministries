import { ProgramsCard } from './ProgramsCard';
import cross from '../public/assets/prayer.png';
import prayer from '../public/assets/pray1.png';
import dove from '../public/assets/dove.png';
import church from '../public/assets/church1.png';

export const Programs = () => {
  return (
    <section className="relative py-14 px-5 overflow-hidden">
      {/* Background (brand soft) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf5ff] to-[#fff7e6]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(177,0,170,0.12),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(30,64,255,0.12),transparent_55%)]" />

      <div className="relative z-10 lg:max-w-5xl md:max-w-3xl mx-auto flex flex-col items-center justify-center space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-black/5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#120014]/80">
              Weekly Programs
            </p>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-[#120014]">
            Programs Schedule
          </h1>

          <p className="text-sm sm:text-base text-[#120014]/70 max-w-xl mx-auto">
            Join us throughout the week for prayer, teaching, and worship. Everyone is welcome.
          </p>
        </div>

        {/* Cards row */}
        <div className="w-full relative">
          {/* Edge fades (scroll hint) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#faf5ff] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#faf5ff] to-transparent z-10" />

          <div
            className="flex space-x-5 md:space-x-8 pb-5 overflow-x-auto max-w-full snap-x snap-mandatory scroll-smooth
                       px-2 sm:px-0"
          >
            <div className="snap-start">
              <ProgramsCard
                serviceName={'Prayers & Counselling'}
                day="Tuesday - Friday"
                time={'10am - 2pm'}
                icon={prayer}
                style={'bg-white border border-[#b100aa]/15 shadow-lg shadow-black/5'}
              />
            </div>

            <div className="snap-start">
              <ProgramsCard
                serviceName={'Mid-week Service'}
                day="Wednesday"
                time={'5pm - 7pm'}
                icon={cross}
                style={'bg-white border border-[#1E40FF]/15 shadow-lg shadow-black/5'}
              />
            </div>

            <div className="snap-start">
              <ProgramsCard
                serviceName={'Dominion Hour'}
                day="Thursday"
                time={'9am - 12pm'}
                icon={dove}
                style={'bg-white border border-[#D9A441]/25 shadow-lg shadow-black/5'}
              />
            </div>

            <div className="snap-start">
              <ProgramsCard
                serviceName={'Main Service'}
                day="Sunday"
                time={'12pm - 5pm'}
                icon={church}
                style={'bg-white border border-black/10 shadow-lg shadow-black/5'}
              />
            </div>
          </div>

          {/* Scroll hint */}
          <p className="text-center text-xs text-[#120014]/60 -mt-1">
            Tip: Swipe / scroll to view all programs →
          </p>
        </div>
      </div>
    </section>
  );
};
