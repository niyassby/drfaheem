
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
  Sparkles,
  Microscope,
  Activity,
  Droplets,
  Leaf,
  Flower2,
  RefreshCcw,
  Zap,
  Moon,
  Check,
  ShieldAlert,
  Target,
  Syringe,
  HeartPulse,
  Clock,
  ArrowRight,
  CheckCircle2,
  Apple,
  AlertCircle,
} from "lucide-react";
import { GiLiver } from "react-icons/gi";
import { FaDna } from "react-icons/fa";

const SkinRevitalization = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 w-full overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <Navbar />

      {/* --- Hero Section (Cinematic Editorial UI) --- */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2070&auto=format&fit=crop"
            alt="Skin Revitalization and Wellness"
            className="w-full h-full object-cover object-center scale-105"
          />

          {/* Gradients */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-[#3a1f25]/60 via-[#6b2d3d]/60 to-transparent"></div> */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3a1f25]/40 via-transparent to-[#6b2d3d]/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >

            <h1 className="text-5xl md:text-6xl md:mt-20 mt-20 lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              {/* Skin Revitalization <br className="hidden md:block" /> Program */}
              Advanced Functional & Integrative Skin Revitalization Program
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-rose-100/90 italic tracking-wide leading-relaxed text-center py-2 max-w-2xl mx-auto">
              Restore Skin Intelligence. Radiate From Within. Age With Cellular
              Confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Introduction Section (Separated & Sophisticated Layout) --- */}
      <section className="py-14 md:py-12 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-rose-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-slate-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Column: Bold Philosophy Statement */}
            <div className="lg:col-span-7">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 border border-rose-100 shadow-sm">
                <HeartPulse className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
                At Tigris Valley, skin is not treated as a
                cosmetic surface —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                  it is understood as a biological mirror
                </span>{" "}
                of gut health, hormonal balance, detox efficiency, mitochondrial
                strength, and inflammatory load.
              </h2>
            </div>

            {/* Right Column: Program Definition Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                {/* Dark Card Subtle Glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-rose-500/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-rose-400/30 transition-colors duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-6">
                    <Sparkles className="w-6 h-6 text-rose-300" />
                    <span className="text-rose-100 font-bold uppercase tracking-widest text-sm">
                      The Protocol
                    </span>
                  </div>

                  <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                    Our Advanced Functional & Integrative Skin Revitalization
                    Program is a premium, physician-guided, personalized
                    protocol designed to reverse dullness, premature ageing,
                    acne, pigmentation, and hormonal skin instability — by
                    correcting the root cause.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Conventional Skincare Fails --- */}
      <section className="py-20 bg-rose-50 border-y border-rose-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white text-rose-600 rounded-xl mb-6 shadow-sm border border-rose-100">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Why Conventional Skincare Fails
              </h2>
              <p className="text-2xl font-bold text-rose-600 mb-6">
                Most treatments suppress symptoms.
              </p>
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-10">
                Creams, peels, lasers, and steroids may provide temporary
                improvement — but if insulin resistance, thyroid dysfunction,
                gut inflammation, micronutrient deficiency, or oxidative stress
                persist, the skin will relapse.
              </p>
              <div className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-black tracking-widest uppercase shadow-lg">
                <Leaf className="w-5 h-5 text-rose-400" />
                We treat the terrain.
              </div>
            </div>

            <div className="lg:w-1/2 w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-rose-100">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
                alt="Dermatologist examining patient skin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Phases (1 & 2 Wide Layout) --- */}
      <section className="py-14 md:py-16 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="space-y-12">
            {/* Phase 1 */}
            <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center border border-slate-200 shrink-0">
                    <Microscope className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                      Phase 1: Precision Functional Skin Assessment
                    </h3>
                    <p className="text-lg text-slate-500 font-medium italic">
                      Every program begins with advanced evaluation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                {/* Panel 1 */}
                <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-md transition-shadow">
                  <p className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-3 border-b border-blue-200 pb-4">
                    <FaDna className="text-blue-500" /> Metabolic & Hormonal
                    Panel
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Fasting insulin & HOMA-IR",
                      "Complete thyroid profile (TSH, Free T3, Free T4, Anti-TPO)",
                      "Estrogen, Progesterone, Testosterone, DHEA-S",
                      "Cortisol rhythm assessment",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Panel 2 */}
                <div className="bg-rose-50/50 p-8 rounded-3xl border border-rose-100 hover:shadow-md transition-shadow">
                  <p className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-3 border-b border-rose-200 pb-4">
                    <Activity className="text-rose-500" /> Inflammation &
                    Nutrient Mapping
                  </p>
                  <ul className="space-y-4">
                    {[
                      "hs-CRP",
                      "Vitamin D",
                      "B12",
                      "Ferritin",
                      "Zinc/Copper balance",
                      "Omega-3 index",
                      "Liver detox markers",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                      >
                        <div className="w-2 h-2 bg-rose-500 rounded-full mt-1.5 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Panel 3 */}
                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100 hover:shadow-md transition-shadow">
                  <div className="mb-6 border-b border-emerald-200 pb-4">
                    <p className="font-bold text-slate-900 text-xl flex items-center gap-3">
                      <RefreshCcw className="text-emerald-500" /> Gut–Skin Axis
                      Evaluation
                    </p>
                    <span className="block text-xs font-bold text-emerald-600 uppercase tracking-widest mt-2 ml-9">
                      (When Indicated)
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Dysbiosis screening",
                      "Food sensitivity mapping",
                      "Intestinal permeability markers",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-1.5 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-6 rounded-2xl text-center shadow-xl">
                <p className="font-bold text-lg tracking-wide flex items-center justify-center gap-3">
                  <AlertCircle className="w-6 h-6 text-rose-400" />
                  This allows us to build a biologically intelligent protocol —
                  not a cosmetic one.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12 border-b border-slate-100 pb-8">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center border border-amber-200 shrink-0">
                  <Sparkles className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    Phase 2: Personalized Cellular Nutrition Protocol
                  </h3>
                  <p className="text-lg text-slate-500 font-medium italic">
                    Designed to calm inflammation and stimulate collagen
                    regeneration.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-10">
                <div className="bg-amber-50/30 p-8 rounded-3xl border border-amber-100">
                  <p className="font-black text-2xl text-amber-900 mb-8 flex items-center gap-3">
                    <Apple className="w-8 h-8 text-amber-500" />{" "}
                    Anti-Inflammatory Skin Nutrition Plan
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Low glycemic, insulin-balancing structure",
                      "High phytonutrient antioxidant foods",
                      "Omega-3 optimization",
                      "Collagen-supportive amino acids",
                      "Gut-repair nutrients",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 font-semibold text-slate-700 text-lg"
                      >
                        <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal-50/30 p-8 rounded-3xl border border-teal-100">
                  <p className="font-black text-2xl text-teal-900 mb-8 flex items-center gap-3">
                    <Target className="w-8 h-8 text-teal-500" /> Targeted
                    Medical-Grade Supplementation
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Hydrolyzed collagen peptides",
                      "Liposomal or buffered Vitamin C",
                      "Zinc with copper balance",
                      "Vitamin A precursors",
                      "Omega-3 fatty acids",
                      "Glutathione support",
                      "Probiotics for gut-skin repair",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 font-semibold text-slate-700 text-lg"
                      >
                        <CheckCircle2 className="w-6 h-6 text-teal-500 shrink-0" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <span className="inline-block bg-slate-100 text-slate-600 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest border border-slate-200">
                  All dosages are personalized.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Treatment Phases Grid (Phases 3 to 8) --- */}
      <section className="py-10 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Phase 3 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[1.5rem] border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 hover:border-purple-300 transition-all duration-500 flex flex-col h-full group">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Syringe className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-3">
                Phase 3: IV Nutritional Skin Therapy
              </h4>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 mb-4 bg-purple-100/50 w-fit px-3 py-1.5 rounded-md border border-purple-200">
                Optional, Time-Efficient
              </p>
              <p className="text-slate-600 font-medium mb-8 italic">
                For patients seeking accelerated results or with busy schedules.
              </p>
              <ul className="space-y-4 flex-grow mb-8">
                {[
                  "High-dose Vitamin C infusion",
                  "Glutathione IV for pigmentation & oxidative stress",
                  "Zinc + B-complex infusion",
                  "Amino acid collagen blends",
                  "NAD+ support (selected candidates)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-1.5 shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white border border-slate-200 p-4 rounded-xl text-center mt-auto shadow-sm">
                <p className="text-xs font-bold text-slate-500">
                  Patients may choose IV-only protocols if time is limited.
                </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[1.5rem] border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 hover:border-rose-300 transition-all duration-500 flex flex-col h-full group">
              <div className="w-14 h-14 bg-rose-100 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <Flower2 className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">
                Phase 4: AYUSH-Based Rasayana Rejuvenation
              </h4>
              <p className="text-slate-600 font-medium mb-8 italic">
                Ancient longevity science integrated with modern diagnostics.
              </p>
              <ul className="space-y-4 flex-grow mb-8">
                {[
                  "Ayurvedic Rasayana formulations for skin vitality",
                  "Pitta-balancing & blood-purifying botanicals",
                  "Herbal detoxification support",
                  "Siddha/Unani rejuvenators when indicated",
                  "Gut-cooling therapies for inflammatory skin",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white border border-slate-200 p-4 rounded-xl text-center mt-auto shadow-sm">
                <p className="text-xs font-bold text-slate-500">
                  Each therapy is selected based on prakriti and metabolic
                  findings.
                </p>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[1.5rem] border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 hover:border-teal-300 transition-all duration-500 flex flex-col h-full group">
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">
                Phase 5: Acupuncture & Meridian Optimization
              </h4>
              <p className="text-slate-600 font-medium mb-8 italic">
                Skin reflects organ pathways.
              </p>
              <ul className="space-y-4 flex-grow mb-8">
                {[
                  "Liver meridian regulation (acne & pigmentation)",
                  "Lung meridian support (dryness & barrier health)",
                  "Hormonal axis modulation",
                  "Facial rejuvenation acupuncture",
                  "Micro-needling integration when appropriate",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-1.5 shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white border border-slate-200 p-4 rounded-xl text-center mt-auto shadow-sm">
                <p className="text-xs font-bold text-slate-500">
                  Patients may opt exclusively for Acupuncture protocols if
                  preferred.
                </p>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[1.5rem] border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all duration-500 flex flex-col h-full group">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <RefreshCcw className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">
                Phase 6: Hormonal & Metabolic Reset
              </h4>
              <p className="text-slate-600 font-medium mb-8 italic">
                We correct internal drivers of skin instability:
              </p>
              <ul className="space-y-4 flex-grow mb-8">
                {[
                  "Insulin resistance–related acne",
                  "PCOD-associated breakouts",
                  "Thyroid-induced dryness",
                  "Perimenopausal collagen loss",
                  "Cortisol-related premature ageing",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <Activity className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-xl text-center mt-auto">
                <p className="text-xs font-bold text-indigo-900">
                  This is especially important for women with metabolic syndrome
                  or hormonal imbalance.
                </p>
              </div>
            </div>

            {/* Phase 7 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[1.5rem] border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 hover:border-emerald-300 transition-all duration-500 flex flex-col h-full group">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">
                Phase 7: Detoxification & Mitochondrial Repair
              </h4>
              <p className="text-slate-600 font-medium mb-8 italic">
                Healthy skin requires cellular energy.
              </p>
              {/* <div className="mb-6 rounded-2xl overflow-hidden shadow-sm">
                [Image of human cell mitochondria diagram]
              </div> */}
              <ul className="space-y-4 flex-grow mb-8">
                {[
                  "Phase 1 & Phase 2 liver optimization",
                  "Glutathione enhancement",
                  "Mitochondrial nutrients (CoQ10, Alpha Lipoic Acid, NAC)",
                  "Infrared sauna (if suitable)",
                  "Structured hydration strategies",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <GiLiver className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 8 */}
            <div className="bg-slate-950 p-8 md:p-10 rounded-[1.5rem] border border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-amber-500/50 transition-all duration-500 flex flex-col h-full group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-amber-400/20 transition-colors duration-700"></div>
              <div className="w-14 h-14 bg-slate-800 text-amber-400 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:bg-amber-500 group-hover:text-white transition-colors relative z-10">
                <Moon className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-white mb-8 relative z-10">
                Phase 8: Lifestyle Skin Bio-Optimization
              </h4>
              <ul className="space-y-4 flex-grow relative z-10 mt-2">
                {[
                  "Circadian rhythm correction",
                  "Deep sleep restoration",
                  "Stress modulation protocol",
                  "Blue light protection strategies",
                  "Non-toxic barrier-supportive skincare guidance",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-700 font-semibold text-slate-300"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Target Audience & Outcomes --- */}
      <section className="py-14 md:py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Who Is This For */}
            <div className="bg-white p-10 md:p-14 lg:p-16 rounded-[1.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 flex items-center gap-4">
                <Sparkles className="w-10 h-10 text-rose-500" /> Who Is This
                Program For?
              </h2>
              <ul className="space-y-5 flex-grow">
                {[
                  "Persistent acne resistant to dermatologic treatment",
                  "Pigmentation & melasma",
                  "Dull, lifeless skin",
                  "Early fine lines & collagen loss",
                  "PCOD-related skin changes",
                  "Thyroid-related dryness",
                  "Post-illness skin recovery",
                  "Individuals seeking natural glow without aggressive cosmetic procedures",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 font-bold text-slate-800 text-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center shrink-0 border border-rose-200 shadow-sm mt-0.5">
                      <Check className="w-3.5 h-3.5 text-rose-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes (Light & Green Theme) */}
            <div className="bg-slate-950 text-white p-10 md:p-14 lg:p-16 rounded-[1.5rem] shadow-2xl flex flex-col h-full relative overflow-hidden border border-slate-800">
              {/* Deep Dark Ambient Glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <h2 className="text-3xl md:text-5xl font-black mb-10 flex items-center gap-4 relative z-10 text-white">
                <Target className="w-10 h-10 text-emerald-400" /> Expected
                Outcomes
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 relative z-10 flex-grow">
                {[
                  { text: "Reduced inflammation & acne" },
                  { text: "Improved collagen firmness" },
                  { text: "Balanced skin tone" },
                  { text: "Reduced pigmentation" },
                  { text: "Hormonal stability" },
                  { text: "Enhanced radiance & glow" },
                  {
                    text: "Improved hair density",
                    subtext: "(when metabolically linked)",
                    fullWidth: true,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`bg-slate-900/80  p-6 rounded-2xl border border-slate-800 shadow-sm flex items-start gap-4 hover:shadow-lg hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 ${item.fullWidth ? "sm:col-span-2" : ""
                      }`}
                  >
                    <Sparkles className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                      <span className="font-bold text-slate-100 text-lg">
                        {item.text}
                      </span>
                      {item.subtext && (
                        <span className="text-emerald-400/90 font-medium text-sm tracking-wide">
                          {item.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Duration & Modularity --- */}
      <section className="py-14 md:py-16 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-rose-50/40 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Side: Duration Hero */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-8 border border-rose-100 shadow-sm">
                <Clock className="w-8 h-8" />
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
                Program Duration
              </h2>

              <div className="mb-10">
                <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm mb-3">
                  Typically
                </p>
                <p className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter flex items-baseline gap-3">
                  8–16{" "}
                  <span className="text-3xl md:text-4xl text-slate-400 font-bold tracking-normal">
                    weeks
                  </span>
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                <p className="text-lg font-bold text-slate-800 mb-6">
                  Depending on:
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Severity",
                    "Metabolic findings",
                    "Chosen therapy modules",
                    "Time availability",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl font-semibold text-slate-700 shadow-sm text-sm hover:border-rose-300 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Modularity Card */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 p-8 md:p-12 lg:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
                {/* Decorative Hover Glow */}
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-500/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-rose-400/30 transition-colors duration-700"></div>

                <div className="relative z-10">
                  <p className="font-black text-2xl md:text-3xl text-white mb-10 leading-snug">
                    Because this is a personalized protocol, patients may:
                  </p>

                  <ul className="flex flex-col gap-4">
                    {[
                      "Combine IV + AYUSH + Acupuncture",
                      "Choose Integrative Traditional Therapies only",
                      "Select IV-accelerated track",
                      "Opt for metabolic correction-only pathway",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-5 p-5 lg:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:bg-slate-800 hover:border-rose-500/50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner group-hover:bg-rose-500/10 transition-colors">
                          <Check className="w-6 h-6 text-rose-400" />
                        </div>
                        <span className="font-bold text-slate-200 text-lg leading-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Philosophy Footer (Light & Green Theme) --- */}
      <section className="py-14 md:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        {/* Soft Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71c9?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Soft Emerald Gradient & Ambient Glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-50/80 via-white/90 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center flex flex-col items-center">
          {/* Icon Container */}
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-emerald-100 shadow-[0_8px_30px_rgb(16,185,129,0.12)]">
            <Leaf className="w-8 h-8 text-emerald-500" />
          </div>

          <h2 className="text-sm font-black text-emerald-700 uppercase tracking-[0.3em] mb-8">
            Our Philosophy
          </h2>

          <p className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
            Skin does not need suppression. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 pb-2">
              It needs restoration of biological intelligence.
            </span>
          </p>

          <div className="h-px w-24 bg-emerald-200 mb-8"></div>

          <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed max-w-3xl mx-auto italic">
            At Tigris Valley, we do not chase symptoms —{" "}
            <br className="hidden md:block" />
            we rebuild the internal terrain that allows your skin to thrive
            naturally.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkinRevitalization;