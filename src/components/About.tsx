import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Frontend Expertise",
      description: "Modern React & Angular applications with responsive design"
    },
    {
      icon: <Server className="w-8 h-8 text-green-600" />,
      title: "Backend Mastery",
      description: "Robust Java applications using Spring Boot and microservices"
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Database Design",
      description: "Efficient data modeling with SQL and NoSQL databases"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "DevOps Integration",
      description: "CI/CD pipelines and cloud deployment optimization"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            <p className="mb-6">
              I'm a passionate Java Full Stack Developer with over 3 years of experience in building
              enterprise-grade web applicationsusing core technologies like Java, SQL, and HTML. I specialize in developing scalable backend services with Spring Boot and creating responsive, user-friendly interfaces using modern frontend frameworks such as React and Angular.
            </p>
            <p className="mb-6">
              In addition to development, I have hands-on experience working with AWS cloud services to deploy and manage applications efficiently. I am familiar with RESTful APIs, microservices architecture, and DevOps tools that help automate builds, testing, and deployments to ensure seamless delivery.


            </p>
            <p>
              I'm committed to writing clean, maintainable code and staying current with the latest
              industry trends and best practices. I enjoy collaborating with cross-functional teams
              to deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;