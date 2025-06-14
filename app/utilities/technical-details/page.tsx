import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/hero-section";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const technicalData = [
  {
    category: "Wall Tiles",
    headers: [
      "PROPERTIES",
      "EURO STANDARD EN-159/IS 13753",
      "OUR VALUE",
    ],
    rows: [
      ["Dimension", "± 0.5%", "± 0.2%"],
      ["Deviation in Thickness", "± 0.6mm", "± 0.2mm"],
      ["Straightness of sides", "± 0.3%", "± 0.2%"],
      ["Rectangularity", "± 0.5%", "± 0.3%"],
      ["Surface flatness", "± 0.5%", "± 0.3%"],
      ["Surface Quality", "Min 95%", "Min 96%"],
      ["Water absorption", ">10%", "13.5%"],
      ["Bending Strength", "> 150 Kg/Cm2", "200-250 Kg/Cm2"],
      ["Scratch hardness (Mohs)", "Min 3", "Min 3"],
      ["Crazing", "1 cycle", "No Crazing at 5 Cycles"],
      ["Staining Resistance", "Min Class 2", "Resistance to all Acids, Alkalies & Household Chemicals, except Hydro Fluoric Acid"],
      ["Household Chemical", "Min Class B", "Resistance to all Acids, Alkalies & Household Chemicals, except Hydro Fluoric Acid"],
      ["Thermal Shock", "Resistant to 10 Cycles", "CONFORMS"],
      ["Thermal Expansion", "Max-9E-06", "CONFORMS"],
    ],
  },
  {
    category: "Nano Porcelain Tiles",
    headers: [
      "PROPERTIES",
      "TEST METHOD",
      "ISO Standard 13006/EN 176 Group BIa",
      "OUR VALUE",
    ],
    rows: [
      ["Deviation in Length", "EN 98", "± 0.6%", "± 0.1%"],
      ["Deviation in Thickness", "EN 98", "± 5%", "± 4 %"],
      ["Straightness of sides", "EN 98", "± 0.5%", "± 0.1%"],
      ["Rectangularity", "EN 98", "± 0.6%", "± 0.2%"],
      ["Surface flatness", "EN 98", "± 0.5%", "± 0.3%"],
      ["Water absorption", "EN 99", "< 0.5%", "< 0.05%"],
      ["Scratch hardness (MOH's Scale)", "EN 101", "> 6 MOHS", "> 7 MOHS"],
      ["Modulus of Rupture", "EN 100", "> 27 N/mm2", "> 47 N/mm2"],
      ["Abrasion Resistance", "EN 102", "< 204 mm3", "< 98 mm3"],
      ["Skid Resistance (Friction Coefficient)", "ASTM C-1028", ">0.4", "> 0.6"],
      ["Breaking Strength", "ASTM C-648", ">1113 N", "> 2830 N"],
      ["Density (g/cc)*", "DIN 51082", "> 2", "> 2.4"],
      ["Frost Resistance", "EN 202", "Frost proof", "Frost proof"],
      ["Chemical Resistance", "EN 106", "No damage", "No damage"],
      ["Thermal Shock Resistance", "EN 104", "No damage", "No damage"],
      ["Colour Resistance", "DIN 51094", "No damage", "No damage"],
      ["Thermal Expansion", "EN 103", "< 9 x 10-6", "< 6 x 10-6"],
      ["Stain Resistance", "ISO 10545-14", "Resistant", "Resistant"],
      ["Moisture Expansion", "ISO 10545-10", "Nil", "Nil"],
      ["Glossiness*", "Glossmeter", "-", "Min 65%-70% reflection"],
    ],
  },
  {
    category: "Porcelain Tiles",
    headers: [
      "PROPERTIES",
      "TEST METHOD",
      "ISO STANDARD 13006 B1a TILES",
      "OUR VALUE",
    ],
    rows: [
      ["Length and width", "BS EN ISO 10545-2", "± 0.6%", "± 0.3%"],
      ["Thickness", "BS EN ISO 10545-2", "± 5.0%", "± 3.0%"],
      ["Straightness of sides", "BS EN ISO 10545-2", "± 0.5%", "± 0.3%"],
      ["Rectangularity", "BS EN ISO 10545-2", "± 0.6%", "± 0.3%"],
      ["Surface flatness", "BS EN ISO 10545-2", "± 0.5%", "± 0.3%"],
      ["Water absorption", "BS EN ISO 10545-3", "≤ 0.5%", "≤ 0.05%"],
      ["Breaking strength", "BS EN ISO 10545-4", "≥ 1300N", "≥ 1500N"],
      ["Modulus of rupture", "BS EN ISO 10545-4", "≥ 35 N/mm2", "≥ 45 N/mm2"],
      ["Resistance to deep abrasion", "BS EN ISO 10545-6", "≤ 175mm3", "≤ 150mm3"],
      ["Linear thermal expansion", "BS EN ISO 10545-8", "≤ 9 x 10-6 °C1", "≤ 7 x 10-6 °C1"],
      ["Thermal shock resistance", "BS EN ISO 10545-9", "No visible defect", "No visible defect"],
      ["Frost resistance", "BS EN ISO 10545-12", "Frost proof", "Frost proof"],
      ["Resistance to chemicals", "BS EN ISO 10545-13", "No visible effect", "No visible effect"],
      ["Resistance to stains", "BS EN ISO 10545-14", "Manufacturer to state class", "Stains removed Min. Class 3"],
      ["Colour resistance", "BS EN ISO 10545-16", "No damage", "No damage"],
      ["Colour resistance to UV Light", "DIN 51094", "No change in color", "No change in color"],
      ["Scratch hardness (MOH's Scale)", "EN 101", "≥ 6 MOHS", "≥ 7 MOHS"],
      ["Surface quality", "BS EN ISO 10545-2", "Min. 95%", "No visible defect"],
      ["Skid resistance (friction co-efficient)", "BS EN ISO 10545-17", "> 0.4", "> 0.4"],
      ["Moisture Expansion", "-", "Nil", "Nil"],
    ],
  },
  {
    category: "Double Charged Porcelain Tiles",
    headers: [
      "PROPERTIES",
      "ISO Standard 13006/EN 176 Group BIa TILES",
      "OUR VALUE",
    ],
    rows: [
      ["Length and width", "± 0.6%", "± 0.3%"],
      ["Thickness", "± 5.0%", "± 3.0%"],
      ["Straightness of sides", "± 0.5%", "± 0.3%"],
      ["Rectangularity", "± 0.6%", "± 0.3%"],
      ["Surface flatness", "± 0.5%", "± 0.3%"],
      ["Water absorption", "≤ 0.5%", "≤ 0.05%"],
      ["Breaking strength", "≥ 1300N", "≥ 1500N"],
      ["Modulus of rupture", "≥ 35 N/mm2", "≥ 45 N/mm2"],
      ["Resistance to deep abrasion", "≤ 175mm3", "≤ 150mm3"],
      ["Linear thermal expansion", "≤ 9 x 10-6 °C1", "≤ 7 x 10-6 °C1"],
      ["Thermal shock resistance", "No visible defect", "No visible defect"],
      ["Frost resistance", "Frost proof", "Frost proof"],
      ["Resistance to chemicals", "No visible effect", "No visible effect"],
      ["Resistance to stains", "Manufacturer to state class", "Stains removed Min. Class 3"],
      ["Colour resistance", "No damage", "No damage"],
      ["Colour resistance to UV Light", "No change in color", "No change in color"],
      ["Scratch hardness (MOH's Scale)", "≥ 6 MOHS", "≥ 7 MOHS"],
      ["Surface quality", "Min. 95%", "No visible defect"],
      ["Skid resistance (friction co-efficient)", "> 0.4", "> 0.4"],
      ["Moisture Expansion", "Nil", "Nil"],
    ],
  },
  {
    category: "Floor Tiles",
    headers: [
      "PROPERTIES",
      "ISO Standard 13006/EN 176 Group BIa",
      "OUR VALUE",
    ],
    rows: [
      ["Length and width", "± 0.5%", "± 0.4%"],
      ["Thickness", "± 5.0%", "± 3.0%"],
      ["Straightness of sides", "± 0.5%", "± 0.5%"],
      ["Rectangularity", "± 0.6%", "± 0.4%"],
      ["Surface flatness", "± 0.5%", "± 0.2%"],
      ["Water absorption", "± 3.6%", "± 3.6%"],
      ["Breaking strength", "≥ 220 Kgs/cm2", "≥ 270 Kgs/cm2"],
      ["Resistance to chemicals", "resistance to all alkalis (except hydrochloric acid and its compound)", "resistance to all alkalis (except hydrochloric acid and its compound)"],
      ["Thermal shock", "10 cycles", "4 cycles"],
    ],
  },
];

export default function TechnicalDetailsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection
        title="Technical Details"
        subtitle="Comprehensive technical specifications and standards for all tile types."
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs defaultValue={technicalData[0].category} className="space-y-8">
            <TabsList className="flex flex-wrap gap-2 mb-8">
              {technicalData.map((section) => (
                <TabsTrigger key={section.category} value={section.category}>
                  {section.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {technicalData.map((section) => (
              <TabsContent key={section.category} value={section.category}>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">{section.category}</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left border border-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          {section.headers.map((header) => (
                            <th key={header} className="px-4 py-2 font-semibold text-gray-700 border-b border-gray-200">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, i) => (
                          <tr key={i} className="even:bg-gray-50">
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-2 border-b border-gray-100 whitespace-pre-line">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
}
