import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Footer } from './Footer';

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

export const Layout = ({ children, title }) => {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef(null);

  const router = useRouter();
  const solidHeader = router.pathname === '/events' || router.pathname === '/gallery';

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

  const headerBg = solidHeader ? 'bg-[#120014]/90' : 'bg-[#b100aa]/35';

  return (
    <>
      <Head>
        <title>{title ? `${title} - IMF` : 'IMF'}</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* IMF Brand Header */}
        <header className="sticky top-0 z-50">
          <div className={`backdrop-blur-md ${headerBg} border-b border-white/10`}>
            {/* IMPORTANT: nav is relative so we can center the desktop menu */}
            <nav className="relative flex items-center lg:max-w-5xl md:max-w-3xl mx-auto py-4 px-5">
              {/* LEFT: Brand */}
              <Link href="/#home" className="sm:text-lg font-extrabold z-30 text-white">
                I.M.F
                <span className="hidden sm:inline text-white/80 font-semibold">
                  {' '}
                  · Fellowship With God
                </span>
              </Link>

              {/* CENTER: Desktop links (centered) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
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
              </div>

              {/* RIGHT: CTA (desktop) + hamburger (mobile) */}
              <div className="ml-auto flex items-center gap-3 z-30">
                {/* Desktop CTA */}
                <Link
                  href="/#contact"
                  className="hidden md:inline-flex ml-2 px-4 py-2 rounded-full font-extrabold text-sm uppercase tracking-wide
                             bg-[#1E40FF] hover:bg-[#1632cc] text-white
                             border border-white/10 shadow-lg shadow-black/20 transition"
                >
                  Visit Us
                </Link>

                {/* Mobile icon */}
                <div className="md:hidden text-white">
                  {!active ? (
                    <RiMenu4Line onClick={() => setActive(true)} className="w-8 h-8" />
                  ) : (
                    <TfiClose onClick={() => setActive(false)} className="w-5 h-5" />
                  )}
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile menu */}
          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              ref={wrapperRef}
              className="fixed top-0 bottom-0 left-0 right-0 md:hidden z-40
                         bg-gradient-to-b from-[#b100aa] via-[#7b0080] to-[#120014]
                         flex flex-col space-y-7 uppercase items-center justify-center font-extrabold"
            >
              <motion.div variants={item}>
                <Link
                  href="/#home"
                  onClick={() => setActive(false)}
                  className="text-2xl text-white hover:text-[#D9A441] transition"
                >
                  Home
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link
                  href="/events"
                  onClick={() => setActive(false)}
                  className="text-2xl text-white hover:text-[#D9A441] transition"
                >
                  Events
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link
                  href="/gallery"
                  onClick={() => setActive(false)}
                  className="text-2xl text-white hover:text-[#D9A441] transition"
                >
                  Gallery
                </Link>
              </motion.div>

              <motion.div variants={item}>
                <Link
                  href="/#contact"
                  onClick={() => setActive(false)}
                  className="text-2xl text-white hover:text-[#D9A441] transition"
                >
                  Contact
                </Link>
              </motion.div>

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

        <main className="flex-1">{children}</main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
