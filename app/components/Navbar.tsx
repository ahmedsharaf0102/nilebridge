'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-gray-900">
              Nile<span className="text-emerald-600">Bridge</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">About</Link>
            <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Blog</Link>
            <Link href="/resources" className="text-gray-600 hover:text-emerald-600 transition-colors font-medium">Resources</Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link href="/supplier-register" className="px-4 py-2 text-emerald-600 border border-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-all">
              Supplier
            </Link>
            <Link href="/importer-register" className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all hover:shadow-lg">
              Importer
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 fade-in">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg">About</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg">Blog</Link>
            <Link href="/resources" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-emerald-50 rounded-lg">Resources</Link>
            <div className="mt-3 space-y-2 px-4">
              <Link href="/supplier-register" className="block text-center px-4 py-3 text-emerald-600 border border-emerald-600 rounded-lg font-semibold">Supplier</Link>
              <Link href="/importer-register" className="block text-center px-4 py-3 bg-emerald-600 text-white rounded-lg font-semibold">Importer</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}