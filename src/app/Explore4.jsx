import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dna,
  Heart,
  Activity,
  Shield,
  Users,
  TestTube,
  FileText,
  Target,
  HeadphonesIcon,
  Sparkles,
  Leaf,
  ArrowRight,
  Calendar,
  User,
} from "lucide-react"

export default function () {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className=" ">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col items-center pt-20">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Dna className="w-3 h-3 mr-1" />
              Genomic Analysis
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Activity className="w-3 h-3 mr-1" />
              Metabolic Health
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🧬 What is the EPLIMO Test?</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Tigris Valley Team
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Health & Wellness
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero img */}
        <div className="mb-8">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="DNA analysis and wellness concept"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg leading-relaxed text-gray-700">
            Tigris Valley, in collaboration with Vieroots Wellness Solutions, offers the EPLIMO (Epigenetic Lifestyle
            Modifications) test — a cutting-edge genetic and lifestyle assessment designed to provide personalized
            health optimization.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            This test combines advanced DNA analysis with a detailed lifestyle evaluation to create a customized
            wellness plan tailored to your unique biology and habits.
          </p>
        </div>

        {/* How It Works Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-2 rounded-lg">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">🌿 How It Works:</h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: <TestTube className="w-6 h-6 text-blue-600" />,
                title: "Saliva Collection Kit",
                description: "You receive a home kit to collect your DNA via saliva.",
              },
              {
                icon: <Dna className="w-6 h-6 text-purple-600" />,
                title: "Genetic Testing",
                description:
                  "The sample is analyzed to identify your genetic predispositions to over 250 health conditions — including metabolic disorders, cardiovascular issues, neurological risks, and more.",
              },
              {
                icon: <FileText className="w-6 h-6 text-orange-600" />,
                title: "Lifestyle Analysis",
                description:
                  "A comprehensive questionnaire assesses your current habits, diet, stress levels, sleep, and activity.",
              },
              {
                icon: <Target className="w-6 h-6 text-green-600" />,
                title: "Personalized Wellness Plan",
                description:
                  "You receive science-backed recommendations covering nutrition, fitness, stress management, supplements, and preventive care.",
              },
              {
                icon: <HeadphonesIcon className="w-6 h-6 text-indigo-600" />,
                title: "Genetic Counseling",
                description:
                  "Expert support to help you interpret your results and implement lasting lifestyle changes.",
              },
            ].map((step, index) => (
              <Card key={index} className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg flex-shrink-0">{step.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">🔍 Key Benefits:</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Shield className="w-5 h-5 text-green-600" />,
                text: "Tailored advice to prevent disease, not just manage it",
              },
              {
                icon: <Dna className="w-5 h-5 text-purple-600" />,
                text: "Detailed insights into genetic risks",
              },
              {
                icon: <Target className="w-5 h-5 text-blue-600" />,
                text: "Data-driven recommendations for diet, exercise, and lifestyle",
              },
              {
                icon: <Heart className="w-5 h-5 text-red-600" />,
                text: "Helps optimize energy, weight, immunity, and longevity",
              },
              {
                icon: <Users className="w-5 h-5 text-indigo-600" />,
                text: "Ongoing support from Tigris Valley's wellness experts",
              },
            ].map((benefit, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-50 p-2 rounded-full">{benefit.icon}</div>
                    <p className="text-gray-700 font-medium">{benefit.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partnership Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-green-100 p-2 rounded-lg">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">🌱 Why Tigris Valley + Vieroots?</h2>
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    At Tigris Valley, we believe wellness begins with personalization. By integrating the EPLIMO
                    platform from Vieroots Wellness Solutions, we provide our clients with next-generation health
                    assessments grounded in genomics and epigenetics.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Together, we empower you to take control of your long-term health and live a life of vitality and
                    purpose.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Partnership collaboration illustration"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Dna className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                Your genes hold the answers—unlock your personalized wellness plan today with EPLIMO at Tigris Valley.
              </h2>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      
    </div>
  )
}
