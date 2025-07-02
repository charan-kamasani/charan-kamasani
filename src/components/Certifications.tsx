import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "JNTUA08441@apsche-edu.org",
      description: "Microsoft Demonstrates foundational knowledge of artificial intelligence (AI) and Machine Learning (ML) concepts and services on Microsoft Azure.",
      verifyUrl: "https://login.microsoftonline.com/"
    },
    {
      title: "•	Introduction to HTML5",
      issuer: "Coursera",
      date: "2022",
      credentialId: "LZ59HH2Z5CEF",
      description: "Learned the fundamentals of HTML5, including semantic elements, multimedia integration, and responsive web design basics.",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/LZ59HH2Z5CEF"
    },
    {
      title: "Frontend Certification",
      issuer: "VMware",
      date: "2022",
      credentialId: "SPR-11223",
      description: "Covered HTML, CSS, JavaScript, React, Git, responsive design, and front-end deployment..",
      verifyUrl: "https://vmware.com/education/certification"
    },
   
    {
      title: "AI For Everyone",
      issuer: "Coursera",
      date: "2022",
      credentialId: "FNWA78M6EDNQ",
      description: "Learned how to identify AI opportunities in non-technical roles and contribute to AI-driven project strategies..",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/FNWA78M6EDNQ"
      
    }
  ];
  

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-blue-700 font-medium mb-2">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={14} />
                  <span>Issued: {cert.date}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Credential ID:</span> {cert.credentialId}
                </div>
              </div>

              <a
                href={cert.verifyUrl}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300"
              target='_blank'
              >
                <ExternalLink size={14} />
                <span>Verify Credential</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;