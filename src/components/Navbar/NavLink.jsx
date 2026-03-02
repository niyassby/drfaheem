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
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { programsTitle } from "../Util/programs";

// const tabs = ["Home", "About", "Products", "Contact"]

import { tabs, spProgramsTitle, welnessSolutions } from "../Util/navData";


export default function NavLinks() {
  
  return (
    <div className={`flex justify-center items-center max-md:hidden`}>
      <div className={`relative flex items-center justify-center `}>
        <div className="p-0">
          <div className="relative">
            {/* Hover Highlight */}
            {/* <div className="absolute h-[30px] transition-all duration-300 ease-out bg-gray-700 rounded-full flex items-center" /> */}

            <div className="relative flex gap-2 items-center">
              {tabs.map((tab, index) => (
                <Link to={tab.link} key={index} >
                  <div className={` `}>
                    <div className="py-1.5  px-3 text-sm hover:bg-accent rounded-md font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                      {tab.name}
                    </div>
                  </div>
                </Link>
              ))}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Specialities
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col">
                        {spProgramsTitle?.map((item, index) => {
                          return (
                            <NavigationMenuLink
                              key={index}
                              asChild className={navigationMenuTriggerStyle()}
                            >
                              <Link to={item.link}>{item.titel}</Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      Wellness Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="flex flex-col">
                        {welnessSolutions?.map((item, index) => {
                          return (
                            <NavigationMenuLink
                              key={index}
                              asChild className={navigationMenuTriggerStyle()}
                            >
                              <Link to={item.link}>{item.titel}</Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Treatments</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-2 w-[500px] grid-cols-[.7fr_1fr]">
                        <div className="bg-muted rounded-md overflow-hidden">
                          <img className="h-full object-cover grayscale-100" src="https://www.midwestdetoxcenter.com/wp-content/uploads/2021/02/5-Benefits-of-Medication-Assisted-Treatment.jpg" alt="" />
                        </div>
                        <div className="flex flex-col ">


                          {programsTitle?.map((item, index) => {
                            return (
                              <NavigationMenuLink
                                key={index}
                                asChild className={navigationMenuTriggerStyle()}
                              >
                                <Link to={item.link}>{item.titel}</Link>
                              </NavigationMenuLink>
                            );
                          })}
                        </div>
                      </div>
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
                  <Link to={tab.link} key={index} >
                    <div className={` `}>
                      <div className="py-1.5  px-3 text-sm hover:bg-accent rounded-md font-medium leading-5 whitespace-nowrap flex items-center justify-center h-full">
                        {tab.titel}
                      </div>
                    </div>
                  </Link>
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

