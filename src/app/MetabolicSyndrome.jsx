// import React from 'react';
// import { motion } from 'framer-motion';
// import Footer from "../components/Navbar/Footer";
// import Navbar from "../components/Navbar/Navbar";
// import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase } from 'lucide-react';

// const MetabolicSyndrome = () => {
//     const phases = [
//         {
//             title: "Phase 1: Advanced Functional Assessment",
//             icon: <Microscope className="w-8 h-8 text-blue-600" />,
//             content: "Comprehensive evaluation including Metabolic panel, Insulin resistance markers (HOMA-IR), HbA1c, Lipid profile, Liver function, Inflammatory markers, Vitamin and mineral status, and Body composition analysis.",
//             bgColor: "bg-blue-50"
//         },
//         {
//             title: "Phase 2: Precision Anti-Inflammatory Nutrition",
//             icon: <Apple className="w-8 h-8 text-green-600" />,
//             content: "Customized plan to improve insulin sensitivity, reverse fatty liver, and reduce visceral fat. Includes low-glycemic therapeutic plan, time-restricted eating, and high-fiber microbiome support.",
//             bgColor: "bg-green-50"
//         },
//         {
//             title: "Phase 3: Mitochondrial Activation & Hormonal Reset",
//             icon: <Zap className="w-8 h-8 text-yellow-600" />,
//             content: "Restoring cellular energy production using Magnesium, Alpha-lipoic acid, Omega-3s, and Berberine. Shifting the body from fat storage mode to fat burning mode.",
//             bgColor: "bg-yellow-50"
//         },
//         {
//             title: "Phase 4: Advanced IV Metabolic Therapy",
//             icon: <Droplets className="w-8 h-8 text-purple-600" />,
//             content: "Accelerated recovery via IV Nutritional Therapy: Magnesium, B-Complex, Vitamin C, ALA, N-Acetyl Cysteine (NAC), and L-Carnitine for mitochondrial fat metabolism activation.",
//             bgColor: "bg-purple-50"
//         },
//         {
//             title: "Phase 5: Detox & Liver Restoration",
//             icon: <Thermometer className="w-8 h-8 text-orange-600" />,
//             content: "Structured liver detox protocols, nutritional detoxification support, and gut microbiome repair to address the close link between metabolic syndrome and fatty liver.",
//             bgColor: "bg-orange-50"
//         },
//         {
//             title: "Phase 6: Cardiometabolic Protection",
//             icon: <Activity className="w-8 h-8 text-red-600" />,
//             content: "Advanced lipid optimization, endothelial support, and EECP therapy (Enhanced External Counterpulsation) to improve circulation and support cardiovascular function.",
//             bgColor: "bg-red-50"
//         }
//     ];

//     const outcomes = [
//         "Improved insulin sensitivity",
//         "Reduction in HbA1c",
//         "Reduction in triglycerides",
//         "Improved HDL",
//         "Fatty liver improvement",
//         "Reduced waist circumference",
//         "Increased energy",
//         "Reduced blood pressure",
//         "Sustainable fat loss",
//         "Reduced dependency on medications"
//     ];

//     return (
//         <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
//             <Navbar />

//             {/* Hero Section */}
//             <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
//                 <div className="absolute inset-0 z-0">
//                     <img
//                         src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
//                         alt="Metabolic Health"
//                         className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
//                 </div>

