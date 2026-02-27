import React, { useEffect, useState } from "react";
import {
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelopeOpen,
} from "react-icons/hi2";
import useAnimationEffects from "../Util/upAnimation";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  useAnimationEffects({
    upSelector: '.contactForm',
    defaultUpAnimation: {
      opacity: 0,
      y: 50,
    }
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStatus("");
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [status]);
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setStatus("Please fill in all fields before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("https://wahdkarak.com/sendEmail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("Your message has been sent!");
      } else {
        setStatus("Something went wrong. Please try again.");
      }
      setEmail("");
      setMessage("");
      setName("");
      setSubject("");
    } catch (error) {
      setStatus("Network error. Please try again.");
    }
  };
  return (
    <div>
      <div className="">
        <div className="max-w-[85rem] w-full px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <div>
                <div className="space-y-4">
                  <div className="relative contactForm">
                    <label htmlFor="name" className="text-gray-800 text-sm ">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      className="w-full py-3 px-4 focus:outline-green-600 text-s rounded-lg  border text-black placeholder:text-sm mt-1 focus:ring-0 "
                    />
                  </div>

                  <div className="relative contactForm">
                    <label htmlFor="email" className="text-gray-800 text-sm">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full py-3 px-4 focus:outline-green-600 text-s rounded-lg  border text-black placeholder:text-sm mt-1 focus:ring-0 "
                    />
                  </div>

                  <div className="relative contactForm">
                    <label htmlFor="subj" className="text-gray-800 text-sm">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subj"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject"
                      className="w-full py-3 px-4 focus:outline-green-600 text-s rounded-lg  border text-black placeholder:text-sm mt-1 focus:ring-0 "
                    />
                  </div>

                  <div className="relative contactForm">
                    <label htmlFor="massage" className="text-gray-800 text-sm">
                      Massage
                    </label>
                    <textarea
                      type="text"
                      id="massage"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message"
                      className="w-full py-3 px-4 focus:outline-green-600 text-s rounded-lg  border text-black placeholder:text-sm mt-1 focus:ring-0 "
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <p
                    className={`text-sm text-ne utral-600 contactForm ${
                      status === "Your message has been sent!"
                        ? "text-main-color-600"
                        : "text-red-600"
                    }`}
                  >
                    {status}
                  </p>

                  <div className="mt-5">
                    <button
                      onClick={handleSubmit}
                      className="bg-green-600 contactForm text-white font-medium py-2 px-8 rounded-full hover:bg-green-700 transition duration-200"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="flex gap-x-5">
                <HiOutlineMapPin size={25} className="text-neutral-500 contactForm" />
                <div className="grow">
                  <h4 className="text-gray-700 font-semibold contactForm">Our address:</h4>

                  <address className="mt-1 text-neutral-600 text-sm not-italic contactForm">
                    Wahd Karak
                    <br />
                    Mussaffah Ind-40, Near Al Ghazal Transport, Abu Dhabi - UAE
                  </address>
                </div>
              </div>

              <div className="flex gap-x-5 contactForm">
                <HiOutlineEnvelopeOpen size={25} className="text-neutral-500 contactForm" />
                <div className="grow">
                  <h4 className="text-gray-700 font-semibold contactForm">Email us:</h4>

                  <a
                    className="mt-1 text-neutral-600 text-sm focus:outline-none contactForm"
                    href="mailto:wahdkarak@mgt-uae.com"
                  >
                    wahdkarak@mgt-uae.com
                  </a>
                </div>
              </div>

              <div className="flex gap-x-5 contactForm">
                <HiOutlinePhone size={25} className="text-neutral-500 contactForm" />
                <div className="grow">
                  <h4 className="text-gray-700 font-semibold contactForm">Contact:</h4>

                  <a
                    className="mt-1 text-neutral-600 text-sm focus:outline-none contactForm"
                    href="tel:+97105044335584"
                  >
                    05 44 33 55 84
                  </a>
                </div>
              </div>

              <div className="w-full h-52 contactForm">
                <iframe
                  className="w-full max-w-xl h-full rounded-lg border"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14539.241182550528!2d54.484876!3d24.3531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e419b8f06e09f%3A0xf1be53a106393093!2sMSHKAK%20GENERAL%20TRADING!5e0!3m2!1sen!2sae!4v1746085372373!5m2!1sen!2sae"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
