// src/App.tsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { PRODUCTS } from './data';
import type  { Product } from './types';
import './App.css';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProduct(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />

        <main id="products" className="container mx-auto px-4 py-20 md:py-24">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm bg-red-50 px-3 py-1 rounded-full">Our Catalog</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900 tracking-tight">Explore Our Collection</h2>
            <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-lg">
              Premium manufacturing solutions for your brand. Click any item for wholesale details.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpen={setSelectedProduct}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default App;