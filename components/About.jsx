import React from 'react';
import { Tag } from './Tag';
import bible from '../public/assets/bible.png';
import church from '../public/assets/church.png';
import pray from '../public/assets/pray.png';
import question from '../public/assets/question.png';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const About = () => {
  return (
    <section className="relative py-14 px-5 overflow-hidden">
      {/* Soft brand background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf5ff] to-white" />
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(177,0,170,0.10),transparent_55%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(30,64,255,0.10),transparent_55%)]" />

      <div className="relative lg:max-w-5xl md:max-w-3xl mx-auto">
        <div className="max-w-xl lg:max-w-none lg:grid grid-cols-4 items-center gap-10 mx-auto lg:px-10">
          {/* Left content */}
          <div className="flex flex-col items-center lg:items-start lg:col-span-2 text-center lg:text-left space-y-6 px-3 lg:px-0">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#D9A441]" />
                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#120014]/80">
                  About
                </p>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#120014] leading-tight">
                Our Church
              </h1>

              <div className="h-[3px] w-16 rounded-full bg-[#D9A441]" />
            </div>

            <div className="w-full rounded-2xl bg-white border border-black/5 shadow-lg shadow-black/5 p-5 sm:p-6 space-y-5">
              <div>
                <h3 className="uppercase text-sm font-extrabold text-[#120014]/70">
                  Our Mission
                </h3>
                <p className="mt-2 text-[#120014]/80 text-sm sm:text-base leading-relaxed">
                  We are people of God committed to the study, practice and spread of the
                  knowledge of His Word by the power of the Holy Spirit.
                </p>
              </div>

              <div>
                <h3 className="uppercase text-sm font-extrabold text-[#120014]/70">
                  Our Vision
                </h3>
                <p className="mt-2 text-[#120014]/80 text-sm sm:text-base leading-relaxed">
                  To develop members into Christ-like maturity and build healthy relations to
                  take care of the needs of the Church and serve the Community.
                </p>
              </div>

              <div className="text-[#120014]/80 text-sm sm:text-base leading-relaxed">
                <p>
                  We invite anyone and everyone to attend our Sunday gathering to celebrate God.
                </p>

                <p className="mt-2">
                  <Link
                    href={'/gallery'}
                    className="font-extrabold text-[#1E40FF] hover:text-[#b100aa] transition relative
                               after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                               after:bg-[#D9A441]"
                  >
                    Explore Our Gallery
                  </Link>{' '}
                  to get familiar with us.
                </p>
              </div>
            </div>
          </div>

          {/* Right tags */}
          <div className="lg:col-span-2 mt-10 lg:mt-0 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex space-x-3 items-end justify-center lg:justify-end"
            >
              <Tag
                icon={pray}
                text={'Daily Prayers'}
                style="w-36 sm:w-44 h-36 bg-white border border-[#b100aa]/15 shadow-lg shadow-black/5 rounded-2xl"
              />
              <Tag
                icon={bible}
                text={'Continuous Teaching'}
                style="w-36 sm:w-44 h-44 bg-white border border-[#1E40FF]/15 shadow-lg shadow-black/5 rounded-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex space-x-3 items-start justify-center lg:justify-end"
            >
              <Tag
                icon={question}
                text={'Community Helpers'}
                style="w-36 sm:w-44 h-44 bg-white border border-[#D9A441]/25 shadow-lg shadow-black/5 rounded-2xl"
              />
              <Tag
                icon={church}
                text={'Set of Sermons'}
                style="w-36 sm:w-44 h-36 bg-white border border-black/10 shadow-lg shadow-black/5 rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
