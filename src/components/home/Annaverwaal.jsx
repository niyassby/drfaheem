
import { Heart, BookOpen, Users, Globe, Stethoscope } from "lucide-react"

const roles = [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Registered Nurse",
    description: "Specializing in maternal and child health",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Conscious Conception & Birth Consultant",
    description: "Guiding families through intentional reproduction",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Primal Period Educator & Lactation Educator",
    description: "UCLA-certified educator in postpartum and infant care",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Midwife & Doula Instructor",
    description: "Birth photographer and educator",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "International Lecturer",
    description: "Facilitating workshops on childbirth physiology and early life influences",
  },
]

export default function Annaverwall() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-sage-50">
      {/* Header Section */}
      <header className="relative pt-16 pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            {/* <p className="text-sage-600 text-lg font-light italic tracking-wide mb-4">Welcome to</p> */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-red-900 mb-6 text-balance">
              Anna Verwaal
            </h1>
            <p className="text-xl md:text-2xl text-sage-700 font-light">
              Maternal-Child Health Nurse & Birth Consultant
            </p>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-rose-300 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Intro Section */}
          <section className="mb-20">
            <p className="text-lg text-sage-800 leading-relaxed mb-6">
              Anna Verwaal is a maternal-child health nurse and birth consultant known for her work in{" "}
              <span className="text-red-700 font-semibold">
                conscious conception, birth education, and perinatal psychology
              </span>
              . With decades of combined expertise across multiple disciplines, she guides families through the profound
              journey from conception to early childhood.
            </p>
          </section>

          {/* Professional Roles Grid */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-red-900 mb-12 text-balance">Professional Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-lg p-8 border border-sage-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-red-400 to-rose-300 rounded-r-full"></div>
                  <div className="text-red-600 mb-4">{role.icon}</div>
                  <h3 className="text-xl font-semibold text-red-900 mb-2">{role.title}</h3>
                  <p className="text-sage-700">{role.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Educational Focus */}
          <section className="mb-20 bg-white rounded-lg p-10 md:p-14 border border-sage-100">
            <h2 className="text-3xl md:text-4xl font-serif text-red-900 mb-6">Teaching & Education</h2>
            <p className="text-lg text-sage-800 mb-6 leading-relaxed">
              Anna teaches internationally and has developed comprehensive educational programs and talks under the
              transformative theme:
            </p>
            <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-lg p-8 mb-6 border-l-4 border-red-400">
              <h3 className="text-2xl md:text-3xl font-serif text-red-900 text-balance">From Womb to World</h3>
              <p className="text-sage-700 mt-3 text-lg">
                Exploring how conception, pregnancy, and birth experiences shape later life
              </p>
            </div>
            <p className="text-lg text-sage-800 leading-relaxed">
              Her workshops and lectures delve into childbirth physiology, cellular memory of birth, bonding, and the
              profound early life influences that impact development and wellbeing throughout the lifespan.
            </p>
          </section>

          {/* Key Themes */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-red-900 mb-10 text-balance">Areas of Focus</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Conscious Conception", desc: "Intentional and mindful approaches to conception" },
                { title: "Birth Education", desc: "Comprehensive childbirth preparation and support" },
                { title: "Perinatal Psychology", desc: "Mental and emotional health during pregnancy and postpartum" },
                { title: "Cellular Memory", desc: "Understanding birth imprints and their lifelong effects" },
                { title: "Bonding & Attachment", desc: "Fostering healthy mother-baby relationships" },
                { title: "Early Life Development", desc: "The critical early period and its lasting impact" },
              ].map((focus, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-lg border border-red-200"
                >
                  <h3 className="text-lg font-semibold text-red-900 mb-2">{focus.title}</h3>
                  <p className="text-sage-700">{focus.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-red-900 to-red-700 text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4 text-balance">Journey Through Conscious Motherhood</h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Discover how the experiences of conception, pregnancy, and birth shape the trajectory of a life. Learn
              from decades of expertise and international practice.
            </p>
            {/* <button className="bg-white text-red-900 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Learn More
            </button> */}
          </section>
        </div>
      </div>

      {/* Footer
      <footer className="bg-red-900 text-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-red-100">
            Guiding families through the sacred journey of conscious conception, birth, and early childhood development
          </p>
          <p className="text-red-300 text-sm mt-4">© 2026 Anna Verwaal. All rights reserved.</p>
        </div>
      </footer> */}
    </main>
  )
}
