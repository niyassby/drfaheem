import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import {
  CheckCircle2,
  Activity,
  Droplets,
  ShieldCheck,
  Microscope,
  Apple,
  Thermometer,
  Heart,
  Wind,
  Zap,
  Clock,
  Globe,
  Sparkles,
  Info,
  Calendar,
  Users,
  ClipboardCheck,
  Stethoscope,
  Dna,
  Shield,
  Gem,
  Phone,
  Leaf,
  FlaskConical,
  Flame,
  Scale
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';

const IntegrativeCancer = () => {
  const [ctaOpen, setCtaOpen] = useState(false);

  const focusAreas = [
    { area: "Immune Resilience", desc: "Strengthening the body's natural defenses.", icon: <ShieldCheck className="text-indigo-500" /> },
    { area: "Metabolic Optimization", desc: "Addressing inflammation and mitochondrial health.", icon: <Zap className="text-amber-500" /> },
    { area: "Side-Effect Reduction", desc: "Managing toxicity from conventional treatments.", icon: <Activity className="text-emerald-500" /> },
    { area: "Circulatory Support", desc: "Optimizing blood flow for better recovery.", icon: <Activity className="text-blue-500" /> },
    { area: "Muscle Preservation", desc: "Preventing cancer-related muscle loss (Sarcopenia).", icon: <Wind className="text-cyan-500" /> },
    { area: "Dignified Palliative Care", desc: "Focusing on quality of life and comfort.", icon: <Heart className="text-rose-500" /> },
    { area: "Advanced Cellular Immune Therapies", desc: "NK and Dendritic cell options (when eligible).", icon: <Dna className="text-purple-500" /> }
  ];

  const targetPatients = [
    "Patients undergoing chemotherapy",
    "Patients on immunotherapy",
    "Patients receiving radiation",
    "Patients with metastatic disease",
    "Patients seeking integrative supportive care",
    "Patients exploring immune-based therapies",
    "Families seeking advanced palliative support"
  ];

  const assessmentPoints = [
    "Cancer type, stage & molecular profile",
    "Current treatment protocol",
    "Performance status",
    "Nutritional status",
    "Immune and inflammatory markers",
    "Liver & kidney function",
    "Metabolic evaluation"
  ];

  const metabolicPlan = [
    "Anti-inflammatory nutrition",
    "Low glycemic strategy",
    "Protein optimization (to prevent muscle loss)",
    "Gut restoration protocols",
    "Omega-3 support",
    "Appetite-support planning"
  ];

  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
            alt="Cancer Care"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 to-gray-900/20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 py-1 px-4 mb-6 text-sm font-semibold tracking-widest text-indigo-200 uppercase bg-indigo-900/40 rounded-full border border-indigo-500/30">
              <Globe className="w-4 h-4" /> Advanced Integrative Cancer & Cellular Immunotherapy Program
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Comprehensive Supportive Oncology <br /> & Palliative Care
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-50 mb-10 leading-relaxed font-medium">
              At Tigris Valley – Kerala, India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Questions Section */}
      {/* <section className="py-20 bg-indigo-900 text-white overflow-hidden relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-12">
                When facing cancer, patients and families ask three questions:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  "Can quality of life be improved?",
                  "Can side effects be reduced?",
                  "Are there advanced immune-based options available?",
                ].map((q, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 flex flex-col items-center justify-center text-center group hover:bg-white/20 transition-all cursor-default"
                  >
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                      ?
                    </div>
                    <p className="text-lg font-bold leading-tight">{q}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-16 text-xl text-indigo-100 leading-relaxed max-w-4xl mx-auto">
                At Tigris Valley, we offer a physician-led
                integrative oncology program combining Functional Medicine,
                metabolic support, symptom-focused palliative care, and advanced
                cellular immunotherapy options — designed specifically for
                international patients.
              </p>
            </div>
          </div>
        </section> */}

      {/* Whole-Person Model */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight flex items-center gap-4">
                  <Dna className="w-8 h-8 text-indigo-600" /> A Whole-Person Cancer Support Model
                </h2>
                <p className="text-xl text-gray-900 leading-relaxed mb-6">
                  Our program{" "}
                  <span className="font-bold text-indigo-700 italic underline">
                    does not replace your oncologist
                  </span>
                  . It strengthens your body while you undergo — or after you
                  complete — conventional treatment.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p className="col-span-full text-lg text-gray-800 font-medium">
                  We focus on:
                </p>
                {focusAreas.map((focus, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100/50"
                  >
                    <div className="p-2 bg-white rounded-xl shadow-sm">
                      {focus.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-900 group-hover:text-indigo-600 transition-colors flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600" /> {focus.area}
                      </h4>
                      <p className="text-xs text-gray-600 font-medium">
                        {focus.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Program Is For */}
            <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white text-center">
              <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-4">
                <Leaf className="w-8 h-8 text-white" /> Who This Program Is For
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                {targetPatients.map((item, i) => (
                  <span
                    key={i}
                    className="px-6 py-3 bg-white/10 rounded-full text-sm md:text-base font-bold text-indigo-100 border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Assessment */}
      <section className="py-24 bg-indigo-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                  Assessment Phase
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight flex items-center gap-4">
                  <Microscope className="w-8 h-8 text-indigo-600" /> Step 1: Comprehensive Oncology & Metabolic Assessment
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Before beginning, we conduct a structured review to ensure
                  safety, eligibility, and personalization.
                </p>
                <div className="space-y-4">
                  {assessmentPoints.map((point, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                      <span className="text-gray-800 font-bold">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-indigo-900/5 border border-indigo-100">
                  <h3 className="text-2xl font-bold mb-6 text-indigo-900">
                    Safety & Personalization
                  </h3>
                  <p className="text-gray-600 leading-relaxed italic font-medium">
                    Each patient's molecular profile and current treatment
                    protocol are carefully analyzed to create a supportive
                    care plan that works in synergy with their primary
                    oncology treatment.
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                    <ShieldCheck className="w-10 h-10 text-indigo-600" />
                    <p className="text-sm font-bold text-indigo-950 uppercase tracking-tight">
                      Structured Medical Review Protocol
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Metabolic/Nutritional */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              Nutrition Phase
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight font-serif italic flex items-center justify-center gap-4">
              <Apple className="w-8 h-8 text-emerald-600" /> Step 2: Metabolic & Nutritional Oncology Support
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-2">
              Cancer is influenced by{" "}
              <span className="text-indigo-600 underline decoration-indigo-200">
                inflammation, insulin signaling, and mitochondrial function
              </span>
              .
            </p>
            <p className="text-xl text-gray-900 leading-relaxed mb-12">
              Your personalized plan may include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {metabolicPlan.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-left flex items-start gap-4"
                >
                  <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm text-emerald-600">
                    {idx + 1}
                  </span>
                  <span className="text-gray-800 font-bold text-sm leading-tight">
                    {plan}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-indigo-950 text-white p-8 rounded-3xl">
              <p className="text-2xl font-bold italic tracking-wide lowercase first-letter:uppercase">
                Goal: Preserve strength and immune capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 & 4: IV & FIR */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* IV Therapies */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-indigo-50">
              <h2 className="text-3xl font-bold mb-8 text-indigo-950 flex items-center gap-4">
                <Droplets className="w-8 h-8 text-indigo-600" /> Step 3: Advanced IV Integrative Therapies
              </h2>
              <p className="text-gray-600 mb-8 italic font-medium uppercase tracking-tight">
                All therapies are physician-supervised and individualized.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-indigo-700 flex items-center gap-3 mb-4 underline decoration-indigo-200">
                    <Droplets className="w-6 h-6" /> IV Nutritional Therapy
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 font-bold">
                    {[
                      "Fatigue reduction",
                      "Neuropathy care",
                      "Energy restoration",
                      "Detoxification",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-indigo-700 flex items-center gap-3 mb-4 underline decoration-indigo-200">
                    <Sparkles className="w-6 h-6" /> IV High-Dose Vitamin C
                    (Selected Clients)
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 font-bold">
                    {[
                      "Oxidative balance",
                      "Symptom relief",
                      "Improved wellbeing",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-indigo-700 flex items-center gap-3 mb-4 underline decoration-indigo-200">
                    <Gem className="w-6 h-6" />
                    Ozone Therapy (Carefully Selected Cases)
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 font-bold">
                    {[
                      "Oxygen utilization",
                      "Immune modulation",
                      "Inflammatory balance",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-rose-50 rounded-2xl border border-rose-100 flex items-center gap-4 text-rose-700 font-bold">
                  <Shield className="w-10 h-10 shrink-0" />
                  <span>
                    Safety screening is mandatory for all IV therapies.
                  </span>
                </div>
              </div>
            </div>

            {/* FIR Therapy */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-orange-50">
              <h2 className="text-3xl font-bold mb-8 text-orange-950 flex items-center gap-4">
                <Flame className="w-8 h-8 text-orange-600" /> Step 4: Far Infrared (FIR) Therapy
              </h2>
              <p className="text-orange-900/60 mb-8 font-medium italic">
                FIR therapy provides gentle thermal support that may:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                {[
                  {
                    text: "Improve circulation",
                    icon: <Activity className="text-orange-500" />,
                  },
                  {
                    text: "Promote relaxation",
                    icon: <Heart className="text-orange-500" />,
                  },
                  {
                    text: "Support lymphatic flow",
                    icon: <Wind className="text-orange-500" />,
                  },
                  {
                    text: "Improve sleep",
                    icon: <Clock className="text-orange-500" />,
                  },
                  {
                    text: "Enhance detoxification",
                    icon: <Droplets className="text-orange-500" />,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 bg-orange-50 rounded-2xl border border-orange-100"
                  >
                    {item.icon}
                    <span className="font-bold text-orange-900 text-sm leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 pt-8 border-t border-orange-100 text-orange-800 font-bold italic text-center">
                Sessions are customized based on patient stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Advanced Cellular Immunotherapy */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-indigo-500 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Advanced Research & Clinical Support
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic font-serif uppercase tracking-widest leading-tight flex items-center justify-center gap-4">
              <Dna className="w-8 h-8 text-white" /> Step 5: Advanced Cellular Immunotherapy Options
            </h2>
            <p className="text-indigo-200 text-xl max-w-3xl mx-auto">
              For eligible patients, we coordinate advanced immune-based
              therapies through specialized collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dendritic Cell Therapy */}
            <div className="bg-white/5  p-10 rounded-[3rem] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <FlaskConical className="w-10 h-10 text-indigo-400" />
                  Dendritic Cell Therapy
                </h3>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed italic first-line:uppercase font-bold tracking-tight">
                  Dendritic cells help the immune system recognize tumor
                  antigens.
                </p>

                <div className="space-y-6 mb-12">
                  <p className="font-bold text-sm text-indigo-300 uppercase tracking-widest">
                    Process Overview:
                  </p>
                  {[
                    "Immune cells are collected",
                    "Dendritic cells are trained to identify tumor markers",
                    "Cells are reintroduced to stimulate targeted immune response",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-indigo-500/30 rounded-full flex items-center justify-center shrink-0 border border-indigo-400/30 font-bold text-xs">
                        {i + 1}
                      </div>
                      <span className="text-indigo-50 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-indigo-300 font-bold text-sm mb-4">
                  Eligibility depends on:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Tumor type",
                    "Disease burden",
                    "Overall health status",
                  ].map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-500/40 rounded-full text-[10px] font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* NK Cell Therapy */}
            <div className="bg-white/5  p-10 rounded-[3rem] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <Shield className="w-10 h-10 text-emerald-400" />
                  Natural Killer (NK) Cell Therapy
                </h3>
                <p className="text-emerald-100 text-lg mb-8 leading-relaxed italic first-line:uppercase font-bold tracking-tight">
                  NK cells are part of innate immunity and target abnormal
                  cells.
                </p>

                <div className="space-y-6 mb-12">
                  <p className="font-bold text-sm text-emerald-300 uppercase tracking-widest">
                    In this therapy:
                  </p>
                  {[
                    "NK cells are collected and expanded",
                    "Activated cells are infused back",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-emerald-500/30 rounded-full flex items-center justify-center shrink-0 border border-emerald-400/30 font-bold text-xs text-white">
                        {i + 1}
                      </div>
                      <span className="text-indigo-50 font-bold">{item}</span>
                    </div>
                  ))}

                  <div className="mt-8">
                    <p className="font-bold text-sm text-emerald-300 uppercase tracking-widest mb-4">
                      Potential Objectives:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Enhance immune surveillance",
                        "Support tumor-targeted immune response",
                      ].map((obj, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Sparkles className="w-4 h-4 text-emerald-400" />
                          <span className="text-indigo-50 font-bold">
                            {obj}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="p-4 bg-emerald-500/20 rounded-2xl flex items-center gap-4 text-emerald-100 font-bold italic text-sm">
                  <ShieldCheck className="w-8 h-8 shrink-0" />
                  <span>
                    Strict eligibility and medical screening are required.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Palliative Care & Muscle Preservation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Palliative Care */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight flex items-center gap-4">
                <Heart className="w-8 h-8 text-indigo-600" /> Advanced Palliative & Symptom Support
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed italic font-medium">
                When disease is advanced or progressive, our focus shifts
                toward:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  {
                    text: "Pain relief support",
                    icon: <Activity className="text-indigo-600" />,
                  },
                  {
                    text: "Fatigue management",
                    icon: <Zap className="text-indigo-600" />,
                  },
                  {
                    text: "Appetite improvement",
                    icon: <Apple className="text-indigo-600" />,
                  },
                  {
                    text: "Neuropathy care",
                    icon: <Activity className="text-indigo-600" />,
                  },
                  {
                    text: "Emotional and spiritual support",
                    icon: <Heart className="text-indigo-600" />,
                  },
                  {
                    text: "Comfort-focused IV nutritional drips",
                    icon: <Droplets className="text-indigo-600" />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-5 bg-indigo-50 rounded-2xl border border-indigo-100/50"
                  >
                    <div className="p-2 bg-white rounded-xl shadow-sm">
                      {item.icon}
                    </div>
                    <span className="font-bold text-indigo-900 text-sm leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-900 text-white p-6 rounded-2xl text-center">
                <p className="text-lg font-bold italic tracking-wider">
                  We prioritize dignity, clarity, and comfort.
                </p>
              </div>
            </div>

            {/* Muscle Preservation */}
            <div className="lg:w-1/2 bg-gray-50 p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-8 text-indigo-950 leading-tight flex items-center gap-4">
                <Activity className="w-8 h-8 text-indigo-600" /> Muscle Preservation & Functional Recovery
              </h2>
              <p className="text-gray-600 mb-10 italic font-bold">
                Cancer-related muscle loss worsens outcomes. Our structured
                support includes:
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Light supervised resistance exercises",
                    desc: "Targeted to patient energy levels.",
                  },
                  {
                    title: "Fatigue-adapted movement",
                    desc: "Gentle physical support.",
                  },
                  {
                    title: "Nutritional muscle preservation",
                    desc: "Optimizing protein and caloric intake.",
                  },
                  {
                    title: "Post-treatment rehabilitation support",
                    desc: "Transitioning back to functional life.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-indigo-600 font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-sm text-gray-500 font-medium italic">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International CTA */}
      <section className="py-24 bg-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Globe className="w-[1000px] h-[1000px] text-white -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto bg-white/5  p-10 md:p-20 rounded-[4rem] border border-white/10">
            <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
              <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 font-serif uppercase leading-tight flex items-center gap-4">
                  <Globe className="w-8 h-8 text-white" /> Personalized for Clients Across the Globe
                </h2>
                <p className="text-indigo-100 text-xl italic leading-tight font-medium tracking-tight">
                  Kerala offers a calm, healing environment ideal for recovery
                  and structured supportive care.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Pre-arrival virtual consultation",
                  "2–4 week intensive integrative programs",
                  "Cellular therapy coordination (if eligible)",
                  "Personalized schedule planning",
                  "Detailed medical documentation",
                  "Collaboration with your home oncologist",
                  "Post-discharge remote follow-up",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-sm text-indigo-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethical Integrity Block */}
            <div className="bg-white/10 p-10 rounded-[2.5rem] border border-white/20">
              <h3 className="text-2xl text-white font-bold mb-8 text-center uppercase tracking-widest flex items-center justify-center gap-4">
                <Scale className="w-8 h-8 text-white" /> Ethical & Medical Integrity
              </h3>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-indigo-100">
                {[
                  "Does not replace standard oncology treatment",
                  "Is not presented as a cure",
                  "Requires oncologist coordination",
                  "Is individualized",
                  "Follows careful screening protocols",
                ].map((point, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-indigo-200 text-xs italic font-bold">
                We focus on safe, physician-guided integrative support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tigris & Final CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-950 mb-8 italic flex items-center justify-center gap-4">
              <Leaf className="w-8 h-8 text-indigo-600" /> Why Choose Tigris Valley?
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {[
                "Integrative Oncology + Functional Medicine",
                "Cellular Immunotherapy Options",
                "Structured Palliative Care Model",
                "Personalized Treatment Plans",
                "Ethical & Transparent Approach",
                "International Patient Coordination",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-indigo-50 shadow-sm"
                >
                  <CheckCircle2 className="text-emerald-500 shrink-0" />
                  <span className="font-bold text-gray-800 text-left leading-tight uppercase tracking-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-16 text-2xl md:text-3xl font-extrabold italic text-indigo-950 max-w-4xl mx-auto">
              We believe cancer care must address the body, mind, immunity,
              and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Content-Specific CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-950 p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Dna className="absolute top-6 right-10 w-40 h-40 text-indigo-300" />
              <ShieldCheck className="absolute bottom-4 left-8 w-28 h-28 text-indigo-300" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              {/* Left */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-indigo-800/60 border border-indigo-700/50 text-indigo-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Phone className="w-3.5 h-3.5" /> Begin Your Consultation
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  If you or your loved one is seeking:
                </h2>
                <ul className="space-y-3 mb-8">
                  {[
                    "Advanced integrative cancer support",
                    "Cellular immunotherapy evaluation",
                    "Structured palliative care",
                    "Improved quality of life during treatment",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-indigo-200 font-medium text-sm">
                  Our team will guide you through a structured eligibility and consultation process.
                </p>
              </div>
              {/* Right */}
              <div className="w-full lg:w-auto flex flex-col gap-4">
                <button
                  onClick={() => setCtaOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-indigo-50 transition-all duration-200 hover:-translate-y-0.5 w-full lg:w-auto whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Request a Case Review
                </button>
                <p className="text-indigo-300 text-xs font-medium text-center">
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

export default IntegrativeCancer;
