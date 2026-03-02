import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves, Flower } from 'lucide-react';

const PcodReversal = () => {
    const phases = [
        {
            title: "Phase 1: Comprehensive Hormonal & Metabolic Mapping",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            content: "We identify your personal PCOD type (insulin-driven, stress-driven, inflammatory, etc.) through detailed blood work including HOMA-IR, testosterone, DHEAS, and thyroid profile.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Insulin Reset & Therapeutic Nutrition",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            content: "Personalized nutrition strategy focusing on low-glycemic insulin stabilization, anti-inflammatory protocols, and controlled carbohydrate reset to restore ovulation.",
            bgColor: "bg-green-50"
        },
        {
            title: "Phase 3: Advanced IV Hormonal Support",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            content: "Physician-supervised IV support (Mg, B-Complex, Vit C, ALA, NAC) for severe fatigue, hair fall, and nutrient depletion. Enhances metabolic signaling balance.",
            bgColor: "bg-purple-50"
        },
        {
            title: "Phase 4: Liver & Detox Optimization",
            icon: <Thermometer className="w-8 h-8 text-orange-600" />,
            content: "Supporting estrogen clearance and bile flow through structured detox protocols and microbiome restoration. Essential for hormone metabolism.",
            bgColor: "bg-orange-50"
        },
        {
            title: "Phase 5: Stress & Cortisol Reset",
            icon: <Waves className="w-8 h-8 text-teal-600" />,
            content: "Integrating breathwork, hormone-supportive yoga, and sleep optimization to balance cortisol levels—a key factor in cycle regularity.",
            bgColor: "bg-teal-50"
        },
        {
            title: "Phase 6: Body Composition & Metabolic Activation",
            icon: <Activity className="w-8 h-8 text-red-600" />,
            content: "Focus on resistance training and muscle activation as a powerful insulin-sensitizing strategy. Even minor weight optimization can restore natural cycles.",
            bgColor: "bg-red-50"
        }
    ];

    const improvements = [
        "More regular cycles",
        "Reduced acne & hair fall",
        "Improved insulin levels",
        "Weight reduction",
        "Better fertility outcomes",
        "Improved mood stability",
        "Increased energy",
        "Reduced long-term metabolic risk"
    ];

    const risks = [
        "Type 2 diabetes",
        "Fatty liver",
        "Cardiovascular disease",
        "Metabolic syndrome",
        "Endometrial complications"
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
                        alt="Hormonal Health"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/60"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-pink-200 uppercase bg-pink-900/30 rounded-full border border-pink-500/30">
                            Hormone Restoration Program
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            The Advanced PCOD <br /> Reversal Program
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-pink-50 mb-10 leading-relaxed font-medium italic">
                            You Don’t Need to Suppress Hormones. <br />
                            You Need to Restore Balance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Message */}
            <section className="py-20 bg-pink-50/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Identifying Your PCOD Type</h2>
                        <div className="h-1.5 w-24 bg-pink-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-700 leading-relaxed mb-10">
                            We identify whether your PCOD is <span className="font-bold text-pink-700">insulin-driven, stress-driven, inflammatory, thyroid-related, or gut-related.</span>
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-bold text-pink-900">
                            {["Insulin-Driven", "Stress-Driven", "Inflammatory", "Gut-Related"].map((item, i) => (
                                <div key={i} className="p-4 bg-white rounded-2xl border border-pink-100 shadow-sm uppercase tracking-wider">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* The 6 Phases */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">6-Phase Hormone Reset</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">A root-cause functional approach to restoring metabolic and endocrine balance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {phases.map((phase, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${phase.bgColor} p-8 rounded-[2.5rem] border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300 group`}
                            >
                                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {phase.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight">{phase.title}</h3>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{phase.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fertility Section */}
            <section className="py-24 bg-purple-900 text-white relative overflow-hidden">
                <Flower className="absolute -bottom-20 -left-20 w-80 h-80 text-white/5 rotate-12" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight italic">
                                Fertility-Focused <br /> PCOD Program
                            </h2>
                            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                                For women trying to conceive, we aim to improve natural conception rates through targeted metabolic and hormonal preparation.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Ovulation tracking",
                                    "Endometrial support",
                                    "Micronutrient optimization",
                                    "Anti-inflammatory fertility preparation",
                                    "Partner metabolic screening"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center">
                                        <div className="bg-purple-500/20 p-2 rounded-lg">
                                            <CheckCircle2 className="text-purple-300 w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-lg text-purple-50">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-white/10 backdrop-blur-lg p-10 md:p-12 rounded-[4rem] border border-white/20">
                            <h3 className="text-2xl font-bold mb-8">Long-Term Health Protection</h3>
                            <p className="text-purple-200 mb-8 font-medium italic">We proactively address the higher risks associated with PCOD:</p>
                            <div className="grid gap-4">
                                {risks.map((risk, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <ShieldCheck className="text-red-400 w-5 h-5" />
                                        <span className="font-bold text-white uppercase tracking-wider text-sm">{risk}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expected Improvements */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Expected Improvements</h2>
                            <p className="text-gray-500 text-lg italic">Restoring balance leads to transformational shifts in vitality.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
                            {improvements.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 py-4 border-b border-gray-100">
                                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                                        <Sparkles className="text-green-600 w-5 h-5" />
                                    </div>
                                    <span className="font-bold text-gray-800 text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* International CTA */}
            <section className="py-24 bg-gray-50 relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-600 to-purple-900 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Designed for International Patients</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
                            {['2-4 Week Reset', 'Pre-arrival Consult', 'IV Support', 'Airport Support'].map((item, i) => (
                                <div key={i} className="text-xs font-bold uppercase tracking-widest text-pink-200">{item}</div>
                            ))}
                        </div>
                        <button className="bg-white text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-pink-50 transition transform hover:scale-105 shadow-xl relative z-10">
                            Request Program Details
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-16 underline decoration-pink-500 decoration-4 underline-offset-8">Why Choose Tigris Valley?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            "Root-cause functional hormone approach",
                            "Metabolic + endocrine integration",
                            "Physician-supervised IV therapies",
                            "Fertility-conscious care",
                            "Ethical & safety-focused protocols",
                            "International patient coordination"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-pink-50/30 p-6 rounded-2xl border border-pink-100/50">
                                <CheckCircle2 className="text-pink-600 shrink-0" />
                                <span className="font-bold text-gray-800 leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PcodReversal;
