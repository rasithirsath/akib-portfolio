import React, { useEffect, useRef } from "react";
import Deloitte from "../../public/images/Deloitte 1.jpg";
import Mastercard from "../../public/images/Mastercard.jpg";
const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      image: Mastercard,
      description: [
        "Completed a job simulation involving data-driven marketing analysis for Mastercard.",
        "Analyzed a comprehensive data set, employing techniques in statistical analysis and comparative study to identify key trends in sales and customer engagement.",
        "Developed and presented a strategic marketing plan based on data insights, effectively communicating complex data to non-technical stakeholders through clear, engaging narratives and visualizations.",
        "Utilized advanced data analytics tools and software, honing skills in data interpretation, visualization, and presentation, leading to actionable recommendations for enhanced ROI and marketing practices.",
      ],
      metrics:
        "Mastercard Advisors & Consulting Services Job Simulation on Forage",
    },
    {
      id: 2,
      image: Deloitte,
      description: [
        "Completed a Deloitte job simulation involving data analysis and forensic technology ",
        "Created a data dashboard using Tableau ",
        "Used Excel to classify data and draw business conclusions ",
      ],
      metrics: "Deloitte Australia Data Analytics Job Simulation on Forage ",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-navy-800 mb-6">
            My Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="scroll-reveal card-3d group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-none bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64.2 overflow-hidden">
                  <img
                    src={project.image}
                    alt="Project preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white space-y-2">
                      <span className="inline-block px-3 py-1 bg-gold-500 text-white text-sm rounded-full font-medium">
                        {project.metrics}
                      </span>

                      {/* Handle bullet points or text */}
                      {Array.isArray(project.description) ? (
                        <ul className="text-sm list-disc list-inside space-y-1 leading-relaxed">
                          {project.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {/* No content below image */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
