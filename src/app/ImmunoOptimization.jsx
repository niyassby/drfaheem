import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
    ShieldCheck,
    Microscope,
    Activity,
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
    Droplets,
    Target,
    StethoscopeIcon,
    Search,
    CheckCircle2,
    Syringe,
    Pizza,
    ArrowRight,
    ChevronRight,
    TrendingDown,
    Timer,
    Wind,
    Waves,
    Mountain,
    TrendingUp,
} from "lucide-react";
import { LuActivity } from "react-icons/lu";
import { TbTelescope, TbInfinity } from "react-icons/tb";

const ImmunoOptimization = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        viewport: { once: true },
    };

    return (
        <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop"
                        alt="Immune Optimization"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/80 to-indigo-900/90"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-5xl"
                    >
                        <span className="inline-block py-1.5 px-4 mb-6 text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-300 uppercase bg-blue-900/40 backdrop-blur-md rounded-full border border-blue-500/30">
                            Advanced Functional & Integrative Medicine Protocol
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                            Immune Optimization & Resilience Program
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-blue-100 mb-6 leading-relaxed font-light">
                            (Personalized | Root-Cause Focused | Preventive & Restorative)
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm md:text-base font-medium">
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><Shield size={18} className="text-blue-400" /> Resilience</span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><Activity size={18} className="text-blue-400" /> Balance</span>
                            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"><Zap size={18} className="text-blue-400" /> Restoration</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 leading-relaxed">
                            At Tigris Valley, immune optimization is not about “boosting” immunity temporarily — it is about restoring immune intelligence, balance, and resilience.
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex-1">
                                <Brain className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                                <p className="text-xl font-semibold text-slate-800">A strong immune system is not hyperactive.</p>
                            </div>
                            <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 flex-1">
                                <LuActivity className="w-12 h-12 text-indigo-600 mb-4 mx-auto" />
                                <p className="text-xl font-semibold text-slate-800">It is regulated, adaptable, and metabolically supported.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl -z-10"></div>
                <div className="container mx-auto px-6">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">This program is designed for:</h2>
                        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { text: "Recurrent infections", icon: <TrendingDown /> },
                            { text: "Post-viral fatigue", icon: <Timer /> },
                            { text: "Autoimmune risk individuals", icon: <ShieldCheck /> },
                            { text: "High-stress professionals", icon: <Zap /> },
                            { text: "Cancer prevention & recovery support", icon: <Sparkles /> },
                            { text: "Longevity-focused individuals", icon: <TbInfinity /> },
                            { text: "Patients with metabolic syndrome or chronic inflammation", icon: <Activity /> }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeIn}
                                className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                            >
                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="text-lg font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1. Functional Immune Root-Cause Assessment */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div {...fadeIn} className="mb-16">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                                <span className="text-blue-600 font-bold text-lg uppercase tracking-wider">Functional Immune Root-Cause Assessment</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Comprehensive Testing</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <Microscope className="text-blue-500" /> Core Laboratory Panel
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "CBC with differential",
                                        "hs-CRP",
                                        "ESR",
                                        "Fasting insulin & HbA1c",
                                        "Vitamin D (25-OH)",
                                        "Ferritin & iron profile",
                                        "B12 & Folate",
                                        "Zinc & Copper",
                                        "Thyroid panel"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-700 font-medium p-3 bg-slate-50 rounded-xl">
                                            <CircleCheck className="w-5 h-5 text-blue-500 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                    <Dna className="text-indigo-500" /> Advanced Immune & Inflammation Markers (Optional)
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Cytokine profile",
                                        "Immunoglobulins (IgG, IgA, IgM)",
                                        "ANA (if autoimmune risk)",
                                        "Gut microbiome testing",
                                        "Food sensitivity testing",
                                        "Oxidative stress markers"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-700 font-medium p-3 bg-indigo-50/50 rounded-xl">
                                            <Sparkles className="w-5 h-5 text-indigo-500 shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <motion.div {...fadeIn} className="mt-12 bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-white">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Brain className="text-blue-400" /> Lifestyle & Immune Stress Audit
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                                {[
                                    { text: "Sleep quality", icon: <Clock /> },
                                    { text: "Circadian rhythm assessment", icon: <Timer /> },
                                    { text: "Stress burden", icon: <Zap /> },
                                    { text: "Toxin exposure", icon: <Shield /> },
                                    { text: "Gut health review", icon: <Activity /> },
                                    { text: "Nutritional gap analysis", icon: <Search /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-3">
                                        <div className="p-4 bg-white/10 rounded-2xl text-blue-400 mb-2">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm font-medium text-slate-300">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Gut–Immune Axis Restoration */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                                <span className="text-emerald-600 font-bold text-lg uppercase tracking-wider">Gut–Immune Axis Restoration</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                                70% of immune regulation begins in the gut.
                            </h2>
                            <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex items-center gap-6 mb-8">
                                <Leaf className="w-12 h-12 text-emerald-600 shrink-0" />
                                <p className="text-lg text-emerald-900 font-medium">Our therapeutic plan focuses on restoring the delicate balance of the gut microbiome to optimize immune function.</p>
                            </div>
                        </motion.div>
                        <motion.div {...fadeIn} className="grid grid-cols-1 gap-6">
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Pizza className="text-orange-500" /> Therapeutic Plan:
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Anti-inflammatory elimination diet (4–6 weeks)",
                                        "Remove ultra-processed foods, refined sugar, seed oils",
                                        "Increase phytonutrient-rich vegetables (8–10 servings/day)",
                                        "Adequate protein (1–1.2 g/kg)",
                                        "Fermented foods (if tolerated)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <CircleCheck className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <Target className="text-blue-500" /> Targeted Supplementation:
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {["Probiotic (strain-specific)", "Prebiotic fibers", "L-glutamine (gut repair)", "Zinc carnosine", "Colostrum (if immune weakness)"].map((item, i) => (
                                        <span key={i} className="px-4 py-2 bg-white rounded-full text-slate-700 font-medium border border-slate-200 shadow-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. IV Nutritional Immune Therapy */}
            <section className="py-24 bg-blue-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                            <span className="text-blue-600 font-bold text-lg uppercase tracking-wider">IV Nutritional Immune Therapy (Optional / Personalized)</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Rapid Micronutrient Delivery</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-blue-100">
                            <h4 className="text-2xl font-bold text-slate-900 mb-8">For patients with:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Chronic infections",
                                    "Fatigue",
                                    "Post-viral states",
                                    "High oxidative stress",
                                    "Cancer recovery support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl">
                                        <Droplets className="w-6 h-6 text-blue-500" />
                                        <span className="font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-white">
                            <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <Syringe className="text-blue-400" /> IV Protocol Options:
                            </h4>
                            <div className="grid grid-cols-2 gap-4 text-slate-300">
                                {[
                                    "High-dose Vitamin C",
                                    "Zinc infusion",
                                    "Glutathione",
                                    "B-complex infusion",
                                    "Magnesium",
                                    "Selenium (selected cases)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/10">
                                <p className="flex items-center gap-3 font-bold text-blue-300">
                                    <Timer className="w-6 h-6" /> Frequency: Weekly for 4–6 weeks, then maintenance as required.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. & 5. Micronutrients & Stress */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 4. Micronutrient Immune Optimization */}
                        <motion.div {...fadeIn} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                                <span className="text-indigo-600 font-bold text-lg uppercase tracking-wider">Micronutrient Immune Optimization</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8">Core Immune Nutrients:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
                                {[
                                    { name: "Vitamin D3", detail: "target 50–70 ng/mL" },
                                    { name: "Zinc", detail: "15–30 mg/day" },
                                    { name: "Vitamin C", detail: "1–3 g/day" },
                                    { name: "Quercetin", detail: "" },
                                    { name: "Omega-3", detail: "fatty acids" },
                                    { name: "Curcumin", detail: "" },
                                    { name: "N-acetyl cysteine", detail: "(NAC)" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                        <span className="block font-bold text-slate-900">{item.name}</span>
                                        {item.detail && <span className="text-sm text-gray-500">{item.detail}</span>}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 5. Stress & Neuro-Immune Regulation */}
                        <motion.div {...fadeIn} className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                                <span className="text-blue-400 font-bold text-lg uppercase tracking-wider">Stress & Neuro-Immune Regulation</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Chronic cortisol dysregulation suppresses immune defense.</h3>
                            <div className="space-y-6 flex-grow">
                                <p className="text-slate-300 italic">Interventions:</p>
                                <div className="grid grid-cols-1 gap-4">
                                    {[
                                        { text: "Adaptogens (Ashwagandha, Rhodiola)", icon: <Leaf /> },
                                        { text: "Breathwork protocols", icon: <Wind /> },
                                        { text: "10-minute parasympathetic reset daily", icon: <Activity /> },
                                        { text: "HRV-based stress tracking", icon: <Heart /> },
                                        { text: "Sleep optimization plan", icon: <MoonIcon /> }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                                            <div className="text-blue-400">{item.icon}</div>
                                            <span className="font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. & 7. AYUSH & Acupuncture */}
            <section className="py-24 bg-emerald-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 6. AYUSH-Based Immune Support */}
                        <motion.div {...fadeIn} className="bg-white p-10 rounded-[3rem] shadow-xl border border-emerald-100">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                                <span className="text-emerald-600 font-bold text-lg uppercase tracking-wider">AYUSH-Based Immune Rasayana Support</span>
                            </div>
                            <p className="text-slate-600 mb-8">Integrative traditional therapies may be chosen based on patient preference and time availability.</p>

                            <div className="space-y-8">
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        Ayurvedic Rasayana Options:
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {["Guduchi", "Amalaki", "Ashwagandha", "Chyawanprash (selected patients)"].map((item, i) => (
                                            <span key={i} className="px-5 py-3 bg-emerald-50 text-emerald-800 rounded-full font-bold border border-emerald-100">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-800 mb-6">Panchakarma (Optional):</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Detoxification protocols
                                        </li>
                                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> Immune rejuvenation therapy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* 7. Acupuncture */}
                        <motion.div {...fadeIn} className="bg-slate-900 p-10 rounded-[3rem] text-white">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
                                <span className="text-blue-400 font-bold text-lg uppercase tracking-wider">Acupuncture & Meridian Immune Balancing (Optional)</span>
                            </div>
                            <div className="space-y-6 mb-10">
                                {[
                                    "Lung meridian strengthening",
                                    "Spleen meridian tonification",
                                    "Stress-regulation points",
                                    "Post-viral recovery support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                                        <Sparkles className="text-blue-400 shrink-0" />
                                        <span className="text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 bg-blue-600/20 rounded-2xl border border-blue-500/30">
                                <p className="font-bold text-blue-300">
                                    <Activity className="inline-block mr-2" /> Frequency: 1–2 sessions/week (4–8 sessions)
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 8. & 9. Detox & Movement */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                        {/* 8. Detox */}
                        <motion.div {...fadeIn} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">8</div>
                                    <span className="text-blue-600 font-bold text-lg uppercase tracking-wider">Detox & Environmental Load Reduction</span>
                                </div>
                                <div className="grid grid-cols-1 gap-4 mt-8">
                                    {[
                                        { text: "Heavy metal screening (if indicated)", icon: <Search /> },
                                        { text: "Air quality & mold assessment", icon: <Wind /> },
                                        { text: "Clean water guidance", icon: <Waves /> },
                                        { text: "Personal care product audit", icon: <ShieldCheck /> },
                                        { text: "Anti-inflammatory home environment strategy", icon: <Mountain /> }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200">
                                            <div className="text-blue-500">{item.icon}</div>
                                            <span className="font-bold text-slate-800">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* 9. Movement */}
                        <motion.div {...fadeIn} className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center font-bold">9</div>
                                    <span className="text-blue-400 font-bold text-lg uppercase tracking-wider">Movement & Immune Fitness</span>
                                </div>
                                <div className="space-y-8 mt-8">
                                    <div className="flex items-center gap-6 bg-white/5 p-6 rounded-[2rem] border border-white/10">
                                        <Activity className="w-12 h-12 text-blue-400" />
                                        <div>
                                            <h4 className="font-bold text-xl">150 minutes</h4>
                                            <p className="text-slate-400">moderate exercise/week</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {[
                                            "Strength training (2–3x/week)",
                                            "Lymphatic activation drills",
                                            "Sunlight exposure (morning light therapy)"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                                                <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 10. Personalized Modifiable Protocol */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold">10</div>
                            <span className="text-blue-200 font-bold text-lg uppercase tracking-wider">Personalized Modifiable Protocol</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 italic">This is not a one-size-fits-all program.</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div {...fadeIn} className="space-y-8">
                            <h4 className="text-2xl font-bold mb-8">Patients with time constraints may choose:</h4>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "IV Nutritional Therapy Track",
                                    "AYUSH-Based Immune Rejuvenation Track",
                                    "Acupuncture-Based Immune Regulation Track",
                                    "Comprehensive Integrated Track"
                                ].map((track, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/10 p-6 rounded-[2rem] border border-white/20 backdrop-blur-md">
                                        <div className="w-12 h-12 bg-white text-blue-600 rounded-2xl flex items-center justify-center font-bold text-xl shrink-0">
                                            {i + 1}
                                        </div>
                                        <span className="text-xl font-bold uppercase tracking-wide"> {track}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-slate-900/40 p-10 rounded-[3rem] border border-white/20 backdrop-blur-md flex flex-col justify-center">
                            <h4 className="text-2xl font-bold mb-8">Each protocol is customized based on:</h4>
                            <ul className="space-y-6">
                                {[
                                    "Clinical status",
                                    "Lab markers",
                                    "Lifestyle availability",
                                    "Travel schedule",
                                    "Budget considerations"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-xl font-medium">
                                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Who Benefits Most */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div {...fadeIn} className="lg:w-1/2">
                            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 flex items-center gap-4">
                                <Leaf className="text-emerald-500" /> Who Benefits Most?
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "Healthcare professionals",
                                    "Frequent travelers",
                                    "Autoimmune-prone individuals",
                                    "Cancer survivors",
                                    "Individuals over 35 seeking longevity optimization",
                                    "Patients with metabolic syndrome"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                        <TrendingUp className="text-emerald-500" />
                                        <span className="text-lg font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div {...fadeIn} className="lg:w-1/2 w-full">
                            <div className="bg-slate-900 p-12 lg:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl lg:text-4xl font-extrabold mb-12 flex items-center gap-4">
                                        <Timer className="text-blue-400" /> Program Duration
                                    </h3>
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-8 border-b border-white/10 pb-6">
                                            <span className="text-5xl font-black text-blue-400">01</span>
                                            <div>
                                                <h4 className="text-xl font-bold uppercase tracking-widest">Intensive Phase</h4>
                                                <p className="text-slate-400 font-bold">6–8 weeks</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8 border-b border-white/10 pb-6">
                                            <span className="text-5xl font-black text-blue-400">02</span>
                                            <div>
                                                <h4 className="text-xl font-bold uppercase tracking-widest">Optimization Phase</h4>
                                                <p className="text-slate-400 font-bold">3 months</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <span className="text-5xl font-black text-blue-400">03</span>
                                            <div>
                                                <h4 className="text-xl font-bold uppercase tracking-widest">Maintenance</h4>
                                                <p className="text-slate-400 font-bold">Quarterly follow-up</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Expected Outcomes */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 flex items-center justify-center gap-4">
                            <Target className="text-red-500" /> Expected Outcomes
                        </h2>
                        <div className="w-20 h-1.5 bg-red-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Reduced infection frequency",
                            "Improved energy",
                            "Balanced inflammatory markers",
                            "Improved gut function",
                            "Better stress resilience",
                            "Enhanced cellular repair capacity"
                        ].map((outcome, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                whileHover={{ y: -5 }}
                                className="flex items-center gap-4 bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100"
                            >
                                <div className="p-3 bg-red-50 text-red-500 rounded-2xl">
                                    <Sparkles size={24} />
                                </div>
                                <span className="font-extrabold text-slate-800 leading-tight">{outcome}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

const MoonIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-moon"
    >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
);

export default ImmunoOptimization;
