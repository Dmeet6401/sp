import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/hero-section";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const packingData = [
  {
    category: "Wall Tiles",
    rows: [
      ["300X450", "8.0", "6", "11", "8.72", "0.81", "120", "22", "2640", "2138.40"],
      ["300X600", "9.0", "5", "14", "9.68", "0.90", "96", "21", "2016", "1814.40"],
      ["200X600", "9.0", "6", "10.5", "7.75", "0.72", "120", "22", "2640", "1900.80"],
    ],
  },
  {
    category: "Parking Tiles",
    rows: [
      ["300X300", "9.0", "8", "13.5", "7.75", "0.72", "108", "19", "2052", "1477.44"],
      ["400X400", "12.0", "5", "19", "8.61", "0.80", "64", "23", "1472", "1177.60"],
    ],
  },
  {
    category: "Floor Tiles",
    rows: [
      ["300X300", "8.0", "11", "13", "10.65", "0.99", "108", "19", "2052", "2031.48"],
      ["400X400", "8.0", "6", "15", "10.11", "0.94", "84", "22", "1848", "1737.12"],
    ],
  },
  {
    category: "Outdoor Porcelain",
    rows: [
      ["600X600 (20MM)", "20.0", "2", "32", "7.75", "0.72", "36", "24", "864", "622.08"],
      ["600X900 (20MM)", "20.0", "1", "23", "5.81", "0.54", "40", "30", "1200", "648.00"],
      ["600X1200 (20MM)", "20.0", "1", "31.5", "7.75", "0.72", "52 + 31", "12 + 8", "872", "627.84"],
    ],
  },
  {
    category: "Glaze Porcelain",
    rows: [
      ["600X600", "8.75", "4", "27", "15.5", "1.44", "40", "26", "1040", "1497.60"],
      ["600X1200", "9.0", "2", "28", "15.5", "1.44", "72 + 32", "12 + 5", "1024", "1474.56"],
      ["800X800", "9.0", "3", "38", "20.66", "1.92", "36", "20", "720", "1382.40"],
      ["200X1200", "9.0", "5", "26", "12.91", "1.20", "26", "39", "1014", "1216.80"],
    ],
  },
  {
    category: "Slab Tiles",
    rows: [
      ["800X1600", "9.0", "2", "54", "27.55", "2.56", "28", "18", "504", "1290.24"],
      ["1200X1200", "9.0", "2", "60", "30.99", "2.88", "28 + 21", "13 + 4", "448", "1290.24"],
      ["1200X1800", "9.0", "2", "90", "46.48", "4.32", "25 + 20", "9 + 3", "285", "1231.20"],
      ["800X2400 (40 FT CONT)", "15.0", "1", "67", "20.66", "1.92", "30", "12", "360", "691.20"],
      ["800X3000 (40 FT CONT)", "15.0", "1", "85", "25.82", "2.40", "28", "11", "308", "739.20"],
      ["1200X2400 (40 FT CONT)", "15.0", "1", "105", "30.99", "2.88", "23", "11", "253", "728.64"],
    ],
  },
];

const tableHeaders = [
  "SIZE IN MM",
  "THICKNESS IN MM",
  "PCS PER BOX",
  "BOX WEIGHT",
  "COVERAGE IN SQ. FT.",
  "COVERAGE IN SQ. MTR",
  "BOX PER PALLET",
  "PALLET PER CONTAINER",
  "BOX PER CONT",
  "SQ. MTR PER CONTAINER",
];

export default function PackingDetailsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection
        title="Packing Details"
        subtitle="Comprehensive packing information for all tile sizes and types."
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Tabs defaultValue={packingData[0].category} className="space-y-8">
            <TabsList className="flex flex-wrap gap-2 mb-8">
              {packingData.map((section) => (
                <TabsTrigger key={section.category} value={section.category}>
                  {section.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {packingData.map((section) => (
              <TabsContent key={section.category} value={section.category}>
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">{section.category}</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left border border-gray-200">
                      <thead className="bg-blue-50">
                        <tr>
                          {tableHeaders.map((header) => (
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
                              <td key={j} className="px-4 py-2 border-b border-gray-100 whitespace-nowrap">
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
