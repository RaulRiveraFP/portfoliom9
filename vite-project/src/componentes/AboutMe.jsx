import React from 'react';
import IntroductionComponent from './AboutMe/IntroductionComponent';
import SkillsComponent from './AboutMe/SkillsComponent';

const AboutMe = () => {
  return (
    <>
    <div className='bg-gray-50' id='about'>
        <div className='container px-4 m-auto py-48'>
            <h2 className='heading-form relative'>
            <span className="block text-4xl uppercase tracking-wider text-center mb-14 relative text-black ">ABOUT ME</span>
            <span className="block text-center text-gray-600 text-lg font-medium max-w-screen-md mx-auto leading-relaxed">
                Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </span>
            </h2>
            <div className='md:flex pt-20 w-100 justify-center gap-12'>
            <IntroductionComponent/>
            <SkillsComponent/>
            </div>
        </div>
    </div>
    </>
  );
};

export default AboutMe;
