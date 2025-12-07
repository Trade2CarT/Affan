// src/components/Features.tsx
import React from 'react';
import { Star, MapPin, Image as ImageIcon } from 'lucide-react';

const Features: React.FC = () => (
    <section id="features" className="py-20 bg-white border-b border-slate-100 relative">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Manufacturing Excellence</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {[
                    { icon: Star, color: "blue", title: "9 Years Experience", desc: "Established in 2012, we have nearly a decade of expertise in polymer and leather manufacturing." },
                    { icon: ImageIcon, color: "green", title: "Factory Direct", desc: "Zero middleman costs. We manufacture in-house to ensure the best wholesale pricing for you." },
                    { icon: MapPin, color: "purple", title: "Pan India Shipping", desc: "Reliable logistics partners ensuring safe delivery to Chennai, Bangalore, Mumbai, and beyond." }
                ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                        <div className={`w-16 h-16 bg-${item.color}-100 text-${item.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform hover:scale-110 transition-transform duration-300`}>
                            <item.icon size={32} />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-slate-800">{item.title}</h3>
                        <p className="text-slate-500 leading-relaxed max-w-xs">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;