import { Link, NavLink, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import Popup from "../Contact/Popup";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { programsTitle } from "../Util/programs";

// const tabs = ["Home", "About", "Products", "Contact"]

const tabs = [
  {
    name: "Home",
    link: '/'
  },
  {
    name: "About Me",
    link: '/about'
  },
  // {
  //     name: "Team",
  //     link: ''
  // }
]

const spProgramsTitle = [
  {
    titel: "Heart health & heart block solutions",
    link: "/explore-1",
  },
  {
    titel: "Reverce diabetes & prevent complications",
    link: "/explore-2",
  },
  {
    titel: "Advanced integrative Cancer & Palliative care",
    link: "/explore-3",
  },
  {
    titel: "Metabolic Syndrome and Obesity Care",
    link: "/explore-4",
  },
  {
    titel: "Stroke recovery & Neuro Rehabilitation",
    link: "/explore-5",
  },
  {
    titel: "PCOD & Hormone Health",
    link: "/explore-6",
  },
  {
    titel: "From Fatty Liver to Functional Liver",
    link: "/explore-7",
  },
  {
    titel: "Integrative auto immune care",
    link: "/explore-8",
  },
  {
    titel: "Integrative Fertility Care",
    link: "/explore-9",
  },
  {
    titel: "Joint & Pain Management",
    link: "/explore-10",
  },
];
const welnessSolutions = [
  {
    titel: "Anti-aging",
    link: "/explore-1",
  },
  {
    titel: "Skin Revitalization",
    link: "/explore-2",
  },
  {
    titel: "Hair Restoration",
    link: "/explore-3",
  },
  {
    titel: "Immuno Optimization",
    link: "/explore-4",
  },
  {
    titel: "Gut Detox & Microbiome Restoration",
    link: "/explore-5",
  },
  {
    titel: "Hangover Recovery",
    link: "/explore-6",
  },
  {
    titel: "Mind-Body Balance",
    link: "/explore-7",
  },

];

export default function NavLinks() {
  // const navigate = useNavigate();

  // const scrollToSection = async(sectionId) => {
  //   navigate('/')
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  return (
    <div className={`flex justify-center items-center max-md:hidden`}>
      <div className={`relative flex items-center justify-center `}>
        <div className="p-0">
          <div className="relative">
            {/* Hover Highlight */}
            <div className="absolute h-[30px] transition-all duration-300 ease-out bg-gray-700 rounded-full flex items-center" />

            <div className="relative flex gap-4 items-center">
              {tabs.map((tab, index) => (
                <NavLink to={tab.link} key={index} className="rounded-2xl">
                  <div className={` `}>
                    <div className="py-1.5  px-3 font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                      {tab.name}
                    </div>
                  </div>
                </NavLink>
              ))}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Specialities
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className={"w-auto "}>
                      {spProgramsTitle?.map((item, index) => {
                        return (
                          <NavigationMenuLink
                            key={index}
                            className="w-60 font-medium"
                          >
                            <Link to={item.link}>{item.titel}</Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Wellness Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className={"w-auto "}>
                      {welnessSolutions?.map((item, index) => {
                        return (
                          <NavigationMenuLink
                            key={index}
                            className="w-60 font-medium"
                          >
                            <Link to={item.link}>{item.titel}</Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* <div onClick={() => scrollToSection("Team") } className='rounded-2xl cursor-pointer' >
                <div
                  className={` `}
                >
                  <div className="py-1.5  px-3 font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                    Team
                  </div>
                </div>
                </div> */}
              {/* <div onClick={() => scrollToSection("programs") } className='rounded-2xl cursor-pointer' >
                <div
                  className={` `}
                >
                  <div className="py-1.5  px-3 font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                    Programs
                  </div>
                </div>
                </div> */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Treatments</NavigationMenuTrigger>
                    <NavigationMenuContent className={"w-60"}>
                      {programsTitle?.map((item, index) => {
                        return (
                          <NavigationMenuLink
                            key={index}
                            className="w-60 font-medium"
                          >
                            <Link to={item.link}>{item.titel}</Link>
                          </NavigationMenuLink>
                        );
                      })}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {[
                {
                  titel: "Blogs",
                  link: "/blogs",
                },
                {
                  titel: "Gallery",
                  link: "/gallery",
                },
                {
                  titel: "Team",
                  link: "/team",
                }].map((tab, index) => (
                  <NavLink to={tab.link} key={index} className="rounded-2xl">
                    <div className={` `}>
                      <div className="py-1.5  px-3 font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                        {tab.titel}
                      </div>
                    </div>
                  </NavLink>
                ))}
              <Popup />

              {/* <Button onClick={()=>scrollToSection('contact')} className='bg-primary-700 text-white hover:bg-primary-800 cursor-pointer'>Book Now</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