//                 <div className="container mx-auto px-6 relative z-10 text-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-indigo-200 uppercase bg-indigo-900/30 rounded-full border border-indigo-500/30">
//                             Metabolic Restoration Program
//                         </span>
//                         <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
//                             Metabolic Syndrome & <br /> Obesity Reversal Program
//                         </h1>
//                         <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-50 mb-10 leading-relaxed font-medium">
//                             Sustainable Weight Loss Is Not About Starving. <br />
//                             It Is About Restoring Metabolic Intelligence.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Struggling With Section */}
//             <section className="py-20 bg-gray-50">
//                 <div className="container mx-auto px-6">
//                     <div className="max-w-5xl mx-auto">
//                         <div className="text-center mb-16">
//                             <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Are you struggling with?</h2>
//                             <p className="text-lg text-gray-600 italic">You are not alone — and this is reversible.</p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                             {[
//                                 "Abdominal obesity",
//                                 "Insulin resistance or prediabetes",
//                                 "Type 2 diabetes",
//                                 "High triglycerides",
//                                 "Fatty liver",
//                                 "High blood pressure",
//                                 "Chronic fatigue",
//                                 "Weight regain despite dieting"
//                             ].map((item, idx) => (
//                                 <div key={idx} className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
//                                     <div className="w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
//                                     <span className="font-semibold text-gray-800">{item}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Different Approach Section */}
//             <section className="py-24 bg-white relative overflow-hidden">
//                 <div className="container mx-auto px-6 relative z-10">
//                     <div className="flex flex-col lg:flex-row gap-16 items-center">
//                         <div className="lg:w-1/2">
//                             <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
//                                 What Makes Our <br /> Program Different?
//                             </h2>
//                             <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8"></div>
//                             <p className="text-xl text-gray-700 mb-10 leading-relaxed">
//                                 We don’t treat weight. <span className="font-bold text-blue-700 italic">We treat the metabolic dysfunction causing the weight gain.</span>
//                             </p>
//                             <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//                                 Instead of calorie restriction alone, we correct:
//                             </p>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                 {[
//                                     "Mitochondrial dysfunction",
//                                     "Chronic inflammation",
//                                     "Hormonal imbalance",
//                                     "Insulin resistance",
//                                     "Gut dysbiosis",
//                                     "Liver congestion",
//                                     "Stress-induced metabolic slowdown"
//                                 ].map((item, idx) => (
//                                     <div key={idx} className="flex gap-3 items-center">
//                                         <CheckCircle2 className="text-blue-600 w-5 h-5 shrink-0" />
//                                         <span className="font-medium text-gray-800">{item}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="lg:w-1/2">
//                             <div className="bg-indigo-900 p-10 md:p-12 rounded-[3.5rem] text-white shadow-2xl">
//                                 <h3 className="text-2xl font-bold mb-8 italic">Who Is This Program For?</h3>
//                                 <div className="space-y-4">
//                                     {[
//                                         "Have Metabolic Syndrome",
//                                         "Are overweight or obese",
//                                         "Have Prediabetes or Type 2 Diabetes",
//                                         "Have Fatty Liver (NAFLD)",
//                                         "Have high triglycerides or low HDL",
//                                         "Have PCOS with weight gain",
//                                         "Are at high risk of heart disease",
//                                         "Have failed conventional diet programs"
//                                     ].map((item, idx) => (
//                                         <div key={idx} className="flex gap-4 items-center">
//                                             <div className="bg-white/20 p-1.5 rounded-lg">
//                                                 <CheckCircle2 className="text-indigo-200 w-5 h-5" />
//                                             </div>
//                                             <span className="font-medium text-indigo-50">{item}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* The 6 Phases */}
//             <section className="py-24 bg-gray-50">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our 6-Phase Metabolic Reversal Program</h2>
//                         <p className="text-gray-500 text-lg max-w-2xl mx-auto">A data-driven, physician-supervised pathway to restoring your body's natural metabolic intelligence.</p>
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

