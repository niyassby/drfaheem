import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Coffee, ShieldCheck, Zap, Leaf, Brain, Droplets,
  CheckCircle2, AlertTriangle, ClipboardCheck, Wind,
  Stethoscope, Heart, Activity, Play
} from 'lucide-react';
import video1 from '../assets/video/video1.MP4';

const CoffeeEnema = () => {
  const benefitsList = [
    {
      title: "Deep Liver Detoxification",
      desc: "Promotes the release of stored toxins, heavy metals, and environmental chemicals.",
      icon: <Droplets className="text-amber-600 w-8 h-8" />,
      color: "border-amber-100 bg-amber-50",
    },
    {
      title: "Boosts Antioxidant Defense",
      desc: "Increases glutathione activity, protecting cells from oxidative stress.",
      icon: <ShieldCheck className="text-emerald-500 w-8 h-8" />,
      color: "border-emerald-100 bg-emerald-50",
    },
    {
      title: "Improves Digestion & Bowel Health",
      desc: "Enhances bile secretion and supports regular bowel movements.",
      icon: <Activity className="text-indigo-500 w-8 h-8" />,
      color: "border-indigo-100 bg-indigo-50",
    },
    {
      title: "Energizing Effect",
      desc: "Many patients report feeling lighter, clearer, and more energetic post-session.",
      icon: <Zap className="text-yellow-500 w-8 h-8" />,
      color: "border-yellow-100 bg-yellow-50",
    },
    {
      title: "Cancer Supportive Therapy",
      desc: "Often used in integrated cancer treatment to reduce toxic load and improve quality of life.",
      icon: <Heart className="text-rose-500 w-8 h-8" />,
      color: "border-rose-100 bg-rose-50",
    },
    {
      title: "Mental Clarity & Stress Relief",
      desc: "Detoxification can reduce brain fog, support emotional balance, and enhance overall vitality.",
      icon: <Brain className="text-teal-500 w-8 h-8" />,
      color: "border-teal-100 bg-teal-50",
    },
  ];

  const whoCanTake = [
    "Patients undergoing structured detox or integrative wellness programs.",
    "Individuals exposed to environmental pollutants, pesticides, or heavy metals.",
    "Those experiencing chronic fatigue, low energy, or toxin-related symptoms.",
    "Cancer patients seeking supportive therapies to complement conventional treatment.",
    "People committed to functional medicine therapies in Kerala as a path to long-term wellness.",
  ];

  const whoCantTake = [
    "Pregnant or breastfeeding women.",
    "Individuals with active hemorrhoids, rectal bleeding, or anal fissures.",
    "Patients with inflammatory bowel disease (Crohn's, ulcerative colitis) during flare-ups.",
    "People with severe dehydration or electrolyte imbalance.",
    "Those with unstable cardiovascular conditions unless cleared by a physician.",
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

  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-amber-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* Left */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:w-1/2 text-left">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/90 border border-amber-200/60 text-amber-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <Coffee className="w-4 h-4" /> Deep Liver Detox
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
                Coffee <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-600">
                  Enema Therapy
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
                Coffee Enema is a time-tested detoxification therapy that has been used for decades in natural and functional medicine protocols.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button className="bg-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgb(180,83,9,0.3)] hover:shadow-[0_8px_30px_rgb(180,83,9,0.5)] hover:bg-amber-800 transition-all duration-300 transform hover:-translate-y-1">
                  Book a Consultation
                </button>
                <div className="text-sm font-bold text-slate-500 leading-tight">
                  Trusted by<br />patients worldwide
                </div>
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
                  src="https://simplenursing.com/wp-content/uploads/2024/06/Enema-Tools-with-coffee-beans-and-coffee-in-a-glass-cup-768x510.webp"
                  className="w-full h-[450px] lg:h-[600px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="Coffee Enema Therapy"
                />
              </div>

              <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-700 shrink-0 shadow-inner">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Medically Supervised</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Safe & Hygienic</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="pb-20 mt-0 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 hidden lg:block pointer-events-none"></div>

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
                <div className="h-0.5 w-12 bg-amber-700 rounded-full"></div>
                <h2 className="text-sm font-bold text-amber-700 tracking-widest uppercase">Introduction</h2>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Time-Tested Detox Therapy
              </h3>

              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                It is especially popular in holistic health programs and alternative cancer care frameworks like the Gerson Therapy.
              </p>

              <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl">
                <p className="text-slate-600 leading-relaxed">
                  The principle is simple but powerful: introducing a carefully prepared organic coffee solution into the rectum allows its active compounds—<strong>caffeine, theobromine, and palmitic acids</strong>—to be absorbed by the portal vein system. This stimulates the liver and gallbladder, prompting them to release stored toxins and enhance bile flow. At Tigris Valley, Coffee Enema is provided as part of structured detox programs for patients struggling with toxin overload, fatigue, sluggish digestion, or chronic illness. Offered under strict medical supervision, the therapy is safe, hygienic, and complemented by other integrative treatments such as IV Vitamin C, ozone therapy, chelation therapy, and far infrared sauna sessions. This holistic approach has made Tigris Valley a preferred destination for natural detox therapies in Kerala.
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
              <div className="bg-amber-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-amber-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>

                <div className="w-16 h-16 bg-amber-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-amber-700/50 relative z-10">
                  <Coffee className="w-8 h-8 text-amber-300" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">The Tigris Valley Approach</h4>

                <p className="text-amber-100/90 leading-relaxed font-medium relative z-10">
                  At Tigris Valley Wellness Centre, Coffee Enema is delivered under strict medical supervision in a sterile, monitored environment with medical guidance.
                </p>

                <div className="mt-8 pt-8 border-t border-amber-800/50 relative z-10">
                  <p className="text-sm text-amber-200 leading-relaxed">
                    Integrated with IV Vitamin C, ozone therapy, chelation, and FIR sauna for complete, holistic detoxification.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Treatment Information ── */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">
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
              className="bg-slate-900/90 p-10 md:p-14 rounded-[2.5rem] border border-white/10 relative overflow-hidden hover:bg-slate-800 transition-all duration-300 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex flex-col gap-6 relative z-10">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                  The procedure begins with the preparation of organic, medical-grade coffee, brewed to an exact strength and cooled to body temperature. During the session, the patient lies comfortably while the solution is slowly infused into the rectum.
                </p>
                <p className="text-amber-100/90 leading-relaxed">
                  The coffee remains inside for around 12–15 minutes, allowing enough time for its compounds to be absorbed into the bloodstream via the portal vein circulation. Once absorbed, these compounds trigger the liver's detox pathways, especially the production of <strong className="text-amber-300">glutathione S-transferase</strong>, a powerful antioxidant enzyme responsible for neutralizing free radicals and flushing toxins.
                </p>
                <div className="bg-amber-900/30 border border-amber-500/20 p-6 rounded-2xl mt-2">
                  <p className="text-slate-300 leading-relaxed">
                    The increased bile flow helps cleanse the intestines while simultaneously improving liver function. Unlike home-based coffee enemas, which can carry risks of contamination, Tigris Valley provides this therapy in a sterile, monitored environment with medical guidance. Each session is tailored to the patient's health condition, frequency adjusted based on the level of detox required, and always integrated into a wider functional medicine plan.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Video ── */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-200 text-amber-800 text-sm font-bold uppercase tracking-widest mb-4">
              <Play className="w-4 h-4" /> Watch & Learn
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              See How Coffee Enema Works at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-600">
                Tigris Valley
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            {/* Decorative gradient frame */}
            <div className="absolute inset-0 pointer-events-none z-10 rounded-[2.5rem] ring-1 ring-amber-200/60"></div>
            <video
              className="w-full aspect-video object-cover rounded-[2.5rem]"
              controls
              preload="metadata"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Caption strip */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {["Medical-Grade Coffee", "Sterile Environment", "Expert Supervision", "Integrated Protocols"].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-bold shadow-sm">
                <Coffee className="w-4 h-4" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">

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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-yellow-600">
                  Coffee Enema
                </span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed md:max-w-sm md:text-right">
              Stimulating the liver's natural detox pathways through time-tested therapy.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left: Image Panel */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2 relative rounded-[2.5rem] overflow-hidden group min-h-[520px] shadow-xl border-4 border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-amber-900/20 to-transparent z-10"></div>
              <img
                src="https://simplenursing.com/wp-content/uploads/2024/06/Enema-Tools-with-coffee-beans-and-coffee-in-a-glass-cup-768x510.webp"
                alt="Coffee Enema Therapy"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-4">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Liver & Gut Detox</h3>
                <p className="text-amber-200 text-sm font-medium">Organic Coffee — Medical-Grade Protocol</p>
              </div>
            </motion.div>

            {/* Right: Benefit Tiles */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefitsList.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`group flex items-start gap-5 p-5 rounded-2xl border bg-white hover:bg-slate-50 hover:shadow-lg transition-all duration-300 ${benefit.color}`}
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-amber-700 transition-colors">
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

      {/* ── Considerations ── */}
      <section className="py-14 bg-white border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-gradient-to-tr from-emerald-50/50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block py-1.5 px-4 rounded-full bg-slate-200 text-slate-700 text-sm font-bold tracking-widest uppercase mb-6">
              Patient Guidelines
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Considerations for Therapy
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              A detailed medical evaluation is mandatory before initiating therapy to ensure optimal safety and efficacy.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
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
                  <h3 className="text-3xl font-extrabold text-slate-900">Who Can Take This</h3>
                </div>
                <ul className="space-y-6 relative z-10">
                  {whoCanTake.map((item, i) => (
                    <li key={i} className="flex gap-5 group/item">
                      <div className="w-3 h-3 rounded-full bg-emerald-200 group-hover/item:bg-emerald-500 transition-colors mt-2.5 shrink-0 shadow-sm" />
                      <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

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
                  <h3 className="text-3xl font-extrabold text-slate-900">Who Can't Take This</h3>
                </div>
                <ul className="space-y-6 relative z-10">
                  {whoCantTake.map((item, i) => (
                    <li key={i} className="flex gap-5 group/item">
                      <div className="w-3 h-3 rounded-full bg-rose-200 group-hover/item:bg-rose-500 transition-colors mt-2.5 shrink-0 shadow-sm" />
                      <p className="text-slate-700 font-medium leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Tigris Valley ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why Tigris Valley
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-yellow-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
              Tigris Valley is more than a treatment center—it is a holistic healing destination. Every therapy is delivered with medical supervision, patient safety, and evidence-based protocols. What sets Tigris Valley apart:
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
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                  {React.cloneElement(feature.icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
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
                <Coffee className="w-5 h-5 text-amber-400" />
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

export default CoffeeEnema;
