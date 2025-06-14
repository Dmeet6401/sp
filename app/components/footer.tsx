import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SP</span>
              </div>
              <span className="text-xl font-bold">Star Porselano</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Exporter of premium porcelain tiles and ceramic products, serving customers
              worldwide with quality and excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/collection" className="block text-gray-400 hover:text-white transition-colors">
                Collection
              </Link>
              <Link href="/brochure" className="block text-gray-400 hover:text-white transition-colors">
                Brochure
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <div className="space-y-2">
              <Link href="/collection/tiles" className="block text-gray-400 hover:text-white transition-colors">
                Porcelain Tiles
              </Link>
              <Link href="/collection/tiles" className="block text-gray-400 hover:text-white transition-colors">
                Ceramic Floor Tiles
              </Link>
              <Link href="/collection/tiles" className="block text-gray-400 hover:text-white transition-colors">
                Wall Tiles
              </Link>
              <Link href="/collection/tiles" className="block text-gray-400 hover:text-white transition-colors">
                Designer Tiles
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Star Plaza, Ground Floor,Shop No.3, B/h. Vishal Furniture,8-A, National Highway, MORBI - 363 642</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">+91 99980 22554</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400">starporselano@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Star Porselano. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
