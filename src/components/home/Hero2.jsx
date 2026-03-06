import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import img from "../../assets/faheemDr3.jpg"; 
import pattern from "../../assets/pattern.png"

gsap.registerPlugin(ScrollTrigger, SplitText);
const content = {
  title: " Helping you be the healthiest",
  title2: "version of yourself",
  name: "Dr. Faheem Najeeb ",
  des: "MBBS, DEM (UK), CMT (Malaysia), Cert. Palliative Care",
};

const Hero2 = () => {
    const [isFinish, setFinish]=useState(true)
    const heroRef = useRef();
  // useGSAP(() => {
  //   // Select all elements with class 'animate-text'
  //   const textElements = gsap.utils.toArray(".animate-text");

  //   textElements.forEach((text, index) => {
  //     const split = new SplitText(text, {
  //       type: "chars, words, lines",
  //       mask: 'words',
  //       charsClass: "char",
  //     });

  //     gsap.from(split.chars, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.6,
  //       ease: "back.out(1)",
  //       stagger: 0.05,
  //       delay: 0.5 ,
  //       onComplete: () => {
  //           if(index == 3){
  //               setFinish(true)
  //           }
  //       }
  //     });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, { scope: heroRef });

  return (
    <div ref={heroRef} className="w-full h-screen overflow-hidden md:p x-16 md:p y-10  bg-[#fefcf6] border-b">
    <div className='w-full h-full bg-for eground bo rder overflow-hidden relative round ed-3xl'>
      {/* <div className="absolute z-0 size-60 bg-secondary-500 rounded-full blur-2xl opacity-30"></div> */}
      <div className="absolute w-full h-full inset-0 bg-[linear-gradient(to_right,#f0f0f0,_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0,_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div style={{backgroundImage: `url(${pattern})`}} className={`absolute w-full h-full inset-0 opacity-20 bg-repeat bg-[size:60px_60px]`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background "></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background "></div>
      
      <section className="w-full relative z-10 grid grid-cols-1 max-md:grid-rows-2 md:grid-cols-2  h-full">
        <div className="w-full h-full row-span-1 col-span-1  flex flex-col items-start md:justify-center order-2 md:order-1 md:pl-6 xl:pl-28 2xl:pl-40 p-6">
          <h2 className="animate-text font-bold text-primary-500 text-2xl md:text-7xl main-font">
            {content.title}
          </h2>
          <h2 className="animate-text font-bold text-secondary-500 text-2xl md:text-7xl main-font">
            {content.title2}
          </h2>
          <h2 className="animate-text font-medium text-foreground mt-3 md:mt-6 text-xl md:text-3xl main-font">
            {content.name}
          </h2>
          <h2 className="animate-text font-light text-foreground text-sm md:text-lg main-font">
            {content.des}
          </h2>
          <div className={`flex max-md:flex-col gap-2 mt-5 transition-all duration-500 ${isFinish ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            
            {/* <button className="bg-gradient-to-tr from-20% cursor-pointer border shadow-none hover:shadow-[0px_0px_40px_13px_rgba(42,149,173,0.3)] border-primary-500 hover:border-secondary-500 from-transparent  text-foreground  px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ">
              {" "}
              Explore My Approach
            </button> */}
            <a href="https://wa.me/919072661149">
            <button className="bg-gradient-to-tr from-20% cursor-pointer border shadow-none hover:shadow-[0px_0px_40px_13px_rgba(42,149,173,0.3)] border-primary-500 hover:border-secondary-500 from-primary-500 to-secondary-500 text-white px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ">
              {" "}
              Book a Consultation
            </button>
            </a>
          </div>
        </div>
        <div  className="w-full h-full overflow-hidden col-span-1 relative order-1 md:order-2 z-20 ">
          <img src={img} className="object-cover w-full h-full object-center mt-16" alt="" />
        </div>
      </section>
      
    </div>
    </div>
  );
};

export default Hero2;
