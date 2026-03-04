import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
  Brain,
  Activity,
  Heart,
  Moon,
  Sun,
  Leaf,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Syringe,
  Clock,
    Target,
    Wind,
  Check,
  Globe,
  BookOpen,
  Flower2
} from "lucide-react";

const MindBodyBalance = () => {
  return (
    <div className="bg-[#F8F7F4] font-sans text-slate-800 w-full overflow-x-hidden selection:bg-indigo-200 selection:text-indigo-900">
      <Navbar />

      {/* --- HERO SECTION (Midnight Indigo Theme) --- */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2069&auto=format&fit=crop"
            alt="Mind Body Balance"
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-slate-950/60 to-gray-800 mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 py-2 px-5 mb-8 text-xs md:text-sm font-bold tracking-[0.25em] text-indigo-200 uppercase border border-indigo-400/30 rounded-full bg-indigo-900/40 ">
              <Sparkles className="w-4 h-4 text-amber-200" />{" "}
              Neuro-Psycho-Spiritual Framework
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-[1.15] tracking-tight">
              Advanced Mind–Body <br className="hidden lg:block" /> Balance
              Program
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO & INTEGRATION CARD --- */}
      <section className="relative z-20 -mt-32 px-6 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/90  p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-white">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-slate-800 font-bold leading-relaxed mb-6">
                At Tigris Valley Wellness Centre, mind–body balance is
                approached through a personalized neuro-psycho-spiritual
                framework that respects all belief systems.
              </p>
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
              <p className="text-lg font-bold text-indigo-900">
                This program integrates:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Functional & Integrative Medicine",
                "Clinical Psychology",
                "Therapeutic Yoga",
                "Faith-aligned Spiritual Healing (Optional)",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 flex flex-col items-center text-center justify-center h-full hover:bg-indigo-50 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-indigo-500 mb-3" />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl text-center">
              <p className="font-bold text-amber-800 tracking-wide">
                Every spiritual module is patient-directed and never imposed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULES 1, 2, 3 (Clinical Foundation) --- */}
      <section className="pb-20 bg-[#F8F7F4]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 1 Biological Foundation */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 flex flex-col">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <span>
                  1️⃣ Biological Foundation{" "}
                  <span className="block text-sm font-bold text-indigo-500 uppercase tracking-widest mt-1">
                    (For All Patients)
                  </span>
                </span>
              </h3>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "HPA-axis regulation (Cortisol rhythm)",
                  "Thyroid & metabolic optimization",
                  "Micronutrient correction",
                  "HRV monitoring",
                  "Gut–brain axis stabilization",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <Activity className="w-5 h-5 text-indigo-500 shrink-0" />{" "}
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm">
                  <Syringe className="w-4 h-4 text-amber-600" /> IV
                  Neuro-Regulation{" "}
                  <span className="text-[10px] uppercase text-slate-400 tracking-widest">
                    (If Indicated)
                  </span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Magnesium",
                    "Vitamin C",
                    "B-Complex",
                    "NAD+ (selected cases)",
                    "Glutathione",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2 Therapeutic Yoga */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-500 flex flex-col">
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-3">
                <span className="text-2xl">🧘</span> 2️⃣ Therapeutic Yoga
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 border border-teal-100 px-3 py-1.5 rounded-md mb-6 w-fit">
                (Non-Religious Clinical Format)
              </p>
              <p className="text-slate-600 font-medium mb-6 italic">
                Yoga is delivered in a medical nervous system regulation
                framework, not as religious practice.
              </p>
              <p className="font-bold text-slate-900 mb-4">Includes:</p>
              <ul className="space-y-4 flex-grow">
                {[
                  "Restorative parasympathetic asanas",
                  "Breath regulation (Pranayama)",
                  "Yoga Nidra (deep guided relaxation)",
                  "Vagal tone enhancement sequences",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100"
                  >
                    <Wind className="w-5 h-5 text-teal-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 Clinical Psychology */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 flex flex-col">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <span className="text-2xl">🧠</span> 3️⃣ Clinical Psychology
                Integration
              </h3>
              <ul className="space-y-4 flex-grow">
                {[
                  "Cognitive Behavioral Therapy (CBT)",
                  "Trauma-informed therapy",
                  "Emotional regulation training",
                  "Burnout recovery coaching",
                  "Meaning-centered counseling",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 bg-blue-50/50 p-4 rounded-2xl border border-blue-100 font-semibold text-slate-800"
                  >
                    <Brain className="w-6 h-6 text-blue-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULE 4 (Faith-Sensitive Integration - The Core Differentiator) --- */}
      {/* --- MODULE 4 (Faith-Sensitive Integration - The Core Differentiator) --- */}
      <section className="py-14 md:py-16 bg-indigo-950 text-white relative overflow-hidden border-t border-indigo-900">
        {/* Sacred Geometry / Starry Sky subtle background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-16 lg:mb-24 border-b border-indigo-500/90 pb-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-900/50 border border-indigo-700/50 rounded-2xl mb-6 shadow-sm">
                <Globe className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight text-white">
                Faith-Sensitive <br className="hidden md:block" /> Spiritual
                Integration
              </h2>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-indigo-900/40 p-6 md:p-8 rounded-[2rem] border border-indigo-800/50">
                <p className="text-lg md:text-xl text-indigo-100 font-medium leading-relaxed">
                  Spiritual healing is deeply personal. Our protocols are
                  adapted based entirely on patient identity and comfort,
                  ensuring an inclusive environment.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Muslim Patients */}
            <div className="group bg-slate-900/80  p-8 md:p-10 rounded-[2.5rem] border border-indigo-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-emerald-950/50 rounded-xl border border-emerald-800/50 text-emerald-400">
                  <Moon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white">
                  For Muslim Patients
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-emerald-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <BookOpen className="w-4 h-4" /> Islamic Psychology (Ilm
                    al-Nafs)
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Understanding Nafs, Qalb, Aql, Ruh",
                      "Tazkiyah (self-purification framework)",
                      "Tawakkul-based anxiety regulation",
                      "Sabr & Shukr emotional strengthening",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-2xl border border-indigo-800/50">
                  <p className="font-bold text-emerald-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Wind className="w-4 h-4" /> Sufism-Inspired{" "}
                    <span className="text-[10px] text-indigo-300 font-normal tracking-widest bg-indigo-900/50 px-2 py-1 rounded ml-auto">
                      (Optional)
                    </span>
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Dhikr-based breath anchoring",
                      "Muraqabah (meditative presence)",
                      "Character refinement (Akhlaq)",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hindu Patients */}
            <div className="group bg-slate-900/80  p-8 md:p-10 rounded-[2.5rem] border border-indigo-800/80 hover:border-orange-500/50 hover:bg-slate-900 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-orange-500/20 transition-colors"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-orange-950/50 rounded-xl border border-orange-800/50 text-orange-400">
                  <Sun className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white">
                  For Hindu Patients
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-orange-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Flower2 className="w-4 h-4" /> Yogic & Vedantic Integration
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Chakra awareness (if desired)",
                      "Karma & Dharma-based life alignment",
                      "Bhagavad Gita–inspired resilience reflection",
                      "Bhakti-based emotional surrender practices",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-2xl border border-indigo-800/50">
                  <p className="font-bold text-orange-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Activity className="w-4 h-4" /> Mantra & Breath{" "}
                    <span className="text-[10px] text-indigo-300 font-normal tracking-widest bg-indigo-900/50 px-2 py-1 rounded ml-auto">
                      (Optional)
                    </span>
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Sound-based nervous system regulation",
                      "Guided meditative repetition practices",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Christian Patients */}
            <div className="group bg-slate-900/80  p-8 md:p-10 rounded-[2.5rem] border border-indigo-800/80 hover:border-blue-400/50 hover:bg-slate-900 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-blue-950/50 rounded-xl border border-blue-800/50 text-blue-400">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white">
                  For Christian Patients
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-blue-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <BookOpen className="w-4 h-4" /> Contemplative Psychology
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Scripture-based resilience reflection",
                      "Prayer-centered stress release",
                      "Forgiveness processing frameworks",
                      "Identity alignment through faith narrative",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-2xl border border-indigo-800/50">
                  <p className="font-bold text-blue-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" /> Silent Contemplation
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Breath-linked prayer",
                      "Gratitude devotion exercises",
                      "Faith-centered cognitive reframing",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Atheist / Secular Patients */}
            <div className="group bg-slate-900/80  p-8 md:p-10 rounded-[2.5rem] border border-indigo-800/80 hover:border-amber-400/50 hover:bg-slate-900 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full pointer-events-none group-hover:bg-amber-500/20 transition-colors"></div>

              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-amber-950/50 rounded-xl border border-amber-800/50 text-amber-400">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-black text-white">
                  For Atheist / Secular
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-amber-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Compass className="w-4 h-4" /> Existential & Meaning
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Purpose mapping",
                      "Values clarification",
                      "Narrative identity reconstruction",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-5 rounded-2xl border border-indigo-800/50">
                  <p className="font-bold text-amber-300 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Brain className="w-4 h-4" /> Secular Mindfulness
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Breath-based awareness",
                      "Emotional regulation training",
                      "Rational cognitive restructuring",
                      "Gratitude neuroplasticity exercises (science-based)",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-indigo-100 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-indigo-950/80 p-4 rounded-xl border border-indigo-800 text-center relative z-10">
                <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest">
                  No religious language is used unless requested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULES 5 & 6 (AYUSH & Sleep) - Compact UI --- */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* 5 AYUSH */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                   AYUSH & Acupuncture Support
                </h3>
              </div>

              <ul className="space-y-3 flex-grow">
                {[
                  "Medhya Rasayana for cognitive calmness",
                  "Shen-calming acupuncture",
                  "Liver Qi stagnation release",
                  "Adaptogenic botanical therapy",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6 Sleep & Circadian */}
            <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 shadow-lg relative overflow-hidden flex flex-col h-full group">
              {/* Subtle ambient corner glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/20 blur-[50px] rounded-full pointer-events-none"></div>

              <div className="flex items-center gap-4 mb-6 border-b border-slate-700/50 pb-4 relative z-10">
                <div className="w-12 h-12 bg-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center border border-indigo-500/30 shrink-0">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                 Sleep & Circadian Reset
                </h3>
              </div>

              <ul className="space-y-4 flex-grow relative z-10">
                {[
                  {
                    text: "Morning sunlight optimization",
                    icon: <Sun className="w-5 h-5 text-amber-400" />,
                  },
                  {
                    text: "Evening cortisol reduction protocol",
                    icon: <Moon className="w-5 h-5 text-indigo-400" />,
                  },
                  {
                    text: "Digital detox",
                    icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
                  },
                  {
                    text: "Melatonin rhythm correction",
                    icon: <Activity className="w-5 h-5 text-teal-400" />,
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-200 font-medium"
                  >
                    <div className="mt-0.5 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 12-WEEK STRUCTURE --- */}
      {/* --- 12-WEEK STRUCTURE (Simple & Minimalist UI) --- */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 text-slate-700 rounded-full mb-6 border border-slate-200 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              12-Week Structure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Phase 1 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-200 text-center flex flex-col items-center hover:bg-indigo-50/50 hover:border-indigo-200 transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-600 font-black text-lg mb-6 border border-slate-200">
                1
              </div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4">
                Phase 1 – Calm
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                Biological stabilization + yoga-based regulation
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-200 text-center flex flex-col items-center hover:bg-amber-50/50 hover:border-amber-200 transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-amber-600 font-black text-lg mb-6 border border-slate-200">
                2
              </div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4">
                Phase 2 – Rewire
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                Psychological restructuring + emotional processing
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-200 text-center flex flex-col items-center hover:bg-teal-50/50 hover:border-teal-200 transition-colors duration-300">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600 font-black text-lg mb-6 border border-slate-200">
                3
              </div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-4">
                Phase 3 – Align
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed">
                Faith-sensitive spiritual integration (optional & personalized)
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- IDEAL FOR & UNIQUE --- */}
      {/* --- IDEAL FOR & UNIQUE FEATURES (Compact UI) --- */}
      <section className="py-14 md:py-14 bg-indigo-50/30 border-t border-indigo-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Ideal For */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Target className="w-7 h-7 text-indigo-600" /> Ideal For
              </h2>
              <ul className="space-y-4 flex-grow">
                {[
                  "Healthcare professionals",
                  "Corporate leaders",
                  "Burnout recovery patients",
                  "Anxiety & stress disorders",
                  "Spiritually disconnected high achievers",
                  "Individuals seeking faith-aligned or secular healing",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-semibold text-slate-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Makes It Unique */}
            <div className="bg-slate-900 text-white p-8 md:p-10 rounded-[2rem] shadow-lg relative overflow-hidden flex flex-col h-full group">
              {/* Subtle ambient corner glow */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full pointer-events-none group-hover:bg-indigo-400/30 transition-colors duration-700"></div>

              <h2 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-3 relative z-10 border-b border-slate-800 pb-4">
                <Globe className="w-7 h-7 text-amber-400" /> What Makes This
                Program Unique
              </h2>

              <div className="space-y-4 relative z-10 flex-grow">
                {[
                  "Fully personalized",
                  "Functional lab-guided",
                  "Integrates IV, Yoga, Psychology",
                  "Faith-sensitive modules for Muslims, Hindus, Christians",
                  "Structured secular pathway for atheists",
                  "Respectful, inclusive, non-imposing model",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 font-medium text-slate-200"
                  >
                    <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY FOOTER --- */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2069&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Soft Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"></div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center flex flex-col items-center">
          <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mb-10 border border-white/10 shadow-2xl">
            <Compass className="w-10 h-10 text-amber-400" />
          </div>

          <p className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight mb-10 tracking-tight">
            This is not just stress reduction.{" "}
            <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-amber-200 pb-2">
              It is whole-person restoration
            </span>
          </p>

          <div className="h-px w-32 bg-slate-700 mb-10"></div>

          <p className="text-xl md:text-3xl font-medium text-slate-300 leading-relaxed max-w-3xl mx-auto italic">
            — biological, psychological, and spiritual — aligned with the
            patient’s worldview.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MindBodyBalance;
