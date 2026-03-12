import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Activity, Zap, ArrowRight, ShieldCheck, Microscope, Apple, Droplets, Thermometer, UserCheck, Heart, Sparkles, Globe, Brain, ListChecks, Stethoscope, Briefcase, Pill, Waves, Phone } from 'lucide-react';

const StrokeRecovery = () => {
    const [ctaOpen, setCtaOpen] = useState(false);

    const phases = [
        {
            title: "Phase 1: Comprehensive Neuro-Metabolic Assessment",
            icon: <Microscope className="w-8 h-8 text-blue-600" />,
            description: "Includes:",
            items: [
                "Detailed neurological evaluation",
                "Functional mobility assessment",
                "Inflammatory markers",
                "Lipid profile",
                "HbA1c & insulin resistance markers",
                "Homocysteine",
                "Vitamin B12, Vitamin D, Magnesium",
                "Thyroid profile",
                "Coagulation markers (if indicated)"
            ],
            optional: "Optional imaging review: Brain MRI/CT review, Carotid Doppler, Echocardiography",
            goal: "Identify reversible vascular and metabolic drivers.",
            bgColor: "bg-blue-50"
        },
        {
            title: "Phase 2: Anti-Inflammatory Brain Nutrition Protocol",
            icon: <Apple className="w-8 h-8 text-green-600" />,
            description: "Personalized brain-protective nutrition plan:",
            items: [
                "Mediterranean-style anti-inflammatory diet",
                "Controlled carbohydrate strategy",
                "Omega-3 optimization",
                "Adequate protein for muscle repair",
                "Polyphenol-rich foods",
                "Glycemic stability focus"
            ],
            goal: "Reduce neuroinflammation and enhance recovery capacity.",
            bgColor: "bg-green-50"
        },
        {
            title: "Phase 3: Neuroplasticity & Structured Rehabilitation",
            icon: <Activity className="w-8 h-8 text-red-600" />,
            description: "Recovery requires consistent neural stimulation. Includes:",
            items: [
                "Physiotherapy",
                "Gait training",
                "Balance retraining",
                "Upper limb activation therapy",
                "Fine motor rehabilitation",
                "Speech therapy (if indicated)",
                "Cognitive retraining exercises"
            ],
            note: "Muscle activation improves both mobility and glucose utilization.",
            bgColor: "bg-red-50"
        },
        {
            title: "Phase 4: Advanced Circulatory & Vascular Support",
            icon: <Heart className="w-8 h-8 text-indigo-600" />,
            description: "Enhanced External Counterpulsation (EECP) – Selected Patients. May be recommended in:",
            items: [
                "Ischemic stroke",
                "Coronary artery disease",
                "Reduced ejection fraction",
                "Peripheral vascular disease",
                "High recurrence risk"
            ],
            subSections: [
                {
                    title: "May support:",
                    items: [
                        "Endothelial function",
                        "Collateral circulation",
                        "Improved cerebral perfusion",
                        "Reduced cardiac workload"
                    ],
                }
            ],
            protocol: "Protocol: 35 sessions, 1 hour daily, 5–6 days per week.",
            bgColor: "bg-indigo-50"
        },
        {
            title: "Phase 5: Advanced IV Neuro-Metabolic Therapy",
            icon: <Droplets className="w-8 h-8 text-purple-600" />,
            description: "For selected candidates under medical supervision. IV Nutritional Therapy May Include:",
            items: [
                "Magnesium, B-Complex, Vitamin C",
                "Alpha-lipoic acid",
                "N-Acetyl Cysteine (NAC)",
                "L-Carnitine (Levocarnitine)",
                "Amino acids, Trace minerals"
            ],
            subSections: [
                {
                    title: "Goals:",
                    items: ["Reduce oxidative stress", "Support mitochondrial repair", "Improve neuropathy", "Reduce fatigue", "Enhance cellular recovery"]
                },
                {
                    title: "IV Chelation Therapy (Selected High-Risk Patients):",
                    items: ["Severe atherosclerosis", "Recurrent vascular risk", "High cardiovascular burden"]
                },
                {
                    title: "Ozone Therapy (Selected Candidates):",
                    items: ["Oxygen utilization", "Microcirculation", "Inflammatory modulation"]
                }
            ],
            bgColor: "bg-purple-50"
        },
        {
            title: "Phase 6: AYUSH Integrative Therapies",
            icon: <Waves className="w-8 h-8 text-teal-600" />,
            description: "We incorporate evidence-informed traditional systems to enhance neurological recovery. AYUSH Modalities May Include:",
            items: [
                "Ayurvedic neuro-rejuvenation protocols",
                "Abhyanga (therapeutic oil massage)",
                "Panchakarma (when appropriate)",
                "Medhya Rasayana (cognitive-support herbs under supervision)",
                "Yogic breathing techniques",
                "Guided relaxation practices"
            ],
            goals: ["Improve circulation", "Reduce stiffness and spasticity", "Enhance nervous system balance", "Improve sleep", "Support mental clarity"],
            note: "Therapies are customized and medically supervised.",
            bgColor: "bg-teal-50"
        },
        {
            title: "Phase 7: Acupuncture & Neuro-Stimulation Therapy",
            icon: <Zap className="w-8 h-8 text-yellow-600" />,
            description: "Acupuncture may be used as an adjunctive therapy in selected patients.",
            items: [
                "Motor recovery support",
                "Spasticity reduction",
                "Pain reduction",
                "Neuropathic symptom relief",
                "Speech support (selected cases)",
                "Autonomic nervous system regulation"
            ],
            protocol: "Treatment frequency: 2–3 sessions per week. Integrated alongside physiotherapy.",
            note: "Performed by trained practitioners under clinical oversight.",
            bgColor: "bg-yellow-50"
        }
    ];

    const conditions = [
        "Ischemic stroke",
        "Hemorrhagic stroke",
        "Transient ischemic attack (TIA)",
        "Post-stroke paralysis",
        "Speech impairment",
        "Cognitive decline",
        "Post-stroke fatigue",
        "Vascular dementia"
    ];

    const preventions = [
        { title: "Blood pressure optimization", icon: "❤️" },
        { title: "Lipid management", icon: "🩸" },
        { title: "Homocysteine reduction", icon: "🧬" },
        { title: "Glycemic stability", icon: "🧠" },
        { title: "Endothelial protection", icon: "🫀" },
        { title: "Lifestyle risk correction", icon: "🚭" }
    ];

    return (
        <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071&auto=format&fit=crop"
                        alt="Neuro Rehabilitation"
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
                        <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-blue-200 uppercase bg-blue-900/30 rounded-full border border-blue-500/30">
                            At Tigris Valley
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Advanced Stroke Recovery & <br /> Neuro-Rehabilitation Program
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-medium">
                            Restore Brain Function. Improve Mobility. Rebuild Independence. <br />
                            Stroke recovery is not only about survival — it is about restoring dignity, mobility, cognition, and quality of life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Recovery Types Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold  text-gray-900">Whether recovering from:</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 gap-6">
                            {conditions.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                                    <span className="font-semibold text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xl text-center text-gray-900">We combine Functional Medicine + Neuro-Rehabilitation + Vascular Optimization.</p>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="">
                        <div className="w-full flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight italic text-blue-900">
                                Our Integrative Philosophy
                            </h2>
                            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                                Stroke is a <span className="font-bold text-blue-700">vascular, inflammatory, metabolic, and neurological event.</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-8 font-medium">Recovery depends on addressing multiple pillars:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    "Neuroplasticity",
                                    "Cerebral circulation",
                                    "Mitochondrial energy",
                                    "Inflammation control",
                                    "Emotional resilience",
                                    "Structured rehabilitation",
                                    "Nervous system stimulation"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-center">
                                        <CheckCircle2 className="text-blue-600 w-5 h-5 shrink-0" />
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <div className="lg:w-1/2">
                            <div className="bg-slate-900 p-10 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                                <Brain className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
                                <h3 className="text-2xl font-bold mb-8">Prevention of Recurrent Stroke</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                                    {preventions.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                            {item.icon}
                                            <span className="font-medium text-gray-200 text-sm">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* The 7 Phases */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-950">7-Phase Stroke Recovery Program</h2>
                        <p className="text-gray-900 text-2xl max-w-2xl mx-auto">A structured, multi-dimensional approach to neurological restoration.</p>
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
                                <p className="text-gray-800 font-semibold mb-3 text-sm">{phase.description}</p>
                                <ul className="space-y-2 mb-4">
                                    {phase.items.map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {phase.optional && <p className="text-xs text-gray-500 italic mb-4">{phase.optional}</p>}
                                {phase.goal && (
                                    <div className="mt-4 pt-4 border-t border-gray-200/50">
                                        <p className="text-sm font-bold text-blue-900">Goal: <span className="font-medium text-gray-700">{phase.goal}</span></p>
                                    </div>
                                )}
                                {phase.note && <p className="text-sm font-medium text-blue-800 mt-4 leading-relaxed">{phase.note}</p>}
                                {phase.goals && (
                                    <div className="mt-4 pt-4 border-t border-gray-200/50">
                                        <p className="text-sm font-bold text-blue-900 mb-2">Goals:</p>
                                        <ul className="space-y-1">
                                            {phase.goals.map((g, i) => (
                                                <li key={i} className="text-sm text-gray-700 flex gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" /> {g}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {phase.subSections && (
                                    <div className="mt-4 space-y-4 pt-4 border-t border-gray-200/50">
                                        {phase.subSections.map((sub, i) => (
                                            <div key={i}>
                                                <p className="text-sm font-bold text-blue-900 mb-2">{sub.title}</p>
                                                <ul className="space-y-1">
                                                    {sub.items.map((item, j) => (
                                                        <li key={j} className="text-sm text-gray-700 flex gap-2">
                                                            <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></div>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {phase.protocol && <p className="text-sm font-bold text-gray-900 mt-4">{phase.protocol}</p>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Support Sections */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Cardiac Support */}
                        <div className="bg-blue-900 p-10 md:p-12 rounded-[3.5rem] text-white relative overflow-hidden shadow-xl shadow-blue-900/20">
                            <Heart className="absolute top-0 right-0 p-8 opacity-10 w-48 h-48" />
                            <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Special Post-Stroke Cardiac Support</h3>
                            <p className="text-blue-100 mb-8 leading-relaxed font-medium">
                                For patients with reduced cardiac function: <br />
                                A structured cardiac-metabolic IV protocol (15–20 sessions every 3 months) may be recommended in selected cases to support:
                            </p>
                            <ul className="space-y-4 mb-10">
                                {["Myocardial energy", "Circulatory stability", "Oxidative stress reduction"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs bg-blue-800 py-3 px-4 rounded-xl inline-block font-bold uppercase tracking-widest border border-blue-700">
                                Administered strictly under physician supervision.
                            </p>
                        </div>

                        {/* Emotional Support */}
                        <div className="bg-slate-50 p-10 md:p-12 rounded-[3.5rem] border border-slate-200">
                            <h3 className="text-2xl font-bold mb-6 text-slate-900 uppercase tracking-tight">Emotional & Cognitive Recovery Support</h3>
                            <p className="text-slate-700 mb-8 leading-relaxed italic">
                                Post-stroke depression and anxiety are common. We address:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Sleep regulation", "Stress reduction", "Mind-body therapy", "Caregiver counselling", "Gradual confidence rebuilding", 'Prevention of Recurrent Stroke'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-800 font-semibold p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                                        <CheckCircle2 className="text-indigo-600 w-4 h-4 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-full">
                            <div className="bg-slate-900 p-10 md:p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
                                <Brain className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5" />
                                <h3 className="text-2xl font-bold mb-8">Prevention of Recurrent Stroke</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                                    {preventions.map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center p-4 bg-white/5 rounded-2xl border border-white/10">
                                            {item.icon}
                                            <span className="font-medium text-gray-200 text-sm">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Expected Outcomes</h2>
                        <p className="text-slate-400 text-lg">Recovery varies depending on stroke severity and timing of intervention.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            "Improved mobility", "Better balance", "Improved speech clarity", "Reduced fatigue",
                            "Improved circulation", "Reduced inflammation", "Improved emotional stability", "Reduced recurrence risk"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <div className="p-2 bg-blue-500/20 rounded-lg">
                                    <Sparkles className="text-blue-400 w-5 h-5" />
                                </div>
                                <span className="font-bold text-slate-200 text-sm leading-tight text-left">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* International Patients CTA */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-indigo-950 p-12 md:p-20 rounded-[4.5rem] text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Personalized for Clients Across the Globe</h2>
                        <p className="text-blue-100 mb-10 relative z-10 max-w-2xl mx-auto italic">
                            Kerala offers a calm healing environment ideal for neurological recovery.
                        </p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
                            {[
                                'Pre-arrival online consultation',
                                '3–6 week structured programs',
                                'Intensive rehabilitation schedules',
                                'IV therapy packages',
                                'AYUSH integrative modules',
                                'Airport coordination assistance',
                                'Post-return tele-follow-up'
                            ].map((item, i) => (
                                <div key={i} className="text-xs font-bold bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 uppercase tracking-widest text-blue-200">{item}</div>
                            ))}
                        </div>
                        <button className="bg-white text-slate-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition transform hover:scale-105 shadow-xl relative z-10">
                            Request Program Details
                        </button>
                    </div>
                </div>
            </section>

            {/* Why Choose Tigris? */}
            <section className="py-24 bg-indigo-50 border-t border-indigo-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-blue-900 mb-16">Why Choose Tigris Valley?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {[
                            "Functional + Neuro + Vascular integrated model",
                            "AYUSH and modern medicine integration",
                            "Acupuncture neuro-support",
                            "Physician-supervised IV therapies",
                            "Ethical, safety-focused protocols",
                            "International patient coordination"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-indigo-100/50">
                                <CheckCircle2 className="text-indigo-600 shrink-0" />
                                <span className="font-bold text-gray-800 leading-tight">✔ {item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-20">
                        <p className="text-2xl md:text-3xl font-bold italic text-blue-950 mb-4">We don’t just rehabilitate muscles.</p>
                        <p className="text-2xl md:text-3xl font-bold italic text-blue-950">We restore vascular, metabolic, neurological, and functional health.</p>
                    </div>
                </div>
            </section>

            {/* Content-Specific CTA Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-950 p-10 md:p-14 shadow-2xl">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <Brain className="absolute top-6 right-10 w-40 h-40 text-blue-300" />
                            <Microscope className="absolute bottom-4 left-8 w-28 h-28 text-blue-300" />
                        </div>
                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
                            {/* Left */}
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                                    <Phone className="w-3.5 h-3.5" /> Begin Your Consultation
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                                    If you or your loved one is seeking:
                                </h2>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Comprehensive neuro-rehabilitation",
                                        "Post-stroke mobility and speech support",
                                        "Prevention of recurrent stroke",
                                        "Integrative brain health strategies",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-blue-200 font-medium text-sm">
                                    Our team will guide you through a structured eligibility and consultation process.
                                </p>
                            </div>
                            {/* Right */}
                            <div className="w-full lg:w-auto flex flex-col gap-4">
                                <button
                                    onClick={() => setCtaOpen(true)}
                                    className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5 w-full lg:w-auto whitespace-nowrap"
                                >
                                    <Phone className="w-5 h-5" />
                                    Request a Case Review
                                </button>
                                <p className="text-blue-300 text-xs font-medium text-center">
                                    Physician-supervised · Personalised protocols
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <Dialog open={ctaOpen} onOpenChange={setCtaOpen}>
                <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl">
                    <DialogHeader className="p-0">
                        <ContactInput />
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default StrokeRecovery;
