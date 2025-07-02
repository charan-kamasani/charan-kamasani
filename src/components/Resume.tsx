import React from 'react';
import { Download, Eye, FileText } from 'lucide-react';
import resume from '../assets/resume.pdf';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would trigger a download of the actual resume PDF
    const link = document.createElement('a');
      link.href = resume; // imported file becomes a URL
  link.download = 'My_Resume.pdf'; // name when saved
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  const handleView = () => {
    // In a real application, this would open the resume in a new tab or modal
     window.open(resume, '_blank');
  };
  const date = new Date(); // Create a date object for December 2024
const options:{year:'numeric', month:'long'} = { year: 'numeric', month: 'long' };
const formattedDate = date.toLocaleDateString('en-US', options)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-12 h-12 text-blue-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Charan Kumar Kamasani
 - Java Full Stack Developer
            </h3>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Download my complete resume to learn more about my professional experience, 
              technical skills, educational background, and accomplishments in software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
              
              <button
                onClick={handleView}
                className="flex items-center justify-center gap-3 bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-medium"
              >
                <Eye size={20} />
                <span>Preview Resume</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {formattedDate} • PDF Format • 2 pages
              </p>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Resume Highlights</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>3+ years of experience as a Java Full Stack Developer building scalable enterprise applications</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Proficient in Java 17, Spring Boot, Python, SQL, and RESTful API development</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Built responsive UIs using Angular, React, HTML5, CSS3, and JavaScript</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Integrated and managed NoSQL/SQL databases including MongoDB, MySQL, PostgreSQL, and Redis.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span>Experienced with AWS (EC2, S3, RDS, SNS, CloudWatch, EKS) for cloud deployments.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;