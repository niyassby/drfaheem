import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Activity,
  ShieldCheck,
  HeartPulse,
  Wind,
  Stethoscope,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
  TestTube,
  Sparkles,
  Droplets,
  Zap,
  RefreshCw,
  Sun,
  Calendar
} from 'lucide-react';

import video11 from '../assets/video/video11.mp4';
import video12 from '../assets/video/video12.mp4';
import Popup from '../components/Contact/Popup';

const EbooTherapy = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.5 });

    const v1 = video1Ref.current;
    const v2 = video2Ref.current;

    if (v1) observer.observe(v1);
    if (v2) observer.observe(v2);

    return () => {
      if (v1) observer.unobserve(v1);
      if (v2) observer.unobserve(v2);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: [0.13, 1, 0.12, 2],
      },
    },
  };

  const benefits = [
    {
      title: "1. Advanced Blood Detoxification",
      desc: "Removes toxins, endotoxins, and metabolic waste\nSupports liver and kidney function",
      icon: <Droplets className="text-indigo-500 w-8 h-8" />,
      color: "border-indigo-100 bg-indigo-50",
    },
    {
      title: "2. Antimicrobial & Antiviral Action",
      desc: "Helps reduce microbial load in the bloodstream\nUseful in chronic infections and post-viral syndromes",
      icon: <ShieldCheck className="text-emerald-500 w-8 h-8" />,
      color: "border-emerald-100 bg-emerald-50",
    },
    {
      title: "3. Immune Modulation",
      desc: "Balances overactive or suppressed immune responses\nBeneficial in autoimmune conditions",
      icon: <Stethoscope className="text-amber-500 w-8 h-8" />,
      color: "border-amber-100 bg-amber-50",
    },
    {
      title: "4. Anti-Inflammatory Effects",
      desc: "Reduces chronic inflammation at a systemic level",
      icon: <Activity className="text-rose-500 w-8 h-8" />,
      color: "border-rose-100 bg-rose-50",
    },
    {
      title: "5. Improved Oxygenation & Energy",
      desc: "Enhances mitochondrial function\nBoosts energy and vitality",
      icon: <Sun className="text-yellow-500 w-8 h-8" />,
      color: "border-yellow-100 bg-yellow-50",
    },
    {
      title: "6. Enhanced Circulation",
      desc: "Improves blood flow and microcirculation",
      icon: <RefreshCw className="text-blue-500 w-8 h-8" />,
      color: "border-blue-100 bg-blue-50",
    },
  ];

  const conditions = [
    "Chronic infections",
    "Long COVID / post-viral fatigue",
    "Autoimmune diseases",
    "Chronic fatigue syndrome",
    "Fibromyalgia",
    "Metabolic disorders",
    "Lyme disease (supportive care)",
    "Cancer supportive and integrative care",
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-indigo-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 text-left"
            >
                            <motion.div variants={itemVariants}>
                              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/90 border border-indigo-200/60 text-indigo-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                                <Wind className="w-4 h-4" /> Next-Generation Blood Purification & Immune Activation Therapy
                              </span>
                            </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight mt-6"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                  EBOO with UV Irradiation
                </span>
                <br /> (EBOO + UBI)
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-2xl text-slate-800 font-bold leading-relaxed mb-4 mt-2"
              >
                Next-Generation Blood Purification & Immune Activation Therapy
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600 font-bold leading-relaxed mb-6"
              >
                Cleanse. Oxygenate. Activate Immunity.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-lg bg-indigo-50 border border-indigo-100 p-6 rounded-2xl lg:text-xl text-slate-700 font-medium leading-relaxed mb-10 max-w-xl"
              >
                EBOO combined with UV Blood Irradiation (UBI) represents one of the most advanced integrative therapies for deep detoxification, infection control, and immune modulation.
                <br /><br />
                This dual-action therapy not only purifies the blood but also enhances the body’s ability to fight disease at a cellular level.
              </motion.p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-12 lg:mt-0"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border-[6px] border-white group">
                <video
                  ref={video1Ref}
                  src={video11}
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-out "
                  loop
                  muted
                  playsInline
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 hidden lg:block pointer-events-none"></div>
        <div className="absolute -left-40 top-20 w-70 h-0 bg-indigo-50/50 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                What is EBOO + UV Therapy?
              </h3>

              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                EBOO (Extracorporeal Blood Oxygenation and Ozonation) is enhanced by adding UV irradiation, where a portion of the blood is exposed to specific ultraviolet light frequencies before being reinfused.
              </p>

              <div className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-2xl">
                <p className="text-slate-800 font-bold mb-4">This combination creates a powerful synergistic effect:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-indigo-600 w-5 h-5"/>  Filtration of toxins</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-indigo-600 w-5 h-5"/> Oxygenation with ozone</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-indigo-600 w-5 h-5"/>  UV-mediated immune activation</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-2/5"
            >
              <div className="bg-indigo-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-indigo-800 relative group text-white">
                <div className="w-16 h-16 bg-indigo-800 rounded-2xl flex items-center justify-center mb-8 border border-indigo-700/50">
                  <RefreshCw className="w-8 h-8 text-indigo-300" />
                </div>
                <h4 className="text-3xl font-bold mb-6">How It Works</h4>
                <p className="mb-4 text-indigo-200">During the procedure:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full shrink-0" />
                    <span>Blood is circulated through a sterile extracorporeal system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full shrink-0" />
                    <span>It undergoes advanced filtration (removing toxins, pathogens, inflammatory molecules)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full shrink-0" />
                    <span>It is enriched with oxygen and ozone (O₃)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full shrink-0" />
                    <span>A portion is exposed to controlled UV light (UBI therapy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-indigo-400 rounded-full shrink-0" />
                    <span>The treated blood is safely returned to the body</span>
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Add UV & Second Video */}
      <section className="py-14 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-slate-800">
                <video
                  ref={video2Ref}
                  src={video12}
                  className="w-full h-auto object-cover"
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                Why Add UV Irradiation?
              </h2>
              <p className="text-lg text-indigo-100/90 mb-6 leading-relaxed">
                UV Blood Irradiation (UBI) has been used historically for its powerful biological effects.
              </p>
              
              <p className="text-lg font-bold mb-4">It helps to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">Inactivate bacteria, viruses, and pathogens</div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">Enhance immune system regulation</div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">Improve oxygen release at tissue level</div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">Reduce systemic inflammation</div>
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-medium">
                <Sparkles className="w-5 h-5"/> When combined with EBOO, it significantly amplifies therapeutic outcomes.
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Key Benefits of EBOO + UV Therapy
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`p-6 lg:p-7 rounded-[2rem] border bg-white transition-all duration-300 hover:shadow-xl ${benefit.color} flex flex-col items-start`}
              >
                <div className="flex items-center gap-4 mb-4 border-b border-slate-200/50 pb-4 w-full">
                  <div className={`w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center`}>
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {benefit.title}
                  </h3>
                </div>
                <div className="text-slate-600 font-medium leading-relaxed flex-grow text-[15px] whitespace-pre-line">
                  {benefit.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions, Expectations, Integrity */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            
            {/* Conditions That May Benefit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-50 rounded-[2rem] p-8 border border-indigo-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Conditions That May Benefit</h3>
              <p className="text-slate-700 mb-6">EBOO + UV therapy is commonly used in:</p>
              <ul className="space-y-4">
                {conditions.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                     <div className="w-2 h-2 mt-2 bg-indigo-500 rounded-full shrink-0" />
                     <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* What to Expect & Safety */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What to Expect</h3>
              <ul className="space-y-3 mb-8 text-slate-700 font-medium">
                <li>• Duration: 30-60 minutes</li>
                <li>• Comfortable, monitored procedure</li>
                <li>• Minimal downtime</li>
                <li>• Performed by trained medical professionals</li>
              </ul>

              <h4 className="font-bold text-slate-900 mb-3">Many patients report:</h4>
              <ul className="space-y-2 mb-8">
                <li className="flex gap-2 text-emerald-800 font-medium"><CheckCircle2 className="w-5 h-5"/> ✔ Improved clarity</li>
                <li className="flex gap-2 text-emerald-800 font-medium"><CheckCircle2 className="w-5 h-5"/> ✔ Reduced fatigue</li>
                <li className="flex gap-2 text-emerald-800 font-medium"><CheckCircle2 className="w-5 h-5"/> ✔ Better overall well-being</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mb-4 border-t border-emerald-200 pt-6">Safety & Personalization</h3>
              <ul className="space-y-3 text-slate-700 font-medium tracking-tight">
                <li>• Conducted using advanced medical-grade systems</li>
                <li>• Individualized treatment protocols</li>
                <li>• Continuous monitoring throughout the session</li>
              </ul>
            </motion.div>

            {/* Integrative Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-rose-50 rounded-[2rem] p-8 border border-rose-100 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Integrative Approach</h3>
                <p className="text-slate-700 mb-6 font-medium">We combine EBOO + UV therapy with:</p>
                <div className="grid grid-cols-1 gap-3 mb-8">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-rose-100 text-center font-bold text-rose-900">Functional Medicine</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-rose-100 text-center font-bold text-rose-900">IV Nutritional Therapy</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-rose-100 text-center font-bold text-rose-900">Ozone-based protocols</div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-rose-100 text-center font-bold text-rose-900">Detox & lifestyle optimization</div>
                </div>
                <p className="text-slate-700 font-medium italic border-l-4 border-rose-300 pl-4 py-2">
                  This ensures deep, sustained healing rather than temporary relief.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-rose-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose This Therapy?</h3>
                <p className="text-slate-700 mb-3">If you are looking for:</p>
                <ul className="space-y-2 mb-6 text-rose-800 font-medium text-sm">
                  <li>✔ Deep detox beyond conventional methods</li>
                  <li>✔ Immune system reset</li>
                  <li>✔ Support for chronic or complex conditions</li>
                  <li>✔ A scientifically guided integrative approach</li>
                </ul>
                <p className="font-bold text-slate-900">This therapy may be an ideal option.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5  border border-white/10 rounded-[2.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Inner Decoration */}

            {/* Left Box (Text & Badges) */}
            <div className="flex-1 text-left w-full pl-2 lg:pl-4">
               <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30">
                 <Calendar className="w-8 h-8 text-indigo-300" />
               </div>

               <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                 Book Your Consultation
               </h2>
            
               <p className="text-xl text-indigo-100/90 mb-8 max-w-xl leading-relaxed">
                 Take the next step toward advanced healing and cellular rejuvenation.
               </p>

               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                 <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/10 shadow-sm  transition-all hover:bg-white/20">
                   <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                   <span className="font-semibold text-slate-100 text-sm">Limited slots available</span>
                 </div>
                 <div className="flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/10 shadow-sm  transition-all hover:bg-white/20">
                   <Sparkles className="w-4 h-4 text-amber-300" />
                   <span className="font-semibold text-slate-100 text-sm">Personalized plans</span>
                 </div>
               </div>
            </div>

            {/* Right Box (Action) */}
            <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-end text-center lg:text-right shrink-0">
               <Popup>
                 <button className="bg-white text-indigo-950 px-8 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer">
                   Schedule Appointment <Calendar className="w-5 h-5"/>
                 </button>
               </Popup>
               
               <p className="text-sm text-indigo-200 mt-6 font-medium lg:max-w-[250px]">
                 Contact us today to learn more about EBOO + UV Therapy.
               </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EbooTherapy;
