"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [tileTypes, setTileTypes] = useState<{ tile_type_id: number; tile_type_name: string }[]>([])
  const [sanitaryTypes, setSanitaryTypes] = useState<{ sanitary_type_id: number; sanitary_type_name: string }[]>([])
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isCollectionOpen, setIsCollectionOpen] = useState(false)
  const [isUtilitiesOpen, setIsUtilitiesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchTileTypes = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/tile/get-all-tile-types`
        )
        const data = await res.json()
        if (data.tileTypes) setTileTypes(data.tileTypes)
      } catch (error) {
        console.error("Failed to fetch tile types:", error)
      }
    }

    fetchTileTypes()
  }, [])

  useEffect(() => {
    const fetchSanitaryTypes = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/get-sanitary-type`
        )
        const data = await res.json()
        if (data.sanitaryTypes) setSanitaryTypes(data.sanitaryTypes)
      } catch (error) {
        console.error("Failed to fetch sanitary types:", error)
      }
    }

    fetchSanitaryTypes()
  }, [])

  const slugify = (str: string) => str.toLowerCase().replace(/\s+/g, "-")

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled 
        ? 'fixed top-0 left-0 right-0 z-50 bg-white transition-colors duration-200'
        : 'fixed top-0 left-0 right-0 z-50 bg-transparent transition-colors duration-200'
    }
    return isScrolled
    ? 'fixed top-0 left-0 right-0 z-50 bg-white transition-colors duration-200'
    : 'fixed top-0 left-0 right-0 z-50 bg-transparent transition-colors duration-200'
  }

  const textColor = isHomePage ? (isScrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'
  const hoverColor = isHomePage ? (isScrolled ? 'hover:text-blue-600' : 'hover:text-blue-300') : 'hover:text-blue-600'
  const logoTextColor = isHomePage ? (isScrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'

  return (
    <header className={getHeaderStyle()}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/Logooo.png"
              alt="Star Porselano Logo"
              className="w-12 h-12 object-contain rounded-lg"
            />
            <span className={`text-2xl font-bold tracking-wide ${logoTextColor}`}>Star Porselano</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" >
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    HOME
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    ABOUT US
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={`px-4 py-2 text-sm font-medium tracking-wide bg-transparent ${textColor} ${hoverColor}`}>
                  COLLECTION
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="min-w-[220px] max-w-xs bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                    
                    <div className="space-y-2">
                      {tileTypes.map((type) => (
                        <NavigationMenuLink asChild key={type.tile_type_id}>
                          <Link
                            href={`/collection/tiles?type=${slugify(type.tile_type_name)}`}
                            className="block t  ext-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded px-3 py-1 transition-colors"
                          >
                            {type.tile_type_name.toUpperCase()}
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/brochure"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    BROCHURE
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/export"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    EXPORT
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={`px-4 py-2 text-sm font-medium tracking-wide bg-transparent ${textColor} ${hoverColor}`}>
                  UTILITIES
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="min-w-[180px] bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex flex-col">
                    <NavigationMenuLink asChild>
                      <Link href="/utilities/faq" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors">FAQ</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/utilities/tiles-laying" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors">TILES LAYING</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/utilities/packing-details" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors">PACKING DETAILS</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/utilities/technical-details" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors">TECHNICAL DETAILS</Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blogs"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    BLOGS
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    CONTACT US
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className={`hover:bg-white/10 ${textColor}`}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  ABOUT US
                </Link>
                {/* COLLECTION Dropdown */}
                <button
                  className="flex items-center justify-between text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide focus:outline-none"
                  onClick={() => setIsCollectionOpen((prev) => !prev)}
                  type="button"
                >
                  <span>COLLECTION</span>
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isCollectionOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCollectionOpen && (
                  <div className="pl-4 space-y-2">
                    {tileTypes.map((type) => (
                      <Link
                        key={type.tile_type_id}
                        href={`/collection/tiles?type=${slugify(type.tile_type_name)}`}
                        className="block text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {type.tile_type_name}
                      </Link>
                    ))}
                    {sanitaryTypes.map((type) => (
                      <Link
                        key={type.sanitary_type_id}
                        href={`/collection/sanitary/${slugify(type.sanitary_type_name)}`}
                        className="block text-gray-700 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {type.sanitary_type_name}
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/brochure"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  BROCHURE
                </Link>
                <Link
                  href="/export"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  EXPORT
                </Link>
                {/* UTILITIES Dropdown */}
                <button
                  className="flex items-center justify-between text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide focus:outline-none"
                  onClick={() => setIsUtilitiesOpen((prev) => !prev)}
                  type="button"
                >
                  <span>UTILITIES</span>
                  <ChevronDown className={`ml-2 h-5 w-5 transition-transform ${isUtilitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isUtilitiesOpen && (
                  <div className="pl-4 space-y-2">
                    <Link href="/utilities/faq" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>FAQ</Link>
                    <Link href="/utilities/tiles-laying" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>TILES LAYING</Link>
                    <Link href="/utilities/packing-details" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>PACKING DETAILS</Link>
                    <Link href="/utilities/technical-details" className="block text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>TECHNICAL DETAILS</Link>
                  </div>
                )}
                <Link
                  href="/blogs"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  BLOGS
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  CONTACT US
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
