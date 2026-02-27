
import React from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import useAnimationEffects from "../Util/upAnimation";
import { programsTitle } from "../Util/programs";

function IconSection() {
  useAnimationEffects({
    upSelector: ".iconsSec",
    defaultUpAnimation: {
      opacity: 0,
      y: 40,
    },
  });

  return (
    <div id="programs"  className="min-h-[1000px] flex items-center flex-col justify-center gap-10 py-20 px-5">
      <h1 className="mb-5 text-3xl font-semibold text-primary-600">Programs & Specialized Services</h1>
      <div className="w-full max-w-[75rem] mx-auto icon-grid-container  grid md:grid-cols-4  border-secondary-600 border-b border-l">
        {programsTitle?.map((item, index) => {
          return (
            <div
              key={index}
              className=' transition-all duration-500 w-full  border-secondary-600 border-r border-t group relative flex flex-col items-start px-6 py-10 md:py-14 h-full md:min-h-60  after:content-[""] after:absolute after:top-0 after:w-0 after:h-1  after:bg-secondary-600 md:after:inset-0 max-md:after:bottom-0 after:left-0  after:transition-all after:duration-500 hover:after:w-full overflow-hidden '
            >
              <div className="mb-2 iconsSec text-white bg-gradient-to-tl from-primary-500 to-secondary-500 flex items-center justify-center size-14 rounded-full  group-hover:-translate-y-2 transition-all duration-500">
                <item.icon className="w-8 h-8" />
              </div>
              <h2  className="text-xl iconsSec textAnim font-semibold  group-hover:text-secondary-600 transition-all duration-500">
                {item.titel}
              </h2>
              <Link
                to={item.link}
                className="text-sm iconsSec font-medium text-secondary-600 flex items-center gap-1 mt-4 transition-all duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary-600 after:transition-all after:duration-500 hover:after:w-full"
              >
                Explore More
                <HiArrowSmallRight className="group-hover:translate-x-1 transition-all duration-300" strokeWidth={0.5} />
              </Link>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default IconSection;
