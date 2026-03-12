import React from "react";

export default function DrLenny() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 text-gray-800">
      {/* Introduction */}
      <section className="space-y-4">
        <p className="leading-relaxed">
          <strong>Dr. Lenny Da Costa</strong> is a Consultant Geriatrician,
          Preventive Cardiologist, and an Anti-Aging specialist. He completed
          his MBBS from The Goa Medical College and his specialization in
          Geriatric Medicine from the M.S. Ramaiah Medical College, Bangalore.
        </p>
        <p className="leading-relaxed">
          With advanced training in the practice of Anti-aging and Preventive
          Cardiology, he is certified by the International Board of Clinical
          Metal Toxicology USA as an FCMT. Over the last 18 years, Dr. Da Costa
          has successfully treated more than 25,000 patients suffering from
          Ischemic Heart Disease (IHD), Coronary Artery Disease (CAD), Diabetes
          Mellitus, and other chronic degenerative disorders.
        </p>
      </section>

      {/* Leadership & Organizations */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">
          Leadership & Medical Organizations:
        </h3>
        <p className="leading-relaxed">
          Dr. Da Costa is a prominent member of numerous medical organizations
          and currently holds several prestigious positions:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>President</strong> of the Society for Regenerative Aesthetic
            and Anti Aging Medicine India (SRAAMI)
          </li>
          <li>
            <strong>President</strong> of the Indian Society for the Study of
            Metal Toxicology and Chelation Therapy
          </li>
          <li>
            <strong>Scientific Advisor</strong> to the World Academy of Anti
            Aging Medicine Asia (WAAAM)
          </li>
          <li>
            <strong>Executive Council Member</strong> of the European Council
            Aging Research and Training (ECARE)
          </li>
        </ul>
      </section>

      {/* Speaking & Workshops */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">
          Global Expertise & Speaking:
        </h3>
        <p className="leading-relaxed">
          He has extensively lectured and conducted independent workshops
          globally on anti-ageing therapies, the use of chelation, IV
          Nutritional regenerative therapies, metal toxicology, preventive
          cardiology, BHRT in Geriatric cases, and IV therapies for Diabetics.
        </p>
        <p className="leading-relaxed">
          He has been a distinguished speaker at many international meets,
          including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>ECOPRAM (Istanbul)</li>
          <li>
            SAARMM (Kuala Lumpur, Malaysia) – <em>For the last 4 years</em>
          </li>
          <li>A4M (Bangkok, Thailand) & A4M Asia (Bali)</li>
          <li>A5M (Melbourne)</li>
          <li>MEDICOIN (Goa, India)</li>
          <li>INMA (Cochin, India)</li>
        </ul>
      </section>

      {/* Current Practice */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">
          Current Clinical Practice:
        </h3>
        <p className="leading-relaxed">
          Dr. Da Costa currently visits affiliate clinics in Pune and New Delhi,
          while operating his own established clinics in Goa and Mumbai.
        </p>
      </section>
    </div>
  );
}
