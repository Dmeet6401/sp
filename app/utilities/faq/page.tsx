import Header from "../../components/header"
import Footer from "../../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import HeroSection from "../../components/hero-section"

const faqs = [
  {
    question: "Where can tiles be used?",
    answer: `Tiles can be used in virtually any part of the house like bathrooms, kitchens, bedrooms, portico, foyer, drive way, drawing / living rooms, study, lobby, pooja room etc. They can be used both on the walls and floors. Some special tiles can be used in industries too.`
  },
  {
    question: "What's the best way to calculate the quantity of Tile I'll need?",
    answer: `Length times width of the area to be covered will give you square footage. For most installations, add 5-7% for cutting loss, and enough to keep on hand for any repairs. When the installation is on a diagonal, or when you are using a multi-size pattern, you should add 12-15%.`
  },
  {
    question: "Why is a Vitrified tile superior to the ordinary Ceramic tile?",
    answer: `The manufacturing process of the Vitrified tiles is far more superior to Ceramic tiles. The Vitrified tiles are also homogeneous and consistent in composition. Ceramic tiles have merely a decorative coat on the top and hence their composition is not consistent.`
  },
  {
    question: "What is the difference between polished and unpolished?",
    answer: `Vitrified tiles come in polished and unpolished finishes. As the name goes, the polished tiles have sheen while the unpolished ones do not have sheen.`
  },
  {
    question: "How do I maintain and care for Ceramic Tile?",
    answer: `No need to wax or polish glazed Tiles. Simply wiping glazed Tile with a damp sponge or sponge mop is all that is necessary for daily maintenance. In case stains persist if it is not removed with detergent, use diluted hydrochloric acid or muriatic acid.`
  },
  {
    question: "Can Ceramic tiles be used outdoors?",
    answer: `To be used outdoors, the tile must be unglazed for floor use. Make sure the absorption rate is 0.5% or less.`
  },
  {
    question: "Can a floor tile be used on wall and vice versa?",
    answer: `We do not recommend because the floor tile is much heavier than a wall tile. It is less porous and absorbent. The chances to adhere to the vertical surface is lesser than in a wall tile. This will result in the floor tile being easily dislodged from the surface and also cracking. However it is an individual's choice if he is still ready to take risks, he can use the floor tiles on the wall.`
  },
  {
    question: "Is it necessary that one should use a particular design or colour or size for a particular application?",
    answer: `Well, design, color and size preference is based on purely individual or personal choice or taste. However here are some basic guidelines and tips on selecting the right design, colour and size for different applications.\n\nThe tiles you choose should match with the existing, or intending decor of the room where they are to be used.\nIn a plain area (areas devoid of furniture, an open area), you could use a pattern type or geometric tile design. This will help generate a little fullness where none existed before. By the same a plain tile will help calm down a busy and cluttered room.\nLarger tiles tend to look better in larger rooms, and converse is true for smaller size tiles.`
  },
  {
    question: "What are the different sizes of tiles available in the market (Wall & Floor)?",
    answer: `Typically the following sizes of tiles are generally available in the market:\n\nWall Tiles\n24×12, 16×12, 12x8, 8x6, 8x4, 6x6, 4x4\nThird fired luster tiles and listellos.\nWall Borders (Varying sizes)\nFloor Tiles\n24x24, 18x18, 16x16, 15x15, 12x12, 8x8\nHexagonal shaped tiles\nOctagonal shaped tiles\nFloor Borders (Varying sizes)`
  },
  {
    question: "What are the recommended sizes of tiles to be used in my house?",
    answer: `Ultimately depending on your house area and the area of the room to be tiled, the exact look and feel depends upon individual tastes. If you are tiling your walls, the general usage is as follows:\n\nKitchens\nSmall Kitchens: 4×4\nMedium-sized Kitchens: 8×4 or 8×6 or 12×8\nLarge-sized Kitchens: 16×12 or 12×8\nCorridors: 24×12 or 16×12\nCorridors: 24×12 or 16×12\nExternal walls: 24×12 or 12×6\nSmall Service Areas: 4×4\nIf you are tiling your floors, the general usage is as follows:\n\nBathrooms\nSmall to Medium bathrooms: 8×8\nMedium to Large bathrooms: 12×12\nLiving rooms\nSmall to Medium sized: 18×18 or 12×12\nLarge sized: 24×24\nLobbies & Verandahs: Hexagonal or 18×18\nHalls & Public places: 24×24 or 18×18`}
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white font-sans">
      <Header />
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to the most common questions about our tiles, installation, maintenance, and more."
      />
      <section className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-xl animate-fade-in-up">
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem value={`faq-${idx}`} key={idx}>
                    <AccordionTrigger className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  )
}

// Animation CSS (add to global CSS if not present):
// .animate-fade-in-up { animation: fadeInUp 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both; }
// @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
