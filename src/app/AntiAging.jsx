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
} from "lucide-react";
import { LuActivity } from "react-icons/lu";
import { TbTelescope, TbInfinity } from "react-icons/tb";

const AntiAging = () => {
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
            src="https://dermavereaesthetics.com/wp-content/uploads/2024/08/fillers.jpg"
            alt="Advanced Longevity"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/90 via-slate-900/80 to-blue-900/90"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <span className="inline-block py-1.5 px-4 mb-6 text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-300 uppercase bg-blue-900/40 backdrop-blur-md rounded-full border border-blue-500/30">
              Advanced Regeneration & Longevity
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Reverse Biological Age. <br />
              Restore Cellular Intelligence. <br />
              Age With Strength, Clarity & Confidence.
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
              At Tigris Valley Wellness Centre, ageing is not treated as an inevitability — it is approached as a modifiable biological process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
              This is not cosmetic anti-ageing.<br />
              <span className="text-blue-600">This is regenerative longevity care.</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our Advanced Functional Anti-Ageing & Longevity Program integrates modern precision diagnostics with time-tested traditional systems to create true cellular-level regeneration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeIn} className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="https://praxilabs.com/en/blog/wp-content/uploads/2023/05/what-is-molecular-biology.jpg"
                alt="Molecular Research"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10"></div>
            </motion.div>
            <motion.div {...fadeIn} className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900">Why We Age Faster Than We Should</h3>
              <p className="text-lg text-gray-600 italic">Ageing accelerates due to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Chronic inflammation",
                  "Insulin resistance",
                  "Hormonal decline",
                  "Mitochondrial dysfunction",
                  "Toxic load",
                  "Gut dysbiosis",
                  "Stress-driven cortisol imbalance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg font-semibold text-blue-700 pt-4 border-t border-slate-100">
                We address the root biology, not just visible symptoms.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Longevity Model Header */}
      <section className="py-16 bg-slate-900 text-center px-6">
        <motion.div {...fadeIn}>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Our Integrated Longevity Model
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Section 1: Precision Longevity Diagnostics */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <span className="text-blue-600 font-bold text-lg mb-4 block">01 Precision Longevity Diagnostics</span>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                We assess your biological age, not just your chronological age.
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive Testing Includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Insulin resistance markers",
                  "Inflammatory markers (hs-CRP, homocysteine)",
                  "Thyroid & adrenal mapping",
                  "Sex hormone optimization panel",
                  "Vitamin & micronutrient profiling",
                  "Oxidative stress assessment",
                  "Fatty liver & metabolic screening"
                ].map((test, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Microscope className="w-5 h-5 text-blue-500 shrink-0" />
                    <span className="text-slate-700 font-medium">{test}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-blue-100/50 rounded-2xl border border-blue-200">
                <p className="text-blue-900 font-bold italic">
                  This enables a fully personalised longevity blueprint.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-2xl"></div>
              <img
                src="https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17877.jpg"
                alt="Precision Diagnostics"
                className="relative z-10 w-full h-[500px] object-cover rounded-[2.5rem] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: IV Nutritional & Cellular Regeneration */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-purple-600 font-bold text-lg mb-4 block">02 IV Nutritional & Cellular Regeneration Therapy</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Your cells cannot repair without raw materials.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Myers Cocktail */}
            <motion.div {...fadeIn} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="p-4 bg-purple-100 w-fit rounded-2xl mb-6">
                <Droplets className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">🔹 Myers Cocktail IV Therapy</h4>
              <p className="text-gray-600 mb-6">A powerful all-in-one nutrient infusion designed to:</p>
              <ul className="space-y-3 mb-8">
                {["Restore energy at the cellular level", "Enhance immunity", "Improve physical & mental performance", "Promote youthful energy & skin vitality"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CircleCheck className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Ultimate Drip */}
            <motion.div {...fadeIn} className="bg-slate-900 p-8 rounded-[2rem] text-white hover:shadow-2xl transition-shadow lg:scale-105 z-10">
              <div className="p-4 bg-blue-500 w-fit rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">🔹 Ultimate All-In-One IV Drip</h4>
              <p className="text-blue-100 mb-6">Designed for total body rejuvenation:</p>
              <ul className="space-y-3 mb-8">
                {["Restores hydration and metabolic balance", "Reduces inflammation & oxidative stress", "Activates deep cellular repair pathways", "Enhances focus & sustained vitality"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheck className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* NAD+ */}
            <motion.div {...fadeIn} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="p-4 bg-indigo-100 w-fit rounded-2xl mb-6">
                <Dna className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">🔹 NAD+ Cellular Repair Therapy (Where Indicated)</h4>
              <p className="text-gray-600 mb-6 font-medium italic underline decoration-indigo-200">Turn back time at a cellular level:</p>
              <ul className="space-y-3 mb-4">
                {["Supports DNA repair", "Enhances mitochondrial efficiency", "Improves cognitive clarity", "Boosts emotional resilience", "Promote detoxification & longevity pathways"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <CircleCheck className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Infusions Grid */}
          <motion.div {...fadeIn} className="mt-16 max-w-5xl mx-auto bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
            <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Sparkles className="text-amber-500" /> Targeted Cellular Infusions
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "High-Dose Vitamin C",
                "B-Complex",
                "Magnesium",
                "Alpha Lipoic Acid",
                "L-Carnitine",
                "Glutathione Push (Detox & Radiance Support)"
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center font-bold text-slate-500 tracking-wider">
              Protocol Structure: Weekly sessions (6–8 weeks) → Structured maintenance phase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Rasayana Rejuvenation */}
      <section className="py-24 bg-emerald-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div {...fadeIn} className="relative">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
                alt="Traditional Rejuvenation"
                className="w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
              />
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl max-w-xs">
                <p className="text-emerald-900 font-bold italic">
                  True anti-ageing has been described in classical Rasayana science for thousands of years.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeIn}>
              <span className="text-emerald-600 font-bold text-lg mb-4 block">03 AYUSH-Based Rasayana Rejuvenation</span>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                Ancient Science Meets Modern Biomarkers.
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                    <Leaf className="text-emerald-500" /> Core Rejuvenative Herbs
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "Withania somnifera", desc: "Adaptogen for cortisol balance & vitality" },
                      { name: "Phyllanthus emblica", desc: "Potent antioxidant & collagen support" },
                      { name: "Tinospora cordifolia", desc: "Immune rejuvenator" },
                      { name: "Bacopa monnieri", desc: "Cognitive longevity support" }
                    ].map((herb, i) => (
                      <div key={i} className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm">
                        <span className="block font-bold text-emerald-800 italic">{herb.name}</span>
                        <span className="text-sm text-gray-600">{herb.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-6">Optional Traditional Therapies</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Abhyanga (medicated oil therapy)", "Shirodhara (stress reset therapy)", "Seasonal Panchakarma detox"].map((therapy, i) => (
                      <span key={i} className="px-5 py-3 bg-emerald-100/50 text-emerald-900 rounded-full font-medium border border-emerald-200">
                        {therapy}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-emerald-900 font-bold pt-4">
                  We integrate traditional wisdom with modern biomarker tracking.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Acupuncture */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
              <motion.div {...fadeIn}>
                <span className="text-blue-400 font-bold text-lg mb-4 block">04 Acupuncture & Meridian Longevity Therapy</span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Supporting the Kidney Jing.
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  In Traditional Chinese Medicine, ageing is linked to depletion of Kidney Jing (vital essence).
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Supports hormonal axis regulation",
                    "Enhances collagen production",
                    "Improves microcirculation",
                    "Optimizes sleep cycles",
                    "Reduces systemic inflammation"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-200">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-white/10 rounded-xl inline-block border border-white/10">
                  <p className="text-blue-300 font-bold text-sm uppercase tracking-widest">
                    Recommended: Weekly sessions (6 weeks) → Maintenance phase.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1598555763574-dca77e10427e"
                alt="Acupuncture"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Hormonal Optimization */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-indigo-600 font-bold text-lg mb-4 block">05 Hormonal & Metabolic Optimization</span>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Precision Hormonal Mapping
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              After 35–40 years, subtle hormonal shifts begin. We evaluate and correct the core endocrine landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Thyroid Health", items: ["Thyroid dysfunction reversal"] },
              { title: "Adrenal Support", items: ["Adrenal imbalance patterns"] },
              { title: "Metabolic Health", items: ["Insulin resistance correction"] },
              { title: "Sex Hormones", items: ["Testosterone / Estrogen imbalance"] },
              { title: "Longevity Markers", items: ["DHEA decline monitoring"] }
            ].map((card, i) => (
              <motion.div key={i} {...fadeIn} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="text-indigo-600 font-medium">✔ {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <motion.div {...fadeIn} className="bg-indigo-600 p-8 rounded-[2rem] shadow-xl text-white flex items-center justify-center text-center">
              <p className="font-bold text-lg italic">
                Bio-identical support is used only when clinically indicated and carefully supervised.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] shadow-xl">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Thermometer className="text-red-500" /> Gut, Detox & Inflammation Reset
              </h4>
              <p className="text-slate-600 mb-6">Longevity cannot coexist with chronic inflammation.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Anti-inflammatory elimination diet",
                  "Microbiome restoration",
                  "Liver Phase I & II detox support",
                  "Heavy metal assessment (if indicated)",
                  "Ozone therapy (select cases)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-800 font-medium">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div> {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-white">
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Brain className="text-blue-400" /> Cognitive & Brain Longevity
              </h4>
              <p className="text-slate-300 mb-6">Because brain health determines ageing quality. Support may include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "High-EPA/DHA Omega-3",
                  "Phosphatidylserine",
                  "Bacopa support",
                  "NAD+ therapy",
                  "Sleep architecture correction"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-blue-200 font-medium">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personalized Protocol Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">A Fully Personalized Longevity Protocol</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">At Tigris Valley Wellness Centre, no two anti-ageing plans are identical.</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { label: "Biomarker-driven", icon: <Dna /> },
                { label: "Clinically customised", icon: <Stethoscope /> },
                { label: "Time-sensitive", icon: <Clock /> },
                { label: "Lifestyle-adapted", icon: <Leaf /> },
                { label: "Professionally supervised", icon: <Shield /> }
              ].map((feature, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                    {feature.icon}
                  </div>
                  <span className="font-bold text-slate-800">✔ {feature.label}</span>
                </div>
              ))}
            </div>
            <div className="lg:w-1/2 bg-blue-600 p-10 lg:p-16 rounded-[3rem] text-white">
              <h4 className="text-2xl font-bold mb-8">Your protocol is designed based on:</h4>
              <ul className="space-y-4 text-lg">
                {["Lab parameters", "Hormonal profile", "Metabolic status", "Biological age indicators", "Stress levels", "Travel & work schedule", "Personal preferences"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CircleCheck className="w-6 h-6 text-blue-200" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Pathway */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Designed for Busy Professionals & Executives</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We understand many of our patients travel frequently and manage businesses. Your longevity protocol can therefore be strategically modified.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Option 1 */}
            <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex flex-col h-full">
              <span className="text-blue-400 font-bold mb-4 block">Option 1</span>
              <h4 className="text-2xl font-bold text-white mb-6">IV-Focused Cellular Regeneration Track</h4>
              <p className="text-slate-300 mb-8 italic">Ideal for busy executives seeking measurable in-clinic results:</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {["Mitochondrial IVs", "Glutathione therapy", "NAD+ support (if indicated)", "High-dose Vitamin C protocols"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Option 2 */}
            <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex flex-col h-full">
              <span className="text-emerald-400 font-bold mb-4 block">Option 2</span>
              <h4 className="text-2xl font-bold text-white mb-6">Integrative Traditional Therapy Track (AYUSH-Based)</h4>
              <p className="text-slate-300 mb-8 italic">For patients preferring natural rejuvenation:</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {["Structured Rasayana herbal protocol", "Abhyanga", "Shirodhara", "Panchakarma (if indicated)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Option 3 */}
            <motion.div {...fadeIn} className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex flex-col h-full">
              <span className="text-purple-400 font-bold mb-4 block">Option 3</span>
              <h4 className="text-2xl font-bold text-white mb-6">Acupuncture & Meridian Longevity Track</h4>
              <p className="text-slate-300 mb-8 italic">For neuro-hormonal modulation and stress-axis correction:</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {["Kidney Jing preservation protocol", "Hormonal meridian balancing", "Sleep optimization sessions", "Collagen stimulation protocol"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 p-10 lg:p-16 rounded-[3.5rem] text-white text-center shadow-2xl">
            <h3 className="text-3xl lg:text-5xl font-extrabold mb-8 flex items-center justify-center gap-4">
              <TbInfinity className="text-4xl" /> Hybrid Model (Most Popular)
            </h3>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">A blended strategy combining core IV therapy for cellular repair, Rasayana rejuvenation for resilience, and Acupuncture for hormonal rhythm & stress correction.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white/10 rounded-2xl">
                <span className="block text-3xl font-bold mb-2">Science</span>
                <p className="text-blue-100">Remains Constant</p>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 animate-pulse" />
              </div>
              <div className="p-6 bg-white/10 rounded-2xl">
                <span className="block text-3xl font-bold mb-2">Delivery</span>
                <p className="text-blue-100">Adapts to You</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Program Structure</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

            {/* Phase 1 */}
            <motion.div {...fadeIn} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">1</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Phase 1 – Reset <br /><span className="text-lg font-medium text-slate-500">(Weeks 1–6)</span></h4>
              <ul className="space-y-4">
                {["Weekly IV therapy", "Weekly acupuncture", "Rasayana herbs", "Gut & detox restoration"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CircleCheck className="w-5 h-5 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Phase 2 */}
            <motion.div {...fadeIn} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-slate-900/30">2</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Phase 2 – Rebuild <br /><span className="text-lg font-medium text-slate-500">(Weeks 7–12)</span></h4>
              <ul className="space-y-4">
                {["Hormonal optimization", "Mitochondrial intensification", "Strength & metabolic protocol", "Maintenance IV"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CircleCheck className="w-5 h-5 text-slate-800" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Phase 3 */}
            <motion.div {...fadeIn} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-400/30">3</div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">Phase 3 – Longevity Maintenance</h4>
              <ul className="space-y-4">
                {["Monthly IV", "Quarterly lab reassessment", "Seasonal detox", "Biannual longevity review"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CircleCheck className="w-5 h-5 text-blue-400" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white p-12 lg:p-20 rounded-[4rem] shadow-xl border border-slate-100">
            <motion.div {...fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Expected Outcomes</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Improved energy & stamina",
                "Radiant skin",
                "Hormonal stability",
                "Reduced inflammatory markers",
                "Improved insulin sensitivity",
                "Better sleep",
                "Optimized biological age indicators"
              ].map((outcome, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                  <Sparkles className="text-blue-500 shrink-0" />
                  <span className="font-bold text-slate-800">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-12">
              This Is Not Cosmetic Medicine. <br />
              <span className="text-blue-600">This Is Regenerative Longevity Care.</span>
            </h2>

            <div className="space-y-6 text-xl text-gray-700 mb-16">
              <p>Your cells are designed to repair.</p>
              <p>Your hormones are designed to balance.</p>
              <p>Your mitochondria are designed to produce energy efficiently.</p>
              <p className="font-bold italic text-slate-900">They simply need the right environment.</p>
            </div>

            <div className="bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-5xl font-extrabold mb-8">Begin Your Longevity Transformation</h3>
                <p className="text-xl text-blue-100 mb-12 italic">
                  Book your personalised Anti-Ageing & Longevity Consultation at <br />
                  <span className="text-white font-bold not-italic font-sans">Tigris Valley Wellness Centre</span>
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 text-xl tracking-tighter sm:tracking-[0.3em] font-bold uppercase">
                  <span className="text-blue-300">Age intelligently.</span>
                  <span className="text-white">Age powerfully.</span>
                  <span className="text-blue-300">Age with biological precision.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AntiAging;
