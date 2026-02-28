import Link from 'next/link';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-black mb-6">About NileBridge</h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Building the bridge between Egyptian agricultural excellence 
            and UK market demand
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌍</div>
                <div className="flex justify-center gap-4 text-4xl">
                  <span>🇪🇬</span>
                  <span>⟷</span>
                  <span>🇬🇧</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Living between Egypt and the UK, I saw a clear gap in the 
                agricultural trade market. Egyptian farmers produce world-class 
                fruits and vegetables, but struggle to reach international buyers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Meanwhile, UK importers are constantly looking for reliable, 
                quality-assured suppliers at competitive prices.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                NileBridge was born to solve this problem — connecting both 
                sides through a trusted, verified marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trust</h3>
              <p className="text-gray-500">
                Every supplier and importer is verified. 
                We build trust through transparency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
              <p className="text-gray-500">
                We ensure all products meet UK food safety 
                standards and quality requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-500">
                We help businesses grow by providing access 
                to new markets and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-emerald-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-6">Join NileBridge Today</h2>
          <p className="text-emerald-200 mb-8">
            Be part of the growing network of trusted agricultural traders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/supplier-register" className="px-8 py-4 bg-white text-emerald-800 rounded-xl font-bold hover:shadow-2xl transition-all">
              I'm a Supplier 🇪🇬
            </Link>
            <Link href="/importer-register" className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-emerald-800 transition-all">
              I'm an Importer 🇬🇧
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}