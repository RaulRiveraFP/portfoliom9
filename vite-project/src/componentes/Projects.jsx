import React from 'react';
import dopefolio from '../assets/dopefolio.jpeg';
import wilsonport from '../assets/wilsonport.jpeg';
import coffe from '../assets/coffee.jpeg';
import '../App.css'
const Projects = () => {
  return (
    <>
        <div className='container px-4 m-auto py-48'>
            <h2 className='heading-form relative'>
            <span className="block text-4xl uppercase tracking-wider text-center mb-14 relative text-black ">Projects</span>
            <span className="block text-center text-gray-600 text-lg font-medium max-w-screen-md mx-auto leading-relaxed">
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
            </span>
            </h2>
            <div className='flex flex-col'>
                <div className='flex my-20 gap-12 items-center'>
                    <div className='flex-1'>
                        <img className='flex-1 w-full' src={dopefolio}/>
                    </div>
                    <div className='flex-1'>
                        <h2 className="font-bold text-3xl  mb-6">Dopefolio</h2>
                        <p className="text-m text-gray-600 max-w-xl mb-6">I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <button className="w-fit btn bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10 rounded transition duration-300 btn--bg">CASE STUDY</button>
                    </div>
                </div>
                <div className='flex my-20 gap-12 items-center'>
                    <div className='flex-1'>
                        <img className='flex-1 w-full' src={wilsonport}/>
                    </div>
                    <div className='flex-1'>
                        <h2 className="font-bold text-3xl  mb-6">Wilsonport</h2>
                        <p className="text-m text-gray-600 max-w-xl mb-6">I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <button className="w-fit btn bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10 rounded transition duration-300 btn--bg">CASE STUDY</button>
                    </div>
                </div>
                <div className='flex my-20 gap-12 items-center'>
                    <div className='flex-1'>
                        <img className='flex-1 w-full' src={coffe}/>
                    </div>
                    <div className='flex-1'>
                        <h2 className="font-bold text-3xl  mb-6">Boreal Coffee Clone</h2>
                        <p className="text-m text-gray-600 max-w-xl mb-6">I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <button className="w-fit btn bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10 rounded transition duration-300 btn--bg">CASE STUDY</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Projects;
