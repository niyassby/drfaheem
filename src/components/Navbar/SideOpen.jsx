import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { useRef, useState } from "react";
import { HiMiniBars3CenterLeft, HiXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { tabs, spProgramsTitle, welnessSolutions, otherLinks } from "../Util/navData";
import { programsTitle } from "../Util/programs";

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
          y: 50,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.02,
          delay: 0.05 * index,
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
          y: 50,
          duration: 0.2,
          ease: "power2.in",
          stagger: 0.01,
          delay: 0.03 * index,
          onComplete: () => {
            completedAnimations++;
            if (completedAnimations === totalLinks) {
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

  const NavGroup = ({ title, items }) => (
    <div className="flex flex-col mb-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2 px-6">{title}</h3>
      {items.map((item, idx) => (
        <NavLink
          key={idx}
          onClick={handleClose}
          to={item.link || item.path}
          className="animate-link px-6 py-2 hover:bg-white/5 transition-colors text-white"
        >
          {item.titel || item.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen(!isOpen)}
        className="bg-foreground relative z-[100] p-1.5 rounded-full"
      >
        {isOpen ? <HiXMark className="text-white" size={25} /> : <HiMiniBars3CenterLeft className="text-white" size={25} />}
      </button>

      <div
        className={`fixed inset-0 bg-foreground z-[90] transition-all duration-500 overflow-y-auto pt-24 pb-12 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div ref={navRef} className="container mx-auto">
          <NavGroup title="Explore" items={tabs} />
          <NavGroup title="Specialities" items={spProgramsTitle} />
          <NavGroup title="Wellness Solutions" items={welnessSolutions} />
          <NavGroup title="Treatments" items={programsTitle} />
          <NavGroup title="More" items={otherLinks} />
        </div>
      </div>
    </div>
  );
}
