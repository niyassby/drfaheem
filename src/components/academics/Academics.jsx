import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Navbar/Footer';
import {
  GraduationCap,
  BookOpen,
  Globe,
  Calendar,
  Users,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  FlaskConical,
  Leaf,
  Heart,
  Brain,
  BarChart3,
  ShieldCheck,
  Microscope,
  Zap,
  Phone,
  DollarSign,
  MapPin,
  Clock,
} from 'lucide-react';

const Academics = () => {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (idx) => setOpenModule(openModule === idx ? null : idx);

  const modules = [
    {
      num: '01',
      title: 'AYUSH Systems of Medicine',
      icon: <Leaf className="w-6 h-6 text-emerald-500" />,
      color: 'border-emerald-200 bg-emerald-50',
      accent: 'text-emerald-700',
      badge: 'bg-emerald-100 text-emerald-800',
      sections: [
        {
          heading: 'Ayurveda',
          items: [
            'History and philosophy of Ayurveda',
            'Concepts of Dosha, Dhatu, Agni, and Prakriti',
            'Ayurvedic diagnostic methods',
            'Ayurvedic herbal medicine principles',
            'Nutrition and lifestyle in Ayurveda',
            'Panchakarma and detoxification concepts',
          ],
        },
        {
          heading: 'Yoga & Lifestyle Medicine',
          items: [
            'Therapeutic yoga for chronic disease',
            'Breathwork and Pranayama',
            'Meditation and stress regulation',
            'Mind-body medicine approaches',
          ],
        },
        {
          heading: 'Siddha & Unani Medicine',
          items: [
            'Historical and philosophical foundations',
            'Traditional diagnostic frameworks',
            'Herbal and natural therapeutic principles',
          ],
        },
        {
          heading: 'Homeopathy',
          items: [
  "Principles of “Similia Similibus Curentur” (Like cures like)",
"Foundations of homeopathic philosophy",
"Potentization and preparation of remedies",
 "Constitutional prescribing concepts",
"Role of homeopathy in chronic disease management"
          ],
        },
      ],
      outro:
        "Participants gain a conceptual understanding of traditional Indian healing systems and their role in modern integrative healthcare.",
    },
    {
      num: '02',
      title: 'Traditional Chinese Medicine & Acupuncture',
      icon: <FlaskConical className="w-6 h-6 text-sky-500" />,
      color: 'border-sky-200 bg-sky-50',
      accent: 'text-sky-700',
      badge: 'bg-sky-100 text-sky-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Yin-Yang theory',
            'Five Element theory',
            'Qi and meridian systems',
            'Acupuncture points and clinical indications',
            'Acupuncture for pain management',
            'Acupuncture for neurological and metabolic conditions',
            'Safety and clinical protocols',
          ],
        },
      ],
    },
    {
      num: '03',
      title: 'Foundations of Functional & Integrative Medicine',
      icon: <BookOpen className="w-6 h-6 text-violet-500" />,
      color: 'border-violet-200 bg-violet-50',
      accent: 'text-violet-700',
      badge: 'bg-violet-100 text-violet-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Evolution of modern healthcare models',
            'Principles of functional medicine',
            'Systems biology and network medicine',
            'Root-cause analysis in chronic disease',
            'Patient-centered care frameworks',
          ],
        },
      ],
    },
    {
      num: '04',
      title: 'Functional Medicine Core Principles',
      icon: <Brain className="w-6 h-6 text-rose-500" />,
      color: 'border-rose-200 bg-rose-50',
      accent: 'text-rose-700',
      badge: 'bg-rose-100 text-rose-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Functional medicine matrix',
            'Systems-based disease models',
            'Chronic inflammation and immune dysregulation',
            'Mitochondrial dysfunction',
            'Oxidative stress and cellular health',
          ],
        },
      ],
    },
    {
      num: '05',
      title: 'Functional Nutrition & Metabolic Medicine',
      icon: <Heart className="w-6 h-6 text-orange-500" />,
      color: 'border-orange-200 bg-orange-50',
      accent: 'text-orange-700',
      badge: 'bg-orange-100 text-orange-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Nutritional biochemistry',
            'Therapeutic diets for chronic disease',
            'Anti-inflammatory nutrition strategies',
            'Nutraceuticals and targeted supplementation',
          ],
        },
      ],
    },
    {
      num: '06',
      title: 'Gut Health & Microbiome Medicine',
      icon: <Microscope className="w-6 h-6 text-teal-500" />,
      color: 'border-teal-200 bg-teal-50',
      accent: 'text-teal-700',
      badge: 'bg-teal-100 text-teal-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Gut microbiome and systemic health',
            'Intestinal permeability',
            'SIBO and dysbiosis',
            'Gut-brain axis',
            'Functional treatment strategies',
          ],
        },
      ],
    },
    {
      num: '07',
      title: 'Detoxification & Environmental Medicine',
      icon: <FlaskConical className="w-6 h-6 text-amber-500" />,
      color: 'border-amber-200 bg-amber-50',
      accent: 'text-amber-700',
      badge: 'bg-amber-100 text-amber-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Detoxification pathways in the body',
            'Environmental toxins and chronic illness',
            'Liver detoxification systems',
            'Heavy metal toxicity',
            'Functional detoxification protocols',
          ],
        },
      ],
    },
    {
      num: '08',
      title: 'Hormonal & Metabolic Medicine',
      icon: <Zap className="w-6 h-6 text-pink-500" />,
      color: 'border-pink-200 bg-pink-50',
      accent: 'text-pink-700',
      badge: 'bg-pink-100 text-pink-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Thyroid disorders',
            'Adrenal dysfunction and stress physiology',
            'Insulin resistance and metabolic syndrome',
            'Hormonal balance in men and women',
            'Functional approaches to obesity',
          ],
        },
      ],
    },
    {
      num: '09',
      title: 'Integrative Oncology & Supportive Care',
      icon: <ShieldCheck className="w-6 h-6 text-cyan-500" />,
      color: 'border-cyan-200 bg-cyan-50',
      accent: 'text-cyan-700',
      badge: 'bg-cyan-100 text-cyan-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Cancer biology and metabolic perspectives',
            'Functional medicine in cancer supportive care',
            'Nutritional strategies during chemotherapy',
            'Immune system support',
            'Inflammation control',
            'Integrative palliative care',
          ],
        },
      ],
    },
    {
      num: '10',
      title: 'Regenerative & Advanced Therapies',
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      color: 'border-indigo-200 bg-indigo-50',
      accent: 'text-indigo-700',
      badge: 'bg-indigo-100 text-indigo-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Peptide therapy',
            'Nutritional IV therapy',
            'Ozone therapy principles',
            'Cellular regeneration strategies',
            'Longevity and healthy aging medicine',
          ],
        },
      ],
    },
    {
      num: '11',
      title: 'Functional Diagnostics & Clinical Case Analysis',
      icon: <BarChart3 className="w-6 h-6 text-slate-500" />,
      color: 'border-slate-200 bg-slate-50',
      accent: 'text-slate-700',
      badge: 'bg-slate-200 text-slate-800',
      sections: [
        {
          heading: 'Topics include',
          items: [
            'Interpretation of advanced laboratory tests',
            'Functional biomarkers',
            'Clinical decision-making frameworks',
            'Case-based learning',
          ],
        },
      ],
    },
  ];

  const phases = [
    { phase: 'Phase 1', weeks: 'Weeks 1–4', title: 'Foundations of Integrative Medicine', desc: 'Introduction to integrative medicine, systems biology, preventive medicine, and patient-centered care.' },
    { phase: 'Phase 2', weeks: 'Weeks 5–12', title: 'AYUSH Systems of Medicine', desc: 'Ayurveda philosophy, diagnostics, herbal medicine, Panchakarma, yoga therapy, and mind-body medicine.' },
    { phase: 'Phase 3', weeks: 'Weeks 13–20', title: 'Traditional Chinese Medicine & Acupuncture', desc: 'Yin-Yang theory, meridian systems, acupuncture points, and clinical applications.' },
    { phase: 'Phase 4', weeks: 'Weeks 21–28', title: 'Functional Medicine Core Principles', desc: 'Inflammation, mitochondrial health, hormonal regulation, metabolic diseases, and cardiovascular health.' },
    { phase: 'Phase 5', weeks: 'Weeks 29–34', title: 'Gut Health & Nutrition', desc: 'Microbiome medicine, intestinal permeability, therapeutic diets, nutraceuticals, and gut-brain axis.' },
    { phase: 'Phase 6', weeks: 'Weeks 35–38', title: 'Detoxification & Environmental Medicine', desc: 'Detox pathways, environmental toxins, heavy metals, and detoxification protocols.' },
    { phase: 'Phase 7', weeks: 'Weeks 39–44', title: 'Advanced Integrative Therapies', desc: 'Peptide therapy, IV nutrition therapy, ozone therapy, longevity medicine, and lifestyle medicine.' },
    { phase: 'Phase 8', weeks: 'Weeks 45–46', title: 'Integrative Oncology', desc: 'Cancer biology and functional medicine supportive care.' },
    { phase: 'Phase 9', weeks: 'Weeks 47–48', title: 'Clinical Integration', desc: 'Case presentations, treatment planning, and final assessments.' },
  ];

  const highlights = [
    'One-year structured fellowship program',
    'Designed for international physicians and healthcare professionals',
    'Blended learning: online academic modules + 30-day clinical training',
    'Training in AYUSH medicine, Chinese acupuncture, and functional medicine',
    'Focus on root-cause medicine and chronic disease management',
    'Exposure to integrative oncology and advanced supportive care',
    'Case-based clinical learning',
    'Certification awarded by Tigris Valley Institute of Functional & Integrative Medicine',
  ];

  return (
    <div className="bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1661746210616-42f1bc967a73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaWNhbCUyMHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
            alt="Medical education background"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-emerald-950/80" />
        </div>

        {/* Decorative rings */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-10">
          <div className="w-[900px] h-[900px] rounded-full border border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="w-[600px] h-[600px] rounded-full border border-white/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-white z-10" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-8">
                <GraduationCap className="w-4 h-4" /> Tigris Valley Institute of Functional & Integrative Medicine
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Fellowship in Functional &<br className="hidden md:block" /> Integrative Medicine
                <span className="block text-emerald-400 text-3xl md:text-4xl mt-3 font-bold">(FFIM)</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-semibold mb-4">
                A One-Year Blended Fellowship for International Medical Doctors
              </p>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A comprehensive academic program designed to train physicians in{' '}
                <span className="italic text-white font-semibold">root-cause, systems-based, and integrative healthcare approaches</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-14"
            >
              {[
                { icon: <Calendar className="w-5 h-5" />, label: '12 Months Total' },
                { icon: <Globe className="w-5 h-5" />, label: 'Blended Learning' },
                { icon: <MapPin className="w-5 h-5" />, label: '30-Day Clinical Immersion' },
                { icon: <Award className="w-5 h-5" />, label: 'FFIM Certification' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-2xl text-white font-bold text-sm backdrop-blur-sm">
                  <span className="text-emerald-400">{stat.icon}</span>
                  {stat.label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Intro & Pillars ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-0.5 w-10 bg-emerald-500 rounded-full" />
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">About the Program</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Where Ancient Wisdom Meets Modern Science
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                The{' '}
                <span className="italic font-bold text-slate-800">Fellowship in Functional & Integrative Medicine (FFIM)</span>{' '}
                at{' '}
                <span className="italic font-bold text-slate-800">Tigris Valley Institute of Functional & Integrative Medicine</span>{' '}
                integrates{' '}
                <span className="italic font-bold text-slate-800">three major pillars of global medical knowledge</span>.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                The fellowship follows a{' '}
                <span className="italic font-bold text-slate-800">blended learning model</span>, combining{' '}
                <span className="italic font-bold text-slate-800">one year of structured online academic training</span>{' '}
                with a{' '}
                <span className="italic font-bold text-slate-800">30-day clinical immersion program at Tigris Valley in Kerala, India</span>.
              </p>
              <p className="text-slate-600 leading-relaxed font-medium bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                Participants gain practical knowledge to address{' '}
                <span className="italic font-bold text-emerald-800">chronic diseases, metabolic disorders, inflammatory conditions, lifestyle diseases, and supportive cancer care</span>{' '}
                through an integrative medical framework.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">The Three Major Pillars</h3>
              {[
                { num: '01', title: 'AYUSH Traditional Medical Systems of India', icon: <Leaf className="w-6 h-6 text-emerald-600" />, bg: 'bg-emerald-50 border-emerald-200' },
                { num: '02', title: 'Traditional Chinese Medicine and Acupuncture', icon: <FlaskConical className="w-6 h-6 text-sky-600" />, bg: 'bg-sky-50 border-sky-200' },
                { num: '03', title: 'Modern Functional and Integrative Medicine', icon: <Stethoscope className="w-6 h-6 text-violet-600" />, bg: 'bg-violet-50 border-violet-200' },
              ].map((p, i) => (
                <div key={i} className={`flex items-center gap-5 p-6 rounded-2xl border ${p.bg} hover:shadow-md transition-shadow`}>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Pillar {p.num}</span>
                    <p className="font-bold text-slate-800 text-base leading-snug">{p.title}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program Highlights ── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5">
          <GraduationCap className="w-[600px] h-[600px] -mt-20 -mr-20 text-white" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Program Highlights</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-white font-medium leading-relaxed">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Duration ── */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Program Duration</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Calendar className="w-8 h-8 text-emerald-600" />, label: 'Total Duration', value: '12 Months', bg: 'bg-emerald-50 border-emerald-200' },
              { icon: <Globe className="w-8 h-8 text-sky-600" />, label: 'Online Academic Training', value: '11 months', bg: 'bg-sky-50 border-sky-200' },
              { icon: <MapPin className="w-8 h-8 text-rose-600" />, label: 'Onsite Clinical Immersion', value: '30 days at Tigris Valley', bg: 'bg-rose-50 border-rose-200' },
            ].map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${d.bg} border p-8 rounded-3xl text-center shadow-sm`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                  {d.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{d.label}</p>
                <p className="text-2xl font-extrabold text-slate-900">{d.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Structure ── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Course Structure</h2>
          <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
            The fellowship curriculum is organized into{' '}
            <span className="font-bold italic text-slate-800">three major integrative medicine pillars</span>:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {[
              '1.  AYUSH Medical Systems',
              '2.  Traditional Chinese Medicine & Acupuncture',
              '3.  Functional & Integrative Medicine',
            ].map((p, i) => (
              <div key={i} className="bg-white border border-slate-200 shadow-sm px-6 py-4 rounded-2xl font-bold text-slate-800 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules Accordion ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Curriculum Modules</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
            <p className="text-lg text-slate-500 max-w-xl mx-auto">Click on any module to expand its curriculum topics.</p>
          </div>

          <div className="space-y-4">
            {modules.map((mod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all ${mod.color}`}
              >
                <button
                  onClick={() => toggleModule(idx)}
                  className="w-full flex items-center gap-5 p-5 md:p-7 text-left group"
                >
                  <span className={`text-xs font-black uppercase tracking-widest ${mod.accent} shrink-0`}>
                    Module {mod.num}
                  </span>
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    {mod.icon}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg flex-grow leading-snug">{mod.title}</h3>
                  <div className="shrink-0 ml-2">
                    {openModule === idx
                      ? <ChevronUp className={`w-5 h-5 ${mod.accent}`} />
                      : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>

                {openModule === idx && (
                  <div className="px-6 md:px-10 pb-8 pt-2 space-y-6 bg-white border-t border-slate-100">
                    {mod.sections.map((sec, si) => (
                      <div key={si}>
                        <h4 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-wider">{sec.heading}</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {sec.items.map((item, ii) => (
                            <li key={ii} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                              <CheckCircle2 className={`w-4 h-4 ${mod.accent} shrink-0 mt-0.5`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {mod.outro && (
                      <p className={`text-sm italic font-semibold ${mod.accent} bg-white/60 p-4 rounded-xl border`}>
                        {mod.outro}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 48-Week Curriculum ── */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">48-Week Structured Curriculum</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
              The academic component is delivered through{' '}
              <span className="italic text-white font-semibold">48 weeks of structured online learning</span>, including lectures, assignments, and case discussions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((ph, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-7 rounded-2xl hover:bg-white/10 transition-colors relative overflow-hidden group"
              >
                <div className="absolute right-4 top-4 text-white/5 font-black text-7xl pointer-events-none group-hover:scale-110 transition-transform select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="inline-block text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">{ph.phase}</span>
                <p className="text-white/50 text-xs font-bold mb-3">{ph.weeks}</p>
                <h4 className="text-white font-extrabold text-lg mb-3 leading-snug">{ph.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{ph.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 30-Day Clinical Immersion ── */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute -right-40 top-0 opacity-10">
          <MapPin className="w-[500px] h-[500px]" />
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-xs font-bold text-emerald-300 uppercase tracking-widest mb-4">Onsite Training</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                30-Day Clinical Immersion
              </h2>
              <p className="text-2xl font-semibold text-emerald-200 mb-8 flex items-center gap-2">
                <MapPin className="w-6 h-6" /> Tigris Valley, Kerala, India
              </p>
              <p className="text-emerald-100 text-lg font-medium leading-relaxed mb-6">
                Participants attend a{' '}
                <span className="italic font-bold text-white">30-day onsite clinical training program</span>{' '}
                including:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                'Functional medicine consultations',
                'Integrative oncology supportive care clinics',
                'Clinical nutrition counselling',
                'Acupuncture demonstrations',
                'Case discussions with faculty',
                'Multidisciplinary treatment planning workshops',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-white font-semibold text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Faculty ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Multinational Faculty & Visiting Professors</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 max-w-2xl mx-auto font-medium text-lg">
              The fellowship is delivered by a multidisciplinary team of{' '}
              <span className="italic font-bold text-slate-700">physicians and experts in integrative medicine</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lead Faculty */}
            <div className="lg:col-span-1 bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <Users className="w-64 h-64" />
              </div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-6">Lead Faculty</span>
              <div className="w-20 h-20 bg-emerald-800 rounded-2xl flex items-center justify-center mb-6 border border-emerald-700">
                <GraduationCap className="w-10 h-10 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Dr. Faheem Najeeb</h3>
              <p className="text-emerald-300 font-semibold mb-4 text-sm">Head of Functional & Integrative Medicine</p>
              <p className="text-slate-400 text-sm font-medium mb-6">Tigris Valley, Kerala, India</p>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Dr. Faheem Najeeb leads the academic and clinical training in{' '}
                <span className="italic text-white font-semibold">functional medicine, integrative medicine, chronic disease management, and integrative oncology supportive care</span>{' '}
                within the fellowship program.
              </p>
            </div>

            {/* Faculty expertise */}
            <div className="lg:col-span-1 bg-slate-50 border border-slate-200 p-10 rounded-3xl">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-6">Faculty Expertise Areas</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Teaching Specializations</h3>
              <ul className="space-y-4">
                {[
                  'Functional medicine',
                  'Integrative oncology',
                  'Nutritional and metabolic medicine',
                  'Lifestyle medicine',
                  'Ayurveda and AYUSH systems',
                  'Traditional Chinese medicine and acupuncture',
                ].map((exp, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" />
                    {exp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visiting Faculty */}
            <div className="lg:col-span-1 bg-emerald-50 border border-emerald-100 p-10 rounded-3xl">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-6">Visiting Faculty</span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Guest Lecture Topics</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                Guest lecturers from international and national institutions may deliver sessions on:
              </p>
              <ul className="space-y-3">
                {[
                  'Precision medicine',
                  'Nutritional genomics',
                  'Metabolic medicine',
                  'Functional diagnostics',
                  'Longevity and regenerative medicine',
                ].map((t, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                    <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admission ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Admission Criteria</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Requirements */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Requirements</h3>
              <ul className="space-y-4">
                {[
                  'Medical degree (MBBS, MD or equivalent)',
                  'Registered medical practitioner in their country',
                  'Interest in functional and integrative medicine',
                  'Commitment to completing online modules and clinical immersion',
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligible Participants */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Eligible Participants</h3>
              <ul className="space-y-4 mb-6">
                {[
                  'General practitioners',
                  'Specialists and consultants',
                  'Physicians interested in lifestyle medicine',
                  'Doctors managing chronic diseases',
                  'Physicians interested in integrative oncology supportive care',
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-emerald-700 italic font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-100">
                International physicians from Asia, the Middle East, Africa, and Europe are encouraged to apply.
              </p>
            </div>

            {/* Application Process */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-sky-600" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Application Process</h3>
              <p className="text-slate-600 text-sm mb-4 font-medium">Applicants must submit:</p>
              <ul className="space-y-4 mb-8">
                {[
                  'Completed application form',
                  'Copy of medical degree certificate',
                  'Updated CV',
                  'Statement of purpose',
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-sky-700 italic font-semibold bg-sky-50 p-3 rounded-xl border border-sky-100">
                Selected candidates will receive an official admission letter from Tigris Valley Institute of Functional & Integrative Medicine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fees & Scholarships ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Program Fee Structure</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Fee card */}
            <div className="lg:col-span-1 bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
              <div className="w-16 h-16 bg-emerald-800 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-extrabold mb-2">Total Program Fee</h3>
              <div className="text-5xl font-black text-emerald-400 mb-2">USD</div>
              <div className="text-3xl font-extrabold text-white mb-8">3,500 – 5,000</div>
              <ul className="space-y-3">
                {[
                  'Access to the 48-week online curriculum',
                  'Digital learning materials',
                  'Clinical case discussion sessions',
                  'Faculty mentorship',
                  '30-day clinical immersion training',
                  'Fellowship certification',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Expenses */}
            <div className="bg-amber-50 border border-amber-200 p-10 rounded-3xl">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Additional Participant Expenses</h3>
              <p className="text-slate-600 text-sm font-medium mb-6">Participants are responsible for:</p>
              <ul className="space-y-4 mb-6">
                {[
                  'International travel to India',
                  'Accommodation during the 30-day training',
                  'Visa and local transportation',
                ].map((e, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    {e}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-amber-700 italic font-semibold bg-amber-100 p-4 rounded-xl">
                Tigris Valley may assist in identifying recommended accommodation options near the institute.
              </p>
            </div>

            {/* Scholarships */}
            <div className="bg-emerald-50 border border-emerald-200 p-10 rounded-3xl">
              <div className="w-14 h-14 bg-emerald-200 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Scholarships</h3>
              <p className="text-slate-600 text-sm font-medium mb-4">
                Limited{' '}
                <span className="italic font-bold text-slate-800">partial scholarships</span>{' '}
                may be available for:
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  'Physicians from low- and middle-income countries',
                  'Doctors working in public healthcare systems',
                  'Early-career physicians committed to integrative medicine',
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-emerald-700 italic font-semibold bg-emerald-100 p-4 rounded-xl">
                Scholarship applications are reviewed by the academic committee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certification ── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Award className="w-[700px] h-[700px] absolute -right-40 -bottom-40" />
        </div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="w-24 h-24 bg-emerald-800 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border border-emerald-700">
            <Award className="w-12 h-12 text-emerald-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Certification</h2>
          <p className="text-slate-300 text-lg mb-10 font-medium leading-relaxed">
            Upon successful completion of all academic modules and clinical training, participants will be awarded the:
          </p>
          <div className="bg-white/10 border border-white/20 p-10 md:p-14 rounded-3xl backdrop-blur-sm shadow-2xl inline-block w-full max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-4 leading-tight">
              Fellowship in Functional & Integrative Medicine (FFIM)
            </h3>
            <p className="text-slate-300 font-semibold mb-1">Awarded by</p>
            <p className="text-white font-extrabold text-xl mb-1 italic">
              Tigris Valley Institute of Functional & Integrative Medicine
            </p>
            <p className="text-slate-400 font-semibold">Calicut, Kerala, India</p>
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-12 md:p-16 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10">
              <GraduationCap className="w-96 h-96 -mt-20 -mr-20" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block text-xs font-bold text-emerald-300 uppercase tracking-widest mb-6">Program Vision</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Bridging Modern Science with Ancient Healing Traditions
              </h2>
              <p className="text-slate-200 text-xl leading-relaxed mb-8 font-medium">
                The vision of this fellowship is to train physicians capable of{' '}
                <span className="italic font-bold text-white">bridging modern medical science with traditional healing systems</span>, creating a more comprehensive and patient-centered healthcare model.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Graduates will be equipped to apply{' '}
                <span className="italic font-bold text-white">integrative approaches to chronic disease management, preventive medicine, and health optimization</span>{' '}
                in their clinical practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// For ClipboardCheck import inside component
const ClipboardCheck = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
  </svg>
);

export default Academics;
