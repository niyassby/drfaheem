import React, { useState } from "react";
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
  Baby,
  Target,
  Brain,
  Droplets,
  Dumbbell,
  Footprints,
  Leaf,
  CalendarCheck,
  LineChart,
  Scale,
  Smile,
  Zap,
  Flower2,
  Search,
  AlertCircle,
  RefreshCcw,
  ShieldAlert,
  MapPin,
  Phone,
} from "lucide-react";
import { GiLiver } from "react-icons/gi";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';


const PcodReversal = () => {
  const [ctaOpen, setCtaOpen] = useState(false);
  return (
    <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
            alt="PCOD Reversal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-red-400 uppercase bg-red-950/30 rounded-full border border-red-500/30">
              Functional Hormone Restoration
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Advanced PCOD <br className="hidden md:block" /> Reversal
              Program
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
              You Don’t Need to Suppress Hormones. You Need to Restore Balance.
            </p>
          </motion.div>
        </div>
      </section>
      {/* --- 6 Phases Grid --- */}
      <section className="py-10 md:py-12 bg-rose-50/30 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Our Core Methodology
            </h2>
            <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Phase 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col hover:border-blue-200 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <Microscope className="w-8 h-8" />
                </div>
                Phase 1: Comprehensive Hormonal & Metabolic Mapping
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-6 italic">
                Before starting treatment, we identify your personal PCOD type.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 flex-grow">
                <div>
                  <p className="font-bold text-slate-900 mb-4 border-b pb-2">
                    Core Evaluation Includes:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Fasting insulin & HOMA-IR",
                      "HbA1c",
                      "Lipid profile",
                      "LH, FSH",
                      "Testosterone (Total & Free)",
                      "DHEAS",
                      "Estradiol",
                      "Progesterone",
                      "Prolactin",
                      "Thyroid profile",
                      "Vitamin D",
                      "B12",
                      "Ferritin",
                      "CRP (inflammation marker)",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                      >
                        <Activity className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-4 border-b pb-2">
                    Optional:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Pelvic ultrasound",
                      "Cortisol rhythm testing",
                      "Gut microbiome assessment",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                      >
                        <Search className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mt-auto">
                <p className="font-bold text-blue-900 flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    We identify whether your PCOD is insulin-driven,
                    stress-driven, inflammatory, thyroid-related, or
                    gut-related.
                  </span>
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col hover:border-green-200 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded-xl text-green-600">
                  <Apple className="w-8 h-8" />
                </div>
                Phase 2: Insulin Reset & Therapeutic Nutrition
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-6 italic">
                Most PCOD cases are insulin-driven.
              </p>

              <p className="font-bold text-slate-900 mb-4">
                We design a personalized nutrition strategy:
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Low-glycemic insulin stabilizing plan",
                  "Anti-inflammatory Mediterranean-style protocol",
                  "Controlled carbohydrate reset",
                  "Healthy fat optimization",
                  "Protein adequacy",
                  "Time-restricted eating (when appropriate)",
                  "Post-meal glucose tracking",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-green-50/50 p-3 rounded-xl border border-green-100 text-slate-800 font-medium"
                  >
                    <Leaf className="w-5 h-5 text-green-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-green-50 p-5 rounded-xl border border-green-200 mt-auto">
                <p className="font-bold text-green-900 flex items-start gap-3">
                  <Target className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    Goal: Improve insulin sensitivity → Reduce androgen excess →
                    Restore ovulation.
                  </span>
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col hover:border-purple-200 transition-colors lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
                  <Syringe className="w-8 h-8" />
                </div>
                <span>
                  Phase 3: Advanced IV Hormonal Support{" "}
                  <span className="block sm:inline text-sm font-normal text-slate-500 bg-slate-100 px-3 py-1 mt-2 sm:mt-0 rounded-full uppercase tracking-wider w-fit">
                    (Selected Clients)
                  </span>
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 flex-grow">
                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <p className="font-bold text-slate-900 mb-4 border-b border-purple-200 pb-2">
                    For women with:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Severe fatigue",
                      "Hair fall",
                      "Insulin resistance",
                      "Chronic inflammation",
                      "Nutrient depletion",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                      >
                        <AlertCircle className="w-4 h-4 text-purple-400 shrink-0" />
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
                      "Magnesium",
                      "B-Complex",
                      "Vitamin C",
                      "Alpha-lipoic acid",
                      "N-Acetyl Cysteine (NAC)",
                      "L-Carnitine (Levocarnitine)",
                      "Trace minerals",
                      "Amino acids",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                      >
                        <Droplets className="w-4 h-4 text-purple-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100">
                  <p className="font-bold text-slate-900 mb-4 border-b border-purple-200 pb-2">
                    May Support:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Mitochondrial energy production",
                      "Insulin sensitivity",
                      "Liver detox pathways",
                      "Reduced oxidative stress",
                      "Hormonal signaling balance",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-purple-900 font-bold"
                      >
                        <Activity className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white p-5 rounded-xl mt-auto">
                <p className="font-bold flex items-center gap-2">
                  Protocol:{" "}
                  <span className="font-normal text-purple-200">
                    1–2 sessions weekly (customized)
                  </span>
                </p>
                <p className="text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-2 rounded-lg text-center flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> All therapies are
                  physician supervised.
                </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col hover:border-emerald-200 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                  <Leaf className="w-8 h-8" />
                </div>
                Phase 4: Liver & Detox Optimization
              </h3>
              <p className="text-lg text-slate-700 font-medium mb-6 italic border-l-4 border-emerald-500 pl-4 bg-emerald-50 py-3 rounded-r-xl">
                The liver is central to hormone metabolism.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 flex-grow">
                <div>
                  <p className="font-bold text-slate-900 mb-4">We support:</p>
                  <ul className="space-y-4">
                    {[
                      "Estrogen clearance",
                      "Bile flow",
                      "Gut-liver axis balance",
                      "Inflammatory load reduction",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-medium"
                      >
                        <GiLiver className="w-5 h-5 text-emerald-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-slate-900 mb-4">May include:</p>
                  <ul className="space-y-4">
                    {[
                      "Structured detox protocol",
                      "Fiber therapy",
                      "Microbiome restoration",
                      "Anti-inflammatory phytonutrients",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-medium"
                      >
                        <RefreshCcw className="w-4 h-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 5 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col hover:border-teal-200 transition-colors">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-teal-50 rounded-xl text-teal-600">
                  <Brain className="w-8 h-8" />
                </div>
                Phase 5: Stress & Cortisol Reset
              </h3>
              <p className="text-lg text-red-600 font-bold mb-6 italic">
                Chronic stress worsens PCOD.
              </p>

              <p className="font-bold text-slate-900 mb-4">We integrate:</p>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Sleep optimization",
                  "Breathwork",
                  "Hormone-supportive yoga",
                  "Nervous system regulation",
                  "Structured stress reduction protocols",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-teal-50/50 p-3 rounded-xl border border-teal-100 text-slate-800 font-medium"
                  >
                    <Wind className="w-5 h-5 text-teal-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-teal-900 p-5 rounded-xl mt-auto text-center">
                <p className="font-bold text-white text-lg tracking-wide">
                  Balanced cortisol = Balanced cycles.
                </p>
              </div>
            </div>

            {/* Phase 6 */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col hover:border-rose-200 transition-colors lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-rose-50 rounded-xl text-rose-600">
                  <Dumbbell className="w-8 h-8" />
                </div>
                Phase 6: Body Composition & Metabolic Activation
              </h3>
              <p className="text-xl text-rose-700 font-bold mb-8 italic">
                Even 5–10% weight optimization can restore ovulation.
              </p>

              <p className="font-bold text-slate-900 mb-4">Focus:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 flex-grow">
                {[
                  {
                    text: "Resistance training guidance",
                    icon: <Dumbbell className="w-6 h-6 text-rose-500" />,
                  },
                  {
                    text: "Post-meal walking strategy",
                    icon: <Footprints className="w-6 h-6 text-rose-500" />,
                  },
                  {
                    text: "Fatty liver reversal",
                    icon: <GiLiver className="w-6 h-6 text-rose-500" />,
                  },
                  {
                    text: "Muscle activation protocols",
                    icon: <Zap className="w-6 h-6 text-rose-500" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center gap-3 bg-rose-50 p-6 rounded-2xl border border-rose-100"
                  >
                    {item.icon}
                    <span className="font-semibold text-slate-800">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-rose-100 p-5 rounded-xl border border-rose-200 mt-auto text-center">
                <p className="font-bold text-rose-900 text-lg">
                  Muscle is the most powerful insulin-sensitizing organ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Fertility & Long-Term Protection --- */}
      <section className="py-10 md:py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fertility */}
            <div className="bg-pink-50 p-8 md:p-12 rounded-[3rem] border border-pink-100 relative overflow-hidden flex flex-col h-full">
              <Baby className="absolute -bottom-10 -right-10 w-64 h-64 text-pink-500 opacity-5 pointer-events-none" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 flex items-center gap-4 relative z-10">
                <div className="p-3 bg-pink-200/50 rounded-2xl text-pink-600">
                  <Baby className="w-8 h-8" />
                </div>
                Fertility-Focused PCOD Program
              </h3>
              <p className="text-lg font-bold text-pink-700 mb-6 relative z-10">
                For women trying to conceive:
              </p>
              <p className="font-bold text-slate-900 mb-4 relative z-10">
                We offer additional support:
              </p>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                {[
                  "Ovulation tracking",
                  "Endometrial support",
                  "Micronutrient optimization",
                  "Anti-inflammatory fertility preparation",
                  "Partner metabolic screening (if needed)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-pink-100 shadow-sm font-bold text-slate-800"
                  >
                    <Flower2 className="w-5 h-5 text-pink-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-pink-600 text-white p-6 rounded-2xl text-center relative z-10 mt-auto">
                <p className="font-bold text-lg">
                  We aim to improve natural conception rates safely.
                </p>
              </div>
            </div>

            {/* Long-Term Protection */}
            <div className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white relative overflow-hidden flex flex-col h-full shadow-2xl">
              <ShieldCheck className="absolute -top-10 -right-10 w-64 h-64 text-white opacity-5 pointer-events-none" />
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 flex items-center gap-4 relative z-10">
                <div className="p-3 bg-slate-800 rounded-2xl text-blue-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                Long-Term Health Protection
              </h3>
              <p className="text-lg font-medium text-slate-300 mb-8 relative z-10">
                Women with PCOD have higher risk of:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow relative z-10">
                {[
                  "Type 2 diabetes",
                  "Fatty liver",
                  "Cardiovascular disease",
                  "Metabolic syndrome",
                  "Endometrial complications",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-slate-800/80 p-4 rounded-xl border border-slate-700"
                  >
                    <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="font-semibold text-slate-100">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center relative z-10 mt-auto">
                <p className="font-bold text-xl text-white">
                  We proactively prevent these risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Expected Improvements (Redesigned New UI) --- */}
      <section className="py-14 md:py-12 bg-gradient-to-b from-white to-rose-50/50 relative overflow-hidden border-y border-rose-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-400/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center gap-2 bg-rose-100 text-rose-900 px-4 py-1.5 rounded-full font-bold text-sm tracking-widest uppercase mb-6 border border-rose-200">
              <Sparkles className="w-4 h-4" /> Transformation
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Expected Improvements
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              May Include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { text: "More regular cycles", icon: <CalendarCheck /> },
              { text: "Reduced acne & hair fall", icon: <Sparkles /> },
              { text: "Improved insulin levels", icon: <LineChart /> },
              { text: "Weight reduction", icon: <Scale /> },
              { text: "Better fertility outcomes", icon: <Flower2 /> },
              { text: "Improved mood stability", icon: <Smile /> },
              { text: "Increased energy", icon: <Zap /> },
              {
                text: "Reduced long-term metabolic risk",
                icon: <ShieldCheck />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-rose-300 hover:shadow-[0_20px_40px_rgb(244,63,94,0.15)] transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 w-16 h-16 bg-slate-50 border border-slate-100 text-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:border-rose-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
                  {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                </div>
                <h4 className="font-bold text-slate-800 text-lg leading-snug relative z-10 group-hover:text-slate-950">
                  {item.text}
                </h4>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <p className="inline-flex items-center gap-3 text-slate-600 bg-white py-4 px-8 rounded-full border border-slate-200 shadow-sm font-semibold">
              <AlertCircle className="w-5 h-5 text-slate-400" />
              Results vary based on baseline metabolic status and adherence.
            </p>
          </div>
        </div>
      </section>

      {/* --- International Patients --- */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <Globe className="absolute top-0 right-0 w-96 h-96 text-white opacity-5 pointer-events-none translate-x-1/4 -translate-y-1/4" />

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10 flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-2xl">
                <Globe className="w-10 h-10 text-indigo-300" />
              </div>
              Designed for Multinational Clients
            </h2>
            <p className="text-xl text-indigo-200 mb-8 font-medium relative z-10">
              We offer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 relative z-10">
              {[
                "Pre-arrival online consultation",
                "2–4 week structured hormone reset program",
                "IV support modules",
                "Nutrition intensives",
                "Airport coordination assistance",
                "Post-return tele-follow-up",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-indigo-300 shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-block bg-white text-indigo-900 py-4 px-8 rounded-full font-bold text-lg md:text-xl relative z-10 shadow-xl border-4 border-indigo-900/50">
              Kerala offers a calm healing environment ideal for hormonal
              restoration.
            </div>
          </div>
        </div>
      </section>

      {/* --- Why Choose Tigris --- */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-16">
            Why Choose Tigris Valley Wellness Centre?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Root-cause functional hormone approach",
              "Metabolic + endocrine integration",
              "Physician-supervised IV therapies",
              "Fertility-conscious care",
              "Ethical & safety-focused protocols",
              "International patient coordination",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-rose-300 hover:shadow-md transition-all duration-300 group"
              >
                <div className="bg-rose-50 p-3 rounded-xl shrink-0 group-hover:bg-rose-500 transition-colors duration-300">
                  <CheckCircle2 className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-slate-800 text-lg leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-rose-800 via-pink-900 to-slate-900 p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <Flower2 className="absolute top-6 right-10 w-48 h-48 text-rose-300" />
              <Baby className="absolute bottom-4 left-8 w-32 h-32 text-pink-300" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-rose-800/60 border border-rose-700/50 text-rose-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Phone className="w-3.5 h-3.5" /> Begin Your Consultation
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  If you or your loved one is seeking:
                </h2>
                <ul className="space-y-3 mb-8">
                  {[
                    "PCOD reversal & natural hormonal balance",
                    "Fertility support & ovulation restoration",
                    "Insulin resistance & metabolic correction",
                    "Holistic PCOD management without suppression",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-rose-200 font-medium text-sm">
                  Our team will guide you through a structured eligibility and consultation process.
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-col gap-4">
                <button
                  onClick={() => setCtaOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-white text-rose-900 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-rose-50 transition-all duration-200 hover:-translate-y-0.5 w-full lg:w-auto whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Request a Case Review
                </button>
                <p className="text-rose-300 text-xs font-medium text-center">
                  Physician-supervised · Fertility-conscious care
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

export default PcodReversal;
