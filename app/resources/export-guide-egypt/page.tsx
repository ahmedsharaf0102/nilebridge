import Link from 'next/link';

export const metadata = {
  title: 'How to Export Agricultural Products from Egypt to UK - NileBridge',
  description: 'Complete step-by-step guide for Egyptian agricultural exporters. Documentation, certifications, phytosanitary requirements, and shipping to UK.',
};

export default function ExportGuide() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto fade-in">
          <Link href="/resources" className="text-emerald-300 hover:text-white text-sm mb-4 inline-block">
            ← Back to Resources
          </Link>
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4">
            Export Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            How to Export Agricultural Products from Egypt to UK
          </h1>
          <p className="text-emerald-200">
            Last updated: January 2025 • 10 min read
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">

            {/* Intro */}
            <div className="bg-emerald-50 p-6 rounded-2xl mb-8">
              <p className="text-gray-700 leading-relaxed">
                Egypt is one of the world&apos;s leading agricultural exporters, with 
                the UK being a key market for Egyptian fresh produce. This guide 
                covers everything you need to know to start or grow your 
                agricultural exports to the United Kingdom.
              </p>
            </div>

            {/* Step 1 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-lg font-black">1</span>
                Register Your Export Business
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before exporting, you need to register with the following Egyptian authorities:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span><strong>General Organization for Export & Import Control (GOEIC)</strong> - Mandatory for all exporters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span><strong>Agricultural Export Council (AEC)</strong> - For agricultural products specifically</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span><strong>Chamber of Commerce</strong> - General business registration</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-lg font-black">2</span>
                Obtain Required Certifications
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                UK importers typically require the following certifications:
              </p>
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900">GlobalGAP</h4>
                  <p className="text-gray-500 text-sm">Good Agricultural Practices - Required by most UK supermarkets</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900">HACCP</h4>
                  <p className="text-gray-500 text-sm">Hazard Analysis Critical Control Points - Food safety standard</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900">Phytosanitary Certificate</h4>
                  <p className="text-gray-500 text-sm">Issued by Egyptian Ministry of Agriculture - Required for all fresh produce</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900">BRC (Optional but Recommended)</h4>
                  <p className="text-gray-500 text-sm">British Retail Consortium standard - Preferred by UK retailers</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-lg font-black">3</span>
                UK Import Requirements (Post-Brexit)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since Brexit, the UK has its own import regulations:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Pre-notification via IPAFFS (Import of Products, Animals, Food and Feed System)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Phytosanitary certificate from country of origin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Products may be subject to physical checks at UK Border Control Posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span>Maximum Residue Levels (MRLs) compliance for pesticides</span>
                </li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-lg font-black">4</span>
                Key Egyptian Products for UK Market
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { product: 'Oranges & Citrus', season: 'Nov - May', demand: 'Very High' },
                  { product: 'Potatoes', season: 'Year-round', demand: 'High' },
                  { product: 'Strawberries', season: 'Dec - Apr', demand: 'High' },
                  { product: 'Grapes', season: 'May - Sep', demand: 'High' },
                  { product: 'Fresh Herbs', season: 'Year-round', demand: 'Growing' },
                  { product: 'Spring Onions', season: 'Year-round', demand: 'Medium' },
                ].map((item) => (
                  <div key={item.product} className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-900 text-sm">{item.product}</h4>
                    <p className="text-gray-500 text-xs mt-1">Season: {item.season}</p>
                    <p className="text-emerald-600 text-xs font-semibold">Demand: {item.demand}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-black mb-4">Ready to Start Exporting?</h3>
              <p className="text-emerald-100 mb-6">
                Register on NileBridge and connect with verified UK importers today
              </p>
              <Link
                href="/supplier-register"
                className="inline-block px-8 py-3 bg-white text-emerald-700 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                Register as Supplier →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}