"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const beautyImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beautyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [beautyImages.length]);

  return (
    <>
      {/* Luxury Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Sophisticated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-sky-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-rose-200/40 rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="luxury-container w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Content Section */}
              <div className="lg:col-span-6 text-center lg:text-left space-y-10">
                {/* Premium Badge */}
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-6 py-3 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-sm tracking-wide">PREMIUM BEAUTY SALON SINCE 2011</span>
                </div>
                
                {/* Main Headlines */}
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-shadow-luxury">
                    <span className="block text-slate-800 leading-none">Your</span>
                    <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                      Beauty
                    </span>
                    <span className="block text-slate-700 text-4xl md:text-5xl lg:text-6xl font-medium mt-4">
                      Destination
                    </span>
                  </h1>
                  
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500"></div>
                    <h3 className="text-2xl md:text-3xl font-serif text-slate-600 font-medium">
                      in Bur Dubai
                    </h3>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400"></div>
                  </div>
                </div>
                
                {/* Elegant description */}
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                  Experience luxury beauty services at 
                  <span className="font-semibold text-sky-700"> Shobha Beauty Studio & Nails </span>
                  in the heart of Meena Bazaar. Specializing in hair straightening, blow dry, mehendi, and press-on nails.
                </p>

                {/* Elegant CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6">
                  <Link
                    href="#book"
                    className="luxury-btn group relative"
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      <span className="text-xl">💎</span>
                      <span>Book Appointment</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </Link>
                  
                  <a
                    href="tel:+97143591532"
                    className="border-2 border-slate-300 text-slate-700 px-10 py-4 rounded-full font-semibold text-lg hover:border-sky-400 hover:text-sky-600 hover:bg-sky-50 transition-all duration-300 flex items-center justify-center space-x-3"
                  >
                    <span className="text-xl">📞</span>
                    <span>Call Now</span>
                  </a>
                </div>

                {/* Elegant Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                  {[
                    { icon: "🕒", title: "Daily 10AM-10PM", subtitle: "365 Days Open" },
                    { icon: "📍", title: "Meena Bazaar", subtitle: "Bur Dubai, UAE" },
                    { icon: "⭐", title: "Since 2011", subtitle: "13+ Years Excellence" }
                  ].map((item, index) => (
                    <div key={index} className="luxury-card text-center py-6">
                      <div className="text-3xl mb-3 text-luxury-gold">{item.icon}</div>
                      <div className="text-sm font-bold text-slate-800">{item.title}</div>
                      <div className="text-xs text-slate-600 mt-1">{item.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Visual Section */}
              <div className="lg:col-span-6 relative">
                <div className="relative">
                  {/* Main image container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-[4/5] relative">
                      {beautyImages.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Professional beauty service ${index + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                          }`}
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.src = `https://placehold.co/800x1000/0EA5E9/FFFFFF?text=Shobha+Beauty+Studio+${index + 1}`;
                          }}
                        />
                      ))}
                      
                      {/* Luxury overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      
                      {/* Elegant slide indicators */}
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {beautyImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 backdrop-blur-sm ${
                              index === currentSlide 
                                ? 'bg-white shadow-xl scale-125 ring-2 ring-white/50' 
                                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-50 blur-xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full opacity-40 blur-lg animate-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-sky-50/60"></div>
        
        <div className="relative luxury-container">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-8 py-4 rounded-full shadow-lg mb-8">
              <div className="w-3 h-3 bg-sky-500 rounded-full"></div>
              <span className="font-semibold tracking-wide">PROFESSIONAL BEAUTY SERVICES</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-8">
              Our Specialty 
              <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              Discover our range of premium beauty treatments designed to enhance your natural beauty 
              and boost your confidence with expert care and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Hair Straightening */}
            <div className="luxury-card group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <span className="text-4xl text-white">✨</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                  Hair Straightening
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Professional keratin treatments and chemical straightening for silky, smooth hair that lasts for months. 
                  Expert application with premium products.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-sky-600">From AED 200</span>
                  <Link
                    href="/services#hair-straightening"
                    className="text-sky-500 hover:text-sky-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Blow Dry */}
            <div className="luxury-card group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <span className="text-4xl text-white">💨</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                  Professional Blow Dry
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Expert styling with professional tools for perfect volume, bounce, and lasting hold. 
                  Customized for your hair type and style preference.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-sky-600">From AED 50</span>
                  <Link
                    href="/services#blow-dry"
                    className="text-sky-500 hover:text-sky-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Mehendi */}
            <div className="luxury-card group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <span className="text-4xl text-white">🎨</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                  Mehendi & Henna Art
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Beautiful traditional and contemporary henna designs for all occasions. 
                  Intricate patterns created by skilled artists.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-sky-600">From AED 30</span>
                  <Link
                    href="/services#mehendi"
                    className="text-sky-500 hover:text-sky-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Press-on Nails */}
            <div className="luxury-card group text-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <span className="text-4xl text-white">💅</span>
                </div>
                
                <h3 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">
                  Press-on Nails
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                  Instant glamorous nails with premium press-on application. 
                  Perfect manicured look in minutes with lasting results.
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-sky-600">From AED 80</span>
                  <Link
                    href="/services#press-on-nails"
                    className="text-sky-500 hover:text-sky-700 font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-all"
                  >
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant CTA */}
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="luxury-btn text-xl"
            >
              <span>Explore All Services</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Luxury Style */}
      <section className="section-padding bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 relative overflow-hidden">
        {/* Luxury background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 165, 116, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative luxury-container">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Why Choose
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Shobha Beauty Studio?
              </span>
            </h2>
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              Your trusted beauty partner in Bur Dubai with exceptional service, 
              premium products, and over a decade of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "👑",
                title: "Since 2011 - 13+ Years",
                description: "Over 13 years of professional beauty services with thousands of satisfied clients across Dubai and UAE."
              },
              {
                icon: "🏆", 
                title: "Premium Products",
                description: "We use only the finest quality products from trusted international brands for exceptional results."
              },
              {
                icon: "🕒",
                title: "Always Open",
                description: "Open daily from 10 AM to 10 PM, 365 days a year for your convenience and beauty needs."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-600/30 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-yellow-400/20">
                  <span className="text-6xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Contact Section */}
      <section id="book" className="section-padding bg-gradient-to-br from-slate-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/30 to-transparent"></div>
        
        <div className="relative luxury-container text-center">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-2xl p-16 rounded-3xl border border-white/20 shadow-2xl">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Ready to Transform Your Look?
              </h2>
              <p className="text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                Book your appointment today and experience the luxury, professionalism, and artistry 
                at Shobha Beauty Studio & Nails.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12">
                <Link
                  href="/book"
                  className="group bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-slate-900 px-12 py-6 rounded-full font-bold text-xl shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-2xl">💎</span>
                    <span>Book Appointment</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
                
                <a
                  href="https://wa.me/97143591532?text=Hello! मुझे appointment book करनी है Shobha Beauty Studio में। कृपया availability बताएं। धन्यवाद!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-3 border-white/30 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-slate-900 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-2xl">💬</span>
                    <span>WhatsApp Us</span>
                  </span>
                </a>
              </div>

              {/* Elegant Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-yellow-400 text-3xl">📞</span>
                  <a href="tel:+97143591532" className="text-white hover:text-yellow-400 font-bold text-xl transition-colors">
                    +971 4 359 1532
                  </a>
                  <span className="text-slate-400 text-sm">Click to Call</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-yellow-400 text-3xl">📍</span>
                  <span className="text-white font-bold text-xl">Meena Bazaar</span>
                  <span className="text-slate-400 text-sm">Bur Dubai, UAE</span>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-yellow-400 text-3xl">🕒</span>
                  <span className="text-white font-bold text-xl">Daily 10AM-10PM</span>
                  <span className="text-slate-400 text-sm">365 Days Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}