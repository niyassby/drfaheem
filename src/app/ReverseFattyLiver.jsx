// import React from 'react';
// import { motion } from 'framer-motion';
// import Footer from "../components/Navbar/Footer";
// import Navbar from "../components/Navbar/Navbar";
// import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves } from 'lucide-react';

// const ReverseFattyLiver = () => {
//     const phases = [
//         {
//             title: "Step 1: Comprehensive Liver & Metabolic Mapping",
//             icon: <Microscope className="w-8 h-8 text-blue-600" />,
//             content: "Advanced blood work to identify if your fatty liver is insulin-driven, toxic, or gut-related. Tests include Liver Enzymes (ALT/AST), HOMA-IR, HbA1c, and Vitamin D/B12 mapping.",
//             bgColor: "bg-blue-50"
//         },
//         {
//             title: "Step 2: Insulin Reset & Therapeutic Liver Nutrition",
//             icon: <Apple className="w-8 h-8 text-green-600" />,
//             content: "Eliminating fructose excess and processed oils while optimizing protein and Omega-3s. A personalized low-glycemic metabolic reset designed to reduce liver fat accumulation.",
//             bgColor: "bg-green-50"
//         },
//         {
//             title: "Step 3: Advanced IV Liver Support",
//             icon: <Droplets className="w-8 h-8 text-purple-600" />,
//             content: "Physician-supervised IV support (NAC, Alpha-lipoic acid, L-Carnitine, Magnesium) to boost glutathione production and reduce oxidative stress within liver cells.",
//             bgColor: "bg-purple-50"
//         },
//         {
//             title: "Step 4: Structured Liver Detox & Gut Reset",
//             icon: <Thermometer className="w-8 h-8 text-orange-600" />,
//             content: "Optimizing bile flow and correcting the gut microbiome to reduce endotoxin load. A controlled detox protocol tailored to your liver's regeneration capacity.",
//             bgColor: "bg-orange-50"
//         },
//         {
//             title: "Step 5: Metabolic & Mitochondrial Activation",
//             icon: <Activity className="w-8 h-8 text-red-600" />,
//             content: "Activation of fat burning through post-meal walking strategies and muscle activation. Muscle is the most powerful organ for clearing metabolic waste.",
//             bgColor: "bg-red-50"
//         }
//     ];

//     const improvements = [
//         "Reduced ALT, AST, GGT",
//         "Improved insulin levels",
//         "Reduced liver fat percentage",
//         "Improved lipid profile",
//         "Weight optimization",
//         "Increased energy",
//         "Reduced inflammation",
//         "Better metabolic flexibility"
//     ];

//     const risks = [
//         "NASH (inflammatory fatty liver)",
//         "Fibrosis",
//         "Cirrhosis",
//         "Type 2 diabetes",
//         "Heart disease"
//     ];

//     return (
//         <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
//             <Navbar />

//             {/* Hero Section */}
//             <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
//                 <div className="absolute inset-0 z-0">
//                     <img
//                         src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
//                         alt="Liver Health"
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/60"></div>
//                 </div>

