export default function ContactMap() {
    // Use your coordinates here (lat, lng)
    const lat = -17.865287;
    const lng = 31.034876;
  
    const embedSrc = `https://www.google.com/maps?output=embed&q=${lat},${lng}&z=15`;
    const openSrc = `https://www.google.com/maps?q=${lat},${lng}`;
  
    return (
      <div className="relative h-[44vh] w-full rounded-2xl overflow-hidden border border-black/5 shadow-lg shadow-black/5">
        <iframe
          title="Church Location"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={embedSrc}
        />
  
        {/* Brand overlay strip */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#120014]/70 via-[#b100aa]/20 to-transparent" />
  
        {/* CTA */}
        <a
          href={openSrc}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-4 right-4 inline-flex items-center gap-2
                     px-4 py-2 rounded-full font-extrabold uppercase tracking-wide text-xs
                     bg-[#1E40FF] hover:bg-[#1632cc] text-white
                     border border-white/10 shadow-lg shadow-black/20 transition"
        >
          Open in Maps
          <span className="text-[#D9A441]">↗</span>
        </a>
      </div>
    );
  }
  