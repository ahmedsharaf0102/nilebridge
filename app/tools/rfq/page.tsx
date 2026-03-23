'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function RFQ() {
  const [formData, setFormData] = useState({
    company_name: '',
    contact_person: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    delivery_month: '',
    destination_port: '',
    specifications: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('rfq_requests')
        .insert([formData]);

      if (supabaseError) {
        setError('Something went wrong. Please try again.');
        console.error(supabaseError);
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-orange-50">
        <div className="text-center p-8 max-w-md fade-in">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            RFQ Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-4">
            Your request for quote has been received. Our team will 
            match you with verified Egyptian suppliers.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Expected response time: 24-48 hours
          </p>
          <a href="/" className="inline-block px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all">
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-16 px-4 bg-linear-to-br from-orange-700 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <span className="text-4xl mb-4 block">🤝</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Request for Quote (RFQ)
          </h1>
          <p className="text-orange-200 max-w-xl mx-auto">
            Tell us what you need and we will connect you with verified 
            Egyptian suppliers who can deliver
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center font-black mx-auto mb-3">1</div>
              <h3 className="font-bold text-gray-900 text-sm">Submit Your Request</h3>
              <p className="text-gray-500 text-xs mt-1">Tell us product, quantity, and timeline</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center font-black mx-auto mb-3">2</div>
              <h3 className="font-bold text-gray-900 text-sm">We Match Suppliers</h3>
              <p className="text-gray-500 text-xs mt-1">Verified suppliers receive your RFQ</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center font-black mx-auto mb-3">3</div>
              <h3 className="font-bold text-gray-900 text-sm">Receive Quotes</h3>
              <p className="text-gray-500 text-xs mt-1">Compare offers and choose the best</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">

            <h2 className="text-xl font-bold text-gray-900 pb-4 border-b border-gray-100">
              Your Details
            </h2>

            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Company Name *</label>
                <input
                  type="text"
                  required
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Contact Person *</label>
                <input
                  type="text"
                  required
                  value={formData.contact_person}
                  onChange={(e) => setFormData({ ...formData, contact_person: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="email@company.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+44 xxx xxx xxxx"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 pb-4 border-b border-gray-100 pt-4">
              Product Requirements
            </h2>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Product *</label>
              <select
                required
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option value="">Select product</option>
                <option value="Navel Oranges">Navel Oranges</option>
                <option value="Valencia Oranges">Valencia Oranges</option>
                <option value="Lemons">Lemons</option>
                <option value="Strawberries">Strawberries</option>
                <option value="Table Grapes">Table Grapes</option>
                <option value="Potatoes">Potatoes</option>
                <option value="Onions">Onions</option>
                <option value="Garlic">Garlic</option>
                <option value="Fresh Herbs">Fresh Herbs</option>
                <option value="Green Beans">Green Beans</option>
                <option value="Mangoes">Mangoes</option>
                <option value="Pomegranates">Pomegranates</option>
                <option value="Other">Other (specify below)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Quantity *</label>
                <select
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                >
                  <option value="">Select quantity</option>
                  <option value="1 container (20t)">1 Container (~20 tonnes)</option>
                  <option value="2-5 containers">2-5 Containers</option>
                  <option value="5-10 containers">5-10 Containers</option>
                  <option value="10+ containers">10+ Containers</option>
                  <option value="trial order">Trial Order (small quantity)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Delivery Month *</label>
                <select
                  required
                  value={formData.delivery_month}
                  onChange={(e) => setFormData({ ...formData, delivery_month: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                >
                  <option value="">Select month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Destination Port</label>
              <select
                value={formData.destination_port}
                onChange={(e) => setFormData({ ...formData, destination_port: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
              >
                <option value="">Select port (optional)</option>
                <option value="Felixstowe">Felixstowe</option>
                <option value="London Gateway">London Gateway</option>
                <option value="Southampton">Southampton</option>
                <option value="Dover">Dover</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Heathrow (Air)">Heathrow (Air Freight)</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Specifications / Notes
              </label>
              <textarea
                rows={4}
                value={formData.specifications}
                onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                placeholder="Size, grade, packaging, certifications needed, any other requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Submit RFQ'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}