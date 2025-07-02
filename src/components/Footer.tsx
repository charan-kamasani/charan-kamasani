import React, { useState } from 'react';
import { Heart, Moon, Sun, Code } from 'lucide-react';

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real application, this would toggle the dark mode theme
    console.log('Theme toggled:', isDarkMode ? 'Light' : 'Dark');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Charan Kumar Kamasani
</h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate Java Full Stack Developer creating innovative solutions 
              for modern web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-white transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Built With</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                Vite
              </span>
            </div>
            
            {/* Theme Toggle */}
            <div className="pt-4">
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>© 2024 Charan Kumar Kamasani
. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and</span>
              <Code size={16} className="text-blue-400" />
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>Designed for performance, accessibility, and user experience</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;