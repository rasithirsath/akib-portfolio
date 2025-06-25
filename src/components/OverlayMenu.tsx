
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface OverlayMenuProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const OverlayMenu: React.FC<OverlayMenuProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path: string) => {
    onNavigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Trigger */}
      <button
        onClick={toggleMenu}
        className="fixed top-8 right-8 z-50 p-3 rounded-full glass-effect text-navy-700 hover:text-gold-600 transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 animate-overlay-enter">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-xl" />
          
          {/* Menu Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <nav className="text-center">
              {menuItems.map((item, index) => (
                <div
                  key={item.path}
                  className="mb-8 animate-text-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`text-4xl md:text-6xl font-playfair font-light text-white hover:text-gold-400 transition-all duration-300 relative group ${
                      currentPage === item.path ? 'text-gold-400' : ''
                    }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full" />
                  </button>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayMenu;
