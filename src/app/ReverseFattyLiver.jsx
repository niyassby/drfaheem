import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves } from 'lucide-react';

const ReverseFattyLiver = () => {
    const phases = [
        {
            title: "Step 1: Comprehensive Liver & Metabolic Mapping",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            content: "Advanced blood work to identify if your fatty liver is insulin-driven, toxic, or gut-related. Tests include Liver Enzymes (ALT/AST), HOMA-IR, HbA1c, and Vitamin D/B12 mapping.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Step 2: Insulin Reset & Therapeutic Liver Nutrition",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            content: "Eliminating fructose excess and processed oils while optimizing protein and Omega-3s. A personalized low-glycemic metabolic reset designed to reduce liver fat accumulation.",
            bgColor: "bg-green-50"
        },
        {
            title: "Step 3: Advanced IV Liver Support",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            content: "Physician-supervised IV support (NAC, Alpha-lipoic acid, L-Carnitine, Magnesium) to boost glutathione production and reduce oxidative stress within liver cells.",
            bgColor: "bg-purple-50"
        },
        {
            title: "Step 4: Structured Liver Detox & Gut Reset",
            icon: <Thermometer className="w-8 h-8 text-orange-600" />,
            content: "Optimizing bile flow and correcting the gut microbiome to reduce endotoxin load. A controlled detox protocol tailored to your liver's regeneration capacity.",
            bgColor: "bg-orange-50"
        },
        {
            title: "Step 5: Metabolic & Mitochondrial Activation",
            icon: <Activity className="w-8 h-8 text-red-600" />,
            content: "Activation of fat burning through post-meal walking strategies and muscle activation. Muscle is the most powerful organ for clearing metabolic waste.",
            bgColor: "bg-red-50"
        }
    ];

    const improvements = [
        "Reduced ALT, AST, GGT",
        "Improved insulin levels",
        "Reduced liver fat percentage",
        "Improved lipid profile",
        "Weight optimization",
        "Increased energy",
        "Reduced inflammation",
        "Better metabolic flexibility"
    ];

    const risks = [
        "NASH (inflammatory fatty liver)",
        "Fibrosis",
        "Cirrhosis",
        "Type 2 diabetes",
        "Heart disease"
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                        alt="Liver Health"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-800/60"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-emerald-200 uppercase bg-emerald-900/30 rounded-full border border-emerald-500/30">
                            Functional Liver Restoration
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Reverse Fatty Liver <br /> Naturally
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-emerald-50 mb-10 leading-relaxed font-medium">
                            Fatty Liver Is a Metabolic Warning — Not Just a Scan Finding. <br />
                            At Tigris Valley, we work to reverse the metabolic drivers behind it.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Warning Message Section */}
            <section className="py-20 bg-emerald-50/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">More Than Just a Reassurance</h2>
                        <div className="h-1.5 w-24 bg-emerald-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-700 leading-relaxed mb-10">
                            Left unaddressed, fatty liver (NAFLD / MAFLD) is a signal for <span className="font-bold text-emerald-700">Insulin Resistance, Chronic Inflammation, and Cardiovascular Risk.</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
                                <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> Progression Risks
                                </h4>
                                <ul className="space-y-3 text-left">
                                    {risks.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100">
                                <h4 className="text-emerald-700 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <Activity className="w-5 h-5" /> Restoration Pillars
                                </h4>
                                <ul className="space-y-3 text-left">
                                    {["Stable insulin levels", "Efficient fat metabolism", "Healthy gut-liver axis", "Bile flow optimization"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Restoration Steps */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Functional Liver Restoration Program</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">A data-driven, step-by-step pathway to restoring your liver's metabolic health.</p>
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

            {/* Expected Improvements Section */}
            <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Activity className="w-64 h-64" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8">Expected Improvements</h2>
                            <p className="text-emerald-100 text-lg mb-10 italic">
                                Our patients report meaningful reversals in liver fat and metabolic markers within just a few weeks.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {improvements.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center">
                                        <div className="bg-white/10 p-2 rounded-lg">
                                            <CheckCircle2 className="text-emerald-300 w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-emerald-50">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-lg p-10 md:p-12 rounded-[4rem] border border-white/20">
                            <h3 className="text-2xl font-bold mb-6">Cardiometabolic Risk Protection</h3>
                            <p className="text-emerald-100 mb-8 leading-relaxed">
                                Fatty liver significantly increases heart risk. We proactively address the underlying causes to protect your vascular health.
                            </p>
                            <div className="space-y-4">
                                {["Lipid optimization", "Endothelial support", "Inflammation reduction", "Insulin stabilization"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                        <span className="font-bold text-white uppercase tracking-wider text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* International CTA */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-600 to-teal-900 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Designed for International Patients</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
                            {['2-4 Week Reset', 'Pre-arrival Consult', 'IV Support', 'Airport Support'].map((item, i) => (
                                <div key={i} className="text-xs font-bold uppercase tracking-widest text-emerald-200">{item}</div>
                            ))}
                        </div>
                        <button className="bg-white text-emerald-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-emerald-50 transition transform hover:scale-105 shadow-xl relative z-10">
                            Request Program Details
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-16">Why Choose Tigris Valley Wellness Centre?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            "Root-cause functional medicine approach",
                            "Physician-supervised IV therapies",
                            "Liver + metabolic integration",
                            "Structured monitoring",
                            "Ethical and safety-focused protocols",
                            "International patient coordination"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-emerald-100">
                                <CheckCircle2 className="text-emerald-600 shrink-0" />
                                <span className="font-bold text-gray-800 leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20">
                        <p className="text-2xl md:text-3xl font-bold italic text-emerald-950">Your Liver Can Regenerate. The Right Environment Makes the Difference.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ReverseFattyLiver;
