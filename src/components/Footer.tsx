import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white py-12 border-t border-navy-700">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-gradient mb-4">
              Excellence Consulting
            </h3>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Transforming businesses through strategic insight, innovative
              solutions, and unwavering commitment to our clients' success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-gold-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-slate-300">
              <p>Vandalur, Chennai </p>
              <p>aakibsconsulting@gmail.com</p>
              <p>+1 (555) 123-4567</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
              >
                <span className="text-sm">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
              >
                <span className="text-sm">tw</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-700 rounded-lg flex items-center justify-center hover:bg-gold-500 transition-colors duration-300"
              >
                <span className="text-sm">fb</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-700 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Excellence Consulting. All rights reserved. |
            <span className="ml-2">Crafted with precision and passion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
