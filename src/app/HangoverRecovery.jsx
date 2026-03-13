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
    Search,
    CheckCircle2,
    Syringe,
    Pizza,
    ArrowRight,
    TrendingDown,
    Timer,
    Wind,
    Waves,
    Mountain,
    FlaskConical,
    GlassWater,
    AlertCircle,
    Coffee,
    Check,
} from "lucide-react";
import { LuActivity } from "react-icons/lu";

const HangoverRecovery = () => {
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
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
                        alt="Hangover Recovery"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-900/80 to-blue-900/90"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 mt-20 text-center flex flex-col items-center justify-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-5xl"
                    >
                        <span className="inline-block py-1.5 px-4 mb-6 text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-300 uppercase bg-blue-900/40 backdrop-blur-md rounded-full border border-blue-500/30">
                            Rapid Rehydration. Detox Support. Neurological Reset.
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight shadow-sm">
                            IV Nutritional Therapy Protocol for Hangover Recovery
                        </h1>
                        <p className="max-w-4xl mx-auto text-lg md:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
                            At Tigris Valley, hangover recovery is approached physiologically — correcting dehydration, acetaldehyde toxicity, electrolyte imbalance, oxidative stress, and neuroinflammation.
                        </p>
                        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 inline-block">
                            <p className="text-white font-bold italic tracking-wide">
                                This is a clinically structured IV protocol, not a cosmetic “party drip.”
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Understanding Physiology */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                        <motion.div {...fadeIn}>
                            <div className="flex items-center gap-3 mb-6">
                                <FlaskConical className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Understanding the Hangover Physiology</h2>
                            </div>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Alcohol metabolism leads to various physiological disruptions that require targeted clinical intervention:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Dehydration",
                                    "Electrolyte depletion",
                                    "Acetaldehyde accumulation",
                                    "Glutathione depletion",
                                    "Hypoglycemia",
                                    "Gastric irritation",
                                    "Neuroinflammation",
                                    "B-vitamin depletion"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm hover:translate-x-1 transition-transform">
                                        <AlertCircle className="w-5 h-5 text-red-500" />
                                        <span className="font-bold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-10 text-xl font-semibold text-blue-700 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                The IV protocol targets each of these mechanisms.
                            </p>
                        </motion.div>
                        <motion.div {...fadeIn} className="relative">
                            <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-2xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2070&auto=format&fit=crop"
                                alt="Cellular Science"
                                className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] shadow-2xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Protocol */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600 text-white rounded-full font-bold uppercase tracking-[0.2em] text-sm mb-6">
                            <Droplets className="w-4 h-4" /> Core Hangover Recovery IV
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">(Standard Protocol)</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Hydration */}
                        <motion.div {...fadeIn} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col hover:border-blue-200 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center font-bold text-blue-600 text-xl shrink-0">1</div>
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight">Hydration Base</h3>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-blue-700">
                                    500–1000 ml Normal Saline or Ringer’s Lactate
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        "Corrects dehydration",
                                        "Restores circulatory volume",
                                        "Improves headache and fatigue"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-2 text-slate-700 font-medium">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* 2. B-Complex */}
                        <motion.div {...fadeIn} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col hover:border-indigo-200 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center font-bold text-indigo-600 text-xl shrink-0">2</div>
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight">B-Complex Restoration</h3>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Supports:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Hepatic alcohol metabolism",
                                        "Nervous system recovery",
                                        "Energy production"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100/50 text-indigo-900 font-bold">
                                            <Zap className="w-5 h-5 text-indigo-500" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* 3. Vitamin C */}
                        <motion.div {...fadeIn} className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white flex flex-col transform lg:scale-105 z-10 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                                <Sparkles className="w-24 h-24" />
                            </div>
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center font-bold text-white text-xl shrink-0">3</div>
                                <h3 className="text-2xl font-bold leading-tight">Vitamin C (Antioxidant Support)</h3>
                            </div>
                            <div className="space-y-4 flex-grow relative z-10">
                                <div className="p-4 bg-white/10 rounded-2xl border border-white/20 font-bold text-blue-300">
                                    2–5 grams IV
                                </div>
                                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">Reduces:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Oxidative stress",
                                        "Inflammatory response",
                                        "Acetaldehyde toxicity"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-2 font-medium">
                                            <Sparkles className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* 4. Selected Minerals */}
                        <motion.div {...fadeIn} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col hover:border-amber-200 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center font-bold text-amber-600 text-xl shrink-0">4</div>
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight">Selected Minerals</h3>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Improves:</p>
                                <div className="grid grid-cols-1 gap-2">
                                    {[
                                        "Headache",
                                        "Muscle cramps",
                                        "Anxiety",
                                        "Sleep disturbance"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-100/50 text-amber-900 font-bold">
                                            <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* 5. Master Anti-oxidant IV */}
                        <motion.div {...fadeIn} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col hover:border-emerald-200 transition-colors lg:col-span-1 md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center font-bold text-emerald-600 text-xl shrink-0">5</div>
                                <h3 className="text-2xl font-bold text-slate-900 leading-tight">Master Anti-oxidant IV</h3>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Purpose:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Replenish depleted anti-oxidant",
                                        "Enhance liver detox pathways",
                                        "Reduce oxidative stress"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-3 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100/50 text-emerald-900 font-bold">
                                            <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Optional Add-Ons */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full font-bold text-sm mb-4 border border-indigo-100">
                                <FlaskConical size={16} /> Tailored Augmentation
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 italic">Optional Add-Ons</h2>
                            <p className="text-xl text-gray-500 mt-4">(Based on Symptom Profile)</p>
                        </div>
                        <div className="w-20 h-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-200 rotate-3">
                            <Stethoscope size={40} />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "For Severe Nausea", icon: <AlertCircle />, content: "Anti-emetic (if medically indicated)", color: "red" },
                            { title: "For Gastric Irritation", icon: <Activity />, content: "IV proton-pump inhibitor or H2 blocker (if clinically required)", color: "blue" },
                            { title: "For Hypoglycemia", icon: <Waves />, content: "Dextrose-containing solution (if indicated after glucose check)", color: "amber" },
                            { title: "For Severe Fatigue / Brain Fog", icon: <Brain />, content: "L-C 500–1000 mg\nAla 300 mg", color: "purple" }
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeIn} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col">
                                <div className={`w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-${item.color}-100 text-${item.color}-600`}>
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                                <p className="text-slate-600 font-medium whitespace-pre-line flex-grow">{item.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Executive Express Recovery */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div {...fadeIn} className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/20 backdrop-blur-md rounded-full font-bold text-sm mb-8 uppercase tracking-widest border border-white/30">
                                <Timer size={18} /> Time-Sensitive Solution
                            </div>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 italic leading-tight">Executive Express Recovery</h2>
                            <div className="p-6 bg-slate-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/20 mb-8 inline-block shadow-2xl">
                                <p className="text-2xl font-bold flex items-center gap-3">
                                    <Clock className="text-blue-300" /> 45–60 min Protocol
                                </p>
                            </div>
                            <p className="text-xl text-blue-100 mb-10 leading-relaxed font-light">
                                Specifically designed for professionals, corporate clients, event attendees, and frequent travelers suffering from travel fatigue or acute hangover symptoms.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["Corporate clients", "Event attendees", "Travel fatigue"].map((tag, i) => (
                                    <span key={i} className="px-6 py-2 bg-white/10 rounded-full font-bold text-sm border border-white/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div {...fadeIn} className="lg:w-1/2 w-full">
                            <div className="bg-white p-10 lg:p-12 rounded-[4rem] text-slate-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 group hover:translate-y-[-10px] transition-transform duration-500">
                                <h4 className="text-2xl font-black mb-8 border-l-4 border-blue-600 pl-4 uppercase tracking-tighter">Includes:</h4>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center shrink-0">
                                            <Droplets className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <p className="text-2xl font-extrabold text-slate-800 leading-tight">500 ml hydration + Vitamin B & C + Minerals + amino-acid</p>
                                    </div>
                                    <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white flex items-center gap-6 shadow-xl shadow-blue-200">
                                        <LuActivity className="w-12 h-12 shrink-0 animate-pulse" />
                                        <div>
                                            <h5 className="font-black text-xl mb-1 uppercase tracking-widest">Efficiency</h5>
                                            <p className="text-blue-100 font-bold">Rapid symptom relief within 60–90 minutes.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Safety Protocol */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <motion.div {...fadeIn} className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-8">
                                <Shield className="w-10 h-10 text-emerald-600" />
                                <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Safety Protocol</h2>
                            </div>
                            <p className="text-xl text-gray-500 mb-10 font-medium">Your health is our primary concern. We follow stringent clinical screening before any administration.</p>

                            <div className="space-y-4">
                                <p className="font-black uppercase text-xs tracking-widest text-emerald-600 mb-6">Before administration:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Blood pressure check",
                                        "Heart rate assessment",
                                        "Blood glucose check",
                                        "Medical screening for liver disease",
                                        "Screening for pregnancy",
                                        "Renal function review (if recurrent user)"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-sm transition-transform hover:scale-[1.02]">
                                            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
                                            <span className="font-bold text-slate-800">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="lg:w-1/2 mt-12 lg:mt-0 flex flex-col justify-center">
                            <div className="bg-red-50 p-10 lg:p-12 rounded-[3.5rem] border border-red-100 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-red-100 transform translate-x-4 -translate-y-4">
                                    <AlertCircle size={100} />
                                </div>
                                <h4 className="text-2xl font-black text-red-900 mb-8 uppercase tracking-widest relative z-10">Avoid in:</h4>
                                <ul className="space-y-6 relative z-10">
                                    {[
                                        "Acute alcohol poisoning",
                                        "Severe liver failure",
                                        "Severe electrolyte imbalance without correction"
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-red-600 font-black shadow-sm shrink-0">!</div>
                                            <span className="text-xl font-bold text-red-800 italic leading-tight">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Post-IV Advice */}
            <section className="py-24 bg-slate-900 text-white relative">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest text-blue-400">Post-IV Advice</h2>
                        <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { text: "Oral electrolyte hydration", icon: <GlassWater /> },
                            { text: "Protein-rich meal within 2–3 hours", icon: <Pizza /> },
                            { text: "Avoid repeat alcohol exposure", icon: <AlertCircle /> },
                            { text: "Optional liver support protocol (NAC, silymarin, omega-3)", icon: <Leaf /> }
                        ].map((item, i) => (
                            <motion.div key={i} {...fadeIn} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 group-hover:rotate-6">
                                    {React.cloneElement(item.icon, { size: 32, className: "text-blue-400 group-hover:text-white transition-colors" })}
                                </div>
                                <p className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors max-w-[200px]">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expected Outcomes */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center gap-16">
                        <motion.div {...fadeIn} className="md:w-1/3 text-center md:text-left">
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 italic">Expected Outcomes</h2>
                            <div className="flex items-center gap-4 justify-center md:justify-start">
                                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                                    <Sparkles size={24} />
                                </div>
                            </div>
                        </motion.div>

                        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Reduced headache",
                                "Improved hydration",
                                "Enhanced mental clarity",
                                "Reduced nausea",
                                "Faster recovery time",
                                "Improved energy levels"
                            ].map((outcome, i) => (
                                <motion.div
                                    key={i}
                                    {...fadeIn}
                                    className="flex items-center gap-4 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 group hover:bg-blue-600 hover:border-blue-500 transition-all duration-500"
                                >
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:bg-white/20 group-hover:text-white transition-all">
                                        <Target size={24} />
                                    </div>
                                    <span className="font-black text-slate-800 leading-tight group-hover:text-white transition-colors">{outcome}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <Footer />


        </div>
    );
};

export default HangoverRecovery;
