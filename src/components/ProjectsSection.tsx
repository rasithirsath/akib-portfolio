
import React, { useEffect, useRef } from 'react';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Digital Transformation Initiative",
      company: "Fortune 500 Tech Company",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format",
      description: "Led comprehensive digital transformation resulting in 40% efficiency improvement",
      metrics: "40% efficiency boost"
    },
    {
      id: 2,
      title: "Strategic Market Expansion",
      company: "Global Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&auto=format",
      description: "Guided international expansion into 12 new markets across Europe and Asia",
      metrics: "12 new markets"
    },
    {
      id: 3,
      title: "Operational Excellence Program",
      company: "Healthcare Network",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&auto=format",
      description: "Optimized healthcare operations reducing costs by 25% while improving patient care",
      metrics: "25% cost reduction"
    },
    {
      id: 4,
      title: "Innovation Lab Setup",
      company: "Financial Services Leader", 
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&auto=format",
      description: "Established innovation framework generating 15 new revenue streams",
      metrics: "15 revenue streams"
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
            Our Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Delivering transformative results across industries through strategic consulting and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="scroll-reveal card-3d group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-gold-500 text-white text-sm rounded-full font-medium">
                          {project.metrics}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-navy-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 font-medium">
                    {project.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
