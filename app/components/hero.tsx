"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Header from "./header"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      background: "/images/hero-bg-1.jpg",
      title: "PORCELAIN TILES",
      subtitle: "Premium Quality Collection",
      description:
        "Transform your spaces with our exquisite collection of porcelain tiles featuring unmatched durability and timeless elegance",
      cta: "EXPLORE COLLECTION",
      accent: "Premium",
    },
    {
      background: "/images/hero-bg-2.jpg",
      title: "CERAMIC EXCELLENCE",
      subtitle: "Innovative Design Solutions",
      description:
        "Discover the perfect blend of traditional craftsmanship and modern technology in our ceramic tile collection",
      cta: "VIEW CERAMICS",
      accent: "Innovation",
    },
    {
      background: "/images/hero-bg-3.jpg",
      title: "DESIGNER COLLECTION",
      subtitle: "Luxury Interior Solutions",
      description: "Elevate your interiors with our premium designer tile collection crafted for sophisticated spaces",
      cta: "BROWSE DESIGNS",
      accent: "Luxury",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [currentSlide, slides.length])

  const handleSlideChange = (newSlide: number) => {
    if (newSlide !== currentSlide && !isTransitioning) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(newSlide)
        setTimeout(() => setIsTransitioning(false), 100)
      }, 300)
    }
  }

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.background || "/placeholder.svg"}
                alt={`${slide.title} Background`}
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Header Overlay */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Main Content */}
            <div className="lg:col-span-7 text-white">
              <div
                className={`transition-all duration-700 ease-out ${
                  isTransitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"
                }`}
              >
                {/* Accent Badge */}
                {/* <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wide">{slides[currentSlide].accent}</span>
                </div> */}

                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="block">{slides[currentSlide].title.split(" ")[0]}</span>
                  <span className="block text-blue-400">
                    {slides[currentSlide].title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl md:text-2xl font-light text-gray-200 mb-6 tracking-wide">
                  {slides[currentSlide].subtitle}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
                  {slides[currentSlide].description}
                </p>

                {/* Action Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0"
                  >
                    <Link href="/collection" className="flex items-center">
                      {slides[currentSlide].cta}
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 text-base font-medium tracking-wide backdrop-blur-sm bg-white/5 hover:bg-white transition-all duration-300 hover:scale-105"
                  >
                    <Play className="mr-3 h-5 w-5" />
                    WATCH VIDEO
                  </Button>
                </div> */}

                {/* Stats */}
                {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-bold mb-1">25+</div>
                    <div className="text-sm text-gray-300 tracking-wide">Years Experience</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                    <div className="text-sm text-gray-300 tracking-wide">Product Designs</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
                    <div className="text-sm text-gray-300 tracking-wide">Countries Export</div>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Side Content - Decorative Elements */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-center space-y-8">
              {/* Featured Product Card */}
              {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl max-w-sm">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <img
                    src={slides[currentSlide].background || "/placeholder.svg"}
                    alt="Featured Tile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-semibold mb-2">Featured Design</h3>
                <p className="text-gray-300 text-sm mb-4">Premium quality tiles with exceptional durability</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/30 text-white hover:bg-white hover:text-black"
                >
                  View Details
                </Button>
              </div> */}

              {/* Decorative Elements */}
              {/* <div className="flex space-x-4">
                <div className="w-16 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"></div>
                <div className="w-12 h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"></div>
                <div className="w-8 h-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                disabled={isTransitioning}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 h-2 bg-blue-400 rounded-full"
                    : "w-2 h-2 bg-white/40 hover:bg-white/60 rounded-full hover:scale-125"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            disabled={isTransitioning}
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-blue-400 transition-all duration-8000 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
              animation: `progress 8s linear infinite`,
            }}
          ></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-blue-400/30 rounded-full animate-bounce"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  )
}
