'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface PriceData {
  id: number;
  product: string;
  egypt_price: number;
  egypt_unit: string;
  uk_price: number;
  uk_unit: string;
  margin_percent: number;
  updated_at: string;
}

export default function Prices() {
  const [prices, setPrices] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrices() {
      const { data, error } = await supabase
        .from('market_prices')
        .select('*')
        .order('product');

      if (!error && data) {
        setPrices(data);
      }
      setLoading(false);
    }
    fetchPrices();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 px-4 bg-linear-to-br from-cyan-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <span className="text-4xl mb-4 block">📊</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Market Price Tracker
          </h1>
          <p className="text-cyan-200 max-w-xl mx-auto">
            Compare wholesale prices between Egyptian and UK markets. 
            Updated regularly to help you make informed decisions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">

          {loading ? (
            <div className="text-center py-20">
              <span className="text-4xl block mb-4 animate-pulse">📊</span>
              <p className="text-gray-500">Loading prices...</p>
            </div>
          ) : (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-emerald-50 p-6 rounded-2xl text-center">
                  <div className="text-2xl font-black text-emerald-600">{prices.length}</div>
                  <div className="text-gray-500 text-sm">Products Tracked</div>
                </div>
                <div className="bg-cyan-50 p-6 rounded-2xl text-center">
                  <div className="text-2xl font-black text-cyan-600">
                    {prices.length > 0 ? Math.round(prices.reduce((a, b) => a + b.margin_percent, 0) / prices.length) : 0}%
                  </div>
                  <div className="text-gray-500 text-sm">Avg Margin</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl text-center">
                  <div className="text-2xl font-black text-orange-600">
                    {prices.length > 0 ? Math.max(...prices.map(p => p.margin_percent)) : 0}%
                  </div>
                  <div className="text-gray-500 text-sm">Best Margin</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl text-center">
                  <div className="text-2xl font-black text-purple-600">
                    {prices.length > 0 ? prices.reduce((best, p) => p.margin_percent > best.margin_percent ? p : best).product : '-'}
                  </div>
                  <div className="text-gray-500 text-sm">Top Product</div>
                </div>
              </div>

              {/* Price Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-xl font-black text-gray-900">
                    Egypt vs UK Wholesale Prices
                  </h2>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-bold text-gray-700 text-sm">Product</th>
                        <th className="text-left p-4 font-bold text-gray-700 text-sm">Egypt Price</th>
                        <th className="text-left p-4 font-bold text-gray-700 text-sm">UK Price</th>
                        <th className="text-left p-4 font-bold text-gray-700 text-sm">Margin</th>
                        <th className="text-left p-4 font-bold text-gray-700 text-sm">Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prices.map((price) => (
                        <tr key={price.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                          <td className="p-4 font-semibold text-gray-900">{price.product}</td>
                          <td className="p-4 text-gray-600">{price.egypt_price} {price.egypt_unit}</td>
                          <td className="p-4 text-gray-600">{price.uk_price} {price.uk_unit}</td>
                          <td className="p-4">
                            <span className={`font-bold ${price.margin_percent >= 40 ? 'text-emerald-600' : price.margin_percent >= 25 ? 'text-yellow-600' : 'text-red-500'}`}>
                              {price.margin_percent}%
                            </span>
                          </td>
                          <td className="p-4">
                            {price.margin_percent >= 40 ? (
                              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                                High Opportunity
                              </span>
                            ) : price.margin_percent >= 25 ? (
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">
                                Moderate
                              </span>
                            ) : (
                              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                                Low Margin
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden p-4 space-y-4">
                  {prices.map((price) => (
                    <div key={price.id} className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-gray-900">{price.product}</span>
                        {price.margin_percent >= 40 ? (
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">
                            High
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">
                            Moderate
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-gray-400 block">Egypt</span>
                          <span className="font-semibold">{price.egypt_price} {price.egypt_unit}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block">UK</span>
                          <span className="font-semibold">{price.uk_price} {price.uk_unit}</span>
                        </div>
                        <div>
                          <span className="text-gray-400 block">Margin</span>
                          <span className="font-bold text-emerald-600">{price.margin_percent}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Prices are indicative and updated regularly. Contact us for real-time quotes.
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
}