import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Activity,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  ClipboardCheck,
  CheckCircle2,
  Sparkles,
  Droplets,
  Zap,
  Dna,
  Heart,
  Phone,
  HelpCircle
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';

const PeptideTherapy = () => {
  const [ctaOpen, setCtaOpen] = useState(false);

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

  const peptides = [
    {
      title: "BPC-157",
      desc: "Supports tissue repair, gut healing, and recovery from inflammation or injury.",
      icon: <Activity className="text-emerald-500 w-8 h-8" />,
      color: "border-emerald-100 bg-emerald-50 text-emerald-900",
    },
    {
      title: "Thymosin Alpha-1",
      desc: "Helps regulate immune system activity and supports recovery from infections and chronic inflammatory conditions.",
      icon: <ShieldCheck className="text-sky-500 w-8 h-8" />,
      color: "border-sky-100 bg-sky-50 text-sky-900",
    },
    {
      title: "Thymosin Beta-4",
      desc: "Promotes cellular repair, tissue regeneration, and wound healing.",
      icon: <Sparkles className="text-amber-500 w-8 h-8" />,
      color: "border-amber-100 bg-amber-50 text-amber-900",
    },
    {
      title: "CJC-1295 & Ipamorelin",
      desc: "Stimulate natural growth hormone release, supporting metabolism, recovery, and healthy aging.",
      icon: <HeartPulse className="text-rose-500 w-8 h-8" />,
      color: "border-rose-100 bg-rose-50 text-rose-900",
    },
    {
      title: "AOD-9604",
      desc: "Supports fat metabolism and weight management.",
      icon: <Droplets className="text-teal-500 w-8 h-8" />,
      color: "border-teal-100 bg-teal-50 text-teal-900",
    },
    {
      title: "MOTS-c",
      desc: "Helps regulate metabolic health and improve cellular energy production.",
      icon: <Zap className="text-orange-500 w-8 h-8" />,
      color: "border-orange-100 bg-orange-50 text-orange-900",
    },
    {
      title: "Epitalon",
      desc: "Associated with cellular longevity and healthy aging pathways.",
      icon: <Dna className="text-cyan-600 w-8 h-8" />,
      color: "border-cyan-100 bg-cyan-50 text-cyan-900",
    },
  ];

  const candadates = [
    {
      title: "Persistent Fatigue or Low Energy",
      desc: "Peptides may help improve cellular energy production and metabolic function."
    },
    {
      title: "Slow Healing or Recovery",
      desc: "Peptides that support tissue repair may benefit individuals recovering from injury, surgery, or chronic inflammation."
    },
    {
      title: "Immune System Imbalance",
      desc: "Those with frequent infections or immune dysfunction may benefit from therapies that support immune resilience."
    },
    {
      title: "Hormonal or Metabolic Changes",
      desc: "Peptide therapy may help support metabolic health and hormone balance."
    },
    {
      title: "Brain Fog or Cognitive Decline",
      desc: "Some peptides may help improve mental clarity and cognitive performance."
    },
    {
      title: "Longevity and Healthy Aging",
      desc: "Many individuals use peptide therapy as part of a preventive health and longevity strategy."
    }
  ];

  const faqs = [
    {
      q: "What is peptide therapy?",
      a: "Peptide therapy uses naturally occurring amino-acid chains that act as biological signals in the body, helping regulate processes such as healing, immune function, metabolism, and hormonal balance."
    },
    {
      q: "Is peptide therapy safe?",
      a: "When prescribed and supervised by qualified medical professionals, peptide therapy is generally safe and well tolerated. A medical evaluation is required before starting treatment."
    },
    {
      q: "How soon will I see results?",
      a: "Some individuals experience improvements within a few weeks, while other benefits develop gradually as the body’s healing processes are supported."
    },
    {
      q: "Can peptide therapy be combined with other treatments?",
      a: "Yes. Peptide therapy is often integrated with nutrition therapy, gut health optimization, lifestyle medicine, and targeted supplementation."
    },
    {
      q: "Is peptide therapy used in cancer supportive care?",
      a: "Certain peptides may be used in integrative supportive programs to help improve quality of life during cancer treatment. They are not intended to replace conventional oncology care."
    }
  ];

  return (
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-sky-50/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-1/2 text-left"
            >
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/90 border border-sky-200/60 text-sky-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                  <Activity className="w-4 h-4" /> Regenerative Medicine
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight"
              >
                Refining Wellness through <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400">
                  Peptide Therapy
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-xl"
              >
                Advanced Regenerative Medicine for Cellular Healing
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-base text-slate-600 leading-relaxed max-w-xl"
              >
                Peptide therapy represents one of the most exciting advances in <span className="font-bold italic">functional and regenerative medicine</span>. Peptides are short chains of amino acids that function as <span className="font-bold italic">biological messengers</span>, signaling cells to perform specific functions such as healing, immune regulation, tissue repair, and metabolic balance.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="lg:w-1/2 relative w-full mt-12 lg:mt-0"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] border-[6px] border-white group">
                <div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2600&auto=format&fit=crop"
                  className="w-full h-[450px] lg:h-[600px] object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  alt="Peptide Therapy Cellular Healing"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction 1 */}
      <section className="pb-20 mt-0 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 border-l border-slate-100 hidden lg:block pointer-events-none"></div>
        <div className="absolute -left-40 top-20 w-70 h-0 bg-sky-50/50 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 -mt-5">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-3/5 lg:pr-16 mb-12 lg:mb-0 relative z-20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-sky-600 rounded-full"></div>
                <h2 className="text-sm font-bold text-sky-600 tracking-widest uppercase">
                  Introduction
                </h2>
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                What Are Peptides?
              </h3>

              <p className="text-xl text-slate-700 leading-relaxed font-medium mb-8">
                Peptides are naturally occurring molecules in the body composed of small chains of amino acids. They play an important role in <span className="italic font-bold">cell-to-cell communication</span>, regulating many biological processes including immune response, hormone balance, metabolism, and tissue repair.
              </p>

              <div className="bg-sky-50/50 border border-sky-100 p-6 rounded-2xl">
                <p className="text-slate-600 leading-relaxed mb-4">
                  As we age or face chronic illness, the body’s natural production of certain peptides may decline. Peptide therapy helps restore these signaling pathways, allowing the body to <span className="italic font-bold">heal, repair, and function more efficiently</span>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Unlike many conventional treatments that primarily suppress symptoms, peptide therapy works by <span className="italic font-bold">supporting the body's natural regulatory systems</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/5 relative z-30 lg:-ml-10 mt-8 lg:mt-24"
            >
              <div className="bg-sky-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-sky-800 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="w-16 h-16 bg-sky-800 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-sky-700/50 relative z-10">
                  <Stethoscope className="w-8 h-8 text-sky-300" />
                </div>

                <h4 className="text-2xl font-bold text-white mb-6 relative z-10">
                  The Tigris Valley Approach
                </h4>

                <p className="text-sky-100/90 leading-relaxed font-medium relative z-10">
                  At <span className="italic font-bold">Tigris Valley</span>, peptide therapy is integrated into a <span className="italic font-bold">personalized functional medicine approach</span> designed to address the <span className="italic font-bold">root causes of illness rather than simply managing symptoms</span>.
                </p>

                <div className="mt-8 pt-8 border-t border-sky-800/50 relative z-10">
                  <p className="text-sm text-sky-200 leading-relaxed">
                    By supporting the body's natural signaling systems, peptide therapy helps activate the body’s <span className="italic">own healing and regenerative mechanisms</span>, promoting improved vitality, resilience, and long-term health.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works & Conditions */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none flex justify-center items-center">
          <div className="w-[800px] h-[800px] rounded-full border border-sky-500/50 absolute"></div>
          <div className="w-[1200px] h-[1200px] rounded-full border border-sky-300/20 absolute"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-emerald-500 rounded-full"></div>
                <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase">
                  Mechanisms of Action
                </h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                How Peptide Therapy Works
              </h2>
              <p className="text-lg text-sky-100/80 mb-8 leading-relaxed font-medium">
                When therapeutic peptides are introduced into the body, they bind to specific receptors on cells and trigger targeted biological responses.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Cellular repair and regeneration",
                  "Reduced chronic inflammation",
                  "Improved immune system function",
                  "Hormonal balance",
                  "Enhanced metabolic activity",
                  "Tissue healing and recovery",
                  "Improved cognitive function"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sky-200/80 italic text-sm">
                Because peptides mimic molecules naturally produced by the body, they tend to be highly targeted and well tolerated.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="bg-gradient-to-br from-sky-900/50 to-slate-900 border border-sky-500/30 p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute right-0 top-0 opacity-10 pointer-events-none -mt-10 -mr-10">
                  <Activity className="w-64 h-64 text-sky-300" />
                </div>
                
                <h3 className="text-3xl font-extrabold text-white mb-8 relative z-10">
                  Conditions That May Benefit
                </h3>
                
                <ul className="space-y-4 mb-10 relative z-10">
                  {[
                    "Chronic fatigue and low energy",
                    "Hormonal imbalances",
                    "Metabolic disorders and insulin resistance",
                    "Chronic inflammation",
                    "Slow recovery from illness or surgery",
                    "Immune system dysregulation",
                    "Weight management challenges",
                    "Cognitive decline or brain fog",
                    "Gut health disorders",
                    "Sleep disturbances",
                    "Age-related decline"
                  ].map((condition, idx) => (
                    <li key={idx} className="flex gap-3 text-sky-100">
                      <div className="w-2 h-2 rounded-full bg-sky-400 mt-2 shrink-0 shadow-sm" />
                      <span className="font-medium leading-relaxed">{condition}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-sky-500/20 p-6 rounded-2xl border border-sky-400/30 relative z-10">
                  <p className="text-sky-100 text-sm font-semibold italic text-center leading-relaxed">
                    Peptide therapy is also increasingly used in longevity medicine and performance optimization.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Peptides Used */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Key Peptides Used in <br /> Functional Medicine
            </h2>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-600 mt-6 font-medium leading-relaxed max-w-2xl mx-auto">
              Treatment protocols may include specific peptides depending on the individual’s clinical needs. All peptide protocols are <span className="italic font-bold text-slate-800">carefully customized based on clinical assessment and patient goals.</span>
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 content-center justify-center">
            {peptides.map((peptide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`p-6 lg:p-8 rounded-[2rem] border bg-white transition-all duration-300 hover:shadow-xl ${peptide.color} flex flex-col items-start h-full`}
              >
                <div className="flex items-center gap-4 mb-4 border-b border-white/50 pb-4 w-full">
                  <div className={`w-12 h-12 shrink-0 rounded-xl bg-white shadow-sm flex items-center justify-center`}>
                    {React.cloneElement(peptide.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xl font-bold leading-tight uppercase tracking-tight">
                    {peptide.title}
                  </h3>
                </div>
                <p className="font-medium leading-relaxed flex-grow text-[15px] opacity-90">
                  {peptide.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Modals Style Split: Integrative Support & Benefits */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Cancer care */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 bg-slate-50 p-10 md:p-14 rounded-[3rem] border border-slate-200"
            >
              <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
                Peptide Therapy in <br /> Cancer Supportive Care
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                At <span className="font-bold italic">Tigris Valley</span>, peptide therapy may also be used as part of an <span className="font-bold italic">integrative supportive care program for cancer patients</span>.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                These therapies are designed <span className="font-bold italic">not as a replacement for conventional oncology treatments</span>, but as supportive strategies to improve quality of life during and after treatment.
              </p>
              <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-sm">Potential benefits may include:</h4>
              <ul className="space-y-4 mb-8">
                {[
                  "Supporting immune system resilience",
                  "Reducing systemic inflammation",
                  "Enhancing recovery during chemotherapy or radiation",
                  "Improving energy levels and strength",
                  "Supporting tissue repair",
                  "Helping maintain metabolic balance"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-5 bg-white rounded-xl border border-slate-200 text-sm text-slate-600 font-medium leading-relaxed shadow-sm">
                Our integrative approach focuses on <span className="italic">supporting patients through treatment while helping maintain overall health and well-being</span>.
              </div>
            </motion.div>

            {/* Benefits & Functional Med Approach */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 flex flex-col gap-10"
            >
              {/* Benefits block */}
              <div className="bg-sky-600 p-10 rounded-[3rem] shadow-xl text-white relative overflow-hidden">
                <Sparkles className="absolute -right-10 -bottom-10 w-64 h-64 text-sky-500/50" />
                <h3 className="text-3xl font-extrabold mb-8 relative z-10">Benefits of Peptide Therapy</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 relative z-10">
                  {[
                    "Increased energy and vitality",
                    "Faster recovery from illness or injury",
                    "Enhanced immune function",
                    "Improved metabolic health",
                    "Better sleep quality",
                    "Improved mental clarity",
                    "Reduced chronic inflammation",
                    "Support for healthy aging and longevity"
                  ].map((bn, ix) => (
                    <div key={ix} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white shrink-0"></div>
                      <span className="font-semibold text-sky-50 leading-tight text-sm md:text-base">{bn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional Med block */}
              <div className="bg-emerald-50 p-10 rounded-[3rem] border border-emerald-100 flex-grow">
                <div className="w-12 h-12 bg-emerald-200 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800 mb-4">Our Functional Medicine Approach</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                  Peptide therapy is most effective when used as part of a <span className="italic font-bold text-slate-800">comprehensive functional medicine strategy</span>.
                </p>
                <p className="text-slate-700 font-bold mb-4 text-sm">At Tigris Valley, treatment plans may also include:</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    "Advanced diagnostic testing",
                    "Personalized nutrition therapy",
                    "Gut microbiome optimization",
                    "Detoxification support",
                    "Lifestyle & metabolic optimization",
                    "Targeted nutraceutical supplementation",
                    "Stress and sleep management"
                  ].map((fm, iz) => (
                    <span key={iz} className="bg-white border border-emerald-200 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800 shadow-sm">
                      {fm}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-slate-600 bg-emerald-100/50 p-4 rounded-xl">
                  This <span className="italic text-emerald-800">root-cause approach</span> helps restore balance and supports long-term health.
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal Candidate Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Who Is an Ideal Candidate for Peptide Therapy?
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Peptide therapy may benefit individuals seeking to improve overall health, enhance recovery, or address underlying biological imbalances.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candadates.map((cand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-sky-200 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4">{cand.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{cand.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <span className="inline-flex items-center gap-3 py-3 px-8 bg-white border border-rose-200 shadow-sm rounded-full text-rose-600 font-bold tracking-widest uppercase text-sm">
              <ClipboardCheck className="w-5 h-5" />
              A personalized medical evaluation is essential before starting treatment.
            </span>
          </div>
        </div>
      </section>

      {/* Why Choose & Plans */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-sky-900 text-white rounded-[2rem] p-10 md:p-16 lg:p-20 shadow-2xl relative">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <Sparkles className="w-96 h-96 -mt-20 -mr-20" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              
              {/* Left col */}
              <div>
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight">
                  Why Choose Tigris Valley for Peptide Therapy?
                </h2>
                <p className="text-sky-200 text-lg mb-10 font-medium">
                  At <span className="italic font-bold text-white">Tigris Valley</span>, peptide therapy is delivered within a <span className="italic font-bold text-white">comprehensive functional and integrative medicine framework</span>.
                </p>

                <div className="space-y-6">
                  {[
                    {t: "Physician-Led Personalized Care", d: "Each treatment plan is designed after a detailed consultation and clinical evaluation."},
                    {t: "Root-Cause Medicine", d: "We focus on identifying and addressing the underlying factors contributing to illness."},
                    {t: "Advanced Regenerative Medicine", d: "Our therapies support cellular repair, immune balance, metabolic health, and healthy aging."},
                    {t: "Integrative Oncology Support", d: "Peptide therapy may be incorporated into supportive care programs for patients undergoing cancer treatment."},
                    {t: "Holistic Health Optimization", d: "Our goal is to help individuals achieve greater vitality, resilience, and long-term well-being."}
                  ].map((wc, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-sky-800 flex items-center justify-center shrink-0 border border-sky-700">
                        <CheckCircle2 className="w-5 h-5 text-sky-300" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{wc.t}</h4>
                        <p className="text-sky-200 text-sm leading-relaxed">{wc.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right col */}
              <div className="bg-white text-slate-900 p-10 lg:p-12 rounded-[2rem] shadow-xl">
                <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-8">
                  <ClipboardCheck className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold mb-6">Personalized Treatment Plans</h3>
                <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                  Every patient receives a <span className="italic font-bold">comprehensive medical consultation</span> before beginning peptide therapy.
                </p>
                <p className="text-slate-600 mb-8 font-medium leading-relaxed">
                  Based on clinical evaluation and health goals, a <span className="italic font-bold">personalized peptide protocol</span> is created.
                </p>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                  <p className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-4">Peptides may be administered through:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Subcutaneous injections",
                      "Oral formulations",
                      "Nasal sprays",
                      "Topical applications"
                    ].map((ad, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                        <div className="w-1.5 h-1.5 bg-sky-500 rounded-full"></div>
                        {ad}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-3 bg-sky-50 p-4 rounded-xl border border-sky-100">
                  <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0" />
                  <p className="text-sm font-bold text-sky-900 leading-snug">Patients are monitored regularly to ensure safety and effectiveness.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 flex items-center justify-center gap-4">
              <HelpCircle className="w-10 h-10 text-sky-500" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-sky-300 transition-colors">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{faq.q}</h4>
                <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA (Imported directly from requested styling) ── */}
      <section className="pb-10 md:pb-16 pt-10 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-sky-900 to-sky-950 p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Sparkles className="absolute top-6 right-10 w-40 h-40 text-sky-300" />
              <ShieldCheck className="absolute bottom-4 left-8 w-28 h-28 text-sky-300" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              {/* Left */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-sky-800/60 border border-sky-700/50 text-sky-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Phone className="w-3.5 h-3.5" /> Begin Your Journey Toward Cellular Healing
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Tigris Valley Functional & Integrative Medicine
                </h2>
                <p className="text-sky-100 font-medium text-lg mb-6 max-w-2xl leading-relaxed">
                  If you are experiencing chronic health concerns, fatigue, slow recovery, or age-related decline, peptide therapy may offer a new pathway toward restoring vitality and resilience. Our medical team will work closely with you to evaluate your health and design a <span className="italic font-bold text-white">personalized treatment strategy</span> aligned with your goals.
                </p>
                <div className="flex items-center gap-3 text-white/90 font-medium bg-white/10 w-fit px-4 py-2 rounded-xl border border-white/20">
                  <Heart className="w-5 h-5 text-sky-300 shrink-0" />
                  Book a consultation today and explore how peptide therapy may support your journey.
                </div>
              </div>
              {/* Right */}
              <div className="w-full lg:w-auto flex flex-col gap-4">
                <button
                  onClick={() => setCtaOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-white text-sky-900 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-sky-50 transition-all duration-200 hover:-translate-y-0.5 w-full lg:w-auto whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Schedule a Consultation
                </button>
                <p className="text-sky-300 text-xs font-medium text-center">
                  Physician-supervised · Personalised care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={ctaOpen} onOpenChange={setCtaOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl">
          <DialogHeader className="p-0">
            <ContactInput />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PeptideTherapy;

