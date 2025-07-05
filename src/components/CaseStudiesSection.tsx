
import React, { useEffect, useRef } from 'react';

const CaseStudiesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const caseStudies = [
    {
      id: 1,
      title: "Supply Chain Optimization",
      company: "Global Retail Giant",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop&auto=format",
      beforeAfter: "30% → 5% delivery delays",
      transformation: "Reduced delivery delays from 30% to 5% through AI-powered logistics optimization",
      impact: "$50M annual savings"
    },
    {
      id: 2,
      title: "Cultural Transformation",
      company: "Traditional Banking Institution",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&auto=format",
      beforeAfter: "65% → 92% employee satisfaction",
      transformation: "Modernized corporate culture resulting in increased innovation and retention",
      impact: "27% productivity increase"
    },
    {
      id: 3,
      title: "Revenue Diversification",
      company: "Energy Sector Leader",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&auto=format",
      beforeAfter: "1 → 8 revenue streams",
      transformation: "Developed renewable energy portfolio and digital services offerings",
      impact: "300% revenue growth"
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
            Case Studies
          </h2>
          {/* <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real transformation stories showcasing measurable impact and sustainable results
          </p> */}
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`scroll-reveal flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="card-3d hover-lift">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                    
                    {/* Before/After Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="glass-effect px-4 py-2 rounded-lg">
                        <span className="text-white font-semibold text-sm">
                          {study.beforeAfter}
                        </span>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="absolute bottom-6 right-6">
                      <div className="bg-gold-500 px-4 py-2 rounded-lg">
                        <span className="text-white font-bold text-sm">
                          {study.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg">
                  <h3 className="text-3xl font-playfair font-bold text-navy-800 mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-navy-100 text-navy-700 rounded-full text-sm font-medium">
                      {study.company}
                    </span>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {study.transformation}
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="flex-1 h-px bg-gradient-to-r from-gold-400 to-transparent" />
                    <span className="text-gold-600 font-medium">Transformation Complete</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
