import Link from 'next/link';
import { articles } from '../../data/articles';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: `${article.title} - NileBridge`,
    description: article.description,
  };
}

const colorMap: Record<string, string> = {
  emerald: 'from-emerald-800 to-emerald-900',
  cyan: 'from-cyan-800 to-cyan-900',
  green: 'from-green-800 to-green-900',
  orange: 'from-orange-800 to-orange-900',
  blue: 'from-blue-800 to-blue-900',
  purple: 'from-purple-800 to-purple-900',
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className={`py-16 px-4 bg-gradient-to-br ${colorMap[article.categoryColor]} text-white`}>
        <div className="max-w-3xl mx-auto fade-in">
          <Link href="/blog" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="text-xs font-bold text-white/70 uppercase tracking-wider mb-4">
            {article.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            {article.title}
          </h1>
          <p className="text-white/70">
            {article.date} | {article.readTime}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {article.content.map((section, index) => {
            switch (section.type) {
              case 'highlight':
                return (
                  <div key={index} className="bg-emerald-50 p-6 rounded-2xl mb-8">
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                );

              case 'heading':
                return (
                  <h2 key={index} className="text-2xl font-black text-gray-900 mt-12 mb-4">
                    {section.content}
                  </h2>
                );

              case 'text':
                return (
                  <p key={index} className="text-gray-600 leading-relaxed mb-4">
                    {section.content}
                  </p>
                );

              case 'list':
                return (
                  <ul key={index} className="space-y-2 mb-8">
                    {section.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <span className="text-emerald-500 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              case 'table':
                return (
                  <div key={index} className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-bold text-gray-900 text-sm">Item</th>
                          <th className="text-left p-3 font-bold text-gray-900 text-sm">Details</th>
                          <th className="text-left p-3 font-bold text-gray-900 text-sm">Info</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows?.map((row, i) => (
                          <tr key={i} className="border-b border-gray-100">
                            <td className="p-3 text-gray-700 text-sm font-medium">{row.col1}</td>
                            <td className="p-3 text-gray-500 text-sm">{row.col2}</td>
                            <td className="p-3 text-emerald-600 text-sm font-semibold">{row.col3}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

              default:
                return null;
            }
          })}

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-8 rounded-2xl text-center mt-16">
            <h3 className="text-2xl font-black mb-4">Ready to Start Trading?</h3>
            <p className="text-emerald-100 mb-6">
              Register on NileBridge and connect with verified partners
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/supplier-register" className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-bold hover:shadow-lg transition-all">
                Register as Supplier
              </Link>
              <Link href="/importer-register" className="px-6 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-emerald-700 transition-all">
                Register as Importer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}