import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

import { useRef, useState, useEffect } from "react";
import { HiMiniBars3CenterLeft, HiXMark, HiChevronDown } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";

import { tabs, spProgramsTitle, welnessSolutions, otherLinks } from "../Util/navData";
import { programsTitle } from "../Util/programs";

import Popup from "../Contact/Popup";
import { Button } from "../ui/button";

export function SideOpen() {

  const location = useLocation();

  const [isOpen, setOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState([]);
  const [activeItem, setActiveItem] = useState(null);

  const navRef = useRef();
  const scrollPosRef = useRef(0);
  const splits = useRef([]);
  const animations = useRef([]);

  const [isVisible, setIsVisible] = useState(false);

  /* ---------------- RESTORE SAVED STATE ---------------- */

  useEffect(() => {

    const savedAccordion = localStorage.getItem("sidebarAccordion");
    const savedItem = localStorage.getItem("sidebarItem");

    if (savedAccordion && savedItem) {
      setOpenAccordions([savedAccordion]);
      setActiveItem(savedItem);
    }

  }, []);

  /* ---------------- RESET ACCORDION ON ROUTE CHANGE ---------------- */

  useEffect(() => {

    const accordionLinks = [
      ...spProgramsTitle,
      ...welnessSolutions,
      ...programsTitle
    ].map(item => item.link || item.path);

    const isAccordionRoute = accordionLinks.includes(location.pathname);

    if (!isAccordionRoute) {

      localStorage.removeItem("sidebarAccordion");
      localStorage.removeItem("sidebarItem");

      setOpenAccordions([]);
      setActiveItem(null);

    }

  }, [location.pathname]);

  /* ---------------- SCROLL TO ACTIVE ITEM ---------------- */

  useEffect(() => {

    if (isOpen && activeItem) {

      setTimeout(() => {

        const el = document.querySelector(`[data-sidebar-item="${activeItem}"]`);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }

      }, 350);

    }

  }, [isOpen, activeItem]);

  /* ---------------- GSAP ANIMATION ---------------- */

  useGSAP(() => {

    animations.current.forEach(anim => anim.kill());
    splits.current.forEach(split => split.revert());

    animations.current = [];
    splits.current = [];

    const links = gsap.utils.toArray(".sidebar-link-text");

    if (isOpen) {

      setIsVisible(true);

      if (navRef.current) {
        navRef.current.scrollTop = scrollPosRef.current;
      }

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

    }

    return () => {

      animations.current.forEach(anim => anim.kill());
      splits.current.forEach(split => split.revert());

    };

  }, { scope: navRef, dependencies: [isOpen] });

  /* ---------------- HANDLERS ---------------- */

  const handleClose = () => {
    setOpen(false);
  };

  const toggleAccordion = (section) => {

    setOpenAccordions(prev => {

      if (prev.includes(section)) {

        localStorage.removeItem("sidebarAccordion");
        return [];

      }

      localStorage.setItem("sidebarAccordion", section);
      return [section];

    });

  };

  /* ---------------- COMPONENTS ---------------- */

  const TopLevelLink = ({ item }) => (

    <div className="border-b border-gray-100">

      <NavLink
        onClick={handleClose}
        to={item.link || item.path}
        className="block py-4 px-6 text-xl font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <div className="sidebar-link-text inline-block">
          {item.titel || item.name}
        </div>
      </NavLink>

    </div>

  );

  const AccordionItem = ({ title, items, sectionKey }) => {

    const isExpanded = openAccordions.includes(sectionKey);

    return (

      <div className="flex flex-col border-b border-gray-100">

        <button
          onClick={() => toggleAccordion(sectionKey)}
          className="flex justify-between items-center py-4 px-6 w-full text-xl font-medium text-gray-900 hover:bg-gray-50"
        >

          <div className="sidebar-link-text inline-block">{title}</div>

          <HiChevronDown
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            size={22}
          />

        </button>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[2000px]" : "max-h-0"}`}>

          <div className="flex flex-col py-2 bg-gray-50">

            {items.map((item, idx) => {

              const link = item.link || item.path;

              return (

                <NavLink
                  key={idx}
                  to={link}
                  data-sidebar-item={link}
                  onClick={() => {

                    setActiveItem(link);

                    localStorage.setItem("sidebarItem", link);
                    localStorage.setItem("sidebarAccordion", sectionKey);

                    handleClose();

                  }}
                  className={`py-3 px-10 text-base
                  ${activeItem === link
                      ? "text-primary-700 font-semibold"
                      : "text-gray-600 hover:text-primary-700 hover:bg-gray-100"
                    }`}
                >

                  {item.titel || item.name}

                </NavLink>

              );

            })}

          </div>

        </div>

      </div>

    );

  };

  /* ---------------- UI ---------------- */

  return (

    <div className="relative md:hidden">

      <button
        onClick={() => setOpen(!isOpen)}
        className="bg-foreground relative z-[100] p-1.5 rounded-full"
      >

        {isOpen
          ? <HiXMark className="text-white" size={25} />
          : <HiMiniBars3CenterLeft className="text-white" size={25} />}

      </button>

      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div
          ref={navRef}
          className="flex-grow overflow-y-auto pt-24 pb-6"
          onScroll={(e) => { scrollPosRef.current = e.target.scrollTop; }}
        >

          <div className="container mx-auto flex flex-col">

            {tabs.map((tab, idx) => (
              <TopLevelLink key={idx} item={tab} />
            ))}

            <AccordionItem title="Specialities" sectionKey="specialities" items={spProgramsTitle} />

            <AccordionItem title="Wellness Solutions" sectionKey="wellness" items={welnessSolutions} />

            <AccordionItem title="Treatments" sectionKey="treatments" items={programsTitle} />

            {otherLinks.map((link, idx) => (
              <TopLevelLink key={idx} item={link} />
            ))}

          </div>

        </div>

        <div className="p-6 pb-8 border-t border-gray-100 bg-white/95">

          <Popup>

            <Button className="w-full bg-primary-700 text-white hover:bg-primary-800 h-14 rounded-2xl font-bold text-lg shadow-md">
              Book Consultation
            </Button>

          </Popup>

        </div>

      </div>

    </div>

  );
}