import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves, Accessibility, Move, Dumbbell } from 'lucide-react';

const JointPainManagement = () => {
    const conditions = [
        "Osteoarthritis (Knee, Hip, Spine)",
        "Rheumatoid Arthritis",
        "Chronic Back & Neck Pain",
        "Cervical / Lumbar Spondylosis",
        "Sciatica",
        "Frozen Shoulder",
        "Gout",
        "Post-Injury Joint Pain",
        "Long-standing unexplained body pain"
    ];

    const phases = [
        {
            title: "Phase 1: Root-Cause Pain Mapping",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            content: "Detailed evaluation of inflammatory markers, metabolic contributors, hormonal influence, and gut–joint axis dysfunction to identify triggers beyond just localized wear.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Anti-Inflammatory Nutrition Reset",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            content: "Personalized anti-inflammatory diet plan focused on Omega-3 optimization and blood sugar stabilization to reduce systemic inflammation within weeks.",
            bgColor: "bg-green-50"
        },
        {
            title: "Phase 3: Targeted Joint & Inflammation Support",
            icon: <Pill className="w-8 h-8 text-amber-600" />,
            content: "Evidence-based supplementation with Curcumin, Boswellia, Magnesium, and Collagen peptides to support cartilage repair and inflammatory balance.",
            bgColor: "bg-amber-50"
        },
        {
            title: "Phase 4: Advanced Physiotherapy & Biomechanical Correction",
            icon: <Accessibility className="w-8 h-8 text-indigo-600" />,
            content: "Core pillar of restoration: manual therapy, joint mobilization, neuromuscular re-education, and corrective strengthening to reduce mechanical stress.",
            bgColor: "bg-indigo-50"
        },
        {
            title: "Phase 5: Advanced IV Nutritional Therapy",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            content: "Customized support with NAC, ALA, and Trace minerals to reduce oxidative stress, promote muscle relaxation, and enhance tissue recovery.",
            bgColor: "bg-purple-50"
        },
        {
            title: "Phase 6: Integrative Healing & Neuromodulation",
            icon: <Zap className="w-8 h-8 text-teal-600" />,
            content: "Combining Acupuncture for pain signal modulation with traditional Ayurvedic anti-inflammatory protocols for deep, lasting recovery.",
            bgColor: "bg-teal-50"
        }
    ];

    const physiotherapyIncludes = [
        "Posture & gait assessment",
        "Muscle imbalance evaluation",
        "Joint mobility testing",
        "Core strength assessment",
        "Functional movement screening",
        "Manual therapy & Fascia release"
    ];

    const outcomes = [
        "Reduced pain intensity",
        "Improved mobility",
        "Increased muscle strength",
        "Reduced stiffness",
        "Reduced inflammation",
        "Lower medication dependence"
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                        alt="Joint Health & Movement"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/60"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-2 px-4 mb-6 text-sm font-bold tracking-widest text-blue-200 uppercase bg-blue-950/40 rounded-full border border-blue-500/30">
                            Move Without Limits
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Reverse Joint Pain <br /> Naturally
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-blue-50 mb-10 leading-relaxed font-medium">
                            Restore Mobility. Reduce Inflammation. Reclaim Your Life. <br />
                            Pain is not just a joint problem — it’s a systemic biological event.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Message / Why Tigris */}
            <section className="py-24 bg-blue-50/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-blue-950 leading-tight">
                                Breaking the Cycle <br /> of Chronic Pain
                            </h2>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                                Chronic joint pain is often driven by silent inflammation, gut dysfunction, and metabolic imbalance.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-10 text-sm font-bold text-blue-900">
                                {["Silent Inflammation", "Gut Dysfunction", "Metabolic Imbalance", "Nutrient Deficiencies"].map((item, i) => (
                                    <div key={i} className="p-4 bg-white rounded-2xl border border-blue-100 shadow-sm flex items-center gap-3">
                                        <Activity className="w-4 h-4 text-blue-400" /> {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-lg text-gray-600 font-medium leading-relaxed">
                                At Tigris Valley, we combine <span className="text-blue-700">Functional Medicine, Regenerative Therapies, and Structured Physiotherapy</span> to address the root cause.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-blue-100 relative overflow-hidden">
                                <h3 className="text-2xl font-bold mb-8 text-slate-900 border-b pb-4">Who This Program Is For</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                    {conditions.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                                            <span className="font-semibold text-gray-700 text-sm leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                    <p className="text-xs font-bold text-blue-800 uppercase tracking-widest text-center">
                                        Designed to Delay Surgery & Reduce Painkillers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 6 Phases */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-950">Advanced Joint Restoration Pathway</h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {phases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${phase.bgColor} p-10 rounded-[3rem] border border-gray-100 shadow-lg group hover:-translate-y-2 transition-all duration-300`}
                            >
                                <div className="mb-8 p-4 bg-white rounded-3xl w-fit shadow-md">
                                    {phase.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 leading-tight">{phase.title}</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">{phase.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Physiotherapy Focus */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <Move className="absolute -bottom-20 -left-20 w-96 h-96 text-white/5 opacity-20 rotate-45" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
                                Movement Is Medicine
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                                Advanced Biomechanical <br /> Correction
                            </h2>
                            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                                Pain improves when movement improves. Our structured physiotherapy is not just therapy — it’s functional re-education of your lifestyle habits.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {physiotherapyIncludes.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 font-bold text-sm tracking-wide">
                                        <CheckCircle2 className="text-indigo-400 w-5 h-5 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full text-center lg:text-left">
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-indigo-600 blur-3xl opacity-20 -z-10"></div>
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-[4rem] border border-white/10 shadow-3xl">
                                    <Dumbbell className="w-16 h-16 text-indigo-500 mb-8 mx-auto lg:mx-0" />
                                    <h3 className="text-2xl font-bold mb-6">Regenerative Care Options</h3>
                                    <p className="text-slate-400 mb-10 leading-relaxed">
                                        For qualified cases, we integrate advanced regenerative strategies to accelerate tissue healing.
                                    </p>
                                    <div className="space-y-4">
                                        {["Platelet-based joint therapy", "Prolotherapy", "Exosome therapy (when indicated)", "Collagen regeneration"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                                                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                                                <span className="font-bold text-slate-200 text-xs uppercase tracking-widest">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Expected Outcomes</h2>
                        <p className="text-gray-500 text-lg italic">Restoring movement, vitality, and quality of life.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {outcomes.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5 p-8 bg-blue-50/50 rounded-3xl border border-blue-100 hover:bg-blue-50 transition-colors">
                                <div className="bg-white p-3 rounded-xl shadow-sm">
                                    <Sparkles className="text-blue-600 w-6 h-6" />
                                </div>
                                <span className="font-bold text-gray-800 text-lg leading-tight text-left">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* International CTA */}
            <section className="py-24 bg-gray-50 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-950 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Designed for International Patients</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
                            {['2-3 Week Intensive', 'Pre-arrival Consult', 'Daily Physiotherapy', 'Airport Support'].map((item, i) => (
                                <div key={i} className="text-xs font-bold uppercase tracking-widest text-blue-300">{item}</div>
                            ))}
                        </div>
                        <button className="bg-white text-blue-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition transform hover:scale-105 shadow-xl relative z-10">
                            Request Program Details
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-white border-t border-gray-100 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-blue-950 mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">Why Choose Tigris Valley Wellness Centre?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            "Root-cause functional medicine",
                            "Structured physiotherapy integration",
                            "Regenerative & IV therapy options",
                            "AYUSH + modern medical blend",
                            "Personalized programs",
                            "Safety-first medical supervision"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-blue-50/30 p-8 rounded-3xl border border-blue-100/50">
                                <CheckCircle2 className="text-blue-600 shrink-0" />
                                <span className="font-bold text-gray-800 leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20">
                        <p className="text-2xl md:text-3xl font-bold italic text-blue-950">We do not just manage pain. We restore movement.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default JointPainManagement;
