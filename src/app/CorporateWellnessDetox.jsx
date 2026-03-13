import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
    ShieldCheck,
    Zap,
    Sparkles,
    Brain,
    Clock,
    Check,
    ArrowRight,
    Users,
    TrendingUp,
    Coffee,
    Briefcase,
    Activity,
    LineChart,
    Building2,
    HeartPulse,
    ShieldAlert
} from "lucide-react";
import Popup from "../components/Contact/Popup";
import { Button } from "../components/ui/button";
import img1 from "../assets/itpro.jpg"
const CorporateWellnessDetox = () => {
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
            <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={img1}
                        alt="Corporate Excellence"
                        className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900/60 to-indigo-900/60"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-5xl"
                    >
                        {/* <span className="inline-block py-1.5 px-4 mb-6 text-xs sm:text-sm font-bold tracking-[0.2em] text-indigo-300 uppercase bg-indigo-950/40 backdrop-blur-md rounded-full border border-indigo-500/30">
                            Reenergize Your Workforce. Restore Performance. Elevate Productivity.
                        </span> */}
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight shadow-sm">
                            Corporate Wellness Detox Program
                        </h1>
                        <p className="max-w-4xl mx-auto text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-light">
                            Modern corporate life places enormous pressure on professionals. Long working hours, chronic stress, irregular meals, poor sleep, and environmental exposure can gradually affect energy, focus, immunity, and overall productivity.
                        </p>
                        <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 inline-block shadow-2xl">
                            <p className="text-white font-bold italic tracking-wide text-lg">
                                The Corporate Wellness Detox Program at Tigris Valley is designed specifically for business professionals, executives, and corporate teams seeking to restore vitality, enhance mental clarity, and improve long-term health.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction & Science */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full font-bold text-sm mb-6 border border-indigo-100">
                                <Activity size={16} /> Performance Optimization
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                                This program integrates <span className="text-indigo-600">functional medicine, preventive health strategies, and personalized wellness interventions</span> to support optimal physical and cognitive performance.
                            </h2>
                            <div className="w-20 h-1.5 bg-indigo-600 rounded-full mb-10"></div>
                        </motion.div>
                        <motion.div {...fadeIn} className="relative">
                            <div className="absolute -inset-4 bg-indigo-500/10 rounded-[3rem] blur-2xl"></div>
                            <div className="relative z-10 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                                <h3 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest border-b border-slate-200 pb-4">Why Corporate Professionals Need Detox</h3>
                                <p className="text-lg text-slate-600 font-medium mb-8">Busy professionals often experience:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { text: "Chronic fatigue and burnout", icon: <ShieldAlert className="text-red-500" /> },
                                        { text: "Brain fog and reduced concentration", icon: <Brain className="text-indigo-500" /> },
                                        { text: "Stress-related digestive problems", icon: <Zap className="text-amber-500" /> },
                                        { text: "Sleep disturbances", icon: <Clock className="text-blue-500" /> },
                                        { text: "Weight gain and metabolic imbalance", icon: <Activity className="text-emerald-500" /> },
                                        { text: "Reduced immunity", icon: <HeartPulse className="text-rose-500" /> },
                                        { text: "High cortisol and stress overload", icon: <TrendingUp className="text-orange-500" /> }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-2xl border border-slate-50 shadow-sm">
                                            <div className="shrink-0 mt-1">{item.icon}</div>
                                            <span className="font-bold text-slate-800 text-sm leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 p-5 bg-indigo-600 rounded-2xl text-white text-center shadow-lg shadow-indigo-200">
                                    <p className="font-black italic">Our program helps professionals reset their metabolism, improve resilience, and optimize performance.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Three Essential Systems */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div {...fadeIn} className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest italic">Our Corporate Detox Approach</h2>
                        <p className="text-xl text-indigo-300 font-bold max-w-3xl mx-auto">This medically supervised program focuses on restoring balance in three essential systems:</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* System 1 */}
                        <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-md p-10 rounded-[1.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl mb-8 flex items-center justify-center text-indigo-400">
                                <Zap size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-6 border-l-4 border-indigo-500 pl-4 uppercase tracking-tighter">1. Stress & Energy Reset</h3>
                            <p className="text-slate-300 font-medium mb-8">Corporate stress can disrupt hormones, sleep, and metabolic health.</p>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-4">Interventions:</h4>
                            <ul className="space-y-4">
                                {["Stress hormone balance", "Nervous system recovery strategies", "Nutritional energy optimization", "IV micronutrient therapy for fatigue"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                        <span className="font-bold text-sm text-slate-100">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* System 2 */}
                        <motion.div {...fadeIn} className="bg-indigo-600 p-10 rounded-[1.5rem] shadow-2xl shadow-indigo-900/40 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                <Activity size={100} />
                            </div>
                            <div className="w-16 h-16 bg-white/20 rounded-2xl mb-8 flex items-center justify-center text-white">
                                <Sparkles size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-6 border-l-4 border-white pl-4 uppercase tracking-tighter">2. Metabolic Detox & Performance</h3>
                            <p className="text-indigo-100 font-medium mb-8">Our program supports the body’s natural detoxification and energy production systems.</p>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-4">Focus Areas:</h4>
                            <ul className="space-y-4">
                                {["Liver detox support", "Gut microbiome optimization", "Anti-inflammatory nutrition plans", "Metabolic health restoration"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-white" />
                                        <span className="font-bold text-sm text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* System 3 */}
                        <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-md p-10 rounded-[1.5rem] border border-white/10 hover:bg-white/10 transition-all duration-500">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl mb-8 flex items-center justify-center text-indigo-400">
                                <Brain size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-6 border-l-4 border-indigo-500 pl-4 uppercase tracking-tighter">3. Mental Clarity & Cognitive Performance</h3>
                            <p className="text-slate-300 font-medium mb-8">High-performing professionals require optimal brain health.</p>
                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-4">Focus Areas:</h4>
                            <ul className="space-y-4">
                                {["Brain fog reduction", "Cognitive enhancement strategies", "Sleep optimization", "Nutritional support for focus and productivity"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                        <span className="font-bold text-sm text-slate-100">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Program Options */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 italic tracking-tighter">Program Options for Companies</h2>
                        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">We offer flexible corporate wellness programs designed for different business environments:</p>
                        <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-8 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Executive */}
                        <motion.div {...fadeIn} className="bg-slate-50 p-10 rounded-[1.5rem] border border-slate-100 shadow-sm flex flex-col group hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="mb-10 text-center">
                                <div className="w-20 h-20 bg-slate-900 text-white rounded-[2.5rem] mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                                    <Briefcase size={40} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tighter mb-4">Executive Detox Program</h3>
                                <p className="text-slate-500 font-bold text-sm italic">A personalized program designed for senior executives and leadership teams.</p>
                            </div>
                            <div className="flex-grow space-y-4">
                                {["Comprehensive health assessment", "Metabolic detox protocol", "IV nutrient therapy", "Lifestyle and stress optimization"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                        <Check className="text-indigo-600" size={18} />
                                        <span className="font-bold text-slate-800 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Team */}
                        <motion.div {...fadeIn} className="bg-indigo-950 p-10 rounded-[1.5rem] flex flex-col relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-indigo-800/20 to-transparent"></div>
                            <div className="mb-10 text-center relative z-10">
                                <div className="w-20 h-20 bg-indigo-600 text-white rounded-[2.5rem] mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:-rotate-12 transition-transform border border-white/20">
                                    <Users size={40} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-white uppercase tracking-tighter mb-4">Corporate Team Wellness Program</h3>
                                <p className="text-indigo-300 font-bold text-sm italic">Designed for organizations seeking to improve employee health and productivity.</p>
                            </div>
                            <div className="flex-grow space-y-4 relative z-10">
                                {["Corporate health screening", "Group wellness workshops", "Detox nutrition guidance", "Stress management strategies"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-sm">
                                        <Check className="text-indigo-400" size={18} />
                                        <span className="font-bold text-white text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Campaign */}
                        <motion.div {...fadeIn} className="bg-slate-50 p-10 rounded-[1.5rem] border border-slate-100 shadow-sm flex flex-col group hover:bg-white hover:shadow-2xl transition-all duration-500">
                            <div className="mb-10 text-center">
                                <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-[2.5rem] mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                                    <Building2 size={40} />
                                </div>
                                <h3 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tighter mb-4">Workplace Detox Campaign</h3>
                                <p className="text-slate-500 font-bold text-sm italic">A short-term initiative promoting healthier lifestyles in the workplace.</p>
                            </div>
                            <div className="flex-grow space-y-4">
                                {["7–14 day detox challenges", "Employee health education sessions", "Nutritional coaching", "Wellness tracking"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                                        <Check className="text-indigo-600" size={18} />
                                        <span className="font-bold text-slate-800 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Bento Section */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Benefits for Organizations */}
                        <div className="lg:col-span-8">
                            <motion.div {...fadeIn} className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group h-full">
                                <div className="absolute top-0 right-0 p-8 text-slate-100 opacity-50 group-hover:rotate-12 transition-transform">
                                    <LineChart size={150} />
                                </div>
                                <div className="relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 italic tracking-tighter">Benefits for Organizations</h2>
                                    <p className="text-lg text-slate-500 font-bold mb-10 max-w-xl">Companies that invest in employee health experience measurable benefits:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                        {[
                                            "Improved employee productivity",
                                            "Reduced burnout and stress",
                                            "Better focus and cognitive performance",
                                            "Reduced sick leave and absenteeism",
                                            "Higher employee satisfaction and retention",
                                            "A healthier and more resilient workforce"
                                        ].map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-4 group/item">
                                                <div className="w-8 h-8 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors">
                                                    <Check size={18} />
                                                </div>
                                                <span className="font-black text-slate-800 leading-tight">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Who Should Enroll & Partnership */}
                        <div className="lg:col-span-4 flex flex-col gap-8">
                            <motion.div {...fadeIn} className="bg-slate-900 p-10 rounded-[2rem] text-white flex-grow group shadow-2xl relative overflow-hidden">
                                <h3 className="text-2xl font-black mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Who Should Enroll?</h3>
                                <ul className="space-y-4 font-bold text-slate-300">
                                    {["Corporate executives", "Business leaders and entrepreneurs", "IT professionals and high-stress occupations", "Professionals experiencing burnout or fatigue", "Organizations prioritizing employee wellness"].map((text, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 shrink-0" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                            
                            <motion.div {...fadeIn} className="bg-indigo-600 p-10 rounded-[2rem] text-white group shadow-2xl relative overflow-hidden">
                                <h3 className="text-2xl font-black mb-4 italic tracking-tight uppercase tracking-[0.2em] text-white/70 text-xs">Partnership</h3>
                                <p className="font-extrabold text-xl leading-relaxed italic">
                                    At Tigris Valley, we partner with organizations to develop customized corporate wellness programs.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div 
                        {...fadeIn}
                        className="bg-slate-900 rounded-[2rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group text-center"
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-800 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <span className="inline-block py-1.5 px-6 mb-8 text-xs font-black tracking-[0.3em] text-indigo-400 uppercase bg-white/5 rounded-full border border-white/10">
                                Invest in the Health of Your Workforce
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight uppercase italic overflow-hidden">
                                <span className="block italic tracking-tighter">A healthier workforce is </span>
                                <span className="block text-indigo-400 -mt-2 tracking-tighter mt-2">a stronger workforce.</span>
                            </h2>
                            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-bold italic">
                                Empower your employees to perform at their best with a structured corporate detox and wellness program. Partner with us to bring advanced corporate wellness solutions to your organization.
                            </p>
                            
                            <Popup>
                                <Button className="px-12 py-8 bg-indigo-600 text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-indigo-900/40 hover:bg-indigo-800 hover:text-white transition-all duration-500 scale-110 flex items-center gap-4 group/btn">
                                    Connect With Us
                                    {/* <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" /> */}
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

export default CorporateWellnessDetox;