//                 <div className="container mx-auto px-6 relative z-10 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-emerald-200 uppercase bg-emerald-900/30 rounded-full border border-emerald-500/30">
//                             Functional Liver Restoration
//                         </span>
//                         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
//                             Reverse Fatty Liver <br /> Naturally
//                         </h1>
//                         <p className="max-w-3xl mx-auto text-lg md:text-xl text-emerald-50 mb-10 leading-relaxed font-medium">
//                             Fatty Liver Is a Metabolic Warning — Not Just a Scan Finding. <br />
//                             At Tigris Valley, we work to reverse the metabolic drivers behind it.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Warning Message Section */}
//             <section className="py-20 bg-emerald-50/50">
//                 <div className="container mx-auto px-6">
//                     <div className="max-w-4xl mx-auto text-center">
//                         <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">More Than Just a Reassurance</h2>
//                         <div className="h-1.5 w-24 bg-emerald-600 mx-auto rounded-full mb-8"></div>
//                         <p className="text-xl text-gray-700 leading-relaxed mb-10">
//                             Left unaddressed, fatty liver (NAFLD / MAFLD) is a signal for <span className="font-bold text-emerald-700">Insulin Resistance, Chronic Inflammation, and Cardiovascular Risk.</span>
//                         </p>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
//                                 <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
//                                     <ShieldCheck className="w-5 h-5" /> Progression Risks
//                                 </h4>
//                                 <ul className="space-y-3 text-left">
//                                     {risks.map((item, i) => (
//                                         <li key={i} className="flex items-center gap-3 text-gray-700">
//                                             <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                             <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
//                                 <h4 className="text-emerald-700 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
//                                     <Activity className="w-5 h-5" /> Restoration Pillars
//                                 </h4>
//                                 <ul className="space-y-3 text-left">
//                                     {["Stable insulin levels", "Efficient fat metabolism", "Healthy gut-liver axis", "Bile flow optimization"].map((item, i) => (
//                                         <li key={i} className="flex items-center gap-3 text-gray-700">
//                                             <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> {item}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* The Restoration Steps */}
//             <section className="py-24 bg-white">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Functional Liver Restoration Program</h2>
//                         <p className="text-gray-500 text-lg max-w-2xl mx-auto">A data-driven, step-by-step pathway to restoring your liver's metabolic health.</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {phases.map((phase, idx) => (
//                             <motion.div
//                                 key={idx}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: idx * 0.1 }}
//                                 className={`${phase.bgColor} p-8 rounded-[2.5rem] border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300 group`}
//                             >
//                                 <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
//                                     {phase.icon}
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{phase.title}</h3>
//                                 <p className="text-gray-700 leading-relaxed text-sm md:text-base">{phase.content}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Expected Improvements Section */}
//             <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 p-12 opacity-10">
//                     <Activity className="w-64 h-64" />
//                 </div>
//                 <div className="container mx-auto px-6 relative z-10">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                         <div>
//                             <h2 className="text-3xl md:text-5xl font-bold mb-8">Expected Improvements</h2>
//                             <p className="text-emerald-100 text-lg mb-10 italic">
//                                 Our patients report meaningful reversals in liver fat and metabolic markers within just a few weeks.
//                             </p>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                                 {improvements.map((item, idx) => (
//                                     <div key={idx} className="flex gap-4 items-center">
//                                         <div className="bg-white/10 p-2 rounded-lg">
//                                             <CheckCircle2 className="text-emerald-300 w-5 h-5" />
//                                         </div>
//                                         <span className="font-medium text-emerald-50">{item}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="bg-white/10 backdrop-blur-lg p-10 md:p-12 rounded-[4rem] border border-white/20">
//                             <h3 className="text-2xl font-bold mb-6">Cardiometabolic Risk Protection</h3>
//                             <p className="text-emerald-100 mb-8 leading-relaxed">
//                                 Fatty liver significantly increases heart risk. We proactively address the underlying causes to protect your vascular health.
//                             </p>
//                             <div className="space-y-4">
//                                 {["Lipid optimization", "Endothelial support", "Inflammation reduction", "Insulin stabilization"].map((item, i) => (
//                                     <div key={i} className="flex items-center gap-3">
//                                         <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
//                                         <span className="font-bold text-white uppercase tracking-wider text-sm">{item}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* International CTA */}
//             <section className="py-24 bg-white relative">
//                 <div className="container mx-auto px-6 text-center">
//                     <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-900 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
//                         <div className="absolute top-0 right-0 p-12 opacity-10">
//                             <Globe className="w-64 h-64" />
//                         </div>
//                         <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Designed for International Patients</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
//                             {['2-4 Week Reset', 'Pre-arrival Consult', 'IV Support', 'Airport Support'].map((item, i) => (
//                                 <div key={i} className="text-xs font-bold uppercase tracking-widest text-emerald-200">{item}</div>
//                             ))}
//                         </div>
//                         <button className="bg-white text-emerald-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition transform hover:scale-105 shadow-xl relative z-10">
//                             Request Program Details
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             {/* Why Tigris? */}
//             <section className="py-24 bg-gray-50 border-t border-gray-100">
//                 <div className="container mx-auto px-6 text-center">
//                     <h2 className="text-4xl font-extrabold text-gray-900 mb-16">Why Choose Tigris Valley Wellness Centre?</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
//                         {[
//                             "Root-cause functional medicine approach",
//                             "Physician-supervised IV therapies",
//                             "Liver + metabolic integration",
//                             "Structured monitoring",
//                             "Ethical and safety-focused protocols",
//                             "International patient coordination"
//                         ].map((item, idx) => (
//                             <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
//                                 <CheckCircle2 className="text-emerald-600 shrink-0" />
//                                 <span className="font-bold text-gray-800 leading-tight">{item}</span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="mt-20">
//                         <p className="text-2xl md:text-3xl font-bold italic text-emerald-950">Your Liver Can Regenerate. The Right Environment Makes the Difference.</p>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default ReverseFattyLiver;





