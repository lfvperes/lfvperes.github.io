// src/components/Navbar.tsx
import React, { useState } from 'react';
import portfolio from '../portfolio';
import { FaGlobe } from 'react-icons/fa'; // Import globe icon

interface NavbarProps {
  toggleLanguage: () => void;
  language: 'en' | 'pt'; // Add language prop
}

const Navbar: React.FC<NavbarProps> = ({ toggleLanguage, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, projects, skills, contact } = portfolio;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    ...(projects.length ? [{ name: 'Projects', href: '#projects' }] : []),
    ...(Object.values(skills).flat().length ? [{ name: 'Skills', href: '#skills' }] : []),
    ...(contact.email ? [{ name: 'Contact', href: '#contact' }] : []),
  ];

  return (
    <nav className='bg-gray-800 sticky top-0 z-50 shadow-md'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Language Indicator */}
          <button onClick={toggleLanguage} className='ml-4 flex items-center bg-gray-900'>
            <FaGlobe className='mr-2' />
            <span className={language === 'en' ? 'text-blue-500' : ''}>EN</span>
            <span>&nbsp;|&nbsp;</span>
            <span className={language === 'pt' ? 'text-blue-500' : ''}>PT</span>
          </button>

          <a href='#top' className='text-xl font-bold hover:text-blue-500 transition duration-300'>
            {name}
          </a>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className='hover:text-blue-500 transition duration-300'>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} aria-label='toggle navigation'>
              {isOpen ? (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path></svg>
              ) : (
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu} // Close menu on click
                className='block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition duration-300'
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
