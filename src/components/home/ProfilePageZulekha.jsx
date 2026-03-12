import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Users, Award, Globe, Mail, Phone } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Zulekha Shakoor Rajani</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Counselling & Spiritual Psychologist | Co-Head, Dept of Islamic Psychology, Research and Training
            </p>
            <p className="text-lg text-primary font-medium">Mind and Brain Hospital, Bengaluru</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="bg-prtext-primary-600 text-primary-600-foreground">
              <Heart className="w-4 h-4 mr-1" />
              Spiritual Psychology
            </Badge>
            <Badge variant="secondary" className="bg-prtext-primary-600 text-primary-600-foreground">
              <Users className="w-4 h-4 mr-1" />
              Marital Therapy
            </Badge>
            <Badge variant="secondary" className="bg-prtext-primary-600 text-primary-600-foreground">
              <BookOpen className="w-4 h-4 mr-1" />
              Islamic Psychology
            </Badge>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About</h2>
          <Card className="border-border shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-card-foreground mb-6">
                Zulekha Shakoor Rajani is a dedicated Counselling and Spiritual Psychologist with nearly a decade of
                experience in therapy, education, and Islamic Psychology. She currently co-heads the Department of
                Islamic Psychology – Research, Training, and Psychoeducation at Mind and Brain Hospital, where she
                integrates Islamic spiritual principles with evidence-based psychotherapy.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground mb-6">
                Zulekha is also a facilitator at Al-Balagh Academy (UK) and serves as Executive Advisory Head for the
                Indian Chapter of the International Students of Islamic Psychology (ISIP). Her work focuses on
                culturally rooted mental health care, marital and premarital therapy, and holistic psychological
                healing.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground">
                She received her Islamic Psychology Training and supervision from reputed Institutions like Cambridge
                Muslim College (Cambridge, UK) and Khalil Center (Istanbul, Turkiye).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Spiritual Psychology</h3>
                <p className="text-muted-foreground">
                  Integrating Islamic spiritual principles with evidence-based psychotherapy
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Marital & Premarital Therapy</h3>
                <p className="text-muted-foreground">Specialized counselling for couples and relationship guidance</p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Culturally Rooted Care</h3>
                <p className="text-muted-foreground">Mental health care that honors cultural and religious values</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training & Credentials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Training & Credentials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border shadow-lg">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Cambridge Muslim College</h3>
                <p className="text-muted-foreground">Cambridge, UK - Islamic Psychology Training and Supervision</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Khalil Center</h3>
                <p className="text-muted-foreground">Istanbul, Turkiye - Islamic Psychology Training and Supervision</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured In</h2>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
            {["Al Jazeera", "The Wire", "India Today", "MuslimMatters", "The Cognate", "More..."].map(
              (outlet, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <Globe className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <p className="font-medium text-card-foreground">{outlet}</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
          <p className="text-center mt-8 text-muted-foreground">
            Her contributions have been featured in leading media outlets, and she has presented research papers at
            international forums and conducted workshops across India on topics related to faith, resilience, and
            emotional well-being across diverse populations.
          </p>
        </div>
      </section>

      {/* Current Roles */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Current Roles</h2>
          <div className="space-y-6">
            <Card className="border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  Co-Head, Department of Islamic Psychology
                </h3>
                <p className="text-primary-600 font-medium mb-2">Mind and Brain Hospital, Bengaluru</p>
                <p className="text-muted-foreground">Research, Training, and Psychoeducation</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Facilitator</h3>
                <p className="text-primary-600 font-medium mb-2">Al-Balagh Academy (UK)</p>
              </CardContent>
            </Card>

            <Card className="border-border shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Executive Advisory Head</h3>
                <p className="text-primary-600 font-medium mb-2">International Students of Islamic Psychology (ISIP)</p>
                <p className="text-muted-foreground">Indian Chapter</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
    </div>
  )
}
