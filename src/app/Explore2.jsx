import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Shield,
  Brain,
  FileText,
  Zap,
  Wind,
  Droplets,
  Diamond,
  TestTube,
  CheckCircle,
  Activity,
  Stethoscope,
  HeartHandshake,
} from "lucide-react"

export default function Explore2() {
  const keyFeatures = [
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Care is tailored to individual needs, values, and goals.",
    },
    {
      icon: Users,
      title: "Multidisciplinary Team",
      description: "Doctors, nurses, therapists, and counselors work together to support the whole person.",
    },
    {
      icon: Shield,
      title: "Symptom Management",
      description: "Addresses pain, fatigue, breathlessness, nausea, and other distressing symptoms.",
    },
    {
      icon: Brain,
      title: "Emotional & Psychosocial Support",
      description: "Helps patients and families cope with the challenges of serious illness.",
    },
    {
      icon: FileText,
      title: "Advance Care Planning",
      description: "Guides patients in making informed decisions about future care and end-of-life preferences.",
    },
  ]

  const integrativeTherapies = [
    {
      icon: TestTube,
      emoji: "🧪",
      title: "High-Dose Vitamin C Therapy",
      description: "Reduces inflammation, supports immunity, increases energy, and improves quality of life.",
    },
    {
      icon: Wind,
      emoji: "🌬️",
      title: "Medical Ozone Therapy",
      description: "Boosts oxygenation, reduces oxidative stress, enhances immunity, and supports detoxification.",
    },
    {
      icon: Zap,
      emoji: "💨",
      title: "Hydrogen Therapy",
      description:
        "A potent antioxidant that reduces oxidative stress, supports cellular repair, and improves cognitive clarity and energy.",
    },
    {
      icon: Droplets,
      emoji: "💧",
      title: "Nutritional Therapy (Myers' Cocktail)",
      description:
        "An intravenous blend of essential vitamins and minerals that restores nutrient levels, boosts energy, and enhances immune function.",
    },
    {
      icon: Diamond,
      emoji: "🔷",
      title: "Methylene Blue Therapy",
      description:
        "Supports mitochondrial function, improves cellular energy production, enhances brain function, and has potential neuroprotective benefits.",
    },
  ]

  const benefits = [
    "Improved quality of life and comfort",
    "Reduced pain and symptom burden",
    "Better emotional and psychological coping",
    "Enhanced energy, mood, and overall resilience",
    "Improved communication and care coordination",
    "Potential extension of survival when introduced early",
  ]

  const conditions = [
    "Advanced or metastatic cancer",
    "Heart failure",
    "Chronic Obstructive Pulmonary Disease (COPD)",
    "Dementia and neurodegenerative disorders",
    "Other complex or life-limiting illnesses",
  ]

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      {/* Hero Section */}
      <header className="text-center space-y-4">
        <div className="flex justify-center mb-4">
          <HeartHandshake className="w-16 h-16 text-blue-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Whole-Person Support for Serious Illness
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Advanced palliative care focuses on improving the quality of life for individuals with serious or
          life-limiting illnesses. It provides relief from symptoms, supports emotional and spiritual well-being, and
          helps patients live as fully and comfortably as possible—even when a cure is no longer the focus.
        </p>
      </header>

      {/* Key Features Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Integrative Therapies Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-900">Integrative Therapies in Advanced Palliative Care</h2>
          <p className="text-gray-600">
            To enhance comfort and well-being, we integrate evidence-based supportive therapies:
          </p>
        </div>
        <div className="space-y-4">
          {integrativeTherapies.map((therapy, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <therapy.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{therapy.emoji}</span>
                      <h3 className="text-xl font-semibold text-gray-900">{therapy.title}</h3>
                    </div>
                    <p className="text-gray-600">{therapy.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conditions Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Conditions Commonly Supported</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {conditions.map((condition, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
              <Stethoscope className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">{condition}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <Activity className="w-12 h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Tigris Valley Advanced Palliative Care</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our advanced palliative care combines compassionate support with powerful integrative therapies—helping
          patients live with dignity, comfort, and meaning.
        </p>
        <Badge variant="secondary" className="mt-4 text-sm px-4 py-2">
          Compassionate • Comprehensive • Integrative
        </Badge>
      </section>
    </article>
  )
}
