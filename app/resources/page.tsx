import Link from 'next/link';

export default function Resources() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Trade Resources & Guides
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Everything you need to know about agricultural trade 
            between Egypt and the UK
          </p>
        </div>
      </section>

      {/* Export Guides */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
            📋 Export & Import Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Guide 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                <span className="text-6xl">📦</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
                  For Suppliers
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How to Export Agricultural Products from Egypt to UK
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Step-by-step guide covering documentation, certifications, 
                  phytosanitary requirements, and shipping logistics.
                </p>
                <Link href="/resources/export-guide-egypt" className="text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                  Read Guide →
                </Link>
              </div>
            </article>

            {/* Guide 2 */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center">
                <span className="text-6xl">🇬🇧</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-2">
                  For Importers
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  UK Import Regulations for Fresh Produce
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Understanding UK food safety standards, customs procedures, 
                  and compliance requirements for agricultural imports.
                </p>
                <Link href="/resources/uk-import-regulations" className="text-cyan-600 font-semibold text-sm hover:text-cyan-700">
                  Read Guide →
                </Link>
              </div>
            </article>

            {/* Guide 3 */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                  Market Intel
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Egyptian Agricultural Exports: Market Overview 2025
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Key statistics, trending products, pricing data, 
                  and market opportunities for Egyptian exporters.
                </p>
                <Link href="/resources/market-overview" className="text-orange-600 font-semibold text-sm hover:text-orange-700">
                  Read Guide →
                </Link>
              </div>
            </article>

            {/* Guide 4 */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <span className="text-6xl">✅</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">
                  Certifications
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Essential Certifications for Egyptian Exporters
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  GlobalGAP, HACCP, ISO 22000, BRC - which certificates 
                  you need and how to get them.
                </p>
                <Link href="/resources/certifications" className="text-green-600 font-semibold text-sm hover:text-green-700">
                  Read Guide →
                </Link>
              </div>
            </article>

            {/* Guide 5 */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <span className="text-6xl">🚢</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  Logistics
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Shipping & Logistics: Egypt to UK
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Shipping routes, cold chain logistics, transit times, 
                  and cost-effective transportation options.
                </p>
                <Link href="/resources/shipping-logistics" className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Read Guide →
                </Link>
              </div>
            </article>

            {/* Guide 6 */}
            <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-6xl">🍊</span>
              </div>
              <div className="p-6">
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
                  Products
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Top Egyptian Products in Demand in UK
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Which Egyptian agricultural products are most demanded 
                  in the UK market and seasonal availability.
                </p>
                <Link href="/resources/top-products" className="text-purple-600 font-semibold text-sm hover:text-purple-700">
                  Read Guide →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
            🔗 Official Resources & Tools
          </h2>

          <div className="space-y-4">
            <a
              href="https://www.trademap.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900">ITC Trade Map</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Free tool to analyse international trade data - see what UK imports and from where
                </p>
              </div>
              <span className="text-gray-400 text-xl">↗</span>
            </a>

            <a
              href="https://www.cbi.eu/market-information/fresh-fruit-vegetables"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900">CBI Market Intelligence</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Free market studies and buyer requirements for fresh produce in European markets
                </p>
              </div>
              <span className="text-gray-400 text-xl">↗</span>
            </a>

            <a
              href="https://www.gov.uk/guidance/importing-plants-fruit-vegetables-or-plant-material-to-the-uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900">UK Gov - Import Requirements</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Official UK government guidelines for importing plant and agricultural products
                </p>
              </div>
              <span className="text-gray-400 text-xl">↗</span>
            </a>

            <a
              href="https://www.aec.org.eg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <div>
                <h3 className="font-bold text-gray-900">Agricultural Export Council - Egypt</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Official Egyptian body supporting agricultural exporters
                </p>
              </div>
              <span className="text-gray-400 text-xl">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-emerald-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-6">Need Personalised Guidance?</h2>
          <p className="text-emerald-200 mb-8">
            Our team can help you navigate export regulations, 
            find the right partners, and grow your trade
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-emerald-800 rounded-xl font-bold hover:shadow-2xl transition-all">
            Contact Our Team →
          </Link>
        </div>
      </section>
    </div>
  );
}