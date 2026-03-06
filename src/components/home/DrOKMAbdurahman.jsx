import React from 'react';

export default function DrOKMAbdurahman() {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6 text-gray-800">
            {/* Introduction */}
            <section className="space-y-4">
                <p className="leading-relaxed">
                    Dr. OKM Abdurahman is a lifestyle physician and Unani consultant integrating traditional healing with modern medical understanding.
                </p>
                <p className="leading-relaxed">
                    He focuses on helping patients improve health naturally through personalised diet, lifestyle correction, regimental therapies and evidence-based holistic care.
                </p>
            </section>

            {/* Roles & Positions */}
            <section className="space-y-3">
                <h3 className="text-xl font-bold text-primary-700">Currently serving as:</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Professor & Chief Physician – Markaz Unani Medical College & Hospital</li>
                    <li>Senior Consultant – Tigris Valley International Wellness Hospital</li>
                    <li>Medical Director – Odakkal Healthcare Clinics</li>
                    <li>Visiting Consultant – Markaz Campus Hospital</li>
                    <li>Board of Studies Member – KUHS</li>
                </ul>
            </section>

            {/* Areas of focus */}
            <section className="space-y-3">
                <h3 className="text-xl font-bold text-primary-700">Areas of Special Focus:</h3>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Diabetes & metabolic disorders</li>
                    <li>Joint pain, arthritis & spine problems</li>
                    <li>Neuropathy, weakness & stroke rehab</li>
                    <li>Weight management & lifestyle reset</li>
                </ul>
            </section>

            {/* Conclusion */}
            <section className="pt-4 border-t border-gray-100">
                <p className="leading-relaxed font-medium">
                    Dr. OKM combines Unani wisdom, modern diagnostics and personalised coaching to help patients reduce medicines, improve energy and regain long-term health.
                </p>
            </section>
        </div>
    );
}
