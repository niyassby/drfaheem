import React, { useState } from "react";
import useAnimationEffects from "../Util/upAnimation";

const gallery = [
  {
    title: "Workshops",
    image: [
      "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17840.jpg",
      "https://img.freepik.com/free-photo/young-woman-doctor-gp-white-medical-uniform-consult-male-patient-private-hospital-female-therapist-speak-talk-with-man-client-consultation-clinic_657921-863.jpg",
      "https://img.freepik.com/free-photo/doctor-performing-medical-research-lab_23-2149335676.jpg",
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656077.jpg",
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656056.jpg",
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656078.jpg",
    ],
  },
  {
    title: "Consultations",
    image: [
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656078.jpg",
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656056.jpg",
      "https://img.freepik.com/free-photo/front-view-doctors-checking-radiography_23-2149994406.jpg",
      "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17840.jpg",
      "https://img.freepik.com/free-photo/side-view-doctor-wearing-hazmat-suit_23-2149994391.jpg",
    ],
  },
  {
    title: "Events",
    image: [
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656077.jpg",
      "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17840.jpg",
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656078.jpg",
      "https://img.freepik.com/free-photo/accompaniment-abortion-process_23-2149656056.jpg",
      "https://img.freepik.com/free-photo/doctor-performing-medical-research-lab_23-2149335676.jpg",
      "https://img.freepik.com/free-photo/young-woman-doctor-gp-white-medical-uniform-consult-male-patient-private-hospital-female-therapist-speak-talk-with-man-client-consultation-clinic_657921-863.jpg",
    ],
  },
  {
    title: "Patient Journeys",
    image: [
      "https://img.freepik.com/premium-photo/medicine-healthcare-people-concept-smiling-doctor-with-tablet-pc-computer-young-man-patient-meeting-hospital_380164-189359.jpg",
      "https://img.freepik.com/free-photo/front-view-doctor-holding-patient-hand_23-2148352035.jpg",
      "https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg",
      "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17840.jpg",
    ],
  },
];
function Package() {
  const [tabs, setTabs] = useState(0);
  // useAnimationEffects({
  //   upSelector: '.perFectIcons',
  //   defaultUpAnimation: {
  //     opacity: 0,
  //     y: 50,
  //   }
  // });
  return (
    <div className="w-full py-14">
      {/* Card Blog */}
      <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight perFectIcons">
            In Action & Impact
          </h2>
          <p className="mt-1 text-gray-600 perFectIcons">
            With every cup of Wahd Karak, experience a velvety texture, warm
            spices, and a taste that lingers - just like the classic street-side
            Karak you love
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-3 mb-10 border-b pb-2">
          {gallery.map((item, index) => {
            return (
              <button
                className={`text-sm font-medium transition-all duration-300 hover:text-primary-600 cursor-pointer ${
                  index == tabs ? "text-primary-600" : "text-muted-foreground"
                }`}
                onClick={() => setTabs(index)}
                key={index}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-y-10 gap-y-4">
          {gallery[tabs].image.map((item, index) => {
            return (
              <div
                key={index}
                className="group  border transition-all  perFectIcons overflow-hidden  rounded-2xl relative  "
              >
                <h1 className="absolute z-10 left-5 bottom-0 group-hover:bottom-6 transition-all duration-300 opacity-0 group-hover:opacity-100 text-white text-xl font-medium">
                  {gallery[tabs].title}
                </h1>
                <div className="absolute bottom-0 w-full h-[80%]  bg-gradient-to-t from-black/60 to-transparent  z-0 transition-all duration-500 ease-in-out "></div>
                <img
                  className=" w-full h-full object-cover"
                  src={item}
                  alt=""
                  srcset=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Package;
