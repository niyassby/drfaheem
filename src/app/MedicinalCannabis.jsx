import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Leaf, ShieldCheck, Brain, Heart, Activity, Zap,
  CheckCircle2, AlertTriangle, ClipboardCheck, Wind,
  Stethoscope, Pill, FlaskConical, Sparkles
} from 'lucide-react';
import img1 from "../assets/medicalcannabis.webp"
import img2 from "../assets/cannabis2.webp"
const MedicinalCannabis = () => {
  const benefitsList = [
    {
      title: "Cancer Support",
      desc: "Relief from chemotherapy side effects (nausea, vomiting, appetite loss) and improved quality of life in integrative cancer care.",
      icon: <Activity className="text-emerald-500 w-8 h-8" />,
      color: "border-emerald-100 bg-emerald-50",
    },
    {
      title: "Chronic Pain Management",
      desc: "Effective for neuropathy, arthritis, musculoskeletal disorders, and conditions resistant to conventional painkillers.",
      icon: <Zap className="text-rose-500 w-8 h-8" />,
      color: "border-rose-100 bg-rose-50",
    },
    {
      title: "Neurological Support",
      desc: "Shown to reduce seizures in epilepsy, tremors in Parkinson's disease, and spasticity in multiple sclerosis.",
      icon: <Brain className="text-indigo-500 w-8 h-8" />,
      color: "border-indigo-100 bg-indigo-50",
    },
    {
      title: "Mental Health",
      desc: "Alleviates anxiety, stress, sleep disturbances, PTSD, and depression in selected patients.",
      icon: <Heart className="text-teal-500 w-8 h-8" />,
      color: "border-teal-100 bg-teal-50",
    },
    {
      title: "Autoimmune & Inflammatory Conditions",
      desc: "Helps regulate immune response and reduces inflammation in conditions like lupus, Crohn's disease, and rheumatoid arthritis.",
      icon: <ShieldCheck className="text-amber-500 w-8 h-8" />,
      color: "border-amber-100 bg-amber-50",
    },
    {
      title: "Holistic Wellbeing",
      desc: "When combined with therapies such as chelation, ozone, IV Vitamin C, and detox programs, cannabis can support overall health restoration.",
      icon: <Sparkles className="text-sky-500 w-8 h-8" />,
      color: "border-sky-100 bg-sky-50",
    },
  ];

  const whoCanTake = [
    "Cancer patients seeking integrated cancer treatment for symptom relief.",
    "Individuals with chronic pain, nerve pain, or musculoskeletal conditions unresponsive to standard therapies.",
    "Patients with neurological conditions such as epilepsy, Parkinson's, multiple sclerosis, or spastic disorders.",
    "Those with anxiety, PTSD, or sleep issues under medical evaluation.",
    "Patients who wish to explore alternative treatment for cancer or chronic disease with functional medicine support.",
  ];

  const whoCantTake = [
    "Patients with history of substance misuse or uncontrolled psychiatric conditions.",
    "Pregnant or breastfeeding women (unless cleared by medical experts).",
    "People with unstable cardiovascular or severe liver diseases.",
    "Patients taking medications with potential high-risk interactions with cannabinoids.",
    "Individuals unwilling to follow-up or adhere to prescribed doses.",
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
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-emerald-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

            {/* Left */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:w-1/2 text-left">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <Leaf className="w-4 h-4" /> Evidence-Based Integrative Care
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
                Medicinal <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Cannabis Treatment
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
                Medicinal Cannabis has emerged as one of the most researched and effective complementary therapies for a wide range of chronic conditions.
              </motion.p>

              {/* <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.5)] hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1">
                  Book a Consultation
                </button>
                <div className="text-sm font-bold text-slate-500 leading-tight">
                  Trusted by<br />patients worldwide
                </div>
              </motion.div> */}
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-12 lg:mt-0"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.1)] border-[6px] border-white group">
                <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={img1}
                  className="w-full h-[450px] lg:h-[600px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="Medicinal Cannabis Treatment"
                />
              </div>

              {/* <motion.div
                variants={floatVariants}
                animate="animate"
                className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-white p-5 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4 z-20"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Medically Supervised</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Legal & Standardized</p>
                </div>
              </motion.div> */}
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
                <div className="h-0.5 w-12 bg-emerald-600 rounded-full"></div>
                <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase">Introduction</h2>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                A New Frontier in Integrative Care
              </h3>

              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                Unlike recreational cannabis, medicinal formulations are carefully standardized, prescribed legally under medical supervision, and customized for each patient's needs.
              </p>

              <div className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl">
                <p className="text-slate-600 leading-relaxed">
                  At Tigris Valley, we integrate medicinal cannabis treatment into our holistic care protocols, especially for those seeking alternative treatment for cancer, chronic pain, neurological conditions, or mental health concerns. Our treatment protocol combines evidence-based natural medicine with advanced therapies, giving patients effective integrative care. Medicinal cannabis here is not a standalone solution but a well-supervised component of comprehensive healing.
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
              <div className="bg-emerald-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-emerald-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

                <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-emerald-700/50 relative z-10">
                  <Stethoscope className="w-8 h-8 text-emerald-300" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">The Tigris Valley Approach</h4>

                <p className="text-emerald-100/90 leading-relaxed font-medium relative z-10">
                  At Tigris Valley, medicinal cannabis is delivered under strict medical supervision with standardized safety protocols and continuous follow-ups.
                </p>

                <div className="mt-8 pt-8 border-t border-emerald-800/50 relative z-10">
                  <p className="text-sm text-emerald-200 leading-relaxed">
                    Integrated alongside ozone, IV Vitamin C, chelation, and detox programs for complete, holistic healing.
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
          <div className="w-[800px] h-[800px] rounded-full border border-emerald-500/50 absolute"></div>
          <div className="w-[1000px] h-[1000px] rounded-full border border-emerald-400/30 absolute"></div>
          <div className="w-[1200px] h-[1200px] rounded-full border border-emerald-300/20 absolute"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              A Comprehensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
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
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
                  At Tigris Valley, the treatment begins with a complete health evaluation—covering medical history, current prescriptions, symptom severity, and possible drug interactions. Only patients with valid indications and medical suitability are considered for cannabis therapy.
                </p>

                <p className="text-emerald-100/90 leading-relaxed">
                  Medicinal cannabis formulations usually contain two major cannabinoids: <strong className="text-emerald-300">CBD (Cannabidiol)</strong>, widely recognized for reducing anxiety, inflammation, and neuropathic pain; and <strong className="text-emerald-300">THC (Tetrahydrocannabinol)</strong>, which at controlled therapeutic levels helps relieve severe pain, nausea, and appetite loss.
                </p>

                <div className="bg-emerald-900/30 border border-emerald-500/20 p-6 rounded-2xl mt-2">
                  <p className="text-slate-300 leading-relaxed">
                    These compounds interact with the endocannabinoid system (ECS)—a network of receptors in the brain, immune system, and organs that regulate pain, mood, sleep, and inflammation. At Tigris Valley, patients may be prescribed oils, tinctures, or capsules depending on their condition. Doses are titrated slowly to minimize side effects, and progress is tracked with continuous follow-ups.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 bg-white border-t border-slate-100 overflow-hidden">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Medicinal Cannabis
                </span>
              </h2>
            </div>
            <p className="text-lg text-slate-500 font-medium leading-relaxed md:max-w-sm md:text-right">
              Supporting chronic conditions through evidence-based, supervised cannabis care.
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-emerald-900/20 to-transparent z-10"></div>
              <img
                src={img2}
                alt="Medicinal Cannabis"
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white mb-4">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Integrative Healing</h3>
                <p className="text-emerald-200 text-sm font-medium">Medically Supervised — Legally Prescribed</p>
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
                  className={`group flex items-start gap-5 p-5 rounded-2xl border bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 ${benefit.color}`}
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    {React.cloneElement(benefit.icon, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-emerald-600 transition-colors">
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
      <section className="py-14 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-gradient-to-tr from-teal-50/50 to-transparent pointer-events-none"></div>

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
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Why Tigris Valley
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-8"></div>
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
                className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
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
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6 shrink-0">
                <Leaf className="w-5 h-5 text-emerald-400" />
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

export default MedicinalCannabis;
