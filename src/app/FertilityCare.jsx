import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves, Flower, Baby } from 'lucide-react';

const FertilityCare = () => {
    const categories = [
        {
            title: "For Women",
            items: ["PCOS / PCOD", "Irregular cycles", "Poor ovarian reserve", "Recurrent implantation failure", "Endometriosis", "Unexplained infertility"]
        },
        {
            title: "For Men",
            items: ["Low sperm count", "Poor motility", "Abnormality morphology", "Oxidative stress", "Erectile dysfunction", "Metabolic syndrome"]
        },
        {
            title: "For Couples",
            items: ["Preparing for IVF / ICSI", "Improving egg & sperm quality", "Natural conception support"]
        }
    ];

    const phases = [
        {
            title: "Phase 1: Comprehensive Fertility Mapping",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            content: "Detailed hormonal and metabolic profiling for both partners, including AMH, FSH/LH, Semen analysis, and DNA fragmentation if needed.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Fertility Nutrition Reset",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            content: "Anti-inflammatory fertility diet and insulin-reset strategies to improve ovulation quality and optimize sperm production.",
            bgColor: "bg-green-50"
        },
        {
            title: "Phase 3: Hormonal Optimization Protocol",
            icon: <Zap className="w-8 h-8 text-amber-600" />,
            content: "Natural pathway correction for testosterone in men and cycle regularization for women through metabolic recalibration.",
            bgColor: "bg-amber-50"
        },
        {
            title: "Phase 4: IV Nutritional Fertility Therapy",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            content: "Mitochondrial support (NAC, ALA, L-Carnitine) to improve egg quality, sperm motility, and endometrial receptivity.",
            bgColor: "bg-purple-50"
        },
        {
            title: "Phase 5: Detox & Inflammation Reduction",
            icon: <Thermometer className="w-8 h-8 text-orange-600" />,
            content: "Clearing the environmental and metabolic 'noise' through liver support and gut repair to create a safe nesting environment.",
            bgColor: "bg-orange-50"
        },
        {
            title: "Phase 6: Stress & Nervous System Regulation",
            icon: <Waves className="w-8 h-8 text-teal-600" />,
            content: "Vagal tone activation and mind-body coaching to lower cortisol levels, as fertility is highly stress-sensitive.",
            bgColor: "bg-teal-50"
        }
    ];

    const ivfBenefits = [
        "8–12 week pre-IVF preparation",
        "Egg mitochondrial support",
        "Sperm DNA integrity support",
        "Uterine receptivity optimization",
        "Stress reduction protocol",
        "Anti-inflammatory stabilization"
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=2069&auto=format&fit=crop"
                        alt="Fertility Care"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-purple-900/60"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-2 px-4 mb-6 text-sm font-bold tracking-widest text-rose-200 uppercase bg-rose-950/40 rounded-full border border-rose-500/30">
                            Natural Conception & IVF Support
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            Integrative <br /> Fertility Restoration
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-rose-50 mb-10 leading-relaxed font-medium">
                            Fertility is not forced. It is restored when the body is <span className="text-rose-300 font-bold">safe, nourished, balanced, and supported.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="py-24 bg-rose-50/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Who Is This Program For?</h2>
                        <p className="text-lg text-gray-600 italic">Addressing fertility from a metabolic and functional perspective.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl border border-rose-100 hover:border-rose-300 transition-colors group">
                                <h3 className="text-2xl font-bold mb-8 text-rose-800 flex items-center gap-3">
                                    <Baby className="w-6 h-6 group-hover:scale-110 transition-transform" /> {cat.title}
                                </h3>
                                <ul className="space-y-4">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The 6 Phases */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-rose-950">6-Phase Fertility Restoration Model</h2>
                        <div className="h-1.5 w-24 bg-rose-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {phases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${phase.bgColor} p-10 rounded-[3rem] border border-gray-100 shadow-lg group hover:shadow-2xl transition-all`}
                            >
                                <div className="mb-8 p-4 bg-white rounded-3xl w-fit shadow-md group-hover:rotate-6 transition-transform">
                                    {phase.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-6 text-gray-900">{phase.title}</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">{phase.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IVF Optimization Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <Flower className="absolute -bottom-20 -right-20 w-96 h-96 text-white/5 opacity-20" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
                                IVF Optimization <br /> Protocol
                            </h2>
                            <p className="text-xl text-slate-400 mb-10 leading-relaxed italic">
                                For couples preparing for ART, we focus on improving implantation and pregnancy outcomes through biological preparation.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                                {ivfBenefits.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="p-2 bg-rose-500/20 rounded-lg">
                                            <Sparkles className="text-rose-400 w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-slate-200 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white/5 backdrop-blur-md p-12 rounded-[4rem] border border-white/10 shadow-3xl">
                                <h3 className="text-2xl font-bold mb-8 text-rose-300">Advanced Integrated Support</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <Stethoscope className="w-10 h-10 text-rose-500 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Acupuncture Protocols</h4>
                                            <p className="text-slate-400 text-sm">Targeted support for ovulation and uterine blood flow enhancement.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <Activity className="w-10 h-10 text-rose-500 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Regenerative Care</h4>
                                            <p className="text-slate-400 text-sm">Exosome and platelet-based strategies for poor responders (case-based).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-rose-950 mb-16">Why Choose Tigris Valley Fertility?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            "Functional + Integrative fertility approach",
                            "IV mitochondrial support protocols",
                            "Hormone-focused metabolic care",
                            "IVF preparation specialization",
                            "Ethical & individualized care",
                            "Physician-supervised programs"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-rose-50/50 p-8 rounded-3xl border border-rose-100 hover:bg-rose-50 transition-colors">
                                <CheckCircle2 className="text-rose-600 shrink-0" />
                                <span className="font-bold text-gray-800 leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* International CTA */}
            <section className="py-24 bg-rose-50 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-rose-600 to-indigo-950 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Designed for International Couples</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
                            {['Couple Assessment', 'Pre-arrival Consult', 'IV Support', 'Airport Support'].map((item, i) => (
                                <div key={i} className="text-xs font-bold uppercase tracking-widest text-rose-200">{item}</div>
                            ))}
                        </div>
                        <button className="bg-white text-rose-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-rose-50 transition transform hover:scale-105 shadow-xl relative z-10">
                            Request Program Details
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FertilityCare;
