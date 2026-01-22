import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import sky from '../public/assets/bg3.jpg';
import logo from '../public/assets/imf-logo.png';
import { motion } from 'framer-motion';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';

const list = {
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.2 },
  },
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 40 },
};

export const Header = () => {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass =
    'uppercase tracking-wide text-sm font-semibold text-white/90 hover:text-white transition relative';
  const navLinkUnderline =
    "after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#D9A441] hover:after:w-full after:transition-all after:duration-300";

  return (
    <header className="relative h-[50vh] sm:h-[70vh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={sky}
        alt="Header"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: '50% 35%' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2b0030]/60 via-[#b100aa]/25 to-black/60" />

      {/* Top nav */}
      <div className="absolute top-0 w-full z-30">
        <div className="backdrop-blur-md bg-[#b100aa]/30 border-b border-white/10">
          <nav
            className={`flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-4 px-5 ${
              active ? 'bg-[#b100aa]/70' : ''
            }`}
          >
            {/* Logo + Name */}
            <Link href="/#home" className="flex items-center gap-3">
  <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
    <Image src={logo} alt="IMF Logo" fill className="object-contain drop-shadow" priority />
  </div>

  <div className="leading-tight">
    <div className="font-extrabold text-white text-sm sm:text-base">I.M.F</div>

    {/* Small screens: short */}
    <div className="text-white/85 text-[0.68rem] font-semibold sm:hidden">
    International Ministries of Fellowship With God
    </div>

    {/* >= sm screens: full */}
    <div className="hidden sm:block text-white/85 text-[0.7rem] sm:text-xs font-semibold">
      International Ministries of Fellowship With God
    </div>
  </div>
</Link>


            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#home" className={`${navLinkClass} ${navLinkUnderline}`}>
                Home
              </Link>
              <Link href="/events" className={`${navLinkClass} ${navLinkUnderline}`}>
                Events
              </Link>
              <Link href="/gallery" className={`${navLinkClass} ${navLinkUnderline}`}>
                Gallery
              </Link>
              <Link href="/#contact" className={`${navLinkClass} ${navLinkUnderline}`}>
                Contact
              </Link>

              <Link
                href="/#contact"
                className="ml-2 px-4 py-2 rounded-full font-bold text-sm
                           bg-[#1E40FF] hover:bg-[#1632cc] text-white
                           shadow-lg shadow-black/20 border border-white/10 transition"
              >
                Visit Us
              </Link>
            </div>

            {/* Mobile icon */}
            <div className="md:hidden text-white">
              {!active ? (
                <RiMenu4Line onClick={() => setActive(true)} className="w-8 h-8" />
              ) : (
                <TfiClose onClick={() => setActive(false)} className="w-5 h-5" />
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-5 text-center text-white">
        <div className="space-y-5">
          
          <h2 className="text-sm sm:text-[1rem] font-bold text-white/90">
            Restoring Nations back to Christ.
          </h2>

          <div className="space-y-2 font-extrabold text-[2.2rem] leading-[2.3rem] sm:text-5xl lg:text-7xl">
            <h2 className="drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            Upon mount Zion shall be deliverance, and there shall be holines.
  
            </h2>
            <h2 className="hidden md:block drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
            The house of Jacob shall possess their possessions.
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {active && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={list}
          ref={wrapperRef}
          className="fixed inset-0 md:hidden z-40
                     bg-gradient-to-b from-[#b100aa] via-[#7b0080] to-[#120014]
                     flex flex-col space-y-7 uppercase items-center justify-center font-bold"
        >
          {[
            ['Home', '/#home'],
            ['Events', '/events'],
            ['Gallery', '/gallery'],
            ['Contact', '/#contact'],
          ].map(([label, href]) => (
            <motion.div variants={item} key={label}>
              <Link
                href={href}
                onClick={() => setActive(false)}
                className="text-2xl text-white hover:text-[#D9A441] transition"
              >
                {label}
              </Link>
            </motion.div>
          ))}

          <motion.div variants={item}>
            <Link
              href="/#contact"
              onClick={() => setActive(false)}
              className="mt-2 px-6 py-3 rounded-full bg-[#1E40FF] hover:bg-[#1632cc]
                         text-white border border-white/10 shadow-lg transition"
            >
              Visit Us
            </Link>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
};
