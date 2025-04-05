import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 1, name: 'Home', to: 'hero' },
    { id: 2, name: 'About', to: 'about' },
    { id: 3, name: 'Projects', to: 'projects' },
    { id: 4, name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Vikesh Kumar
        </motion.div>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setNavOpen(!navOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {navOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          className="md:hidden bg-white px-6 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Header;
