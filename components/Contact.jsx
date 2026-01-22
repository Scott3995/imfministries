import dynamic from 'next/dynamic';
const ContactMap = dynamic(() => import('./ContactMap'), { ssr: false });

import { ImLocation, ImPhone } from 'react-icons/im';
import { MdAccessTime } from 'react-icons/md';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPodcast,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import getInTouch from '../public/assets/getintouch.jpg';
import Image from 'next/image';
import { useState } from 'react';
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Contact = () => {
	const [lng] = useState(31.034876);
	const [lat] = useState(-17.865287);
	

  return (
    <section id="contact" className="w-full">
      <div className="lg:max-w-5xl md:max-w-3xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Left: Image + Title */}
          <div className="relative col-span-2 rounded-2xl overflow-hidden min-h-[40vh]">
            <Image
              src={getInTouch}
              alt="Get In Touch"
              className="w-full h-full object-cover"
              priority
            />

            {/* Brand overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#120014]/70 via-[#b100aa]/35 to-[#1E40FF]/25" />

            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl px-6 py-6 w-full">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="uppercase font-extrabold text-2xl text-white"
                >
                  Contact Us
                </motion.p>

                <p className="text-white/85 text-sm mt-1">
                  We would love to hear from you
                </p>

                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    Seek first the Kingdom — Matthew 6:33
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Details */}
          <div className="col-span-2 flex items-center">
            <div className="w-full rounded-2xl bg-white border border-black/5 shadow-lg shadow-black/5 p-6 sm:p-8">
              <h3 className="text-[#120014] font-extrabold text-xl uppercase tracking-wide">
                Get in touch
              </h3>
              <p className="text-[#120014]/70 text-sm mt-2">
                Visit us, call us, or reach out on social media. We’re happy to connect.
              </p>

              <div className="mt-6 space-y-4 font-semibold text-[#120014]">
                <p className="flex items-start text-sm leading-relaxed">
                  <ImLocation className="w-5 h-5 mt-[2px] mr-3 text-[#D9A441]" />
                  Zimbabwe, Harare - Mbare. Conner Mhlanga & Madzima
                </p>

                <p className="flex items-start text-sm leading-relaxed">
                  <ImPhone className="w-5 h-5 mt-[2px] mr-3 text-[#D9A441]" />
                  +263 77 378 4954 <span className="mx-2 text-[#120014]/40">|</span> +263 77 974 0337
                </p>

                <p className="flex items-start text-sm leading-relaxed">
                  <MdAccessTime className="w-5 h-5 mt-[2px] mr-3 text-[#D9A441]" />
                  Main Service: Sundays 12:00pm - 05:00pm
                </p>
              </div>

              <div className="mt-8">
                <p className="font-extrabold text-[#120014] uppercase tracking-wide">
                  Social Media
                </p>

                <div className="mt-3 flex flex-wrap gap-4 text-[#b100aa]">
                  <a href="#" aria-label="Facebook" className="hover:text-[#1E40FF] transition">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:text-[#1E40FF] transition">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-[#1E40FF] transition">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="YouTube" className="hover:text-[#1E40FF] transition">
                    <FaYoutube className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-[#1E40FF] transition">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Podcast" className="hover:text-[#1E40FF] transition">
                    <FaPodcast className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <button
                className="mt-8 w-full sm:w-fit px-6 py-3 rounded-full font-extrabold uppercase tracking-wide
                           bg-[#1E40FF] hover:bg-[#1632cc] text-white
                           border border-white/10 shadow-lg shadow-black/10 transition"
              >
                Message Us
              </button>
            </div>
          </div>

          {/* Right: Map */}
          <div className="col-span-2 h-[44vh] rounded-2xl overflow-hidden border border-black/5 shadow-lg shadow-black/5">
  <ContactMap />
</div>

        </div>
      </div>
    </section>
  );
};
