import React from 'react';
import commonBg from '../assets/commonBg.svg';

const Hero = () => {
  return (
    <section className="text-black py-20 px-8 md:px-16 lg:px-24" style={{backgroundImage: `url(${commonBg})`, height: '70vh'}}>
      <div className="max-w-3xl mx-auto text-center lg:pt-20">
        <h1 className="text-5xl mb-4">HEY, I'M RAUL RIVERA</h1>
        <p className="mt-9 text-lg md:text-xl lg:text-2xl mb-8">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
        <button className="btn bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10 rounded transition duration-300 btn--bg">PROJECTS</button>
      </div>
    </section>
  );
};

export default Hero;
