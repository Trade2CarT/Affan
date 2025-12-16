// src/components/Footer.tsx
import React from 'react';
import { ChevronRight, MapPin, Phone } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800" id="contact">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
                <div className="flex items-center space-x-2 mb-6">
                    <div className="w-12 h-auto">
                        <Logo className="w-full h-full" />
                    </div>
                    <h3 className="text-white text-xl font-bold">Affan Associates</h3>
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    Trusted Manufacturer in Melvisharam for promotional PVC key chains, protective bike covers, and leather branding tags.
                </p>
                <span className="inline-block text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1.5 rounded text-slate-400">
                    GST: 33ABGPZ3159C1ZN
                </span>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                    {['Home', 'PVC Products', 'Leather Branding', 'Contact Factory'].map((link, i) => (
                        <li key={i}><a href="#" className="hover:text-red-400 transition-colors flex items-center"><ChevronRight size={14} className="mr-2 text-slate-600" />{link}</a></li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-lg">Factory Address</h4>
                <ul className="space-y-4 text-sm">
                    <li className="flex items-start">
                        <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-red-500" />
                        <span className="text-slate-400">153, Pudupet, 2nd Street,<br />Melvisharam, Vellore - 632509,<br />Tamil Nadu, India</span>
                    </li>
                    <li className="flex items-center">
                        <Phone size={20} className="mr-3 flex-shrink-0 text-red-500" />
                        <span className="text-white font-medium hover:text-red-400 cursor-pointer">+91 94430 18589</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <h5 className="text-white font-bold text-sm mb-2">Service Areas:</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Vellore • Melvisharam • Arcot • Walaja • Arni • Ranipet • Pan India Delivery
                    </p>
                </div>
            </div>

            <div>
                <h4 className="text-white font-bold mb-6 text-lg">Opening Hours</h4>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between border-b border-slate-700 pb-2">
                            <span className="text-slate-400">Mon - Sat</span>
                            <span className="text-white font-medium">9:00 AM - 7:00 PM</span>
                        </li>
                        <li className="flex justify-between text-slate-500 pt-1">
                            <span>Sunday</span>
                            <span className="text-red-400 text-xs font-bold uppercase py-0.5 px-2 bg-red-900/20 rounded">Closed</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} Affan Associates. Best Manufacturer in Vellore District.</p>
        </div>
    </footer>
);

export default Footer;