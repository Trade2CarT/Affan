// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-slate-900 py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center space-x-3 group cursor-pointer">
                    {/* Logo Placeholder */}
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg group-hover:scale-105 transition-transform">
                        AA
                    </div>
                    <div>
                        <h1 className="text-xl font-bold leading-tight text-white tracking-tight">Affan Associates</h1>
                        <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Est. 2012 • Vellore</p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                    <a href="#products" className="hover:text-white transition hover:underline underline-offset-4 decoration-red-500">Products</a>
                    <a href="#features" className="hover:text-white transition hover:underline underline-offset-4 decoration-red-500">Why Us</a>
                    <a href="#contact" className="hover:text-white transition hover:underline underline-offset-4 decoration-red-500">Contact</a>
                    <button
                        onClick={() => window.open('https://wa.me/919443018589', '_blank')}
                        className="bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full flex items-center space-x-2 transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5"
                    >
                        <MessageCircle size={18} />
                        <span>WhatsApp Us</span>
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-xl animate-in slide-in-from-top-5 duration-200">
                    <div className="flex flex-col p-4 space-y-4 text-center">
                        <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white py-2">Products</a>
                        <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white py-2">Why Choose Us</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-300 hover:text-white py-2">Contact Factory</a>
                        <button
                            onClick={() => window.open('https://wa.me/919443018589', '_blank')}
                            className="bg-green-600 text-white px-4 py-3 rounded-lg flex items-center justify-center space-x-2 w-full font-semibold"
                        >
                            <MessageCircle size={18} />
                            <span>Chat on WhatsApp</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;