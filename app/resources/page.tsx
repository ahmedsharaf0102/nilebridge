import Link from 'next/link';

export const metadata = {
  title: 'Trade Resources & Tools - NileBridge',
  description: 'Official resources, tools, and external links for agricultural trade between Egypt and the UK.',
};

export default function Resources() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-linear-to-br from-emerald-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Trade Resources and Tools
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Official websites, tools, and databases to help you 
            research and grow your Egypt-UK trade
          </p>
        </div>
      </section>

      {/* Trade Data Tools */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-3xl">📊</span> Trade Data and Market Research
          </h2>

          <div className="space-y-4 mb-16">
            <a
              href="https://www.trademap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">ITC Trade Map</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Free tool to analyse international trade data. See what the UK imports, 
                  from which countries, quantities, and values.
                </p>
                <span className="text-emerald-600 text-xs font-semibold mt-2 inline-block">Free after registration</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>

            <a
              href="https://www.cbi.eu/market-information/fresh-fruit-vegetables"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">CBI Market Intelligence</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Free market studies and buyer requirements for fresh produce 
                  in European and UK markets. Excellent for exporters.
                </p>
                <span className="text-emerald-600 text-xs font-semibold mt-2 inline-block">Free access</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>

            <a
              href="https://comtrade.un.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">UN Comtrade Database</h3>
                <p className="text-gray-500 text-sm mt-1">
                  United Nations trade statistics database. Detailed import/export 
                  data by commodity and country.
                </p>
                <span className="text-emerald-600 text-xs font-semibold mt-2 inline-block">Free access</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>
          </div>

          {/* UK Government */}
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-3xl">🇬🇧</span> UK Government and Regulations
          </h2>

          <div className="space-y-4 mb-16">
            <a
              href="https://www.gov.uk/guidance/importing-plants-fruit-vegetables-or-plant-material-to-the-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">UK Gov - Plant Import Requirements</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Official UK government guidelines for importing plant and 
                  agricultural products into the United Kingdom.
                </p>
                <span className="text-blue-600 text-xs font-semibold mt-2 inline-block">Official Government Source</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>

            <a
              href="https://www.gov.uk/check-duties-customs-exporting"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">UK Trade Tariff Tool</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Check customs duties, VAT rates, and import restrictions 
                  for specific products entering the UK.
                </p>
                <span className="text-blue-600 text-xs font-semibold mt-2 inline-block">Official Government Source</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>

            <a
              href="https://www.food.gov.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Food Standards Agency (FSA)</h3>
                <p className="text-gray-500 text-sm mt-1">
                  UK food safety regulations, labelling requirements, 
                  and hygiene standards for imported food products.
                </p>
                <span className="text-blue-600 text-xs font-semibold mt-2 inline-block">Official Government Source</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>
          </div>

          {/* Egyptian Sources */}
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-3xl">🇪🇬</span> Egyptian Export Authorities
          </h2>

          <div className="space-y-4 mb-16">
            <a
              href="https://www.aec.org.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Agricultural Export Council (AEC)</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Official Egyptian body supporting agricultural exporters. 
                  Export guides, member directory, and market reports.
                </p>
                <span className="text-emerald-600 text-xs font-semibold mt-2 inline-block">Egyptian Official Source</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>

            <a
              href="https://www.expolink.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">ExpoLink Egypt</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Egyptian Exporters Association. Find verified Egyptian 
                  exporters and trade opportunities.
                </p>
                <span className="text-emerald-600 text-xs font-semibold mt-2 inline-block">Egyptian Official Source</span>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>
          </div>

          {/* Certifications */}
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-3xl">✅</span> Certification Bodies
          </h2>

          <div className="space-y-4 mb-16">
            <a
              href="https://www.globalgap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">GlobalGAP</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Good Agricultural Practices certification. Required by most 
                  UK supermarkets for fresh produce suppliers.
                </p>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>

            <a
              href="https://www.brcgs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">BRCGS (British Retail Consortium)</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Global food safety standard. Preferred by major UK retailers 
                  like Tesco, Sainsburys, and M&S.
                </p>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>
          </div>

          {/* Logistics */}
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-3xl">🚢</span> Shipping and Logistics
          </h2>

          <div className="space-y-4">
            <a
              href="https://www.maersk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Maersk</h3>
                <p className="text-gray-500 text-sm mt-1">
                  World leading container shipping company. Regular services 
                  from Alexandria and Damietta to UK ports.
                </p>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>

            <a
              href="https://www.msc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-lg">MSC (Mediterranean Shipping Company)</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Major shipping line with extensive Mediterranean and 
                  Northern Europe routes including Egypt to UK.
                </p>
              </div>
              <span className="text-gray-400 text-xl ml-4">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Blog CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Looking for Detailed Guides?
          </h2>
          <p className="text-gray-500 mb-6">
            Check our blog for in-depth articles about export procedures, 
            certifications, and market insights
          </p>
          <Link href="/blog" className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 hover:shadow-lg transition-all">
            Visit Our Blog →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-emerald-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-4">Need Help Getting Started?</h2>
          <p className="text-emerald-200 mb-6">
            Register on NileBridge and our team will guide you through the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/supplier-register" className="px-6 py-3 bg-white text-emerald-800 rounded-xl font-bold hover:shadow-2xl transition-all">
              Register as Supplier
            </Link>
            <Link href="/importer-register" className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-emerald-800 transition-all">
              Register as Importer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}