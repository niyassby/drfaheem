// import React, { useState } from "react";
// import logo from "../../assets/Logo.svg";
// import {
//   BiLogoFacebook,
//   BiLogoInstagram,
//   BiLogoWhatsapp,
// } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import useAnimationEffects from "../Util/upAnimation";

// const socilaMedia = [
//   // {
//   //   icon: BiLogoFacebook,
//   //   link: "",
//   // },
//   {
//     icon: BiLogoInstagram,
//     link: "https://www.instagram.com/wahd_karak_tea_blend?igsh=cXZ5NXV4NHpxYzA2&utm_source=qr",
//   },
//   {
//     icon: BiLogoWhatsapp,
//     link: "https://wa.me/971544335584",
//   },
// ];

// const links = [
//   {
//     title: "Home",
//     link: "/",
//   },
//   {
//     title: "About Us",
//     link: "/about",
//   },
//   {
//     title: "Products",
//     link: "/products",
//   },
//   {
//     title: "Contact Us",
//     link: "/contact",
//   },
// ];

// const links2 = [
//   {
//     title: "Customer Support",
//     link: "/support",
//   },
//   {
//     title: "Delivery Details",
//     link: "/delivery",
//   },
//   {
//     title: "Privacy Policy",
//     link: "/privacy",
//   },
//   {
//     title: "Terms & Conditions",
//     link: "/terms",
//   },
// ];

// const Footer = () => {
//   // useAnimationEffects({
//   //   upSelector: ".footer",
//   //   defaultUpAnimation: {
//   //     opacity: 0,
//   //     y: 50,
//   //   },
//   // });
//   return (
//     <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
//       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[85rem]">
//       <footer className="  w-full">
//   {/* Grid */}
//   <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
//     <div>
//       <a className="flex-none text-xl font-semibold text-black focus:outline-hidden dark:text-white" href="#" aria-label="Brand">
//         <img src={logo} className="h-14" alt="" />
//       </a>
//     </div>
//     {/* End Col */}

//     <ul className="text-center">
//       <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
//         <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" to="/">
//           Home
//         </Link>
//       </li>
//       <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
//         <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" to="/about">
//           About
//         </Link>
//       </li>
//       <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
//         <Link className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200" to="/team">
//           Team
//         </Link>
//       </li>
//     </ul>
//     {/* End Col */}

//     {/* Social Brands */}
//     <div className="md:text-end space-x-2">
//       <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
//         <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
//         </svg>
//       </a>
//       <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
//         <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
//         </svg>
//       </a>
//       <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
//         <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
//         </svg>
//       </a>
//       <a className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
//         <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//           <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
//         </svg>
//       </a>
//     </div>
//     {/* End Social Brands */}
//   </div>
//   {/* End Grid */}
// </footer>

//         <hr className="mt-16 mb-10 border-gray-200" />

//         <p className="text-xs text-center text-gray-600 footer">
//           © Copyright {new Date().getFullYear()}, All Rights Reserved by
//           <span className="hover:underline font-medium"> Dr.Faheem Najeeb</span>
//         </p>
//       </div>
//     </section>
//   );
// };
// export default Footer;






import React from "react";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import {
  Instagram,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 text-slate-300 overflow-hidden pt-20 pb-10">
      {/* Soft gradient orb in the background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900/40 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              to="/"
              className="mb-6 bg-white/5 p-4 rounded-2xl glass hover-lift inline-block text-white transition-colors border border-white/10"
            >
              <img
                src={logo}
                className="h-12 brightness-0 invert"
                alt="Brand Logo"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Pioneering advanced clinical treatments and holistic wellness
              solutions. Elevating your health journey through integrative,
              luxury medical care.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/wahd_karak_tea_blend?igsh=cXZ5NXV4NHpxYzA2&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-primary-500 hover:text-white transition-all duration-300 hover-lift"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/971544335584"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-300 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover-lift"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-heading font-semibold tracking-tight text-lg mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              {["Home", "About", "Team", "Gallery"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${
                      item === "Home"
                        ? ""
                        : item === "Team"
                          ? "panel"
                          : item.toLowerCase()
                    }`}
                    className="group flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 w-fit"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary-400 mr-1"
                    />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal/Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-heading font-semibold tracking-tight text-lg mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Customer Support", path: "/support" },
                { name: "Delivery Details", path: "/delivery" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms & Conditions", path: "/terms" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 w-fit"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary-400 mr-1"
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Bento Box */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 h-full flex flex-col justify-center">
              <h3 className="text-white font-heading font-semibold tracking-tight text-lg mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center shrink-0">
                    <MapPin size={14} />
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Tigris Valley, Markaz Knowledge City, Kaithapoyil, Kozhikode
                    Pin : 673586
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone size={14} />
                  </div>
                  <a
                    href="tel:+971544335584"
                    className="text-sm text-slate-400 hover:text-white transition-colors hover:underline decoration-blue-500/30 underline-offset-4"
                  >
                    +91 9072 66 11 49
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail size={14} />
                  </div>
                  <a
                    href="mailto:info@drfaheem.com"
                    className="text-sm text-slate-400 hover:text-white transition-colors hover:underline decoration-emerald-500/30 underline-offset-4"
                  >
                    drfaheem@tigrisvalley.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
            Designed for{" "}
            <span className="text-slate-300 hover:text-white transition-colors cursor-pointer">
              Dr. Faheem Najeeb
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
