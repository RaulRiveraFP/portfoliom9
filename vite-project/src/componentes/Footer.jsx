import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black w-full text-white text-left'>
        <div className='py-32 px-8 md:px-0 flex m-auto justify-between' style={{ maxWidth: '60rem', width: '100%' }}>
            <div>
                <h2 className="text-2xl uppercase font-bold tracking-wide mb-4">Raul Rivera</h2>
                <p className="text-base text-gray-300">A Frontend focused Web Developer building the Frontend <br/> of Websites and Web Applications that leads to the success <br/> of the overall product</p>
            </div>
            <div>
            <h2 className="text-2xl uppercase font-bold tracking-wide mb-4">SOCIAL</h2>
                <div className="flex items-center">
                    <a href="URL_DE_TU_LINKEDIN" className="text-white mr-4">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="URL_DE_TU_GITHUB" className="text-white mr-4">
                        <FaGithub size={24} />
                    </a>
                    <a href="URL_DE_TU_TWITTER" className="text-white mr-4">
                        <FaTwitter size={24} />
                    </a>
                    <a href="URL_DE_TU_YOUTUBE" className="text-white">
                        <FaYoutube size={24} />
                    </a>
                </div>
            </div>
        </div>
        <div className="py-16 border-t border-gray-400 text-gray-300 text-lg text-center m-auto" style={{ maxWidth: '60rem', width: '100%' }}>
            <p className="text-base">© Copyright 2024 . Made by Ram Maheshwari</p>
        </div>
    </div>
  );
};

export default Footer;
