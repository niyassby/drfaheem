// import Footer from "@/components/Navbar/Footer";
// import Protect from "@/lib/Protect";
// import { ArrowRight } from "lucide-react";
// import { useRef } from "react";

// export default function ExploreMore({ data }) {
//   const sectionRefs = useRef([]);

//   const scrollToSection = (index) => {
//     sectionRefs.current[index]?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <Protect>
//       <div>
//         <div className="w-full h-[350px] md:h-[450px] relative flex items-center justify-center">
//           <h1 className="relative z-20 mt-6 text-4xl md:text-6xl font-bold text-white text-center">
//             {data?.banner?.title}
//           </h1>
//           <div className="absolute w-full h-full inset-0 z-0">
//             <img
//               src={data?.banner?.image}
//               className="w-full h-full object-cover"
//               alt=""
//             />
//           </div>
//           <div className="absolute w-full h-full inset-0 z-10 bg-black/50"></div>
//         </div>

//         <div className="min-h-screen w-full max-w-7xl mx-auto grid lg:grid-cols-8 gap-20 px-4 py-10 md:py-20">
//           {/* LEFT SIDE - CLICKABLE HEADINGS */}
//           <div className="w-full h-full sticky top-20 col-span-3 order-1 space-y-3 divide-y max-lg:hidden">
//             {data?.sections?.map((item, index) => (
//               <div
//                 key={index}
//                 className="pb-3 cursor-pointer hover:text-primary-600 transition"
//                 onClick={() => scrollToSection(index)}
//               >
//                 <h1 className="text-xl font-medium">{item.heading}</h1>
//               </div>
//             ))}
//           </div>

//           {/* RIGHT SIDE - CONTENT */}
//           <div className="space-y-14 montserrat col-span-5">
//             {data?.sections?.map((item, index) => (
//               <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
//                 <h1 className="text-4xl font-semibold mb-4 text-primary-600">
//                   {item.heading}
//                 </h1>

//                 {item.type === "paragraph" && (
//                   <div className="text-neutral-900 font-medium">
//                     {item.content}
//                   </div>
//                 )}

//                 {item.type === "list" && (
//                   <ul className="space-y-4">
//                     {item.items.map((listItem, i) => (
//                       <li key={i} className="flex gap-2 items-start">
//                         <ArrowRight size={16} className="mt-1 shrink-0" />
//                         {listItem}
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {item.type === "mixed" && (
//                   <div>
//                     <p className="mb-6">{item.intro}</p>
//                     {item.features?.map((feature, i) => (
//                       <div className="flex gap-2 mt-4" key={i}>
//                         <ArrowRight size={16} className="mt-1 shrink-0" />
//                         <p>
//                           <span className="font-semibold">
//                             {feature.title}:
//                           </span>{" "}
//                           {feature.description}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//                 {item.type === "mixed_content" && (
//                   <div>
//                     <p className="mb-6">{item.intro}</p>
//                     {item.list_items?.map((feature, i) => (
//                       <div className="flex gap-2 mt-4" key={i}>
//                         <ArrowRight size={16} className="mt-1 shrink-0" />
//                         <p>
//                           {/* <span className="font-semibold">
//                             {feature.title}:
//                           </span>{" "} */}
//                           {feature}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {item?.outro && (
//                   <p className="mt-5 text-sm text-neutral-600">{item.outro}</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </Protect>
//   );
// }






import Footer from "@/components/Navbar/Footer";
import Protect from "@/lib/Protect";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function ExploreMore({ data }) {
  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Protect>
      <div>
        <div className="w-full h-[350px] md:h-[450px] relative flex items-center justify-center">
          <h1 className="relative z-20 mt-6 text-4xl md:text-6xl font-bold text-white text-center">
            {data?.banner?.title}
          </h1>
          <div className="absolute w-full h-full inset-0 z-0">
            <img
              src={data?.banner?.image}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="absolute w-full h-full inset-0 z-10 bg-black/50"></div>
        </div>

        <div className="min-h-screen w-full max-w-7xl mx-auto grid lg:grid-cols-8 gap-20 px-4 py-10 md:py-20">
          {/* LEFT SIDE - CLICKABLE HEADINGS & VIDEO */}
          <div className="w-full lg:h-fit lg:sticky lg:top-20 col-span-5 md:col-span-3 order-1 flex flex-col gap-8">
            {/* Headings List (Hidden on Mobile) */}
            <div className="space-y-3 divide-y max-lg:hidden">
              {data?.sections?.map((item, index) => (
                <div
                  key={index}
                  className="pb-3 cursor-pointer hover:text-primary-600 transition"
                  onClick={() => scrollToSection(index)}
                >
                  <h1 className="text-xl font-medium">{item.heading}</h1>
                </div>
              ))}
            </div>

            {/* --- ADDED LOCAL VIDEO SECTION --- */}
            {data?.videoSrc && (
              <div className="w-full bg-white p-2 md:p-3 rounded-2xl md:rounded-3xl border border-slate-200 shadow-xl">
                <video
                  controls
                  className="w-full aspect-video rounded-xl md:rounded-2xl object-cover bg-slate-900 shadow-sm"
                >
                  <source src={data.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="space-y-14 montserrat col-span-5">
            {data?.sections?.map((item, index) => (
              <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
                <h1 className="text-4xl font-semibold mb-4 text-primary-600">
                  {item.heading}
                </h1>

                {item.type === "paragraph" && (
                  <div className="text-neutral-900 font-medium">
                    {item.content}
                  </div>
                )}

                {item.type === "list" && (
                  <ul className="space-y-4">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <ArrowRight size={16} className="mt-1 shrink-0" />
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}

                {item.type === "mixed" && (
                  <div>
                    <p className="mb-6">{item.intro}</p>
                    {item.features?.map((feature, i) => (
                      <div className="flex gap-2 mt-4" key={i}>
                        <ArrowRight size={16} className="mt-1 shrink-0" />
                        <p>
                          <span className="font-semibold">
                            {feature.title}:
                          </span>{" "}
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {item.type === "mixed_content" && (
                  <div>
                    <p className="mb-6">{item.intro}</p>
                    {item.list_items?.map((feature, i) => (
                      <div className="flex gap-2 mt-4" key={i}>
                        <ArrowRight size={16} className="mt-1 shrink-0" />
                        <p>
                          {/* <span className="font-semibold">
                            {feature.title}:
                          </span>{" "} */}
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {item?.outro && (
                  <p className="mt-5 text-sm text-neutral-600">{item.outro}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </Protect>
  );
}