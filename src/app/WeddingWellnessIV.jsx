import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
    ShieldCheck,
    Droplets,
    Zap,
    Sparkles,
    Stethoscope,
    Heart,
    Thermometer,
    Shield,
    CircleCheck,
    Clock,
    AlertCircle,
    Check,
    Calendar,
    GlassWater,
    Gem,
    UserCheck,
    ArrowRight,
    Mountain
} from "lucide-react";

import Popup from "../components/Contact/Popup";
import { Button } from "../components/ui/button";

const WeddingWellnessIV = () => {
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
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                        alt="Wedding Wellness"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-950/60 via-slate-900/60 to-blue-900/60"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-5xl"
                    >
                        <span className="inline-block py-1.5 px-4 mb-6 text-xs sm:text-sm font-bold tracking-[0.2em] text-rose-300 uppercase bg-rose-900/40 backdrop-blur-md rounded-full border border-rose-500/30">
                            Celebrate Beautifully. Recover Effortlessly. 💧✨
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight shadow-sm">
                            Bride and Groom Wellness IV Program
                        </h1>
                        <p className="max-w-4xl mx-auto text-lg md:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
                            Weddings are joyful celebrations filled with laughter, late nights, and memorable toasts. Our Wedding Wellness IV Therapy Program is designed to keep the bride, groom, and guests energized, hydrated, and glowing throughout the festivities.
                        </p>
                        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 inline-block">
                            <p className="text-white font-bold italic tracking-wide">
                                At Tigris Valley, we offer medically supervised IV nutrient therapy to support hydration, detoxification, and rapid recovery during wedding celebrations.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Signature Drips */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">Our Signature Wedding IV Drips</h2>
                        <div className="w-24 h-1.5 bg-rose-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* 1. Pre-Cocktail Protection */}
                        <motion.div {...fadeIn} className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-shadow group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                                    <ShieldCheck size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900">1. Pre-Cocktail Protection IV</h3>
                                    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Hydrate • Protect • Prepare</p>
                                </div>
                            </div>
                            <p className="text-lg text-slate-600 mb-8 font-medium italic">
                                Designed to be taken 2–4 hours before the wedding cocktail party to support the body before alcohol consumption.
                            </p>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest border-b border-slate-200 pb-2">Key Ingredients</h4>
                                    <ul className="space-y-3">
                                        {["IV Hydration (Normal Saline / Ringer Lactate)", "Vitamin C", "B-Complex Vitamins", "N-Acetyl Cysteine (NAC)", "Magnesium", "Glutathione"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700 font-bold text-sm">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest border-b border-slate-200 pb-2">Benefits</h4>
                                    <ul className="space-y-3">
                                        {["Supports liver detoxification", "Reduces hangover risk", "Maintains hydration", "Helps sustain energy during celebrations"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700 font-bold text-sm">
                                                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Morning-After Recovery */}
                        <motion.div {...fadeIn} className="bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                <Zap size={80} />
                            </div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-rose-400 border border-white/20">
                                    <Droplets size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black">2. Morning-After Recovery IV</h3>
                                    <p className="text-rose-400 font-bold uppercase tracking-widest text-sm">Rehydrate • Detox • Revive</p>
                                </div>
                            </div>
                            <p className="text-lg text-slate-300 mb-8 font-medium italic">
                                Perfect for the morning after the wedding celebration to restore energy and clarity.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-black text-rose-400 mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">Key Ingredients</h4>
                                    <ul className="space-y-3">
                                        {["IV Hydration", "Vitamin C", "B-Complex Vitamins", "Glutathione", "Magnesium", "N-Acetyl Cysteine (NAC)"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-white font-bold text-sm">
                                                <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-black text-rose-400 mb-4 uppercase text-xs tracking-widest border-b border-white/10 pb-2">Benefits</h4>
                                    <ul className="space-y-3">
                                        {["Rapid rehydration", "Relief from headache and fatigue", "Supports liver detoxification", "Restores mental clarity"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-white font-bold text-sm">
                                                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 inline-block">
                                <p className="text-rose-300 font-bold italic tracking-wide text-sm">
                                    Most guests feel refreshed within 30–60 minutes.
                                </p>
                            </div>
                        </motion.div>

                        {/* 3. Bridal Glow */}
                        <motion.div {...fadeIn} className="bg-white p-8 md:p-12 rounded-[3rem] border border-rose-100 shadow-xl hover:shadow-2xl transition-shadow group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
                                    <Sparkles size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900">3. Bridal Glow IV</h3>
                                    <p className="text-rose-500 font-bold uppercase tracking-widest text-sm">Radiance From Within ✨</p>
                                </div>
                            </div>
                            <p className="text-lg text-slate-600 mb-8 font-medium italic">
                                Designed for brides preparing for their big day.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest border-b border-slate-200 pb-2">Key Ingredients</h4>
                                    <ul className="space-y-3">
                                        {["Vitamin C", "Glutathione", "Biotin", "Zinc", "Hydration fluids"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700 font-bold text-sm">
                                                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest border-b border-slate-200 pb-2">Benefits</h4>
                                    <ul className="space-y-3">
                                        {["Supports healthy skin glow", "Reduces oxidative stress", "Improves skin radiance", "Promotes hydration and vitality"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700 font-bold text-sm">
                                                <Check className="w-4 h-4 text-rose-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* 4. Groom Performance */}
                        <motion.div {...fadeIn} className="bg-white p-8 md:p-12 rounded-[3rem] border border-blue-100 shadow-xl hover:shadow-2xl transition-shadow group">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                    <Zap size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900">4. Groom Performance IV</h3>
                                    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">Energy • Focus • Recovery</p>
                                </div>
                            </div>
                            <p className="text-lg text-slate-600 mb-8 font-medium italic">
                                Formulated to help the groom stay energized throughout wedding ceremonies.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest border-b border-slate-200 pb-2">Key Ingredients</h4>
                                    <ul className="space-y-3">
                                        {["Vitamin C", "B-Complex", "Magnesium", "Amino acids", "Hydration fluids"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700 font-bold text-sm">
                                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-black text-slate-900 mb-4 uppercase text-xs tracking-widest border-b border-slate-200 pb-2">Benefits</h4>
                                    <ul className="space-y-3">
                                        {["Enhances energy levels", "Supports mental clarity", "Reduces fatigue", "Improves recovery after celebrations"].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-700 font-bold text-sm">
                                                <Check className="w-4 h-4 text-blue-500 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Combined Ideal For & Medical Safety Section */}
            <section className="py-24 bg-rose-50/30 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Left Column: Ideal For (Bento Cards) */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <motion.div 
                                {...fadeIn}
                                className="md:col-span-2 bg-white p-10 rounded-[3rem] border border-rose-100 shadow-sm flex flex-col justify-center relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 italic tracking-tighter">Ideal For</h2>
                                    <p className="text-lg text-slate-500 font-medium">Elevating the wellness experience for every wedding milestone.</p>
                                </div>
                            </motion.div>

                            {[
                                { title: "Destination Weddings", icon: <Mountain className="w-6 h-6" />, desc: "Stay refreshed despite travel fatigue." },
                                { title: "Cocktail Parties", icon: <GlassWater className="w-6 h-6" />, desc: "Pre-event protection & post-event recovery." },
                                { title: "Bachelor/Bachelorette", icon: <Sparkles className="w-6 h-6" />, desc: "Celebrate fully with rapid revival." },
                                { title: "Bridal Preparation", icon: <Gem className="w-6 h-6" />, desc: "Glow from within for your big day." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    {...fadeIn}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-[2.5rem] border border-rose-50 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}

                            <motion.div 
                                {...fadeIn}
                                className="md:col-span-2 bg-slate-900 p-8 md:p-10 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between group overflow-hidden relative gap-8"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-rose-400 border border-white/10">
                                        <UserCheck size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black tracking-tight mb-1">Wedding Guest Recovery Sessions</h3>
                                        <p className="text-rose-300/80 font-bold text-sm italic">Professional care for your celebration guests.</p>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 shrink-0">
                                    <Popup>
                                        <Button className="px-8 py-6 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-rose-900/40 transition-all border-none cursor-pointer flex items-center gap-3 group/btn">
                                            Book your Pre-wedding consultation
                                            {/* <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" /> */}
                                        </Button>
                                    </Popup>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Medical Safety (Floating Panel Style) */}
                        <div className="lg:col-span-4 h-full">
                            <motion.div 
                                {...fadeIn}
                                className="bg-white h-full p-10 md:p-12 rounded-[3rem] border-2 border-emerald-100 shadow-2xl shadow-emerald-100/20 flex flex-col relative overflow-hidden"
                            >
                                {/* <div className="absolute top-0 right-0 w-full h-2 bg-emerald-500"></div> */}
                                
                                <div className="mb-10">
                                    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 shadow-inner">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Medical Safety</h2>
                                    <div className="w-12 h-1 bg-emerald-500 rounded-full mb-8"></div>
                                </div>

                                <div className="flex-grow">
                                    <p className="text-xl text-slate-700 leading-relaxed font-bold italic mb-10 border-l-4 border-emerald-200 pl-6">
                                        All IV therapies are administered under medical supervision after a brief health assessment.
                                    </p>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                                            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                                                <Check size={18} />
                                            </div>
                                            <p className="text-sm font-black text-slate-700">Screening for safety and suitability before every session.</p>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50">
                                            <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
                                                <Check size={18} />
                                            </div>
                                            <p className="text-sm font-black text-slate-700">Medically formulated nutrients & hydration protocols.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2 text-center">Outcome Oriented</p>
                                    <p className="text-center font-bold text-slate-900 italic">Celebrate fully. Recover naturally. ✨</p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WeddingWellnessIV;
