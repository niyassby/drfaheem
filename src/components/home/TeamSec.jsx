import React from "react";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import useAnimationEffects from "../Util/upAnimation";
import { HiArrowSmallRight } from "react-icons/hi2";
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/okm.png'
import team5 from '../../assets/drSuraj.jpg'
import team6 from '../../assets/Gafoor.jpg'
import team7 from "../../assets/lenny2.jpg";
import { AboutTeam } from "./AboutTeam";
import DrHaseenaBio from "./DrHaseena";
import ProfilePage from "./ProfilePageZulekha";
import { JoinTeam } from "./JoinTeam";
import Annaverwall from "./Annaverwaal";
import DrOKMAbdurahman from "./DrOKMAbdurahman";
import DrSoorajSankar from "./DrSoorajSankar";
import DrLenny from "./DrLenny";
import DrAbdulgafoor from "./DRAbdulgafoor";

const team = [
  {
    name: "DR Lenny Da Costa",
    designation: "",
    image: team7,
    description: <DrLenny />,
  },
  {
    name: "Dr. Sooraj Sankar",
    designation: "",
    image: team5,
    description: <DrSoorajSankar />,
  },
  {
    name: "Dr. OKM Abdurahman",
    designation: "Lifestyle Physician & Unani Consultant",
    image: team4,
    description: <DrOKMAbdurahman />,
  },
  {
    name: "Dr. Abdul Gafoor",
    designation: "",
    image: team6,
    description: <DrAbdulgafoor/>,
  },
  {
    name: "Dr. Haseena Chokkiyil",
    designation: "Designation",
    image: team1,
    description: <DrHaseenaBio />,
  },
  {
    name: "Dr. Azibunnisha",
    designation: "",
    image:
      "https://st4.depositphotos.com/9998432/22670/v/450/depositphotos_226700620-stock-illustration-person-gray-photo-placeholder-woman.jpg",
    description: "",
  },
  {
    name: "Anna Verwaal",
    designation: "Designation",
    image: team2,
    description: <Annaverwall />,
  },
  {
    name: "Zulekha Shakoor Rajani    ",
    designation: "Counselling & Spiritual Psychologist",
    image: team3,
    description: <ProfilePage />,
  },
];

function TeamSec({ teamPage = false }) {
  // useAnimationEffects({
  //   upSelector: '.qsection',
  //   defaultUpAnimation: {
  //     opacity: 0,
  //     y: 50, 
  //   }
  // });
  return (
    <div id="Team" className="">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-0 -mt-24 mx-auto">
        {/* <div className="w-full flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl qsection">
            Meet Our Experts Panel
          </h2>
          <p className="mb-7 max-w-3xl text-sm text-center text-gray-500 qsection">
            {" "}
            A committed team led by Dr. Faheem Najeeb, working together to blend modern medicine and integrative care for healing and wellness.

          </p>
        </div> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-y-8 gap-4 qsection mt-5">
          {team.map((team, index) => {
            return (
              <div key={index} className="flex group flex-col items-cen ter justify-center  relative">
                <div className="w-[280px] h-80 overflow-hidden relative">
                  <div className="absolute z-20 bottom-12 left-5 flex gap-1.5 ">

                  </div>
                  <div className="absolute w-full h-[80%] bottom-0  bg-gradient-to-t from-black/50 opacity-0 group-hover:opacity-100 transition-all to-transparent left-0 z-10"></div>
                  <img
                    className="h-full w-full object-cover   transition-all duration-300 qsection"
                    src={team.image}
                    alt="image"
                  />
                </div>
                <h1 className="text-primary-700 font-medium text-lg  mt-2">{team.name}</h1>
                <AboutTeam data={team} />
              </div>
            );
          })}

        </div>
        {/* <div className="mt-12 felx items-center justify-center max-w- 4xl mx-auto">
           <div className="flex group w-full h-full  flex-col items-cen ter justify-center ">
              <div className="w-full  h-full   flex flex-col items-center p-6">
                <p className=" mb-3 font-light">Discover opportunities to grow, contribute, and make a difference with Dr. Faheem Najeeb’s vision-driven team.</p>
                <JoinTeam/>
              </div>
              
             </div>
        </div> */}
      </div>
    </div>
  );
}

export default TeamSec;
