import React from 'react';

const SkillsComponent = () => {
  return (
    <div className="flex flex-col flex-1">
      <h2 className="font-bold text-3xl mb-6">My Skills</h2>
      <div className="flex flex-wrap">
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">HTML</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">CSS</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">JavaScript</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">React</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">Wordpress</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">PHP</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">SASS</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">GIT</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">Github</span>
        <span className="skills__skill py-2 px-4 mb-4 mr-4 text-m bg-gray-200 rounded-md">Responsive Design</span>
      </div>
    </div>
  );
};

export default SkillsComponent;
