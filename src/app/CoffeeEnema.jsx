import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import { ContactInput } from '../components/home/ContactInput';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog';
import {
  Coffee, ShieldCheck, Zap, Leaf, Brain, Droplets,
  CheckCircle2, AlertTriangle, ClipboardCheck, Wind,
  Stethoscope, Heart, Activity, Play, Check, ArrowRight
} from 'lucide-react';
import video1 from '../assets/video/tigrisvideo2.mp4';
import img1 from "../assets/colon.jpg"
import img2 from "../assets/colon2.jpg"
const CoffeeEnema = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.13, 1, 0.12, 1] } },
  };

  const floatVariants = {
    animate: {
      y: [-4, 4],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    },
  };

  const colonBenefits = [
    "Support for digestive detoxification",
    "Relief from chronic constipation",
    "Reduction of bloating and abdominal discomfort",
    "Improved bowel motility",
    "Support for microbiome balance",
    "Enhanced nutrient absorption",
    "Reduction of overall toxic burden",
    "Improved mental clarity and reduction in stress associated with digestive imbalance"
  ];

  const coffeeBenefits = [
    "Liver detoxification pathways",
    "Gut cleansing and digestive support",
    "Reduction of toxic load",
    "Fatigue related to toxin accumulation",
    "Supportive care within integrative cancer programs",
    "Improved mental clarity and overall wellbeing"
  ];

  const whoMayBenefit = [
    "Chronic constipation or sluggish bowel function",
    "Persistent bloating or digestive discomfort",
    "Gut dysbiosis or microbiome imbalance",
    "Fatigue associated with toxin burden",
    "Individuals undergoing functional detoxification programs",
    "Patients seeking integrative supportive care during cancer treatment",
    "Individuals experiencing brain fog, mental fatigue, or stress linked to digestive imbalance"
  ];

  const whatToExpect = [
    "A pre-treatment consultation and evaluation",
    "Gentle administration of purified water or prepared solution through specialized equipment",
    "Controlled cleansing cycles to support elimination",
    "Post-therapy guidance including hydration, nutrition, and microbiome support"
  ];

  const programsIntegrated = [
    "Precision nutritional therapy",
    "Microbiome restoration programs",
    "Functional detoxification protocols",
    "Lifestyle and metabolic optimization strategies",
    "Mind–body medicine approaches"
  ];

  const safetyPoints = [
    "Conducted by trained professionals",
    "Performed in a sterile and controlled environment",
    "Recommended only after medical assessment",
    "Integrated into structured Functional Medicine protocols"
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Existing Appointment Dialog */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl border-0 shadow-2xl">
          <DialogHeader className="p-0">
            <ContactInput />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-amber-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 text-left"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/90 border border-amber-200/60 text-amber-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <Leaf className="w-4 h-4" /> Gut Restoration
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight"
              >
                Restoring{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-600">
                  Gut Health,
                </span>
                <br className="hidden lg:block" />
                Supporting Detoxification,
                <br className="hidden lg:block" />
                and Enhancing Mental Clarity
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-xl"
              >
                At <em>Tigris Valley</em>, advanced colon cleansing
                therapies—including <strong>Colon Hydrotherapy</strong> and{" "}
                <strong>Coffee Enema Therapy</strong>—are integrated into
                personalized{" "}
                <strong>Functional and Integrative Medicine programs</strong>.
                These therapies are designed to support digestive balance,
                stimulate natural detoxification pathways, enhance mental
                clarity, reduce stress, and serve as supportive care within
                comprehensive wellness and integrative cancer support programs.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-md lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
              >
                The digestive system plays a central role in detoxification,
                immune regulation, and metabolic health. Modern lifestyles,
                environmental toxins, medications, and dietary factors can place
                significant strain on the body’s natural elimination pathways.
                When these systems become overloaded, individuals may experience
                symptoms such as digestive discomfort, fatigue, brain fog,
                inflammation, and reduced vitality.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="bg-amber-50 border-l-4 border-amber-600 p-4 mb-10 max-w-xl rounded-r-lg"
              >
                <p className="text-amber-900 font-medium">
                  Through carefully guided therapies and personalized medical
                  supervision, our programs aim to restore balance to the
                  digestive system while supporting the body’s natural healing
                  capacity.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              >
                <button
                  onClick={() => openModal()}
                  className="bg-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgb(180,83,9,0.3)] hover:shadow-[0_8px_30px_rgb(180,83,9,0.5)] hover:bg-amber-800 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Begin Your Gut Restoration Journey
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-12 lg:mt-0"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(180,83,9,0.1)] border-[6px] border-white group">
                <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={img1}
                  className="w-full h-[450px] lg:h-[650px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="Gut Health and Detoxification"
                />
              </div>

              {/* <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-700 shrink-0 shadow-inner">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    Medically Supervised
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Integrative Support
                  </p>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Colon Hydrotherapy & Coffee Enema ── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          {/* Colon Hydrotherapy */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-blue-500 rounded-full"></div>
                <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase">
                  Therapy 01
                </h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Colon Hydrotherapy
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Colon hydrotherapy is a{" "}
                <em>
                  gentle cleansing of the large intestine using purified,
                  temperature-controlled water delivered through specialized
                  medical equipment
                </em>
                . This therapy helps remove accumulated waste from the colon and
                supports healthy bowel function.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                At <em>Tigris Valley</em>, colon hydrotherapy is performed in a{" "}
                <strong>
                  safe, hygienic, and medically supervised environment
                </strong>
                , ensuring patient comfort, privacy, and the highest standards
                of care.
              </p>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Activity className="text-blue-500" /> Potential Benefits
                </h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {colonBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-slate-700">
                        {idx === 7 ? <em>{item}</em> : item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative  rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <video
                  className="w-full aspect-[9/16]  object-cover"
                  controls
                  preload="metadata"
                  poster={img2}
                >
                  <source src={video1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-widest">
                  <Play className="w-3 h-3" /> Watch Overview
                </span>
              </div>
            </motion.div>
          </div>

          {/* Coffee Enema Therapy */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-amber-700 rounded-full"></div>
                <h2 className="text-sm font-bold text-amber-700 tracking-widest uppercase">
                  Therapy 02
                </h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Coffee Enema Therapy
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Coffee enema therapy is an integrative detoxification technique
                used in certain functional medicine protocols. The therapy
                involves the administration of a specially prepared organic
                coffee solution into the colon for a short duration.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Compounds present in coffee are believed to{" "}
                <em>
                  stimulate bile flow and support the liver’s detoxification
                  pathways
                </em>
                , potentially enhancing the elimination of metabolic waste and
                toxins.
              </p>

              <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 mb-6">
                <h3 className="text-lg font-bold text-amber-900 mb-4">
                  When medically appropriate, incorporated into programs
                  designed to support:
                </h3>
                <ul className="space-y-3">
                  {coffeeBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Coffee className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-amber-900">
                        {idx >= 4 ? <em>{item}</em> : item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-600 font-medium">
                At Tigris Valley, this therapy is provided{" "}
                <em>
                  only after careful medical evaluation and under professional
                  supervision
                </em>
                , ensuring safety and suitability for each individual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img src="https://simplenursing.com/wp-content/uploads/2024/06/Enema-Tools-with-coffee-beans-and-coffee-in-a-glass-cup-768x510.webp" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who May Benefit & What to Expect ── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border border-amber-500/50 absolute"></div>
          <div className="w-[1200px] h-[1200px] rounded-full border border-amber-300/20 absolute"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Who may benefit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 flex items-center gap-4">
                <Brain className="text-amber-500 w-10 h-10" /> Who May Benefit
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                These therapies may be beneficial for individuals experiencing:
              </p>
              <ul className="space-y-4">
                {whoMayBenefit.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                    <span className="text-slate-200 font-medium">
                      {idx === 4 ? (
                        <>
                          Individuals undergoing{" "}
                          <em>functional detoxification programs</em>
                        </>
                      ) : idx === 5 ? (
                        <>
                          Patients seeking{" "}
                          <em>
                            integrative supportive care during cancer treatment
                          </em>
                        </>
                      ) : idx === 6 ? (
                        <>
                          Individuals experiencing{" "}
                          <em>
                            brain fog, mental fatigue, or stress linked to
                            digestive imbalance
                          </em>
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-amber-900/40 rounded-xl border border-amber-500/30">
                <p className="text-amber-100 text-sm font-medium">
                  All therapies are{" "}
                  <em>recommended only after clinical evaluation</em> to ensure
                  they are appropriate for the patient’s condition.
                </p>
              </div>
            </motion.div>

            {/* What to expect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 flex items-center gap-4">
                <ClipboardCheck className="text-emerald-500 w-10 h-10" /> What
                to Expect
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Colon cleansing therapies at Tigris Valley are conducted in a{" "}
                <em>private, comfortable, and medically supervised setting</em>.
                The procedure typically involves:
              </p>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                {whatToExpect.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:mx-auto"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-emerald-500 text-white font-bold shrink-0 absolute left-0 md:left-1/2 md:-translate-x-1/2 md:-ml-0">
                      {idx + 1}
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl bg-slate-800 border border-slate-700 ml-12 md:ml-0 md:odd:mr-auto md:even:ml-auto">
                      <p className="text-slate-200 font-medium font-sm">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-400 italic text-center text-sm">
                Most sessions are designed to be comfortable, discreet, and
                professionally guided throughout the entire process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Safety and Medical Supervision ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center mb-6 text-rose-600 mx-auto md:mx-0">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4 text-center md:text-left">
                Safety and Medical Supervision
              </h2>
              <p className="text-slate-600 text-center md:text-left">
                Patient safety is our highest priority.
              </p>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">
                At <em>Tigris Valley</em>, colon hydrotherapy and coffee enema
                therapy are performed using{" "}
                <strong>
                  modern closed-system equipment that meets strict hygiene
                  standards
                </strong>
                .
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {safetyPoints.map((point, i) => (
                  <div key={i} className="flex gap-3">
                    <Check className="text-emerald-500 w-5 h-5 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-rose-50 border border-rose-100 p-5 rounded-xl">
                <p className="text-rose-800 text-sm font-medium">
                  Certain conditions may require{" "}
                  <em>
                    special precautions or may not be suitable for colon
                    cleansing therapies, which is why{" "}
                    <strong>
                      medical evaluation is always required before treatment
                    </strong>
                  </em>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Integrated Protocols & Natural Healing ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
                Integrated Into Personalized Functional Medicine Programs
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                These therapies are not offered as routine wellness procedures
                but are integrated into{" "}
                <em>
                  comprehensive Functional and Integrative Medicine treatment
                  plans
                </em>{" "}
                when clinically appropriate.
              </p>
              <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">
                They may be combined with:
              </h3>
              <ul className="space-y-4">
                {programsIntegrated.map((prog, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Wind className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-800">{prog}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-amber-900 text-white p-10 md:p-14 rounded-[3rem] h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-amber-700 rounded-full blur-3xl opacity-50"></div>
                <div className="relative z-10">
                  <Heart className="w-12 h-12 text-amber-400 mb-8" />
                  <h2 className="text-3xl font-extrabold mb-6 text-white">
                    Supporting the Body’s Natural Healing Systems
                  </h2>
                  <p className="text-amber-100/90 text-lg mb-6 leading-relaxed">
                    At <em>Tigris Valley</em>, our goal is to restore the body's
                    internal balance through{" "}
                    <strong>
                      advanced Functional and Integrative Medicine
                    </strong>
                    .
                  </p>
                  <p className="text-amber-100/90 text-lg mb-12 leading-relaxed">
                    By improving digestive health and supporting detoxification
                    pathways, our programs aim to{" "}
                    <em>
                      enhance energy, improve mental clarity, reduce toxic
                      burden, and promote long-term health and resilience
                    </em>
                    .
                  </p>
                  <button
                    onClick={() => openModal()}
                    className="bg-white text-amber-900 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-amber-50 transition-colors w-full sm:w-auto"
                  >
                    Begin Your Gut Restoration Journey
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoffeeEnema;
