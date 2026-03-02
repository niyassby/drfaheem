import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe } from 'lucide-react';

const ReverseDiabetes = () => {
    const phases = [
        {
            title: "Phase 1: Comprehensive Metabolic & Cardiac Assessment",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            content: "Detailed testing including HbA1c, Fasting Insulin (HOMA-IR), Lipid Profile, Liver & Kidney Function, Vitamins status, and Body Composition. Optional CGM and Vascular screening.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Personalized Therapeutic Nutrition",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            content: "Low-carb / insulin-reset protocols, anti-inflammatory diet, fatty liver reversal, and time-restricted eating. Goal: Rapid improvement in insulin sensitivity.",
            bgColor: "bg-green-50"
        },
        {
            title: "Phase 3: Enhanced External Counterpulsation (EECP)",
            icon: <Activity className="w-8 h-8 text-red-600" />,
            content: "A core component for diabetic patients with vascular damage. Improves endothelial function and stimulates collateral circulation ('natural bypass').",
            bgColor: "bg-red-50"
        },
        {
            title: "Phase 4: Advanced IV Regenerative Therapies",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            content: "Customized IV nutritional therapy (Mg, B-complex, Vit C, ALA) to support mitochondrial energy and Neuropathy care. IV Chelation for vascular stiffness.",
            bgColor: "bg-purple-50"
        },
        {
            title: "Phase 5: Structured Detox & Metabolic Reset",
            icon: <Thermometer className="w-8 h-8 text-orange-600" />,
            content: "Liver detox support, gut microbiome restoration, and hydration strategies to reduce inflammatory load and restore metabolic flexibility.",
            bgColor: "bg-orange-50"
        },
        {
            title: "Phase 6: Muscle Activation & Lifestyle Protocol",
            icon: <UserCheck className="w-8 h-8 text-teal-600" />,
            content: "Resistance training guidance and sleep optimization. Activating muscle—the largest glucose disposal organ—improves insulin sensitivity dramatically.",
            bgColor: "bg-teal-50"
        }
    ];

    const complications = [
        { area: "Heart", desc: "EECP, Lipid optimization, Endothelial care", icon: <Heart className="text-red-500" /> },
        { area: "Nerves", desc: "ALA, B12 optimization, Microcirculation", icon: <Zap className="text-yellow-500" /> },
        { area: "Kidneys", desc: "Microalbumin monitoring, BP control", icon: <ShieldCheck className="text-blue-500" /> },
        { area: "Eyes", desc: "Glycemic stability, Routine screening", icon: <UserCheck className="text-purple-500" /> }
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1505751172107-16079d8f76e7?q=80&w=2070&auto=format&fit=crop"
                        alt="Diabetes Care"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-blue-200 uppercase bg-blue-900/30 rounded-full border border-blue-500/30">
                            Vascular Restoration Program
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Reverse Type 2 <br /> Diabetes Naturally
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-medium">
                            Advanced Functional Medicine combined with Vascular Restoration. We don’t just treat blood sugar; we restore metabolic health.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Message */}
            <section className="py-20 bg-gray-50 border-b border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Transcending Blood Sugar Management</h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-700 leading-relaxed mb-8">
                            Diabetes is not just a blood sugar problem. It is a <span className="font-bold text-blue-700">metabolic, vascular, and inflammatory disorder</span> that affects the heart, kidneys, nerves, and circulation.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed italic">
                            At Tigris Valley, we combine Functional Medicine + Advanced Circulatory Therapies including EECP + IV Regenerative Support.
                        </p>
                    </div>
                </div>
            </section>

            {/* The 6 Phases */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">The 6-Phase Reversal Program</h2>
                        <p className="text-gray-500 text-lg">A structured, physician-supervised journey to metabolic flexibility.</p>
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
                                <p className="text-gray-700 leading-relaxed">{phase.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EECP Focus */}
            <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                    <Heart className="w-64 h-64" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic">
                                EECP: A Core Component of Our Program
                            </h2>
                            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                                Especially beneficial in diabetic patients where vascular damage is common. EECP acts as a non-surgical "natural bypass," stimulating collateral circulation.
                            </p>
                            <div className="space-y-6">
                                {[
                                    "Improve endothelial function",
                                    "Stimulate collateral circulation",
                                    "Enhance oxygen delivery",
                                    "Improve peripheral circulation",
                                    "Reduce cardiac workload"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center">
                                        <div className="bg-blue-500/20 p-2 rounded-lg">
                                            <CheckCircle2 className="text-blue-400 w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-lg text-blue-50">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 bg-white/10 backdrop-blur-lg p-8 md:p-12 rounded-[3.5rem] border border-white/20">
                            <h3 className="text-2xl font-bold mb-6">Treatment Protocol</h3>
                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <span className="block text-blue-300 text-sm mb-1 uppercase tracking-wider">Total</span>
                                    <span className="text-3xl font-bold italic">8-35 Sessions</span>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <span className="block text-blue-300 text-sm mb-1 uppercase tracking-wider">Frequency</span>
                                    <span className="text-3xl font-bold italic">3-5 Days/wk</span>
                                </div>
                            </div>
                            <div className="bg-blue-600 p-6 rounded-2xl">
                                <p className="text-sm font-bold uppercase tracking-widest mb-2">Patient Indications</p>
                                <p className="text-blue-100 italic leading-relaxed">
                                    Recommended for: CAD, Angina, Heart Disease, ED, Peripheral Vascular Disease, and High Cardiovascular Risk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Complication Prevention */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6">Complication Prevention Strategy</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">We proactively protect your vital organs using multi-modal integrative strategies.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complications.map((comp, idx) => (
                            <div key={idx} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors duration-300">
                                <div className="mb-4">{comp.icon}</div>
                                <h4 className="text-xl font-bold mb-3 text-gray-900">{comp.area}</h4>
                                <p className="text-gray-600 font-medium italic">{comp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advanced & Special Support */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Heart Failure Support */}
                        <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl shadow-blue-900/5 relative overflow-hidden border border-gray-100">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Sparkles className="w-32 h-32 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-blue-900 flex items-center gap-3 uppercase tracking-tighter">
                                Special Support for Heart Failure
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-8 font-medium">
                                For patients with diabetic cardiomyopathy or heart failure, we offer a <span className="text-blue-700 font-bold italic">Special Cardiac Nutritional Drip Protocol</span>.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {["Myocardial energy production", "Circulatory stability", "Reduced oxidative stress"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800 font-semibold">
                                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-blue-500 font-bold uppercase tracking-widest italic py-3 px-4 bg-blue-50 rounded-xl inline-block">
                                Strictly under physician supervision
                            </p>
                        </div>

                        {/* Type 1 Diabetes */}
                        <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl shadow-blue-900/5 relative overflow-hidden border border-gray-100">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Globe className="w-32 h-32 text-teal-600" />
                            </div>
                            <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full mb-4 uppercase tracking-widest">Type 1 Focused</span>
                            <h3 className="text-2xl font-bold mb-6 text-teal-900 uppercase tracking-tighter">
                                Advanced Cellular Therapy Option
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6 font-medium italic">
                                Stem cell–based approaches for beta-cell preservation and immune modulation (Collaboratively explored).
                            </p>
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                Requires strict eligibility screening. Best results in early-stage cases. Not a guaranteed cure, but a path to stability.
                            </p>
                            <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-widest">
                                <ShieldCheck className="w-4 h-4" /> Comprehensive Evaluation Mandatory
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* International Patients CTA */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 p-12 md:p-20 rounded-[4rem] text-white shadow-2xl shadow-blue-900/30">
                        <Globe className="w-16 h-16 mx-auto mb-8 text-blue-200 opacity-50" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">Designed for International Patients</h2>
                        <p className="text-blue-100 text-lg mb-12 font-medium">Pre-arrival consultation, 2–4 week structured program, airport coordination, and follow-up support.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            {['Pre-arrival Consult', '2-4 Week Intensive', 'IV Packages', 'Airport Support'].map((item, i) => (
                                <div key={i} className="text-sm font-bold uppercase tracking-widest text-blue-200">{item}</div>
                            ))}
                        </div>
                        <button className="bg-white text-blue-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition transform hover:scale-105 shadow-xl">
                            Request Program Details
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-blue-900 mb-16">Why Choose Tigris Valley Wellness Centre?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Functional + Vascular integrated approach",
                            "Advanced EECP therapy",
                            "Physician-supervised IV therapies",
                            "Personalized metabolic plans",
                            "Ethical and safety-focused protocols",
                            "International patient coordination"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <CheckCircle2 className="text-blue-600 shrink-0" />
                                <span className="font-bold text-gray-800 text-left leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20">
                        <p className="text-2xl md:text-3xl font-bold italic text-blue-950">We don’t just treat blood sugar. We restore metabolic and vascular health.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ReverseDiabetes;
