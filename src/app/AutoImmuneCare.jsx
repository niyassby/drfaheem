import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves, Wind } from 'lucide-react';

const AutoImmuneCare = () => {
  const conditions = [
    "Rheumatoid arthritis",
    "Lupus",
    "Hashimoto’s thyroiditis",
    "Psoriasis",
    "Multiple sclerosis",
    "Ulcerative colitis / Crohn’s disease",
    "Ankylosing spondylitis",
    "Sjögren’s syndrome"
  ];

  const phases = [
    {
      title: "Phase 1: Immune Mapping & Stabilization",
      icon: <Microscope className="w-8 h-8 text-blue-600" />,
      duration: "Days 1–5",
      description: "Comprehensive evaluation includes:",
      items: [
        "Autoimmune antibody profiling",
        "Inflammatory markers (CRP, ESR)",
        "Metabolic markers",
        "Nutritional deficiencies",
        "Thyroid function (if relevant)",
        "Gut health screening"
      ],
      goal: "Identify triggers before initiating advanced therapy.",
      bgColor: "bg-blue-50"
    },
    {
      title: "Phase 2: Deep Immune Reset",
      icon: <Zap className="w-8 h-8 text-amber-600" />,
      duration: "Weeks 1–3",
      subSections: [
        {
          title: "🥗 Precision Anti-Inflammatory Nutrition",
          items: [
            "Personalized autoimmune elimination protocol",
            "Gut-healing nutrition",
            "Glycemic stabilization",
            "Omega-3 optimization"
          ]
        },
        {
          title: "💉 IV Immune Modulation Therapy (6–10 Sessions)",
          description: "May include: Vitamin C, Magnesium, B-Complex, NAC, ALA, L-Carnitine, Amino acids, Trace minerals.",
          goals: ["Reduce oxidative stress", "Improve mitochondrial function", "Support immune recalibration", "Restore energy"]
        },
        {
          title: "🔵 Ozone Therapy (Selected Patients)",
          items: [
            "Immune signaling balance",
            "Oxygen metabolism",
            "Inflammatory regulation"
          ],
          note: "Administered under strict physician supervision."
        },
        {
          title: "🌿 AYUSH & Traditional Healing Integration",
          items: [
            "Ayurvedic immune-supportive therapies",
            "Rasayana rejuvenation",
            "Yoga-based immune calming",
            "Breathwork for vagal activation",
            "Stress reduction protocols"
          ],
          specialNote: "Kerala’s healing ecosystem enhances immune recovery."
        }
      ],
      bgColor: "bg-amber-50"
    },
    {
      title: "Phase 3: Regenerative Therapy Options",
      icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
      description: "For selected patients with severe autoimmune damage, degenerative joint involvement, or persistent neurological symptoms.",
      subSections: [
        {
          title: "🔬 Exosome Therapy (Case-Based)",
          items: [
            "Modulate inflammatory cytokines",
            "Support tissue repair",
            "Enhance cellular communication",
            "Promote regenerative pathways"
          ],
          note: "Offered only after comprehensive evaluation and stabilization."
        },
        {
          title: "🧬 Additional Regenerative Options",
          items: [
            "Cellular immune-modulatory strategies",
            "Targeted regenerative protocols",
            "Advanced tissue-repair therapies"
          ],
          note: "All therapies are ethically guided and carefully selected."
        }
      ],
      bgColor: "bg-indigo-50"
    }
  ];

  const resetPillars = [
    "Sleep optimization",
    "Mind-body regulation",
    "Guided relaxation therapy",
    "Breath-based immune calming",
    "Structured stress modulation"
  ];

  const outcomes = [
    "Reduced flare intensity",
    "Lower inflammatory markers",
    "Improved energy",
    "Better gut function",
    "Improved joint mobility",
    "Enhanced quality of life"
  ];

  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop"
            alt="Immune Research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 mb-6 text-sm font-bold tracking-widest text-blue-200 uppercase bg-blue-950/40 rounded-full border border-blue-500/30">
              At Tigris Valley
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              🌿 Integrative <br /> Autoimmune Care
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-blue-50 mb-10 leading-relaxed font-medium">
              A 21–28 Day Intensive Immune Reset in Kerala, India <br />
              <span className="text-blue-200 italic">
                When Autoimmunity Becomes Exhausting… It’s Time for
                Regeneration — Not Just Suppression.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                If you are living with:
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {conditions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                  <span className="font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mb-18">
              <p className="max-w-3xl mx-auto text-xl text-gray-900 mb-12 font-medium">
                You may have tried medications, biologics, and lifestyle
                changes — yet flares persist.
              </p>
            </div>

            <div className="bg-blue-900 text-white p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <Activity className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 italic">
                  The Immune Regeneration Retreat is a structured,
                  physician-led, integrative program designed to:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Calm immune overactivation",
                    "Repair gut-immune pathways",
                    "Reduce inflammatory load",
                    "Restore mitochondrial energy",
                    "Support tissue healing",
                    "Rebuild long-term immune balance",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10"
                    >
                      <CheckCircle2 className="text-blue-400 w-6 h-6 shrink-0" />
                      <span className="font-bold text-gray-100">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-6">
                <Microscope className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 tracking-tight">
                🧬 Our Philosophy
              </h2>
              <p className="text-2xl text-gray-700 italic border-l-4 border-blue-600 pl-6 mb-8 leading-relaxed">
                Autoimmune disease is rarely a single-trigger condition. We
                work on the{" "}
                <span className="text-blue-600 font-bold underline decoration-blue-200">
                  terrain
                </span>{" "}
                — not just the symptoms.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-50 p-10 rounded-[3.5rem] border border-slate-200">
                <h3 className="text-xl font-bold mb-8 text-slate-800">
                  Addressing the core imbalances:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Gut permeability",
                    "Chronic inflammation",
                    "Metabolic dysfunction",
                    "Oxidative stress",
                    "Environmental triggers",
                    "Stress-induced immune dysregulation",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="font-semibold text-gray-700 text-sm">
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

      {/* The 3-Phase Model */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-950">
              The 3-Phase Immune Regeneration Model
            </h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${phase.bgColor} p-10 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden group`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Activity className="w-32 h-32" />
                </div>
                <div className="mb-8 p-4 bg-white rounded-3xl w-fit shadow-md group-hover:scale-110 transition-transform">
                  {phase.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {phase.title}
                </h3>
                {phase.duration && (
                  <p className="text-blue-600 font-bold mb-6 italic">
                    {phase.duration}
                  </p>
                )}

                {phase.description && (
                  <p className="text-gray-800 font-semibold mb-4 text-sm">
                    {phase.description}
                  </p>
                )}

                {phase.items && (
                  <ul className="space-y-3 mb-6">
                    {phase.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {phase.subSections && (
                  <div className="space-y-8">
                    {phase.subSections.map((sub, i) => (
                      <div
                        key={i}
                        className="pt-6 border-t border-gray-200/50"
                      >
                        <h4 className="font-bold text-gray-900 mb-4">
                          {sub.title}
                        </h4>
                        {sub.description && (
                          <p className="text-sm text-gray-600 mb-3 italic">
                            {sub.description}
                          </p>
                        )}
                        {sub.items && (
                          <ul className="space-y-2 mb-3">
                            {sub.items.map((item, j) => (
                              <li
                                key={j}
                                className="flex gap-2 text-sm text-gray-700"
                              >
                                <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {sub.goals && (
                          <div className="bg-white/50 p-4 rounded-2xl border border-gray-200/50">
                            <p className="text-xs font-bold text-blue-900 mb-2 uppercase tracking-wider">
                              Goals:
                            </p>
                            <ul className="space-y-1">
                              {sub.goals.map((g, k) => (
                                <li
                                  key={k}
                                  className="text-xs text-gray-700 flex gap-2"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />{" "}
                                  {g}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {sub.note && (
                          <p className="text-xs text-gray-500 italic mt-3">
                            {sub.note}
                          </p>
                        )}
                        {sub.specialNote && (
                          <p className="text-sm font-bold text-blue-900 mt-4 leading-relaxed">
                            {sub.specialNote}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {phase.goal && (
                  <div className="mt-8 pt-6 border-t border-gray-200/50">
                    <p className="text-sm font-bold text-blue-950 uppercase tracking-widest bg-blue-100/50 px-4 py-2 rounded-xl inline-block">
                      Goal:{" "}
                      <span className="font-medium text-gray-700">
                        {phase.goal}
                      </span>
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nervous System Reset Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <Wind className="absolute top-10 right-10 w-96 h-96 text-white/5" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                🧘 Nervous System Reset
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                Chronic stress amplifies autoimmune flares. Balanced cortisol
                = Balanced immunity.
              </p>
              <div className="space-y-4">
                {resetPillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white/5 p-5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                      <Zap className="text-blue-400 w-6 h-6" />
                    </div>
                    <span className="text-lg font-bold text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-12 md:p-16 rounded-[4rem] shadow-2xl relative">
                <h3 className="text-3xl font-extrabold mb-8">
                  Who Is This Retreat For?
                </h3>
                <ul className="space-y-6">
                  {[
                    "Patients seeking alternatives to long-term immune suppression",
                    "Those wanting to reduce flare frequency",
                    "Patients with medication intolerance",
                    "Early-stage autoimmune patients seeking prevention",
                    "Individuals desiring structured regenerative support",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <CheckCircle2 className="text-blue-200 w-6 h-6 shrink-0" />
                      <span className="font-semibold text-blue-50 text-lg leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6">
              💎 Expected Outcomes May Include
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed italic">
              Immune balance is possible. Regeneration begins when the terrain
              is restored. Results vary based on disease severity and
              duration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 group bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:border-blue-200 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
                  <Sparkles className="text-blue-600 w-6 h-6 group-hover:text-white" />
                </div>
                <span className="font-bold text-gray-800 text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Patients CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Globe className="w-96 h-96 text-white" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                🌍 Designed for a Worldwide Community
              </h2>
              <p className="text-blue-200 text-lg italic">
                Kerala offers a calm, private healing environment ideal for
                immune recovery.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
              {[
                "Pre-arrival virtual consultation",
                "21–28 day structured treatment plan",
                "Physician-supervised IV & regenerative therapies",
                "Integrative AYUSH therapies",
                "Personalized nutrition",
                "Calm, private recovery environment",
                "Post-return tele-follow-up",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center"
                >
                  <span className="text-blue-100 text-xs font-bold uppercase tracking-widest leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">
                ✈️ Begin Your Immune Regeneration Journey
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                {[
                  {
                    step: "Step 1",
                    title: "Submit medical summary",
                    desc: "Share your history with our team.",
                  },
                  {
                    step: "Step 2",
                    title: "Virtual evaluation",
                    desc: "Talk with our physician team.",
                  },
                  {
                    step: "Step 3",
                    title: "Personalized proposal",
                    desc: "Receive your custom retreat plan.",
                  },
                  {
                    step: "Step 4",
                    title: "Travel coordination",
                    desc: "Scheduling & travel assistance.",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="text-blue-600 font-black italic text-sm mb-4 bg-blue-50 px-3 py-1 rounded-lg inline-block">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <button className="w-full bg-blue-600 text-white py-6 rounded-full font-black text-xl hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-xl">
                Request Program Details
              </button>
            </div>

            <div className="mt-20 text-center">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4 italic">
                Immune Balance Is Possible.
              </p>
              <p className="text-xl text-blue-300 font-medium">
                Regeneration Begins When the Terrain Is Restored
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tigris? */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-16 underline decoration-blue-600/20 underline-offset-8">
            🏥 Why Tigris Valley?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              "Functional + Integrative + Regenerative model",
              "Individualized immune mapping",
              "Ethical, evidence-informed care",
              "Physician-supervised IV interventions",
              "Kerala’s therapeutic healing environment",
              "International patient coordination",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-400 transition-all hover:shadow-md"
              >
                <CheckCircle2 className="text-blue-600 shrink-0" />
                <span className="font-bold text-slate-800 leading-tight">
                  ✔ {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoImmuneCare;
