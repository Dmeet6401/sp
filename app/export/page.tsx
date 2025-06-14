import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Ship, FileText, Shield, Clock, Award, MapPin, Truck, Package, CheckCircle } from "lucide-react"
import HeroSection from "../components/hero-section"

export default function Export() {
  const exportCountries = [
    { region: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"] },
    { region: "Africa", countries: ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco"] },
    { region: "Asia Pacific", countries: ["Malaysia", "Singapore", "Thailand", "Philippines", "Vietnam", "Indonesia"] },
    { region: "Europe", countries: ["UK", "Germany", "France", "Italy", "Spain", "Netherlands"] },
    { region: "Americas", countries: ["USA", "Canada", "Brazil", "Mexico", "Argentina", "Chile"] },
    { region: "Others", countries: ["Australia", "New Zealand", "Turkey", "Russia", "Ukraine", "Poland"] },
  ]

  const exportServices = [
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete export documentation including certificates, invoices, and shipping documents",
    },
    {
      icon: Ship,
      title: "Shipping & Logistics",
      description: "Reliable shipping partners ensuring safe and timely delivery worldwide",
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Specialized packaging solutions to protect products during international transit",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Pre-shipment quality inspection and international standard compliance",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed delivery schedules with real-time tracking and updates",
    },
    {
      icon: Award,
      title: "Export Compliance",
      description: "Full compliance with international trade regulations and standards",
    },
  ]

  const exportStats = [
    { number: "50+", label: "Countries Served" },
    { number: "5M+", label: "Sq. Ft. Exported Annually" },
    { number: "1000+", label: "International Partners" },
    { number: "25+", label: "Years Export Experience" },
  ]

  const certifications = [
    "ISO 9001:2015",
    "CE Marking",
    "SONCAP Certificate",
    "BIS Certification",
    "COC Certificate",
    "PVOC Certificate",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection
        title="Global Export Excellence"
        subtitle="Star Porselano has been a trusted export partner for over 25 years, delivering premium ceramic and porcelain tiles to customers across 50+ countries worldwide."
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Your Trusted Export Partner</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                With decades of experience in international trade, we understand the complexities of global markets. Our
                dedicated export team ensures seamless transactions, from initial inquiry to final delivery, making us
                the preferred choice for distributors and retailers worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {exportStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Export Inquiry
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Global Export Network"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Export Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive export solutions designed to make international trade simple and efficient
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Global Presence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Star Porselano products are trusted by customers across six continents
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exportCountries.map((region, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-900">{region.region}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Export Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined export process ensures smooth transactions from inquiry to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Inquiry & Quote</h3>
              <p className="text-gray-600">Submit your requirements and receive detailed quotation within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Order Confirmation</h3>
              <p className="text-gray-600">Finalize specifications, quantities, and delivery terms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Production & QC</h3>
              <p className="text-gray-600">Manufacturing with strict quality control and pre-shipment inspection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Shipping & Delivery</h3>
              <p className="text-gray-600">Secure packaging and reliable shipping with tracking information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Export Certifications</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our products meet international quality standards and export compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center p-6">
                <CardContent>
                  <Shield className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Download Export Certificates
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Export */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Star Porselano for Export?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Competitive Pricing</h3>
                    <p className="text-gray-600">Direct manufacturer pricing with no middleman markup</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Flexible MOQ</h3>
                    <p className="text-gray-600">Minimum order quantities tailored to your business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Packaging</h3>
                    <p className="text-gray-600">Private labeling and custom packaging solutions available</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dedicated Support</h3>
                    <p className="text-gray-600">Dedicated export team for personalized service and support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Guarantee</h3>
                    <p className="text-gray-600">100% quality guarantee with comprehensive warranty coverage</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Export Packaging"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Container Loading"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/placeholder.svg?height=250&width=300"
                alt="Quality Inspection"
                className="rounded-lg shadow-lg"
              />
              <img src="/placeholder.svg?height=250&width=300" alt="Documentation" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Export Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Exporting?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact our export team today to discuss your requirements and get a customized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Export Quote
              </Button>
              <Button variant="outline" size="lg">
                Download Export Brochure
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center p-6">
              <CardContent>
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Export Sales</h3>
                <p className="text-gray-600">export@starporselano.com</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Logistics Support</h3>
                <p className="text-gray-600">logistics@starporselano.com</p>
                <p className="text-gray-600">+91 98765 43211</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent>
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600">docs@starporselano.com</p>
                <p className="text-gray-600">+91 98765 43212</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
