import React from 'react';

export default function DrSoorajSankar() {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 text-gray-800">
            {/* Introduction */}
            <section className="space-y-4">
                <p className="leading-relaxed">
                    Dr. Sooraj Sankar graduated in Ayurveda from Kerala, India—the heart of India's rich Ayurvedic tradition. With 15 years of experience, he is highly regarded for his deep knowledge of Ayurvedic science and his expertise in Pulse Diagnosis.
                </p>
                <p className="leading-relaxed">
                    Trained under world-renowned pulse readers and toxicologists, Dr. Sooraj provides personalised recommendations to balance the three pillars of life: food, sleep, and exercise. He also specializes in detoxification procedures and tailored treatments based on individual health and constitutional needs.
                </p>
            </section>

            {/* Expertise & Certifications */}
            <section className="space-y-3">
                <h3 className="text-xl font-bold text-primary-700">Expertise & Qualifications:</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Expert in Pulse Diagnosis (Nadi Pariksha)</li>
                    <li>Qualified Clinical Acupuncturist (IRIIM, West Bengal)</li>
                    <li>Smrithi Meditation Counseling & Healing Expert (Kottakkal, Kerala)</li>
                    <li>Traditional Marma-Spine Aligner</li>
                </ul>
            </section>

            {/* Professional Background */}
            <section className="space-y-3">
                <h3 className="text-xl font-bold text-primary-700">Professional Journey:</h3>
                <p className="leading-relaxed">
                    Dr. Sooraj is the founder of Sarvvam Ayurveda Pvt Ltd and served as the Chief Physician of Sattvic Ayurveda Clinics and Pharmacies. He has conducted retreats at globally renowned locations, including:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Four Seasons Resorts Maldives & Seychelles</li>
                    <li>Private properties in Jakarta and France</li>
                    <li>Senior Consultant at Tigris Valley (South Asia's First Premium Ayush Wellness Retreat)</li>
                </ul>
            </section>
        </div>
    );
}
