import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="src/assets/photo.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Professional headshot"
              className="w-48 h-48 rounded-full border-4 border-white/20 shadow-2xl object-cover object-[center_40%]"
            />
          </div>
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Charan Kumar Kamasani

            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-6 text-blue-200">
              Java Full Stack Developer
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Passionate full-stack developer with 3+ years of experience building scalable web applications
              using modern Java frameworks and cutting-edge frontend technologies.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-blue-200">
                <MapPin size={18} />
                <span>Overland Park , KS</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Phone size={18} />
                <span>+1 (913) 263-6674</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Mail size={18} />
                <span>charankamasani22@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/charan2909"
                className="bg-white/10 hover:bg-white/20 transition-colors duration-300 p-3 rounded-full"
                aria-label="GitHub"
                target='_blank'
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/charankamasani"
                className="bg-white/10 hover:bg-white/20 transition-colors duration-300 p-3 rounded-full"
                aria-label="LinkedIn"
                target='_blank'
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;