"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Pencil } from "lucide-react"
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function ProductsSection() {
  const router = useRouter();
  const { toast } = useToast();
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: "Porcelain Tiles",
      description: "Premium porcelain tiles with superior durability and elegant designs for modern spaces.",
      image: "/images/marble-texture-1.jpg",
      features: ["Water Resistant", "Scratch Proof", "Easy Maintenance"],
    },
    {
      id: 2,
      title: "Ceramic Floor Tiles",
      description: "High-quality ceramic floor tiles perfect for residential and commercial applications.",
      image: "/images/ceramic-tiles-1.jpg",
      features: ["Anti-Slip", "Stain Resistant", "Long Lasting"],
    },
    {
      id: 3,
      title: "Stone Look Tiles",
      description: "Natural stone appearance tiles that add elegance and style to any interior space.",
      image: "/images/stone-texture-1.jpg",
      features: ["Designer Patterns", "Easy Installation", "Moisture Proof"],
    },
  ]

  const handleEdit = (id: number) => {
    setEditMode(true);
    setEditId(id);
    
    // Navigate to the edit page or open a modal
    router.push(`/upload-tiles-for-star-porselano?productId=${id}`);
    
    // You could also show a toast notification
    toast({
      title: "Edit mode",
      description: `Editing product with ID: ${id}`,
    });
  };

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
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white h-8 w-8 rounded-full"
                  onClick={() => handleEdit(product.id)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
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
