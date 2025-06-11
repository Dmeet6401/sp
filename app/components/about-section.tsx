import { Card, CardContent } from "@/components/ui/card"
import { Award, Globe, Users, Zap } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "ISO certified manufacturing processes ensuring highest quality standards",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to over 50 countries worldwide with trusted partnerships",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled craftsmen and engineers with decades of industry experience",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology and continuous product development",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About Star Porselano</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 25 years of excellence in the ceramic industry, we are committed to delivering premium porcelain
            tiles and ceramic products that transform spaces worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Star Porselano Manufacturing Facility"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Leading Ceramic Manufacturer Since 1998</h3>
            <p className="text-gray-600 leading-relaxed">
              Star Porselano has established itself as a premier manufacturer and exporter of porcelain tiles and
              ceramic products. Our state-of-the-art manufacturing facility combines traditional craftsmanship with
              modern technology to produce tiles that meet international quality standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in creating durable, elegant, and versatile ceramic solutions for residential, commercial,
              and industrial applications. Our commitment to innovation and quality has made us a trusted partner for
              distributors and contractors worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">1M+</div>
                <div className="text-sm text-gray-600">Sq. Ft. Monthly Production</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
