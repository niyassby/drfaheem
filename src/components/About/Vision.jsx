import { Target02Icon, VisionIcon } from "hugeicons-react";
import React from "react";
import useAnimationEffects from "../Util/upAnimation";

function Vision() {
  useAnimationEffects({
    upSelector: ".Mission",
    defaultUpAnimation: {
      opacity: 0,
      y: 40,
    },
  });
  return (
    <div className="py-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full py-12 md:py-16 px-10 min-h-52 border Mission border-green-700 rounded-4xl grid md:grid-cols-2 gap-x-4 gap-y-6 ">
          <div className="flex flex-col justify-center items-center text-center">
            <VisionIcon strokeWidth={1} size={50} className="mb-2 Mission" />
            <h1 className="text-3xl mb-3 font-bold text-center text-zinc-800 Mission relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-3/5 after:h-0.5 after:bg-green-700 ">
              Our Vision
            </h1>
            <p className="text-sm text-muted-foreground Mission">
              Our goal is to provide the best quality and reasonable price with
              easy making karak tea experience for our customers. Truly Teas
              wants to continue the trend of providing healthy beverage options
              and by combining drinking excellent teas with their daily
              lifestyle. We want to change the way people see and think about
              tea.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <Target02Icon strokeWidth={1} size={50} className="mb-2 Mission" />
            <h1 className="text-3xl mb-3 font-bold text-center text-zinc-800 Mission relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-3/5 after:h-0.5 after:bg-green-700 ">
              Our Mission
            </h1>
            <p className="text-sm text-muted-foreground Mission">
              Our mission is to provide our customers with the best tasting, all
              natural, Organic teas for their everyday lives. At Truly Teas, we
              stay true to our word by always providing the best quality
              experience, customer service, and tea.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
