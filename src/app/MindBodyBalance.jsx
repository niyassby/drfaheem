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
  Flower2,
  Info
} from "lucide-react";

const MindBodyBalance = () => {
  return (
    <div className="bg-white font-sans text-gray-900 w-full overflow-x-hidden selection:bg-indigo-200 selection:text-indigo-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?q=80&w=2069&auto=format&fit=crop"
            alt="Mind Body Balance"
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
            <span className="inline-flex items-center gap-2 py-1 px-4 mb-6 text-sm font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/30 rounded-full border border-indigo-500/30">
              <Sparkles className="w-4 h-4 text-amber-200" />
              Neuro-Psycho-Spiritual Framework
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Advanced Mind–Body <br /> Balance Program
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
              At Tigris Valley, mind–body balance is approached through a
              personalized neuro-psycho-spiritual framework that respects all
              belief systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900">
              This program integrates:
            </h2>
            <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Functional & Integrative Medicine",
              "Clinical Psychology",
              "Therapeutic Yoga",
              "Faith-aligned Spiritual Healing (Optional)",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 leading-tight">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-full border border-gray-200 shadow-sm text-sm">
              <Info className="w-5 h-5 text-indigo-500" />
              Every spiritual module is patient-directed and never imposed.
            </p>
          </div>
        </div>
      </section>

      {/* --- MODULES 1, 2, 3 (Clinical Foundation) --- */}
      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* 1 Biological Foundation */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-500 flex flex-col">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-start gap-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  Biological Foundation{" "}
                  <span className="block text-sm font-bold text-indigo-500 uppercase tracking-widest mt-1">
                    (For All Patients)
                  </span>
                </div>
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
              <h3 className="text-2xl font-black text-slate-900 mb-4 flex items-center gap-4">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                  <Wind className="w-6 h-6" />
                </div>
                Therapeutic Yoga
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
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Brain className="w-6 h-6" />
                </div>
                Clinical Psychology Integration
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
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-16 lg:mb-20 border-b border-gray-800 pb-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-900/30 border border-indigo-800/50 rounded-2xl mb-6 shadow-sm">
                <Globe className="w-8 h-8 text-indigo-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight text-white">
                Faith-Sensitive <br className="hidden md:block" /> Spiritual
                Integration
              </h2>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-indigo-900/40 p-6 md:p-8 rounded-[2rem] border border-indigo-800/50">
                <p className="text-lg md:text-xl text-indigo-100 font-medium leading-relaxed">
                  Healing is deeply personal. Our protocols are adapted based
                  entirely on religious/spiritual identity and comfort, ensuring
                  an inclusive and supportive environment.
                </p>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Muslim Patients */}
            <div className="group bg-green-900/10 p-8 md:p-10 rounded-[2rem] border border-green-800/30 shadow-sm hover:shadow-lg hover:border-green-600/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-green-900/40 rounded-xl text-green-400">
                  <Moon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  For Muslim Patients
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-green-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 shadow-sm">
                  <p className="font-bold text-green-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Wind className="w-4 h-4" /> Sufism-Inspired{" "}
                    <span className="text-[10px] text-gray-400 font-normal tracking-widest bg-gray-800 px-2 py-1 rounded ml-auto border border-gray-700">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hindu Patients */}
            <div className="group bg-orange-900/10 p-8 md:p-10 rounded-[2rem] border border-orange-800/30 shadow-sm hover:shadow-lg hover:border-orange-600/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-orange-900/40 rounded-xl text-orange-400">
                  <Sun className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  For Hindu Patients
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-orange-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 shadow-sm">
                  <p className="font-bold text-orange-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Activity className="w-4 h-4" /> Mantra & Breath{" "}
                    <span className="text-[10px] text-gray-400 font-normal tracking-widest bg-gray-800 px-2 py-1 rounded ml-auto border border-gray-700">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Christian Patients */}
            <div className="group bg-blue-900/10 p-8 md:p-10 rounded-[2rem] border border-blue-800/30 shadow-sm hover:shadow-lg hover:border-blue-600/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-blue-900/40 rounded-xl text-blue-400">
                  <Heart className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  For Christian Patients
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-blue-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 shadow-sm">
                  <p className="font-bold text-blue-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Atheist / Secular Patients */}
            <div className="group bg-indigo-900/10 p-8 md:p-10 rounded-[2rem] border border-indigo-800/30 shadow-sm hover:shadow-lg hover:border-indigo-600/50 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-indigo-900/40 rounded-xl text-indigo-400">
                  <Leaf className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  For Atheist / Secular
                </h4>
              </div>

              <div className="space-y-8 flex-grow relative z-10">
                <div>
                  <p className="font-bold text-indigo-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 shadow-sm">
                  <p className="font-bold text-indigo-400 mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
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
                        className="flex items-start gap-3 text-sm text-gray-300 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-gray-800/60 p-4 rounded-xl border border-gray-700 text-center relative z-10">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  No religious language is used unless requested.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODULES 5 & 6 (AYUSH & Sleep) - Compact UI --- */}
      {/* --- MODULES 5 & 6 (AYUSH & Sleep) --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* 5 AYUSH */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-100 text-green-700 rounded-xl flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
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
                    className="flex items-start gap-3 text-gray-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6 Sleep & Circadian */}
            <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center shrink-0">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  Sleep & Circadian Reset
                </h3>
              </div>

              <ul className="space-y-4 flex-grow">
                {[
                  {
                    text: "Morning sunlight optimization",
                    icon: <Sun className="w-5 h-5 text-amber-500" />,
                  },
                  {
                    text: "Evening cortisol reduction protocol",
                    icon: <Moon className="w-5 h-5 text-indigo-500" />,
                  },
                  {
                    text: "Digital detox",
                    icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
                  },
                  {
                    text: "Melatonin rhythm correction",
                    icon: <Activity className="w-5 h-5 text-teal-500" />,
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 font-medium"
                  >
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 12-WEEK STRUCTURE --- */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              12-Week Structure
            </h2>
            <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* Phase 1 */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-lg text-center flex flex-col items-center hover:shadow-xl hover:border-indigo-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-500/10 text-indigo-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                <Wind className="w-8 h-8" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                Phase 1 – Calm
              </h4>
              <p className="text-slate-400 font-medium leading-relaxed">
                Biological stabilization + yoga-based regulation
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-lg text-center flex flex-col items-center hover:shadow-xl hover:border-amber-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                <Brain className="w-8 h-8" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                Phase 2 – Rewire
              </h4>
              <p className="text-slate-400 font-medium leading-relaxed">
                Psychological restructuring + emotional processing
              </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-slate-900 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-lg text-center flex flex-col items-center hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
                <Compass className="w-8 h-8" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4">
                Phase 3 – Align
              </h4>
              <p className="text-slate-400 font-medium leading-relaxed">
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
            <div className="bg-gray-50 p-8 md:p-10 rounded-[2rem] shadow-sm border border-slate-200 flex flex-col h-full hover:shadow-md transition-shadow">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3 border-b border-slate-100 pb-4">
                <Globe className="w-7 h-7 text-amber-500" /> What Makes This
                Program Unique
              </h2>

              <div className="space-y-4 flex-grow">
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
                    className="flex items-start gap-3 font-medium text-slate-700"
                  >
                    <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY FOOTER --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-10 text-indigo-600 shadow-sm">
            <Compass className="w-8 h-8" />
          </div>

          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            This is not just stress reduction.{" "}
            <br className="hidden lg:block" />
            <span className="text-indigo-600">
              It is whole-person restoration
            </span>
          </p>

          <div className="h-1.5 w-24 bg-gray-200 mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl font-medium text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
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
