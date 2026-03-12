import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import {
  CheckCircle2,
  Activity,
  ShieldCheck,
  Microscope,
  Apple,
  Droplets,
  Thermometer,
  UserCheck,
  Sparkles,
  Globe,
  ActivitySquare,
  TestTube,
  Eye,
  Leaf,
  HeartHandshake,
  HeartPulse,
  Clock,
  Dna,
  Phone,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { ContactInput } from '../components/home/ContactInput';
import { LuActivity, LuBrainCircuit } from "react-icons/lu";
import { TbHeartPlus } from "react-icons/tb";
const ReverseDiabetes = () => {
  const [ctaOpen, setCtaOpen] = useState(false);
  return (
    <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
            alt="Wellness and Nature"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-teal-900/60 to-blue-900/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <span className="inline-block py-1.5 px-4 mb-6 text-xs sm:text-sm font-bold tracking-widest text-emerald-200 uppercase bg-emerald-900/40 backdrop-blur-md rounded-full border border-emerald-500/30">
              For Patients at Tigris Valley
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Reverse Type 2 <br className="hidden sm:block" /> Diabetes
              Naturally
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-emerald-50 mb-10 leading-relaxed font-light">
              Advanced Functional Medicine + Vascular Restoration Program
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium mb-6">
              Diabetes is not just a blood sugar problem.{" "}
              <br className="hidden md:block" />
              It is a{" "}
              <span className="text-teal-700 font-bold">
                metabolic, vascular, and inflammatory disorder
              </span>{" "}
              that affects the heart, kidneys, nerves, and circulation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Tigris Valley, we combine Functional Medicine + Advanced
              Circulatory Therapies including EECP + IV Regenerative Support to
              help patients:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Improve insulin resistance",
              "Reduce HbA1c safely",
              "Improve circulation",
              "Prevent heart complications",
              "Protect kidneys and nerves",
              "Restore energy and metabolic flexibility",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-teal-50/50 p-4 rounded-xl border border-teal-100"
              >
                <CheckCircle2 className="text-teal-600 shrink-0 w-6 h-6" />
                <span className="font-semibold text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Header */}
      <section className="py-12 bg-teal-900 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <Dna className="w-7 h-7 md:w-9 md:h-9 flex-shrink-0 text-inherit" />
          The Advanced Diabetes Reversal & Heart Support Program
        </h2>
      </section>

      {/* Phases 1 & 2 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Phase 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <Microscope className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Phase 1: Comprehensive Metabolic & Cardiac Assessment
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">
                    Includes:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "HbA1c",
                      "Fasting insulin & HOMA-IR",
                      "Lipid profile",
                      "Liver & kidney function",
                      "Urine microalbumin",
                      "Thyroid profile",
                      "Vitamin D, B12, Magnesium",
                      "Body composition analysis",
                      "Cardiac evaluation (if indicated)",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">
                    Optional:
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Continuous Glucose Monitoring (CGM)",
                      "Vascular screening",
                      "Ejection fraction assessment",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0"></div>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-green-50 rounded-2xl">
                  <Apple className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Phase 2: Personalized Therapeutic Nutrition
                </h3>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Low-carb / insulin-reset protocols",
                  "Anti-inflammatory diet",
                  "Fatty liver reversal strategy",
                  "Time-restricted eating",
                  "Post-meal glucose monitoring",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100"
                  >
                    <Leaf className="w-5 h-5 text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <p className="font-bold text-green-900 text-lg flex items-center gap-2">
                  Goal: Rapid improvement in insulin sensitivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: EECP */}
      <section className="py-16 md:py-24 bg-red-900 text-white relative overflow-hidden">
        {/* Background Heart Icon */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <HeartPulse className="w-72 h-72 md:w-96 md:h-96" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
              <HeartPulse className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 text-inherit mb-4 sm:mb-6 md:mb-8" />{" "}
              Phase 3: Enhanced External Counterpulsation (EECP)
            </h3>
            <p className="text-xl md:text-2xl text-red-200 italic font-light">
              A Core Component of Our Advanced Diabetes Program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Recommendations */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
              <h4 className="text-xl font-bold mb-6 text-red-100 border-b border-white/20 pb-4">
                EECP is strongly recommended for diabetic patients with:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Coronary artery disease",
                  "Angina",
                  "Diabetic heart disease",
                  "Erectile dysfunction",
                  "Peripheral vascular disease",
                  "Early heart failure",
                  "High cardiovascular risk",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <div className="w-2 h-2 bg-red-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What Happens */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20">
              <h4 className="text-xl font-bold mb-6 text-red-100 border-b border-white/20 pb-4 flex items-center gap-2">
                <ActivitySquare className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 text-inherit" />
                What Happens During EECP?
              </h4>
              <ul className="space-y-4">
                {[
                  "Inflatable cuffs are wrapped around calves, thighs, and buttocks",
                  "Cuffs inflate and deflate in sync with ECG",
                  "Blood flow to the heart increases during relaxation phase",
                  "Pressure is released before the heart pumps",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-red-300 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-red-950/50 rounded-xl">
                <p className="italic font-medium">
                  This improves coronary perfusion and reduces vascular
                  resistance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* How it works */}
            <div className="bg-white text-gray-900 p-8 rounded-[2rem] lg:col-span-2">
              <h4 className="text-xl font-bold mb-6 text-red-900 flex items-center gap-2 border-b pb-4">
                <Activity className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                How EECP Works
              </h4>
              <p className="font-bold mb-4">EECP may:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  "Improve endothelial function",
                  'Stimulate collateral circulation ("natural bypass")',
                  "Enhance oxygen delivery to heart muscle",
                  "Improve peripheral circulation",
                  "Reduce cardiac workload",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Activity className="w-5 h-5 text-red-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="p-4 bg-red-50 text-red-900 rounded-xl font-medium italic">
                This is especially beneficial in diabetic patients where
                vascular damage is common.
              </p>
            </div>

            {/* Protocol */}
            <div className="space-y-8">
              <div className="bg-red-800 p-8 rounded-[2rem] border border-red-700">
                <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                  EECP Treatment Protocol
                </h4>
                <ul className="space-y-2 mb-4 text-red-100 text-lg">
                  <li className="font-bold">8–35 sessions</li>
                  <li className="font-bold">1 hour daily</li>
                  <li className="font-bold">3–5 days per week</li>
                </ul>
                <p className="text-sm text-red-200 italic">
                  For international patients, we offer structured intensive
                  schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Benefits */}
          <div className="mt-8 bg-gradient-to-r from-red-800 to-red-900 p-8 rounded-[2rem] border border-red-700">
            <h4 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
              Documented Clinical Benefits May Include
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Reduced angina symptoms",
                "Improved exercise tolerance",
                "Improved cardiac output",
                "Better peripheral circulation",
                "Reduced dependence on anti-anginal medication (when appropriate)",
                "Improved erectile dysfunction in diabetic males",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-red-50 bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <HeartPulse className="w-5 h-5 text-red-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Phase 4: IV Therapies */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gray-900 flex items-center justify-center gap-3">
            <Droplets className="w-9 h-9 text-inherit" /> Phase 4: Advanced IV
            Regenerative Therapies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IV Nutritional */}
            <div className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 h-full flex flex-col">
              <div className="mb-6 bg-purple-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                <Droplets className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-purple-900">
                IV Nutritional Therapy
              </h4>

              <div className="mb-6">
                <p className="font-bold text-gray-900 mb-3">Includes:</p>
                <ul className="space-y-2">
                  {[
                    "Magnesium",
                    "B-complex",
                    "Vitamin C",
                    "Alpha-lipoic acid",
                    "Amino acids",
                    "Trace minerals",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto bg-purple-50 p-5 rounded-xl">
                <p className="font-bold text-purple-900 mb-3">Supports:</p>
                <ul className="space-y-2">
                  {[
                    "Mitochondrial energy",
                    "Neuropathy care",
                    "Oxidative stress reduction",
                    "Metabolic stabilization",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-purple-800 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* IV Chelation */}
            <div className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 h-full flex flex-col">
              <div className="mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                <TestTube className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-blue-900">
                IV Chelation Therapy
              </h4>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-6 w-fit uppercase">
                (Selected Clients)
              </span>

              <div className="mb-6">
                <p className="font-bold text-gray-900 mb-3">Recommended for:</p>
                <ul className="space-y-2">
                  {[
                    "Long-standing diabetes",
                    "High cardiovascular risk",
                    "Vascular stiffness",
                    "Peripheral artery disease",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto bg-blue-50 p-5 rounded-xl mb-4">
                <p className="font-bold text-blue-900 mb-3">May support:</p>
                <ul className="space-y-2">
                  {[
                    "Improved endothelial health",
                    "Reduced oxidative burden",
                    "Better circulation",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-blue-800 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-auto">
                Administered under medical supervision.
              </p>
            </div>

            {/* Ozone Therapy */}
            <div className="bg-white p-8 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100 h-full flex flex-col">
              <div className="mb-6 bg-cyan-50 w-16 h-16 flex items-center justify-center rounded-2xl">
                <ActivitySquare className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="text-2xl font-bold mb-6 text-cyan-900 flex items-center gap-2">
                <span>🔵</span> Ozone Therapy
              </h4>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-6 w-fit uppercase">
                (Selected Candidates)
              </span>

              <div className="mb-6">
                <p className="font-bold text-gray-900 mb-3">Used to support:</p>
                <ul className="space-y-3">
                  {[
                    "Oxygen utilization",
                    "Microcirculation",
                    "Wound healing",
                    "Immune modulation",
                    "Inflammation control",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700 bg-cyan-50/50 p-3 rounded-lg border border-cyan-50"
                    >
                      <Sparkles className="w-4 h-4 text-cyan-500 shrink-0" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases 5 & 6 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Phase 5 */}
            <div className="bg-orange-50/50 p-8 md:p-10 rounded-[2rem] border border-orange-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Thermometer className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 text-inherit" />
                Phase 5: Structured Detox & Metabolic Reset
              </h3>
              <ul className="space-y-4">
                {[
                  "Liver detox support",
                  "Gut microbiome restoration",
                  "Hydration strategies",
                  "Controlled detox protocols",
                  "Reduction of inflammatory load",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg text-gray-800"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Thermometer className="w-5 h-5 text-orange-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Phase 6 */}
            <div className="bg-teal-50/50 p-8 md:p-10 rounded-[2rem] border border-teal-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Activity className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 text-inherit" />
                Phase 6: Muscle Activation & Lifestyle Protocol
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Resistance training guidance",
                  "Post-meal walking program",
                  "Sleep optimization",
                  "Stress management",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-lg text-gray-800"
                  >
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <UserCheck className="w-5 h-5 text-teal-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-teal-100">
                <p className="font-medium text-teal-900 italic">
                  <span className="font-bold text-teal-700">
                    Muscle is the largest glucose disposal organ
                  </span>{" "}
                  — activating it improves insulin sensitivity dramatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complication Prevention Strategy */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-slate-100" />
              Complication Prevention Strategy
            </h3>
            <p className="text-xl text-slate-300">We proactively protect:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Heart */}
            <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
              <h4 className="text-2xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <HeartHandshake className="w-7 h-7" /> Heart
              </h4>
              <ul className="space-y-3">
                {[
                  "EECP",
                  "Lipid optimization",
                  "Endothelial care",
                  "Anti-inflammatory strategies",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-200"
                  >
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Nerves */}
            <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
              <h4 className="text-2xl font-bold mb-6 text-yellow-400 flex items-center gap-3">
                <LuBrainCircuit className="w-7 h-7" /> Nerves
              </h4>
              <ul className="space-y-3">
                {[
                  "Alpha-lipoic acid",
                  "B12 optimization",
                  "Microcirculation support",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-200"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Kidneys */}
            <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
              <h4 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                <LuActivity className="w-7 h-7" /> Kidneys
              </h4>
              <ul className="space-y-3">
                {["Microalbumin monitoring", "Blood pressure optimization"].map(
                  (item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-200"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></div>{" "}
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Eyes */}
            <div className="bg-slate-800 p-8 rounded-[2rem] border border-slate-700">
              <h4 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-3">
                <Eye className="w-7 h-7" /> Eyes
              </h4>
              <ul className="space-y-3">
                {["Glycemic stability", "Routine screening"].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-200"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0"></div>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Support & Type 1 */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Heart Failure Special Support */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-blue-100 flex flex-col h-full relative overflow-hidden">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 pointer-events-none">
                <HeartPulse className="w-48 h-48 text-blue-600" />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-blue-900 flex items-center gap-3">
                <span>
                  <TbHeartPlus />
                </span>
                Special Support for Heart Failure Patients
              </h3>

              <p className="text-gray-700 font-medium mb-6">
                For patients with diabetic cardiomyopathy or heart failure:
              </p>

              <div className="bg-blue-50 p-6 rounded-2xl mb-6 border border-blue-100">
                <p className="text-blue-900 font-semibold italic">
                  A special cardiac nutritional drip protocol (15–20 sittings
                  every 3 months) may be recommended — especially when other
                  treatment options are limited.
                </p>
              </div>

              <p className="font-bold text-gray-900 mb-4">
                This protocol supports:
              </p>

              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Myocardial energy production",
                  "Circulatory stability",
                  "Reduced oxidative stress",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-800">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100/50 py-2 px-4 rounded-xl">
                  Administered strictly under physician supervision.
                </span>
              </div>
            </div>

            {/* Stem Cell / Type 1 */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-teal-900/5 border border-teal-100 flex flex-col h-full relative overflow-hidden">
              <div className="absolute -top-4 -right-4 p-8 opacity-5 pointer-events-none">
                <Microscope className="w-48 h-48 text-teal-600" />
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold mb-6 text-teal-900 flex items-center gap-3">
                <span>
                  <Dna className="w-7 h-7 text-teal-700" />
                </span>
                Advanced Cellular Therapy Option for Type 1 Diabetes
              </h3>

              <h4 className="text-xl font-bold mb-4 text-gray-800">
                Stem Cell Therapy{" "}
                <span className="text-sm font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  (Carefully Selected Clients)
                </span>
              </h4>

              <p className="text-gray-700 mb-6">
                For patients with Type 1 Diabetes, where pancreatic beta cells
                are damaged or destroyed, advanced cellular therapy options may
                be explored in collaboration with specialized centers.
              </p>

              <p className="font-bold text-gray-900 mb-4">
                Stem cell–based approaches aim to:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Support immune modulation",
                  "Promote beta-cell preservation (in early cases)",
                  "Improve metabolic stability",
                  "Reduce insulin requirement in selected clients",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800">
                    <ActivitySquare className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto bg-red-50 p-6 rounded-2xl border border-red-100">
                <p className="font-bold text-red-800 mb-3 uppercase text-sm tracking-wider">
                  Important Clarification:
                </p>

                <ul className="space-y-2 text-sm text-red-900/80 font-medium">
                  <li>• Stem cell therapy is not a guaranteed cure</li>
                  <li>
                    • Best results are seen in early-stage Type 1 diabetes
                  </li>
                  <li>• Requires strict eligibility screening</li>
                  <li>• Long-term insulin therapy may still be required</li>
                </ul>

                <p className="mt-4 text-red-800 text-sm italic font-bold border-t border-red-200 pt-3">
                  This option is considered only after comprehensive evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Patients CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-gradient-to-br from-teal-800 to-blue-900 rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            <Globe className="absolute -left-10 -bottom-10 w-64 h-64 text-white opacity-10 pointer-events-none" />

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3 relative z-10">
              <Globe className="w-7 h-7 md:w-9 md:h-9 flex-shrink-0 text-inherit" />
              Designed for Multi-National Clients
            </h2>
            <p className="text-xl md:text-2xl text-teal-100 font-light mb-12 relative z-10">
              We offer:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 relative z-10">
              {[
                "Pre-arrival online consultation",
                "2–4 week structured metabolic program",
                "Optional EECP intensive schedule",
                "IV therapy packages",
                "Airport assistance coordination",
                "Follow-up plan with your home physician",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-left flex items-start gap-3"
                >
                  <CheckCircle2 className="text-teal-300 w-5 h-5 shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-block bg-white/20 backdrop-blur-md py-4 px-8 rounded-full border border-white/30 relative z-10">
              <p className="text-lg md:text-xl font-medium italic">
                Kerala offers a calm, healing environment ideal for metabolic
                restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Footer Tagline */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-12 flex items-center justify-center gap-3">
            <Leaf className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-inherit" />
            Why Choose Tigris Valley?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20 text-left">
            {[
              "Functional + Vascular integrated approach",
              "Advanced EECP therapy",
              "Physician-supervised IV therapies",
              "Personalized metabolic plans",
              "Ethical and safety-focused protocols",
              "International patient coordination",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="bg-teal-100 p-2 rounded-full shrink-0">
                  <span className="text-teal-700 font-bold text-sm">✔</span>
                </div>
                <span className="font-bold text-gray-800 text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              We don’t just treat blood sugar.{" "}
              <br className="hidden md:block" />
              <span className="text-teal-700">
                We restore metabolic and vascular health
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* ── Consultation CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="relative rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-900 to-slate-900 p-10 md:p-14 shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <Dna className="absolute top-6 right-10 w-48 h-48 text-emerald-300" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-teal-800/60 border border-teal-700/50 text-teal-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <Phone className="w-3.5 h-3.5" /> Begin Your Consultation
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  If you or your loved one is seeking:
                </h2>
                <ul className="space-y-3 mb-8">
                  {[
                    "Natural Type 2 diabetes reversal support",
                    "HbA1c and insulin resistance improvement",
                    "Advanced vascular & cardiac protection",
                    "Structured metabolic restoration program",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/90 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-teal-200 font-medium text-sm">
                  Our team will guide you through a structured eligibility and consultation process.
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-col gap-4">
                <button
                  onClick={() => setCtaOpen(true)}
                  className="inline-flex items-center justify-center gap-3 bg-white text-teal-900 px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:bg-teal-50 transition-all duration-200 hover:-translate-y-0.5 w-full lg:w-auto whitespace-nowrap"
                >
                  <Phone className="w-5 h-5" />
                  Request a Case Review
                </button>
                <p className="text-teal-300 text-xs font-medium text-center">
                  Physician-supervised · Personalised protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={ctaOpen} onOpenChange={setCtaOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl">
          <DialogHeader className="p-0">
            <ContactInput />
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default ReverseDiabetes;