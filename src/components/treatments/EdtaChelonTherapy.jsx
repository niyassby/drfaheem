import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import {
  CheckCircle2,
  Activity,
  ShieldCheck,
  Droplets,
  AlertTriangle,
  Stethoscope,
  HeartPulse,
  Heart,
  ShieldAlert,
  Info,
  Syringe,
  Microscope,
  Leaf,
  UserCheck,
} from "lucide-react";

export const EDTA_Chelation_Therapy = {
  banner: {
    title: "EDTA Chelation Therapy",
    image:
      "https://burickcenter.com/wp-content/uploads/2023/05/iv-infusion-therapy-chelation.jpg",
  },
  sections: [
    {
      heading: "Introduction",
      type: "paragraph",
      content: (
        <p>
          {" "}
          At Tigris Valley, chelation therapy is administered through
          intravenous infusions of EDTA along with essential multivitamins. EDTA
          (ethylene diamine tetraacetic acid) works by binding metals in the
          bloodstream, which are then safely eliminated through the kidneys. A
          typical treatment course consists of approximately 30 infusions,
          usually given twice a week, with each session lasting around 3 to 3.5
          hours.
          <br />
          <br /> Prior to initiating therapy, a comprehensive evaluation is
          performed, including a detailed medical history (covering
          cardiovascular conditions, diabetes, and hypertension), assessment of
          liver and kidney function, and allergy screening. Patient safety is
          carefully monitored throughout the course of treatment.
          <br />
          <br /> Tigris Valley is trusted as a reliable chelation therapy centre
          in Calicut, offering an optimal blend of medical oversight and
          patient-centered, integrative care.
        </p>
      ),
    },
    {
      heading: "Treatment Information",
      type: "paragraph",
      content: (
        <p>
          Chelation therapy may help relieve cardiovascular symptoms such as
          chest pain, palpitations, and shortness of breath, particularly in
          post–heart attack patients. In selected cases, it may be considered as
          an adjunctive or alternative approach for individuals with heart block
          and as a non-surgical option for those seeking to avoid bypass
          surgery, where clinically appropriate.
          <br />
          <br /> It may also help reduce diabetes-related complications by
          improving symptoms of diabetic neuropathy and supporting the healing
          of diabetic foot ulcers.
          <br />
          <br /> By enhancing peripheral circulation, the therapy can help
          decrease leg pain, skin discoloration, and the risk of gangrene in
          individuals with compromised blood flow.
          <br />
          <br /> Chelation therapy facilitates the removal of heavy metals and
          excess calcium deposits, which may help reduce oxidative stress and
          support liver and kidney health.
          <br />
          <br /> Overall, it offers a medically supervised, non-surgical adjunct
          therapy that may enhance quality of life while potentially reducing
          the need for invasive procedures in appropriately selected patients.
        </p>
      ),
    },
    {
      heading: "Who Can Benefit",
      type: "list",
      items: [
        `Patients with cardiovascular conditions, including post–heart attack cases, individuals with angina, or those exploring non-surgical options for heart block.`,
        `People with diabetes experiencing neuropathy, diabetic foot problems, or vascular-related complications.`,
        `Individuals with known or suspected heavy metal exposure from environmental, occupational, or dietary sources.`,
        `Those seeking overall detoxification, improved blood circulation, and better metabolic health.`,
        `People across Europe, US ,GCC , Kerala and India who are looking for a trusted chelation therapy centre  that offers comprehensive medical supervision with an integrative approach.`,
      ],
    },
    {
      heading: "Who Should Avoid This Therapy",
      type: "list",
      intro:
        "Chelation therapy may not be suitable for the following individuals:",
      items: [
        "Patients with severe kidney dysfunction or renal failure , particularly when serum creatinine levels are above safe limits or when there is significantly reduced glomerular filtration rate (GFR), as EDTA is primarily excreted through the kidneys.",
        "Individuals with chronic or advanced liver disease , where impaired detoxification capacity may increase the risk of complications.",
        "Patients with uncontrolled seizure disorders or certain significant neurological conditions, unless cleared by a specialist.",
        "Individuals with hypocalcaemia (low blood calcium levels) , as EDTA can further lower calcium levels and may precipitate complications.",
        "Those with known hypersensitivity or allergy to EDTA or other chelating agents.",
        "Pregnant or breastfeeding women, unless specifically advised and closely supervised by a qualified physician.",
        "Patients with severe electrolyte imbalances or unstable cardiovascular conditions, which require stabilization prior to considering therapy.",
        "Individuals who are unable to adhere to the complete treatment protocol, including scheduled infusion sessions, follow-up evaluations, laboratory monitoring, hydration guidelines, and recommended lifestyle modifications.",
        "A thorough medical evaluation and laboratory assessment are essential before initiating therapy to ensure safety and appropriateness for each individual patient.",
      ],
    },
    {
      heading: "Why Choose Tigris Valley",
      type: "mixed",
      intro:
        "Tigris Valley is more than a treatment centre—it is a dedicated space for comprehensive, patient-centred healing. Every therapy is delivered under qualified medical supervision, with a strong emphasis on safety, clinical precision, ethical practice, and evidence-informed care.",
      features: [
        {
          title: "Personalised Care",
          description:
            "Treatment plans are individually tailored after a detailed medical evaluation, taking into account your medical history, current health status, laboratory findings, and long-term recovery goals.",
        },
        {
          title: "Integrative Approach",
          description:
            "A thoughtfully designed combination of therapies—including AYUSH modalities, Chinese acupuncture, IV nutritional therapy, ozone therapy, chelation therapy, far-infrared (FIR) sauna, and nutritional medicine—is used to support overall wellbeing and physiological balance.",
        },
        {
          title: "Expert Supervision",
          description:
            "Experienced physicians and trained therapists closely monitor all treatments to ensure safety, effectiveness, and appropriate clinical adjustments when needed.",
        },
        {
          title: "Root-Cause Focus",
          description:
            "Rather than offering temporary symptom relief, care is directed toward identifying and addressing underlying imbalances, supporting sustainable and long-term healing.",
        },
        {
          title: "Comprehensive Assessment & Monitoring",
          description:
            "Baseline investigations, periodic laboratory evaluations, and continuous clinical monitoring are conducted to ensure treatment suitability and patient safety throughout the program.",
        },
        {
          title: "Patient Education & Lifestyle Guidance",
          description:
            "Patients receive guidance on nutrition, movement, stress management, sleep optimization, and preventive strategies to help maintain results beyond the treatment period.",
        },
        {
          title: "Healing Environment",
          description:
            "A calm, professional, and restorative setting promotes relaxation, recovery, and renewed energy, supporting both physical and emotional wellbeing.",
        },
      ],
      outro:
        "This patient-focused philosophy ensures that whether the goal is detoxification, chronic disease management, cardiovascular support, or wellness optimization, Tigris Valley delivers integrative care designed to enhance vitality, resilience, and long-term health in a safe and supportive manner.",
    },
  ],
};

