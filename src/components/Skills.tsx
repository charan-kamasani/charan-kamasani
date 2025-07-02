import React from 'react';
import { Code, Server, Database, Settings, Cloud, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Angular", "Tailwind CSS", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-6 h-6 text-green-600" />,
      skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "GraphQL", "Microservices", "Node.js"]
    },
    {
      title: "Database Technologies",
      icon: <Database className="w-6 h-6 text-purple-600" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle", "SQL Server", "Database Design"]
    },
    {
      title: "Development Tools",
      icon: <GitBranch className="w-6 h-6 text-orange-600" />,
      skills: ["Git", "GitHub", "GitLab", "Maven", "Gradle", "IntelliJ IDEA", "VS Code", "Eclipse", "Postman"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6 text-indigo-600" />,
      skills: ["AWS", "Docker", "Jenkins", "CI/CD", "Linux", "Nginx", "Apache"]
    },
    {
      title: "Testing & Quality",
      icon: <Settings className="w-6 h-6 text-red-600" />,
      skills: ["JUnit", "Mockito", "Jest", "Cypress", "Selenium", "TestNG", "SonarQube", "Code Review", "TDD"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm rounded-lg font-medium border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Architecture & Design</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Microservices Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>RESTful API Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Database Design & Optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>System Integration</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Development Practices</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Agile/Scrum Methodology</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Test-Driven Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Code Review & Quality Assurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Performance Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;