import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { 
  Activity, 
  Brain, 
  BatteryCharging, 
  Apple, 
  HeartPulse, 
  Droplets, 
  Target, 
  ShieldCheck, 
  Microscope, 
  Sparkles, 
  CheckCircle2, 
  Heart,
  Phone
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';

const LongCovidRecovery = () => {
  const [ctaOpen, setCtaOpen] = useState(false);
  const commonSymptoms = [
    "Persistent fatigue and low energy",
    "Brain fog and memory difficulties",
    "Reduced exercise tolerance",
    "Shortness of breath",
    "Muscle and joint discomfort",
    "Palpitations and autonomic imbalance",
    "Chronic inflammation",
    "Sleep disturbances",
    "Digestive problems and gut imbalance",
    "Mood changes and reduced mental clarity"
  ];

  const diagnosticInsights = [
    "Inflammatory and immune markers",
    "Nutritional and micronutrient status",
    "Gut microbiome analysis",
    "Hormonal and adrenal stress assessment",
    "Mitochondrial energy markers",
    "Oxidative stress evaluation",
    "Toxic burden screening when clinically appropriate"
  ];

  const coreComponents = [
    {
      title: "Anti-Inflammatory Nutritional Therapy",
      icon: <Apple className="w-8 h-8 text-emerald-600" />,
      intro: "Nutrition plays a key role in restoring immune balance and reducing systemic inflammation.",
      subIntro: "Our approach may include:",
      items: [
        "Whole-food anti-inflammatory diets",
        "Gut-healing nutrition strategies",
        "Blood sugar stabilization",
        "Identification of food sensitivities when indicated"
      ],
      bgColor: "bg-emerald-50"
    },
    {
      title: "Mitochondrial Energy Restoration",
      icon: <BatteryCharging className="w-8 h-8 text-amber-600" />,
      intro: "Post-viral fatigue is often associated with impaired cellular energy production.",
      subIntro: "Targeted support may include:",
      items: [
        "Coenzyme Q10",
        "Alpha-lipoic acid",
        "L-carnitine",
        "Magnesium",
        "B-complex vitamins",
        "NAD+ supporting nutrients"
      ],
      outro: <>These therapies help improve <span className="italic font-bold">cellular energy and overall vitality</span>.</>,
      bgColor: "bg-amber-50"
    },
    {
      title: "Immune System Rebalancing",
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      intro: "Persistent immune activation may contribute to ongoing symptoms.",
      subIntro: "Supportive strategies may include:",
      items: [
        "Vitamin D optimization",
        "Zinc and selenium support",
        "Polyphenol-rich plant antioxidants",
        "Medicinal mushroom extracts",
        "Targeted immune-modulating nutrients"
      ],
      bgColor: "bg-blue-50"
    },
    {
      title: "Cellular Detoxification Support",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />,
      intro: "Optimizing detoxification pathways helps reduce oxidative stress and support recovery.",
      subIntro: "Therapeutic support may include:",
      items: [
        "Glutathione support",
        "N-acetyl cysteine (NAC)",
        "Liver detoxification nutrients",
        "Antioxidant therapy",
        "Gut-based toxin elimination strategies"
      ],
      bgColor: "bg-cyan-50"
    },
    {
      title: "Gut Microbiome Restoration",
      icon: <Activity className="w-8 h-8 text-indigo-600" />,
      intro: "Gut health is closely linked to immune regulation and systemic inflammation.",
      subIntro: "Our program may include:",
      items: [
        "Targeted probiotic therapy",
        "Prebiotic and fiber support",
        "Digestive enzyme therapy",
        "Gut lining repair nutrients such as L-glutamine"
      ],
      bgColor: "bg-indigo-50"
    },
    {
      title: "Brain Fog & Cognitive Recovery",
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      intro: "Neurological symptoms are common in post-viral syndromes.",
      subIntro: "Supportive therapies may include:",
      items: [
        "Omega-3 fatty acids",
        "Neuroprotective antioxidants",
        "Adaptogenic herbs",
        "Sleep optimization strategies"
      ],
      bgColor: "bg-purple-50"
    }
  ];

  const advancedTherapies = [
    "Intravenous nutritional therapy",
    "High-dose vitamin C therapy",
    "Oxygen-supportive therapies",
    "Breathing and autonomic nervous system rehabilitation",
    "Stress regulation and nervous system recovery strategies"
  ];

  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2070&auto=format&fit=crop"
            alt="Long COVID Recovery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-blue-900/40"></div>
        </div>

        <div className="container mt-20 mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 mb-6 text-sm font-bold tracking-widest text-blue-200 uppercase bg-blue-950/40 rounded-full border border-blue-500/30">
              Speciality Care
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Long COVID Recovery & <br /> Cellular Detox Program
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-3xl text-blue-100 mb-10 leading-relaxed font-semibold tracking-wide">
              Restore Energy. Rebalance Immunity. Reclaim Your Health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              Many individuals continue to experience lingering symptoms long after recovering from viral infections. Fatigue, brain fog, inflammation, and reduced stamina can significantly affect quality of life.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              At <span className="italic">Tigris Valley Functional & Integrative Medicine</span>, our <span className="font-bold">Long COVID Recovery & Cellular Detox Program</span> is designed to support individuals experiencing persistent post-viral symptoms through a <span className="italic">comprehensive, science-informed functional medicine approach</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Rather than only managing symptoms, our program focuses on identifying and addressing the <span className="italic">underlying biological disruptions</span> that may contribute to prolonged recovery, including inflammation, mitochondrial dysfunction, gut microbiome imbalance, and impaired detoxification pathways.
            </p>
            <p className="inline-block text-xl md:text-2xl text-blue-900 leading-relaxed font-semibold bg-blue-50/50 p-8 rounded-3xl border border-blue-100">
              Through personalized care, we aim to help patients <span className="italic font-bold">restore vitality, enhance immune balance, and regain optimal function.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
                Common Symptoms We Address
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonSymptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="font-semibold text-slate-800 leading-snug">{symptom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Functional Medicine Approach */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <Microscope className="absolute -bottom-10 -right-10 w-96 h-96 text-white/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Our Functional Medicine Approach
              </h2>
              <p className="text-2xl text-blue-100 mb-8 font-medium italic border-l-4 border-blue-500 pl-6">
                Every recovery journey begins with a comprehensive functional medicine evaluation to identify potential root causes.
              </p>
              <p className="text-xl text-blue-200 font-semibold bg-white/10 p-6 rounded-2xl border border-white/20 inline-block">
                These insights allow us to design <span className="italic font-bold text-white">precise, individualized treatment strategies.</span>
              </p>
            </div>
            <div className="lg:w-1/2 bg-white/5 backdrop-blur-sm p-10 md:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                <Sparkles className="text-blue-300" /> Advanced Diagnostic Insights May Include
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {diagnosticInsights.map((insight, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                    <span className="font-medium text-blue-50 leading-snug">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Core Components of the Program
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreComponents.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${comp.bgColor} p-10 rounded-[3rem] border border-gray-100 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col`}
              >
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform">
                  {comp.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">
                  {comp.title}
                </h3>
                <p className="text-slate-700 font-medium mb-6 flex-grow leading-relaxed">
                  {comp.intro}
                </p>
                <div className="bg-white/60 p-6 rounded-3xl border border-white">
                  <p className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wider">
                    {comp.subIntro}
                  </p>
                  <ul className="space-y-3 mb-2">
                    {comp.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-semibold text-slate-700">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {comp.outro && (
                    <p className="mt-6 text-sm text-slate-800 border-t border-slate-200/50 pt-4">
                      {comp.outro}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Integrative Therapies */}
      <section className="py-24 bg-white relative overflow-hidden ">
        <Activity className="absolute -top-10 -right-10 w-96 h-96 text-slate-50" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto bg-slate-900 text-white rounded-[4rem] p-12 md:p-16 shadow-2xl border border-slate-800 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-5/12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Advanced Integrative Therapies
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed font-medium">
                When appropriate, we may incorporate supportive therapies such as:
              </p>
            </div>
            <div className="md:w-7/12 bg-white/10 p-8 md:p-10 rounded-[2.5rem] border border-white/10 w-full">
              <ul className="space-y-6">
                {advancedTherapies.map((therapy, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-emerald-500/20 p-2 rounded-xl shrink-0">
                      <HeartPulse className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="font-semibold text-slate-100 text-lg leading-snug">{therapy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="pb-10 md:pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-950 p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <Heart className="absolute top-6 right-10 w-40 h-40 text-blue-300" />
              <ShieldCheck className="absolute bottom-4 left-8 w-28 h-28 text-blue-300" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              {/* Left */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Phone className="w-3.5 h-3.5" /> A Personalized Path to Recovery
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Tigris Valley Functional & Integrative Medicine
                </h2>
                <p className="text-blue-100 font-medium text-lg mb-6 max-w-2xl leading-relaxed">
                  We recognize that each patient’s recovery journey is unique. Our goal is to provide <span className="font-bold text-white">personalized, root-cause focused care</span> that supports the body’s natural healing capacity and helps individuals regain <span className="font-bold text-white">energy, resilience, and quality of life</span>.
                </p>
                <div className="flex items-center gap-3 text-white/90 font-medium bg-white/10 w-fit px-4 py-2 rounded-xl border border-white/20">
                  <Heart className="w-5 h-5 text-blue-300 shrink-0" />
                  Working together with you toward optimal health.
                </div>
              </div>
              {/* Right */}
              <div className="w-full lg:w-auto flex flex-col gap-4">
                <button
                  onClick={() => setCtaOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5 w-full lg:w-auto whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Begin Your Consultation
                </button>
                <p className="text-blue-300 text-xs font-medium text-center">
                  Physician-supervised · Personalised care
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

export default LongCovidRecovery;
