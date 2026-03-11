import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Activity,
  ShieldCheck,
  HeartPulse,
  Syringe,
  Wind,
  Stethoscope,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
  TestTube,
  Sparkles,
  Droplets
} from 'lucide-react';
import ozone from '../assets/ozone.png';
const OzoneTherapy = () => {
  const treatmentSteps = [
    { title: "Detailed Medical History", icon: <ClipboardCheck /> },
    { title: "Kidney and Liver Function Tests", icon: <TestTube /> },
    { title: "Immune and Inflammatory Markers", icon: <ShieldCheck /> },
    { title: "Wound or Skin Assessment", icon: <Sparkles /> },
    { title: "Cardiovascular Risk Evaluation", icon: <HeartPulse /> },
  ];

  const benefits = [
    {
      title: "Immune Modulation & Oxidative Balance",
      desc: "May help regulate immune response, reduce oxidative stress, and improve systemic resilience when used appropriately.",
      icon: <ShieldCheck className="text-indigo-500 w-8 h-8" />,
      color: "border-indigo-100 bg-indigo-50",
    },
    {
      title: "Wound Healing Support",
      desc: "Commonly used as an adjunct therapy for diabetic foot ulcers, venous ulcers, and chronic non-healing wounds due to its antimicrobial properties and potential to improve local oxygenation and circulation.",
      icon: <Activity className="text-emerald-500 w-8 h-8" />,
      color: "border-emerald-100 bg-emerald-50",
    },
    {
      title: "Pain Reduction & Anti-inflammatory Effects",
      desc: "May assist in reducing joint and musculoskeletal pain through modulation of inflammatory pathways.",
      icon: <Syringe className="text-amber-500 w-8 h-8" />,
      color: "border-amber-100 bg-amber-50",
    },
    {
      title: "Cardiovascular Support (Adjunctive)",
      desc: "In selected cases, ozone therapy may support vascular health and circulation as part of an integrative cardiovascular care plan.",
      icon: <HeartPulse className="text-rose-500 w-8 h-8" />,
      color: "border-rose-100 bg-rose-50",
    },
    {
      title: "Skin Health & Rejuvenation",
      desc: "May improve skin tone, elasticity, and support collagen health. It is sometimes used in integrative approaches for chronic inflammatory skin conditions such as psoriasis.",
      icon: <Droplets className="text-teal-500 w-8 h-8" />,
      color: "border-teal-100 bg-teal-50",
    },
  ];

  const indicators = [
    "Individuals with chronic inflammatory skin conditions such as psoriasis seeking integrative support.",
    "Patients with non-healing wounds, including diabetic foot ulcers or venous ulcers.",
    "Individuals with immune dysregulation or recurrent infections.",
    "Patients requiring supportive care during or after cancer treatments (as part of an integrative oncology plan).",
    "Those experiencing degenerative joint pain, arthritis, or musculoskeletal conditions.",
    "Individuals seeking a medically supervised, non-surgical adjunct therapy as part of a broader wellness plan.",
  ];

  const contraindicators = [
    "Pregnant or breastfeeding women (unless specifically cleared by a specialist).",
    "Individuals with untreated G6PD deficiency.",
    "Patients with severe, unstable cardiovascular disease.",
    "Those with acute abdominal emergencies or untreated severe infections.",
    "Individuals with uncontrolled hyperthyroidism.",
    "Patients on medications or with medical conditions where oxidative modulation may pose risks, unless carefully evaluated and supervised.",
  ];

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
        ease: [0.13, 1, 0.12, 2], // Fast start, smooth finish
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
        {/* Background Decorative Element - Smoothed with blur */}
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-indigo-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Column: Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 text-left"
            >
              {/* Top Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100/90 border border-indigo-200/60 text-indigo-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <Wind className="w-4 h-4" /> Advanced Integrative Care
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight"
              >
                Refining Wellness through <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                  Ozone Therapy
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl"
              >
                An advanced, non-conventional yet evidence-informed treatment
                supporting immune modulation, tissue healing, and systemic
                resilience.
              </motion.p>

              {/* CTA & Avatars */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              >
                {/* <button className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.5)] hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1">
                  Consult a Specialist
                </button> */}

                {/* <div className="flex items-center gap-4">
                  <div className="text-sm font-bold text-slate-500 leading-tight">
                    Trusted by
                    <br />
                    patients worldwide
                  </div>
                </div> */}
              </motion.div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-12 lg:mt-0"
            >
              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border-[6px] border-white group">
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={ozone}
                  className="w-full h-[450px] lg:h-[600px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="Ozone Therapy Healing"
                />
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-20 mt-0 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 hidden lg:block pointer-events-none"></div>
        <div className="absolute -left-40 top-20 w-70 h-0 bg-indigo-50/50 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto -mt-5 px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative">
            {/* Left Content Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-3/5 lg:pr-16 mb-12 lg:mb-0 relative z-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-indigo-600 rounded-full"></div>
                <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase">
                  Introduction
                </h2>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                What is Ozone Therapy?
              </h3>

              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                Ozone Therapy is an advanced, non-conventional yet
                evidence-informed treatment in which medical-grade ozone (O₃) is
                administered through carefully controlled methods.
              </p>

              <div className="bg-indigo-50/50 border border-indigo-100 p-6 rounded-2xl">
                <p className="text-slate-600 leading-relaxed">
                  These methods include <strong>major autohemotherapy</strong>,{" "}
                  <strong>rectal insufflation</strong>,{" "}
                  <strong>limb bagging</strong>, or targeted{" "}
                  <strong>local applications</strong>.
                </p>
              </div>
            </motion.div>

            {/* Right Offset Card Area */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5 relative z-30 lg:-ml-10 mt-8 lg:mt-24"
            >
              <div className="bg-indigo-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-indigo-800 relative overflow-hidden group">
                {/* Decorative background accent inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="w-16 h-16 bg-indigo-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-indigo-700/50 relative z-10">
                  <Stethoscope className="w-8 h-8 text-indigo-300" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">
                  The Tigris Valley Approach
                </h4>

                <p className="text-indigo-100/90 leading-relaxed font-medium relative z-10">
                  At Tigris Valley, ozone therapy is delivered
                  under strict medical supervision with standardized safety
                  protocols.
                </p>

                <div className="mt-8 pt-8 border-t border-indigo-800/50 relative z-10">
                  <p className="text-sm text-indigo-200 leading-relaxed">
                    Increasingly sought for integrative support in immune
                    modulation, chronic wound care, skin health, and pain
                    management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Information & Process */}
      <section className="py-14 bg-slate-950 relative overflow-hidden">
        {/* Background Decorative Rings */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border border-indigo-500/50 absolute"></div>
          <div className="w-[1000px] h-[1000px] rounded-full border border-indigo-400/30 absolute"></div>
          <div className="w-[1200px] h-[1200px] rounded-full border border-indigo-300/20 absolute"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                Treatment Evaluation
              </span>
            </h2>
            <p className="text-lg md:text-xl text-indigo-100/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Each ozone therapy plan begins with an extensive medical
              evaluation to ensure unwavering safety and personalization.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Steps Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 relative">
              {treatmentSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white/5  p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="absolute -right-4 -top-4 text-white/5 font-black text-8xl pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    0{i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 border border-indigo-500/30 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-inner">
                    {React.cloneElement(step.icon, { className: "w-5 h-5" })}
                  </div>
                  <span className="font-bold text-lg text-slate-200 block max-w-[80%] leading-snug group-hover:text-white transition-colors">
                    {step.title}
                  </span>
                </motion.div>
              ))}

              {/* Optional Empty Space Filler for 6th grid item to maintain look */}
              <div className="hidden lg:block bg-gradient-to-br from-indigo-900/10 to-emerald-900/10 rounded-3xl border border-white/5"></div>
            </div>

            {/* Bottom Precision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-600 to-indigo-900 text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
                <Wind className="w-80 h-80 -mb-20 -mr-20 animate-[spin_60s_linear_infinite]" />
              </div>
              <div className="relative z-10 lg:w-3/4 flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="w-16 h-16 shrink-0 bg-white/20 rounded-2xl flex items-center justify-center shadow-inner border border-white/30">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
                    Precision & Safety First
                  </h3>
                  <p className="text-indigo-50 text-base md:text-lg leading-relaxed mb-0 font-medium">
                    Treatment frequency, dosage, and method of administration
                    are individualized based on the patient’s diagnosis,
                    clinical status, and therapeutic goals. All procedures are
                    performed using medical-grade ozone generators and
                    evidence-based dosing principles. Continuous monitoring is
                    maintained throughout the course of therapy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Potential Benefits Grid - 5 Text, 1 Image */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Potential Benefits of Ozone Therapy
            </h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 font-medium leading-relaxed max-w-2xl mx-auto">
              A scientifically supported approach to integrative wellness
              designed to support your body's natural resilience and repair
              processes.
            </p>
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
                  <div
                    className={`w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center`}
                  >
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed flex-grow text-[15px]">
                  {benefit.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-indigo-600 font-bold text-xs tracking-widest uppercase">
                  <span>Benefit 0{i + 1}</span>
                  <div className="w-6 h-px bg-indigo-300"></div>
                </div>
              </motion.div>
            ))}

            {/* 6th Box: Image Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative rounded-[2rem] overflow-hidden shadow-lg border border-slate-100 group min-h-[300px]"
            >
              <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply z-10 group-hover:bg-indigo-900/10 transition-colors duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Medical Wellness"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-slate-900/90 to-transparent">
                <h3 className="text-xl font-bold text-white mb-1">
                  Integrative Care
                </h3>
                <p className="text-indigo-100 font-medium text-sm">
                  Standardized Medical Protocols
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Considerations for Therapy */}
      <section className="py-14 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        {/* Decorative background vectors */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-gradient-to-tr from-emerald-50/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200 text-slate-700 text-sm font-bold tracking-widest uppercase mb-6">
              Patient Guidelines
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Considerations for Therapy
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              A detailed medical screening is mandatory before initiating
              therapy to ensure optimal safety and efficacy.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
            {/* Who May Consider - Green Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-emerald-100 overflow-hidden relative group"
            >
              <div className="p-10 md:p-14 relative">
                {/* Background Leaf/Check Accent */}
                <div className="absolute -right-10 -top-10 text-emerald-100 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <CheckCircle2 className="w-64 h-64" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 border-b border-emerald-100/50 pb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100 shrink-0 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500 text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    Who May Consider
                  </h3>
                </div>

                <ul className="space-y-6 relative z-10">
                  {indicators.map((item, i) => (
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

            {/* Who Should Avoid - Red Theme */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-xl border border-rose-100 overflow-hidden relative group"
            >
              <div className="p-10 md:p-14 relative">
                {/* Background Alert Accent */}
                <div className="absolute -right-10 -top-10 text-rose-100 opacity-50 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                  <AlertTriangle className="w-64 h-64" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 border-b border-rose-100/50 pb-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center border border-rose-100 shrink-0 shadow-sm group-hover:bg-rose-500 group-hover:text-white transition-colors duration-500 text-rose-600">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900">
                    Who Should Avoid
                  </h3>
                </div>

                <ul className="space-y-6 relative z-10">
                  {contraindicators.map((item, i) => (
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

          <div className="mt-16 text-center relative z-10">
            <span className="inline-flex items-center gap-3 py-3 px-8 bg-white border border-slate-200 shadow-sm rounded-full text-slate-600 font-bold tracking-widest uppercase text-sm">
              <ClipboardCheck className="w-5 h-5 text-indigo-500" />
              Medical Screening is Mandatory
            </span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OzoneTherapy;
