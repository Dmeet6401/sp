import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Truck, Headphones } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality testing to ensure it meets international standards.",
    },
    {
      icon: Shield,
      title: "Warranty Protection",
      description: "Comprehensive warranty coverage on all our products for your peace of mind.",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "Reliable worldwide shipping with secure packaging and timely delivery.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you with any queries or concerns.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Why Choose Star Porselano?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to excellence in every aspect of our business, from product quality to customer service,
            making us your trusted ceramic partner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl border-0 transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
