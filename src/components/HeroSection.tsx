
import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gold-200/30 to-gold-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-navy-200/20 to-navy-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                <span className="block text-navy-800">Guiding</span>
                <span className="block text-gradient">Businesses</span>
                <span className="block text-navy-800">to Excellence</span>
              </h1>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                Transforming enterprises through strategic consulting, innovative solutions, and proven methodologies that drive sustainable growth.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <button className="px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-700 text-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium text-lg">
                Download CV
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-navy-600 to-navy-700 text-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-medium text-lg">
               LinkedIn 
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="card-3d hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=800&fit=crop&auto=format"
                  alt="Business consultation meeting"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-2xl" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 glass-effect rounded-2xl flex items-center justify-center animate-float">
                <span className="text-2xl font-bold text-gradient">5+</span>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-16 glass-effect rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-sm font-medium text-navy-700">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
