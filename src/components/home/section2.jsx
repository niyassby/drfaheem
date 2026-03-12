import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle2, Sparkles, Stethoscope } from "lucide-react";
import img from "../../assets/faheemDr2.webp";

function Section2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  console.log("abc");
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-10  bg-[#F8F9FA] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-indigo-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* --- LEFT COLUMN: Sticky Profile Card --- */}
          <div className="lg:col-span-5 lg:sticky lg:top-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white group bg-white"
            >
              <div className="relative aspect-[4/6] overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                  src={img}
                  alt="Dr. Faheem Najeeb"
                />
                {/* Embedded Gradient Overlay for Header */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase w-fit mb-4 border border-white/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Our
                    Leadership
                  </div> */}
                  <h2 className="text-4xl font-black text-white mb-2 leading-tight">
                    Dr. Faheem Najeeb
                  </h2>
                  <p className="text-indigo-100 font-medium leading-relaxed">
                    Functional Medicine Specialist | Oncology Support Expert |
                    Innovative Physician
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-900 p-6 rounded-[1.5rem] flex items-center justify-between shadow-xl border border-slate-800 hover:bg-slate-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">
                    Get in touch
                  </p>
                  <p className="text-white font-bold text-lg tracking-wide">
                    +91 9747 61 62 63
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="font-bold text-slate-900 bg-indigo-50/50 p-6 rounded-2xl border-1 border-indigo-600"
            >
              Dr. Faheem’s approach goes beyond symptom management. He focuses
              on{" "}
              <em className="text-indigo-800">
                restoring physiological balance, enhancing recovery, and
                improving long-term health outcomes
              </em>{" "}
              through personalized, integrative, and patient-centered care.
            </motion.p>
          </div>

          {/* --- RIGHT COLUMN: Biographical Content --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 text-slate-700 text-lg leading-relaxed pt-4 lg:pt-0"
          >
            <motion.div
              variants={itemVariants}
              className="border-b border-slate-200 pb-6 mb-8"
            >
              <h3 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                <Stethoscope className="w-8 h-8 text-indigo-600" />
                <p>Dr. Faheem Najeeb – Profile</p>
              </h3>
            </motion.div>

            <motion.p variants={itemVariants}>
              Driven by a deeper calling to understand the root causes of
              illness,{" "}
              <em>
                Dr. Faheem Najeeb, after having many years of experience in{" "}
                <strong>Emergency Medicine</strong>, transitioned into{" "}
                <strong>Functional and Integrative Medicine</strong>, with
                special interest in <strong>Nutritional Oncology</strong>,
                Advanced Palliative Care, and Metal Toxicology. He currently
                serves as the{" "}
                <strong>
                  Medical Director and Head of Functional and Integrative
                  Medicine at Tigris Valley
                </strong>
              </em>
              , where he focuses on personalized, science-based approaches to
              improve patient health and recovery.
            </motion.p>

            <motion.p variants={itemVariants}>
              To further strengthen his expertise in cancer care, Dr. Faheem has
              completed a{" "}
              <em>
                PG Diploma in Medical Oncology from the University of Buckingham
              </em>
              , which enables him to guide cancer patients more effectively in
              making informed decisions regarding their treatment and supportive
              care.
            </motion.p>

            <motion.p variants={itemVariants}>
              Earlier in his career, he worked closely with pioneers in{" "}
              <em>Nutritional and Precision Medicine</em>, an experience that
              deepened his understanding of integrating evidence-based nutrition
              and functional medicine into disease management and recovery.
            </motion.p>

            <motion.p variants={itemVariants}>
              He also played a key role in establishing{" "}
              <em>Aham Palliative Care at Lakshmi Hospital, Aroor</em>, where he
              helped introduce wellness medicine into palliative and geriatric
              care, with the goal of improving patients’ quality of life through
              integrative approaches.
            </motion.p>

            <motion.p variants={itemVariants}>
              Dr. Faheem’s primary clinical focus is{" "}
              <em>
                cancer supportive care, particularly{" "}
                <strong>
                  pre-chemotherapy preparation and post-chemotherapy
                  rehabilitation
                </strong>
                , aiming to reduce treatment-related side effects and improve
                patient outcomes. He also provides{" "}
                <strong>second opinions for cancer patients</strong>, as well as{" "}
                <strong>
                  integrative treatment options for cardiac patients
                </strong>
                , especially for those seeking alternatives to procedures such
                as{" "}
                <strong>
                  CABG (Coronary Artery Bypass Grafting) and coronary stenting
                </strong>
              </em>
              .
            </motion.p>

            {/* Structured Practice Areas Grid */}
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm my-10"
            >
              <p className="font-bold text-slate-900 mb-6 text-xl">
                His areas of clinical practice include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Functional & Integrative Medicine",
                  "Nutritional Oncology",
                  "Advanced Palliative Care",
                  "Preventive Cardiology",
                  "Neuromuscular Rehabilitation",
                  "Regenerative Medicine",
                  "Diabetic Reversal Programs",
                  "Autoimmune Disorders",
                  "Chelation & Medical Ozone Therapy",
                  "Metabolic Assessment & Detox Therapies",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
{/* 
            <motion.p
              variants={itemVariants}
              className="font-bold text-slate-900 bg-indigo-50/50 p-6 rounded-2xl border-1 border-indigo-600"
            >
              Dr. Faheem’s approach goes beyond symptom management. He focuses
              on{" "}
              <em className="text-indigo-800">
                restoring physiological balance, enhancing recovery, and
                improving long-term health outcomes
              </em>{" "}
              through personalized, integrative, and patient-centered care.
            </motion.p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
