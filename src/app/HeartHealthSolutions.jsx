import React from 'react';
import { motion } from 'framer-motion';
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { CheckCircle2, Heart, Activity, ShieldCheck, Zap, ArrowRight, Info, Dot } from 'lucide-react';
import ChelationImg from "../assets/Images/Chelarion-Therapy.jpeg";
import EECP1Img from "../assets/Images/EECP-1.jpeg";
import EECP2Img from "../assets/Images/EECP-2.jpeg";

const HeartHealthSolutions = () => {
    const treatments = [
        {
            title: "IV Chelation Therapy",
            description: "Intravenous infusions of EDTA along with essential vitamins to bind unwanted metals and calcium deposits.",
            icon: <Zap className="w-6 h-6 text-red-500" />,
            highlights: [
                "Reduces vascular calcification",
                "Improves arterial flexibility",
                "Enhances peripheral circulation",
                "Reduces oxidative stress"
            ]
        },
        {
            title: "EECP Therapy",
            description: "A non-invasive 'natural bypass' therapy that stimulates the reopening of small collateral blood vessels.",
            icon: <Activity className="w-6 h-6 text-red-500" />,
            highlights: [
                "Increases blood return to heart",
                "Reduces cardiac workload",
                "Enhances oxygen delivery",
                "Non-surgical outpatient care"
            ]
        }
    ];

    const whyChoose = [
        { title: "Personalised Planning", desc: "Each patient undergoes detailed medical history review, laboratory assessment, and cardiac evaluation." },
        { title: "Integrative Approach", desc: "We combine modern non-invasive cardiac therapies with metabolic and lifestyle optimization." },
        { title: "Expert Supervision", desc: "All therapies are administered under experienced physician oversight with continuous monitoring" },
        { title: "Root-Cause Focus", desc: "We address inflammation, oxidative stress, vascular health, and metabolic imbalance." },
        { title: "Ethical & Evidence-Informed Practice", desc: "Therapies are recommended only when clinically appropriate." },
        { title: "Patient-Centred Care", desc: "Clear explanation of options, transparent pricing, and structured follow-up." },
    ];

    return (
        <div className="bg-white font-sans text-gray-900">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop"
                        alt="Heart Health"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-widest text-red-400 uppercase bg-red-950/30 rounded-full border border-red-500/30">
                            Cardiovascular Excellence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Advanced Heart Health & <br /> Heart Block Solutions
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10">
                            Advanced Heart Health Solutions Chelation Therapy & EECP at Tigris Valley Wellness Centre
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">Our Integrative Approach</h2>
                        <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-xl text-gray-900 leading-relaxed italic">
                            At Tigris Valley, we provide comprehensive, non-surgical heart care solutions for patients who continue to experience symptoms despite medications, stents, or bypass surgery — as well as for those seeking preventive cardiovascular support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {['IV Chelation Therapy', 'Enhanced External Counterpulsation (EECP)', 'Targeted Cardiac Nutritional Support', 'Metabolic optimization', 'Lifestyle and risk-factor correction'].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className=" flex items-center gap-4"
                            >
                                <CheckCircle2 className="text-red-600 shrink-0" />
                                <span className="font-semibold text-gray-800">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className='text-center mt-10'>
                        <p className='text-lg text-gray-900 leading-relaxed italic'>All therapies are delivered under structured medical supervision with strict safety monitoring.</p>
                    </div>
                </div>
            </section>

            {/* Detailed Treatments */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Chelation */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-red-500/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShieldCheck className="w-24 h-24 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Zap className="text-red-600" /> Chelation Therapy for Heart Health
                            </h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                Involves intravenous infusions of EDTA along with essential vitamins to bind unwanted metals and excess calcium deposits, which are safely eliminated through the kidneys.
                            </p>
                            <h2 className='text-lg font-bold mb-6 '>How Chelation May Support the Heart</h2>
                            <div className="space-y-4 mb-10">
                                {[
                                    "May assist in reducing vascular calcification",
                                    "Supports improved arterial flexibility",
                                    "Enhances peripheral circulation",
                                    "Reduces oxidative stress",
                                    "May improve chest discomfort and breathlessness in selected patients",
                                    "Considered as an adjunctive option in carefully evaluated heart block cases",
                                ].map((bullet, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <ArrowRight className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                                        <span className="text-gray-700 font-medium">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h1 className='font-medium mb-2 '>Typical Treatment Course</h1>
                                <p className="text-sm text-gray-500 mt-4 leading-relaxed mb-5">
                                    - 20–30 infusions
                                    <br />
                                    - Twice weekly sessions
                                    <br />
                                    - Each session lasting 3–3.5 hours
                                    <br />
                                    - Continuous monitoring throughout therapy
                                </p>
                                <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Chelation Therapy Package</span>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <h4 className="text-2xl font-bold text-red-950">₹50,000</h4>
                                    <span className="text-gray-500 font-medium">/ 20 IV Infusions</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                                    (Customised protocols may vary depending on patient condition.)
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Chelation therapy is offered as a supportive adjunct and not a replacement for emergency or life-saving cardiac procedures.
                                </p>
                            </div>

                            <div className="mt-8 rounded-3xl overflow-hidden shadow-lg border-2 border-red-50">
                                <img
                                    src={ChelationImg}
                                    alt="Chelation Therapy Session"
                                    className="w-full h-auto object-cover hover:scale-105 transition duration-500"
                                />
                            </div>
                        </motion.div>

                        {/* EECP */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-red-500/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Heart className="w-24 h-24 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <Activity className="text-red-600" /> Enhanced External Counterpulsation (EECP)
                            </h3>
                            <p className="text-gray-600 mb-4 text-lg italic font-medium">
                                A Non-Surgical “Natural Bypass” Therapy
                            </p>
                            <p className="text-gray-600 mb-8 text-sm">
                               Many patients continue to suffer from chronic stable angina even after undergoing bypass surgery, angioplasty, or stenting. These individuals often remain restricted in their daily activities. <br />
<br />
EECP is a non-invasive outpatient therapy designed to stimulate the reopening and strengthening of small collateral blood vessels. Over time, these vessels may function like a “natural bypass,” improving blood supply to affected heart muscle.
                            </p>
                            <div className='space-y-2'>
                                <h1 className='font-medium mb-2 '>Who Is a Candidate for EECP?</h1>
                                <p className='text-sm text-gray-600 '>You may be a candidate if you:</p>
                                {[
                                    "Have chronic stable angina",
"Do not get adequate relief from anti-anginal medications",
"Are not suitable for bypass surgery, angioplasty, or stenting",
"Wish to avoid high-risk or expensive surgical procedures",
"Have a family history of heart disease and seek preventive care",
"Are diabetic and want to reduce cardiovascular complications",
"Have high blood pressure and wish to prevent disease progression",
"A complete cardiac evaluation is mandatory before starting therapy."
                                ].map((bullet, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <Dot  className=" text-red-500 shrink-0" />
                                        <span className="text-gray-700 text-sm">{bullet}</span>
                                    </div>
                                ))}

                            </div>
                            <div className='mt-5'>
                                <h1 className='font-medium mb-2 '>What Happens During EECP Treatment?</h1>
                                {[
                                    "The patient lies comfortably on a treatment table",
"ECG electrodes monitor heart rhythm, heart rate, and blood pressure",
"Inflatable cuffs are wrapped around the calves, thighs, and buttocks",
"The cuffs inflate and deflate sequentially in sync with the heartbeat",
"Each session lasts approximately 60 minutes."
                                ].map((bullet, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <Dot  className=" text-red-500 shrink-0" />
                                        <span className="text-gray-700 text-sm">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4 mb-10 mt-3">
                                <h1 className='font-medium mb-2 '>How EECP Works</h1>
                                <p className='text-sm text-gray-600'>During the heart’s relaxation phase (diastole), the cuffs inflate sequentially to increase blood flow back to the heart. Just before the heart pumps again, the cuffs rapidly deflate, reducing resistance and workload.</p>
                                {[
                                    "Improve coronary perfusion",
                                    "Enhances oxygen delivery",
                                    "Reduces cardiac workload",
                                    "Stimulate development of collateral circulation",
                                    "Over time, this may reduce chest pain, breathlessness, and improve functional capacity.",
                                ].map((bullet, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <ArrowRight className="w-5 h-5 mt-1 text-red-500 shrink-0" />
                                        <span className="text-gray-700 font-medium">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                                <h1 className='font-medium mb-2 '>Treatment Protocol</h1>
                                <p className='text-sm text-gray-600'>- 35 total hours of therapy
<br />
- 1 hour per day
<br />
- Typically completed over 7 weeks</p>
                                <span className="text-sm font-bold text-red-600 uppercase tracking-wider mt-3"> EECP Treatment Package</span>
                                <div className="flex items-baseline gap-2 mt-2">
                                    <h4 className="text-3xl font-bold text-red-950">₹75,000</h4>
                                    <span className="text-gray-500 font-medium">/ 35 Sessions (60 minutes each)</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                                    35 total hours of therapy typically completed over 7 weeks. Mandatory cardiac evaluation before starting.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                    <img
                                        src={EECP1Img}
                                        alt="EECP Therapy 1"
                                        className="w-full aspect-square object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                    <img
                                        src={EECP2Img}
                                        alt="EECP Therapy 2"
                                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Combined & Nutritional Support */}
            <section className="py-24 bg-red-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Synergistic Support Programs</h2>
                        <p className="text-red-200 max-w-2xl mx-auto">Maximizing cardiovascular resilience through combined evidence-based protocols.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3 uppercase tracking-tighter">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm">1</div>
                                Combined Program
                            </h4>
                            <p className="text-red-100 mb-6">EECP (35 sessions) + IV Chelation (20 infusions)</p>
                            <div className="text-4xl font-extrabold mb-6">₹1,10,000</div>
                            <ul className="space-y-3">
                                {["Lower oxidative stress", "Improve coronary circulation", "Reduce vascular stiffness", "Enhance endothelial function"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <CheckCircle2 className="text-red-500 w-4 h-4" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className='text-xs text-red-300 mt-4'>(Subsidized treatment options are available for eligible patients.)</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                            <h4 className="text-2xl font-bold mb-4 flex items-center gap-3 uppercase tracking-tighter">
                                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm">2</div>
                                Cardiac Nutrition
                            </h4>
                            <p className="text-red-100 mb-6 italic">Targeted IV support for heart failure patients with limited options.</p>
                            <ul className="space-y-3 mb-6">
                                {["Targeted cardiac micronutrients", "Mitochondrial support nutrients", "Antioxidant therapy", "Metabolic cofactors"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                        <CheckCircle2 className="text-red-500 w-4 h-4" /> {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-red-300">
                                <span className='font-bold'>In suitable patients :</span> 15–20 sittings every three months to support cardiac metabolism and quality of life.
                            </p>
                            <p className="text-xs text-red-300">
                                This program is offered strictly under physician supervision and does not replace guideline-directed heart failure therapy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="">
                        <div className="">
                            <h2 className="text-4xl font-extrabold mb-8 text-red-950 leading-tight">Why Choose Tigris Valley for Heart Care?</h2>
                            <p className="text-xl max-w-4xl text-gray-900 mb-10 leading-relaxed">
                                Our Advanced Heart Health Program is designed to provide structured, safe, and integrative cardiac support aimed at improving function, circulation, and overall quality of life.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {whyChoose.map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                        <h5 className="font-bold text-red-800 mb-2">{item.title}</h5>
                                        <p className="text-base text-gray-700">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/* Video Gallery Section */}
            <section className="py-16 bg-red-50/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-red-950">Educational & Success Videos</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Learn more about our advanced heart health protocols and patient experiences.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/gd13BECbWjE"
                                title="Heart Health Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/mRERX2mbYmY"
                                title="Heart Health Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-red-500/10 border border-red-50 p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-red-950 mb-8">Our Commitment</h2>
                            <p className="text-xl font-semibold text-gray-800 mb-10 italic">Whether you are:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {[
                                    { text: "A post–heart attack patient with persistent angina", icon: "❤️" },
                                    { text: "A heart block patient exploring non-surgical options", icon: "🛡️" },
                                    { text: "A heart failure patient requiring supportive care", icon: "🤝" },
                                    { text: "A diabetic with cardiovascular risk", icon: "🧬" },
                                    { text: "Or someone seeking preventive heart health", icon: "🧘" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-red-50/50 rounded-2xl border border-red-100/50">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="text-gray-700 font-medium leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-10 border-t border-gray-100">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                                    Our <span className="text-red-700 font-bold">Advanced Heart Health Program</span> at Tigris Valley is designed to provide structured, safe, and integrative cardiac support aimed at improving function, circulation, and overall quality of life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HeartHealthSolutions;
