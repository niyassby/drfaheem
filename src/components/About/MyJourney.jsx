import React from "react";
import useAnimationEffects from "../Util/upAnimation";
import { SecurityCheckIcon } from "hugeicons-react";
import img from '../../assets/drFaheem3.webp'

const data = {
  head: "My Journey",
  disc: `From emergency rooms to wellness clinics, my path has been guided by a simple belief: 
    medicine should heal beyond the surface.`,
  img: img,
  items: [
    `Began my career in emergency medicine, learning the urgency and precision of 
      acute care.`,
    `Transitioned into Functional Medicine after witnessing recurring patient struggles with 
      chronic illnesses. `,
    `Trained under Dr. A. Sreekumar, a leader in Nutritional and Precision Medicine, 
      which reshaped my understanding of disease and healing.`,
    `Introduced wellness-based palliative care at Lakshmi Hospital, Aroor. `,
    `Currently pursuing a PG Diploma in Medical Oncology to bridge integrative wellness 
      with advanced cancer care.`,
  ],
};

function MyJourney() {
  useAnimationEffects({
    upSelector: ".story",
    defaultUpAnimation: {
      opacity: 0,
      y: 70,
    },
  });
  return (
    <div>
      {/* Icon Blocks */}
      <div className="max-w-[85rem] px-4 py-10 grid md:grid-cols-2 sm:px-6 lg:px-8 lg:py-14 mx-auto gap-10">
       
        <div className="max-w-2xl mx-auto">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
                {data.head}
              </h2>
              <p className="mt-3 text-gray-800 dark:text-neutral-400">
              {data.disc}
              </p>
            </div>

            <div className="space-y-4 ">
              {/* Icon Block */}
              {data?.items?.map((item, index) =>{
                return (

              <div key={index} className="flex gap-x-5 sm:gap-x-8">
                <SecurityCheckIcon className="shrink-0 mt-2 size-6 text-gray-800 dark:text-white"/>
                
                <div className="grow">
                  {/* <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                    High quality Co-Living spaces
                  </h3> */}
                  <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    {item}
                  </p>
                </div>
              </div>
                )
              })}
              {/* End Icon Block */}

             
            </div>
          </div>
          {/* End Grid */}
        </div>
        <div className="w-full h-full min-h-80 rounded-lg overflow-hidden">
            <img src={data.img} className="w-full h-full object-cover hover:scale-110 transition duration-500" alt="" />
        </div>
      </div>
      {/* End Icon Blocks */}
    </div>
  );
}

export default MyJourney;
