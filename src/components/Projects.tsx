import React from 'react';
import { ExternalLink, Github, Code, Database, Server } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "House Price Prediction",
      description: "A full-stack web app with a HTML, CSS, JavaScript frontend and a Python, Django, ML backend. Trained on Kaggle data, it predicts house prices based on location, size & features..",
      techStack: ["Java", "HTML", "CSS", "JavaScript", "Python", "Django","ML", "AWS"],
      github: "https://github.com/charan2909",
      category: "Full Stack"
    },
    {
      title: "Quiz App",
      description: "A simple quiz App made with vanilla Javascript.",
      techStack: ["Java", "Spring Boot", "Angular", "MongoDB", "WebSocket", "Jenkins"],
      github: "https://github.com/charan2909",
      category: "Web Application"
    },
    {
      title: "Banking API Gateway",
      description: "Secure API gateway for banking services with OAuth2 authentication, rate limiting, and comprehensive logging and monitoring.",
      techStack: ["Java", "Spring Cloud", "Redis", "MySQL", "Docker", "Kubernetes"],
      github: "https://github.com/charan2909",
      category: "Backend"
    },
    
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Server className="w-5 h-5" />;
      case 'Data Visualization':
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;