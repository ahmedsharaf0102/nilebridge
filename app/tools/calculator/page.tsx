'use client';
import { useState } from 'react';

export default function Calculator() {
  const [inputs, setInputs] = useState({
    product: '',
    productValue: '',
    weight: '',
    shippingMethod: 'sea',
    containerType: '40ft',
    insurance: 'yes',
  });

  const [result, setResult] = useState<null | {
    productCost: number;
    dutyRate: number;
    dutyAmount: number;
    shippingCost: number;
    insuranceCost: number;
    handlingCost: number;
    inspectionCost: number;
    vatAmount: number;
    totalCost: number;
    costPerKg: number;
  }>(null);

  const dutyRates: Record<string, number> = {
    oranges: 3.2,
    lemons: 6.4,
    strawberries: 0,
    grapes: 0,
    potatoes: 0,
    onions: 0,
    garlic: 9.6,
    herbs: 0,
    beans: 0,
    mangoes: 0,
    pomegranates: 0,
    default: 2.0,
  };

  const shippingRates: Record<string, number> = {
    sea: 4000,
    air: 0,
    multimodal: 5000,
  };

  const calculate = () => {
    const productValue = parseFloat(inputs.productValue) || 0;
    const weight = parseFloat(inputs.weight) || 1000;

    const productKey = inputs.product.toLowerCase();
    const dutyRate = dutyRates[productKey] ?? dutyRates.default;
    const dutyAmount = (productValue * dutyRate) / 100;

    let shippingCost = shippingRates[inputs.shippingMethod];
    if (inputs.shippingMethod === 'air') {
      shippingCost = weight * 2.5;
    }

    const insuranceCost = inputs.insurance === 'yes' ? productValue * 0.015 : 0;
    const handlingCost = 350;
    const inspectionCost = 200;

    const subtotal = productValue + dutyAmount + shippingCost + insuranceCost + handlingCost + inspectionCost;
    const vatAmount = subtotal * 0.0;
    const totalCost = subtotal + vatAmount;
    const costPerKg = totalCost / weight;

    setResult({
      productCost: productValue,
      dutyRate,
      dutyAmount,
      shippingCost,
      insuranceCost,
      handlingCost,
      inspectionCost,
      vatAmount,
      totalCost,
      costPerKg,
    });
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 px-4 bg-linear-to-br from-emerald-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <span className="text-4xl mb-4 block">🧮</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            UK Landed Cost Calculator
          </h1>
          <p className="text-emerald-200 max-w-xl mx-auto">
            Calculate the total cost of importing Egyptian agricultural 
            products to the UK including duties, shipping, and fees
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Input Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-gray-900 mb-6">
                Enter Shipment Details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">Product</label>
                  <select
                    value={inputs.product}
                    onChange={(e) => setInputs({ ...inputs, product: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="">Select product</option>
                    <option value="oranges">Oranges / Citrus</option>
                    <option value="lemons">Lemons</option>
                    <option value="strawberries">Strawberries</option>
                    <option value="grapes">Grapes</option>
                    <option value="potatoes">Potatoes</option>
                    <option value="onions">Onions</option>
                    <option value="garlic">Garlic</option>
                    <option value="herbs">Fresh Herbs</option>
                    <option value="beans">Green Beans</option>
                    <option value="mangoes">Mangoes</option>
                    <option value="pomegranates">Pomegranates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Product Value (USD)
                  </label>
                  <input
                    type="number"
                    value={inputs.productValue}
                    onChange={(e) => setInputs({ ...inputs, productValue: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="e.g. 10000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={inputs.weight}
                    onChange={(e) => setInputs({ ...inputs, weight: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="e.g. 20000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">Shipping Method</label>
                  <select
                    value={inputs.shippingMethod}
                    onChange={(e) => setInputs({ ...inputs, shippingMethod: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="sea">Sea Freight (Reefer Container)</option>
                    <option value="air">Air Freight</option>
                    <option value="multimodal">Road + Sea (Multimodal)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">Include Insurance?</label>
                  <select
                    value={inputs.insurance}
                    onChange={(e) => setInputs({ ...inputs, insurance: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                  >
                    <option value="yes">Yes (1.5% of value)</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <button
                  onClick={calculate}
                  className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 mt-4"
                >
                  Calculate Total Cost
                </button>
              </div>
            </div>

            {/* Results */}
            <div>
              {result ? (
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 fade-in">
                  <h2 className="text-xl font-black text-gray-900 mb-6">
                    Cost Breakdown
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Product Value (FOB)</span>
                      <span className="font-bold text-gray-900">${result.productCost.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Import Duty ({result.dutyRate}%)</span>
                      <span className="font-bold text-gray-900">${result.dutyAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Shipping Cost</span>
                      <span className="font-bold text-gray-900">${result.shippingCost.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Insurance</span>
                      <span className="font-bold text-gray-900">${result.insuranceCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Port Handling</span>
                      <span className="font-bold text-gray-900">${result.handlingCost}</span>
                    </div>

                    <div className="flex justify-between py-3 border-b border-gray-100">
                      <span className="text-gray-600">Inspection Fees</span>
                      <span className="font-bold text-gray-900">${result.inspectionCost}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="mt-6 p-4 bg-emerald-50 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-black text-gray-900">TOTAL LANDED COST</span>
                      <span className="text-2xl font-black text-emerald-600">
                        ${result.totalCost.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                      </span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-500">Cost per kg</span>
                      <span className="text-sm font-bold text-emerald-600">
                        ${result.costPerKg.toFixed(2)}/kg
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-4">
                    * Estimates only. Actual costs may vary. VAT excluded. 
                    Consult a customs broker for precise calculations.
                  </p>
                </div>
              ) : (
                <div className="bg-gray-100 p-8 rounded-2xl flex items-center justify-center h-full">
                  <div className="text-center text-gray-400">
                    <span className="text-5xl block mb-4">🧮</span>
                    <p className="font-medium">Fill in the details and click Calculate</p>
                    <p className="text-sm mt-1">Results will appear here</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}