import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      title: "Porcelain Tiles",
      description: "Premium porcelain tiles with superior durability and elegant designs for modern spaces.",
      image: "/images/marble-texture-1.jpg",
      features: ["Water Resistant", "Scratch Proof", "Easy Maintenance"],
    },
    {
      title: "Ceramic Floor Tiles",
      description: "High-quality ceramic floor tiles perfect for residential and commercial applications.",
      image: "/images/ceramic-tiles-1.jpg",
      features: ["Anti-Slip", "Stain Resistant", "Long Lasting"],
    },
    {
      title: "Stone Look Tiles",
      description: "Natural stone appearance tiles that add elegance and style to any interior space.",
      image: "/images/stone-texture-1.jpg",
      features: ["Designer Patterns", "Easy Installation", "Moisture Proof"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Product Collection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium ceramic and porcelain products designed to meet diverse
            architectural and design requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/collection" className="flex items-center">
              View Complete Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
