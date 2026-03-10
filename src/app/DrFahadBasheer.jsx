import React from "react";

export default function DrFahadBasheer() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 text-gray-800">
      {/* Introduction */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold text-primary-700">
          Dr. Fahad Basheer MBBS MD FISCM
        </h3>
        <p className="leading-relaxed font-medium text-lg">
          Chronomedicine consultant and Circadian sleep coach
        </p>
      </section>

      {/* Expertise */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">
          Medical conditions coming under my expertise:
        </h3>
        <ol className="list-decimal pl-5 space-y-4">
          <li className="leading-relaxed">
            <strong>Circadian lifestyle consultation:</strong> Wellness approach
            to build a circadian lifestyle by aligning lifestyle with circadian
            rhythm to restore sleep and metabolism.
          </li>
          <li className="leading-relaxed">
            <strong>Insomnia due to circadian disruption:</strong> People using
            phone till late night, don’t switch off light at sleep, doing night
            shift work, not exposed to adequate sunlight etc.
          </li>
          <li className="leading-relaxed">
            <strong>Delayed sleep phase disorder (night owl):</strong> inability
            to fall asleep at night and wake up late in morning in holidays, but
            forced to wake up on workdays with the help of alarm and suffer from
            day time sleepiness and become alert at night. Best for night shift
            work but badly for corporate early morning 9-5 corporate work.
          </li>
          <li className="leading-relaxed">
            <strong>Advance sleep phase disorder (morning lark):</strong> wakeup
            early morning every day but struggle to stay alert at night. Poor at
            night shift work but good at early morning 9-5 corporate work.
          </li>
          <li className="leading-relaxed">
            <strong>Shift work disorder:</strong> People doing continuous or
            rotational night shift work (12 am to 6am) struggling with sleep
            during day after work and maintaining alertness during night shift
            work.
          </li>
          <li className="leading-relaxed">
            <strong>Jet lag:</strong> For European/ American travellers only:
            suffer from day time sleepiness and night time lack of sleep due to
            jet lag for first 5-7 days of travel. Travellers who plan to stay
            only for 3 days, no need of jet lag treatment. More than 3 to 7 days
            should take jet lag treatment.
          </li>
        </ol>
      </section>

      {/* Investigations */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">Investigations:</h3>
        <ol className="list-decimal pl-5 space-y-3">
          <li className="leading-relaxed">
            Chronotype assessment (online questionnaire)
          </li>
          <li className="leading-relaxed">
            Metabolic tests: FBS PPBS HbA1c Lipid profile hsCRP Apo B BMI (only
            if circadian lifestyle consultation, delayed sleep phase disorder and
            night shift work disorder)
          </li>
          <li className="leading-relaxed">
            Physiological test: HRV (at first consultation and in subsequent
            review to assess progress)
          </li>
        </ol>
      </section>

      {/* Treatment Approach */}
      <section className="space-y-3">
        <h3 className="text-xl font-bold text-primary-700">
          Treatment approach:
        </h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li className="leading-relaxed">Medical therapy</li>
          <li className="leading-relaxed">
            Cognitive behavioural therapy for Insomnia
          </li>
          <li className="leading-relaxed">
            Circadian customized sleep and lifestyle planning (Light therapy
            boxes + Blue light blocking glasses)
          </li>
        </ol>
      </section>
    </div>
  );
}
