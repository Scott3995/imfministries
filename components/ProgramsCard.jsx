import Image from 'next/image';
import React from 'react';

export const ProgramsCard = ({ day, icon, time, serviceName, style }) => {
  return (
    <div
      className={`group flex flex-col items-center flex-shrink-0 text-center
                  p-4 px-7 md:px-8 lg:p-6 lg:px-14 rounded-2xl
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10
                  ${style}`}
    >
      {/* Icon bubble */}
      <div className="rounded-2xl bg-white/70 border border-black/5 backdrop-blur px-3 py-3 sm:px-4 sm:py-4">
        <Image
          src={icon}
          alt={serviceName}
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          priority
        />
      </div>

      {/* Gold accent divider */}
      <div className="mt-4 h-[3px] w-10 rounded-full bg-[#D9A441] group-hover:w-16 transition-all duration-300" />

      {/* Text */}
      <div className="mt-4 w-[11.5rem] sm:w-[13rem]">
        <h1 className="font-extrabold text-sm sm:text-base text-[#120014] leading-snug">
          {serviceName}
        </h1>

        <p className="mt-2 text-xs sm:text-sm font-semibold text-[#120014]/70 uppercase tracking-wide">
          {day}
        </p>

        <p className="mt-1 text-xs sm:text-sm font-extrabold text-[#1E40FF]">
          {time}
        </p>
      </div>
    </div>
  );
};
