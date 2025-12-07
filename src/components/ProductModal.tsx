// src/components/ProductModal.tsx
import React, { useState } from 'react';
import { X, CheckCircle2, Star, ExternalLink, MessageCircle } from 'lucide-react';
import type { Product } from '../types'

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const [activeImage, setActiveImage] = useState<number>(0);

    const handleOrder = () => {
        const phone = "919443018589";
        const text = `Hello Affan Associates, I am interested in ordering: *${product.name}* (ID: ${product.id}). MOQ: ${product.moq}. Please provide a quote.`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm transition-all" onClick={onClose}>
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200 ring-1 ring-slate-900/5"
                onClick={e => e.stopPropagation()}
            >
                {/* Mobile Header with Close */}
                <div className="flex justify-between items-center p-4 border-b md:hidden bg-white sticky top-0 z-10">
                    <h3 className="font-bold text-slate-800 truncate pr-4">{product.name}</h3>
                    <button onClick={onClose} className="bg-slate-100 p-2 rounded-full text-slate-600 hover:bg-red-50 hover:text-red-600">
                        <X size={20} />
                    </button>
                </div>

                {/* Left: Image Gallery */}
                <div className="w-full md:w-1/2 bg-slate-50 p-6 flex flex-col justify-between shrink-0">
                    <div className="relative w-full h-72 md:h-auto md:aspect-square bg-white rounded-xl shadow-sm border border-slate-100 mb-4 overflow-hidden group">
                        <img
                            src={product.images[activeImage]}
                            alt={product.name}
                            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm border border-slate-100">
                                Image {activeImage + 1}/{product.images.length}
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-3 overflow-x-auto w-fullqh pb-2 scrollbar-hide">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`w-20 h-20 rounded-xl border-2 overflow-hidden flex-shrink-0 transition-all ${activeImage === idx ? 'border-red-600 ring-2 ring-red-100 scale-105' : 'border-white hover:border-slate-300 opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover bg-white" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-1/2 p-6 md:p-10 md:overflow-y-auto bg-white flex flex-col relative custom-scrollbar">
                    <button onClick={onClose} className="hidden md:block absolute top-6 right-6 text-slate-400 hover:text-red-600 transition bg-slate-50 p-2 rounded-full hover:bg-red-50">
                        <X size={24} />
                    </button>

                    <div className="mb-8">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                {product.category}
                            </span>
                            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full flex items-center">
                                <CheckCircle2 size={12} className="mr-1" /> In Stock
                            </span>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-3 leading-tight">{product.name}</h2>

                        <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className={i < 4 ? "text-yellow-400" : "text-slate-200"} />)}
                            <span className="text-slate-400 text-sm ml-2 font-medium">(4.8/5 Rating)</span>
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
                            <div className="flex items-start">
                                <div className="bg-amber-100 p-2 rounded-lg mr-3 text-amber-700">
                                    <ExternalLink size={20} />
                                </div>
                                <div>
                                    <h4 className="text-amber-900 font-bold text-sm uppercase tracking-wide mb-1">Wholesale Requirement</h4>
                                    <p className="text-slate-700">
                                        <strong>Minimum Order Quantity:</strong> {product.moq} Units
                                    </p>
                                    <p className="text-slate-500 text-sm mt-1">
                                        Bulk pricing available for orders above 5000 units.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">Product Description</h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                                {product.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="bg-slate-50 p-3 rounded-lg">
                                    <span className="block text-xs text-slate-500 uppercase">Material</span>
                                    <span className="font-semibold text-slate-800">Premium Grade</span>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg">
                                    <span className="block text-xs text-slate-500 uppercase">Origin</span>
                                    <span className="font-semibold text-slate-800">Made in India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100 sticky bottom-0 bg-white/95 backdrop-blur py-4 md:static">
                        <button
                            onClick={handleOrder}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-3 shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all transform active:scale-[0.98]"
                        >
                            <MessageCircle size={24} />
                            <span className="text-lg">Get Quote via WhatsApp</span>
                        </button>
                        <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Usually responds within 1 hour
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;