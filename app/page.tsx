import Hero from "./components/hero"
import AboutSection from "./components/about-section"
import ProductsSection from "./components/products-section"
import WhyChooseUs from "./components/why-choose-us"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}
