import React from 'react';
import Avatar from '../assets/avatar.jpeg'; // Asumiendo que tienes una imagen en assets

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white py-4  px-8 text-black min-h-20 fixed w-full ">
        <img src={Avatar} alt="Logo" className="h-20 w-20" />      
      {/* Enlaces a la derecha */}
      <nav className="flex items-center space-x-4 gap-5">
        <a href="#" className="header__link hover:text-gray-400" style={{ fontSize: '1rem', color: '#333', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', transition: 'color .3s'}}>HOME</a>
        <a href="#" className="header__link hover:text-gray-400" style={{ fontSize: '1rem', color: '#333', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', transition: 'color .3s'}}>ABOUT</a>
        <a href="#" className="header__link hover:text-gray-400" style={{ fontSize: '1rem', color: '#333', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', transition: 'color .3s'}}>PROJECTS</a>
        <a href="#" className="header__link hover:text-gray-400" style={{ fontSize: '1rem', color: '#333', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', transition: 'color .3s'}}>CONTACT</a>
      </nav>
    </header>
  );
};

export default Header;
