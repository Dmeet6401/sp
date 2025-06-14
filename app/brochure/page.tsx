"use client"
import Header from "../components/header"
import Footer from "../components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"
import Link from "next/link"
import HeroSection from "../components/hero-section"
import { useEffect, useState } from "react"

export default function Brochure() {
  const [tileSizes, setTileSizes] = useState<{ tile_size_id: number; tile_size_name: string }[]>([])

  useEffect(() => {
    const fetchTileSizes = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/get-all-tile-sizes`)
        const data = await res.json()
        if (data.tileSizes) setTileSizes(data.tileSizes)
      } catch (error) {
        console.error("Failed to fetch tile sizes:", error)
      }
    }
    fetchTileSizes()
  }, [])

  const catalogues = [
    {
      title: '300mmx450mm (12"x18")',
      image: "/placeholder.svg?height=400&width=300",
      size: "5.2 MB",
      type: "PDF",
    },
    {
      title: '600mmX1200mm (24" X 48")',
      image: "/placeholder.svg?height=400&width=300",
      size: "7.8 MB",
      type: "PDF",
    },
    {
      title: '600mmX600mm (24" X 24")',
      image: "/placeholder.svg?height=400&width=300",
      size: "6.5 MB",
      type: "PDF",
    },
    {
      title: "Designer Wall Tiles",
      image: "/placeholder.svg?height=400&width=300",
      size: "8.2 MB",
      type: "PDF",
    },
    {
      title: "Marble Look Collection",
      image: "/placeholder.svg?height=400&width=300",
      size: "9.1 MB",
      type: "PDF",
    },
    {
      title: "Company Profile",
      image: "/placeholder.svg?height=400&width=300",
      size: "4.3 MB",
      type: "PDF",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection
        title="Brochures & Catalogues"
        subtitle="Download our product catalogues and brochures to explore our complete collection of premium ceramic and porcelain tiles"
      />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
       

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Catalogue Filter Sidebar */}
            <div className="lg:col-span-3">
              <Card className="p-6 sticky top-20">
                <div className="border-l-4 border-blue-600 pl-4 mb-6">
                  <h2 className="text-xl font-bold text-gray-900">OUR CATALOGUE</h2>
                </div>

                <ul className="space-y-3">
                  {tileSizes.map((size) => {
                    const trimmedName = size.tile_size_name.trim();
                    return (
                      <li key={trimmedName} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <a
                          href={`#${trimmedName.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-gray-700 hover:text-blue-600"
                        >
                          {trimmedName}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Request Custom Catalogue</Button>
                </div>
              </Card>
            </div>

            {/* Catalogue Grid */}
            <div className="lg:col-span-9">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catalogues.map((catalogue, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="relative group">
                      <div className="overflow-hidden rounded-t-lg">
                        <img
                          src={catalogue.image || "/placeholder.svg"}
                          alt={`${catalogue.title} Catalogue`}
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Download className="mr-2 h-4 w-4" />
                            Preview
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-600 text-white p-4 rounded-b-lg">
                      <div className="text-lg font-medium mb-1">E-CATALOGUE</div>
                      <div className="text-2xl font-bold mb-3">{catalogue.title}</div>
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-blue-100">
                          {catalogue.size} • {catalogue.type}
                        </div>
                        <Button variant="secondary" size="sm" className="bg-white text-blue-600 hover:bg-blue-50">
                          DOWNLOAD
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Custom Catalogue Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Need a Custom Catalogue?</h2>
              <p className="text-blue-100 text-lg mb-6">
                We can create customized catalogues tailored to your specific requirements. Contact our team to request
                a personalized catalogue featuring selected products, specifications, and pricing.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Request Custom Catalogue
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Custom Catalogue"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our catalogues contain detailed technical specifications for all our products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Technical Parameters</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700">Product Designs</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700">Size Variations</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Quality Assurance</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Digital vs Print */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Catalogues</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Instant access to our complete product range</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">High-resolution images and detailed specifications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Interactive features and search functionality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Environmentally friendly option</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Download E-Catalogues
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Print Catalogues</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Premium quality printed materials</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Perfect for showrooms and client presentations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Tangible reference material for projects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700">Available upon request</span>
                </li>
              </ul>
              <Button variant="outline">Request Print Catalogues</Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
