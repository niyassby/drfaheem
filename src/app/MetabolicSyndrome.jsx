import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase } from 'lucide-react';

const MetabolicSyndrome = () => {
    const phases = [
        {
            title: "Phase 1: Advanced Functional Assessment",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            content: "Comprehensive evaluation including Metabolic panel, Insulin resistance markers (HOMA-IR), HbA1c, Lipid profile, Liver function, Inflammatory markers, Vitamin and mineral status, and Body composition analysis.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Precision Anti-Inflammatory Nutrition",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            content: "Customized plan to improve insulin sensitivity, reverse fatty liver, and reduce visceral fat. Includes low-glycemic therapeutic plan, time-restricted eating, and high-fiber microbiome support.",
            bgColor: "bg-green-50"
        },
        {
            title: "Phase 3: Mitochondrial Activation & Hormonal Reset",
            icon: <Zap className="w-8 h-8 text-yellow-600" />,
            content: "Restoring cellular energy production using Magnesium, Alpha-lipoic acid, Omega-3s, and Berberine. Shifting the body from fat storage mode to fat burning mode.",
            bgColor: "bg-yellow-50"
        },
        {
            title: "Phase 4: Advanced IV Metabolic Therapy",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            content: "Accelerated recovery via IV Nutritional Therapy: Magnesium, B-Complex, Vitamin C, ALA, N-Acetyl Cysteine (NAC), and L-Carnitine for mitochondrial fat metabolism activation.",
            bgColor: "bg-purple-50"
        },
        {
            title: "Phase 5: Detox & Liver Restoration",
            icon: <Thermometer className="w-8 h-8 text-orange-600" />,
            content: "Structured liver detox protocols, nutritional detoxification support, and gut microbiome repair to address the close link between metabolic syndrome and fatty liver.",
            bgColor: "bg-orange-50"
        },
        {
            title: "Phase 6: Cardiometabolic Protection",
            icon: <Activity className="w-8 h-8 text-red-600" />,
            content: "Advanced lipid optimization, endothelial support, and EECP therapy (Enhanced External Counterpulsation) to improve circulation and support cardiovascular function.",
            bgColor: "bg-red-50"
        }
    ];

    const outcomes = [
        "Improved insulin sensitivity",
        "Reduction in HbA1c",
        "Reduction in triglycerides",
        "Improved HDL",
        "Fatty liver improvement",
        "Reduced waist circumference",
        "Increased energy",
        "Reduced blood pressure",
        "Sustainable fat loss",
        "Reduced dependency on medications"
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                        alt="Metabolic Health"
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
                        <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-indigo-200 uppercase bg-indigo-900/30 rounded-full border border-indigo-500/30">
                            Metabolic Restoration Program
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Metabolic Syndrome & <br /> Obesity Reversal Program
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-50 mb-10 leading-relaxed font-medium">
                            Sustainable Weight Loss Is Not About Starving. <br />
                            It Is About Restoring Metabolic Intelligence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Struggling With Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Are you struggling with?</h2>
                            <p className="text-lg text-gray-600 italic">You are not alone — and this is reversible.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                "Abdominal obesity",
                                "Insulin resistance or prediabetes",
                                "Type 2 diabetes",
                                "High triglycerides",
                                "Fatty liver",
                                "High blood pressure",
                                "Chronic fatigue",
                                "Weight regain despite dieting"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-2 h-2 bg-red-500 rounded-full shrink-0"></div>
                                    <span className="font-semibold text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Different Approach Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                What Makes Our <br /> Program Different?
                            </h2>
                            <div className="h-1.5 w-24 bg-blue-600 rounded-full mb-8"></div>
                            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                                We don’t treat weight. <span className="font-bold text-blue-700 italic">We treat the metabolic dysfunction causing the weight gain.</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Instead of calorie restriction alone, we correct:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Mitochondrial dysfunction",
                                    "Chronic inflammation",
                                    "Hormonal imbalance",
                                    "Insulin resistance",
                                    "Gut dysbiosis",
                                    "Liver congestion",
                                    "Stress-induced metabolic slowdown"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-center">
                                        <CheckCircle2 className="text-blue-600 w-5 h-5 shrink-0" />
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-indigo-900 p-10 md:p-12 rounded-[3.5rem] text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-8 italic">Who Is This Program For?</h3>
                                <div className="space-y-4">
                                    {[
                                        "Have Metabolic Syndrome",
                                        "Are overweight or obese",
                                        "Have Prediabetes or Type 2 Diabetes",
                                        "Have Fatty Liver (NAFLD)",
                                        "Have high triglycerides or low HDL",
                                        "Have PCOS with weight gain",
                                        "Are at high risk of heart disease",
                                        "Have failed conventional diet programs"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center">
                                            <div className="bg-white/20 p-1.5 rounded-lg">
                                                <CheckCircle2 className="text-indigo-200 w-5 h-5" />
                                            </div>
                                            <span className="font-medium text-indigo-50">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 6 Phases */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our 6-Phase Metabolic Reversal Program</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">A data-driven, physician-supervised pathway to restoring your body's natural metabolic intelligence.</p>
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

            {/* Expected Outcomes */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">Expected Outcomes</h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">
                                Our patients experience profound shifts in their health metrics and everyday vitality.
                            </p>
                            <div className="space-y-4">
                                {outcomes.map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <CheckCircle2 className="text-green-600 w-5 h-5" />
                                        </div>
                                        <span className="font-semibold text-gray-800 text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-900 p-10 md:p-16 rounded-[4rem] text-white">
                            <h3 className="text-2xl md:text-3xl font-bold mb-8">Program Duration</h3>
                            <div className="flex gap-6 items-start mb-10">
                                <div className="bg-blue-600 p-4 rounded-3xl">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-3xl font-extrabold mb-2">4–12 Weeks</p>
                                    <p className="text-blue-200">On-site intensive program</p>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-8 mb-10">
                                <p className="text-lg text-gray-300 mb-4">Followed by:</p>
                                <p className="text-xl font-bold italic">Remote monitoring and metabolic coaching</p>
                            </div>
                            <div className="bg-red-900/40 p-6 rounded-2xl border border-red-500/20">
                                <p className="text-sm font-bold uppercase tracking-widest text-red-300 mb-3 flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" /> Who Should Not Delay Treatment?
                                </p>
                                <p className="text-sm text-red-100 leading-relaxed italic">
                                    Early intervention prevents irreversible damage like Heart attack, Stroke, Kidney disease, Neuropathy, and Cognitive decline.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-indigo-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Why International Patients Choose Us</h2>
                        <div className="h-1.5 w-24 bg-indigo-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Physician-Led", desc: "Evidence-informed integrative therapies and functional medicine." },
                            { title: "Personalized Care", desc: "Structured plans with transparent pricing and follow-up." },
                            { title: "Safe Protocols", desc: "Safe IV protocols and multi-modal restorative strategies." },
                            { title: "Healing Environment", desc: "A calm, supportive setting ideal for metabolic recovery." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <h4 className="text-xl font-bold mb-4 text-indigo-300">{item.title}</h4>
                                <p className="text-indigo-100 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-950 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Book Your International Consultation</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
                            {[
                                { step: "1", text: "Schedule a Virtual Assessment", icon: <Brain /> },
                                { step: "2", text: "Receive a Personalized Roadmap", icon: <ListChecks /> },
                                { step: "3", text: "Begin Your Recovery Journey", icon: <Briefcase /> }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-xl">
                                        {item.step}
                                    </div>
                                    <p className="font-semibold text-lg">{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className="bg-white text-indigo-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-indigo-50 transition transform hover:scale-105 shadow-xl relative z-10">
                            Request Assessment
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default MetabolicSyndrome;
