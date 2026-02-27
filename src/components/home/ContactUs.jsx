import React from "react"
import { ContactInput } from "./ContactInput"

export function ContactForm() {
 

  return (
    <div id="contact" className="container mx-auto px-4 py-16">
        <div className="max-w-[85rem] mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-foreground ">Get in Touch</h1>
            <p className=" text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <ContactInput />
            </div>

            {/* Contact Information */}
            <div className="space-y-8 flex flex-col h-full">
              <div>
                {/* <h2 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h2> */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you have a question about our services, need support, or just want to say hello, we're here to
                  help. Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">drfaheem@tigrisvalley.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 9072 66 11 49</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-700 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office</h3>
                    <p className="text-muted-foreground">
                    Tigris Valley,
                    Markaz Knowledge City, Kaithapoyil, Kozhikode 
                    Pin : 673586
                    </p>
                  </div>
                </div>
              </div>
                <div className="w-full h-full max-lg:h-60 rounded-xl overflow-hidden border mt-5 ">
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.127975258149!2d76.00666548244925!3d11.470687491220506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66d219c829621%3A0x5fdd1c9309a447c0!2sTIGRIS%20VALLEY%20-%20Wellness%20Retreat!5e0!3m2!1sen!2sin!4v1764321062533!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}
