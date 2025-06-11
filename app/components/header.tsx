"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
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
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [tileTypes, setTileTypes] = useState<{ tile_type_id: number; tile_type_name: string }[]>([])
  const [sanitaryTypes, setSanitaryTypes] = useState<{ sanitary_type_id: number; sanitary_type_name: string }[]>([])
  const pathname = usePathname()
  const isHomePage = pathname === "/"

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

  const fetchSanitaryTypes = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5000"}/api/sanitary/get-all-sanitary-types`
      )
      const data = await res.json()
      if (data.sanitaryTypes) setSanitaryTypes(data.sanitaryTypes)
    }
    catch (error) {
      console.error("Failed to fetch sanitary types:", error)
    }

    fetchSanitaryTypes()  
  }

  useEffect(() => {
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
  const hoverColor = isHomePage ? (isScrolled ? 'hover:text-brand' : 'hover:text-brand-300') : 'hover:text-brand'
  const logoTextColor = isHomePage ? (isScrolled ? 'text-gray-900' : 'text-white') : 'text-gray-900'

  return (
    <header className={getHeaderStyle()}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Star Porselano Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span className={`text-2xl font-bold tracking-wide ${logoTextColor}`}>Star Porselano</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
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

              

              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/brochure"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    BROCHURE
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

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

              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/utilities"
                    className="px-4 py-2 text-sm font-medium text-white hover:text-blue-300 transition-colors tracking-wide"
                  >
                    UTILITIES
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blogs"
                    className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${textColor} ${hoverColor}`}
                  >
                    BLOGS
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}

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
                <div className="space-y-2">
                  <span className="text-lg font-medium text-gray-900 tracking-wide">COLLECTION</span>
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
                    <Link
                      href="/collection/ceramics"
                      className="block text-gray-700 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Ceramics
                    </Link>
                  </div>
                </div>
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
                <Link
                  href="/utilities"
                  className="text-lg font-medium text-gray-900 hover:text-blue-600 tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  UTILITIES
                </Link>
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
