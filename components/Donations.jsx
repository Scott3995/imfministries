import { useState } from 'react';

export const Donations = () => {
  const ecocashNumber = '07XXXXXXXX'; // ✅ put your EcoCash number here
  const accountName = 'International Ministries of Fellowship With God'; // optional
  const [copied, setCopied] = useState(false);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(ecocashNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // If clipboard fails (older browsers), do nothing
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Brand background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120014] via-[#b100aa] to-[#1E40FF]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(217,164,65,0.35),transparent_55%)]" />

      <div className="relative z-10 px-5 py-12 sm:py-14">
        <div className="lg:max-w-5xl md:max-w-3xl mx-auto flex justify-center text-center">
          <div className="w-full max-w-lg md:max-w-2xl flex flex-col items-center justify-center gap-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur">
              <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
                Giving
              </p>
            </div>

            <h1 className="font-extrabold uppercase text-sm sm:text-lg md:text-xl text-white">
              Love God. Love People. Influence the world.
            </h1>

            <p className="text-sm sm:text-base text-white/90 max-w-xs sm:max-w-lg leading-relaxed">
              It is a privilege to give back to God what He has graciously given. We commit to
              being good stewards of your generosity.
            </p>

            {/* EcoCash details card */}
            <div className="w-full rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-5 sm:p-6 shadow-xl shadow-black/20">
              <p className="text-white/80 text-xs sm:text-sm uppercase tracking-widest font-bold">
                EcoCash Number
              </p>

              <p className="mt-2 text-[#D9A441] font-extrabold text-2xl sm:text-3xl tracking-wide">
                {ecocashNumber}
              </p>

              {accountName && (
                <p className="mt-2 text-white/85 text-sm">
                  Account Name: <span className="font-semibold text-white">{accountName}</span>
                </p>
              )}

              <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={copyNumber}
                  className="w-full sm:w-auto px-8 py-3 rounded-full font-extrabold uppercase tracking-wide
                             bg-[#D9A441] hover:bg-[#c79235] text-[#120014]
                             shadow-lg shadow-black/20 transition"
                >
                  {copied ? 'Copied!' : 'Copy Number'}
                </button>

                <p className="text-white/70 text-xs sm:text-sm sm:text-left sm:max-w-xs flex items-center justify-center">
                  Use your name as reference (Tithe / Offering).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
