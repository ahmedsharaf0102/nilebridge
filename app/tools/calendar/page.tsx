'use client';
import { useState } from 'react';

interface CropData {
  name: string;
  emoji: string;
  category: string;
  egyptHarvest: number[];
  exportWindow: number[];
  ukImportPeak: number[];
  ukCompetitors: string;
  notes: string;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const crops: CropData[] = [
  // Citrus
  {
    name: 'Navel Oranges',
    emoji: '🍊',
    category: 'Citrus',
    egyptHarvest: [11, 12, 1, 2, 3],
    exportWindow: [11, 12, 1, 2, 3, 4],
    ukImportPeak: [12, 1, 2, 3],
    ukCompetitors: 'Spain, South Africa, Morocco',
    notes: 'Egypt is the world largest orange exporter. Peak demand in UK winter.',
  },
  {
    name: 'Valencia Oranges',
    emoji: '🍊',
    category: 'Citrus',
    egyptHarvest: [2, 3, 4, 5, 6],
    exportWindow: [3, 4, 5, 6],
    ukImportPeak: [3, 4, 5],
    ukCompetitors: 'Spain, South Africa',
    notes: 'Mainly for juice. Fills gap after Spanish season ends.',
  },
  {
    name: 'Mandarins',
    emoji: '🍊',
    category: 'Citrus',
    egyptHarvest: [10, 11, 12, 1, 2],
    exportWindow: [10, 11, 12, 1, 2],
    ukImportPeak: [11, 12, 1],
    ukCompetitors: 'Spain, Morocco, Turkey',
    notes: 'High demand during Christmas season in UK.',
  },
  {
    name: 'Lemons',
    emoji: '🍋',
    category: 'Citrus',
    egyptHarvest: [10, 11, 12, 1, 2, 3, 4],
    exportWindow: [10, 11, 12, 1, 2, 3, 4],
    ukImportPeak: [11, 12, 1, 2, 3],
    ukCompetitors: 'Spain, Turkey, South Africa',
    notes: 'Year-round demand in UK. Egypt covers winter season.',
  },
  {
    name: 'Limes',
    emoji: '🍈',
    category: 'Citrus',
    egyptHarvest: [9, 10, 11, 12, 1, 2],
    exportWindow: [9, 10, 11, 12, 1, 2],
    ukImportPeak: [10, 11, 12, 1],
    ukCompetitors: 'Brazil, Mexico, Colombia',
    notes: 'Growing market in UK. Egyptian limes gaining popularity.',
  },
  // Berries & Fruits
  {
    name: 'Strawberries',
    emoji: '🍓',
    category: 'Berries & Fruits',
    egyptHarvest: [11, 12, 1, 2, 3, 4],
    exportWindow: [12, 1, 2, 3, 4],
    ukImportPeak: [12, 1, 2, 3],
    ukCompetitors: 'Spain, Morocco',
    notes: 'Counter-seasonal to UK production. Air freight preferred.',
  },
  {
    name: 'Table Grapes',
    emoji: '🍇',
    category: 'Berries & Fruits',
    egyptHarvest: [5, 6, 7, 8, 9],
    exportWindow: [5, 6, 7, 8, 9],
    ukImportPeak: [6, 7, 8],
    ukCompetitors: 'Spain, Italy, South Africa, Chile',
    notes: 'Early season advantage over European producers. Seedless varieties preferred.',
  },
  {
    name: 'Mangoes',
    emoji: '🥭',
    category: 'Berries & Fruits',
    egyptHarvest: [6, 7, 8, 9, 10],
    exportWindow: [7, 8, 9],
    ukImportPeak: [7, 8, 9],
    ukCompetitors: 'India, Pakistan, Brazil, Peru',
    notes: 'Premium varieties (Keitt, Kent). Growing demand in UK ethnic markets.',
  },
  {
    name: 'Pomegranates',
    emoji: '🫐',
    category: 'Berries & Fruits',
    egyptHarvest: [9, 10, 11, 12],
    exportWindow: [9, 10, 11, 12],
    ukImportPeak: [10, 11, 12],
    ukCompetitors: 'Spain, Turkey, India',
    notes: 'Superfood trend driving demand. Both fresh fruit and arils.',
  },
  {
    name: 'Figs',
    emoji: '🫐',
    category: 'Berries & Fruits',
    egyptHarvest: [6, 7, 8, 9, 10],
    exportWindow: [7, 8, 9],
    ukImportPeak: [7, 8, 9],
    ukCompetitors: 'Turkey, Spain',
    notes: 'Premium product. Short shelf life - air freight recommended.',
  },
  {
    name: 'Guava',
    emoji: '🍈',
    category: 'Berries & Fruits',
    egyptHarvest: [9, 10, 11, 12, 1],
    exportWindow: [10, 11, 12],
    ukImportPeak: [10, 11, 12],
    ukCompetitors: 'Brazil, India, Colombia',
    notes: 'Niche market in UK. Popular in ethnic food stores.',
  },
  // Vegetables
  {
    name: 'Potatoes',
    emoji: '🥔',
    category: 'Vegetables',
    egyptHarvest: [1, 2, 3, 4, 5, 9, 10, 11, 12],
    exportWindow: [1, 2, 3, 4, 5, 10, 11, 12],
    ukImportPeak: [2, 3, 4, 5],
    ukCompetitors: 'Netherlands, France, Israel',
    notes: 'Two seasons per year. UK imports heavily in spring when domestic supply is low.',
  },
  {
    name: 'Onions',
    emoji: '🧅',
    category: 'Vegetables',
    egyptHarvest: [3, 4, 5, 6, 7],
    exportWindow: [3, 4, 5, 6, 7, 8],
    ukImportPeak: [4, 5, 6],
    ukCompetitors: 'Netherlands, Spain, New Zealand',
    notes: 'Good storage life. Can supply when UK stocks run low.',
  },
  {
    name: 'Spring Onions',
    emoji: '🧅',
    category: 'Vegetables',
    egyptHarvest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    exportWindow: [10, 11, 12, 1, 2, 3, 4],
    ukImportPeak: [11, 12, 1, 2, 3],
    ukCompetitors: 'UK domestic, Spain, Senegal',
    notes: 'Year-round production in Egypt. UK imports in winter months.',
  },
  {
    name: 'Garlic',
    emoji: '🧄',
    category: 'Vegetables',
    egyptHarvest: [4, 5, 6],
    exportWindow: [5, 6, 7, 8, 9, 10],
    ukImportPeak: [6, 7, 8, 9],
    ukCompetitors: 'China, Spain, Argentina',
    notes: 'Alternative to Chinese garlic. European buyers prefer Egyptian quality.',
  },
  {
    name: 'Green Beans',
    emoji: '🫘',
    category: 'Vegetables',
    egyptHarvest: [10, 11, 12, 1, 2, 3, 4],
    exportWindow: [10, 11, 12, 1, 2, 3],
    ukImportPeak: [11, 12, 1, 2],
    ukCompetitors: 'Kenya, Morocco, Senegal',
    notes: 'High demand product. Air freight for premium quality.',
  },
  {
    name: 'Sweet Potatoes',
    emoji: '🍠',
    category: 'Vegetables',
    egyptHarvest: [8, 9, 10, 11],
    exportWindow: [9, 10, 11, 12, 1, 2],
    ukImportPeak: [10, 11, 12, 1],
    ukCompetitors: 'USA, Honduras, Spain',
    notes: 'Trending product in UK. Growing health food demand.',
  },
  {
    name: 'Peppers (Bell)',
    emoji: '🫑',
    category: 'Vegetables',
    egyptHarvest: [10, 11, 12, 1, 2, 3, 4, 5],
    exportWindow: [11, 12, 1, 2, 3, 4],
    ukImportPeak: [12, 1, 2, 3],
    ukCompetitors: 'Spain, Netherlands, Morocco',
    notes: 'All colours. Counter-seasonal to European greenhouse production.',
  },
  {
    name: 'Tomatoes',
    emoji: '🍅',
    category: 'Vegetables',
    egyptHarvest: [1, 2, 3, 4, 5, 10, 11, 12],
    exportWindow: [11, 12, 1, 2, 3, 4],
    ukImportPeak: [12, 1, 2, 3],
    ukCompetitors: 'Spain, Netherlands, Morocco',
    notes: 'Cherry and vine tomatoes preferred. Quality must be high.',
  },
  {
    name: 'Artichokes',
    emoji: '🥬',
    category: 'Vegetables',
    egyptHarvest: [10, 11, 12, 1, 2, 3],
    exportWindow: [11, 12, 1, 2],
    ukImportPeak: [11, 12, 1, 2],
    ukCompetitors: 'Spain, Italy, France',
    notes: 'Niche premium market. Egypt is a major global producer.',
  },
  // Herbs & Aromatics
  {
    name: 'Fresh Mint',
    emoji: '🌿',
    category: 'Herbs',
    egyptHarvest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    exportWindow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukImportPeak: [4, 5, 6, 7, 8, 9],
    ukCompetitors: 'UK domestic (summer), Kenya, Morocco',
    notes: 'Year-round supply. Very high demand in UK for drinks and cooking.',
  },
  {
    name: 'Basil',
    emoji: '🌿',
    category: 'Herbs',
    egyptHarvest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    exportWindow: [10, 11, 12, 1, 2, 3, 4],
    ukImportPeak: [11, 12, 1, 2, 3],
    ukCompetitors: 'Israel, Kenya, Italy',
    notes: 'Winter supply when European production stops.',
  },
  {
    name: 'Dill',
    emoji: '🌿',
    category: 'Herbs',
    egyptHarvest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    exportWindow: [10, 11, 12, 1, 2, 3],
    ukImportPeak: [11, 12, 1, 2],
    ukCompetitors: 'Israel, Spain',
    notes: 'Consistent demand. Air freight essential.',
  },
  {
    name: 'Parsley',
    emoji: '🌿',
    category: 'Herbs',
    egyptHarvest: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    exportWindow: [10, 11, 12, 1, 2, 3, 4],
    ukImportPeak: [11, 12, 1, 2, 3],
    ukCompetitors: 'UK domestic (summer), Israel',
    notes: 'Both flat-leaf and curly. Year-round production in Egypt.',
  },
  {
    name: 'Chamomile',
    emoji: '🌼',
    category: 'Herbs',
    egyptHarvest: [3, 4, 5],
    exportWindow: [4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukImportPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukCompetitors: 'Germany, Poland, Argentina',
    notes: 'Egypt is the world largest producer. Dried for tea and cosmetics. Year-round demand.',
  },
  // Dry & Processed
  {
    name: 'Peanuts',
    emoji: '🥜',
    category: 'Dry & Processed',
    egyptHarvest: [9, 10, 11],
    exportWindow: [10, 11, 12, 1, 2, 3],
    ukImportPeak: [11, 12, 1, 2],
    ukCompetitors: 'Argentina, USA, China',
    notes: 'Both raw and roasted. Snack market growing in UK.',
  },
  {
    name: 'Dates',
    emoji: '🌴',
    category: 'Dry & Processed',
    egyptHarvest: [9, 10, 11],
    exportWindow: [9, 10, 11, 12, 1, 2, 3, 4, 5],
    ukImportPeak: [9, 10, 11, 3, 4],
    ukCompetitors: 'Tunisia, Saudi Arabia, Iran',
    notes: 'Ramadan season drives huge demand. Medjool and semi-dry varieties.',
  },
  {
    name: 'Rice',
    emoji: '🌾',
    category: 'Dry & Processed',
    egyptHarvest: [9, 10, 11],
    exportWindow: [10, 11, 12, 1, 2],
    ukImportPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukCompetitors: 'India, Pakistan, Thailand',
    notes: 'Egyptian short-grain rice. Limited export due to government quotas.',
  },
  {
    name: 'Frozen Strawberries',
    emoji: '🧊',
    category: 'Dry & Processed',
    egyptHarvest: [12, 1, 2, 3, 4],
    exportWindow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukImportPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukCompetitors: 'Poland, Morocco, China',
    notes: 'Year-round demand for food service and retail. Competitive pricing.',
  },
  {
    name: 'Frozen Vegetables',
    emoji: '🧊',
    category: 'Dry & Processed',
    egyptHarvest: [1, 2, 3, 4, 5, 10, 11, 12],
    exportWindow: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukImportPeak: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    ukCompetitors: 'Belgium, Poland, Spain',
    notes: 'Mixed vegetables, okra, molokhia. Strong in ethnic food market.',
  },
];

const categories = [...new Set(crops.map((c) => c.category))];

export default function CropCalendar() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const filteredCrops = crops.filter((crop) => {
    const categoryMatch = selectedCategory === 'All' || crop.category === selectedCategory;
    const monthMatch = selectedMonth === null || crop.exportWindow.includes(selectedMonth);
    return categoryMatch && monthMatch;
  });

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 px-4 bg-linear-to-br from-green-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <span className="text-4xl mb-4 block">🌾</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Egyptian Crop Calendar
          </h1>
          <p className="text-green-200 max-w-xl mx-auto">
            Complete guide to Egyptian agricultural seasons, export windows, 
            and UK/Europe import peaks for all major crops
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-600">Egypt Harvest Season</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-gray-600">Export Window</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span className="text-gray-600">UK/EU Import Peak</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Crops
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Month Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Export in:</span>
              <select
                value={selectedMonth ?? ''}
                onChange={(e) =>
                  setSelectedMonth(e.target.value === '' ? null : parseInt(e.target.value))
                }
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="">Any month</option>
                {months.map((m, i) => (
                  <option key={m} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3 text-sm text-gray-400">
            Showing {filteredCrops.length} of {crops.length} crops
          </div>
        </div>
      </section>

      {/* Calendar Table */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 font-bold text-gray-700 text-sm sticky left-0 bg-gray-50 min-w-40">
                    Crop
                  </th>
                  {months.map((m) => (
                    <th key={m} className="p-2 font-bold text-gray-700 text-xs text-center w-16">
                      {m}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredCrops.map((crop) => (
                  <tr key={crop.name} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                    <td className="p-3 sticky left-0 bg-white group-hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{crop.emoji}</span>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{crop.name}</div>
                          <div className="text-xs text-gray-400">{crop.category}</div>
                        </div>
                      </div>
                    </td>
                    {months.map((_, monthIndex) => {
                      const monthNum = monthIndex + 1;
                      const isHarvest = crop.egyptHarvest.includes(monthNum);
                      const isExport = crop.exportWindow.includes(monthNum);
                      const isUkPeak = crop.ukImportPeak.includes(monthNum);

                      let bgColor = '';
                      let dots = '';

                      if (isUkPeak && isExport) {
                        bgColor = 'bg-orange-400';
                        dots = '★';
                      } else if (isExport) {
                        bgColor = 'bg-blue-400';
                      } else if (isHarvest) {
                        bgColor = 'bg-green-300';
                      }

                      return (
                        <td key={monthIndex} className="p-1 text-center">
                          {bgColor ? (
                            <div
                              className={`${bgColor} rounded h-8 flex items-center justify-center text-white text-xs font-bold`}
                              title={`${crop.name} - ${months[monthIndex]}: ${
                                isUkPeak && isExport
                                  ? 'Best time (Export + UK Peak)'
                                  : isExport
                                  ? 'Export Window'
                                  : 'Harvest'
                              }`}
                            >
                              {dots}
                            </div>
                          ) : (
                            <div className="h-8"></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend reminder */}
          <div className="flex flex-wrap gap-4 mt-6 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-300 rounded"></div> Harvest
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-400 rounded"></div> Export Window
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-orange-400 rounded"></div> ★ Best Time (Export + UK Peak)
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            Detailed Crop Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCrops.map((crop) => (
              <div
                key={crop.name}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{crop.emoji}</span>
                  <div>
                    <h3 className="font-black text-gray-900">{crop.name}</h3>
                    <span className="text-xs text-gray-400">{crop.category}</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">🌱</span>
                    <div>
                      <span className="font-semibold text-gray-700">Egypt Harvest: </span>
                      <span className="text-gray-500">
                        {crop.egyptHarvest.map((m) => months[m - 1]).join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">📦</span>
                    <div>
                      <span className="font-semibold text-gray-700">Export Window: </span>
                      <span className="text-gray-500">
                        {crop.exportWindow.map((m) => months[m - 1]).join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">🇬🇧</span>
                    <div>
                      <span className="font-semibold text-gray-700">UK Import Peak: </span>
                      <span className="text-gray-500">
                        {crop.ukImportPeak.map((m) => months[m - 1]).join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">⚔️</span>
                    <div>
                      <span className="font-semibold text-gray-700">Competitors: </span>
                      <span className="text-gray-500">{crop.ukCompetitors}</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-3 rounded-lg mt-3">
                    <p className="text-gray-600 text-xs leading-relaxed">
                      💡 {crop.notes}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-emerald-800 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-4">Ready to Source Egyptian Products?</h2>
          <p className="text-emerald-200 mb-6">
            Use our RFQ tool to request quotes from verified Egyptian suppliers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/tools/rfq" className="px-6 py-3 bg-white text-emerald-800 rounded-xl font-bold hover:shadow-2xl transition-all">
              Request a Quote
            </a>
            <a href="/tools/calculator" className="px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-emerald-800 transition-all">
              Calculate Costs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}