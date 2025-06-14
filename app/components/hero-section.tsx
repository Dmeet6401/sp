import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=400&width=1200"
          alt="Ceramic Tiles Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
} 