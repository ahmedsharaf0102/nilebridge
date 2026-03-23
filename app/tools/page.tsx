import Link from 'next/link';

export const metadata = {
  title: 'Trade Tools - NileBridge',
  description: 'Free tools for Egypt-UK agricultural trade: Cost Calculator, Price Tracker, and RFQ System.',
};

export default function Tools() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-linear-to-br from-emerald-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
            Free Trade Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Smart Tools for Smarter Trade
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Calculate costs, track prices, and request quotes - 
            everything you need to trade with confidence
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Calculator */}
          <Link
            href="/tools/calculator"
            className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              🧮
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              Landed Cost Calculator
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Calculate the total cost of importing Egyptian products to the UK. 
              Includes duties, shipping, insurance, and handling.
            </p>
            <span className="text-emerald-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
              Use Calculator →
            </span>
          </Link>

          {/* Price Tracker */}
          <Link
            href="/tools/prices"
            className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              Market Price Tracker
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Compare wholesale prices between Egyptian and UK markets. 
              See profit margins and market trends.
            </p>
            <span className="text-cyan-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
              View Prices →
            </span>
          </Link>

          {/* RFQ */}
          <Link
            href="/tools/rfq"
            className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              🤝
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-3">
              Request for Quote (RFQ)
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Tell us what you need and we will connect you with verified 
              Egyptian suppliers who can fulfil your order.
            </p>
            <span className="text-orange-600 font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
              Request Quote →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}