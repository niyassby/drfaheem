import React from "react";

export default function DrAbdulgafoor() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 text-gray-800">
      {/* Introduction */}
      <section className="space-y-4">
        <p className="leading-relaxed">
          <strong>Dr. Abdul Gafoor</strong> is an experienced Traditional
          Chinese Medicine practitioner with over 25 years of expertise.
        </p>
        <p className="leading-relaxed">
          Trained at IRIIM (West Bengal), Nanjing University of TCM (China), and
          WFAS Education (China), he currently serves as the State President of
          the Acupuncture Science Association.
        </p>
      </section>

      {/* Roles & Positions */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">
          Currently serving as:
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>State President</strong> – Acupuncture Science Association
          </li>
          <li>
            <strong>MD & Chief Consultant</strong> – The Needle Institute of
            Acupuncture, Kozhikode, Kerala
          </li>
          <li>
            <strong>Senior Faculty Member</strong> – IRIIM, West Bengal
          </li>
          <li>
            <strong>Lecturer</strong> – Various AYUSH colleges across India
          </li>
          <li>
            <strong>Member</strong> – India-China Friendship Association (Kerala
            State Committee)
          </li>
        </ul>
      </section>

      {/* Areas of focus */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">
          Additional Expertise:
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hypnotherapy & Applied Psychology</li>
          <li>Motivational Training (India & abroad)</li>
          <li>Scientific Research & Publications</li>
          <li>Acupuncture & Holistic Health Education</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="pt-4 border-t border-gray-100">
        <p className="leading-relaxed font-medium">
          A passionate educator and researcher, Dr. Gafoor has published
          scientific papers, led seminars and workshops, and appeared in media
          programs promoting acupuncture and holistic health. In addition to his
          medical practice, he is a hypnotherapist and applied psychologist,
          offering motivational training in India and abroad.
        </p>
      </section>
    </div>
  );
}
