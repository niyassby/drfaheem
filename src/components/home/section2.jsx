import React from "react";
import { motion } from "framer-motion";
import img from '../../assets/faheemDr2.webp';

function Section2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-[2rem] blur-2xl opacity-60" />
            <div className="relative group overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                className="w-full aspect-[4/5] object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700"
                src={img}
                alt="Dr. Faheem Najeeb"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-white font-medium text-lg">Dr. Faheem Najeeb</p>
                <p className="text-white/80 text-sm">Medical Director</p>
              </div>
            </div>

            {/* Design Accents */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 rounded-full mix-blend-multiply opacity-70 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-secondary-100 rounded-full mix-blend-multiply opacity-70 animate-pulse delay-700" />
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold tracking-wide uppercase">
                  Our Leadership
                </span>
              </motion.div>
              <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight main-font">
                Dr. Faheem Najeeb
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl font-medium text-primary-600 italic">
                Functional Medicine Specialist | Oncology Support Expert | Innovative Physician
              </motion.p>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <motion.p variants={itemVariants}>
                Dr. Faheem Najeeb is a highly qualified and experienced physician whose medical journey began in Emergency Medicine, where he built a strong foundation in acute care through years of frontline experience. Driven by a deeper calling to understand the root causes of illness, he transitioned into Functional and Integrative Medicine, with specialized focus areas in Metal Toxicology and Medical Oncology Support.
              </motion.p>

              <motion.p variants={itemVariants}>
                He currently serves as the Medical Director and heads the Department of Functional and Integrative Medicine at Tigris Valley, located in the inspiring environment of Markaz Knowledge City, Calicut. Dr. Faheem’s mission is to blend the best of modern medical science with time-tested wellness practices—offering therapies that not only treat disease but also restore vitality, enhance immunity, and prevent future illness.
              </motion.p>

              <motion.p variants={itemVariants}>
                His current focus is on supporting cancer patients—particularly in the often-overlooked phases of pre-chemotherapy preparation and post-chemotherapy rehabilitation. His personalized integrative interventions are designed to minimize chemotherapy’s side effects and improve long-term outcomes.
              </motion.p>

              <motion.p variants={itemVariants} className="font-medium text-gray-900">
                Whether you're facing a serious diagnosis or seeking proactive wellness, Dr. Faheem partners with his patients to create personalized, science-backed, and empowering treatment paths.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="pt-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm border-l-4 border-l-primary-500">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.183a8.965 8.965 0 01-3.34-1.215 8.965 8.965 0 01-1.215-3.34l2.183-.727a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022L7.933 2.127a2 2 0 00-2.812 0l-.881.881a2 2 0 00-.586 1.414c0 1.272.261 2.484.737 3.585a11.954 11.954 0 003.111 4.545 11.954 11.954 0 004.545 3.111c1.101.476 2.313.737 3.585.737a2 2 0 001.414-.586l.881-.881a2 2 0 000-2.812l-2.103-2.103z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Get in touch</p>
                  <p className="text-gray-900 font-bold">+91 9747 61 62 63</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section2;

