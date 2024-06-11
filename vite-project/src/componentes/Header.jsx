import React, { useState } from 'react';
import Avatar from '../assets/avatar.jpeg'; // Asumiendo que tienes una imagen en assets

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between bg-white py-4 px-8 text-black min-h-20 fixed w-full z-10 shadow-md">
      <img src={Avatar} alt="Logo" className="h-16 w-16 md:h-20 md:w-20" />
      {/* Enlaces a la derecha */}
      <nav className={`flex-col md:flex-row md:flex items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0 ${isMenuOpen ? 'flex' : 'hidden'} md:static absolute top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}>
        <a href="#" className="header__link hover:text-gray-400 uppercase text-sm md:text-base font-bold tracking-wide transition-colors duration-300">Home</a>
        <a href="#about" className="header__link hover:text-gray-400 uppercase text-sm md:text-base font-bold tracking-wide transition-colors duration-300">About</a>
        <a href="#projects" className="header__link hover:text-gray-400 uppercase text-sm md:text-base font-bold tracking-wide transition-colors duration-300">Projects</a>
        <a href="#contact" className="header__link hover:text-gray-400 uppercase text-sm md:text-base font-bold tracking-wide transition-colors duration-300">Contact</a>
      </nav>
      {/* Botón de menú para dispositivos móviles */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
