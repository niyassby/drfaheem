import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
  Microscope,
  Apple,
  Syringe,
  Wind,
  Activity,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Sparkles,
  Heart,
  Baby,
  Target,
  Brain,
  Droplets,
  Leaf,
  Calendar,
  Stethoscope,
  Dna,
  ArrowRight,
  RefreshCcw,
  Flower2,
  HeartPulse,
  ShieldAlert,
  Check,
  Clock,
  MapPin,
} from "lucide-react";
import { FaFemale, FaMale, FaVenusMars } from "react-icons/fa";
import { motion } from "framer-motion";
const FertilityRestoration = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden selection:bg-rose-200 selection:text-rose-900">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative h-[80vh] md:h-[100vh] md:pt-25 pt-18  flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=2069&auto=format&fit=crop"
            alt="Heart Health"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Integrative Fertility Restoration Program
              </h1>

              {/* Sub Heading */}
              <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                Functional Medicine for Natural Conception & IVF Support
              </h2>
            </div>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
              Fertility is not just a reproductive issue. It is a reflection of
              metabolic health, hormone balance, inflammation status,
              mitochondrial function, stress resilience, and vascular
              circulation.
            </p>

            {/* Horizontal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="bg-white/10  border border-white/20 text-white px-6 md:px-10 py-4 rounded-full max-w-4xl w-full md:w-auto shadow-lg">
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  At Tigris Valley Wellness Centre, we focus on restoring the
                  internal environment required for healthy ovulation, sperm
                  quality, implantation, and pregnancy.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* --- Who Is This Program For --- */}
      <section className="py-14 md:py-12 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-rose-500 mb-6 shadow-sm border border-slate-200">
              <Dna className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Who is this Program For?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              Addressing fertility challenges from a comprehensive metabolic and
              functional perspective.
            </p>
          </div>

          {/* 3-Column Equal Height Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Women */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200  shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(244,63,94,0.08)]  transition-all duration-300 flex flex-col relative overflow-hidden group">
              <FaFemale
                className="absolute -bottom-10 -right-10 
             w-44 h-44 
             text-rose-100 
             pointer-events-none 
             transition-all duration-500 ease-out 
             group-hover:scale-103 
             group-hover:text-rose-200"
              />
              <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6 relative z-10">
                <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shadow-sm border border-rose-100 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  <FaFemale className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Women with:
                </h3>
              </div>

              <ul className="space-y-4 relative z-10 flex-grow">
                {[
                  "PCOS / PCOD",
                  "Irregular cycles",
                  "Poor ovarian reserve",
                  "Recurrent implantation failure",
                  "Endometriosis",
                  "Unexplained infertility",
                  "Recurrent miscarriages",
                  "Thyroid-related fertility issues",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-semibold text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center shrink-0 mt-0.5 border border-rose-100">
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Men */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200  shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.08)]  transition-all duration-300 flex flex-col relative overflow-hidden group">
              <FaMale className="absolute -bottom-10 -right-10 w-44 h-44 text-blue-100 group-hover:text-blue-200  pointer-events-none group-hover:scale-103 transition-transform duration-500" />

              <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6 relative z-10">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <FaMale className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Men with:
                </h3>
              </div>

              <ul className="space-y-4 relative z-10 flex-grow">
                {[
                  "Low sperm count",
                  "Poor motility",
                  "Abnormal morphology",
                  "Oxidative stress",
                  "Erectile dysfunction",
                  "Metabolic syndrome",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-semibold text-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Couples */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.08)]  transition-all duration-300 flex flex-col relative overflow-hidden group md:col-span-2 lg:col-span-1">
              <FaVenusMars className="absolute -bottom-10 -right-10 w-44 h-44 text-purple-100 group-hover:text-purple-200 pointer-events-none group-hover:scale-103 transition-transform duration-500" />

              <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6 relative z-10">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shadow-sm border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <FaVenusMars className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Couples:</h3>
              </div>

              <ul className="space-y-5 relative z-10 flex-grow">
                {[
                  {
                    title: "Preparing for IVF / ICSI",
                    icon: <Sparkles className="w-4 h-4 text-purple-500" />,
                  },
                  {
                    title: "Wanting to improve egg & sperm quality before ART",
                    icon: <Activity className="w-4 h-4 text-purple-500" />,
                  },
                  {
                    title: "Seeking natural conception support",
                    icon: <Heart className="w-4 h-4 text-purple-500" />,
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 font-semibold text-slate-800 bg-slate-50/50 p-4 rounded-xl border border-slate-100"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                      {item.icon}
                    </div>
                    <span className="leading-snug">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- The Phases - Clinical Pathway --- */}
      <section className="py-14 md:py-12 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Phase 1 */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 lg:col-span-2">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 font-bold text-xs uppercase tracking-widest mb-4">
                    Diagnostics
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                    Phase 1: Comprehensive Fertility Mapping
                  </h3>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 p-0 flex items-center justify-center min-h-[160px] shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                      alt="Comprehensive Fertility Mapping Lab Testing"
                      className="w-full h-44 object-cover"
                    />{" "}
                  </div>
                </div>

                <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Women's List */}
                  <div className="bg-rose-50/50 p-6 md:p-8 rounded-3xl border border-rose-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-rose-200 pb-4">
                      <FaFemale className="w-5 h-5 text-rose-500" />
                      <p className="font-bold text-slate-900 text-lg">
                        For Women:
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "AMH",
                        "FSH, LH",
                        "Estradiol",
                        "Progesterone (luteal phase)",
                        "Prolactin",
                        "Thyroid profile",
                        "Fasting insulin & HOMA-IR",
                        "Vitamin D, B12, Magnesium",
                        "Inflammatory markers",
                        "Liver function",
                        "Ultrasound review",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                        >
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-rose-100 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Men's List */}
                  <div className="bg-blue-50/50 p-6 md:p-8 rounded-3xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-6 border-b border-blue-200 pb-4">
                      <FaMale className="w-5 h-5 text-blue-500" />
                      <p className="font-bold text-slate-900 text-lg">
                        For Men:
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Semen analysis",
                        "Sperm DNA fragmentation (if indicated)",
                        "Hormonal profile (Testosterone, LH, FSH)",
                        "Oxidative stress assessment",
                        "Metabolic screening",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                        >
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-blue-100 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 flex flex-col h-full group hover:border-emerald-200 transition-colors">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white text-emerald-600 transition-colors">
                <Apple className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-8">
                Phase 2: Fertility Nutrition Reset
              </h3>

              <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
                <p className="font-bold text-emerald-900 mb-4 uppercase tracking-wider text-xs">
                  Goals:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Improve insulin sensitivity",
                    "Reduce inflammation",
                    "Support mitochondrial function",
                    "Improve ovulation quality",
                    "Optimize sperm production",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm font-bold text-emerald-800"
                    >
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="font-bold text-slate-900 mb-4">Includes:</p>
              <ul className="space-y-3 flex-grow">
                {[
                  "Anti-inflammatory fertility diet",
                  "Insulin-reset plan (for PCOS)",
                  "Liver-support nutrition",
                  "Gut microbiome restoration",
                  "Time-restricted eating (case-based)",
                  "Targeted supplementation plan",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-100"
                  >
                    <Leaf className="w-4 h-4 text-emerald-500 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 flex flex-col h-full group hover:border-amber-200 transition-colors">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white text-amber-600 transition-colors">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-8">
                Phase 3: Hormonal Optimization Protocol
              </h3>

              <div className="flex flex-col gap-6 flex-grow">
                <div className="p-6 rounded-2xl border border-rose-100 bg-rose-50/30">
                  <p className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FaFemale className="text-rose-500" /> Women:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Ovulation support strategies",
                      "Progesterone support (if needed)",
                      "Thyroid optimization",
                      "PCOS insulin resistance correction",
                      "Endometrial support",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-sm font-semibold text-slate-700 flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl border border-blue-100 bg-blue-50/30">
                  <p className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <FaMale className="text-blue-500" /> Men:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Testosterone optimization (natural pathways)",
                      "Zinc, Selenium, CoQ10 support",
                      "Mitochondrial sperm energy support",
                      "Oxidative stress reduction",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="text-sm font-semibold text-slate-700 flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 lg:col-span-2 group hover:border-purple-200 transition-colors">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="lg:w-2/5">
                  <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white text-purple-600 transition-colors">
                    <Syringe className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">
                    Phase 4: IV Nutritional Fertility Therapy
                  </h3>
                  <p className="text-slate-600 font-medium mb-6">
                    Designed to improve egg and sperm mitochondrial quality.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                    <p className="font-bold text-slate-900 mb-4">
                      May include:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Vitamin C",
                        "B-complex",
                        "Magnesium",
                        "NAC",
                        "Alpha-lipoic acid",
                        "L-Carnitine",
                        "Amino acids",
                        "Trace minerals",
                      ].map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white border border-purple-200 rounded-lg text-sm font-bold text-purple-800 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5 w-full flex flex-col gap-6 h-full">
                  <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-lg">
                    <p className="font-bold mb-4 text-purple-300 uppercase tracking-widest text-xs">
                      Supports:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Egg mitochondrial function",
                        "Sperm motility",
                        "Endometrial receptivity",
                        "Reduced oxidative stress",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 font-semibold text-slate-200"
                        >
                          <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-cyan-50 p-6 md:p-8 rounded-2xl border border-cyan-200 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-cyan-200/50 pb-4">
                      <h4 className="text-xl font-bold text-cyan-900 flex items-center gap-2">
                        <Wind className="w-6 h-6" /> Ozone Therapy
                      </h4>
                      <span className="text-[10px] font-black uppercase tracking-[0.15em] bg-white border border-cyan-100 px-3 py-1.5 rounded-full text-cyan-700 w-fit">
                        Selected Candidates
                      </span>
                    </div>
                    <p className="font-bold text-slate-800 mb-4">
                      May support:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {[
                        "Improved oxygen utilization",
                        "Microcirculation enhancement",
                        "Anti-inflammatory balance",
                        "Tissue oxygenation",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm font-semibold text-slate-700"
                        >
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0"></div>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-white/60 p-3 rounded-xl border border-cyan-100/50 text-center">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Used carefully and only when indicated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 flex flex-col h-full group hover:border-slate-300 transition-colors">
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6 border border-slate-200 group-hover:bg-slate-800 group-hover:text-white text-slate-600 transition-colors">
                <RefreshCcw className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                Phase 5: Detox & Inflammation Reduction
              </h3>
              <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                Many fertility issues are driven by chronic inflammation and
                toxic burden.
              </p>
              <p className="font-bold text-slate-900 mb-4">We may include:</p>
              <ul className="space-y-3 flex-grow">
                {[
                  "Liver detox support",
                  "Environmental toxin reduction strategies",
                  "Gut repair protocol",
                  "Anti-inflammatory reset",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 font-semibold text-slate-700"
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 shrink-0">
                      <ShieldAlert className="w-4 h-4 text-slate-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 6 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-200 flex flex-col h-full group hover:border-teal-200 transition-colors">
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 border border-teal-100 group-hover:bg-teal-500 group-hover:text-white text-teal-600 transition-colors">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                Phase 6: Stress & Nervous System Regulation
              </h3>
              <p className="text-teal-700 font-bold mb-8 italic">
                Fertility is highly stress-sensitive.
              </p>
              <p className="font-bold text-slate-900 mb-4">Includes:</p>
              <ul className="space-y-3 flex-grow">
                {[
                  "Vagal tone activation",
                  "Breathwork",
                  "Sleep correction",
                  "Cortisol rhythm restoration",
                  "Mind-body fertility coaching",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-teal-50/50 p-4 rounded-2xl border border-teal-100 font-semibold text-slate-800"
                  >
                    <div className="p-2 bg-white rounded-lg shadow-sm border border-teal-100 shrink-0">
                      <Flower2 className="w-4 h-4 text-teal-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Adjunct Therapies */}
            <div className="bg-emerald-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">
              <Leaf className="absolute -top-10 -right-10 w-64 h-64 text-emerald-800 opacity-40 pointer-events-none" />
              <h3 className="text-2xl md:text-3xl font-black mb-8 relative z-10">
                AYUSH & Acupuncture <br /> Fertility Support
              </h3>
              <p className="font-bold text-emerald-300 mb-6 relative z-10 uppercase tracking-widest text-xs">
                May include:
              </p>
              <ul className="space-y-4 relative z-10 flex-grow">
                {[
                  "Ayurvedic reproductive tonics",
                  "Panchakarma-based hormonal balancing (when indicated)",
                  "Acupuncture for ovulation support",
                  "Uterine blood flow enhancement",
                  "IVF support acupuncture protocol",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-emerald-50 font-medium"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">
              <Dna className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-800 opacity-50 pointer-events-none" />
              <div className="relative z-10 mb-8 flex flex-col items-start gap-4">
                <h3 className="text-2xl md:text-3xl font-black leading-tight">
                  Advanced & Regenerative Options
                </h3>
                <span className="text-[10px] font-black bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-md uppercase tracking-[0.2em] text-slate-300">
                  Case-Based
                </span>
              </div>
              <p className="font-bold text-slate-400 mb-6 relative z-10 uppercase tracking-widest text-xs">
                For selected patients:
              </p>
              <ul className="space-y-4 mb-10 relative z-10 flex-grow">
                {[
                  "Exosome therapy (investigational, when indicated)",
                  "Platelet-based regenerative protocols",
                  "Advanced endometrial support strategies",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 font-medium text-slate-200"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-slate-500 shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-800/50 border border-slate-700/50 p-4 rounded-xl text-center relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Used only after comprehensive evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- IVF Protocol Section --- */}
      <section className="py-14 md:py-12 bg-indigo-950 text-white relative overflow-hidden border-y border-indigo-900">
        {/* Advanced Tech Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-5/12">
              <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-8 border border-indigo-800 shadow-lg">
                <Baby className="w-8 h-8 text-indigo-300" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                IVF Optimization <br /> Protocol
              </h2>
              <p className="text-xl text-indigo-200 font-medium mb-10 leading-relaxed">
                For couples preparing for ART:
              </p>

              <div className="mb-10 rounded-3xl overflow-hidden border border-indigo-800/50 bg-indigo-900/30 flex items-center justify-center shadow-inner min-h-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop"
                  alt="IVF Optimization Protocol"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 rounded-2xl border border-indigo-500 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                <p className="font-bold text-lg md:text-xl text-white relative z-10 flex items-start gap-3">
                  <Target className="w-6 h-6 shrink-0 text-indigo-200" />
                  <span>
                    Goal: Improve implantation and pregnancy outcomes.
                  </span>
                </p>
              </div>
            </div>

            <div className="lg:w-7/12 w-full">
              <div className="bg-slate-900/80  p-10 md:p-14 rounded-[3rem] border border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>

                <p className="font-black text-2xl mb-10 text-white tracking-wide">
                  We recommend:
                </p>
                <div className="space-y-6">
                  {[
                    "8–12 week pre-IVF preparation",
                    "Egg mitochondrial support",
                    "Sperm DNA integrity support",
                    "Uterine receptivity optimization",
                    "Stress reduction protocol",
                    "Anti-inflammatory stabilization",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-900/50 flex items-center justify-center shrink-0 border border-indigo-700/50 group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors duration-300">
                        <Check className="w-5 h-5 text-indigo-300 group-hover:text-white" />
                      </div>
                      <span className="text-lg md:text-xl font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Duration & Focus Areas --- */}
      <section className="py-14 md:py-15 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Abstract Medical Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* --- Duration Section --- */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 flex items-center gap-4">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-rose-500" />
                Program Duration
              </h2>
              <div className="hidden md:block h-px bg-slate-200 flex-grow max-w-md ml-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Track 1: Natural */}
              <div className="group relative bg-white p-10 rounded-[1.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-300 to-rose-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div> */}
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 group-hover:text-rose-500 transition-colors">
                  Natural Conception Track
                </p>
                <p className="text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
                  3–6{" "}
                  <span className="text-2xl text-slate-400 tracking-normal font-bold block mt-2">
                    Months
                  </span>
                </p>
                <div className="h-px w-12 bg-slate-200 my-4"></div>
                <p className="font-semibold text-slate-600">
                  Structured Program
                </p>
              </div>

              {/* Track 2: IVF */}
              <div className="group relative bg-white p-10 rounded-[1.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 group-hover:text-purple-600 transition-colors">
                  IVF Preparation Track
                </p>
                <p className="text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
                  8–12{" "}
                  <span className="text-2xl text-slate-400 tracking-normal font-bold block mt-2">
                    Weeks
                  </span>
                </p>
                <div className="h-px w-12 bg-slate-200 my-4"></div>
                <p className="font-semibold text-slate-600">
                  Pre-Cycle Optimization
                </p>
              </div>

              {/* Track 3: Intensive (Highlighted Dark Card) */}
              <div className="group relative bg-slate-950 p-10 rounded-[1.5rem] border border-slate-800 shadow-[0_10px_40px_rgb(0,0,0,0.2)] hover:shadow-2xl hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-colors"></div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 relative z-10 group-hover:text-blue-400 transition-colors">
                  International Intensive
                </p>
                <p className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter relative z-10">
                  3–4{" "}
                  <span className="text-2xl text-slate-400 tracking-normal font-bold block mt-2">
                    Weeks
                  </span>
                </p>
                <div className="h-px w-12 bg-slate-800 my-4 relative z-10"></div>
                <p className="font-semibold text-slate-300 relative z-10">
                  In-centre program + follow-up
                </p>
              </div>
            </div>
          </div>

          {/* --- Special Focus Areas --- */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-rose-500" />
                Special Focus Areas
              </h2>
              <div className="hidden md:block h-px bg-slate-200 flex-grow max-w-md ml-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* PCOS */}
              <div className="group bg-white rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl hover:border-rose-200 transition-all duration-500 overflow-hidden flex flex-col h-full">
                <div className="bg-rose-50/50 p-8 border-b border-rose-100 flex items-center gap-4 group-hover:bg-rose-100/50 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-rose-100 group-hover:scale-110 transition-transform">
                    <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">PCOS</h3>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "Insulin resistance reversal",
                      "Ovulation restoration",
                      "Weight & metabolic optimization",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700 font-semibold group/item"
                      >
                        <Check className="w-5 h-5 text-slate-300 shrink-0 group-hover/item:text-rose-500 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Endometriosis */}
              <div className="group bg-white rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl hover:border-amber-200 transition-all duration-500 overflow-hidden flex flex-col h-full">
                <div className="bg-amber-50/50 p-8 border-b border-amber-100 flex items-center gap-4 group-hover:bg-amber-100/50 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-amber-100 group-hover:scale-110 transition-transform">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Endometriosis
                  </h3>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {["Inflammatory control", "Gut & immune regulation"].map(
                      (item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-700 font-semibold group/item"
                        >
                          <Check className="w-5 h-5 text-slate-300 shrink-0 group-hover/item:text-amber-500 transition-colors" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>

              {/* Male Infertility */}
              <div className="group bg-white rounded-[1.5rem] shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-500 overflow-hidden flex flex-col h-full">
                <div className="bg-blue-50/50 p-8 border-b border-blue-100 flex items-center gap-4 group-hover:bg-blue-100/50 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 border border-blue-100 group-hover:scale-110 transition-transform">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Male Infertility
                  </h3>
                </div>
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {[
                      "Mitochondrial enhancement",
                      "Antioxidant therapy",
                      "Hormonal recalibration",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700 font-semibold group/item"
                      >
                        <Check className="w-5 h-5 text-slate-300 shrink-0 group-hover/item:text-blue-500 transition-colors" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- International Patients & Why Us --- */}
      <section className="py-14 md:py-12 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* International Card */}
            <div className="bg-slate-950 text-white p-10 md:p-14 lg:p-16 rounded-[1.5rem] shadow-2xl relative overflow-hidden flex flex-col h-full group">
              <Globe className="absolute -bottom-16 -right-16 w-80 h-80 text-slate-800 pointer-events-none group-hover:rotate-12 transition-transform duration-1000" />

              <div className="relative z-10 mb-12">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
                  <Globe className="w-8 h-8 text-slate-300" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">
                  Designed for International Patients
                </h2>
                <p className="text-lg text-slate-400 font-medium">We offer:</p>
              </div>

              <ul className="space-y-5 mb-12 relative z-10 flex-grow">
                {[
                  "Pre-arrival virtual consultation",
                  "Couple-based assessment",
                  "2–4 week intensive program",
                  "IVF coordination support",
                  "Airport assistance coordination",
                  "Structured follow-up with home physician",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 font-semibold text-lg text-slate-200"
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                      <span className="text-slate-400 text-xs">✔</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-slate-800/50  p-6 rounded-2xl border border-slate-700 relative z-10">
                <p className="font-medium text-slate-300 leading-relaxed flex items-start gap-4">
                  <MapPin className="w-6 h-6 shrink-0 mt-0.5" />
                  <span>
                    Kerala provides a calm, healing environment ideal for
                    fertility restoration.
                  </span>
                </p>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-white text-slate-900 p-10 md:p-14 lg:p-16 rounded-[1.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 border border-rose-100">
                <Flower2 className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-12 leading-tight">
                Why Choose Tigris Valley Wellness Centre?
              </h2>

              <ul className="space-y-6 flex-grow">
                {[
                  "Functional + Integrative fertility approach",
                  "IV mitochondrial support protocols",
                  "Hormone-focused metabolic care",
                  "IVF preparation specialization",
                  "Ethical & individualized care",
                  "Physician-supervised programs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-5 font-bold text-lg text-slate-800 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-rose-50 group-hover:border-rose-200 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 group-hover:text-rose-500 transition-colors" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final Philosophy Section --- */}
      <section className="py-14 md:py-18 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <div className="mb-12">
            <div className="inline-flex p-4 bg-white/5  rounded-3xl border border-white/10 shadow-2xl">
              <Heart className="w-10 h-10 text-rose-400" />
            </div>
          </div>

          <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-8">
            Our Philosophy
          </h2>

          <p className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-10 tracking-tight">
            Fertility is not forced.
          </p>
          <p className="text-xl md:text-3xl font-medium text-slate-300 italic mb-20 leading-relaxed max-w-4xl mx-auto">
            It is restored when the body is safe, nourished, balanced, and
            supported.
          </p>

          <div className="bg-slate-900/80  p-10 md:p-14 rounded-[3rem] border border-slate-700/50 shadow-2xl">
            <p className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-10">
              We focus on:
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                "Restoring ovulation",
                "Optimizing sperm",
                "Calming inflammation",
                "Improving implantation",
                "Preparing the body for pregnancy",
              ].map((item, i) => (
                <span
                  key={i}
                  className="px-6 md:px-8 py-3 md:py-4 bg-slate-800 border border-slate-700 rounded-full text-slate-200 font-bold shadow-lg text-sm md:text-base hover:bg-slate-700 hover:border-slate-500 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FertilityRestoration;
