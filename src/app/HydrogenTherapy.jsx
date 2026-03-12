import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer';
import {
  Activity,
  ShieldCheck,
  HeartPulse,
  Wind,
  Stethoscope,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
  TestTube,
  Sparkles,
  Droplets,
  Zap,
  Brain,
  MinusCircle,
  PlusCircle,
  Microscope
} from 'lucide-react';
import Popup from '../components/Contact/Popup';
import { Button } from '../components/ui/button';
import img from "../assets/hydro.jpg"
const HydrogenTherapy = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: [0.13, 1, 0.12, 2],
            },
        },
    };

    const benefits = [
        {
            title: "Anti-Inflammatory Effects",
            desc: "Hydrogen can reduce inflammatory pathways involved in chronic conditions.",
            icon: <Activity className="text-blue-500 w-8 h-8" />,
            color: "border-blue-100 bg-blue-50",
        },
        {
            title: "Antioxidant Protection",
            desc: "Targets damaging oxidative stress while preserving beneficial cellular processes.",
            icon: <ShieldCheck className="text-cyan-500 w-8 h-8" />,
            color: "border-cyan-100 bg-cyan-50",
        },
        {
            title: "Brain & Nervous System Health",
            desc: "Hydrogen can cross the blood-brain barrier and may support cognitive function and neurological health.",
            icon: <Brain className="text-indigo-500 w-8 h-8" />,
            color: "border-indigo-100 bg-indigo-50",
        },
        {
            title: "Energy & Mitochondrial Support",
            desc: "Enhances cellular energy production and reduces mitochondrial damage.",
            icon: <Zap className="text-amber-500 w-8 h-8" />,
            color: "border-amber-100 bg-amber-50",
        },
        {
            title: "Immune System Regulation",
            desc: "Supports immune balance and recovery from chronic illness.",
            icon: <HeartPulse className="text-rose-500 w-8 h-8" />,
            color: "border-rose-100 bg-rose-50",
        },
        {
            title: "Recovery & Performance",
            desc: "Athletes and active individuals may benefit from improved recovery and reduced fatigue.",
            icon: <Sparkles className="text-emerald-500 w-8 h-8" />,
            color: "border-emerald-100 bg-emerald-50",
        },
    ];

    return (
        <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 right-0 w-[90%] md:w-1/2 h-full bg-gradient-to-bl from-blue-100/80 to-slate-50/20 rounded-bl-[10rem] pointer-events-none z-0 blur-3xl"></div>
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="lg:w-1/2 text-left"
                        >
                            <motion.div variants={itemVariants}>
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/90 border border-blue-200/60 text-blue-800 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                                    <Microscope className="w-4 h-4" /> Next-Generation Antioxidant Therapy
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight"
                            >
                                Hydrogen <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                    Therapy
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-lg lg:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl"
                            >
                                A Next-Generation Antioxidant Therapy for Cellular Health. An advanced medical approach using molecular hydrogen (H₂) to support the body’s natural healing.
                            </motion.p>
{/* 
                            <motion.div variants={itemVariants}>
                                <Popup>
                                    <Button className="bg-blue-600 text-white px-8 py-6 rounded-full font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 text-lg">
                                        Book Consultation
                                    </Button>
                                </Popup>
                            </motion.div> */}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="lg:w-1/2 relative w-full mt-12 lg:mt-0"
                        >
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white group">
                                <img
                                    src={img}
                                    className="w-full h-[450px] lg:h-[600px] object-cover"
                                    alt="Hydrogen Therapy"
                                />
                                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent"></div>
                                
                                {/* Floating Label */}
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20 border border-white/20">
                                    <p className="text-blue-900 font-black italic text-sm md:text-base leading-relaxed">
                                        Hydrogen selectively neutralizes harmful free radicals without interfering with beneficial cellular signaling.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                Molecular hydrogen is the smallest and most bioavailable <span className="text-blue-600 italic">antioxidant molecule.</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-8">
                                This unique property allows it to penetrate deeply into cells, mitochondria, and even the brain, making it a promising supportive treatment for many chronic and inflammatory conditions.
                            </p>
                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="text-blue-600" size={24} />
                                </div>
                                <p className="text-slate-700 font-bold italic">
                                    At Tigris Valley, hydrogen therapy is integrated into functional and regenerative medicine programs.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeIn} className="bg-slate-900 p-10 md:p-12 rounded-[2rem] text-white shadow-2xl relative group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <PlusCircle size={150} />
                            </div>
                            <h3 className="text-2xl font-black mb-10 border-b border-white/10 pb-4 uppercase tracking-widest italic">How Hydrogen Therapy Works</h3>
                            <p className="text-indigo-200 font-bold mb-8 italic text-lg line-clamp-2 md:line-clamp-none">Modern lifestyles, stress, and toxins contribute to oxidative stress and inflammation.</p>
                            <div className="space-y-4">
                                {[
                                    "Neutralizing harmful oxidative molecules",
                                    "Reducing systemic inflammation",
                                    "Protecting mitochondrial function",
                                    "Supporting cellular repair and regeneration",
                                    "Enhancing energy production and metabolic balance"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                                        <Zap className="text-blue-400 shrink-0" size={20} />
                                        <span className="font-bold text-sm md:text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* IV Hydrogen Therapy Section */}
            <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
                    <motion.div {...fadeIn}>
                        <span className="inline-block py-1 px-4 mb-6 text-xs font-black tracking-[0.3em] uppercase bg-white/20 rounded-full border border-white/40">
                            Maximum Therapeutic Effect
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">IV Hydrogen Therapy</h2>
                        <h3 className="text-xl md:text-2xl font-bold mb-10 text-blue-100">Rapid Cellular Delivery for Maximum Therapeutic Effect</h3>
                        <p className="text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto italic">
                            Intravenous hydrogen therapy is one of the most effective ways to deliver molecular hydrogen into the bloodstream, where hydrogen-rich saline solutions are administered through a controlled IV system.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { title: "Reach the bloodstream immediately", icon: <Droplets /> },
                                { title: "Deliver high bioavailability to organs", icon: <ShieldCheck /> },
                                { title: "Provide faster therapeutic effects", icon: <Activity /> }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl mb-4 flex items-center justify-center">
                                        {React.cloneElement(item.icon, { size: 24 })}
                                    </div>
                                    <span className="font-black text-sm uppercase italic tracking-wider">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Potential Benefits Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic tracking-tight">Potential Benefits of Hydrogen Therapy</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            {...fadeIn}
                            className={`p-10 rounded-[2rem] border ${benefit.color} hover:shadow-2xl transition-all duration-500 flex flex-col items-start text-left group`}
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 whitespace-pre-line leading-tight">{benefit.title}</h3>
                            <p className="text-slate-600 font-bold italic leading-relaxed">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Conditions Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="bg-white p-10 md:p-20 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="lg:w-1/2 relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight italic uppercase tracking-tighter">Conditions Where Hydrogen Therapy May Provide Support</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Chronic inflammation",
                                    "Metabolic disorders",
                                    "Neurodegenerative conditions",
                                    "Fatigue and burnout",
                                    "Long-term infections",
                                    "Detoxification",
                                    "Anti-aging and longevity"
                                ].map((condition, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <PlusCircle className="text-blue-600" size={16} />
                                        <span className="font-extrabold text-slate-800 text-sm">{condition}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative z-10">
                            <div className="p-10 bg-blue-900 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                    <HeartPulse size={80} />
                                </div>
                                <p className="text-xl md:text-2xl font-black italic mb-6 leading-relaxed">
                                    Hydrogen therapy is also increasingly integrated into cancer supportive care programs to help reduce oxidative stress and improve patient resilience.
                                </p>
                                <div className="flex items-center gap-4 py-4 px-6 bg-white/10 rounded-2xl border border-white/20">
                                    <ShieldCheck className="text-blue-400" size={28} />
                                    <p className="text-sm font-bold tracking-wide">A Safe and Gentle Therapy with an excellent safety profile in clinical studies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrative Approach Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic tracking-tight uppercase">Integrative Approach to Healing</h2>
                        <p className="text-xl text-slate-500 font-bold max-w-3xl mx-auto leading-relaxed italic">
                            At Tigris Valley, hydrogen therapy is often combined with other integrative treatments:
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            { name: "Functional medicine", icon: <Stethoscope /> },
                            { name: "Nutritional therapy", icon: <Activity /> },
                            { name: "Detoxification", icon: <Wind /> },
                            { name: "IV micronutrient", icon: <Droplets /> },
                            { name: "Advanced care", icon: <HeartPulse /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                {...fadeIn}
                                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-600 hover:text-white transition-all duration-500"
                            >
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <span className="font-black text-xs uppercase tracking-widest">{item.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        {...fadeIn}
                        className="mt-20 p-10 md:p-14 bg-slate-900 rounded-[2rem] text-white text-center relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                        
                        <h2 className="text-3xl md:text-5xl font-black mb-8 italic tracking-tighter relative z-10">
                            ✨ Discover a new frontier in cellular healing with <br />
                            <span className="text-blue-400">Hydrogen Therapy</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-bold text-slate-300 italic mb-12 relative z-10">
                            Supporting your journey toward optimal health.
                        </p>
                        
                        <div className="relative z-10">
                            <Popup>
                                <Button className="px-12 py-8 bg-blue-600 hover:bg-white hover:text-slate-900 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-950 transition-all duration-500 transform hover:scale-110 flex items-center gap-4 mx-auto border-none cursor-pointer">
                                    Connect with us
                                </Button>
                            </Popup>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HydrogenTherapy;
