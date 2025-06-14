import Header from "../../components/header"
import Footer from "../../components/footer"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "../../components/hero-section"

const steps = [
  {
    title: "Wall Requirement",
    description: `The wall should be strong and flat, surface be smooth. The wall should be waxed / printed. Wall should be clean and dry, if the tiling has to be done on plywood the surface of wall should be sealed with 50% volume mixture of PVA and water.`,
    image: "/images/tiles-laying/step1.jpg"
  },
  {
    title: "Tile Preparation",
    description: `Mix the tiles with different cartons which help in fine blending of shades. Ample lighting should be provided. Each boshould be spread and mixed on the floor to check for any variation mixing of tiles brings harmony to shade by avoiding obvious patches. Prior to fixing, tiles should be immersed in water for 15 / 20 minutes` ,
    image: "/images/tiles-laying/step2.jpg"
  },
  {
    title: "Tiles Laying",
    description: `Apply a high quality ceramic adhesive on the wall and place the first tiles on the corner. Apply even pressure on the four corners of tiles to ensure adhesion of tiles to substrate. Cover the Area of wall that can be done without cutting tiles and leave it for at least 12 hours. Cover the rest of area with measured and cut tiles as per requirement.` ,
    image: "/images/tiles-laying/step3.jpg"
  },
  {
    title: "Tempering Process",
    description: `To ensure the proper contact of tile with the wall, evenly tamp the tiles with a rubber mallet tamp.` ,
    image: "/images/tiles-laying/step4.jpg"
  },
  {
    title: "Applying Grout",
    description: `After 24 Hours Of Laying of tiles, the grouting is done. Always use good quality grout. Apply the grout diagonally between the tiles using a sponge to fill the gaps between the tiles, Fill the joints with grouts as directed by Grout manufactures, Clean and wipe the surplus grout with a sponge, or as indicated by manufactures.` ,
    image: "/images/tiles-laying/step5.jpg"
  },
  {
    title: "Curve Cutting",
    description: `To fill the around the curve surface of wash basin etc. measure and mark the curve on cardboard and place the cardboard on the tile to cut it.` ,
    image: "/images/tiles-laying/step6.jpg"
  },
  {
    title: "Round Cutting",
    description: `To pass a pipe through the tile, the tile has to be cut in a specific manner. Mark its position on the tile. Draw a straight line passing through the center of the circle. Cut the tile on the line drawn. Cut the semi-circle on each of the half. These two halves placed together.` ,
    image: "/images/tiles-laying/step7.jpg"
  },
  {
    title: "Window Recess Tilling and Cutting",
    description: `Tile has be cut in "L" shape for window recess. Cut a line from center to edge and then draw a right angle line vertically down. Cut the tile to get an "L" shape that can fit a window recess.` ,
    image: "/images/tiles-laying/step8.jpg"
  },
  {
    title: "Accessory Tiles Fitting",
    description: `While Laying the normal tiles, keep an empty space where accessory tiles will fit. Apply the adhesive on the back of accessory tile and then place it uniformly in the space and apply even pressure to place the accessory tile.` ,
    image: "/images/tiles-laying/step9.jpg"
  },
  {
    title: "Tile Drilling",
    description: `Apply masking tape to cover the area to be drilling. Mark the position of the hole and drill the hole with lowest possible pressure on the drill.` ,
    image: "/images/tiles-laying/step10.jpg"
  },
]

export default function TilesLayingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />
      <HeroSection
        title="Tiles Laying Guide"
        subtitle="Step-by-step instructions for perfect tile installation, preparation, and finishing."
      />
      <section className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={idx}>
                <div className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
                  <div className="md:w-1/3 w-full flex justify-center">
                    <img src={step.image} alt={step.title} className="rounded-lg shadow-lg object-cover w-full max-w-xs h-48" />
                  </div>
                  <div className="md:w-2/3 w-full flex items-center">
                    <div className="flex items-start gap-6 w-full">
                      <div className="flex flex-col items-center mr-2">
                        <span className="text-3xl font-bold text-gray-800 tracking-tight">{String(idx+1).padStart(2, '0')}</span>
                        <span className="block w-8 h-0.5 bg-gray-300 mt-2 mb-2 md:hidden" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900 tracking-wide mb-1 uppercase">{step.title}</h2>
                        <p className="text-gray-700 leading-relaxed font-sans">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {idx < steps.length - 1 && <hr className="my-10 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
