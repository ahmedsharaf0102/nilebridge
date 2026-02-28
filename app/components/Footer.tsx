import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold">
                Nile<span className="text-emerald-400">Bridge</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Connecting verified Egyptian agricultural exporters with trusted UK importers. 
              Building bridges for better trade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">About Us</Link>
              <a href="#how-it-works" className="block text-gray-400 hover:text-white transition-colors text-sm">How It Works</a>
              <a href="#services" className="block text-gray-400 hover:text-white transition-colors text-sm">Products</a>
            </div>
          </div>

          {/* For Business */}
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">For Business</h4>
            <div className="space-y-2">
              <Link href="/supplier-register" className="block text-gray-400 hover:text-white transition-colors text-sm">Supplier Registration</Link>
              <Link href="/importer-register" className="block text-gray-400 hover:text-white transition-colors text-sm">Importer Registration</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-emerald-400">Contact Us</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>📧 info@nilebridge.com</p>
              <p>🇪🇬 Cairo, Egypt</p>
              <p>🇬🇧 London, UK</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 NileBridge. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}