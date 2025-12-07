// src/components/ProductCard.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
    product: Product;
    onOpen: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOpen }) => (
    <div
        onClick={() => onOpen(product)}
        className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-red-100 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 cursor-pointer flex flex-col h-full relative"
    >
        <div className="relative h-56 bg-slate-50 overflow-hidden p-6">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity z-0"></div>
            <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply filter group-hover:brightness-110 transition-transform duration-500 group-hover:scale-110 relative z-10"
            />
            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <span className="bg-white text-slate-900 text-sm font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                </span>
            </div>

            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-slate-700 shadow-sm border border-slate-100 z-20">
                MOQ: {product.moq}
            </div>
        </div>

        <div className="p-5 flex-grow flex flex-col relative z-20 bg-white">
            <p className="text-xs text-red-600 font-bold uppercase tracking-wide mb-2">{product.category}</p>
            <h3 className="font-bold text-slate-800 text-lg mb-2 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                {product.name}
            </h3>
            <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                <span className="text-sm font-medium text-slate-400 group-hover:text-slate-600 transition-colors">Details & Pricing</span>
                <div className="bg-slate-50 p-2 rounded-full text-slate-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowRight size={18} />
                </div>
            </div>
        </div>
    </div>
);

export default ProductCard;