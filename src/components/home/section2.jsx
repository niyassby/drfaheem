import React from "react";
import useAnimationEffects from "../Util/upAnimation";
import img from '../../assets/faheemDr2.webp'

function Section2() {
  useAnimationEffects({
    upSelector: ".sectionBg",
    defaultUpAnimation: {
      opacity: 0,
      y: 40,
    },
  });
  return (
    <div className="w-full min-h-screen flex items-center ">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-20 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div className="w-full h-full sectionBg">
            <img
              className="rounded-xl w-full h-full object-cover"
              src={img}
              alt="Features Image"
            />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-1 md:space-y-3">
                
                <h2 className="font-bold text-3xl lg:text-4xl text-primary-600 sectionBg">
                Dr. Faheem Najeeb 
                </h2>
                <p className=" sectionBg">
                Functional Medicine Specialist | Oncology Support Expert | Innovative Physician
                </p>
                <div className="text-gray-700 text-lg sectionBg space-y-2">
                  <p className="sectionBg">

                  Dr. Faheem Najeeb is a highly qualified and experienced physician whose medical journey began in Emergency Medicine, where he built a strong foundation in acute care through years of frontline experience. Driven by a deeper calling to understand the root causes of illness, he transitioned into Functional and Integrative Medicine, with specialized focus areas in Metal Toxicology and Medical Oncology Support.

                  </p>
                  <p className="sectionBg">

                  He currently serves as the Medical Director and heads the Department of Functional and Integrative Medicine at Tigris Valley, located in the inspiring environment of Markaz Knowledge City, Calicut. Dr. Faheem’s mission is to blend the best of modern medical science with time-tested wellness practices—offering therapies that not only treat disease but also restore vitality, enhance immunity, and prevent future illness.

                  </p>
                  <p className="sectionBg">
                  Dr. Faheem worked under a pioneer in Nutritional and Precision Medicine, at Wellness Solutions Pvt. Ltd., Cochin, gaining valuable experience in a cutting-edge field. He also played a pivotal role in founding Aham Palliative Care at Lakshmi Hospital, Aroor, where he integrated wellness-focused practices into palliative and geriatric care, significantly improving patients’ quality of life.


                  </p>
                  <p className="sectionBg">
                  His current focus is on supporting cancer patients—particularly in the often-overlooked phases of pre-chemotherapy preparation and post-chemotherapy rehabilitation. His personalized integrative interventions are designed to minimize chemotherapy’s side effects and improve long-term outcomes. Additionally, he provides second opinions and alternative treatment strategies for cardiac patients, especially those exploring non-invasive options to bypass surgery or stenting (e.g., alternatives to CABG).


                  </p>
                  <p className="sectionBg">
                  Currently pursuing a PG Diploma in Medical Oncology from the University of Buckingham (UK), Dr. Faheem continues to advance his ability to support cancer patients with evidence-informed, integrative care plans.

Whether you're facing a serious diagnosis or seeking proactive wellness, Dr. Faheem partners with his patients to create personalized, science-backed, and empowering treatment paths—redefining what it means to truly heal and thrive.

                  </p>
                </div>
                {/* <button className="bg-gradient-to-tr sectionBg from-20% cursor-pointer border shadow-none hover:shadow-[0px_0px_40px_13px_rgba(42,149,173,0.3)] border-primary-500 hover:border-secondary-500 from-primary-500 to-secondary-500 text-white px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ">
              {" "}
              More about
            </button> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
