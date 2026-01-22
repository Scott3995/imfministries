import React from 'react';
import Image from 'next/image';
import { Layout } from '../components/Layout'; // adjust if your path differs

// Optional: if you want a hero background like your Header does, just use a public asset:
const HERO_BG = '/assets/bg3.jpg'; // put bg3.jpg inside /public/assets/

const EVENTS = [
  {
    id: 'ev1',
    title: 'Sunday Worship Service',
    date: 'Sundays',
    time: '12:00pm - 05:00pm',
    location: 'Harare - Mbare (Corner Mhlanga & Madzima)',
    image: '/assets/event1.jpg',
  },
  {
    id: 'ev2',
    title: 'All-Night Prayer',
    date: 'Friday',
    time: '09:00pm - 05:00am',
    location: 'Prayer Hall',
    image: '/assets/event2.jpg',
  },
  {
    id: 'ev3',
    title: 'Youth Fellowship',
    date: 'Saturday',
    time: '02:00pm - 05:00pm',
    location: 'Youth Center',
    image: '/assets/event3.jpg',
  },
  {
    id: 'ev4',
    title: 'Perfect Women Conference',
    date: 'Monthly',
    time: '10:00am - 02:00pm',
    location: 'Pentecost Holiness Cnr Mhlanga & Madzima',
    image: '/assets/event.jpg',
  },
];

export default function EventsPage() {
  return (
    <Layout title="Events">
      <div className="bg-stone-50">
        {/* HERO */}
        <section className="relative h-[35vh] sm:h-[45vh] w-full overflow-hidden">
          <Image
            src={HERO_BG}
            alt="Events Background"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: '50% 35%' }}
          />

          {/* IMF-style overlay (same vibe as your Header/Contact) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b0030]/70 via-[#b100aa]/25 to-black/60" />

          <div className="absolute inset-0 flex items-center justify-center px-5">
            <div className="text-center max-w-3xl">
              <div className="mx-auto mb-4 relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md overflow-hidden">
                {/* Put logo here: /public/assets/imf-logo.png */}
                <Image
                  src="/assets/imf-logo.png"
                  alt="IMF Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>

              <h1 className="text-white font-extrabold text-2xl sm:text-4xl uppercase">
                Upcoming Events
              </h1>

              <p className="mt-2 text-white/85 text-sm sm:text-base font-semibold">
                Restoring Nations back to Christ. <span className="text-[#D9A441]">•</span> Obadiah 1:17
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                <span className="text-xs sm:text-sm font-semibold text-white/90">
                  Join us this week — everyone is welcome
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS LIST */}
        <section className="w-full">
          <div className="lg:max-w-5xl md:max-w-3xl mx-auto px-5 py-12">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-[#120014] font-extrabold text-xl sm:text-2xl uppercase tracking-wide">
                  Events Schedule
                </h2>
                <p className="text-[#120014]/70 text-sm mt-1">
                  Tap an event image for a quick view. (You can later connect RSVP to WhatsApp/Google Form.)
                </p>
              </div>

              <a
                href="/#contact"
                className="hidden sm:inline-flex px-5 py-2 rounded-full font-extrabold uppercase tracking-wide
                           bg-[#1E40FF] hover:bg-[#1632cc] text-white
                           border border-white/10 shadow-lg shadow-black/10 transition"
              >
                Visit Us
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {EVENTS.map((e) => (
                <div
                  key={e.id}
                  className="rounded-2xl bg-white border border-black/5 shadow-lg shadow-black/5 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image src={e.image} alt={e.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-xs font-extrabold uppercase tracking-wide text-white/90">
                        {e.date} • {e.time}
                      </div>
                      <h3 className="text-lg font-extrabold">{e.title}</h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-sm font-semibold text-[#120014]">
                      Location:
                      <span className="ml-2 text-[#120014]/70 font-semibold">{e.location}</span>
                    </p>

                    <div className="mt-4 flex gap-3">
                      <a
                        href="/#contact"
                        className="flex-1 text-center px-4 py-3 rounded-full font-extrabold uppercase tracking-wide
                                   bg-[#b100aa] hover:bg-[#8f008a] text-white
                                   border border-white/10 shadow-lg shadow-black/10 transition"
                      >
                        Get Details
                      </a>

                      <a
                        href="/#contact"
                        className="flex-1 text-center px-4 py-3 rounded-full font-extrabold uppercase tracking-wide
                                   bg-white hover:bg-black/5 text-[#120014]
                                   border border-black/10 transition"
                      >
                        RSVP
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Small CTA footer */}
            <div className="mt-10 rounded-2xl overflow-hidden border border-black/5 shadow-lg shadow-black/5">
              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#120014] via-[#b100aa] to-[#1E40FF] text-white">
                <h3 className="font-extrabold text-lg sm:text-xl uppercase">
                  Want to serve or help during events?
                </h3>
                <p className="text-white/85 text-sm mt-2 font-semibold">
                  Talk to us after service or reach us on the Contact page.
                </p>

                <a
                  href="/#contact"
                  className="mt-5 inline-flex px-6 py-3 rounded-full font-extrabold uppercase tracking-wide
                             bg-white/15 hover:bg-white/20 text-white
                             border border-white/20 backdrop-blur transition"
                >
                  Contact the Church
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
