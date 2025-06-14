import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Globe, Factory, Shield, CheckCircle, Target, Eye, Heart } from "lucide-react"
import HeroSection from "../components/hero-section"

export default function AboutUs() {
  const milestones = [
    { year: "2003", event: "Star Porselano founded with a vision to revolutionize ceramic industry" },
    { year: "2008", event: "Started international exports to 15 countries" },
    { year: "2012", event: "Expanded international exports to 35 countries" },
    { year: "2015", event: "Digital Printing Technology" },
    { year: "2020", event: "Expanded export network to 50+ countries worldwide" },
    { year: "2025", event: "Celebrating 25+ years of excellence and 65+ Countries exports" },
  ]

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "CE Marking Certification",
    "SONCAP Certification",
    "BIS Certification",
    "Green Building Certification",
  ]

  const leadership = [
    {
      name: "Shailesh Patel",
      position: "Chairman & Managing Director",
      experience: "25+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Narendra Patel",
      position: "Partner - Star Brand",
      experience: "10+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    // {
    //   name: "Amit Kumar",
    //   position: "Technical Director",
    //   experience: "18+ years",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
    // {
    //   name: "Neha Gupta",
    //   position: "Export Director",
    //   experience: "15+ years",
    //   image: "/placeholder.svg?height=300&width=300",
    // },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection
        title="About Star Porselano"
        subtitle="Leading the ceramic industry with 22+ years of excellence, innovation, and commitment to quality"
      />

      {/* Our Goal Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Star Porselano Vision"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Goal</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to become the world's most trusted and innovative tile brand, delivering superior quality products while embracing eco-friendly practices. We aim to expand our global presence, forge long-term partnerships, and revolutionize the tile industry with cutting-edge technology and exceptional craftsmanship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Star Porselano, we don't just manufacture tiles – we create lasting impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Supply world-class ceramic and porcelain tiles that exceed customer expectations
                  through continuous innovation, superior quality, and exceptional service while maintaining
                  environmental sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and preferred ceramic tile brand globally, recognized for innovation, quality,
                  and customer satisfaction while contributing to sustainable development and creating value for all
                  stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Quality Excellence, Customer Focus, Innovation, Integrity, Environmental Responsibility, Teamwork, and
                  Continuous Improvement form the foundation of everything we do at Star Porselano.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped Star Porselano into the industry leader we are today
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent>
                        <Badge className="mb-3 bg-blue-600">{milestone.year}</Badge>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Manufacturing Excellence</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our state-of-the-art manufacturing facility spans over 100,000 square feet and is equipped with the
                latest Italian and German machinery. We have the capacity to produce over 1 million square feet of tiles
                per month, ensuring we can meet the demands of our global customer base.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100,000+</div>
                  <div className="text-sm text-gray-600">Sq. Ft. Facility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">Sq. Ft. Monthly Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Product Designs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Production Operations</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Advanced Digital Printing Technology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Automated Quality Control Systems</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Energy-Efficient Kilns</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Waste Water Treatment Plant</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Manufacturing Equipment"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Quality Control Lab"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Warehouse Facility"
                className="rounded-lg shadow-lg"
              />
              <img src="/placeholder.svg?height=250&width=300" alt="Packaging Unit" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Quality & Certifications */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quality & Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by international certifications and rigorous testing standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Testing</h3>
                <p className="text-gray-600">Every batch undergoes 15+ quality parameters testing</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">International Standards</h3>
                <p className="text-gray-600">Products meet global quality and safety standards</p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="text-center">
                <Factory className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Equipment</h3>
                <p className="text-gray-600">Latest technology ensures consistent quality output</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who drive Star Porselano's vision and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{leader.position}</p>
                  <p className="text-sm text-gray-600">{leader.experience} in ceramic industry</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Global Presence</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Star Porselano products are trusted by customers across 65+ countries worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-blue-100">Products Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">65+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            {/* <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5M+</div>
              <div className="text-blue-100">Sq. Ft. Exported Annually</div>
            </div> */}
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Star Porselano Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="flex-1 mb-8 lg:mb-0">
            <div className="uppercase text-sm tracking-widest text-gray-500 mb-2">We Serve</div>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">Why Star Porselano</h2>
          </div>
          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center text-center bg-white">
              <svg className="h-10 w-10 text-blue-900 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v2m6.364 1.636l-1.414 1.414M22 12h-2M19.364 19.364l-1.414-1.414M12 22v-2M4.636 19.364l1.414-1.414M2 12h2M4.636 4.636l1.414 1.414M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
              <div className="font-bold text-base mb-1">LATEST TECHNOLOGY</div>
            </div>
            <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center text-center bg-white">
              <svg className="h-10 w-10 text-blue-900 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4-4M7 17a5 5 0 0010 0V7a5 5 0 00-10 0v10z" /></svg>
              <div className="font-bold text-base mb-1">QUALITY CONTROL</div>
            </div>
            <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center text-center bg-white">
              <svg className="h-10 w-10 text-blue-900 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><circle cx="17" cy="17" r="4" /></svg>
              <div className="font-bold text-base mb-1">TEAM WORK</div>
            </div>
            <div className="border border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center text-center bg-white">
              <svg className="h-10 w-10 text-blue-900 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /><path d="M16 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" /></svg>
              <div className="font-bold text-base mb-1">ON TIME DELIVERY</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
