import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import {
  CheckCircle2,
  Activity,
  ShieldCheck,
  Apple,
  Heart,
  Wind,
  Zap,
  Clock,
  Globe,
  Sparkles,
  Users,
  ClipboardCheck,
  Stethoscope,
  Shield,
  Gem,
  Sunrise,
  Sun,
  Sunset,
  Moon,
  Home,
  Bed,
  Coffee,
  PhoneCall,
  Calendar
} from 'lucide-react';

const ElderCarePage = () => {

    
    const trustReasons = [
    {
      title: "Medical-Led Geriatric Care",
      desc: "Our programs are guided by physicians experienced in managing the complex health needs of ageing individuals.",
      icon: <Stethoscope /> // Removed preset colors so the hover effect controls them
    },
    {
      title: "24/7 Professional Nursing Care",
      desc: "Round-the-clock nursing supervision ensures continuous monitoring, medication management, and safety.",
      icon: <Clock />
    },
    {
      title: "Personalized Care Plans",
      desc: "Every resident receives a customized care plan tailored to their medical condition, mobility, nutritional needs, and emotional wellbeing.",
      icon: <ClipboardCheck />
    },
    {
      title: "Safe and Comfortable Environment",
      desc: "Our elder care residence provides a secure, hygienic, and peaceful living environment for seniors.",
      icon: <ShieldCheck />
    },
    {
      title: "Compassionate Caregivers",
      desc: "Our team treats every resident with kindness, patience, and respect, ensuring dignity at every stage of care.",
      icon: <Heart />
    }
  ];

  const signsNeeded = [
    "Frequent falls or mobility problems",
    "Memory loss, confusion, or cognitive decline",
    "Difficulty managing medications",
    "Chronic illnesses requiring regular monitoring",
    "Difficulty performing daily activities such as bathing or dressing",
    "Frequent hospitalizations",
    "Loneliness or emotional distress"
  ];

  const ageRelatedConditions = [
    "Diabetes",
    "Hypertension and heart disease",
    "Arthritis and chronic pain",
    "Parkinson’s disease",
    "Dementia and cognitive decline",
    "Osteoporosis and mobility disorders"
  ];

  const healthStrategies = [
    { title: "Functional & Personalized Health Strategies", desc: "Addressing metabolic, nutritional, and lifestyle factors that influence ageing and chronic illness." },
    { title: "Rehabilitation & Mobility Support", desc: "Physiotherapy and fall-prevention programs designed to maintain strength and independence." },
    { title: "Cognitive & Emotional Wellbeing", desc: "Support for memory health, emotional stability, and mental wellbeing." },
    { title: "Nutritional Optimization", desc: "Personalized dietary plans designed to address nutritional deficiencies common in ageing." }
  ];

  const faqs = [
    {
      q: "What is geriatric care?",
      a: "Geriatric care focuses on the <strong>health and wellbeing of elderly individuals</strong>, addressing age-related conditions and supporting independence and quality of life.",
    },
    {
      q: "How do I know if my loved one needs assisted living?",
      a: "If they struggle with daily activities, medication management, mobility, or chronic illness monitoring, assisted care may be beneficial.",
    },
    {
      q: "Do you provide 24/7 nursing care?",
      a: "Yes. <strong>Round-the-clock professional nursing care</strong> is available for residents who require continuous medical supervision.",
    },
    {
      q: "Can elderly patients receive care at home?",
      a: "Yes. <strong>Home nursing services</strong> are available for seniors who prefer to remain in the comfort of their homes.",
    },
    {
      q: "Do you manage dementia or Parkinson’s disease?",
      a: "Yes. Our team provides specialized care for <strong>neurological and cognitive conditions common in ageing</strong>.",
    },
    {
      q: "Can families visit residents?",
      a: "Yes. Family involvement is encouraged as emotional support plays an important role in elderly wellbeing.",
    }
  ];

      const dailyRoutine = [
    {
      time: "Morning",
      items: [
        "Health monitoring and nursing care",
        "Gentle physiotherapy or mobility exercises",
        "Nutritious breakfast",
      ],
      icon: <Sunrise className="w-8 h-8 text-amber-500" />,
    },
    {
      time: "Midday",
      items: [
        "Doctor consultations if required",
        "Relaxation and social interaction",
        "Balanced therapeutic meals",
      ],
      icon: <Sun className="w-8 h-8 text-orange-500" />,
    },
    {
      time: "Afternoon",
      items: [
        "Rehabilitation sessions",
        "Cognitive and recreational activities",
      ],
      icon: <Coffee className="w-8 h-8 text-indigo-400" />,
    },
    {
      time: "Evening",
      items: [
        "Medication supervision",
        "Emotional support and relaxation",
        "Overnight safety monitoring",
      ],
      icon: <Moon className="w-8 h-8 text-indigo-800" />,
    },
      ];
    
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop"
            alt="Elder Care"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 to-indigo-900/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 mb-6 text-sm font-semibold tracking-widest text-indigo-200 uppercase bg-indigo-900/40 rounded-full border border-indigo-500/30">
              Advanced Geriatric & Elder Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Advanced Geriatric & Elder Care
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-50 mb-10 leading-relaxed font-medium">
              Dignified Living. Compassionate Care. Medical Excellence for the
              Golden Years. <br /> Tigris Valley — Redefining Elder Care with
              Compassion and Clinical Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Questions Section (Intro) */}
      <section className="py-20 bg-indigo-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 leading-relaxed">
              At Tigris Valley, we believe ageing should be accompanied by{" "}
              <span className="text-amber-400">
                respect, safety, comfort, and the highest standards of medical
                care.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Our Advanced Geriatric & Elder Care Department provides comprehensive healthcare and living support for seniors who require medical supervision, assisted living, rehabilitation, or professional home healthcare services.",
                "Whether your loved one needs independent living, assistance with daily activities, 24/7 nursing supervision, or care at home, our experienced team ensures personalized, compassionate, and dignified care.",
                "By integrating modern medicine, geriatric expertise, rehabilitation, and personalized health strategies, we focus not only on treating illness but also on enhancing quality of life, preserving independence, and supporting healthy ageing.",
              ].map((q, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 p-8 rounded-[2rem] border border-white/20 flex flex-col items-center justify-center text-center group hover:bg-white/20 transition-all cursor-default"
                >
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl shadow-lg">
                    {idx + 1}
                  </div>
                  <p className="font-bold leading-relaxed">{q}</p>
                </motion.div>
              ))}
            </div>
            <p className="mt-16 text-2xl text-indigo-100 leading-relaxed max-w-4xl mx-auto font-serif italic text-amber-200">
              Because those who cared for us deserve the very best care in
              return.
            </p>
          </div>
        </div>
      </section>

      {/* Why Families Trust Us - REDESIGNED */}
      <section className="py-18 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        {/* Decorative background blurs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Column - Sticky Header & Intro */}
            <div className="lg:w-5/12 lg:sticky lg:top-32 z-20">
              <span className="inline-block py-1.5 px-4 mb-6 text-xs font-bold tracking-widest text-indigo-700 uppercase bg-indigo-100/60 rounded-full border border-indigo-200/50">
                The Tigris Difference
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
                Why Families Trust <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">
                  Tigris Valley
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                Choosing elder care for a loved one is one of the most important
                decisions a family can make. Families trust Tigris Valley
                because we combine{" "}
                <span className="font-bold text-indigo-900">
                  medical excellence with compassionate caregiving
                </span>
                .
              </p>

              {/* Added Image for Emotional Connection */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-white relative group"
              >
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1478061653917-455ba7f4a541?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Compassionate Caregiving"
                  className="w-full h-64 lg:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </div>

            {/* Right Column - Scrolling Feature Cards */}
            <div className="lg:w-7/12 grid gap-6">
              {trustReasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group relative bg-white p-8 md:p-6 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Subtle Hover Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-indigo-50/0 to-indigo-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                    {/* Icon Container with Hover Animation */}
                    <div className="w-14 h-14 shrink-0 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-all duration-300 shadow-inner group-hover:shadow-indigo-600/30">
                      {/* Using React.cloneElement to safely change the icon color on hover to white */}
                      <div className="transition-colors duration-300 group-hover:text-white [&>svg]:w-7 [&>svg]:h-7">
                        {React.cloneElement(reason.icon, {
                          className:
                            "text-indigo-600 group-hover:text-white transition-colors duration-300",
                        })}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Assessment (Specialized Geriatric Medical Care) */}
      <section className="py-24 bg-indigo-50/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                  Our Integrated Medical Approach to Healthy Ageing
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight">
                  🩺 Specialized Geriatric Medical Care
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  At Tigris Valley, elder care goes beyond disease management.
                  Our approach focuses on supporting vitality, independence, and
                  overall wellbeing. Management of age-related conditions such
                  as:
                </p>
                <div className="space-y-4">
                  {ageRelatedConditions.map((point, i) => (
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
                    Medical Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed italic font-medium">
                    Our physician-led care provides comprehensive management of
                    chronic illnesses while prioritizing the safety, comfort,
                    and dignity of every individual, seamlessly adapting as
                    healthcare needs evolve.
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
                    <Stethoscope className="w-10 h-10 text-indigo-600" />
                    <p className="text-sm font-bold text-indigo-950 uppercase tracking-tight">
                      Continuous Medical Monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Metabolic/Nutritional (Holistic Strategies) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">
              Holistic Support
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight font-serif italic">
              🥗 Further Health Strategies & Optimization
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              We integrate rehabilitation and nutritional science to promote a
              balanced, deeply healing environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
              {healthStrategies.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-start gap-4"
                >
                  <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm text-emerald-600 font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="text-indigo-900 font-bold mb-1">
                      {plan.title}
                    </h4>
                    <p className="text-gray-700 text-sm font-medium leading-tight">
                      {plan.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-indigo-950 text-white p-8 rounded-3xl">
              <p className="text-2xl font-bold italic tracking-wide lowercase first-letter:uppercase">
                Goal: Preserving independence, supporting healthy ageing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 & 4: IV & FIR -> Our Elder Care Programs (Part 1) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 mb-6">
              Our Elder Care Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To meet the diverse needs of seniors, Tigris Valley offers
              structured elder care programs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Independent Living */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-indigo-50">
              <h2 className="text-3xl font-bold mb-4 text-indigo-950 flex items-center gap-3">
                <Home className="text-indigo-600 w-8 h-8" /> Independent Living
                Program
              </h2>
              <p className="text-gray-600 mb-8 italic font-medium">
                Designed for seniors who are largely independent but prefer a
                safe environment with access to medical care when needed.
                Services include:
              </p>

              <div className="space-y-4">
                {[
                  "Comfortable residential accommodation",
                  "Regular health monitoring",
                  "Doctor consultation when required",
                  "Balanced and nutritious meals",
                  "Access to physiotherapy and rehabilitation services",
                  "Social engagement and recreational activities",
                  "Secure living environment",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-700 font-bold border-b border-gray-50 pb-3 last:pb-0 last:border-0"
                  >
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Assisted Living */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-orange-50">
              <h2 className="text-3xl font-bold mb-4 text-orange-950 flex items-center gap-3">
                <Users className="text-orange-600 w-8 h-8" /> Assisted Living
                Program
              </h2>
              <p className="text-orange-900/60 mb-8 font-medium italic">
                For seniors who require assistance with daily activities while
                maintaining independence. Services include:
              </p>

              <div className="space-y-4">
                {[
                  "Assistance with bathing, dressing, and mobility",
                  "Medication reminders and supervision",
                  "Regular doctor consultations",
                  "24/7 caregiver support",
                  "Nutritionally planned meals",
                  "Physiotherapy and fall-prevention programs",
                  "Emotional and social wellbeing support",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-700 font-bold border-b border-orange-50/50 pb-3 last:pb-0 last:border-0"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5: Advanced Cellular Immunotherapy -> Our Elder Care Programs (Part 2) */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Advanced Medical Nursing */}
            <div className="bg-white/5  p-10 md:p-12 rounded-[3rem] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <Activity className="w-10 h-10 text-indigo-400" /> Advanced
                  Medical Nursing Care
                </h3>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed italic first-line:uppercase font-bold tracking-tight">
                  For elderly individuals with complex medical conditions
                  requiring continuous monitoring. Services include:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "24/7 professional nursing care",
                    "Physician supervision",
                    "Medication administration and monitoring",
                    "Chronic disease management",
                    "Post-hospital recovery care",
                    "Wound care and medical procedures",
                    "Physiotherapy and rehabilitation",
                    "Nutritional therapy and specialized diets",
                    "Palliative and supportive care",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 bg-indigo-500/30 rounded-full flex items-center justify-center shrink-0 border border-indigo-400/30">
                        <CheckCircle2 className="w-4 h-4 text-indigo-300" />
                      </div>
                      <span className="text-indigo-50 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Home Nursing */}
            <div className="bg-white/5  p-10 md:p-12 rounded-[3rem] border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                  <Bed className="w-10 h-10 text-emerald-400" /> Home Nursing &
                  Elder Care at Home
                </h3>
                <p className="text-emerald-100 text-lg mb-6 leading-relaxed italic first-line:uppercase font-bold tracking-tight">
                  For families who prefer their loved ones to remain in familiar
                  surroundings, Tigris Valley offers professional home
                  healthcare services. Our trained nurses provide high-quality
                  medical care at home under physician supervision.
                </p>
                <p className="font-bold text-sm text-emerald-300 uppercase tracking-widest mb-4">
                  Services include:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "24/7 home nursing care",
                    "Elderly caregiving and companionship",
                    "Post-surgical recovery care",
                    "Medication administration",
                    "Wound care and dressing",
                    "Physiotherapy at home",
                    "Monitoring of chronic medical conditions",
                    "Palliative care support",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 bg-emerald-500/30 rounded-full flex items-center justify-center shrink-0 border border-emerald-400/30">
                        <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                      </div>
                      <span className="text-indigo-50 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="p-4 bg-emerald-500/20 rounded-2xl flex items-center gap-4 text-emerald-100 font-bold italic text-sm">
                  <ShieldCheck className="w-8 h-8 shrink-0" />
                  <span>
                    This service allows seniors to receive professional medical
                    care while remaining in the comfort of their homes.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-indigo-950 mb-6">
                A Day at Tigris Valley Elder Care Residence
              </h2>
              <p className="text-lg text-gray-700">
                Life at Tigris Valley is designed to balance medical care,
                comfort, and overall wellbeing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {dailyRoutine.map((phase, idx) => (
                <div
                  key={idx}
                  className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100 text-center flex flex-col items-center"
                >
                  <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
                    {phase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-6">
                    {phase.time}
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-700 font-medium">
                    {phase.items.map((item, iIdx) => (
                      <li key={iIdx} className="leading-tight">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-amber-100 text-amber-900 p-6 rounded-2xl text-center font-bold text-lg max-w-3xl mx-auto tracking-wide italic">
              Every aspect of daily life is designed to ensure comfort, dignity,
              and security.
            </div>
          </div>
        </div>
      </section>

      {/* International CTA -> Why Tigris Valley is Unique */}
      {/* ✨ Redesigned: Why Tigris Valley is Unique */}
      <section className="py-24 bg-slate-950 relative overflow-hidden z-0">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] translate-y-1/3 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-4 h-4" /> The Tigris Advantage
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-serif leading-tight">
                Why Tigris Valley is Unique in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                  Elder Care
                </span>
              </h2>
              <p className="text-indigo-100 text-lg md:text-xl italic leading-relaxed font-medium max-w-3xl mx-auto">
                Our elder care program combines medical expertise, compassionate
                caregiving, and personalized support.
              </p>
            </motion.div>
          </div>

          {/* Offerings Grid (Bento Box Style) */}
          <div className="max-w-6xl mx-auto mb-16">
            <p className="text-center text-indigo-300 font-bold uppercase tracking-widest text-sm mb-8">
              We offer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  text: "Physician-led geriatric care",
                  icon: <Stethoscope />,
                  color: "text-blue-400",
                },
                {
                  text: "Integrated medical and supportive services",
                  icon: <Activity />,
                  color: "text-emerald-400",
                },
                {
                  text: "24/7 nursing supervision",
                  icon: <Clock />,
                  color: "text-amber-400",
                },
                {
                  text: "Personalized care plans",
                  icon: <ClipboardCheck />,
                  color: "text-purple-400",
                },
                {
                  text: "Safe and comfortable residential environment",
                  icon: <ShieldCheck />,
                  color: "text-rose-400",
                },
                {
                  text: "Professional home nursing services",
                  icon: <Home />,
                  color: "text-teal-400",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex flex-col items-center text-center p-8 bg-white/5  rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${item.color}`}
                  >
                    {React.cloneElement(item.icon, { className: "w-7 h-7" })}
                  </div>
                  <span className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}

              {/* 7th Item - Spans across columns for a grand finish */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="group lg:col-span-3 md:col-span-2 flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40  rounded-3xl border border-indigo-500/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 border border-indigo-400/30">
                  <Heart className="w-7 h-7 text-indigo-300 group-hover:text-rose-400 transition-colors duration-500" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-white tracking-wide text-center sm:text-left">
                  Respectful and dignified elder care
                </span>
              </motion.div>
            </div>
          </div>

          {/* Mission Statement Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative overflow-hidden rounded-[2.5rem] p-[2px]"
          >
            {/* Animated Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-500 animate-[spin_4s_linear_infinite] opacity-50"></div>

            <div className="relative bg-slate-950 px-8 py-12 md:py-16 rounded-[2.4rem] flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-500/5 rounded-[2.4rem]"></div>

              <h3 className="relative z-10 text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center leading-relaxed md:leading-snug max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6">
                <Globe className="w-12 h-12 text-amber-400 shrink-0 md:animate-pulse" />
                <span className="italic font-serif">
                  "Our mission is to help seniors live with comfort,
                  independence, and peace of mind."
                </span>
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="">
            <div className="">
              <h2 className="text-4xl font-extrabold mb-8 text-indigo-950 leading-tight">
                Frequently Asked Questions About Elder Care
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                  >
                    <h5 className="font-bold text-indigo-800 mb-2">{faq.q}</h5>
                    <p
                      className="text-base text-gray-700"
                      dangerouslySetInnerHTML={{ __html: faq.a }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Consultation Block */}
      {/* 📞 Redesigned: Speak to Our Elder Care Team (Wider & Compact Height) */}
      <section className="py-16 md:py-6 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-indigo-700/50"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
              {/* Left Column: Intro & Assistance List */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                      <PhoneCall className="w-6 h-6 text-amber-400" />
                    </div>
                    Speak to Our Elder Care Team
                  </h2>
                  <p className="text-indigo-100 text-lg leading-relaxed mb-4">
                    Choosing the right care for a loved one can feel
                    overwhelming. Our team at Tigris Valley is here to guide you
                    with{" "}
                    <span className="font-bold text-white">
                      medical expertise, compassion, and clarity.
                    </span>
                  </p>
                  <p className="text-indigo-100 text-lg leading-relaxed">
                    Whether you are exploring assisted living, residential elder
                    care, 24/7 nursing services, or home healthcare, we will
                    help you identify the most appropriate care plan.
                  </p>
                </div>

                <div>
                  <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-5">
                    Our team can assist with:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Geriatric medical consultation",
                      "Guidance on elder care programs",
                      "Assisted living enquiries",
                      "Home nursing arrangements",
                      "Family counselling and support",
                    ].map((item, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg text-sm font-semibold text-indigo-50 border border-white/10 flex items-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: CTA Card */}
              <div className="bg-white/10 backdrop-blur-md p-8 lg:p-10 rounded-[2rem] border border-white/20 shadow-xl relative">
                <div className="absolute -top-5 -right-5 w-16 h-16 bg-amber-500 rounded-2xl rotate-12 flex items-center justify-center shadow-lg pointer-events-none hidden md:flex">
                  <Calendar className="w-8 h-8 text-white -rotate-12" />
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-4 pr-8">
                  Schedule a Family Consultation
                </h3>
                <p className="text-indigo-100 leading-relaxed font-medium italic mb-8 text-sm md:text-base">
                  If you are considering elder care for a parent or family
                  member, we invite you to connect with our team. Our
                  specialists will help you make informed decisions for your
                  loved one's health, safety, and dignity.
                </p>

                <button className="w-full bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition transform hover:-translate-y-1 uppercase tracking-wider shadow-lg flex items-center justify-center gap-3 mb-4">
                  Contact Tigris Valley Today
                </button>

                <p className="text-center text-xs text-indigo-200 font-medium mb-8">
                  ...to learn more about our Elder Care Programs.
                </p>

                <div className="pt-6 border-t border-white/10 text-center">
                  <p className="text-sm font-bold text-amber-300 uppercase tracking-widest">
                    Compassionate Care. Medical Expertise. Dignified Ageing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ElderCarePage;


