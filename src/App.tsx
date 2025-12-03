import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Menu, X, Star, ChevronRight, MessageCircle, ExternalLink, Image as ImageIcon, ArrowRight, CheckCircle2 } from 'lucide-react';

// --- TYPES ---
interface Product {
  id: number;
  name: string;
  category: string;
  moq: number;
  price: string;
  description: string;
  images: string[];
}

// --- DATA: Mocking the inventory based on IndiaMART listings ---
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Yamaha Red PVC Key Chain",
    category: "PVC Key Chain",
    moq: 1000,
    price: "₹3.50 / pc",
    description: "High-quality soft PVC rubber key chain with embossed Yamaha logo. Durable, flexible, and non-toxic material suitable for automobile showrooms and promotions. Custom branding available.",
    images: [
      "https://placehold.co/600x400/DC2626/FFFFFF?text=Yamaha+Red+PVC+Front",
      "https://placehold.co/600x400/B91C1C/FFFFFF?text=Yamaha+Back+View",
      "https://placehold.co/600x400/991B1B/FFFFFF?text=Packaging+Bundle"
    ]
  },
  {
    id: 2,
    name: "Honda Bike Stand Bush Cover",
    category: "Bike Accessories",
    moq: 1000,
    price: "₹45.00 / pc",
    description: "Heavy-duty rubber stand bush cover designed specifically for Honda motorcycles. Prevents floor scratches, reduces noise, and provides a stable grip. Available in Red and Black.",
    images: [
      "https://placehold.co/600x400/DC2626/FFFFFF?text=Honda+Bush+Cover",
      "https://placehold.co/600x400/991B1B/FFFFFF?text=Installed+View",
      "https://placehold.co/600x400/7F1D1D/FFFFFF?text=Bottom+Grip"
    ]
  },
  {
    id: 3,
    name: "Leather Jeans Branding Tag",
    category: "Leather Tags",
    moq: 1000,
    price: "₹4.00 / pc",
    description: "Genuine leather patch for denim branding. Customizable embossing with your brand logo. Wash-proof, durable stitching capability, and premium finish.",
    images: [
      "https://placehold.co/600x400/854d0e/FFFFFF?text=Leather+Tag+Front",
      "https://placehold.co/600x400/713f12/FFFFFF?text=Embossed+Texture",
      "https://placehold.co/600x400/a16207/FFFFFF?text=Jeans+Application"
    ]
  },
  {
    id: 4,
    name: "Royal Enfield 3D Keychain",
    category: "PVC Key Chain",
    moq: 1000,
    price: "₹4.50 / pc",
    description: "3D Molded Royal Enfield logo keychain. Black base with white text. High-tensile keyring attached. Ideal for bike dealers and service centers.",
    images: [
      "https://placehold.co/600x400/171717/FFFFFF?text=RE+3D+Logo",
      "https://placehold.co/600x400/262626/FFFFFF?text=Side+Profile"
    ]
  },
  {
    id: 5,
    name: "Silicone Foldable Keychain",
    category: "Silicone Key Chains",
    moq: 1000,
    price: "₹11.00 / pc",
    description: "Flexible silicone foldable keychain. Soft touch, lightweight, and vibrant colors. Perfect for budget-friendly bulk promotions.",
    images: [
      "https://placehold.co/600x400/2563EB/FFFFFF?text=Silicone+Blue",
      "https://placehold.co/600x400/1D4ED8/FFFFFF?text=Folded+View"
    ]
  },
  {
    id: 6,
    name: "TVS Blue Stand Bush Cover",
    category: "Bike Accessories",
    moq: 1000,
    price: "₹45.00 / pc",
    description: "Premium rubber bush cover for TVS bikes. Enhances stability and protects flooring. Blue color variant matches TVS branding.",
    images: [
      "https://placehold.co/600x400/2563EB/FFFFFF?text=TVS+Blue+Bush",
      "https://placehold.co/600x400/1E40AF/FFFFFF?text=Bush+Side+View"
    ]
  },
  {
    id: 7,
    name: "Leather Key Ring (Promotional)",
    category: "Leather Keyrings",
    moq: 1000,
    price: "₹6.00 / pc",
    description: "Classic leather key ring with metal rivet. Available in brown, black, and tan. Large surface area for logo printing or embossing.",
    images: [
      "https://placehold.co/600x400/523A28/FFFFFF?text=Leather+Keyring",
      "https://placehold.co/600x400/3E2C1E/FFFFFF?text=Metal+Ring+Detail"
    ]
  },
  {
    id: 8,
    name: "Manual Book Cover (2-Wheeler)",
    category: "Covers",
    moq: 1000,
    price: "₹6.00 / pc",
    description: "Protective PVC cover for 2-wheeler service manual books. Waterproof and tear-resistant. Keeps service documents safe.",
    images: [
      "https://placehold.co/600x400/0F766E/FFFFFF?text=Manual+Book+Cover",
      "https://placehold.co/600x400/115E59/FFFFFF?text=Open+View"
    ]
  }
];

// --- COMPONENTS ---

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
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200 ring-1 ring-slate-900/5"
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
        <div className="w-full md:w-1/2 bg-slate-50 p-6 flex flex-col justify-between">
          <div className="relative w-full aspect-square bg-white rounded-xl shadow-sm border border-slate-100 mb-4 overflow-hidden group">
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
          <div className="flex space-x-3 overflow-x-auto w-full pb-2 scrollbar-hide">
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
        <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto bg-white flex flex-col relative custom-scrollbar">
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

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800" id="contact">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white">AA</div>
          <h3 className="text-white text-xl font-bold">Affan Associates</h3>
        </div>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Your trusted manufacturing partner for promotional PVC key chains, protective bike covers, and premium leather branding tags.
        </p>
        <span className="inline-block text-xs font-mono bg-slate-800 border border-slate-700 px-3 py-1.5 rounded text-slate-400">
          GST: 33ABGPZ3159C1ZN
        </span>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          {['Home', 'Product Catalog', 'About Manufacturing', 'Request Quote'].map((link, i) => (
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
      <p>&copy; {new Date().getFullYear()} Affan Associates. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Supply</a>
      </div>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---

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