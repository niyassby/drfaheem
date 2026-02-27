import Footer from "@/components/Navbar/Footer";
import TeamSec from "@/components/home/TeamSec";
import React from "react";

import useAnimationEffects from "@/components/Util/upAnimation";
import pattern from "../assets/pattern.png"
import team from "../assets/teammain.jpg"

function Team() {
  return (
    <div>
      <AboutHeader />
      <div>
        <div className="max-w-[65rem] aspect-video mx-auto  rounded-2xl border overflow-hidden">
            <img src={team} className="w-full h-full object-cover hover:scale-105 transition-all duration-500" alt="" />
        </div>
      </div>
      <TeamSec />
      <Footer />
    </div>
  );
}

export default Team;


function AboutHeader() {
  useAnimationEffects({
    upSelector: '.head',
    defaultUpAnimation: {
      opacity: 0,
      y: 40, 
    }
  });
  return (
    <div className='w-full relative'>
      <div className="absolute w-full h-full inset-0 bg-[linear-gradient(to_right,#f0f0f0,_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0,_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div style={{backgroundImage: `url(${pattern})`}} className={`absolute w-full h-full inset-0 opacity-15 bg-repeat bg-[size:60px_60px]`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-backgr ound via-transparent to-background "></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-backg round "></div>
        <div className='max-w-[85rem] min-h-[300px] relative md:min-h-[400px] mx-auto flex flex-col items-center justify-center py-3 px-4'>
        <h2 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl ">
          Meet our team
          </h2>
          {/* <p className="mt-4 text-lg text-center text-gray-500">We are committed to providing the best quality products and services to our customers.</p> */}
          <p className="mb-7 max-w-3xl text-sm text-center text-gray-500 ">
            {" "}
            A committed team led by Dr. Faheem Najeeb, working together to blend modern medicine and integrative care for healing and wellness.

          </p>
         
        </div>        
    </div>
  )
}
