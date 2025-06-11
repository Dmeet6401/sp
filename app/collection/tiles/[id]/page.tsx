"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, Download, Share2, ShoppingCart } from "lucide-react"

export default function TileDetails({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("600x600mm")
  const [selectedFinish, setSelectedFinish] = useState("Polished")

  // This would normally come from an API or database
  // For demo purposes, we're hardcoding a tile based on the ID
  const tileId = Number.parseInt(params.id)

  const tileData = {
    id: tileId,
    name: "Carrara White Marble Look Porcelain Tile",
    code: "SP-" + (1000 + tileId),
    description:
      "Elegant marble-inspired porcelain tiles that combine the timeless beauty of Carrara marble with the exceptional durability and practicality of porcelain. These premium tiles feature a stunning white background with delicate gray veining, creating a sophisticated and luxurious look for any space.",
    longDescription:
      "Our Carrara White Marble Look Porcelain Tiles are meticulously crafted to replicate the exquisite appearance of natural Carrara marble while offering the superior technical properties of porcelain. Each tile showcases a unique pattern of subtle gray veining against a pristine white background, creating a harmonious and elegant aesthetic that enhances any interior space. \n\nUnlike natural marble, these porcelain tiles are highly resistant to staining, scratching, and moisture, making them ideal for high-traffic areas and wet environments. The glazed surface requires minimal maintenance while providing exceptional durability and longevity. \n\nPerfect for creating a luxurious atmosphere in residential and commercial settings, these versatile tiles can be used for flooring, wall cladding, backsplashes, and feature walls. Their timeless elegance adds a touch of sophistication to kitchens, bathrooms, living areas, and commercial spaces alike.",
    category: "Marble Look",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    sizes: ["600x600mm", "800x800mm", "600x1200mm", "800x1600mm"],
    finishes: ["Polished", "Matt", "Lappato"],
    thickness: "10mm",
    material: "Porcelain",
    waterAbsorption: "≤ 0.05%",
    slipResistance: "R9",
    frostResistant: true,
    applications: ["Floor", "Wall", "Bathroom", "Kitchen", "Living Room", "Commercial"],
    features: [
      "Stain Resistant",
      "Scratch Resistant",
      "Easy Maintenance",
      "Frost Resistant",
      "Color Consistency",
      "UV Resistant",
    ],
    relatedProducts: [2, 3, 4, 5],
  }

  const relatedTiles = [
    {
      id: 2,
      name: "Calacatta Gold Porcelain Tile",
      image: "/placeholder.svg?height=300&width=400",
      category: "Marble Look",
    },
    {
      id: 3,
      name: "Statuario Venato Porcelain Tile",
      image: "/placeholder.svg?height=300&width=400",
      category: "Marble Look",
    },
    {
      id: 4,
      name: "Bianco Carrara Porcelain Tile",
      image: "/placeholder.svg?height=300&width=400",
      category: "Marble Look",
    },
    {
      id: 5,
      name: "Emperador Dark Porcelain Tile",
      image: "/placeholder.svg?height=300&width=400",
      category: "Marble Look",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8 text-sm">
          <button onClick={() => router.back()} className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Collection
          </button>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Marble Look</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700 font-medium">{tileData.name}</span>
        </div>

        {/* Product Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <img
                src={tileData.images[selectedImage] || "/placeholder.svg"}
                alt={tileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {tileData.images.map((image, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                    selectedImage === index ? "border-blue-600" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${tileData.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-2">{tileData.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{tileData.name}</h1>
              <p className="text-gray-500">Product Code: {tileData.code}</p>
            </div>

            <p className="text-gray-700 leading-relaxed">{tileData.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {tileData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedSize === size
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Select Finish</h3>
              <div className="flex flex-wrap gap-3">
                {tileData.finishes.map((finish) => (
                  <button
                    key={finish}
                    className={`px-4 py-2 border rounded-md transition-colors ${
                      selectedFinish === finish
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedFinish(finish)}
                  >
                    {finish}
                  </button>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {tileData.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Specs
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="details" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="details">Details & Specifications</TabsTrigger>
            <TabsTrigger value="technical">Technical Data</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="installation">Installation & Maintenance</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <div className="space-y-4 text-gray-700">
                  {tileData.longDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Specifications</h4>
                    <div className="space-y-2">
                      <div className="flex border-b border-gray-100 py-2">
                        <span className="w-1/2 text-gray-600">Material</span>
                        <span className="w-1/2 font-medium">{tileData.material}</span>
                      </div>
                      <div className="flex border-b border-gray-100 py-2">
                        <span className="w-1/2 text-gray-600">Available Sizes</span>
                        <span className="w-1/2 font-medium">{tileData.sizes.join(", ")}</span>
                      </div>
                      <div className="flex border-b border-gray-100 py-2">
                        <span className="w-1/2 text-gray-600">Finishes</span>
                        <span className="w-1/2 font-medium">{tileData.finishes.join(", ")}</span>
                      </div>
                      <div className="flex border-b border-gray-100 py-2">
                        <span className="w-1/2 text-gray-600">Thickness</span>
                        <span className="w-1/2 font-medium">{tileData.thickness}</span>
                      </div>
                      <div className="flex border-b border-gray-100 py-2">
                        <span className="w-1/2 text-gray-600">Water Absorption</span>
                        <span className="w-1/2 font-medium">{tileData.waterAbsorption}</span>
                      </div>
                      <div className="flex border-b border-gray-100 py-2">
                        <span className="w-1/2 text-gray-600">Slip Resistance</span>
                        <span className="w-1/2 font-medium">{tileData.slipResistance}</span>
                      </div>
                      <div className="flex border-b border-gray-100 py-2">
                        <span className="w-1/2 text-gray-600">Frost Resistant</span>
                        <span className="w-1/2 font-medium">{tileData.frostResistant ? "Yes" : "No"}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3">Applications</h4>
                    <div className="flex flex-wrap gap-2">
                      {tileData.applications.map((application, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-50">
                          {application}
                        </Badge>
                      ))}
                    </div>

                    <h4 className="text-lg font-medium mt-6 mb-3">Features</h4>
                    <div className="space-y-2">
                      {tileData.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Technical Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-700">
                          Property
                        </th>
                        <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-700">
                          Test Method
                        </th>
                        <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-700">
                          ISO Standard
                        </th>
                        <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-700">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-200">Length and width</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-2</td>
                        <td className="py-3 px-4 border-b border-gray-200">± 0.6%</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">± 0.3%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border-b border-gray-200">Thickness</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-2</td>
                        <td className="py-3 px-4 border-b border-gray-200">± 5.0%</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">± 3.0%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-200">Straightness of sides</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-2</td>
                        <td className="py-3 px-4 border-b border-gray-200">± 0.5%</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">± 0.3%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border-b border-gray-200">Rectangularity</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-2</td>
                        <td className="py-3 px-4 border-b border-gray-200">± 0.6%</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">± 0.3%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-200">Surface flatness</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-2</td>
                        <td className="py-3 px-4 border-b border-gray-200">± 0.5%</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">± 0.3%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border-b border-gray-200">Water absorption</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-3</td>
                        <td className="py-3 px-4 border-b border-gray-200">≤ 0.5%</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">≤ 0.05%</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 border-b border-gray-200">Breaking strength</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-4</td>
                        <td className="py-3 px-4 border-b border-gray-200">≥ 1300N</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">≥ 1500N</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 border-b border-gray-200">Modulus of rupture</td>
                        <td className="py-3 px-4 border-b border-gray-200">BS EN ISO 10545-4</td>
                        <td className="py-3 px-4 border-b border-gray-200">≥ 35 N/mm²</td>
                        <td className="py-3 px-4 border-b border-gray-200 font-medium">≥ 45 N/mm²</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Recommended Applications</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏠</span>
                    </div>
                    <h4 className="text-lg font-medium mb-2">Residential</h4>
                    <p className="text-gray-600">
                      Perfect for living rooms, kitchens, bathrooms, bedrooms, and entryways in residential settings.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🏢</span>
                    </div>
                    <h4 className="text-lg font-medium mb-2">Commercial</h4>
                    <p className="text-gray-600">
                      Ideal for hotels, restaurants, retail spaces, offices, and other high-traffic commercial areas.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🚿</span>
                    </div>
                    <h4 className="text-lg font-medium mb-2">Wet Areas</h4>
                    <p className="text-gray-600">
                      Suitable for bathrooms, showers, spas, and pool surrounds due to low water absorption.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div>
                    <h4 className="text-lg font-medium mb-4">Ideal Spaces</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Kitchen:</strong> Floors, backsplashes, and countertops
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Bathroom:</strong> Floors, walls, shower surrounds
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Living Areas:</strong> Floors, feature walls, fireplace surrounds
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Commercial:</strong> Lobbies, corridors, reception areas
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Hospitality:</strong> Hotel bathrooms, spa areas, restaurants
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-4">Application Methods</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Floor Installation:</strong> Traditional thinset method with appropriate adhesives
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Wall Installation:</strong> Suitable for vertical applications with proper adhesives
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Countertops:</strong> Can be used for countertop applications with proper support
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">
                          <strong>Outdoor:</strong> Suitable for covered outdoor areas (verify with specific product)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="installation">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Installation & Maintenance Guidelines</h3>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Pre-Installation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">1.</span>
                        <span className="text-gray-700">
                          Inspect tiles upon delivery. Verify color consistency, size, and quality before installation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">2.</span>
                        <span className="text-gray-700">
                          Prepare the substrate ensuring it is clean, level, and free from dust, grease, or loose
                          particles.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">3.</span>
                        <span className="text-gray-700">
                          Acclimate tiles to the installation environment for at least 48 hours before installation.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">4.</span>
                        <span className="text-gray-700">
                          Plan the layout carefully to minimize cuts and optimize the visual appearance.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3">Installation Process</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">1.</span>
                        <span className="text-gray-700">
                          Use a high-quality polymer-modified thinset adhesive appropriate for porcelain tiles.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">2.</span>
                        <span className="text-gray-700">
                          Apply adhesive using a notched trowel appropriate for the tile size.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">3.</span>
                        <span className="text-gray-700">
                          Use spacers to ensure consistent grout lines (recommended minimum 2mm).
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">4.</span>
                        <span className="text-gray-700">
                          For large format tiles, consider using a leveling system to prevent lippage.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">5.</span>
                        <span className="text-gray-700">
                          Allow adhesive to cure according to manufacturer's instructions before grouting.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3">Grouting & Finishing</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">1.</span>
                        <span className="text-gray-700">
                          Use a high-quality grout suitable for porcelain tiles and the intended application.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">2.</span>
                        <span className="text-gray-700">
                          For marble-look tiles, use non-pigmented or light-colored grout to prevent staining.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">3.</span>
                        <span className="text-gray-700">
                          Apply grout with a rubber float, working diagonally across grout lines.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">4.</span>
                        <span className="text-gray-700">
                          Clean excess grout from tile surfaces before it dries completely.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">5.</span>
                        <span className="text-gray-700">
                          Consider applying a grout sealer after curing to enhance stain resistance.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3">Maintenance & Cleaning</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">1.</span>
                        <span className="text-gray-700">
                          Regular cleaning with warm water and a pH-neutral cleaner is recommended.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">2.</span>
                        <span className="text-gray-700">
                          Avoid acidic or abrasive cleaners that may damage the tile surface or grout.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">3.</span>
                        <span className="text-gray-700">
                          Clean spills promptly to prevent potential staining, especially on polished surfaces.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">4.</span>
                        <span className="text-gray-700">
                          For polished finishes, periodic resealing may be beneficial in high-traffic areas.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-medium text-blue-600 mr-2">5.</span>
                        <span className="text-gray-700">
                          Use protective pads under furniture to prevent scratching the tile surface.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedTiles.map((tile) => (
              <Card key={tile.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={tile.image || "/placeholder.svg"}
                    alt={tile.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-blue-50 text-blue-700">{tile.category}</Badge>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tile.name}
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    onClick={() => router.push(`/collection/tiles/${tile.id}`)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-blue-600 text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right Tile?</h2>
                <p className="text-blue-100 mb-6">
                  Our experts are ready to assist you with product information, technical specifications, and custom
                  requirements. Contact us today for personalized assistance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                    Request Sample
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                    Contact Sales Team
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg?height=200&width=400"
                  alt="Customer Support"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
