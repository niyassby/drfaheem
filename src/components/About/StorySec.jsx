import React from "react";
import useAnimationEffects from "../Util/upAnimation";
import { Check } from "lucide-react";

function StorySec({item, index}) {

  useAnimationEffects({
    upSelector: ".story",
    defaultUpAnimation: {
      opacity: 0,
      y: 50,
    },
  });

  return (
    <div className="w-full ">
      <div className="">
        <div className="">
          <div className={` space-y-3`}>
            
            {item?.head&&<h1 className="text-2xl mt-3 font-semibold text-primary-700 story">
              {item.head}
            </h1>}
            {item?.head2&&<h1 className=" font-semibold text-gray-600 story">
              {item.head2}
            </h1>}
            {item?.disc&&<p className=" text-black/70  story max-w-lg">
              {item?.disc}
            </p>}
            {item?.items && <div className="space-y-2 mt-3">
              {item?.items.map((item, index) => {
                return <div key={index} className="flex items-start gap-2 story" >
                  <span className=""><Check size={16} className="bg-green-100 text-green-600 p-0.5 rounded-full"/></span>
                  <p className="text-sm text-muted-foreground max-w-md">{item}</p>
                </div>
              })
              }
              </div>}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySec;
