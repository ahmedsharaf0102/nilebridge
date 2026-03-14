import Link from 'next/link';
import { articles } from '../data/articles';

export const metadata = {
  title: 'Blog & Trade Resources - NileBridge',
  description: 'Expert guides, market insights, and resources for agricultural trade between Egypt and the UK.',
};

const colorMap: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700',
  cyan: 'bg-cyan-100 text-cyan-700',
  green: 'bg-green-100 text-green-700',
  orange: 'bg-orange-100 text-orange-700',
  blue: 'bg-blue-100 text-blue-700',
  purple: 'bg-purple-100 text-purple-700',
};

const gradientMap: Record<string, string> = {
  emerald: 'from-emerald-500 to-emerald-700',
  cyan: 'from-cyan-500 to-cyan-700',
  green: 'from-green-500 to-emerald-600',
  orange: 'from-yellow-500 to-orange-500',
  blue: 'from-blue-500 to-indigo-600',
  purple: 'from-purple-500 to-pink-500',
};

export default function Blog() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto">
            Expert guides, market insights, and everything you need 
            for successful Egypt-UK agricultural trade
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Featured Article */}
          <div className="mb-16">
            <Link
              href={`/blog/${articles[0].slug}`}
              className="block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 md:flex"
            >
              <div className={`h-64 md:h-auto md:w-1/2 bg-gradient-to-br ${gradientMap[articles[0].categoryColor]} flex items-center justify-center`}>
                <span className="text-8xl">{articles[0].emoji}</span>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 w-fit ${colorMap[articles[0].categoryColor]}`}>
                  ⭐ Featured • {articles[0].category}
                </span>
                <h2 className="text-2xl font-black text-gray-900 mb-3">
                  {articles[0].title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {articles[0].description}
                </p>
                <div className="text-sm text-gray-400">
                  {articles[0].date} • {articles[0].readTime}
                </div>
              </div>
            </Link>
          </div>

          {/* All Articles */}
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            All Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-48 bg-gradient-to-br ${gradientMap[article.categoryColor]} flex items-center justify-center`}>
                  <span className="text-6xl">{article.emoji}</span>
                </div>
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${colorMap[article.categoryColor]}`}>
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>
                  <div className="text-xs text-gray-400">
                    {article.date} • {article.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-emerald-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-4">Want to Start Trading?</h2>
          <p className="text-emerald-200 mb-6">
            Join NileBridge and connect with verified partners
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