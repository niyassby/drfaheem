import AboutHeader from "@/components/About/AboutHeader";
import MyJourney from "@/components/About/MyJourney";
import StorySec from "@/components/About/StorySec";
import Vision from "@/components/About/Vision";
import WhoIAm from "@/components/About/WhoIAm";
import Footer from "@/components/Navbar/Footer";
import Section2 from "@/components/home/section2";
import React from "react";

const content = [
  {
    head: "Current Roles ",
    img: "",
    items: [
      `Medical Director of Tigris Valley`,
      `Head of Functional & Integrative Medicine, Tigris Valley, Markaz Knowledge City `,
      `Active in designing patient centered healing programs`,
    ],
  },
  {
    head: "Credentials & Collaborations",
    img: "",
    items: [
      // `PG Diploma in Medical Oncology0, University of Buckingham (UK) – Ongoing `,
      // `Trained with Dr. A. Sreekumar, expert in Nutritional & Precision Medicine `,
      // // `Founder of wellness-integrated palliative model at Aham Palliative Care `,
      // `Active collaborator with healthcare professionals and research institutions on 
      // preventive and integrative health models`,
      `ER Physician RCGP (UK)`,
      `Clinical Metal Toxicologist (Malaysia)`, `Cert. Palliative Care`, ` Functional Medicine practitioner.`
    ],
  },
  {
    head: "My Philosophy",
    head2: "I believe healing goes beyond medicines and procedures it’s about supporting the person as a whole.",
    disc: `It’s not just about treating a condition, but restoring the entire system—mind, body, and 
    function`,
    img: "",
    items: [
      ` Root-cause diagnosis over symptom management `,
      `Personalized treatment plans based on genetics, lifestyle, and environment `,
      ` Patient empowerment through education and preventive care `,
      ` A vision for medicine that heals, uplifts, and transforms `,
    ],
  },
  {
    head: "Specializations ",
    head2: "Specializations to treatment",
    // disc: `My clinical interests are rooted in *preventive and restorative wellness*, focusing on both
    // disease management and long-term vitality:`,
    img: "",
    items: [
      ` Integrative Medical Oncology`,
      `Advanced Palliative Care`,
      ` Preventive Cardiology 
      Neuromuscular Rehabilitation `,
      ` Ozone & Chelation Therapy `,
      `Wellness & Preventive Medicine`,
      `Metabolic Assessment & Genomic Analysis`,
      `Colon Hydrotherapy`,
      `IV Nutritional therapy`,
    ],
  },
];

const data = {
  head: "Who am I",
  disc: `With a foundation in emergency medicine and having worked in different aspects of medical field over a period of time, I have evolved into a practitioner of functional and integrative medicine, aiming to to bring balance, vitality, health through personal care`,
  img: "https://img.freepik.com/free-photo/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass-curtain-wall-with-frame_1339-6363.jpg",
};

function About() {
  return (
    <div>
      {/* <AboutHeader /> */}
      <WhoIAm data={data} />
      <Section2 />
      {/* <MyJourney/> */}
      <div>
        <div className="max-w-[85rem] my-20 mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {content.map((item, index) => {
            return <StorySec key={index} index={index} item={item} />;
          })}
        </div>
      </div>
      <StorySec />
      {/* <Vision/> */}
      <Footer />
    </div>
  );
}

export default About;