//             {/* Expected Outcomes */}
//             <section className="py-24 bg-white">
//                 <div className="container mx-auto px-6">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//                         <div>
//                             <h2 className="text-3xl md:text-4xl font-bold mb-8">Expected Outcomes</h2>
//                             <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
//                                 Our patients experience profound shifts in their health metrics and everyday vitality.
//                             </p>
//                             <div className="space-y-4">
//                                 {outcomes.map((item, idx) => (
//                                     <div key={idx} className="flex gap-4 items-center">
//                                         <div className="bg-green-100 p-2 rounded-full">
//                                             <CheckCircle2 className="text-green-600 w-5 h-5" />
//                                         </div>
//                                         <span className="font-semibold text-gray-800 text-lg">{item}</span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="bg-gray-900 p-10 md:p-16 rounded-[4rem] text-white">
//                             <h3 className="text-2xl md:text-3xl font-bold mb-8">Program Duration</h3>
//                             <div className="flex gap-6 items-start mb-10">
//                                 <div className="bg-blue-600 p-4 rounded-3xl">
//                                     <Activity className="w-8 h-8" />
//                                 </div>
//                                 <div>
//                                     <p className="text-3xl font-extrabold mb-2">4–12 Weeks</p>
//                                     <p className="text-blue-200">On-site intensive program</p>
//                                 </div>
//                             </div>
//                             <div className="border-t border-white/10 pt-8 mb-10">
//                                 <p className="text-lg text-gray-300 mb-4">Followed by:</p>
//                                 <p className="text-xl font-bold italic">Remote monitoring and metabolic coaching</p>
//                             </div>
//                             <div className="bg-red-900/40 p-6 rounded-2xl border border-red-500/20">
//                                 <p className="text-sm font-bold uppercase tracking-widest text-red-300 mb-3 flex items-center gap-2">
//                                     <ShieldCheck className="w-4 h-4" /> Who Should Not Delay Treatment?
//                                 </p>
//                                 <p className="text-sm text-red-100 leading-relaxed italic">
//                                     Early intervention prevents irreversible damage like Heart attack, Stroke, Kidney disease, Neuropathy, and Cognitive decline.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Why Tigris? */}
//             <section className="py-24 bg-indigo-900 text-white">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Why International Patients Choose Us</h2>
//                         <div className="h-1.5 w-24 bg-indigo-400 mx-auto rounded-full"></div>
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {[
//                             { title: "Physician-Led", desc: "Evidence-informed integrative therapies and functional medicine." },
//                             { title: "Personalized Care", desc: "Structured plans with transparent pricing and follow-up." },
//                             { title: "Safe Protocols", desc: "Safe IV protocols and multi-modal restorative strategies." },
//                             { title: "Healing Environment", desc: "A calm, supportive setting ideal for metabolic recovery." }
//                         ].map((item, idx) => (
//                             <div key={idx} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
//                                 <h4 className="text-xl font-bold mb-4 text-indigo-300">{item.title}</h4>
//                                 <p className="text-indigo-100 leading-relaxed text-sm">{item.desc}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* CTA Section */}
//             <section className="py-24 bg-white relative">
//                 <div className="container mx-auto px-6 text-center">
//                     <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-950 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
//                         <div className="absolute top-0 right-0 p-12 opacity-10">
//                             <Globe className="w-64 h-64" />
//                         </div>
//                         <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Book Your International Consultation</h2>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
//                             {[
//                                 { step: "1", text: "Schedule a Virtual Assessment", icon: <Brain /> },
//                                 { step: "2", text: "Receive a Personalized Roadmap", icon: <ListChecks /> },
//                                 { step: "3", text: "Begin Your Recovery Journey", icon: <Briefcase /> }
//                             ].map((item, i) => (
//                                 <div key={i} className="flex flex-col items-center gap-4">
//                                     <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-xl">
//                                         {item.step}
//                                     </div>
//                                     <p className="font-semibold text-lg">{item.text}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         <button className="bg-white text-indigo-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-indigo-50 transition transform hover:scale-105 shadow-xl relative z-10">
//                             Request Assessment
//                         </button>
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// };

// export default MetabolicSyndrome;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
  CheckCircle,
  Activity,
  Zap,
  ShieldCheck,
  Microscope,
  Apple,
  Droplets,
  HeartPulse,
  Brain,
  Syringe,
  Flame,
  Globe,
  ArrowRight,
  AlertTriangle,
  Calendar,
  Stethoscope,
  RefreshCw,
  Leaf,
  Check,
  AlertCircle,
  CheckCircle2,
  Dna,
} from "lucide-react";
// Importing specific icons from react-icons to complement Lucide
import { FaWeight, FaHeartbeat } from "react-icons/fa";
import { GiLiver } from "react-icons/gi";

const MetabolicSyndrome = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2400&auto=format&fit=crop"
            alt="Metabolic Health and Obesity Reversal"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/95 via-blue-900/90 to-teal-900/90" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Metabolic Syndrome & <br className="hidden sm:block" /> Obesity
              Reversal Program
            </h1>

            <p className="max-w-3xl mx-auto text-xl md:text-3xl text-teal-300 mb-6 leading-relaxed font-bold">
              Sustainable Weight Loss Is Not About Starving.
              <br className="hidden md:block" />
              <span className="text-white font-light">
                It Is About Restoring Metabolic Intelligence
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Struggling With Section */}
      <section className="py-10 md:py-15 bg-white relative overflow-hidden">
        {/* Abstract Background Detail */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 transform translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              If you are struggling with:
            </h2>
            <div className="flex justify-center gap-1">
              <div className="w-12 h-1.5 bg-teal-500 rounded-full"></div>
              <div className="w-4 h-1.5 bg-slate-200 rounded-full"></div>
              <div className="w-2 h-1.5 bg-slate-100 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 mb-20">
            {[
              "Abdominal obesity",
              "Insulin resistance or prediabetes",
              "Type 2 diabetes",
              "High triglycerides",
              "Fatty liver",
              "High blood pressure",
              "Chronic fatigue",
              "Weight regain despite dieting",
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-4 md:p-5 rounded-[2rem] border border-slate-100 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_16px_32px_-14px_rgba(20,184,166,0.15)] hover:border-teal-200"
              >
                {/* Decorative index indicator */}
                <span className="absolute top-4 right-6 text-slate-200 font-black text-5xl select-none pointer-events-none group-hover:text-slate-300 transition-colors duration-500">
                  {idx + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-teal-700 rounded-xl flex items-center justify-center mb-6 shadow-md transition-all duration-500 group-hover:bg-teal-600 group-hover:rotate-6">
                    <AlertCircle className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="font-semibold text-slate-800 text-base md:text-lg leading-snug text-right md:text-left group-hover:text-slate-950">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 py-6 px-10 md:px-14 rounded-[3rem] shadow-2xl shadow-slate-900/30 border border-slate-700">
              {/* Avatars */}
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-4 border-slate-800 flex items-center justify-center text-white
          ${
            i === 1 ? "bg-teal-500" : i === 2 ? "bg-emerald-500" : "bg-cyan-500"
          }`}
                  >
                    {i === 1 && <CheckCircle2 className="w-5 h-5 text-white" />}
                  </div>
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-slate-100 font-medium italic text-center leading-tight">
                You are not alone —{" "}
                <span className="text-teal-400 not-italic font-extrabold uppercase tracking-tight">
                  and this is reversible.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different & Who is it for */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Different */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-indigo-950">
                What Makes Our Program Different?
              </h2>
              <p className="text-xl font-bold text-gray-900 mb-2">
                We don’t treat weight.
              </p>
              <p className="text-xl font-medium text-indigo-700 italic mb-8">
                We treat the metabolic dysfunction causing the weight gain.
              </p>
              <p className="text-gray-700 mb-6 font-medium">
                Instead of calorie restriction alone, we correct:
              </p>

              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  {
                    text: "Mitochondrial dysfunction",
                    icon: <Flame className="w-5 h-5 text-orange-500" />,
                  },
                  {
                    text: "Chronic inflammation",
                    icon: <Activity className="w-5 h-5 text-red-500" />,
                  },
                  {
                    text: "Hormonal imbalance",
                    icon: <RefreshCw className="w-5 h-5 text-purple-500" />,
                  },
                  {
                    text: "Insulin resistance",
                    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
                  },
                  {
                    text: "Gut dysbiosis",
                    icon: <Apple className="w-5 h-5 text-green-500" />,
                  },
                  {
                    text: "Liver congestion",
                    icon: <GiLiver className="w-5 h-5 text-amber-600" />,
                  },
                  {
                    text: "Stress-induced metabolic slowdown",
                    icon: <Brain className="w-5 h-5 text-teal-500" />,
                  },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-sm shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-gray-800">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who is it for */}
            <div className="bg-indigo-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-900/20 text-white flex flex-col relative overflow-hidden">
              <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
                <FaWeight className="w-64 h-64" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">
                Who Is This Program For?
              </h2>
              <p className="text-indigo-200 mb-8 text-lg relative z-10">
                This program is ideal for patients who:
              </p>

              <ul className="space-y-4 relative z-10 flex-grow">
                {[
                  "Have Metabolic Syndrome",
                  "Are overweight or obese",
                  "Have Prediabetes or Type 2 Diabetes",
                  "Have Fatty Liver (NAFLD)",
                  "Have high triglycerides or low HDL",
                  "Have PCOS with weight gain",
                  "Are at high risk of heart disease",
                  "Have failed conventional diet programs",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="bg-indigo-800/50 p-2 rounded-lg border border-indigo-700/50 shrink-0">
                      <span className="text-teal-400 font-bold text-sm">✔</span>
                    </div>
                    <span className="font-medium text-indigo-50 text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 6 Phases Header */}
      <section className="py-16 bg-teal-900 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white flex items-center justify-center gap-4">
          <Stethoscope className="w-10 h-10 md:w-12 md:h-12 text-teal-300" />
          Our 6-Phase Metabolic Reversal Program
        </h2>
      </section>

      {/* Phases 1 & 2 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Phase 1 */}
            <div className="group relative bg-white/80  p-8 md:p-10 rounded-[2.5rem] border border-blue-100/50 flex flex-col h-full transition-all duration-500 overflow-hidden">
              {/* Decorative Background Element */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full  duration-500" />

              {/* Header Section */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                <div className="relative shrink-0">
                  <div className="relative p-5 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg shadow-blue-200">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Phase 1: Advanced <br className="hidden md:block" />{" "}
                    Functional Assessment
                  </h3>
                </div>
              </div>

              {/* Contextual Description */}
              <div className="relative mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-blue-200"></div>
                  <p className="font-bold text-gray-800">
                    Comprehensive Evaluation
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Our journey begins with deep-data diagnostics to map your
                  unique biological markers.
                </p>
              </div>

              {/* Data Points Grid */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 flex-grow">
                {[
                  "Metabolic panel",
                  "Insulin resistance markers",
                  "HOMA-IR",
                  "HbA1c",
                  "Lipid profile",
                  "Liver function",
                  "Inflammatory markers",
                  "Vitamin & mineral status",
                  "Body composition analysis",
                  "Hormone Mapping",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 border border-slate-100/50 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-300 group/item"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors duration-300">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Roadmap "Blueprint" */}
              <div className="relative mt-auto">
                <div className="relative p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 shadow-inner overflow-hidden">
                  <div className="relative flex items-center gap-4">
                    <div className="shrink-0 p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <RefreshCw className="w-5 h-5 text-blue-400 animate-spin-slow" />
                    </div>
                    <p className="text-sm md:text-base font-medium text-blue-50 leading-snug">
                      We design a{" "}
                      <span className="text-blue-400 font-bold italic">
                        personalized metabolic roadmap
                      </span>{" "}
                      based on your objective data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-green-50 rounded-2xl">
                  <Apple className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Phase 2: Precision Anti-Inflammatory Nutrition
                </h3>
              </div>

              <p className="font-bold text-gray-800 mb-3">
                Your nutrition plan is customized to:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Improve insulin sensitivity",
                  "Reverse fatty liver",
                  "Reduce visceral fat",
                  "Stabilize blood sugar",
                  "Reduce cravings",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-bold text-gray-800 mb-3">May include:</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Low-glycemic therapeutic plan",
                  "Time-restricted eating (if appropriate)",
                  "Mediterranean-style metabolic diet",
                  "High-fiber microbiome support",
                  "Protein-optimized fat-loss plan",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-800 bg-gray-50 p-3 rounded-lg border border-gray-100"
                  >
                    <Leaf className="w-5 h-5 text-green-600 shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 p-4 rounded-xl border border-red-100 text-center mt-auto">
                <p className="font-bold text-red-800 uppercase tracking-wide text-sm">
                  No starvation. No crash diets. No unsafe weight loss pills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases 3 & 4 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Phase 3 */}
            <div className="bg-orange-50/50 p-8 md:p-10 rounded-[2rem] border border-orange-100 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-orange-100 rounded-2xl">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Phase 3: Mitochondrial Activation & Hormonal Reset
                </h3>
              </div>
              <p className="font-bold text-gray-900 mb-6 text-lg">
                We restore cellular energy production.
              </p>

              <p className="font-bold text-gray-800 mb-4">
                Support may include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 flex-grow">
                {[
                  "Magnesium",
                  "Alpha-lipoic acid",
                  "Omega-3 fatty acids",
                  "Vitamin D optimization",
                  "Chromium & zinc",
                  "Berberine or plant insulin sensitizers",
                  "Adaptogens for stress regulation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-orange-100/50 p-5 rounded-xl border border-orange-200 mt-auto text-center">
                <p className="font-bold text-orange-900">
                  Goal: Shift the body from fat storage mode to fat burning
                  mode.
                </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-purple-50/50 p-8 md:p-10 rounded-[2rem] border border-purple-100 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-purple-100 rounded-2xl">
                  <Syringe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Phase 4: Advanced IV Metabolic Therapy
                </h3>
              </div>
              <p className="text-gray-700 italic mb-6 border-b border-purple-200/50 pb-4">
                For selected patients requiring accelerated recovery.
              </p>

              <p className="font-bold text-gray-800 mb-4">
                IV Nutritional Therapy May Include:
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Magnesium",
                  "B-Complex",
                  "Vitamin C",
                  "Alpha-Lipoic Acid",
                  "N-Acetyl Cysteine (NAC) – Glutathione support & fatty liver reversal",
                  "L-Carnitine (Levocarnitine) – Mitochondrial fat metabolism activation",
                  "Amino acids",
                  "Trace minerals",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                  >
                    <Droplets className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-white p-5 rounded-xl border border-purple-100 mt-auto">
                <p className="font-bold text-purple-900 mb-3">Goals:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Improve mitochondrial energy",
                    "Enhance fat oxidation",
                    "Reduce oxidative stress",
                    "Improve insulin sensitivity",
                    "Support liver detoxification",
                    "Reduce fatigue",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-purple-500 shrink-0" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases 5 & 6 */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Phase 5 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-amber-50 rounded-2xl">
                  <GiLiver className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Phase 5: Detox & Liver Restoration
                </h3>
              </div>
              <p className="font-bold text-gray-900 text-lg mb-6 p-4 bg-amber-50/50 rounded-xl border border-amber-100">
                Metabolic syndrome is closely linked to fatty liver and toxin
                burden.
              </p>

              <p className="font-bold text-gray-800 mb-4">We incorporate:</p>
              <ul className="space-y-4 mb-8 flex-grow">
                {[
                  "Structured liver detox protocols",
                  "Nutritional detoxification support",
                  "Gut microbiome repair",
                  "Fiber therapy",
                  "Anti-inflammatory gut healing",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-lg text-gray-800"
                  >
                    <div className="bg-amber-100/50 p-2 rounded-lg shrink-0">
                      <RefreshCw className="w-5 h-5 text-amber-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 6 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-red-50 rounded-2xl">
                  <FaHeartbeat className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Phase 6: Cardiometabolic Protection
                </h3>
              </div>

              <p className="font-bold text-gray-800 mb-4">
                For patients at risk of heart disease:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Advanced lipid optimization",
                  "Endothelial support",
                  "Blood pressure stabilization",
                  "Vascular inflammation reduction",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-auto">
                <p className="font-bold text-gray-900 mb-2 border-b border-slate-200 pb-2">
                  When indicated, we may include:
                </p>
                <p className="font-bold text-red-800 text-lg mt-3 mb-2">
                  Enhanced External Counterpulsation (EECP)
                </p>
                <p className="text-gray-700 text-sm mb-4 italic">
                  A non-invasive therapy that improves blood circulation and
                  supports cardiovascular function.
                </p>

                <p className="font-bold text-gray-800 text-sm mb-2">
                  Ideal for:
                </p>
                <ul className="space-y-1">
                  {[
                    "Patients with early heart disease",
                    "Diabetics with vascular risk",
                    "Those with reduced exercise tolerance",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600 text-sm"
                    >
                      <div className="w-1 h-1 bg-red-400 rounded-full shrink-0"></div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Expected Outcomes */}
      <section className="py-14 md:py-12 bg-white relative overflow-hidden">
        {/* Modern Architectural Accents */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-50 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px]" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Clinical Success Metrics
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
                Expected Outcomes
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Through our integrative approach, patients typically observe
                significant,
                <span className="text-teal-600 font-bold">
                  {" "}
                  measurable improvements
                </span>{" "}
                across key metabolic markers:
              </p>
            </div>
            <div className="hidden lg:block h-[2px] flex-grow bg-slate-100 mx-12 mb-5 rounded-full"></div>
          </div>

          {/* Outcome Grid - "Laboratory Card" Design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              "Improved insulin sensitivity",
              "Reduction in HbA1c",
              "Reduction in triglycerides",
              "Improved HDL",
              "Fatty liver improvement",
              "Reduced waist circumference",
              "Increased energy",
              "Reduced blood pressure",
              "Sustainable fat loss",
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-between bg-white p-7 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_-15px_rgba(20,184,166,0.15)] hover:border-teal-200 transition-all duration-500"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-teal-600 group-hover:border-teal-600 transition-all duration-500">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-bold text-slate-800 text-lg group-hover:text-slate-950 transition-colors">
                    {item}
                  </span>
                </div>

                {/* Subtle Visual Metric Indicator */}
                <div className="flex items-center gap-0.5">
                  <div className="w-1 h-3 bg-teal-100 rounded-full group-hover:bg-teal-500 transition-colors"></div>
                  <div className="w-1 h-5 bg-teal-100 rounded-full group-hover:bg-teal-500 transition-colors"></div>
                  <div className="w-1 h-4 bg-teal-200 rounded-full group-hover:bg-teal-600 transition-colors"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Medication Reduction Card (Light Version) */}
          <div className="mt-12">
            <div className="relative overflow-hidden bg-slate-900 p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-800">
              {/* Background Graphic */}
              <div className="absolute right-0 top-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
                <HeartPulse className="w-96 h-96 text-white" />
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-[2rem] shadow-xl shadow-teal-500/20 flex items-center justify-center rotate-3 shrink-0">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                      Reduced dependency <br className="hidden md:block" /> on
                      medications
                    </h4>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20">
                      <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                      <span className="text-teal-400 font-bold uppercase text-[10px] tracking-widest">
                        Supervised Medical Protocol Required
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-auto">
                  <div className="px-10 py-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block mb-2">
                      Primary Goal
                    </span>
                    <span className="text-white font-black text-3xl tracking-tighter uppercase">
                      Metabolic Stability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why International Patients Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-6 flex items-center justify-center gap-3">
              <Globe className="w-10 h-10 text-blue-600" />
              Why International Patients Choose Us
            </h2>
            <p className="text-xl text-gray-600 italic">
              At Tigris Valley Wellness Centre we provide:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {[
              "Physician-led functional medicine",
              "Evidence-informed integrative therapies",
              "Safe IV protocols",
              "Personalized care plans",
              "Structured follow-up",
              "Transparent pricing",
              "Medical coordination for traveling patients",
              "Calm, healing environment",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-blue-500 mb-3" />
                <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-extrabold text-indigo-900 bg-indigo-50 inline-block py-6 px-10 rounded-full border border-indigo-100">
              We combine science, clinical experience, and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Duration & Warning Grid */}
      <section className="py-16 md:py-24 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Duration */}
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 flex flex-col justify-center items-center text-center">
              <Calendar className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Program Duration
              </h3>
              <p className="text-gray-500 uppercase tracking-widest font-bold text-sm mb-4">
                Typical program:
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">
                4–12 weeks{" "}
                <span className="text-2xl text-gray-800">on-site</span>
              </p>
              <div className="w-16 h-1 bg-slate-200 my-6"></div>
              <p className="text-xl font-medium text-gray-700">
                Followed by remote monitoring and metabolic coaching
              </p>
            </div>

            {/* Warning */}
            <div className="bg-red-900 p-10 md:p-16 rounded-[3rem] shadow-xl text-white flex flex-col justify-center relative overflow-hidden">
              <AlertTriangle className="absolute -top-10 -right-10 w-64 h-64 text-red-950/50 pointer-events-none" />
              <h3 className="text-3xl font-bold mb-8 relative z-10 flex items-center gap-4">
                <AlertTriangle className="w-10 h-10 text-red-400" />
                Who Should Not Delay Treatment?
              </h3>
              <p className="text-xl text-red-100 mb-8 relative z-10">
                Metabolic syndrome silently increases risk of:
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
                {[
                  "Type 2 Diabetes",
                  "Heart attack",
                  "Stroke",
                  "Kidney disease",
                  "Neuropathy",
                  "Cognitive decline",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg font-medium"
                  >
                    <div className="w-2 h-2 bg-red-400 rounded-full shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-white text-red-900 p-5 rounded-xl font-bold text-lg text-center relative z-10 border border-red-200">
                Early intervention prevents irreversible damage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-900 to-blue-950 p-10 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10 relative z-10">
              Book Your International Consultation
            </h2>

            <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light relative z-10">
              If you are ready to:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
              {[
                "Reverse metabolic dysfunction",
                "Prevent diabetes complications",
                "Reduce medication dependency",
                "Achieve sustainable weight loss",
              ].map((item, i) => (
                <span
                  key={i}
                  className="bg-white/10 border border-white/20 py-2 px-6 rounded-full font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-2xl font-bold mb-12 text-white relative z-10">
              Our team is ready to guide you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
              {[
                {
                  text: "Schedule a Virtual Assessment",
                  icon: <Calendar className="w-8 h-8" />,
                },
                {
                  text: "Receive a Personalized Metabolic Roadmap",
                  icon: <Activity className="w-8 h-8" />,
                },
                {
                  text: "Begin Your Recovery Journey",
                  icon: <ArrowRight className="w-8 h-8" />,
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-300">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-lg px-4">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetabolicSyndrome;