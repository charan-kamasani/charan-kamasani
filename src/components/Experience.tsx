import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "American Express",
      location: "Unites States",
      duration: "AUG 2024 - Present",
      responsibilities: [
        "Built full-stack web apps for risk analysis and rewards using Java (Spring Boot) and React/Angular",
        "Designed and integrated RESTful APIs connecting user dashboards with backend systems.",
        "Integrated Apache Kafka for real-time transaction processing and risk alerts",
        "Mentored junior developers and conducted code reviews",
        "Optimized database queries improving application performance by 40%"
      ]
    },
    {
      title: "Java Full Stack Developer",
      company: "Deloitte",
      location: "Bangalore , India",
      duration: "JAN 2023 - DEC 2024",
      responsibilities: [
        "Developed RESTful APIs using Spring Boot and Spring Security",
        "Reduced backend integration time by 30% by developing scalable web apps using Java and Spring Boot",
        "Cut frontend bug reports by 40% by building responsive UI with Angular/React, HTML5, and CSS3",
        "Gained hands-on experience with MongoDB and MySQL for scalable backend data storage and CRUD operations",
        "Gained CI/CD experience with Postman and Swagger for API testing and documentation, smoothing deployment cycles"
      ]
    },
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;