import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Activity, ShieldCheck, HeartPulse, Stethoscope, ClipboardCheck, AlertTriangle, CheckCircle2,
  Wind, Zap, Heart, Flame, Leaf, Pill
} from 'lucide-react';
import eecp from '../assets/eecp.jpeg';
const EecpTherapy = () => {
  const benefitsList = [
    {
      title: "Angina Relief",
      desc: "Reduces chest pain frequency and improves exercise tolerance.",
      icon: <Activity className="text-rose-500 w-8 h-8" />,
      color: "border-rose-100 bg-rose-50",
    },
    {
      title: "Improved Circulation",
      desc: "Develops natural bypasses (collateral circulation) around blocked arteries.",
      icon: <HeartPulse className="text-emerald-500 w-8 h-8" />,
      color: "border-emerald-100 bg-emerald-50",
    },
    {
      title: "Cardiac Function",
      desc: "Enhances ejection fraction and strengthens heart muscle efficiency.",
      icon: <Heart className="text-indigo-500 w-8 h-8" />,
      color: "border-indigo-100 bg-indigo-50",
    },
    {
      title: "Multi-Organ Support",
      desc: "Improves blood flow not only to the heart but also to the brain, kidneys, and liver.",
      icon: <Zap className="text-amber-500 w-8 h-8" />,
      color: "border-amber-100 bg-amber-50",
    },
    {
      title: "Non-Surgical Safety",
      desc: "Provides a viable alternative to bypass surgery or angioplasty for patients unfit for invasive procedures.",
      icon: <ShieldCheck className="text-teal-500 w-8 h-8" />,
      color: "border-teal-100 bg-teal-50",
    },
    {
      title: "Enhanced Quality of Life",
      desc: "Patients often experience better stamina, reduced fatigue, and improved overall well-being.",
      icon: <Flame className="text-orange-500 w-8 h-8" />,
      color: "border-orange-100 bg-orange-50",
    },
    {
      title: "Additional Benefits",
      desc: "May help in erectile dysfunction and circulation-related issues due to improved vascular health.",
      icon: <CheckCircle2 className="text-sky-500 w-8 h-8" />,
      color: "border-sky-100 bg-sky-50",
    }
  ];

  const whoCanTake = [
    "Patients with chronic stable angina unresponsive to medications.",
    "Those who have undergone bypass or angioplasty but still experience angina symptoms.",
    "Patients with heart failure, ischemic heart disease, or poor heart pumping function.",
    "Individuals unfit for open-heart surgery due to age or health conditions.",
    "Type 2 diabetic patients with cardiovascular complications looking for safe, integrative solutions.",
    "Anyone searching for advanced heart care at a trusted EECP treatment centre .",
  ];

  const whoCantTake = [
    "Patients with uncontrolled high blood pressure (≥180/110 mm Hg).",
    "Those with active deep vein thrombosis (DVT), pulmonary embolism, or blood clotting disorders.",
    "Individuals with severe aortic regurgitation, advanced valvular disease, or aortic aneurysm.",
    "Patients with severe arrhythmias or unstable heart rhythm.",
    "Those with acute decompensated heart failure or severe fluid overload.",
    "Pregnant women, unless specifically cleared by medical professionals.",
  ];

  const whyTigrisFeatures = [
    {
      title: "Personalized Care",
      desc: "Each treatment is tailored to your health history, needs, and goals.",
      icon: <ClipboardCheck />
    },
    {
      title: "Integrative Approach",
      desc: "Therapies like IV drips, ozone, chelation, FIR sauna, and nutritional medicine are combined for complete wellness.",
      icon: <Leaf />
    },
    {
      title: "Expert Supervision",
      desc: "A team of qualified doctors and therapists ensures therapies are both safe and effective.",
      icon: <Stethoscope />
    },
    {
      title: "Focus on Root Cause",
      desc: "Instead of short-term fixes, Tigris Valley addresses underlying imbalances, supporting long-term healing.",
      icon: <Heart />
    },
    {
      title: "Healing Environment",
      desc: "The clinic offers a serene and professional setting that supports relaxation and recovery.",
      icon: <Wind />
    }
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
        ease: [0.13, 1, 0.12, 2],
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
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-rose-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0 blur-3xl"></div>

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
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100/90 border border-rose-200/60 text-rose-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <HeartPulse className="w-4 h-4" /> Non-Surgical Heart Care
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight"
              >
                Advanced <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">
                  EECP Treatment
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl"
              >
                Enhanced External Counterpulsation (EECP) is an FDA-approved, non-surgical therapy designed to improve blood flow to the heart and relieve symptoms of coronary artery disease.
              </motion.p>

              {/* <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
              >
                <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgb(225,29,72,0.3)] hover:shadow-[0_8px_30px_rgb(225,29,72,0.5)] hover:bg-rose-700 transition-all duration-300 transform hover:-translate-y-1">
                  Book a Consultation
                </button>

                <div className="flex items-center gap-4">
                  <div className="text-sm font-bold text-slate-500 leading-tight">
                    Trusted by
                    <br />
                    patients worldwide
                  </div>
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-12 lg:mt-0"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(225,29,72,0.07)] border-[6px] border-white group">
                <div className="absolute inset-0 bg-rose-900/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={eecp}
                  className="w-full h-[450px] lg:h-[600px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="EECP Therapy"
                />
              </div>

              {/* <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-600 shrink-0 shadow-inner">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">
                    FDA-Approved
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Safe & Effective
                  </p>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="pb-20 mt-0 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 hidden lg:block pointer-events-none"></div>
        <div className="absolute -left-40 top-20 w-70 h-0 bg-rose-50/50 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto -mt-5 px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-3/5 lg:pr-16 mb-12 lg:mb-0 relative z-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-rose-600 rounded-full"></div>
                <h2 className="text-sm font-bold text-rose-600 tracking-widest uppercase">
                  Introduction
                </h2>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Rebuilding Cardiac Health Naturally
              </h3>

              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                At Tigris Valley, we provide one of the most reliable EECP treatment centres in Kerala, offering hope to patients struggling with chronic angina, ischemic heart disease, or those advised bypass surgery.
              </p>

              <div className="bg-rose-50/50 border border-rose-100 p-6 rounded-2xl">
                <p className="text-slate-600 leading-relaxed">
                  Many patients prefer this therapy as an alternative treatment for bypass surgery or a safer alternative treatment for heart block, especially when surgery is high-risk or not feasible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5 relative z-30 lg:-ml-10 mt-8 lg:mt-24"
            >
              <div className="bg-rose-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-rose-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="w-16 h-16 bg-rose-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-rose-700/50 relative z-10">
                  <Stethoscope className="w-8 h-8 text-rose-300" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">
                  A Trusted Hub
                </h4>

                <p className="text-rose-100/90 leading-relaxed font-medium relative z-10">
                  With increasing lifestyle disorders, diabetes, and cardiovascular issues, Tigris Valley has become a trusted hub for EECP treatment.
                </p>

                <div className="mt-8 pt-8 border-t border-rose-800/50 relative z-10">
                  <p className="text-sm text-rose-200 leading-relaxed">
                    Combining this modern therapy with integrative lifestyle support for comprehensive healing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Information & Process */}
      <section className="py-14 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border border-rose-500/50 absolute"></div>
          <div className="w-[1000px] h-[1000px] rounded-full border border-rose-400/30 absolute"></div>
          <div className="w-[1200px] h-[1200px] rounded-full border border-rose-300/20 absolute"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                  The therapy is carried out in a specialized EECP unit where the patient lies comfortably while pneumatic cuffs are wrapped around the calves, thighs, and buttocks. These cuffs inflate and deflate in sync with the heartbeat, timed through ECG monitoring.
                </p>
                <p className="text-rose-100/90 leading-relaxed">
                  Inflation during diastole (heart relaxation) pushes blood back toward the heart, while rapid deflation before systole reduces resistance—together improving coronary perfusion and oxygen delivery.
                </p>
                <div className="bg-rose-900/30 border border-rose-500/20 p-6 rounded-2xl mt-4">
                  <p className="text-slate-300 leading-relaxed">
                    A standard course of EECP usually requires 35 sessions (about 1–2 hours per session, 5–6 days a week, for 6 weeks). Shorter courses (18–20 days) may be recommended for those unable to attend full programs. Patients undergo a detailed cardiac evaluation—ECG, echocardiography, blood pressure, oxygen saturation, and lab tests—before beginning.
                  </p>
                </div>
                <p className="text-lg text-emerald-300 font-bold mt-2">
                  EECP is safe, painless, and performed as an outpatient procedure. Many patients report relief within a few sessions, with sustained benefits lasting months to years when combined with proper diet and lifestyle changes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits of EECP - New Design */}
      <section className="py-16 bg-white border-t border-slate-100 overflow-hidden">
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
              {/* <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-700 text-sm font-bold uppercase tracking-widest mb-4">
                <HeartPulse className="w-4 h-4" /> Evidence-Based
              </span> */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">EECP</span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed md:max-w-sm md:text-right">
              Supporting your heart's health through non-surgical, FDA-approved therapy.
            </p>
          </motion.div>

          {/* Two-column layout: image left, benefit tiles right */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left: Tall Image Panel */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-xl border-4 border-white bg-slate-900 aspect-[9/16] lg:aspect-auto lg:h-full min-h-[520px]"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jysfVHPx9Wk?si=PTLcB_mErO45jR2s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </motion.div>
            

            {/* Right: Compact Benefit Tiles */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefitsList.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`group flex items-start gap-5 p-5 rounded-2xl border bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 ${benefit.color}`}
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-rose-600 transition-colors">
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
        </div>
      </section>

      {/* Considerations for Therapy */}
      <section className="py-14 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-gradient-to-tr from-emerald-50/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200 text-slate-700 text-sm font-bold tracking-widest uppercase mb-6">
              Patient Guidelines
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Considerations for EECP
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              A detailed medical screening is mandatory before initiating therapy to ensure optimal safety and efficacy.
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

            {/* Who Should Avoid - Red Theme */}
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
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-indigo-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Tigris Valley is more than a treatment center—it is a holistic healing destination. Every therapy is delivered with medical supervision, patient safety, and evidence-based protocols. What sets Tigris Valley apart:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {whyTigrisFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}

            {/* 6th card: Philosophy Quote fills the empty grid slot */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-lg relative overflow-hidden flex flex-col justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mb-6 shrink-0">
                <HeartPulse className="w-5 h-5 text-rose-400" />
              </div>
              <p className="text-base text-slate-300 font-medium leading-relaxed">
                This patient-centric philosophy ensures that whether it's detox, chronic illness management, or wellness enhancement, Tigris Valley provides care that restores vitality and strengthens resilience naturally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EecpTherapy;
