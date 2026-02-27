import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img from "../../assets/Bmok.png";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComp = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const element = boxRef.current;

    if (element) {
      const animation = gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "50% 50%",
            endTrigger: "#pin-windmill-wrap",
            end: "bottom 50%",
          scrub: 1,
          pin: true,
          markers: true, // Remove in production
        },
        x: 400,
        // rotate: 900,
        // duration: 2,
        
      });

      return () => {
        animation.kill();
      };
    }
  }, []);

  return (
    <div id="pin-windmill-wrap" className="w-full min-h-screen flex flex-col items-center">
      <div ref={boxRef} className="">
        <img src={img} className="w-96" alt="" />
      </div>
      <div className="w-full h-screen bg-gray-100"></div>
    </div>
  );
};

export default ScrollTriggerComp;
