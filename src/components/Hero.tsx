// src/components/Hero.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => (
    <div className="bg-slate-900 text-white pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
            {/* Animated Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
            <div className="absolute transform -translate-y-1/2 -translate-x-1/2 top-0 left-0 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute transform translate-y-1/2 translate-x-1/2 bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-full px-4 py-1.5 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-slate-300">Accepting Bulk Orders</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Premium PVC & Leather <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Manufacturing Experts</span>
            </h2>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Direct from our factory in Vellore. We craft high-quality PVC Key Chains, Bike Stand Covers, and Leather Branding Materials for businesses across India.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <a
                    href="#products"
                    className="bg-red-600 hover:bg-red-500 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg shadow-red-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center"
                >
                    View Product Catalog
                    <ArrowRight size={18} className="ml-2" />
                </a>
                <a
                    href="#contact"
                    className="bg-slate-800/50 backdrop-blur border border-slate-600 hover:bg-slate-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-all flex items-center justify-center"
                >
                    Request a Quote
                </a>
            </div>
        </div>
    </div>
);

export default Hero;