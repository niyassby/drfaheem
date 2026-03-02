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
            content: "Days 1–5: Comprehensive profiling of antibodies, inflammatory markers (CRP, ESR), metabolic status, and gut health screening to identify triggers before initiating therapy.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Deep Immune Reset",
            icon: <Zap className="w-8 h-8 text-amber-600" />,
            content: "Weeks 1–3: Precision anti-inflammatory nutrition, IV Immune Modulation (6–10 sessions), and physician-supervised Ozone Therapy to recalibrate the immune signaling.",
            bgColor: "bg-amber-50"
        },
        {
            title: "Phase 3: Regenerative Therapy Options",
            icon: <Sparkles className="w-8 h-8 text-indigo-600" />,
            content: "Case-based protocols including Exosome Therapy and targeted tissue repair for patients with severe damage or persistent neurological symptoms.",
            bgColor: "bg-indigo-50"
        }
    ];

    const therapies = [
        {
            title: "IV Immune Modulation",
            description: "Customized support with NAC, ALA, B-Complex, and Trace minerals to reduce oxidative stress and restore mitochondrial energy.",
            icon: <Droplets className="text-purple-600" />
        },
        {
            title: "Traditional Integration",
            description: "Ayurvedic immune-supportive therapies and Rasayana rejuvenation combined with yoga-based immune calming.",
            icon: <Waves className="text-teal-600" />
        },
        {
            title: "Nervous System Reset",
            description: "Breathwork for vagal activation and structured stress modulation to balance cortisol and immunity.",
            icon: <Wind className="text-blue-600" />
        }
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
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
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
                            21–28 Day Intensive Immune Reset
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Integrative <br /> Autoimmune Care
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-blue-50 mb-10 leading-relaxed font-medium">
                            When Autoimmunity Becomes Exhausting… <br />
                            It’s Time for <span className="text-blue-300 font-bold italic">Regeneration</span> — Not Just Suppression.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Conditions Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Comprehensive Care For:</h2>
                            <p className="text-lg text-gray-600 italic">We work on the terrain — not just the symptoms.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {conditions.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                                    <span className="font-semibold text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The 3-Phase Model */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-950">The 3-Phase Immune Regeneration Model</h2>
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
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">{phase.title}</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">{phase.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advanced Therapies Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Deep Immune Interventions</h2>
                        <p className="text-slate-400 text-lg italic">Combining modern molecular medicine with functional restoration.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {therapies.map((item, idx) => (
                            <div key={idx} className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-normal">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-10 md:p-16 rounded-[4rem] flex flex-col lg:flex-row gap-12 items-center shadow-2xl">
                        <div className="lg:w-2/3">
                            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Microscope className="w-8 h-8" /> Exosome Therapy (Case-Based)
                            </h3>
                            <p className="text-blue-50 text-xl leading-relaxed mb-8">
                                For selected patients, we leverage cellular signaling modules to modulate inflammatory cytokines and support tissue repair at the molecular level.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {["Modulate inflammatory cytokines", "Support tissue repair", "Enhance cellular communication"].map((point, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/5 text-sm uppercase font-bold tracking-widest">
                                        <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> {point}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/3">
                            <div className="bg-white text-slate-900 p-8 rounded-3xl text-center shadow-lg">
                                <p className="text-xs uppercase font-extrabold tracking-widest text-slate-500 mb-4 italic">Physician Oversight</p>
                                <p className="font-bold text-lg mb-6">Regenerative protocols are ethically guided and clinician selected.</p>
                                <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Expected Outcomes</h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed italic">
                                Immune balance is possible. Regeneration begins when the terrain is restored.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {outcomes.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                            <Sparkles className="text-blue-600 w-5 h-5 group-hover:text-white" />
                                        </div>
                                        <span className="font-bold text-gray-800 text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-blue-50 p-10 md:p-12 rounded-[4rem] border border-blue-100 relative overflow-hidden">
                                <Globe className="absolute -bottom-10 -right-10 w-48 h-48 text-blue-200/50" />
                                <h3 className="text-2xl font-bold mb-8 text-blue-900">Designed for International Patients</h3>
                                <div className="space-y-6 relative z-10 font-medium">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-2 rounded-xl shadow-sm italic text-blue-600 font-bold shrink-0">Step 1</div>
                                        <p className="text-gray-700">Submit your medical summary for initial screening.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-2 rounded-xl shadow-sm italic text-blue-600 font-bold shrink-0">Step 2</div>
                                        <p className="text-gray-700">Virtual evaluation with our integrated medical team.</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-2 rounded-xl shadow-sm italic text-blue-600 font-bold shrink-0">Step 3</div>
                                        <p className="text-gray-700">Personalized retreat proposal and travel coordination.</p>
                                    </div>
                                </div>
                                <button className="mt-10 bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-700 transition shadow-lg w-full">
                                    Request Program Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Why Choose Tigris Valley Wellness Centre?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            "Functional + Integrative + Regenerative model",
                            "Individualized immune mapping",
                            "Ethical, evidence-informed care",
                            "Physician-supervised IV interventions",
                            "Kerala’s therapeutic healing environment",
                            "International patient coordination"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-blue-400 transition-colors">
                                <CheckCircle2 className="text-blue-600 shrink-0" />
                                <span className="font-bold text-slate-800 leading-tight">{item}</span>
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
