import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import image from "../assets/imageEq.jpg"
import {
  Heart,
  Shield,
  Zap,
  Brain,
  Stethoscope,
  Activity,
  Droplets,
  Leaf,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Phone,
  Calendar,
  ArrowRight,
  Microscope,
  FlaskConical,
  Dna,
} from "lucide-react"

export default function Explore3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Heart className="w-4 h-4 mr-2" />
              Advanced Medical Care
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Preventive Cardiology &<span className="text-blue-600"> Regenerative Medicine</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Where ancient healing meets modern regeneration at Tigris Valley - integrating cutting-edge therapies for
              cardiovascular health and neurological wellness.
            </p>
            
          </div>

          <div className="relative">
            <img
              src={image}
              alt="Modern medical facility with advanced equipment"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-2xl "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Chelation Therapy Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-800">
              <Shield className="w-4 h-4 mr-2" />
              Preventive Cardiology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Chelation Therapy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A targeted method to eliminate accumulated toxic heavy metals and excess calcium deposits using EDTA
              combined with essential nutrients and antioxidants.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/09/GettyImages-1166090317-header-1024x575.jpg?w=1155&h=1528"
                alt="Chelation therapy treatment room"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-xl "
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Chelation Therapy?</h3>
              <p className="text-gray-600 mb-6">
                Heavy metals and vascular calcium deposits have been linked to chronic conditions including
                atherosclerosis, poor circulation, and increased cardiovascular risk.
              </p>

              <div className="grid gap-4">
                {[
                  "Atherosclerosis prevention",
                  "Improved circulation",
                  "Reduced cardiovascular risk",
                  "Decreased inflammation",
                  "Enhanced immune function",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TACT Study Highlight */}
          <Card className="mb-12 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-900">
                <Microscope className="w-6 h-6" />
                TACT 1 Study Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                A landmark 9-year trial funded by the U.S. National Institutes of Health involving over 1,700 patients
                showed statistically significant cardiovascular benefits, especially in diabetic patients.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Reduced cardiovascular events
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Fewer hospitalizations
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Improved outcomes in diabetics
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Treatment Protocol */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>30 IV Infusions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Usually administered twice a week under expert medical supervision</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>3-3.5 Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Each comfortable session duration with continuous monitoring</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Supportive Nutrients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Includes antioxidants and minerals to replenish essential nutrients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Ozone Therapy Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800">
              <Zap className="w-4 h-4 mr-2" />
              Ozone Therapy
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Medical Ozone Therapy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Targeting root causes of cardiovascular disease through enhanced oxygenation, reduced inflammation, and
              improved cellular metabolism.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">How Ozone Therapy Works</h3>
              <p className="text-gray-600">
                Medical-grade ozone (O₃) is administered through precise, therapeutic concentrations to enhance the
                body's antioxidant capacity and support vascular health.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Activity, text: "Improves blood flow and oxygen delivery" },
                  { icon: Shield, text: "Reduces systemic inflammation" },
                  { icon: Heart, text: "Enhances endothelial function" },
                  { icon: Leaf, text: "Promotes natural detoxification" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-cyan-600" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Ozone therapy equipment and treatment"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Delivery Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "MAH", desc: "Major Autohemotherapy", icon: Droplets },
              { title: "EBOO", desc: "Extracorporeal Blood Oxygenation", icon: Activity },
              { title: "Rectal Insufflation", desc: "Minimally invasive systemic option", icon: Stethoscope },
              { title: "Topical Applications", desc: "For localized vascular issues", icon: Heart },
            ].map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <method.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{method.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Neuro-Regenerative Care Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800">
              <Brain className="w-4 h-4 mr-2" />
              Neuro-Regenerative Care
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Integrated Ortho-Neuro Care</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combining ancient healing wisdom with modern regenerative therapies for neurological conditions, stroke
              recovery, and neurodegenerative diseases.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Integrated therapy session combining traditional and modern treatments"
                width={800}
                height={400}
                className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Holistic Approach</h3>
              <p className="text-gray-600">
                We integrate time-tested healing systems with cutting-edge regenerative medicine to address neurological
                conditions comprehensively.
              </p>
              <div className="space-y-3">
                {["Ayurveda & Unani Medicine", "Acupuncture & TCM", "Exosome Therapy", "IV Nutritional Support"].map(
                  (therapy, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700">{therapy}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Core Therapeutic Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Dna,
                title: "Exosome Therapy",
                desc: "Promotes cellular regeneration and neuron repair for neuroplasticity enhancement",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Droplets,
                title: "IV Nutritional Therapy",
                desc: "Custom infusions including Myers' Cocktail, Glutathione, and Methylene Blue",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Shield,
                title: "Mitochondrial Support",
                desc: "Targets cellular energy production and reduces aging-related neurodegeneration",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: Activity,
                title: "Physiotherapy",
                desc: "Customized rehabilitation for stroke, spinal, and nerve injury recovery",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: Leaf,
                title: "Gut-Brain Axis",
                desc: "Restores healthy gut flora and reduces neuroinflammation",
                color: "bg-teal-100 text-teal-600",
              },
              {
                icon: Heart,
                title: "Traditional Healing",
                desc: "Ayurvedic neuro therapy and acupuncture for holistic nervous system support",
                color: "bg-rose-100 text-rose-600",
              },
            ].map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div
                    className={`w-12 h-12 ${pillar.color.split(" ")[0]} rounded-full flex items-center justify-center mb-3`}
                  >
                    <pillar.icon className={`w-6 h-6 ${pillar.color.split(" ")[1]}`} />
                  </div>
                  <CardTitle className="text-lg">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{pillar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Exclusions */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety & Considerations</h2>
            <p className="text-gray-600">
              Our treatments are carefully monitored with strict safety protocols and eligibility criteria.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Ideal Candidates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Diabetes with coronary artery disease",
                  "Angina or peripheral vascular disease",
                  "High cardiovascular risk factors",
                  "Seeking non-invasive alternatives",
                  "Post-MI complications",
                ].map((candidate, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                    <span className="text-sm text-green-800">{candidate}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Exclusion Criteria
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Severe renal or liver dysfunction",
                  "Seizure disorders",
                  "EDTA allergy",
                  "Uncontrolled hypocalcemia",
                  "Certain cardiac conditions",
                ].map((exclusion, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full" />
                    <span className="text-sm text-red-800">{exclusion}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Begin Your Healing Journey Today</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience whole-person wellness at Tigris Valley, where cutting-edge medicine meets compassionate care in
            the serene beauty of Kerala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="py-12 px-4 md:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-500" />
            <span className="text-xl font-semibold">Tigris Valley</span>
          </div>
          <p className="text-gray-400 mb-6">Advanced Integrative Medicine • Kerala, India</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>Preventive Cardiology</span>
            <span>•</span>
            <span>Regenerative Medicine</span>
            <span>•</span>
            <span>Neurological Care</span>
            <span>•</span>
            <span>Holistic Wellness</span>
          </div>
        </div>
      </footer> */}
    </div>
  )
}
