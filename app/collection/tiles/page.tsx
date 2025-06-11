"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Tile type configurations
const tileTypeConfigs = {
  "porcelain-tiles": {
    title: "Porcelain Tiles",
    description: "Premium quality tiles with superior durability and water resistance",
    hero: "Premium Porcelain Tiles Collection",
    overview: {
      title: "Premium Porcelain Tiles",
      content: "One of the most often utilized forms of flooring in homes and offices is porcelain tile flooring. Star Porselano is always mentioned while discussing porcelain tiles; We are the largest manufacturer and exporter of porcelain tiles. Due to its strength, longevity, and elegance, porcelain tile is recognized as the upgraded version of regular ceramic tile.",
      additionalContent: "Our porcelain tiles are made from refined clay and fired at extremely high temperatures, resulting in a dense, non-porous surface that's highly resistant to water, stains, and wear. Perfect for both indoor and outdoor applications."
    },
    sizes: ["600x600mm", "600x1200mm", "800x800mm", "800x1600mm", "800x2400mm", "800x3000mm"],
    applications: ["Living Rooms", "Bedrooms", "Kitchens", "Bathrooms", "Commercial Spaces", "Outdoor Areas"]
  },
  "polished-porcelain-tile": {
    title: "Polished Porcelain Tiles",
    description: "High-gloss finish tiles with mirror-like surface and exceptional elegance",
    hero: "Polished Porcelain Tiles Collection",
    overview: {
      title: "Polished Porcelain Tiles",
      content: "Polished porcelain tiles offer a luxurious, mirror-like finish that adds sophistication to any space. The polishing process creates a smooth, reflective surface that enhances the natural beauty of the tile while maintaining all the durability benefits of porcelain.",
      additionalContent: "These tiles are perfect for creating bright, spacious interiors as they reflect light beautifully. However, they require careful consideration for wet areas due to their smooth surface."
    },
    sizes: ["600x600mm", "600x1200mm", "800x800mm", "1200x1200mm"],
    applications: ["Luxury Living Rooms", "Formal Dining Areas", "Hotel Lobbies", "Showrooms", "Reception Areas"]
  },
  "wall-tiles": {
    title: "Wall Tiles",
    description: "Decorative tiles designed specifically for wall applications",
    hero: "Wall Tiles Collection",
    overview: {
      title: "Premium Wall Tiles",
      content: "Our wall tiles are specifically designed for vertical surfaces, offering both aesthetic appeal and practical functionality. Available in various sizes, colors, and finishes, these tiles are perfect for creating stunning feature walls and practical wall coverings.",
      additionalContent: "From kitchens and bathrooms to living areas and commercial spaces, our wall tiles provide excellent water resistance, easy maintenance, and endless design possibilities."
    },
    sizes: ["250x375mm", "300x450mm", "300x600mm", "400x800mm"],
    applications: ["Kitchen Backsplashes", "Bathroom Walls", "Feature Walls", "Commercial Interiors", "Shower Areas"]
  }
}

