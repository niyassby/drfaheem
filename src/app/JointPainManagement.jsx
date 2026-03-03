import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves, Accessibility, Move, Dumbbell, Wind } from 'lucide-react';

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

    const painDrivers = [
        "Silent inflammation",
        "Gut dysfunction",
        "Autoimmune activation",
        "Metabolic imbalance",
        "Mitochondrial fatigue",
        "Nutrient deficiencies",
        "Poor circulation",
        "Muscle weakness & biomechanical imbalance"
    ];

    const phases = [
        {
            title: "Phase 1: Root-Cause Pain Mapping",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            description: "We evaluate:",
            items: [
                "Inflammatory markers",
                "Autoimmune screening",
                "Metabolic contributors",
                "Hormonal influence",
                "Vitamin deficiencies",
                "Gut–joint axis dysfunction",
                "Postural and biomechanical imbalance"
            ],
            subSections: [
                {
                    title: "Investigations may include:",
                    items: [
                        "ESR / CRP",
                        "Rheumatoid markers",
                        "ANA (if indicated)",
                        "Vitamin D",
                        "Uric acid",
                        "HbA1c & insulin",
                        "Thyroid profile",
                        "Liver & kidney function"
                    ]
                }
            ],
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Anti-Inflammatory Nutrition Reset",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            description: "Your personalized protocol may include:",
            items: [
                "Anti-inflammatory diet plan",
                "Omega-3 optimization",
                "Elimination of trigger foods",
                "Blood sugar stabilization",
                "Gut repair strategy",
                "Weight optimization"
            ],
            goal: "Reduce systemic inflammation within weeks.",
            bgColor: "bg-green-50"
        },
        {
            title: "Phase 3: Targeted Joint & Inflammation Support",
            icon: <Pill className="w-8 h-8 text-amber-600" />,
            description: "May include:",
            items: [
                "Omega-3 fatty acids",
                "Curcumin",
                "Boswellia",
                "Vitamin D correction",
                "Magnesium",
                "Collagen peptides",
                "MSM",
                "NAC",
                "Glucosamine (case-based)"
            ],
            note: "Supports cartilage repair and inflammatory balance.",
            bgColor: "bg-amber-50"
        },
        {
            title: "Phase 4: Advanced Physiotherapy & Biomechanical Correction",
            icon: <Accessibility className="w-8 h-8 text-indigo-600" />,
            description: "Physiotherapy is a core pillar of our program. Pain improves when movement improves.",
            subSections: [
                {
                    title: "Includes:",
                    items: [
                        "Detailed posture & gait assessment",
                        "Muscle imbalance evaluation",
                        "Joint mobility testing",
                        "Core strength assessment",
                        "Functional movement screening"
                    ]
                },
                {
                    title: "Therapeutic Interventions:",
                    items: [
                        "Corrective strengthening exercises",
                        "Joint mobilization techniques",
                        "Manual therapy",
                        "Core stabilization training",
                        "Fascia release",
                        "Resistance training guidance",
                        "Neuromuscular re-education",
                        "Post-meal walking protocol"
                    ]
                },
                {
                    title: "Physiotherapy helps:",
                    items: [
                        "Reduce mechanical stress on joints",
                        "Improve alignment",
                        "Strengthen supporting muscles",
                        "Prevent recurrence",
                        "Enhance long-term joint protection"
                    ]
                }
            ],
            note: "Movement is medicine.",
            bgColor: "bg-indigo-50"
        },
        {
            title: "Phase 5: Advanced IV Nutritional Therapy",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            description: "For moderate to severe inflammatory pain. May include: Vitamin C, B-complex, Magnesium, Alpha-lipoic acid, NAC, Amino acids, Trace minerals.",
            goals: ["Reduced oxidative stress", "Muscle relaxation", "Mitochondrial energy", "Tissue recovery"],
            subSections: [
                {
                    title: "🔵 Ozone Therapy (Selected Candidates)",
                    description: "May support: Improved oxygen delivery, Reduced inflammatory mediators, Tissue repair signaling, Immune modulation.",
                    note: "Used only when clinically indicated."
                }
            ],
            bgColor: "bg-purple-50"
        }
    ];

    const additionalTherapies = [
        {
            title: "🌿 AYUSH & Integrative Healing",
            items: [
                "Ayurvedic anti-inflammatory herbal protocols",
                "Medicated oil therapies",
                "Panchakarma detox (case-based)",
                "Traditional joint rejuvenation formulations"
            ]
        },
        {
            title: "🪡 Acupuncture & Neuromodulation",
            conditions: ["Sciatica", "Cervical pain", "Knee osteoarthritis", "Frozen shoulder", "Chronic back pain"],
            benefits: ["Pain signal modulation", "Reduced muscle spasm", "Improved circulation", "Faster recovery"]
        },
        {
            title: "🔬 Regenerative Options (Case-Based)",
            items: [
                "Platelet-based joint therapy",
                "Prolotherapy",
                "Exosome therapy (when indicated)",
                "Collagen regeneration strategies"
            ],
            note: "Used ethically and after evaluation."
        }
    ];

    const outcomes = [
        "Reduced pain intensity",
        "Improved mobility",
        "Increased muscle strength",
        "Reduced stiffness",
        "Reduced inflammation",
        "Lower medication dependence",
        "Better quality of life"
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
                            At Tigris Valley Wellness Centre
                        </span>
                        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            🦴 Reverse Joint Pain <br /> Naturally
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-blue-50 mb-10 leading-relaxed font-medium">
                            Advanced Functional Medicine + Regenerative Care + Physiotherapy <br />
                            <span className="text-blue-300 font-bold italic underline decoration-blue-500/30 underline-offset-8">Restore Mobility. Reduce Inflammation. Reclaim Your Life.</span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Message / Why Tigris */}
            <section className="py-24 bg-blue-50/50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-950 leading-tight tracking-tight">
                                Pain Is Not Just a <br /> Joint Problem.
                            </h2>
                            <p className="text-xl text-gray-700 mb-10 leading-relaxed italic">
                                Chronic joint pain is often driven by:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {painDrivers.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-blue-100 shadow-sm group hover:border-blue-400 transition-colors">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></div>
                                        <span className="font-bold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xl text-blue-900 font-bold leading-relaxed border-l-4 border-blue-600 pl-6">
                                At Tigris Valley Wellness Centre, we combine Functional Medicine, Regenerative Therapies, and Structured Physiotherapy to address the root cause — not just suppress symptoms.
                            </p>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                                <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
                                <h3 className="text-3xl font-extrabold mb-8 text-blue-200">🌍 Who This Program Is For</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                                    {conditions.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <CheckCircle2 className="text-blue-400 w-5 h-5 shrink-0" />
                                            <span className="font-semibold text-gray-200 text-sm leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                                    <p className="text-base font-bold text-blue-200 italic text-center">
                                        If you want to avoid long-term painkillers or delay surgery, this program is designed for you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The 5-Phase Model */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-950">🧬 The Advanced Joint Restoration Program</h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                                <h3 className="text-2xl font-bold mb-4 text-gray-900">{phase.title}</h3>

                                {phase.description && <p className="text-gray-800 font-semibold mb-6 text-sm leading-relaxed">{phase.description}</p>}

                                {phase.items && (
                                    <ul className="space-y-3 mb-8 text-sm">
                                        {phase.items.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-gray-700 font-medium">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {phase.subSections && (
                                    <div className="space-y-8">
                                        {phase.subSections.map((sub, i) => (
                                            <div key={i} className="pt-6 border-t border-gray-200/50">
                                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                    <div className="w-1.5 h-4 bg-blue-600 rounded-full"></div> {sub.title}
                                                </h4>
                                                {sub.description && <p className="text-xs text-gray-600 mb-3 italic">{sub.description}</p>}
                                                {sub.items && (
                                                    <ul className="space-y-2 mb-3">
                                                        {sub.items.map((item, j) => (
                                                            <li key={j} className="flex gap-2 text-xs text-gray-700 font-medium">
                                                                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {sub.note && <p className="text-xs text-gray-500 italic mt-3 bg-white/50 p-2 rounded-lg">{sub.note}</p>}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {phase.goals && (
                                    <div className="mt-8 pt-6 border-t border-gray-200/50">
                                        <p className="text-xs font-bold text-blue-900 mb-3 uppercase tracking-widest">Expected Support:</p>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {phase.goals.map((g, k) => (
                                                <li key={k} className="text-xs font-bold text-gray-600 bg-white/50 px-3 py-2 rounded-xl flex items-center gap-2">
                                                    <Sparkles className="w-3 h-3 text-blue-600" /> {g}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {phase.goal && (
                                    <div className="mt-8 pt-6 border-t border-gray-200/50">
                                        <p className="text-sm font-bold text-blue-950 uppercase tracking-widest bg-white/60 px-4 py-2 rounded-xl inline-block shadow-sm">
                                            Goal: <span className="font-medium text-gray-700">{phase.goal}</span>
                                        </p>
                                    </div>
                                )}

                                {phase.note && !phase.subSections && (
                                    <p className="mt-8 text-sm font-bold text-blue-900 italic border-l-2 border-blue-600 pl-3">
                                        {phase.note}
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Support Sections */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <Wind className="absolute top-10 right-10 w-96 h-96 text-white/5" />
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-white">🌿 Integrative & Advanced Care</h2>
                        <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {additionalTherapies.map((therapy, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all">
                                <h3 className="text-2xl font-bold mb-8 text-blue-400">{therapy.title}</h3>

                                {therapy.items && (
                                    <ul className="space-y-4 mb-8">
                                        {therapy.items.map((item, j) => (
                                            <li key={j} className="flex gap-4 items-start">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                                                <span className="font-medium text-slate-200">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {therapy.conditions && (
                                    <div className="mb-8">
                                        <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-4">Effective For:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {therapy.conditions.map((item, j) => (
                                                <span key={j} className="bg-blue-500/10 text-blue-200 px-3 py-1 rounded-lg text-xs font-bold border border-blue-500/20">{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {therapy.benefits && (
                                    <div className="mb-8 bg-black/20 p-6 rounded-2xl">
                                        <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-4">Benefits:</p>
                                        <ul className="space-y-3">
                                            {therapy.benefits.map((item, j) => (
                                                <li key={j} className="flex gap-3 text-sm font-bold text-slate-300">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {therapy.note && (
                                    <p className="text-sm font-bold text-blue-200 italic mt-auto">{therapy.note}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 mb-6">🎯 Expected Outcomes</h2>
                        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 transition-all hover:bg-white hover:shadow-xl group">
                                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-blue-600 transition-colors">
                                    <Sparkles className="text-blue-600 w-6 h-6 group-hover:text-white" />
                                </div>
                                <span className="font-bold text-gray-800 text-lg leading-tight">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* International Patient Program */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-20 opacity-10">
                    <Globe className="w-96 h-96 text-white" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">🌍 International Patient Program</h2>
                            <p className="text-blue-300 text-lg italic mb-12">Kerala provides a calm healing environment ideal for recovery.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    "Pre-arrival virtual consultation",
                                    "2–3 week intensive joint restoration",
                                    "Daily physiotherapy sessions",
                                    "IV & integrative therapy integration",
                                    "Structured follow-up plan"
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
                                        <div className="text-blue-400 mb-3"><CheckCircle2 className="w-5 h-5" /></div>
                                        <span className="text-blue-100 text-xs font-bold uppercase tracking-widest leading-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-2xl relative">
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-8 text-center leading-tight">🦴 Take the First Step Toward <br /> Pain-Free Living</h3>
                            <p className="text-center text-gray-600 mb-12 text-lg italic">
                                If you are tired of long-term painkiller use, repeated steroid injections, being told surgery is your only option, or living with limited mobility... It’s time for a comprehensive, integrative solution.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {[
                                    "International patients welcome",
                                    "Personalized programs available",
                                    "Physician-supervised care"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-center gap-3 bg-blue-50 py-4 px-6 rounded-2xl font-bold text-blue-900 border border-blue-100">
                                        <Stethoscope className="w-5 h-5 text-blue-600" /> {item}
                                    </div>
                                ))}
                            </div>
                            <button className="w-full bg-blue-600 text-white py-6 rounded-full font-black text-xl hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-xl">
                                Book Your Joint & Pain Assessment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Tigris? */}
            <section className="py-24 bg-white border-t border-gray-100 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-blue-950 mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">🏥 Why Tigris Valley Wellness Centre?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            "Root-cause functional medicine",
                            "Structured physiotherapy integration",
                            "Regenerative & IV therapy options",
                            "AYUSH + modern medical blend",
                            "Personalized programs",
                            "Safety-first medical supervision"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-blue-50/30 p-8 rounded-3xl border border-blue-100/50 hover:bg-blue-50 transition-all hover:shadow-md">
                                <CheckCircle2 className="text-blue-600 shrink-0" />
                                <span className="font-bold text-gray-800 leading-tight">✔ {item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20">
                        <p className="text-2xl md:text-4xl font-black italic text-blue-950 tracking-tight">We do not just manage pain. We restore movement.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default JointPainManagement;
