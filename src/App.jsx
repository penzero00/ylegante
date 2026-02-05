import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, ShoppingBag, ChevronRight, 
  Star, Heart, MapPin, Phone, Mail, Instagram, Facebook, Feather 
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  // Handle scroll for transparent-to-solid navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormStatus('idle');
        setIsModalOpen(false);
      }, 3000);
    }, 1500);
  };

  // Collection Data
  const collections = [
    {
      id: 1,
      title: "The Ethereal Solitaire",
      price: "From ₱25,000",
      category: "Engagement",
      // Fixed: High-res solitaire ring
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-8"
    },
    {
      id: 2,
      title: "Vintage Gold Bands",
      price: "From ₱18,000",
      category: "Wedding",
      // Fixed: Gold bands detail shot
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-4"
    },
    {
      id: 3,
      title: "Diamond Pave Sets",
      price: "From ₱45,000",
      category: "Sets",
      // Fixed: Diamond set
      image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-4"
    },
    {
      id: 4,
      title: "Custom Eternity Rings",
      price: "Inquire for Price",
      category: "Bespoke",
      // Fixed: Diamond crafting/eternity ring
      image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=800&q=80",
      colSpan: "md:col-span-8"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-stone-800 font-sans selection:bg-stone-800 selection:text-white">
      
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ease-in-out px-6 md:px-12 ${
          isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} className="text-stone-800" />
          </button>

          {/* Desktop Links (Left) */}
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-[0.2em] uppercase">
            <a href="#collections" className="hover:text-amber-700 transition-colors">Collections</a>
            <a href="#bespoke" className="hover:text-amber-700 transition-colors">Bespoke</a>
          </div>

          {/* Logo */}
          <div className="text-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <h1 className={`font-serif font-bold tracking-tight transition-all duration-500 ${isScrolled ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
              YLEGANTE
            </h1>
            <p className={`text-[0.6rem] tracking-[0.4em] uppercase text-stone-500 mt-1 transition-all duration-500 ${isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
              Fine Jewelry & Wedding Rings
            </p>
          </div>

          {/* Icons (Right) */}
          <div className="flex gap-6 items-center">
            <Search size={20} className="hidden md:block cursor-pointer hover:text-amber-700 transition-colors" />
            <button onClick={() => setIsModalOpen(true)}>
               <ShoppingBag size={20} className="cursor-pointer hover:text-amber-700 transition-colors" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-stone-100 p-8 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5">
            {['Collections', 'Bespoke', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif italic text-stone-800 border-b border-stone-100 pb-2">
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=2000&q=80" 
            alt="Ylegante Wedding Ring" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-6 animate-in fade-in zoom-in duration-1000">
          <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6 text-white/90">
            Timeless Vows, Eternal Gold
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-none mb-8">
            The Art of <br/> <span className="italic">Commitment</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#collections" className="px-8 py-4 bg-white text-stone-900 text-xs font-bold tracking-widest uppercase hover:bg-stone-100 transition-all">
              Explore Collections
            </a>
            <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all">
              Book Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Intro / Philosophy */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-px h-16 bg-amber-700/30 mx-auto mb-8"></div>
          <h3 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
            "Jewelry is not just an accessory; <br/> it is a memory made tangible."
          </h3>
          <p className="text-stone-500 font-light leading-relaxed text-sm md:text-base mb-8">
            At Ylegante, we craft pieces that honor your unique story. From the heart of Quezon City, 
            we bring you wedding bands and engagement rings that blend classic sophistication with modern aesthetics. 
            Every diamond is hand-selected, and every band is forged with precision.
          </p>
          <div className="flex justify-center text-amber-800/40">
            <Feather size={48} strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Collections - Asymmetrical Grid */}
      <section id="collections" className="py-12 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
             <div>
               <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase mb-2">Curated Selection</p>
               <h3 className="text-3xl font-serif text-stone-900">Featured Pieces</h3>
             </div>
             <a href="#" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase hover:text-amber-700 transition-colors">
               View All <ChevronRight size={14} />
             </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {collections.map((item) => (
              <div key={item.id} className={`${item.colSpan} group cursor-pointer`} onClick={() => setIsModalOpen(true)}>
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-stone-900 text-xs font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      Inquire
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-serif text-stone-900 group-hover:text-amber-700 transition-colors">{item.title}</h4>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-1">{item.category}</p>
                  </div>
                  <span className="text-sm font-medium text-stone-800">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke / Custom Section */}
      <section id="bespoke" className="py-24 px-6 md:px-12 bg-[#F5F2EF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-12 -left-12 w-48 h-48 border border-stone-300 rounded-full opacity-50 hidden md:block"></div>
             <img 
               src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=1000&q=80" 
               alt="Craftsmanship" 
               className="relative z-10 w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-1000"
             />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase mb-4">The Atelier</p>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
              Designed by You, <br/> Crafted by Us.
            </h3>
            <p className="text-stone-600 font-light leading-relaxed mb-8">
              Your love story is unique, and your ring should be too. Our bespoke service allows you to 
              collaborate with our artisans to create a one-of-a-kind piece. Select your diamond, 
              choose your metal, and engrave your promise.
            </p>
            <ul className="space-y-4 mb-8">
              {['Personalized Consultation', '3D Design Preview', 'GIA Certified Diamonds', 'Lifetime Cleaning Service'].map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-stone-800 tracking-wide">
                  <span className="w-1.5 h-1.5 bg-amber-700 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button onClick={() => setIsModalOpen(true)} className="inline-block border-b border-stone-900 pb-1 text-sm font-bold tracking-widest uppercase hover:text-amber-700 hover:border-amber-700 transition-colors">
              Start Your Custom Design
            </button>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#1C1C1C] text-stone-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          
          <div className="md:col-span-1">
            <h4 className="text-2xl font-serif text-white mb-6">YLEGANTE</h4>
            <p className="text-sm font-light leading-relaxed mb-6">
              Creating heirlooms for the modern romance. Based in Quezon City, delivering love nationwide.
            </p>
            <div className="flex gap-4">
               <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
               <a href="https://facebook.com/Ylegante" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Contact Us</h5>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-4">
                 <div className="flex items-start gap-3">
                   <Phone size={16} className="mt-1" />
                   <div>
                     <p className="text-white text-sm">0920 531 2688</p>
                     <p className="text-xs opacity-50">Mon - Sun (Always Open)</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <Mail size={16} className="mt-1" />
                   <p className="text-white text-sm">ndweddingrings@yahoo.com</p>
                 </div>
               </div>
               <div className="flex items-start gap-3">
                 <MapPin size={16} className="mt-1" />
                 <div>
                   <p className="text-white text-sm">Quezon City, Philippines</p>
                   <a href="#" className="text-xs border-b border-stone-600 hover:text-white hover:border-white transition-colors pb-0.5 mt-1 inline-block">Get Directions</a>
                 </div>
               </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <h5 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-6">Newsletter</h5>
            <p className="text-xs mb-4">Subscribe for exclusive offers and new collection drops.</p>
            <div className="flex border-b border-stone-700 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent w-full outline-none text-white text-sm placeholder:text-stone-600"
              />
              <button className="text-white hover:text-amber-500 transition-colors uppercase text-xs font-bold">Join</button>
            </div>
          </div>

        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 text-center md:text-left flex flex-col md:flex-row justify-between text-xs opacity-50">
          <p>&copy; {new Date().getFullYear()} Ylegante Jewelry. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white p-8 md:p-12 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in-95 duration-300">
             <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 transition-colors">
               <X size={24} />
             </button>
             
             <div className="text-center mb-8">
               <p className="text-xs font-bold tracking-[0.2em] text-amber-700 uppercase mb-2">Private Consultation</p>
               <h3 className="text-3xl font-serif text-stone-900">Begin Your Journey</h3>
               <p className="text-stone-500 text-sm mt-3 leading-relaxed">
                 Tell us about your dream ring. We will contact you shortly to schedule a personal appointment or discuss your custom design.
               </p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-5">
               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                 <input type="text" required className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 placeholder:text-stone-300" placeholder="Jane Doe" />
               </div>
               
               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                 <input type="email" required className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 placeholder:text-stone-300" placeholder="jane@example.com" />
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Interested In</label>
                 <select className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 bg-transparent">
                   <option>Wedding Bands</option>
                   <option>Engagement Ring</option>
                   <option>Custom / Bespoke Design</option>
                   <option>General Inquiry</option>
                 </select>
               </div>

               <div>
                 <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Your Message</label>
                 <textarea rows="3" className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 placeholder:text-stone-300 resize-none" placeholder="I'm looking for a gold band with..."></textarea>
               </div>

               <button 
                 type="submit" 
                 disabled={formStatus !== 'idle'}
                 className="w-full bg-stone-900 text-white py-4 mt-4 text-xs font-bold uppercase tracking-widest hover:bg-amber-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
               >
                 {formStatus === 'idle' ? 'Request Appointment' : formStatus === 'submitting' ? 'Sending Request...' : 'Request Sent!'}
               </button>
             </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