import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
  Microscope,
  Apple,
  Syringe,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Sparkles,
  HeartPulse,
  Target,
  Droplets,
  Dumbbell,
  AlertTriangle,
  ArrowRight,
  Leaf,
  Stethoscope,
  LineChart,
  MessageSquareQuote,
  Zap,
  RefreshCw,
  RefreshCcw,
  Phone,
} from "lucide-react";
import { GiLiver } from "react-icons/gi";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';
const LiverRestoration = () => {
  const [ctaOpen, setCtaOpen] = useState(false);
  return (
    <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
            alt="Liver Health and Wellness"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-slate-900/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto w-full"
          >
            <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-emerald-400 uppercase bg-emerald-950/30 rounded-full border border-emerald-500/30">
              Reverse Fatty Liver Naturally
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              From Fatty Liver to <br className="hidden md:block" /> Functional
              Liver
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-50 mb-0 leading-relaxed font-medium">
              Advanced Functional Liver Restoration Program at Tigris Valley
              Wellness Centre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Warning & Context Section (Upgraded UI) --- */}
      <section className="py-14 md:py-12 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Fatty Liver Is a Metabolic Warning —{" "}
              <br className="hidden lg:block" /> Not Just a Scan Finding
            </h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Patient Context Quotes - Redesigned as a "Clinical Conversation" block */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 mb-20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10">
              <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <MessageSquareQuote className="w-8 h-8 text-emerald-500" />
                </div>
                <p className="text-3xl font-black text-slate-900 mb-2">
                  If you’ve been told:
                </p>
                <p className="text-slate-500 font-medium">
                  Common dismissals that delay real healing.
                </p>
              </div>

              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 w-full">
                {[
                  "“It’s common, don’t worry.”",
                  "“Just lose some weight.”",
                  "“Your liver enzymes are slightly elevated.”",
                ].map((quote, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 px-4 py-3 rounded-xl border border-emerald-300 flex items-center justify-center text-center hover:bg-emerald-50 transition-colors duration-300"
                  >
                    <p className="text-slate-700 font-semibold italic leading-snug">
                      "{quote.replace(/[“”]/g, "")}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-slate-900 text-emerald-400 font-bold text-lg py-4 px-10 rounded-full shadow-lg">
                <AlertTriangle className="w-5 h-5" />
                You deserve more than reassurance.
              </div>
            </div>
          </div>

          {/* Signals vs Progression - Redesigned as a "Progression Tracker" */}
          <div className="relative mb-20">
            {/* Desktop Arrow Connector */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Warning Card */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-amber-100 shadow-[0_8px_30px_rgb(251,191,36,0.08)] relative overflow-hidden group hover:border-amber-300 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-8">
                  <Activity className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                  Fatty liver (NAFLD / MAFLD) is often the first signal of:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Insulin resistance",
                    "Metabolic syndrome",
                    "Chronic inflammation",
                    "Mitochondrial dysfunction",
                    "Increased cardiovascular risk",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 font-semibold text-slate-700"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 bg-amber-500 rounded-full"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Danger Card */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-rose-100 shadow-[0_8px_30px_rgb(244,63,94,0.08)] relative overflow-hidden group hover:border-rose-300 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-8">
                  <AlertTriangle className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                  Left unaddressed, it may progress to:
                </h3>
                <ul className="space-y-4">
                  {[
                    "NASH (inflammatory fatty liver)",
                    "Fibrosis",
                    "Cirrhosis",
                    "Type 2 diabetes",
                    "Heart disease",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 font-semibold text-slate-700"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-rose-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Statement Banner */}
          <div className="flex justify-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-8 md:px-12 rounded-[2rem] shadow-2xl shadow-emerald-900/20 border border-emerald-800">
              <div className="p-4 bg-white/10 rounded-2xl shrink-0 backdrop-blur-sm border border-white/10">
                <GiLiver className="w-10 h-10 text-emerald-300" />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xl md:text-2xl font-bold mb-2">
                  At Tigris Valley, we don’t just monitor fatty liver.
                </p>
                <p className="text-emerald-300 font-bold uppercase tracking-widest text-sm">
                  We work to reverse the metabolic drivers behind it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Philosophy Section (Upgraded to Dark Premium UI) --- */}
      <section className="py-10 md:py-12 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
        {/* Architectural Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        ></div>

        {/* Ambient Dark Glows & Watermark */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-teal-600/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/4"></div>
        <GiLiver className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] text-slate-800 opacity-20 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-5 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <Stethoscope className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
                Clinical Approach
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 tracking-tight text-white leading-tight">
              Our Functional Liver <br className="hidden md:block" />{" "}
              Restoration Philosophy
            </h2>

            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
              <p className="text-lg md:text-xl font-bold text-emerald-100">
                A healthy liver requires:
              </p>
              <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Core Pillars Grid - Premium Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mb-20">
              {[
                { text: "Stable insulin levels", icon: <Activity /> },
                { text: "Efficient fat metabolism", icon: <Zap /> },
                { text: "Low inflammation", icon: <ShieldCheck /> },
                { text: "Strong antioxidant capacity", icon: <Sparkles /> },
                { text: "Healthy gut-liver axis", icon: <RefreshCcw /> },
                { text: "Proper bile flow", icon: <Droplets /> },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-900/60 border border-slate-700/50 rounded-[2rem] p-4 overflow-hidden hover:bg-slate-800/80 hover:border-emerald-500/50 transition-all duration-500 shadow-lg"
                >
                  {/* Subtle Inner Card Glow on Hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-400/30 transition-colors duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-slate-950 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500">
                      {React.cloneElement(item.icon, {
                        className: "w-7 h-7 text-emerald-400",
                      })}
                    </div>
                    <span className="font-bold text-xl text-slate-200 group-hover:text-white transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Final Statement Bar */}
            <div className="flex justify-center">
              <div className="relative inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 px-8 py-5 md:py-6 bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 rounded-full shadow-[0_10px_40px_rgba(16,185,129,0.1)]">
                {/* Live Pulse Indicator */}
                <div className="flex items-center justify-center relative w-4 h-4 shrink-0">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
                </div>

                <p className="text-lg md:text-xl text-emerald-100 font-medium text-center">
                  We correct these step by step —{" "}
                  <span className="font-bold italic text-white tracking-wide">
                    safely and systematically.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- The 5 Steps --- */}
      <section className="py-20 md:py-32 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Step 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:border-blue-200 transition-colors group">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Microscope className="w-8 h-8" />
                </div>
                Step 1: Comprehensive Liver & Metabolic Mapping
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-8 border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-2 rounded-r-lg">
                Before treatment, we identify your root cause.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 flex-grow">
                <div>
                  <p className="font-bold text-slate-900 mb-4 border-b pb-2">
                    Advanced Evaluation May Include:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Liver enzymes (ALT, AST, GGT, ALP)",
                      "Fasting insulin & HOMA-IR",
                      "HbA1c",
                      "Lipid profile",
                      "CRP (inflammatory marker)",
                      "Ferritin",
                      "Uric acid",
                      "Thyroid profile",
                      "Vitamin D",
                      "B12",
                      "Body composition analysis",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700 font-medium"
                      >
                        <Activity className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-4 border-b pb-2">
                    Optional:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Ultrasound / Fibroscan review",
                      "NAFLD fibrosis scoring",
                      "Gut microbiome assessment",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-700 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full shrink-0 mt-1.5"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl mt-auto">
                <p className="font-medium text-white flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    We determine whether your fatty liver is insulin-driven,
                    inflammatory, toxic, or gut-related.
                  </span>
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:border-green-200 transition-colors group">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <Apple className="w-8 h-8" />
                </div>
                Step 2: Insulin Reset & Therapeutic Liver Nutrition
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-8 border-l-4 border-green-500 pl-4 bg-green-50/50 py-2 rounded-r-lg">
                Most fatty liver cases are driven by insulin resistance.
              </p>

              <p className="font-bold text-slate-900 mb-4">
                Your personalized plan may include:
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Low-glycemic metabolic reset",
                  "Controlled carbohydrate strategy",
                  "High-quality protein optimization",
                  "Omega-3 support",
                  "Elimination of fructose excess",
                  "Removal of processed seed oils",
                  "Time-restricted eating (if appropriate)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-800 font-medium"
                  >
                    <Leaf className="w-5 h-5 text-green-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 border border-green-200 p-5 rounded-xl mt-auto">
                <p className="font-bold text-green-900 flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    Goal: Reduce liver fat accumulation and restore insulin
                    sensitivity.
                  </span>
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:border-purple-200 transition-colors group lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex flex-wrap items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <Syringe className="w-8 h-8" />
                </div>
                <span>
                  Step 3: Advanced IV Liver Support{" "}
                  <span className="block sm:inline text-sm font-normal text-slate-500 bg-slate-100 px-3 py-1 mt-2 sm:mt-0 rounded-full uppercase tracking-wider w-fit">
                    (Selected Clients)
                  </span>
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 flex-grow">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <p className="font-bold text-slate-900 mb-4 border-b border-purple-200 pb-2">
                    For clients with:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Persistent elevated enzymes",
                      "Severe fatty liver",
                      "Metabolic syndrome",
                      "High oxidative stress",
                      "Chronic fatigue",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-800 font-medium"
                      >
                        <AlertTriangle className="w-4 h-4 text-purple-500 shrink-0" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="font-bold text-slate-900 mb-4 border-b pb-2">
                    IV Nutritional Therapy May Include:
                  </p>
                  <ul className="grid grid-cols-1 gap-3">
                    {[
                      "N-Acetyl Cysteine (NAC)",
                      "Alpha-lipoic acid",
                      "Magnesium",
                      "B-Complex",
                      "Vitamin C",
                      "L-Carnitine (Levocarnitine)",
                      "Amino acids",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-800 font-medium"
                      >
                        <Droplets className="w-4 h-4 text-purple-500 shrink-0" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <p className="font-bold text-slate-900 mb-4 border-b border-purple-200 pb-2">
                    May Support:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Glutathione production",
                      "Reduced oxidative stress",
                      "Improved mitochondrial fat burning",
                      "Better insulin sensitivity",
                      "Liver cell recovery",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-purple-900 font-bold"
                      >
                        <Activity className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-4 rounded-xl mt-auto text-center">
                <p className="font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />{" "}
                  Administered under strict physician supervision.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:border-emerald-200 transition-colors group">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <GiLiver className="w-8 h-8" />
                </div>
                Step 4: Structured Liver Detox & Gut Reset
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-8 border-l-4 border-emerald-500 pl-4 bg-emerald-50/50 py-2 rounded-r-lg">
                The liver and gut function as one system.
              </p>

              <p className="font-bold text-slate-900 mb-4">We support:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-grow">
                {[
                  "Bile flow optimization",
                  "Gut microbiome correction",
                  "Endotoxin reduction",
                  "Fiber optimization",
                  "Hydration strategies",
                  "Anti-inflammatory phytonutrients",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-800 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl mt-auto text-center">
                <p className="font-bold text-emerald-900 text-sm">
                  A controlled detox protocol is implemented only when
                  appropriate.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full hover:border-rose-200 transition-colors group">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-rose-50 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <Dumbbell className="w-8 h-8" />
                </div>
                Step 5: Metabolic & Mitochondrial Activation
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-8 border-l-4 border-rose-500 pl-4 bg-rose-50/50 py-2 rounded-r-lg">
                Fatty liver reflects impaired fat burning.
              </p>

              <p className="font-bold text-slate-900 mb-4">
                We activate metabolism through:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 flex-grow">
                {[
                  { text: "Resistance training guidance", icon: <Dumbbell /> },
                  { text: "Post-meal walking protocol", icon: <Activity /> },
                  { text: "Muscle activation strategies", icon: <Zap /> },
                  {
                    text: "Metabolic flexibility training",
                    icon: <LineChart />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center gap-3 bg-slate-50 p-5 rounded-2xl border border-slate-100"
                  >
                    {React.cloneElement(item.icon, {
                      className: "w-6 h-6 text-rose-500",
                    })}
                    <span className="font-semibold text-slate-800 text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 p-5 rounded-xl mt-auto text-center">
                <p className="font-bold text-white text-lg tracking-wide">
                  Muscle is your most powerful metabolic organ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Cardio Protection --- */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <HeartPulse className="absolute -bottom-10 -right-10 w-96 h-96 text-white opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 flex items-center gap-4">
                <ShieldCheck className="w-12 h-12 text-red-500" />
                Cardiometabolic Risk Protection
              </h2>
              <p className="text-xl text-red-300 font-bold mb-8 italic">
                Fatty liver significantly increases heart risk.
              </p>
              <p className="font-bold text-white mb-6 text-lg">
                We proactively address:
              </p>
              <ul className="space-y-4">
                {[
                  "Lipid optimization",
                  "Blood pressure monitoring",
                  "Endothelial support",
                  "Inflammation reduction",
                  "Insulin stabilization",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-medium text-slate-300 text-lg"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-[3rem] border border-white/20 text-center shadow-2xl">
                <Stethoscope className="w-12 h-12 text-white mx-auto mb-6 opacity-80" />
                <p className="text-xl font-medium leading-relaxed">
                  In selected high-risk patients, vascular support therapies may
                  be considered under medical supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Expected Improvements --- */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-emerald-50/50 relative overflow-hidden border-y border-slate-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-400/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase mb-4 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5" /> Transformation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Expected Improvements
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              May Include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-10">
            {[
              { text: "Reduced ALT, AST, GGT", icon: <LineChart /> },
              { text: "Improved insulin levels", icon: <Activity /> },
              { text: "Reduced liver fat percentage", icon: <GiLiver /> },
              { text: "Improved lipid profile", icon: <Droplets /> },
              { text: "Weight optimization", icon: <Dumbbell /> },
              { text: "Increased energy", icon: <Zap /> },
              { text: "Reduced inflammation", icon: <ShieldCheck /> },
              { text: "Better metabolic flexibility", icon: <RefreshCw /> },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-emerald-300 hover:shadow-[0_10px_30px_rgb(16,185,129,0.12)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 w-12 h-12 bg-slate-50 border border-slate-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </div>
                <h4 className="font-bold text-slate-800 text-base md:text-lg leading-snug relative z-10 group-hover:text-slate-950">
                  {item.text}
                </h4>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <p className="inline-flex items-center gap-2.5 text-slate-600 bg-white py-3 px-6 rounded-full border border-slate-200 shadow-sm font-medium text-sm md:text-base">
              <AlertTriangle className="w-4 h-4 text-slate-400 shrink-0" />
              Results vary depending on baseline fibrosis stage and adherence.
            </p>
          </div>
        </div>
      </section>

      {/* --- International Patients --- */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-gradient-to-br from-slate-900 to-emerald-950 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <Globe className="absolute top-0 right-0 w-96 h-96 text-white opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4" />

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10 flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Globe className="w-10 h-10 text-emerald-300" />
              </div>
              Designed for clients across the globe
            </h2>
            <p className="text-xl text-emerald-200 mb-8 font-medium relative z-10">
              We offer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 relative z-10">
              {[
                "Pre-arrival online consultation",
                "2–4 week structured liver reset program",
                "IV liver support modules",
                "Intensive metabolic plans",
                "Airport coordination assistance",
                "Post-return tele-follow-up",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-block bg-emerald-500 text-slate-900 py-4 px-8 rounded-full font-bold text-lg md:text-xl relative z-10 shadow-xl">
              Kerala offers a calm healing environment ideal for metabolic
              restoration.
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Tigris --- */}
      <section className="py-10 md:py-18 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-16">
            Why Choose Tigris Valley Wellness Centre?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Root-cause functional medicine approach",
              "Physician-supervised IV therapies",
              "Liver + metabolic integration",
              "Structured monitoring",
              "Ethical and safety-focused protocols",
              "International patient coordination",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-emerald-50 p-3 rounded-xl shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-slate-800 text-lg leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-10 md:py-12 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="relative rounded-[3rem] bg-gradient-to-br from-emerald-50 to-teal-100/80 p-12 md:p-14 text-center overflow-hidden border border-emerald-100 shadow-[0_8px_30px_rgb(16,185,129,0.04)]">
            <div className="absolute top-0 right-0 pointer-events-none">
              <GiLiver className="w-74 h-74 text-emerald-500 opacity-[0.03] translate-x-1/4 -translate-y-1/4" />
            </div>
            <div className="absolute bottom-0 left-0 pointer-events-none">
              <Leaf className="w-48 h-48 text-teal-500 opacity-[0.03] -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="mb-8">
                <GiLiver className="w-20 h-20 text-emerald-500" />
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                <span className="block text-slate-800 mb-4 md:mb-6 leading-tight">
                 Your Liver Can Regenerate.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 leading-tight pb-2">
                  The Right Environment Makes the Difference.
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-16 md:py-20 bg-emerald-50/50 border-t border-emerald-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-950 p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <GiLiver className="absolute top-4 right-8 w-48 h-48 text-emerald-300" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-emerald-800/60 border border-emerald-700/50 text-emerald-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Phone className="w-3.5 h-3.5" /> Begin Your Consultation
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  If you or your loved one is seeking:
                </h2>
                <ul className="space-y-3 mb-8">
                  {[
                    "Fatty liver reversal & liver enzyme normalization",
                    "Insulin resistance and metabolic correction",
                    "Gut-liver axis restoration",
                    "Structured functional liver reset program",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-emerald-200 font-medium text-sm">
                  Our team will guide you through a structured eligibility and consultation process.
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-col gap-4">
                <button
                  onClick={() => setCtaOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-emerald-50 transition-all duration-200 hover:-translate-y-0.5 w-full lg:w-auto whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Request a Case Review
                </button>
                <p className="text-emerald-300 text-xs font-medium text-center">
                  Physician-supervised · Personalised protocols
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

export default LiverRestoration;
