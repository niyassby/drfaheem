import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Thermometer, ShieldCheck, Droplets, Zap, Leaf, Pill,
  CheckCircle2, AlertTriangle, ClipboardCheck, Wind,
  Stethoscope, Heart, Activity, Sun, Flame
} from 'lucide-react';
import fir from "../assets/fir.jpeg"
import firVideo from "../assets/video/firvdo.mp4"
const FirSaunaTherapy = () => {
  const benefitsList = [
    {
      title: "Detoxification",
      desc: "Aids in eliminating heavy metals and toxins through sweat.",
      icon: <Droplets className="text-amber-500 w-8 h-8" />,
      color: "border-amber-100 bg-amber-50",
    },
    {
      title: "Improved Circulation",
      desc: "Enhances blood flow, oxygenation, and cellular healing.",
      icon: <Activity className="text-rose-500 w-8 h-8" />,
      color: "border-rose-100 bg-rose-50",
    },
    {
      title: "Pain Relief",
      desc: "Helps reduce stiffness, joint pain, and muscle aches.",
      icon: <Zap className="text-indigo-500 w-8 h-8" />,
      color: "border-indigo-100 bg-indigo-50",
    },
    {
      title: "Weight Support",
      desc: "Burns calories and supports fat metabolism.",
      icon: <Flame className="text-orange-500 w-8 h-8" />,
      color: "border-orange-100 bg-orange-50",
    },
    {
      title: "Skin Glow",
      desc: "Clears impurities, improves tone, and rejuvenates skin health.",
      icon: <Sun className="text-yellow-500 w-8 h-8" />,
      color: "border-yellow-100 bg-yellow-50",
    },
    {
      title: "Relaxation",
      desc: "Reduces stress, promotes better sleep, and balances nervous system.",
      icon: <Leaf className="text-emerald-500 w-8 h-8" />,
      color: "border-emerald-100 bg-emerald-50",
    },
    {
      title: "Immune Boost",
      desc: "Strengthens resistance by stimulating white blood cell activity.",
      icon: <ShieldCheck className="text-teal-500 w-8 h-8" />,
      color: "border-teal-100 bg-teal-50",
    },
  ];

  const whoCanTake = [
    "Patients with toxin overload, fatigue, or low immunity.",
    "Individuals with arthritis, fibromyalgia, or chronic pain conditions.",
    "Those managing metabolic syndrome, obesity, or slow metabolism.",
    "People seeking skin rejuvenation and natural detox support.",
    "Anyone wanting a safe, non-invasive way to relax and recharge.",
  ];

  const whoCantTake = [
    "Pregnant or breastfeeding women.",
    "Patients with uncontrolled hypertension or heart disease.",
    "Individuals with acute infections, dehydration, or fever.",
    "Those with pacemakers or certain implanted devices (unless cleared by a doctor).",
    "People with severe heat intolerance or dermatological conditions aggravated by sweating.",
  ];

  const whyTigrisFeatures = [
    {
      title: "Personalized Care",
      desc: "Each treatment is tailored to your health history, needs, and goals.",
      icon: <ClipboardCheck />,
    },
    {
      title: "Integrative Approach",
      desc: "Therapies like IV drips, ozone, chelation, FIR sauna, and nutritional medicine are combined for complete wellness.",
      icon: <Leaf />,
    },
    {
      title: "Expert Supervision",
      desc: "A team of qualified doctors and therapists ensures therapies are both safe and effective.",
      icon: <Stethoscope />,
    },
    {
      title: "Focus on Root Cause",
      desc: "Instead of short-term fixes, Tigris Valley addresses underlying imbalances, supporting long-term healing.",
      icon: <Heart />,
    },
    {
      title: "Healing Environment",
      desc: "The clinic offers a serene and professional setting that supports relaxation and recovery.",
      icon: <Wind />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.13, 1, 0.12, 1],
      },
    },
  };

  const floatVariants = {
    animate: {
      y: [-4, 4],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-amber-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Column: Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 text-left"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/90 border border-amber-200/60 text-amber-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <Thermometer className="w-4 h-4" /> Deep Tissue Detox
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight"
              >
                Far Infrared <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Sauna Treatment
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl"
              >
                Far Infrared Sauna (FIR Sauna) is a modern, non-invasive therapy
                that uses infrared light waves to heat the body from the inside
                out, stimulating detoxification and deep relaxation.
              </motion.p>
              {/* 
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              >
                <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgb(217,119,6,0.3)] hover:shadow-[0_8px_30px_rgb(217,119,6,0.5)] hover:bg-amber-700 transition-all duration-300 transform hover:-translate-y-1">
                  Book a Consultation
                </button>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-bold text-slate-500 leading-tight">
                    Trusted by<br />patients worldwide
                  </div>
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right Column: Reel Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-12 lg:mt-0 flex justify-center"
            >
              {/* Reel-style phone frame */}
              <div className="relative w-[280px] sm:w-[300px] lg:w-[320px]">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-b from-amber-400/20 to-orange-500/10 rounded-[3rem] blur-2xl pointer-events-none" />
                {/* Phone frame border */}
                <div className="relative rounded-[2.8rem] border-[6px] border-white shadow-[0_30px_80px_rgba(217,119,6,0.2)] overflow-hidden bg-black">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
                  {/* Video */}
                  <video
                    src={firVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                    style={{ aspectRatio: "9/16", display: "block" }}
                  />
                  {/* Overlay gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center z-20">
                    <span className="bg-amber-500/90 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide shadow-lg">
                      FIR Sauna · Tigris Valley
                    </span>
                  </div>
                </div>
                {/* Side badge */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-amber-100 px-4 py-3 flex flex-col items-center gap-1">
                  <Thermometer className="w-5 h-5 text-amber-500" />
                  <span className="text-xs font-bold text-slate-800 leading-tight text-center">
                    45–60°C
                    <br />
                    Deep Heat
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-20 mt-0 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 hidden lg:block pointer-events-none"></div>
        <div className="absolute -left-40 top-20 w-70 h-0 bg-amber-50/50 rounded-full pointer-events-none"></div>

        <div className="container mx-auto -mt-5 px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="lg:w-3/5 lg:pr-16 mb-12 lg:mb-0 relative z-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-amber-600 rounded-full"></div>
                <h2 className="text-sm font-bold text-amber-600 tracking-widest uppercase">
                  Introduction
                </h2>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Healing from the Inside Out
              </h3>

              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                Far Infrared Sauna (FIR Sauna) is a modern, non-invasive therapy
                that uses infrared light waves to heat the body from the inside
                out.
              </p>

              <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl">
                <p className="text-slate-600 leading-relaxed">
                  Unlike conventional saunas that heat the surrounding air, FIR
                  saunas penetrate <strong>3–5 cm into tissues</strong>,
                  stimulating detoxification, circulation, and deep relaxation
                  at lower, more tolerable temperatures. At Tigris Valley, Far
                  Infrared sauna treatment in Kochi is offered as part of a
                  holistic wellness and detox program.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:w-2/5 relative z-30 lg:-ml-10 mt-8 lg:mt-24"
            >
              <div className="bg-amber-700 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-amber-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

                <div className="w-16 h-16 bg-amber-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-amber-700/50 relative z-10">
                  <Thermometer className="w-8 h-8 text-amber-300" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">
                  The Tigris Valley Approach
                </h4>

                <p className="text-amber-100/90 leading-relaxed font-medium relative z-10">
                  At Tigris Valley, FIR sauna therapy is delivered under strict
                  medical supervision with standardized safety protocols.
                </p>

                <div className="mt-8 pt-8 border-t border-amber-800/50 relative z-10">
                  <p className="text-sm text-amber-200 leading-relaxed">
                    Combined with chelation therapy, IV nutrient drips, and
                    dietary detox plans to maximize overall results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Information */}
      <section className="py-14 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border border-amber-500/50 absolute"></div>
          <div className="w-[1000px] h-[1000px] rounded-full border border-amber-400/30 absolute"></div>
          <div className="w-[1200px] h-[1200px] rounded-full border border-amber-300/20 absolute"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Treatment Approach
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-900/90 p-10 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden group hover:bg-slate-800 transition-all duration-300 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                  During a session, patients relax inside a specially designed
                  infrared sauna cabin, where far infrared waves gently raise
                  the body's core temperature. This promotes profuse sweating,
                  enhancing the release of stored toxins such as heavy metals,
                  pesticides, and metabolic waste products.
                </p>
                <p className="text-amber-100/90 leading-relaxed">
                  Typical sessions last 20–40 minutes, with the sauna operating
                  at 45–60°C—much lower than steam saunas, yet producing deeper
                  sweat. The therapy improves blood flow, boosts metabolism, and
                  stimulates the body's natural detox pathways.
                </p>
                <div className="bg-amber-900/30 border border-amber-500/20 p-6 rounded-2xl mt-4">
                  <p className="text-slate-300 leading-relaxed">
                    At Tigris Valley, FIR sauna therapy is combined with
                    complementary protocols such as chelation therapy, IV
                    nutrient drips, and dietary detox plans to maximize overall
                    results.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Video Showcase ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT SIDE CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-10 bg-amber-500 rounded-full" />
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  See It in Action
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Experience the Power of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  Far Infrared Sauna
                </span>
              </h2>

              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Far infrared waves penetrate{" "}
                <strong>3–5 cm deep into body tissue</strong>, gently raising
                core temperature to trigger profuse sweating, toxin elimination,
                and deep cellular detoxification — all in a comfortable,
                medically supervised environment.
              </p>

              <p className="text-slate-500 leading-relaxed">
                At Tigris Valley, every FIR sauna session is designed to
                complement your overall wellness and detox protocol, combined
                with IV drips, ozone therapy, and dietary support.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  "Deep Detox",
                  "Pain Relief",
                  "Immune Boost",
                  "Skin Rejuvenation",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden group min-h-[520px] shadow-xl border-4 border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-amber-900/20 to-transparent z-10"></div>

              <img
                src={fir}
                alt="FIR Sauna Therapy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-4">
                  <Thermometer className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-2">
                  Deep Tissue Healing
                </h3>

                <p className="text-amber-200 text-sm font-medium">
                  Infrared Penetrates 3–5 cm Into Tissue
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits of FIR Sauna */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Benefits of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                  FIR Sauna
                </span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed md:max-w-sm md:text-right">
              Supporting your body's detox and healing through non-invasive
              infrared therapy.
            </p>
          </motion.div>

          {/* Full-Width Benefit Tiles (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefitsList.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`group flex items-start gap-5 p-6 md:p-8 rounded-[1.5rem] border bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${benefit.color}`}
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center">
                  {React.cloneElement(benefit.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Considerations for Therapy */}
      <section className="py-14 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-gradient-to-tr from-emerald-50/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200 text-slate-700 text-sm font-bold tracking-widest uppercase mb-6">
              Patient Guidelines
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Considerations for FIR Sauna
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              A detailed medical screening is mandatory before initiating
              therapy to ensure optimal safety and efficacy.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
            {/* Who Can Take */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-emerald-100 overflow-hidden relative group"
            >
              <div className="p-10 md:p-14 relative">
                <div className="absolute -right-10 -top-10 text-emerald-100 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <CheckCircle2 className="w-64 h-64" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 border-b border-emerald-100/50 pb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    Who Can Take This
                  </h3>
                </div>

                <ul className="space-y-6 relative z-10">
                  {whoCanTake.map((item, i) => (
                    <li key={i} className="flex gap-5 group/item">
                      <div className="w-3 h-3 rounded-full bg-emerald-200 group-hover/item:bg-emerald-500 transition-colors mt-2.5 shrink-0 shadow-sm" />
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Who Can't Take */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-rose-100 overflow-hidden relative group"
            >
              <div className="p-10 md:p-14 relative">
                <div className="absolute -right-10 -top-10 text-rose-100 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <AlertTriangle className="w-64 h-64" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 border-b border-rose-100/50 pb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center border border-rose-100 shrink-0 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500 text-rose-600">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    Who Can't Take This
                  </h3>
                </div>

                <ul className="space-y-6 relative z-10">
                  {whoCantTake.map((item, i) => (
                    <li key={i} className="flex gap-5 group/item">
                      <div className="w-3 h-3 rounded-full bg-rose-200 group-hover/item:bg-rose-500 transition-colors mt-2.5 shrink-0 shadow-sm" />
                      <p className="text-slate-700 font-medium leading-relaxed">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Tigris Valley Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why Tigris Valley
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Tigris Valley is more than a treatment center—it is a holistic
              healing destination. Every therapy is delivered with medical
              supervision, patient safety, and evidence-based protocols. What
              sets Tigris Valley apart:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {whyTigrisFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}

            {/* 6th slot: Philosophy quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-lg flex flex-col justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6 shrink-0">
                <Thermometer className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-base text-slate-300 font-medium leading-relaxed">
                This patient-centric philosophy ensures that whether it's detox,
                chronic illness management, or wellness enhancement, Tigris
                Valley provides care that restores vitality and strengthens
                resilience naturally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FirSaunaTherapy;
