import Header from "../components/header"
import Footer from "../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Porcelain Tiles vs. Ceramic Tiles: Which One Should You Choose?",
      excerpt:
        "Choose porcelain tiles over ceramic tiles when you want durable, water-resistant, good designs, and a low-maintenance option. Check out this blog to know more about the key differences.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Star Porselano",
      date: "MAY 30, 2025",
      category: "Tile Guide",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Best Areas to Use Porcelain Tiles: Kitchen, Bathroom, Outdoors & More",
      excerpt:
        "Check out the best areas where you can use porcelain tiles in 2025. It can be from kitchens to bathrooms and from outdoor spaces to commercial areas. Read the blog to know more.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Star Porselano",
      date: "MAY 30, 2025",
      category: "Design Tips",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Best Rooms to Use Polished Porcelain Tiles in 2025",
      excerpt:
        "Find the top spaces in 2025 for polished porcelain tile installation. Enhance your living areas and patios with modern elegance, durability, and flair.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Star Porselano",
      date: "MAY 30, 2025",
      category: "Trends",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "2025 Ceramic Tile Trends: What's Hot in Interior Design",
      excerpt:
        "Discover the latest ceramic tile trends that are shaping interior design in 2025. From bold patterns to sustainable materials, explore what's trending now.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Star Porselano",
      date: "MAY 25, 2025",
      category: "Trends",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "How to Choose the Right Tile Size for Your Space",
      excerpt:
        "Learn the art of selecting the perfect tile size for different rooms. From small format tiles to large format options, make the right choice for your project.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Star Porselano",
      date: "MAY 20, 2025",
      category: "Tile Guide",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Maintenance Tips for Long-lasting Ceramic Tiles",
      excerpt:
        "Keep your ceramic tiles looking new for years with these expert maintenance tips. Learn proper cleaning techniques and preventive care measures.",
      image: "/placeholder.svg?height=300&width=500",
      author: "Star Porselano",
      date: "MAY 15, 2025",
      category: "Maintenance",
      readTime: "5 min read",
    },
  ]

  const featuredPost = blogPosts[0]
  const regularPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Ceramic Tiles Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ceramic & Tile Insights</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the world of ceramic and porcelain tiles
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <div className="absolute top-4 left-4 z-10">
                  <div className="w-16 h-1 bg-blue-600"></div>
                </div>
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="bg-blue-100 text-blue-700">{featuredPost.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {featuredPost.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="border-t border-gray-200 pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section> */}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <div className="w-16 h-1 bg-blue-600"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-12 h-1 bg-blue-600"></div>
                  </div>
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      BY {post.author.toUpperCase()}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="border-t border-gray-200 pt-4">
                    <Link
                      href={`/blogs/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      {/* <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest ceramic tile trends, tips, and insights delivered to your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              placeholder="Enter your email"
              className="bg-white w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
