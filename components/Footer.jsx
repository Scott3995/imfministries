import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/assets/imf-logo.png';

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#120014] via-[#5b0060] to-[#b100aa]" />
      {/* Soft texture / glow */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(30,64,255,0.18),transparent_55%)]" />

      <div className="relative z-10 px-5 py-14">
        <div className="lg:max-w-5xl md:max-w-3xl mx-auto">
          {/* Top row: logo + identity */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 border-b border-white/15">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14">
                <Image src={logo} alt="IMF Logo" fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <h2 className="text-white font-extrabold text-lg">
                  International Ministries of Fellowship With God
                </h2>
                <p className="text-white/80 text-sm">
                  Restoring Nations back to Christ · <span className="text-[#D9A441] font-semibold">Obadiah 1:17</span>
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
              <p className="text-white/90 text-sm font-semibold">
			  But upon mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions
              </p>
            </div>
          </div>

          {/* Main footer grid */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Quick Links */}
            <div className="flex flex-col space-y-5">
              <h2 className="uppercase text-xl font-extrabold text-[#D9A441]">
                Quick Links
              </h2>

              <div className="flex flex-col space-y-3 uppercase">
                {[
                  { label: 'Home', href: '/#home' },
                  { label: 'Events', href: 'events' },
                  { label: 'Gallery', href: 'gallery' },
                  { label: 'About', href: '/#about' },
                  { label: 'Contact', href: '/#contact' },
                ].map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-white/85 hover:text-white font-semibold tracking-wide relative w-fit
                               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                               after:bg-[#D9A441] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="flex flex-col space-y-5">
              <h2 className="uppercase text-xl font-extrabold text-[#D9A441]">
                Policies
              </h2>

              <div className="flex flex-col space-y-3 uppercase">
                {['Privacy Policy', 'Cookie Policy', 'Terms and Conditions'].map((p) => (
                  <button
                    key={p}
                    className="text-left text-white/85 hover:text-white font-semibold tracking-wide relative w-fit
                               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                               after:bg-[#1E40FF] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Get in touch */}
            <div className="flex flex-col space-y-5">
              <h2 className="uppercase text-xl font-extrabold text-[#D9A441]">
                Get in touch
              </h2>

              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/15 text-white placeholder:text-white/60
                             focus:outline-none focus:ring-2 focus:ring-[#D9A441]/60 backdrop-blur"
                />
                <input
                  type="text"
                  placeholder="Phone / Email"
                  className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/15 text-white placeholder:text-white/60
                             focus:outline-none focus:ring-2 focus:ring-[#D9A441]/60 backdrop-blur"
                />
                <textarea
                  placeholder="Leave us a message"
                  rows={3}
                  className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/15 text-white placeholder:text-white/60
                             focus:outline-none focus:ring-2 focus:ring-[#D9A441]/60 backdrop-blur resize-none"
                />

                <button
                  className="w-full md:w-fit px-6 py-3 rounded-full font-extrabold uppercase tracking-wide
                             bg-[#1E40FF] hover:bg-[#1632cc] text-white
                             border border-white/10 shadow-lg shadow-black/20 transition"
                >
                  Send
                </button>

                <p className="text-white/70 text-xs">
                  By sending, you agree to our <span className="text-[#D9A441] font-semibold">privacy policy</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/75 text-sm">
              © {new Date().getFullYear()} IMF Church. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-white/80 text-sm">
              <span className="font-semibold">Follow:</span>
              <span className="text-[#D9A441]">Facebook</span>
              <span className="text-white/30">•</span>
              <span className="text-[#D9A441]">Instagram</span>
              <span className="text-white/30">•</span>
              <span className="text-[#D9A441]">YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
