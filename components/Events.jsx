import React from 'react';
import dynamic from 'next/dynamic';
import event1 from '../public/assets/event1.jpg';
import event2 from '../public/assets/event2.png';
import event3 from '../public/assets/event3.jpg';
import event4 from '../public/assets/event4.jpg';

const events = [event1, event2, event3, event4];

const EventsCarousel = dynamic(() => import('./EventsCarousel'), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-xl shadow-black/5 bg-white">
      <div className="h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] animate-pulse bg-black/5" />
    </div>
  ),
});

export const Events = () => {
  return (
    
    <section className="relative overflow-hidden py-14 px-5">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf5ff] to-[#fff7e6]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(177,0,170,0.10),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(30,64,255,0.10),transparent_55%)]" />

      <div className="relative z-10 lg:max-w-5xl md:max-w-3xl mx-auto flex flex-col items-center space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-black/5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#120014]/80">
              What’s Next
            </p>
          </div>

          <h1 className="font-extrabold uppercase text-2xl sm:text-3xl text-[#120014]">
            Upcoming Events
          </h1>

          <p className="text-sm sm:text-base text-[#120014]/70 max-w-xl mx-auto">
            Join us for worship, teaching, and community gatherings. Everyone is welcome.
          </p>
        </div>

        <div className="w-full">
          <EventsCarousel events={events} />
          <p className="text-center text-xs text-[#120014]/60 mt-3">
            Tip: Swipe / drag to browse events →
          </p>
        </div>
      </div>
    </section>

  );
};
