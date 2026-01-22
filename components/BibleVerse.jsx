import { motion } from 'framer-motion';
import React from 'react';

export const BibleVerse = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Brand background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120014] via-[#b100aa] to-[#1E40FF]" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,rgba(217,164,65,0.35),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center px-4 py-4 sm:py-5"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur mb-2">
          <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
            2026 Theme
          </p>
        </div>

        <h1 className="text-lg sm:text-2xl font-extrabold text-white">
          <span className="text-[#D9A441]">Visible Victory</span>
        </h1>

        <p className="mt-2 italic text-[0.7rem] sm:text-sm text-white/90 max-w-4xl mx-auto leading-relaxed">
          <span className="font-extrabold text-white mr-2">Joshua 1:5 —</span>
          There shall not any man be able to stand before thee all the days of thy life:
          as I was with Moses, so I will be with thee: I will not fail thee, nor forsake thee.
        </p>
      </motion.div>
    </section>
  );
};
