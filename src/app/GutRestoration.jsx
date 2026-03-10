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
  RefreshCcw,
  Zap,
  Check,
  Target,
  Syringe,
  HeartPulse,
  Clock,
  CheckCircle2,
  Brain,
  Wind,
  ListChecks,
  AlertCircle,
  ShieldAlert,
  Tally1,
  RefreshCw,
} from "lucide-react";
import { GiStomach } from "react-icons/gi";

const GutRestoration = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-900 w-full overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Navbar />

      {/* --- Hero Section (Strictly Title & Subtitle with Bottom-to-Up Motion) --- */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1505575967455-40e256f73376?q=80&w=2070&auto=format&fit=crop"
            alt="Gut Restoration and Wellness"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/60 to-slate-900/90 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Starts lower
            animate={{ opacity: 1, y: 0 }} // Glides UP to natural position
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            <h1 className="text-4xl sm:text-5xl mt-20 md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Advanced Gut Restoration & <br className="hidden lg:block" />{" "}
              Microbiome Optimization Program
            </h1>

            <p className="text-xl md:text-3xl font-medium text-blue-100 italic tracking-wide leading-relaxed drop-shadow-lg">
              Restore Digestive Intelligence. Rebuild Microbial Diversity. Reset
              Systemic Health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Tigris Introduction Section (New Split-Layout UI) --- */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-100">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Bold Philosophy Statement */}
            <div className="lg:col-span-7">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 shadow-sm">
                <GiStomach className="w-9 h-9 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
                At Tigris Valley, gut healing is approached as a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  structured biological restoration process
                </span>{" "}
                — not a symptom-management strategy.
              </h2>
            </div>

            {/* Right Column: Protocol Definition Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                {/* Dark Card Subtle Glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-6">
                    <Sparkles className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-100 font-bold uppercase tracking-widest text-sm">
                      The Protocol
                    </span>
                  </div>

                  <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                    This is a personalized Functional & Integrative Gut
                    Restoration Protocol, designed to identify and correct root
                    causes of dysbiosis, leaky gut, inflammation, and gut–brain
                    axis dysfunction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHASE 1: Root Cause Mapping --- */}
      <section className="py-20 bg-slate-50 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white p-8 md:p-12 lg:p-14 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-100 text-slate-700 rounded-2xl flex items-center justify-center border border-slate-200 shrink-0">
                  <Microscope className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                    PHASE 1: Root Cause Mapping
                  </h3>
                  <p className="text-lg text-blue-600 font-bold uppercase tracking-widest">
                    (Weeks 0–2)
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10 text-center text-sm font-semibold text-slate-500 italic"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Panel 1 */}
              <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-md transition-shadow">
                <p className="font-black text-slate-900 mb-6 text-xl flex items-center gap-3 border-b border-blue-200 pb-4">
                  <Activity className="text-blue-500" /> Advanced Functional
                  Testing{" "}
                  <span className="text-sm font-normal uppercase tracking-widest text-blue-700 ml-auto">
                    (As Indicated)
                  </span>
                </p>
                <ul className="space-y-4">
                  {[
                    "Comprehensive stool analysis (Microbiome diversity, dysbiosis index)",
                    "SIBO breath test",
                    "Zonulin (intestinal permeability)",
                    "Food sensitivity panel (IgG/immune reactivity)",
                    "hs-CRP, ESR",
                    "Nutrient panel (B12, D3, Zinc, Magnesium, Iron)",
                    "Thyroid & cortisol profile",
                    "Organic acids test (fungal & bacterial metabolites)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Panel 2 */}
              <div className="bg-cyan-50/50 p-8 rounded-3xl border border-cyan-100 hover:shadow-md transition-shadow">
                <p className="font-black text-slate-900 mb-6 text-xl flex items-center gap-3 border-b border-cyan-200 pb-4">
                  <ListChecks className="text-cyan-500" /> Clinical Mapping
                </p>
                <ul className="space-y-4">
                  {[
                    "IBS spectrum symptoms",
                    "Recurrent bloating / reflux",
                    "Constipation / diarrhea patterns",
                    "Brain fog & fatigue",
                    "Skin disorders",
                    "Autoimmune triggers",
                    "Mood instability",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-700"
                    >
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 shrink-0"></div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHASE 2: Remove - Reset - Repair --- */}
      <section className="py-20 bg-blue-950 text-white relative overflow-hidden">
        {/* Subtle background overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              PHASE 2: Remove – Reset – Repair
            </h2>
            <p className="text-xl text-blue-300 font-bold uppercase tracking-widest">
              (Weeks 2–8)
            </p>
          </div>

          <div className="space-y-12">
            {/* 1️⃣ REMOVE */}
            <div className="bg-slate-900/60 p-8 md:p-12 rounded-[3rem] border border-blue-800/50 shadow-2xl">
              <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4 border-b border-blue-800/50 pb-6">
                <span className="text-blue-400">1️⃣</span> REMOVE (Detoxify &
                Decongest)
              </h3>

              <div className="mb-10">
                <p className="font-bold text-blue-300 text-xl mb-6">
                  Nutritional & Medical Interventions
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Personalized elimination nutrition protocol",
                    "Anti-inflammatory whole-food plan",
                    "Targeted antimicrobial botanicals (if SIBO/dysbiosis present)",
                    "Candida protocol (if fungal overgrowth detected)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 font-semibold text-slate-200"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sub-therapies Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Colon Hydrotherapy */}
                <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col">
                  <p className="font-black text-lg text-white mb-4 flex items-center gap-2">
                    <span className="text-cyan-400">🔹</span> Colon Hydrotherapy{" "}
                    <span className="text-[10px] uppercase text-slate-400 ml-auto font-bold tracking-widest">
                      (If Indicated)
                    </span>
                  </p>
                  <p className="text-sm font-bold text-slate-400 mb-3">
                    Used selectively in cases of:
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {[
                      "Chronic constipation",
                      "Fecal loading",
                      "Recurrent bloating",
                      "Sluggish bowel motility",
                      "Toxic overload symptoms",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-1.5 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-4">
                    <p className="text-sm font-bold text-cyan-300 mb-2">
                      Clinical Purpose:
                    </p>
                    <ul className="space-y-1">
                      {[
                        "Mechanical cleansing of impacted waste",
                        "Reduction of inflammatory by-products",
                        "Improved bowel motility",
                        "Enhanced response to microbiome restoration protocols",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <Check className="w-3 h-3 text-cyan-500 shrink-0 mt-0.5" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-slate-400 italic mt-auto flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    Note: Always preceded by assessment. Avoided in active IBD
                    flare, severe anemia, or contraindicated conditions.
                  </p>
                </div>

                {/* Rectal Ozone Therapy */}
                <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col">
                  <p className="font-black text-lg text-white mb-4 flex items-center gap-2">
                    <span className="text-indigo-400">🔹</span> Rectal Ozone
                    Therapy{" "}
                    <span className="text-[10px] uppercase text-slate-400 ml-auto font-bold tracking-widest">
                      (If Indicated)
                    </span>
                  </p>
                  <p className="text-sm font-bold text-slate-400 mb-3">
                    Recommended in selected cases such as:
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {[
                      "Dysbiosis with inflammatory load",
                      "Chronic gut infections",
                      "Autoimmune-related gut inflammation",
                      "Post-antibiotic gut imbalance",
                      "Adjunctive support in cancer patients",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 mb-4">
                    <p className="text-sm font-bold text-indigo-300 mb-2">
                      Therapeutic Goals:
                    </p>
                    <ul className="space-y-1">
                      {[
                        "Modulation of gut immune response",
                        "Reduction of pathogenic microbial load",
                        "Improvement in mucosal oxygenation",
                        "Anti-inflammatory and immunoregulatory effects",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-300"
                        >
                          <Check className="w-3 h-3 text-indigo-500 shrink-0 mt-0.5" />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-slate-400 italic mt-auto">
                    Administered under strict medical supervision and
                    individualized dosing.
                  </p>
                </div>

                {/* IV Nutritional Therapy */}
                <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 flex flex-col">
                  <p className="font-black text-lg text-white mb-4 flex items-center gap-2">
                    <Syringe className="w-5 h-5 text-purple-400" /> Optional IV
                    Nutritional Therapy
                  </p>
                  <span className="inline-block bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md border border-purple-500/30 mb-4 w-fit">
                    Accelerated Option
                  </span>

                  <p className="text-sm font-bold text-slate-400 mb-3">
                    For patients with:
                  </p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {[
                      "Severe fatigue",
                      "Malabsorption",
                      "High inflammatory burden",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mt-auto">
                    <p className="text-sm font-bold text-purple-300 mb-3">
                      IV blends may include:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Vitamin C",
                        "B-complex",
                        "Zinc",
                        "Magnesium",
                        "Glutathione",
                      ].map((item, i) => (
                        <span
                          key={i}
                          className="bg-slate-800 border border-slate-600 px-3 py-1 rounded-lg text-xs font-semibold text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2️⃣ RESET & 3️⃣ REPAIR Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 2️⃣ RESET */}
              <div className="bg-slate-900/60 p-8 md:p-12 rounded-[3rem] border border-blue-800/50 shadow-2xl flex flex-col h-full">
                <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4 border-b border-blue-800/50 pb-6">
                  <span className="text-cyan-400">2️⃣</span> RESET{" "}
                  <span className="text-lg text-cyan-200 font-bold ml-auto">
                    (Microbial Rebalancing)
                  </span>
                </h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "Precision strain-specific probiotics",
                    "Soil-based organisms (when indicated)",
                    "Gradual prebiotic fiber introduction",
                    "Polyphenol-rich nutrition",
                    "Resistant starch protocol",
                    "Postbiotic & butyrate support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-200"
                    >
                      <RefreshCcw className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mt-auto">
                  <p className="font-bold text-cyan-300 mb-4">
                    Integrative Add-ons
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Acupuncture for gut–brain axis",
                      "AYUSH-based digestive rejuvenation (Deepana-Pachana & Rasayana)",
                      "Breathwork & vagal activation therapy",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 3️⃣ REPAIR */}
              <div className="bg-slate-900/60 p-8 md:p-12 rounded-[3rem] border border-blue-800/50 shadow-2xl flex flex-col h-full">
                <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4 border-b border-blue-800/50 pb-6">
                  <span className="text-indigo-400">3️⃣</span> REPAIR{" "}
                  <span className="text-lg text-indigo-200 font-bold ml-auto text-right">
                    (Gut Barrier & Mucosal Healing)
                  </span>
                </h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  {[
                    "L-Glutamine",
                    "Zinc carnosine",
                    "Collagen peptides",
                    "Omega-3 fatty acids",
                    "Vitamin A & D optimization",
                    "Short-chain fatty acid support",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-200"
                    >
                      <ShieldAlert className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-indigo-900/40 p-6 rounded-2xl border border-indigo-500/30 text-center mt-auto shadow-inner">
                  <p className="font-bold text-indigo-200 flex items-center justify-center gap-2">
                    <Target className="w-5 h-5" />
                    Focus: Reduce intestinal permeability and systemic
                    inflammation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHASE 3: Rebuild & Resilience --- */}
      <section className="py-24 bg-white border-b border-slate-200 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              PHASE 3: Rebuild & Resilience
            </h2>
            <p className="text-xl text-blue-600 font-bold uppercase tracking-widest">
              (Weeks 8–16)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Microbiome Diversity */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Leaf className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6">
                Microbiome Diversity Expansion
              </h4>
              <ul className="space-y-4">
                {[
                  "30-plant-per-week diversity model",
                  "Personalized fermented foods protocol",
                  "Circadian rhythm eating optimization",
                  "Time-restricted eating (if metabolically suitable)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gut-Hormone Axis */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Activity className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6">
                Gut–Hormone Axis Restoration
              </h4>
              <ul className="space-y-4">
                {[
                  "Gut–thyroid axis support",
                  "Estrogen detox pathway correction",
                  "Insulin sensitivity optimization",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gut-Brain Axis */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-shadow group flex flex-col">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Brain className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-6">
                🧠 Gut–Brain Axis Integration
              </h4>
              {/* <div className="mb-6 text-center text-sm font-semibold text-slate-500 italic">
                [Image of the gut-brain axis connection]
              </div> */}
              <ul className="space-y-4 flex-grow mb-6">
                {[
                  "Cortisol recalibration",
                  "Sleep optimization",
                  "Neuroinflammation reduction",
                  "Mindfulness-based parasympathetic activation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <Check className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-center mt-auto">
                <p className="text-xs font-bold text-indigo-800">
                  Because sustainable gut healing requires nervous system
                  stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Target Audience & Outcomes --- */}
      <section className="py-24 md:py-32 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Ideal Candidates */}
            <div className="bg-white p-10 md:p-14 lg:p-16 rounded-[3.5rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10 flex items-center gap-4">
                <Target className="w-10 h-10 text-blue-500" /> Ideal Candidates
              </h2>
              <ul className="space-y-5 flex-grow">
                {[
                  "IBS / chronic bloating",
                  "Autoimmune disorders",
                  "PCOD & hormonal imbalance",
                  "Chronic fatigue",
                  "Skin disorders",
                  "Post-antibiotic dysbiosis",
                  "Cancer patients with chemotherapy-induced gut toxicity",
                  "Metabolic syndrome with gut involvement",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 font-bold text-slate-800 text-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-200 shadow-sm mt-0.5">
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes (Blue Theme) */}
            <div className="bg-gradient-to-br from-blue-50/80 to-white text-slate-900 p-10 md:p-14 lg:p-16 rounded-[3.5rem] shadow-[0_15px_50px_rgb(59,130,246,0.06)] flex flex-col h-full relative overflow-hidden border border-blue-100">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/30 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/40 blur-[80px] rounded-full pointer-events-none"></div>

              <h2 className="text-3xl md:text-5xl font-black mb-10 flex items-center gap-4 relative z-10 text-slate-900">
                <Sparkles className="w-10 h-10 text-blue-500" /> Expected
                Outcomes
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 relative z-10 flex-grow">
                {[
                  "Reduced bloating & abdominal discomfort",
                  "Improved bowel regularity",
                  "Enhanced immune resilience",
                  "Reduced inflammatory markers",
                  "Clearer skin",
                  "Improved mood & cognition",
                  "Better metabolic control",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-2xl border border-blue-100 shadow-sm flex items-start gap-3 hover:shadow-md hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300"
                  >
                    <Sparkles className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Personalized & Flexible --- */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <div className="w-16 h-16 bg-slate-50 text-slate-700 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-slate-200 shadow-sm">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            ⏳ Personalized & Flexible
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-bold mb-6">
            This is not a fixed template.
          </p>
          <p className="text-lg text-slate-500 font-medium mb-12">
            For executives or patients with time constraints:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: "Option 1", text: "IV + Ozone accelerated protocol" },
              {
                num: "Option 2",
                text: "Colon hydrotherapy + Integrative traditional pathway",
              },
              {
                num: "Option 3",
                text: "Nutrition-focused microbiome restoration",
              },
              { num: "Option 4", text: "Hybrid structured premium program" },
            ].map((opt, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-full"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-4 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                  {opt.num}
                </p>
                <p className="font-bold text-slate-800 text-center leading-snug">
                  {opt.text}
                </p>
              </div>
            ))}
          </div>

          <div className="inline-block bg-slate-900 text-white px-8 py-4 rounded-full font-bold shadow-lg">
            All interventions are customized after clinical assessment.
          </div>
        </div>
      </section>

      {/* --- Philosophy Footer (Light & Blue Theme) --- */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490818387583-1b5f22221ba2?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 via-white/90 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-blue-100 shadow-[0_8px_30px_rgb(59,130,246,0.12)]">
            <Microscope className="w-8 h-8 text-blue-500" />
          </div>

          <h2 className="text-sm font-black text-blue-700 uppercase tracking-[0.3em] mb-8">
            🔬 The Philosophy
          </h2>

          <p className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
            Conventional medicine suppresses acid and rotates antibiotics.{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-2">
              Functional & Integrative Medicine restores the terrain.
            </span>
          </p>

          <div className="h-px w-24 bg-blue-200 mb-8"></div>

          <p className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed max-w-3xl mx-auto italic">
            At Tigris Valley, we rebuild your internal ecosystem
            — structurally, metabolically, and immunologically.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GutRestoration;