function TilesCollectionContent() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedSize, setSelectedSize] = useState<keyof typeof tilesBySize>("600x1200")
  const [tileType, setTileType] = useState<keyof typeof tileTypeConfigs>("porcelain-tiles")
  const searchParams = useSearchParams()

  useEffect(() => {
    const type = searchParams.get('type') || 'porcelain-tiles'
    if (type in tileTypeConfigs) {
      setTileType(type as keyof typeof tileTypeConfigs)
    }
  }, [searchParams])

  const getCurrentConfig = () => tileTypeConfigs[tileType] || tileTypeConfigs["porcelain-tiles"]

  const sizeCategories = [
    { size: "600x1200", label: "600x1200MM", width: "80px", height: "120px" },
    { size: "800x1600", label: "800x1600MM", width: "90px", height: "140px" },
    { size: "800x2400", label: "800x2400MM", width: "100px", height: "160px" },
    { size: "800x3000", label: "800x3000MM", width: "110px", height: "180px" },
  ]

  const tilesBySize = {
    "600x1200": [
      {
        id: 1,
        name: "DYNASTY BEIGE",
        image: "/placeholder.svg?height=400&width=300&text=Dynasty+Beige",
        category: "Marble Look",
      },
      {
        id: 2,
        name: "FOREST BROWN",
        image: "/placeholder.svg?height=400&width=300&text=Forest+Brown",
        category: "Stone Look",
      },
      {
        id: 3,
        name: "GOLD AGATE ONYX",
        image: "/placeholder.svg?height=400&width=300&text=Gold+Agate",
        category: "Marble Look",
      },
      {
        id: 4,
        name: "ROMANTIC GREY",
        image: "/placeholder.svg?height=400&width=300&text=Romantic+Grey",
        category: "Marble Look",
      },
      {
        id: 5,
        name: "STATUARIO VENATO",
        image: "/placeholder.svg?height=400&width=300&text=Statuario+Venato",
        category: "Marble Look",
      },
      {
        id: 6,
        name: "CALACATTA GOLD",
        image: "/placeholder.svg?height=400&width=300&text=Calacatta+Gold",
        category: "Marble Look",
      },
    ],
    "800x1600": [
      {
        id: 7,
        name: "EMPERADOR DARK",
        image: "/placeholder.svg?height=400&width=300&text=Emperador+Dark",
        category: "Marble Look",
      },
      {
        id: 8,
        name: "NERO MARQUINA",
        image: "/placeholder.svg?height=400&width=300&text=Nero+Marquina",
        category: "Marble Look",
      },
      {
        id: 9,
        name: "TRAVERTINE CLASSIC",
        image: "/placeholder.svg?height=400&width=300&text=Travertine+Classic",
        category: "Stone Look",
      },
      {
        id: 10,
        name: "ONYX VERDE",
        image: "/placeholder.svg?height=400&width=300&text=Onyx+Verde",
        category: "Marble Look",
      },
    ],
    "800x2400": [
      {
        id: 11,
        name: "SAHARA BEIGE",
        image: "/placeholder.svg?height=600&width=200&text=Sahara+Beige",
        category: "Stone Look",
      },
      {
        id: 12,
        name: "MIDNIGHT BLACK",
        image: "/placeholder.svg?height=600&width=200&text=Midnight+Black",
        category: "Marble Look",
      },
      {
        id: 13,
        name: "OCEAN BLUE",
        image: "/placeholder.svg?height=600&width=200&text=Ocean+Blue",
        category: "Stone Look",
      },
      {
        id: 14,
        name: "GOLDEN VEINS",
        image: "/placeholder.svg?height=600&width=200&text=Golden+Veins",
        category: "Marble Look",
      },
      {
        id: 15,
        name: "COPPER STONE",
        image: "/placeholder.svg?height=600&width=200&text=Copper+Stone",
        category: "Stone Look",
      },
    ],
    "800x3000": [
      {
        id: 16,
        name: "ARCTIC WHITE",
        image: "/placeholder.svg?height=750&width=200&text=Arctic+White",
        category: "Marble Look",
      },
      {
        id: 17,
        name: "CHARCOAL GREY",
        image: "/placeholder.svg?height=750&width=200&text=Charcoal+Grey",
        category: "Stone Look",
      },
      {
        id: 18,
        name: "ROYAL GOLD",
        image: "/placeholder.svg?height=750&width=200&text=Royal+Gold",
        category: "Marble Look",
      },
    ],
  }

  const allTileTypes = [
    {
      name: "Vitrified Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-strength, low-absorption tiles perfect for heavy traffic areas",
      sizes: ["600x600mm", "800x800mm"],
      finish: "Polished, Matt",
    },
    {
      name: "Porcelain Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium quality tiles with superior durability and water resistance",
      sizes: ["600x600mm", "600x1200mm", "800x800mm"],
      finish: "Polished, Matt, Rustic",
    },
    {
      name: "Ceramic Floor Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Traditional ceramic tiles ideal for residential flooring",
      sizes: ["300x300mm", "400x400mm", "600x600mm"],
      finish: "Glossy, Matt",
    },
    {
      name: "Wall Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Decorative tiles designed specifically for wall applications",
      sizes: ["250x375mm", "300x450mm", "300x600mm"],
      finish: "Glossy, Matt, Textured",
    },
    {
      name: "Digital Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "High-definition printed tiles with intricate patterns and designs",
      sizes: ["600x600mm", "600x1200mm"],
      finish: "Matt, Carving",
    },
    {
      name: "Marble Look Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Elegant marble-inspired designs with porcelain durability",
      sizes: ["600x600mm", "800x800mm", "600x1200mm"],
      finish: "Polished, Matt",
    },
    {
      name: "Wood Look Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Natural wood appearance with ceramic practicality",
      sizes: ["200x1200mm", "150x900mm"],
      finish: "Matt, Rustic",
    },
    {
      name: "Stone Look Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Authentic stone textures in modern tile format",
      sizes: ["600x600mm", "400x400mm"],
      finish: "Matt, Rustic, Carving",
    },
    {
      name: "Large Format Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Contemporary large-sized tiles for seamless, modern looks",
      sizes: ["800x800mm", "1200x1200mm", "600x1200mm"],
      finish: "Polished, Matt",
    },
    {
      name: "Mosaic Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Small decorative tiles perfect for accents and artistic designs",
      sizes: ["25x25mm", "50x50mm", "300x300mm sheets"],
      finish: "Glossy, Matt, Iridescent",
    },
    {
      name: "Subway Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Classic rectangular tiles with timeless appeal",
      sizes: ["75x150mm", "100x200mm", "100x300mm"],
      finish: "Glossy, Matt",
    },
    {
      name: "Anti-Skid Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Slip-resistant tiles ideal for wet areas and outdoor spaces",
      sizes: ["300x300mm", "400x400mm", "600x600mm"],
      finish: "Matt, Textured",
    },
    {
      name: "Outdoor Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Weather-resistant tiles designed for exterior applications",
      sizes: ["400x400mm", "600x600mm"],
      finish: "Matt, Anti-Skid",
    },
    {
      name: "Designer Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Artistic and contemporary designs for premium interiors",
      sizes: ["600x600mm", "300x600mm"],
      finish: "Polished, Matt, Carving",
    },
    {
      name: "Glazed Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Glossy surface tiles with vibrant colors and easy maintenance",
      sizes: ["200x200mm", "300x300mm", "400x400mm"],
      finish: "Glossy",
    },
    {
      name: "Unglazed Tiles",
      image: "/placeholder.svg?height=300&width=400",
      description: "Natural finish tiles with consistent color throughout",
      sizes: ["300x300mm", "400x400mm", "600x600mm"],
      finish: "Natural, Matt",
    },
  ]

  const technicalData = [
    {
      property: "Length and width",
      testMethod: "BS EN ISO 10545-2",
      isoStandard: "± 0.6%",
      ourValue: "± 0.3%",
      isHighlighted: true,
    },
    {
      property: "Thickness",
      testMethod: "BS EN ISO 10545-2",
      isoStandard: "± 5.0%",
      ourValue: "± 3.0%",
      isHighlighted: false,
    },
    {
      property: "Straightness of sides",
      testMethod: "BS EN ISO 10545-2",
      isoStandard: "± 0.5%",
      ourValue: "± 0.3%",
      isHighlighted: true,
    },
    {
      property: "Rectangularity",
      testMethod: "BS EN ISO 10545-2",
      isoStandard: "± 0.6%",
      ourValue: "± 0.3%",
      isHighlighted: false,
    },
    {
      property: "Surface flatness",
      testMethod: "BS EN ISO 10545-2",
      isoStandard: "± 0.5%",
      ourValue: "± 0.3%",
      isHighlighted: true,
    },
    {
      property: "Water absorption",
      testMethod: "BS EN ISO 10545-3",
      isoStandard: "≤ 0.5%",
      ourValue: "≤ 0.05%",
      isHighlighted: false,
    },
    {
      property: "Breaking strength",
      testMethod: "BS EN ISO 10545-4",
      isoStandard: "≥ 1300N",
      ourValue: "≥ 1500N",
      isHighlighted: true,
    },
    {
      property: "Modulus of rupture",
      testMethod: "BS EN ISO 10545-4",
      isoStandard: "≥ 35 N/mm²",
      ourValue: "≥ 45 N/mm²",
      isHighlighted: false,
    },
  ]



  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Porcelain Tiles Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {getCurrentConfig().title}
          </h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <nav className="text-blue-200">
            <Link href="/" className="hover:text-white cursor-pointer">
              HOME
            </Link>
            <span className="mx-2">&gt;</span>
            <Link href="/collection" className="hover:text-white cursor-pointer">
              COLLECTION
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{getCurrentConfig().title.toUpperCase()}</span>
          </nav>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="w-full">
            {/* Custom Tab Navigation */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-8 max-w-fit mx-auto">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex items-center px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white"
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                OVERVIEW
              </button>
              <button
                onClick={() => setActiveTab("sizes")}
                className={`flex items-center px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === "sizes"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white"
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2a1 1 0 100-2H5V5a1 1 0 00-2 0V3zM13 3a1 1 0 10-2 0v8a2 2 0 002 2h2a1 1 0 100-2h-2V5a1 1 0 002 0V3z" />
                </svg>
                SIZES
              </button>
              <button
                onClick={() => setActiveTab("technical")}
                className={`flex items-center px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === "technical"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white"
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                TECHNICAL
              </button>
              <button
                onClick={() => setActiveTab("applications")}
                className={`flex items-center px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeTab === "applications"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white"
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H3.862a2 2 0 01-1.995-1.858L1 7m18 0l-2-4H5L3 7m16 0H3m9 4v6m-4-6v6m8-6v6" />
                </svg>
                APPLICATIONS
              </button>
            </div>

                        {/* Tab Content */}
            {activeTab === "overview" && (
              <div>
                {/* Main Content */}
                <div>
                  <Card className="p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{getCurrentConfig().overview.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {getCurrentConfig().overview.content}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {getCurrentConfig().overview.additionalContent}
                    </p>
                  </Card>

                  {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allTileTypes.map((tile, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={tile.image || "/placeholder.svg"}
                            alt={tile.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg text-gray-900 mb-2">{tile.name}</h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tile.description}</p>

                          <div className="space-y-2">
                            <div>
                              <span className="text-xs font-medium text-gray-500">Available Sizes:</span>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {tile.sizes.slice(0, 2).map((size, idx) => (
                                  <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                    {size}
                                  </span>
                                ))}
                                {tile.sizes.length > 2 && (
                                  <span className="text-xs text-gray-500">+{tile.sizes.length - 2} more</span>
                                )}
                              </div>
                            </div>

                            <div>
                              <span className="text-xs font-medium text-gray-500">Finish:</span>
                              <span className="text-xs text-gray-700 ml-1">{tile.finish}</span>
                            </div>
                          </div>

                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-3 group-hover:bg-blue-600 group-hover:text-white transition-colors"
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div> */}
                </div>
              </div>
            )}

            {activeTab === "sizes" && (
              <div className="bg-blue-600 text-white p-12 rounded-lg">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">AVAILABLE SIZES</h2>
                    <p className="text-lg leading-relaxed mb-4">
                      {getCurrentConfig().title} are available in various sizes to meet different design requirements and application needs.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {getCurrentConfig().sizes.map((size, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <span className="text-lg font-semibold">{size}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end justify-center space-x-4">
                    {sizeCategories.map((category, index) => (
                      <div key={index} className="text-center">
                        <button
                          onClick={() => {
                            if (category.size in tilesBySize) {
                              setSelectedSize(category.size as keyof typeof tilesBySize)
                              setActiveTab("collection")
                            }
                          }}
                          className="group transition-all duration-300 hover:scale-105"
                        >
                          <div
                            className="bg-white rounded-lg shadow-lg overflow-hidden mb-3 group-hover:shadow-xl transition-shadow"
                            style={{ width: category.width, height: category.height }}
                          >
                            <img
                              src={`/placeholder.svg?height=${category.height.replace("px", "")}&width=${category.width.replace("px", "")}&text=${category.size}`}
                              alt={category.label}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium group-hover:text-blue-200 transition-colors">
                            {category.label}
                          </span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "collection" && (
              <div>
                {/* Size Filter */}
                <div className="mb-8">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Size</h3>
                    <div className="flex flex-wrap gap-3">
                      {sizeCategories.map((category) => (
                        <button
                          key={category.size}
                          onClick={() => {
                            if (category.size in tilesBySize) {
                              setSelectedSize(category.size as keyof typeof tilesBySize)
                            }
                          }}
                          className={`px-4 py-2 rounded-lg transition-colors ${
                            selectedSize === category.size
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          {category.label}
                        </button>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Tiles Grid */}
                <div>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Tiles Collection {selectedSize.replace("x", "x")}
                    </h2>
                    <p className="text-gray-600">
                      Showing {tilesBySize[selectedSize]?.length || 0} designs in {selectedSize} size
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tilesBySize[selectedSize]?.map((tile) => (
                      <Card key={tile.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="aspect-[3/4] overflow-hidden">
                          <img
                            src={tile.image || "/placeholder.svg"}
                            alt={tile.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="text-center">
                            <h3 className="font-bold text-sm text-gray-900 mb-1">{tile.name}</h3>
                            <p className="text-xs text-gray-500 mb-3">{tile.category}</p>
                            <Link href={`/collection/tiles/${tile.id}`}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                              >
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    )) || (
                      <div className="col-span-full text-center py-12">
                        <p className="text-gray-500">No tiles available in this size category.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "technical" && (
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-8">PORCELAIN TILES TECHNICAL DETAILS</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-white/20">
                          <th className="text-left py-4 px-6 font-semibold text-white">PROPERTIES</th>
                          <th className="text-left py-4 px-6 font-semibold text-white">TEST METHOD</th>
                          <th className="text-left py-4 px-6 font-semibold text-white">ISO STANDARD 13006 Bla TILES</th>
                          <th className="text-left py-4 px-6 font-semibold text-white">OUR VALUE</th>
                        </tr>
                      </thead>
                      <tbody>
                        {technicalData.map((row, index) => (
                          <tr
                            key={index}
                            className={`border-b border-white/20 hover:bg-white/10 transition-colors ${
                              row.isHighlighted ? "bg-white/15" : "bg-white/5"
                            }`}
                          >
                            <td className="py-4 px-6 text-white">{row.property}</td>
                            <td className="py-4 px-6 text-blue-100">{row.testMethod}</td>
                            <td className="py-4 px-6 text-blue-100">{row.isoStandard}</td>
                            <td className="py-4 px-6 font-semibold text-white">{row.ourValue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="space-y-6">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Applications</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {getCurrentConfig().title} are ideal for various applications and spaces:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getCurrentConfig().applications.map((application, index) => (
                      <div key={index} className="text-center bg-blue-50 p-6 rounded-lg">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">
                            {index % 3 === 0 ? "🏠" : index % 3 === 1 ? "🏢" : "✨"}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{application}</h3>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}
          </div>

          {/* <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Download Complete Catalog
            </Button>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function TilesCollection() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TilesCollectionContent />
    </Suspense>
  )
}
