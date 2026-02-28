import Link from 'next/link';

export default function Home() {
  return (
    <div>

      {/* ==================== HERO ==================== */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-cyan-900">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
          <div className="max-w-3xl fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Now Connecting Suppliers & Importers
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              We Connect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Egyptian Farms
              </span>
              to UK Markets
            </h1>

            <p className="text-lg md:text-xl text-emerald-100/80 max-w-2xl mb-10 leading-relaxed">
              The trusted B2B marketplace connecting verified Egyptian agricultural 
              exporters with UK importers. Fresh produce, competitive prices, 
              reliable supply chain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/supplier-register"
                className="px-8 py-4 bg-white text-emerald-800 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Register as Supplier 🇪🇬
              </Link>
              <Link
                href="/importer-register"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300 text-center"
              >
                Register as Importer 🇬🇧
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 mt-16 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Verified Suppliers
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Quality Assured
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Direct Trade
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> UK Compliant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-600">50+</div>
              <div className="text-gray-500 text-sm mt-1">Verified Suppliers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-600">20+</div>
              <div className="text-gray-500 text-sm mt-1">UK Importers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-600">15+</div>
              <div className="text-gray-500 text-sm mt-1">Product Categories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-black text-emerald-600">🇪🇬🇬🇧</div>
              <div className="text-gray-500 text-sm mt-1">Egypt to UK Direct</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Simple, transparent, and efficient trade process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-xl font-black mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Register & Verify</h3>
              <p className="text-gray-500 leading-relaxed">
                Sign up as a supplier or importer. We verify all businesses 
                to ensure trust and quality in every transaction.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center text-xl font-black mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Browse & Connect</h3>
              <p className="text-gray-500 leading-relaxed">
                Explore verified suppliers and their products. Connect directly 
                with the right partners for your business needs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center text-xl font-black mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trade & Grow</h3>
              <p className="text-gray-500 leading-relaxed">
                Complete transactions with confidence. We support you with 
                logistics, compliance, and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS ==================== */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Egyptian Agricultural Products
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Premium quality produce direct from Egypt's finest farms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🍊', name: 'Citrus Fruits', desc: 'Oranges, Lemons, Mandarins' },
              { emoji: '🥔', name: 'Vegetables', desc: 'Potatoes, Onions, Garlic' },
              { emoji: '🍇', name: 'Grapes', desc: 'Table & Seedless Grapes' },
              { emoji: '🍓', name: 'Strawberries', desc: 'Fresh & Frozen' },
              { emoji: '🫒', name: 'Olives & Oil', desc: 'Premium Egyptian Olives' },
              { emoji: '🌿', name: 'Herbs & Spices', desc: 'Chamomile, Basil, Mint' },
              { emoji: '🥭', name: 'Mangoes', desc: 'Premium Egyptian Mangoes' },
              { emoji: '🌾', name: 'Grains & Seeds', desc: 'Rice, Beans, Lentils' },
            ].map((product) => (
              <div
                key={product.name}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center border border-gray-100 cursor-pointer"
              >
                <div className="text-4xl mb-3">{product.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY NILEBRIDGE ==================== */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why NileBridge?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-2xl">🇪🇬</span> For Egyptian Suppliers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  Access to premium UK market directly
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  No middlemen - better margins for your business
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  Export documentation & compliance support
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  Verified UK importers only
                </li>
              </ul>
              <Link
                href="/supplier-register"
                className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all"
              >
                Register Now →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-2xl">🇬🇧</span> For UK Importers
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  Verified Egyptian suppliers with quality certificates
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  Competitive prices - direct from source
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  UK food safety standards compliance
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-emerald-500 mt-1">✓</span>
                  Reliable supply chain & logistics support
                </li>
              </ul>
              <Link
                href="/importer-register"
                className="inline-block mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all"
              >
                Register Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-800 to-cyan-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Join NileBridge today and connect with verified partners. 
            Whether you're exporting from Egypt or importing to the UK, 
            we make it simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/supplier-register"
              className="px-8 py-4 bg-white text-emerald-800 rounded-xl font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Register as Supplier 🇪🇬
            </Link>
            <Link
              href="/importer-register"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300"
            >
              Register as Importer 🇬🇧
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}