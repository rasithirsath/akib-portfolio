import React, { useEffect, useRef } from 'react';

const AboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      year: "2009",
      title: "Foundation",
      description: "Started consulting practice with focus on small business transformation"
    },
    {
      year: "2012",
      title: "First Major Client",
      description: "Secured Fortune 500 contract, establishing credibility in enterprise consulting"
    },
    {
      year: "2015",
      title: "International Expansion",
      description: "Opened offices in London and Singapore, serving global markets"
    },
    {
      year: "2018",
      title: "Digital Innovation",
      description: "Launched AI-powered consulting tools and methodologies"
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Named Top Consulting Firm by Business Weekly for three consecutive years"
    },
    {
      year: "2024",
      title: "Sustainable Future",
      description: "Leading ESG and sustainability transformation initiatives globally"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23f1f5f9%22%20fill-opacity=%220.4%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-navy-800 mb-8">
              About Our Mission
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We believe every business has untapped potential waiting to be unlocked. Our mission is to guide 
              organizations through transformative journeys that create sustainable value, foster innovation, 
              and drive meaningful impact in their industries.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">150+</span>
                </div>
                <h3 className="font-playfair font-semibold text-navy-800 mb-2">Projects Completed</h3>
                <p className="text-slate-600">Successful transformations across industries</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-400 to-navy-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">25+</span>
                </div>
                <h3 className="font-playfair font-semibold text-navy-800 mb-2">Countries Served</h3>
                <p className="text-slate-600">Global reach with local expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-navy-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">15</span>
                </div>
                <h3 className="font-playfair font-semibold text-navy-800 mb-2">Years Experience</h3>
                <p className="text-slate-600">Proven track record of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Highlight */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-reveal">
              <div className="card-3d hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&auto=format"
                  alt="Founder and CEO"
                  className="w-full h-96 md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-2xl" />
              </div>
            </div>

            <div className="scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-8">
                Meet Our Founder
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-navy-700 mb-3">Our Vision</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    "I envision a world where every business, regardless of size, has access to world-class 
                    strategic guidance. Our role is to democratize excellence and make transformative 
                    consulting accessible to organizations ready to embrace change."
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-navy-700 mb-3">Our Mission</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    "We exist to unlock the extraordinary potential within ordinary businesses. Through 
                    strategic insight, innovative methodologies, and unwavering commitment to our clients' 
                    success, we transform challenges into opportunities for sustainable growth."
                  </p>
                </div>

                <div className="pt-6">
                  <p className="text-xl font-playfair text-navy-800 mb-2">Alexander Richardson</p>
                  <p className="text-gold-600 font-medium">Founder & Chief Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-navy-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
                Leadership Excellence
              </h2>
              <p className="text-xl text-slate-600">
                Built on experience, driven by innovation, guided by integrity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 scroll-reveal">
              <div>
                <h3 className="text-2xl font-playfair font-semibold text-navy-800 mb-6">Background</h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  With over 15 years of experience in management consulting, Alexander has led 
                  transformational initiatives across Fortune 500 companies and emerging enterprises. 
                  His expertise spans strategic planning, operational excellence, and digital transformation.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Before founding our consulting practice, Alexander held senior positions at McKinsey & Company 
                  and Boston Consulting Group, where he developed the methodologies that form the foundation 
                  of our consulting approach today.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-playfair font-semibold text-navy-800 mb-6">Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className="text-slate-700">Strategic Planning & Execution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className="text-slate-700">Digital Transformation Leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className="text-slate-700">Operational Excellence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className="text-slate-700">M&A Strategy & Integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className="text-slate-700">ESG & Sustainability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-navy-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From humble beginnings to global impact - the milestones that shaped our consulting excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gold-400 to-navy-600" />

              {timelineItems.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-12 scroll-reveal ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white shadow-lg z-10" />

                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="glass-effect p-6 rounded-2xl hover-lift">
                      <div className="text-2xl font-playfair font-bold text-gold-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-navy-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
