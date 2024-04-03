import React from 'react';

const IntroductionComponent = () => {
  return (
    <div className="flex flex-col justify-center flex-1">
      <h2 className="font-bold text-3xl  mb-6">Get to know me!</h2>
      <p className="text-m text-gray-600 max-w-xl mb-6">I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
      <p className="text-m text-gray-600 max-w-xl mb-6">I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming</p>
      <p className="text-m text-gray-600 max-w-xl mb-6">I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
      <button className="w-fit btn bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-10 rounded transition duration-300 btn--bg">Contact</button>
    </div>
  );
};

export default IntroductionComponent;
