import React from 'react';
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
    Info
} from 'lucide-react';

const IntegrativeCancer = () => {
    const steps = [
        {
            title: "Step 1: Comprehensive Oncology & Metabolic Assessment",
            icon: <Microscope className="w-8 h-8 text-indigo-600" />,
            content: "A detailed review of cancer type, molecular profile, performance status, nutritional markers, and immune status to ensure safety and personalization.",
            bgColor: "bg-indigo-50"
        },
        {
            title: "Step 2: Metabolic & Nutritional Oncology Support",
            icon: <Apple className="w-8 h-8 text-emerald-600" />,
            content: "Focusing on anti-inflammatory nutrition, insulin signaling, and protein optimization to preserve muscle mass and immune resilience.",
            bgColor: "bg-emerald-50"
        },
        {
            title: "Step 3: Advanced IV Integrative Therapies",
            icon: <Droplets className="w-8 h-8 text-blue-600" />,
            content: "Physician-supervised IV Nutritional Therapy, High-Dose Vitamin C, and Ozone therapy tailored to symptom relief and mitochondrial support.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Step 4: Far Infrared (FIR) Therapy",
            icon: <Thermometer className="w-8 h-8 text-orange-600" />,
            content: "Gentle thermal support to improve circulation, promote relaxation, and enhance detoxification through sweating, customized for patient stability.",
            bgColor: "bg-orange-50"
        },
        {
            title: "Step 5: Advanced Cellular Immunotherapy Options",
            icon: <Zap className="w-8 h-8 text-purple-600" />,
            content: "Coordination of Dendritic Cell and Natural Killer (NK) cell therapies for eligible patients to enhance targeted immune response.",
            bgColor: "bg-purple-50"
        }
    ];

    const focusAreas = [
        { area: "Immune Resilience", desc: "Strengthening the body's natural defenses.", icon: <ShieldCheck className="text-indigo-500" /> },
        { area: "Side-Effect Reduction", desc: "Managing toxicity from conventional treatments.", icon: <Activity className="text-emerald-500" /> },
        { area: "Metabolic Optimization", desc: "Addressing inflammation and mitochondrial health.", icon: <Zap className="text-amber-500" /> },
        { area: "Muscle Preservation", desc: "Preventing cancer-related muscle loss (Sarcopenia).", icon: <Wind className="text-cyan-500" /> }
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                        alt="Cancer Care"
                        className="w-full h-full object-cover"
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
                            Supportive Oncology & Palliative Care
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Advanced Integrative <br /> Cancer Program
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-50 mb-10 leading-relaxed">
                            Combining Functional Medicine, metabolic support, and advanced cellular immunotherapy
                            to improve quality of life and immune resilience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Mission */}
            <section className="py-20 bg-indigo-50/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-indigo-900/5 border border-indigo-100">
                            <h2 className="text-3xl font-bold mb-8 text-indigo-950 text-center italic">A Whole-Person Cancer Support Model</h2>
                            <div className="h-1.5 w-24 bg-indigo-600 mx-auto rounded-full mb-10"></div>
                            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center">
                                Our program <span className="font-bold text-indigo-700">does not replace your oncologist</span>.
                                It strengthens your body while you undergo — or after you complete — conventional treatment.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {focusAreas.map((focus, idx) => (
                                    <div key={idx} className="text-center group">
                                        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            {focus.icon}
                                        </div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1">{focus.area}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps/Phases */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-indigo-950">A Structured Journey to Resilience</h2>
                        <p className="text-gray-500 text-lg">Integrated, physician-led support at every stage.</p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${step.bgColor} p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-lg transition-all group`}
                            >
                                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:rotate-12 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-indigo-950 leading-tight">{step.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-sm lg:text-base font-medium">{step.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Immunotherapy Focus */}
            <section className="py-24 bg-indigo-950 text-white relative">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic tracking-tight">Advanced Cellular Immunotherapy</h2>
                        <p className="text-indigo-200 text-lg max-w-2xl mx-auto">Exploring the frontiers of immune-based support for eligible patients.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
                            <span className="inline-block px-3 py-1 bg-indigo-500 text-xs font-bold rounded-full mb-6">TARGETED ACTIVATION</span>
                            <h3 className="text-2xl font-bold mb-6">Dendritic Cell Therapy</h3>
                            <p className="text-indigo-100 mb-8 leading-relaxed font-medium capitalize italic">
                                Training immune cells to recognize and target tumor antigens more effectively.
                            </p>
                            <ul className="space-y-4">
                                {["Patient-specific cell collection", "Ex-vivo training with tumor markers", "Reintroduction to stimulate T-cells"].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center">
                                        <Zap className="w-5 h-5 text-indigo-400" />
                                        <span className="text-indigo-50 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
                            <span className="inline-block px-3 py-1 bg-emerald-500 text-xs font-bold rounded-full mb-6">INNATE SURVEILLANCE</span>
                            <h3 className="text-2xl font-bold mb-6">Natural Killer (NK) Cell Therapy</h3>
                            <p className="text-emerald-100 mb-8 leading-relaxed font-medium capitalize italic">
                                Expanding and activating natural killer cells to enhance immune surveillance.
                            </p>
                            <ul className="space-y-4">
                                {["Activation of innate immunity", "Enhanced detection of abnormal cells", "Expanded cell population infusion"].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center">
                                        <Sparkles className="w-5 h-5 text-emerald-400" />
                                        <span className="text-indigo-50 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-indigo-900/50 rounded-2xl border border-indigo-500/20 text-center">
                        <p className="text-indigo-200 text-sm flex items-center justify-center gap-2 font-bold uppercase tracking-widest italic">
                            <ShieldCheck className="w-5 h-5" /> Strict medical screening and oncology coordination required
                        </p>
                    </div>
                </div>
            </section>

            {/* Palliative Care & Symptom Focus */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-indigo-950 leading-tight">Advanced Palliative & Symptom Support</h2>
                            <p className="text-xl text-gray-700 mb-10 leading-relaxed italic font-medium">
                                When disease is advanced, our focus shifts toward dignity, clarity, and absolute comfort.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { area: "Pain Relief", icon: <Heart /> },
                                    { area: "Fatigue Mgmt", icon: <Zap /> },
                                    { area: "Appetite Support", icon: <Apple /> },
                                    { area: "Neuropathy Care", icon: <Activity /> }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-indigo-50">
                                        <span className="text-indigo-600">{item.icon}</span>
                                        <span className="font-bold text-gray-800">{item.area}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl shadow-indigo-900/5 border border-indigo-100">
                            <h3 className="text-2xl font-bold mb-6 text-indigo-900 uppercase">Functional Recovery Focus</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed font-bold italic">
                                Cancer-related muscle loss dramatically impacts outcomes. We intervene with:
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-indigo-50 p-2 rounded-lg h-fit"><CheckCircle2 className="text-indigo-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Muscle Preservation</h4>
                                        <p className="text-gray-600 text-sm">Supervised fatigue-adapted exercises and optimized protein nutrition.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-indigo-50 p-2 rounded-lg h-fit"><CheckCircle2 className="text-indigo-600" /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Functional Strength</h4>
                                        <p className="text-gray-600 text-sm">Targeted rehabilitation to maintain independence and vitality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ethical Integrity */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-slate-900 p-10 md:p-16 rounded-[4rem] text-white">
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center uppercase tracking-tighter">Ethical & Medical Integrity</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            {[
                                "Does not replace standard oncology",
                                "Is not presented as a cure",
                                "Requires oncology coordination",
                                "Careful screening protocols"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <ShieldCheck className="text-indigo-400 shrink-0" />
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-400 text-sm italic">
                            We focus on safe, physician-guided integrative support. Safety screening is mandatory for all therapies.
                        </p>
                    </div>
                </div>
            </section>

            {/* International CTA */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-700 to-indigo-900 p-12 md:p-20 rounded-[4rem] text-white shadow-2xl shadow-indigo-900/30">
                        <Globe className="w-16 h-16 mx-auto mb-8 text-indigo-300 opacity-50" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Designed for International Patients</h2>
                        <p className="text-indigo-100 text-lg mb-12 font-medium">Pre-arrival virtual consultation, cellular therapy coordination, and global coordination for oncology support.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Global Support</span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Airport Cord</span>
                            <span className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest">Medical Documentation</span>
                        </div>
                        <button className="mt-12 bg-white text-indigo-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-50 transition transform hover:scale-105">
                            Request Case Review
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Tigris */}
            <section className="py-24 bg-gray-50 border-t border-gray-100 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-indigo-950 mb-16">Why Choose Tigris Valley?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Supportive Oncology + Functional Medicine",
                            "Cellular Immunotherapy Coordination",
                            "Structured Palliative Care Model",
                            "Individualized Treatment Plans",
                            "Ethical & Transparent Approach",
                            "International Patient Coordination"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-indigo-50">
                                <CheckCircle2 className="text-emerald-500 shrink-0" />
                                <span className="font-bold text-gray-800 text-left leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-20 text-2xl md:text-3xl font-extrabold italic text-indigo-950">
                        We believe cancer care must address the body, mind, immunity, and dignity.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default IntegrativeCancer;
