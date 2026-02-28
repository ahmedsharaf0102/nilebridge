'use client';
import { useState } from 'react';

export default function ImporterRegister() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    city: '',
    productsInterested: '',
    importVolume: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-cyan-50">
        <div className="text-center p-8 max-w-md">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Registration Received!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for registering as an importer. Our team will review 
            your application and connect you with the best Egyptian suppliers.
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
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-br from-cyan-800 to-cyan-900 text-white">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <span className="text-4xl mb-4 block">🇬🇧</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">
            Importer Registration
          </h1>
          <p className="text-cyan-200 text-lg max-w-xl mx-auto">
            Register your UK business and access premium Egyptian 
            agricultural products at competitive prices
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
            
            <h2 className="text-xl font-bold text-gray-900 pb-4 border-b border-gray-100">
              Company Information
            </h2>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Your company name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="e.g. London, Manchester, Birmingham"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="company@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="+44 xxx xxx xxxx"
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 pb-4 border-b border-gray-100 pt-4">
              Import Requirements
            </h2>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Products You're Interested In *
              </label>
              <textarea
                required
                rows={3}
                value={formData.productsInterested}
                onChange={(e) => setFormData({...formData, productsInterested: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                placeholder="e.g. Fresh oranges, Potatoes, Herbs..."
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Estimated Monthly Volume
              </label>
              <select
                value={formData.importVolume}
                onChange={(e) => setFormData({...formData, importVolume: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all bg-white"
              >
                <option value="">Select volume</option>
                <option value="small">Under 10 tonnes</option>
                <option value="medium">10-50 tonnes</option>
                <option value="large">50-100 tonnes</option>
                <option value="xlarge">100+ tonnes</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">
                Additional Notes
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                placeholder="Any specific requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-cyan-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Submit Registration ✓
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}