const ChelationTherapy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-slate-50 font-sans text-gray-900 w-full overflow-x-hidden selection:bg-blue-200 selection:text-blue-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center bg-[#F8FAFC] pt-24 pb-16 overflow-hidden">
        {/* Lightweight Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-5%] left-[-5%] w-[30rem] h-[30rem] bg-blue-100/40 blur-[60px] rounded-full"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[35rem] h-[35rem] bg-cyan-50/40 blur-[70px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 w-fit mb-6 shadow-sm">
                <Activity className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold tracking-[0.2em] text-blue-700 uppercase">
                  Advanced Clinical Detoxification
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.05] tracking-tight">
                {EDTA_Chelation_Therapy.banner.title}
              </h1>

              {/* Subtitle */}
              <div className="pl-6 border-l-4 border-blue-500">
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                  A comprehensive, medically supervised approach to systemic
                  detoxification and cardiovascular support.
                </p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 relative order-1 lg:order-2 h-[50vh] lg:h-[75vh] w-full"
            >
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-lg relative border-4 border-white bg-white">
                <img
                  src={EDTA_Chelation_Therapy.banner.image}
                  alt={EDTA_Chelation_Therapy.banner.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
              </div>

              {/* Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 pr-6 rounded-2xl shadow-md border border-slate-100 hidden md:flex items-center gap-3 z-20">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                    Medically Supervised
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Integrative Care Protocol
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro & Treatment Info Split Section */}
      <section className="py-18 bg-white relative overflow-hidden border-b border-slate-100 selection:bg-blue-100">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-blue-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Upper Text Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ">
            {/* Introduction */}
            <motion.div {...fadeIn} className="space-y-6 pt-4">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
                  <Syringe className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  {EDTA_Chelation_Therapy.sections[0].heading}
                </h2>
              </div>

              <div className="text-lg text-slate-600 leading-relaxed space-y-4 font-medium">
                {EDTA_Chelation_Therapy.sections[0].content}
              </div>
            </motion.div>

            {/* Treatment Information Card */}
            <motion.div
              {...fadeIn}
              className="bg-slate-900 p-8 md:p-12 rounded-[1.5rem] text-white shadow-2xl relative overflow-hidden lg:sticky lg:top-24"
            >
              {/* Inner background decoration */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-6">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <HeartPulse className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {EDTA_Chelation_Therapy.sections[1].heading}
                  </h3>
                </div>

                <div className="text-slate-300 leading-relaxed space-y-4 font-normal">
                  {EDTA_Chelation_Therapy.sections[1].content}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* "Who Can Benefit" - Perfect 3x2 Grid Layout (6 Items) */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {EDTA_Chelation_Therapy.sections[2].heading}
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* 6 Cards - Perfect 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              ...EDTA_Chelation_Therapy.sections[2].items,
              // Added a 6th point to complete the 3x2 grid perfectly
              "Individuals focused on proactive anti-aging and longevity, seeking to preserve vascular elasticity and optimize long-term cellular health.",
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="bg-slate-50 p-8 rounded-[1.5rem] border border-slate-200 hover:bg-white hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)]  duration-300 flex flex-col items-start gap-5 group"
              >
                {/* Interactive Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-blue-100/50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                {/* Content Text */}
                <p className="text-slate-700 text-lg font-medium leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contraindications - Modern Rectangular Grid Layout */}
      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Section Header */}
          <motion.div
            {...fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-100 shadow-sm">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              {EDTA_Chelation_Therapy.sections[3].heading}
            </h2>
            <p className="text-lg md:text-xl font-medium text-slate-600">
              {EDTA_Chelation_Therapy.sections[3].intro}
            </p>
          </motion.div>

          {/* 3x3 Perfect Rectangular Grid (9 Items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {EDTA_Chelation_Therapy.sections[3].items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_rgba(239,68,68,0.08)] hover:-translate-y-0 transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 shrink-0 border border-slate-100 group-hover:bg-red-100 group-hover:border-red-100 transition-colors duration-300">
                  <ShieldAlert className="w-6 h-6 text-red-400 group-hover:text-red-500 transition-colors duration-300" />
                </div>

                {/* Content Text */}
                <p className="text-slate-700 text-base md:text-lg font-medium leading-relaxed flex-grow">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-cyan-500 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Heading */}
          <motion.div
            {...fadeIn}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              {EDTA_Chelation_Therapy.sections[4].heading}
            </h2>

            <p className="text-xl text-blue-100 leading-relaxed font-light">
              {EDTA_Chelation_Therapy.sections[4].intro}
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EDTA_Chelation_Therapy.sections[4].features.map((feature, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
              >
                <h4 className="text-2xl font-bold text-blue-300 mb-4">
                  {feature.title}
                </h4>

                <p className="text-slate-300 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}

            {/* Text block in remaining row */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-3 bg-blue-600/90 p-10 md:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden"
            >
              <p className="text-lg md:text-xl font-medium text-white leading-relaxed text-center max-w-4xl mx-auto">
                This patient-focused philosophy ensures that whether the goal is
                detoxification, chronic disease management, cardiovascular
                support, or wellness optimization, Tigris Valley delivers
                integrative care designed to enhance vitality, resilience, and
                long-term health in a safe and supportive manner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChelationTherapy;
