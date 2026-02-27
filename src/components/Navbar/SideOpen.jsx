import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { useRef, useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export function SideOpen() {
  const [isOpen, setOpen] = useState(false);
  const navRef = useRef();
  const splits = useRef([]);
  const animations = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    // Clear previous animations and splits
    animations.current.forEach(anim => anim.kill());
    splits.current.forEach(split => split.revert());
    animations.current = [];
    splits.current = [];

    if (isOpen) {
      setIsVisible(true);
      const links = gsap.utils.toArray(".animate-link");
      
      links.forEach((link, index) => {
        const split = new SplitText(link, {
          type: "chars, words, lines",
          mask: "lines",
          charsClass: "char",
        });
        splits.current.push(split);

        const anim = gsap.from(split.chars, {
          opacity: 0,
          y: 100,
          duration: 0.6,
          ease: "back.out(1)",
          stagger: 0.05,
          delay: 0.3 * index,
        });

        animations.current.push(anim);
      });
    } else {
      const links = gsap.utils.toArray(".animate-link");
      let completedAnimations = 0;
      const totalLinks = links.length;
      
      links.reverse().forEach((link, index) => {
        const split = new SplitText(link, {
          type: "chars, words, lines",
          mask: "lines",
          charsClass: "char",
        });
        splits.current.push(split);

        const anim = gsap.to(split.chars, {
          opacity: 0,
          y: 100,
          x: -10,
          duration: 0.3,
          ease: "back.in(1)",
          stagger: 0.03,
          delay: 0.1 * index,
          onComplete: () => {
            completedAnimations++;
            if (completedAnimations === totalLinks) {
              // Only hide the div after all animations complete
              setIsVisible(false);
            }
          }
        });

        animations.current.push(anim);
      });
    }

    return () => {
      animations.current.forEach(anim => anim.kill());
      splits.current.forEach(split => split.revert());
    };
  }, { scope: navRef, dependencies: [isOpen] });

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button 
        onClick={() => setOpen(!isOpen)} 
        className="bg-foreground relative z-10 p-1.5 rounded-full"
      >
        <HiMiniBars3CenterLeft className="text-white cursor-pointer" size={25} />
      </button>
      <div 
        className={`fixed h-full right-0 top-0 flex items-center justify-center bg-foreground z-0 transition-all duration-500 origin-right overflow-hidden w-full ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <div ref={navRef} className="flex flex-col gap-3 text-2xl font-medium text-white">
          <NavLink onClick={handleClose} to='/' className="animate-link hover:translate-x-2 transition-all duration-300">Home</NavLink>
          <NavLink onClick={handleClose} to='/about' className="animate-link hover:translate-x-2 transition-all duration-300">About</NavLink>
          <NavLink onClick={handleClose} to='/team' className="animate-link hover:translate-x-2 transition-all duration-300">Team</NavLink>
        </div>
      </div>
    </div>
  );
}