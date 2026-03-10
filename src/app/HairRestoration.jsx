import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
    CheckCircle2,
    Activity,
    ShieldCheck,
    Microscope,
    Droplets,
    Zap,
    Leaf,
    Clock,
    Dna,
    Brain,
    Sparkles,
    Stethoscope,
    Heart,
    Thermometer,
    Shield,
    CircleCheck,
    Search,
    ZapOff,
    Crosshair,
} from "lucide-react";
import { LuActivity } from "react-icons/lu";
import { TbTelescope, TbInfinity } from "react-icons/tb";

const HairRestoration = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    return (
        <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1522337094846-8a818192de1f?q=80&w=2070&auto=format&fit=crop"
                        alt="Advanced Hair Restoration"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-emerald-900/90"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-5xl"
                    >
                        <span className="inline-block py-1.5 px-4 mb-6 text-xs sm:text-sm font-bold tracking-[0.2em] text-emerald-300 uppercase bg-emerald-900/40 backdrop-blur-md rounded-full border border-emerald-500/30">
                            Advanced Functional & Integrative Hair Restoration
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                            Restore Follicular Intelligence. <br />
                            Reactivate Growth. <br />
                            Reverse Root Causes.
                        </h1>
                        <div className="max-w-3xl mx-auto text-lg md:text-2xl text-emerald-50 mb-10 leading-relaxed font-light space-y-4">
                            <p>Hair loss is not merely cosmetic.</p>
                            <p>It is often a metabolic, inflammatory, hormonal, mitochondrial, or micronutrient signaling disorder.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                            At Tigris Valley, we approach hair restoration through:
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { text: "Functional Root-Cause Diagnostics", icon: <Search /> },
                                { text: "IV Nutritional Regeneration", icon: <Droplets /> },
                                { text: "PRP (Platelet-Rich Plasma)", icon: <Sparkles /> },
                                { text: "Exosome Growth Factor Therapy", icon: <Dna /> },
                                { text: "Hormonal & Mitochondrial Optimization", icon: <Zap /> },
                                { text: "Integrative AYUSH & Acupuncture Support", icon: <Leaf /> }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-all">
                                    <div className="text-emerald-600">{item.icon}</div>
                                    <span className="font-bold text-slate-800 text-sm md:text-base">{item.text}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-xl text-gray-700 mt-12 font-medium italic">
                            This is a personalized protocol, designed based on hair loss type, stage, time availability, and patient goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Step 1: Diagnostics */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <span className="text-emerald-600 font-bold text-lg mb-4 block uppercase tracking-widest">Step 1</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Functional Root-Cause Evaluation</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                        <motion.div {...fadeIn} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 h-full">
                            <h3 className="text-2xl font-bold text-emerald-900 mb-8 flex items-center gap-3">
                                <Stethoscope className="w-8 h-8" /> Comprehensive Assessment
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Detailed Hair & Hormonal History",
                                    "Gut–Thyroid–Adrenal Axis Evaluation",
                                    "Oxidative Stress & Mitochondrial Function"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl font-medium text-slate-800">
                                        <CircleCheck className="text-emerald-500 w-6 h-6" /> ✔ {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-12 border-t border-slate-100">
                                <h4 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-6">Hair loss types addressed:</h4>
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        "Androgenetic Alopecia", "Telogen Effluvium", "Stress-Induced Hair Loss",
                                        "Thyroid-Related Hair Fall", "Post-Illness Hair Loss", "Early Autoimmune Patterns"
                                    ].map((type, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-bold border border-slate-200">{type}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-slate-900 p-10 rounded-[3rem] shadow-xl text-white h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Microscope className="w-32 h-32" />
                            </div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Microscope className="w-8 h-8 text-emerald-400" /> Advanced Lab Panel
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "CBC, Ferritin, Iron Studies",
                                    "Vitamin D3, B12, Folate",
                                    "Zinc, Selenium",
                                    "Thyroid Profile (TSH, FT3, FT4, Anti-TPO)",
                                    "Insulin Resistance Markers",
                                    "DHEA-S, Testosterone, SHBG",
                                    "Inflammatory Markers (hs-CRP)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                                        <span className="text-slate-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Regenerative Pillars */}
            <section className="py-24 bg-white text-center">
                <motion.div {...fadeIn}>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Core Regenerative Pillars</h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                </motion.div>
            </section>

            {/* Pillar 1: IV Nutritional */}
            <section className="py-24 bg-emerald-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div {...fadeIn} className="lg:w-1/2">
                            <span className="text-emerald-600 font-bold text-lg mb-4 block">1️⃣ IV Nutritional Hair Regeneration Therapy</span>
                            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                                Designed to rapidly replenish intracellular deficiencies and improve follicular microcirculation.
                            </h3>

                            <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-xl mb-8">
                                <h4 className="text-xl font-bold text-emerald-900 mb-6">IV Formulation May Include:</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Biotin", "Zinc", "Vitamin B Complex", "Vitamin C", "Glutathione", "Amino Acids (Cysteine, Methionine)", "Trace Minerals", "NAD+ (for mitochondrial activation)"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 font-medium text-slate-700">
                                            <CircleCheck className="w-5 h-5 text-emerald-500 shrink-0" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="lg:w-1/2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    { title: "Deficiency Reset", desc: "Rapidly replenish essential hair nutrients" },
                                    { title: "Scalp Vascularity", desc: "Improve oxygen flow to dormant follicles" }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 bg-slate-900 rounded-3xl text-white shadow-xl">
                                        <h4 className="text-xl font-bold text-emerald-400 mb-2">{item.title}</h4>
                                        <p className="text-slate-300">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-emerald-600 p-10 rounded-[3rem] text-white shadow-2xl">
                                <h4 className="text-2xl font-bold mb-6">Benefits:</h4>
                                <ul className="space-y-4 text-lg">
                                    {[
                                        "Improves follicular oxygenation", "Reduces oxidative stress",
                                        "Enhances keratin production", "Supports scalp vascularity",
                                        "Accelerates PRP response"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CircleCheck className="w-6 h-6 text-emerald-200" /> ✔ {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-8 pt-8 border-t border-emerald-500 font-bold text-center tracking-widest uppercase">
                                    Protocol: 4–8 sessions depending on deficiency status.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pillar 2 & 3: PRP & Exosome */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* PRP */}
                        <motion.div {...fadeIn} className="bg-slate-50 p-10 lg:p-16 rounded-[4rem] border border-slate-100 flex flex-col group hover:bg-slate-900 hover:text-white transition-all duration-700">
                            <span className="text-emerald-600 font-bold text-xl mb-6 block group-hover:text-emerald-400">2️⃣ PRP – Platelet Rich Plasma Therapy</span>
                            <h3 className="text-3xl font-bold mb-6">PRP uses the patient's own growth factors to stimulate dormant follicles.</h3>
                            <p className="text-lg text-slate-600 mb-8 group-hover:text-slate-300 italic">Ideal for early to moderate androgenetic hair loss.</p>

                            <div className="mb-10 p-8 bg-white rounded-3xl group-hover:bg-white/10 group-hover:text-white transition-colors">
                                <h4 className="text-xl font-bold mb-6 flex items-center gap-2 group-hover:text-emerald-400"><Activity /> Mechanism</h4>
                                <ul className="space-y-4">
                                    {["Releases PDGF, VEGF, TGF-beta", "Improves scalp microvascular circulation", "Activates dermal papilla stem cells", "Reduces miniaturization"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 font-medium">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-8 border-t border-slate-200 flex justify-between items-center group-hover:border-white/10">
                                <div className="text-center px-4">
                                    <span className="block text-2xl font-extrabold group-hover:text-emerald-400">3–6</span>
                                    <span className="text-sm font-bold opacity-60">Sessions</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200 group-hover:bg-white/10"></div>
                                <div className="text-center px-4">
                                    <span className="block text-2xl font-extrabold group-hover:text-emerald-400">Monthly</span>
                                    <span className="text-sm font-bold opacity-60">Intervals</span>
                                </div>
                                <div className="w-px h-12 bg-slate-200 group-hover:bg-white/10"></div>
                                <div className="text-center px-4">
                                    <span className="block text-lg font-bold group-hover:text-emerald-400 leading-tight">6–12 mo</span>
                                    <span className="text-sm font-bold opacity-60">Maintenance</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Exosome */}
                        <motion.div {...fadeIn} className="bg-emerald-950 p-10 lg:p-16 rounded-[4rem] text-white flex flex-col group relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <Dna className="w-48 h-48" />
                            </div>

                            <span className="text-emerald-400 font-bold text-xl mb-6 block">3️⃣ Exosome Growth Factor Therapy</span>
                            <h3 className="text-3xl font-bold mb-6">Advanced regenerative biotechnology using stem-cell-derived signaling vesicles.</h3>
                            <p className="text-lg text-emerald-200/60 mb-8 italic">Ideal for resistant or advanced cases.</p>

                            <div className="mb-10 space-y-8 relative z-10">
                                <div>
                                    <h4 className="text-xl font-bold mb-4 text-emerald-400">Why Exosomes?</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {["Higher growth factor concentration than PRP", "Strong anti-inflammatory action", "Reactivates follicular stem cells", "Supports scalp rejuvenation"].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2 text-emerald-50 font-medium">
                                                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 bg-white/5 backdrop-blur rounded-3xl border border-white/10">
                                    <h4 className="text-xl font-bold mb-6 text-emerald-400">Ideal For:</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {["Severe thinning", "PRP non-responders", "Autoimmune-prone scalp", "Post-COVID hair loss", "Rapid restoration protocols"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 font-bold group-hover:translate-x-2 transition-transform">
                                                ✔ {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto text-center p-6 bg-emerald-500 rounded-2xl font-extrabold tracking-widest text-emerald-950">
                                Usually 1–3 sessions depending on severity.
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pillar 4: Hormonal */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div {...fadeIn} className="lg:w-1/2 relative">
                            <div className="absolute -inset-8 bg-emerald-400/20 rounded-full blur-[100px] animate-pulse"></div>
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
                                alt="Hormonal Balance"
                                className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl"
                            />
                        </motion.div>

                        <motion.div {...fadeIn} className="lg:w-1/2">
                            <span className="text-indigo-600 font-bold text-lg mb-4 block">4️⃣ Hormonal & Metabolic Optimization</span>
                            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Hair follicles are hormone-sensitive organs.</h3>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed">We optimize the physiological environment to sustain long-term hair survival.</p>

                            <div className="grid grid-cols-2 gap-6 mb-12">
                                {["Insulin resistance", "Thyroid function", "Androgen balance", "Cortisol regulation", "Mitochondrial energy production"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm font-bold text-slate-800">
                                        <Zap className="text-amber-500 shrink-0" /> {item}
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100">
                                <h4 className="text-xl font-bold text-indigo-900 mb-6">If required, we integrate:</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["Adaptogenic herbal protocols", "Ayurvedic Rasayana support", "Functional nutraceuticals", "Gut restoration protocol"].map((item, i) => (
                                        <span key={i} className="px-5 py-3 bg-white text-indigo-700 rounded-xl font-bold border border-indigo-200 shadow-sm">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pillar 5: Integrative */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-emerald-600 font-bold text-lg mb-4 block">5️⃣ Integrative Support (Optional Personalized Add-On)</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">For patients preferring traditional modalities or time-modified protocols.</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div {...fadeIn} className="bg-emerald-50 p-10 lg:p-16 rounded-[4rem] border border-emerald-100 h-full">
                            <div className="w-20 h-20 bg-emerald-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/20">
                                <Leaf className="text-white w-10 h-10" />
                            </div>
                            <h4 className="text-3xl font-extrabold text-emerald-900 mb-8">AYUSH-Based Therapies</h4>
                            <ul className="space-y-6">
                                {[
                                    { title: "Nasya", desc: "Medicated nasal therapy for hormonal axis" },
                                    { title: "Herbal Scalp Oils", desc: "Traditional follicle strengthening formulations" },
                                    { title: "Rasayana Herbs", desc: "Internal rejuvenation and nutrient support" }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-3 shrink-0"></div>
                                        <div>
                                            <span className="block font-bold text-xl text-emerald-800">{item.title}</span>
                                            <span className="text-slate-600">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-slate-900 p-10 lg:p-16 rounded-[4rem] border border-slate-800 h-full text-white">
                            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20">
                                <Zap className="text-white w-10 h-10" />
                            </div>
                            <h4 className="text-3xl font-extrabold mb-8">Acupuncture & Scalp Meridian Activation</h4>
                            <ul className="space-y-6">
                                {[
                                    { icon: <CircleCheck />, text: "Improves microcirculation" },
                                    { icon: <CircleCheck />, text: "Reduces stress-induced hair fall" },
                                    { icon: <CircleCheck />, text: "Enhances PRP response" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl font-medium text-slate-200 bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <div className="text-blue-400">{item.icon}</div> {item.text}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Personalization Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Personalization & Flexibility</h2>
                        <p className="text-xl text-slate-600 italic">This is a fully personalized program based on your unique needs.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeIn} className="bg-white p-10 lg:p-16 rounded-[4rem] shadow-xl">
                            <h4 className="text-2xl font-bold text-slate-900 mb-8">Patients with time constraints may choose:</h4>
                            <div className="space-y-4">
                                {[
                                    "Only IV Nutritional Therapy", "PRP Protocol Only",
                                    "Exosome Advanced Regenerative Package", "Integrative AYUSH & Acupuncture Only",
                                    "Combined Intensive Protocol"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-800">
                                        <CircleCheck className="text-emerald-500" /> {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-emerald-600 p-10 lg:p-16 rounded-[4rem] text-white shadow-2xl">
                            <h4 className="text-2xl font-bold mb-8">The treatment pathway is customized based on:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: "Severity", icon: <Search /> },
                                    { label: "Budget", icon: <CircleCheck /> },
                                    { label: "Time availability", icon: <Clock /> },
                                    { label: "Biological age", icon: <Dna /> },
                                    { label: "Metabolic profile", icon: <LuActivity /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2 p-6 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/10">
                                        <div className="text-emerald-200">{item.icon}</div>
                                        <span className="text-xl font-bold">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expected Outcomes */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="bg-slate-900 p-12 lg:p-24 rounded-[5rem] text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[150px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl lg:text-5xl font-extrabold mb-16 text-center">Expected Outcomes <br /><span className="text-lg font-medium text-emerald-400 opacity-80">(With proper compliance)</span></h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[
                                    { text: "Reduced hair fall in 4–6 weeks", time: "Month 1" },
                                    { text: "Visible thickness improvement in 8–12 weeks", time: "Month 2-3" },
                                    { text: "Improved scalp quality", time: "Ongoing" },
                                    { text: "Slowed progression of pattern baldness", time: "Long-term" },
                                    { text: "Increased hair density over 4–6 months", time: "Result Phase" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center">
                                        <span className="text-emerald-400 font-bold mb-4 uppercase text-xs tracking-[0.3em]">{item.time}</span>
                                        <span className="text-xl font-medium leading-relaxed">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Ideal Candidates */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ideal Candidates</h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Men & women with early thinning", "Postpartum hair loss", "Thyroid-related hair fall",
                            "Stress-related shedding", "Professionals seeking non-surgical restoration", "Patients wanting natural regenerative therapy"
                        ].map((candidate, i) => (
                            <div key={i} className="flex items-center gap-4 group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm font-bold text-slate-800 text-center justify-center">
                                <span className="text-emerald-600 p-3 rounded-full bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"><CheckCircle2 /></span> {candidate}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Functional Hair Restoration? */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div {...fadeIn} className="text-center space-y-12">
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900">Why Functional Hair Restoration?</h2>

                        <div className="space-y-8">
                            <p className="text-2xl font-light text-slate-600 italic">Because hair is not just cosmetic. It reflects your:</p>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                                {[
                                    { label: "Mitochondrial health", icon: <Zap /> },
                                    { label: "Hormonal intelligence", icon: <Dna /> },
                                    { label: "Nutrient absorption", icon: <Droplets /> },
                                    { label: "Inflammatory burden", icon: <Thermometer /> },
                                    { label: "Stress resilience", icon: <Brain /> },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-4">{item.icon}</div>
                                        <span className="font-bold text-slate-800">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-10 bg-emerald-950 rounded-[3rem] text-white shadow-2xl relative group overflow-hidden">
                                <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 opacity-20"></div>
                                <p className="text-2xl lg:text-4xl font-extrabold relative z-10">We treat the follicle — but we also treat the physiology behind it.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HairRestoration;
