import React from 'react';
import commonBg from '../assets/commonBg.svg'; 

const Form = () => {
  return (
    <div className="bg-cover bg-center min-h-screen py-48" style={{ backgroundImage: `url(${commonBg})` }}>
        <h2 className='mb-36'>
            <span className="block text-4xl uppercase tracking-wider text-center mb-14 relative text-black ">Projects</span>
            <span className="block text-center text-gray-600 text-lg font-medium max-w-screen-md mx-auto leading-relaxed">
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
            </span>
            </h2>
      <div className='flex justify-center items-center'>
        <div className="bg-white bg-opacity-75 p-8 rounded shadow-md relative" style={{ width: '54%', height: '500px' }}>
            <form >
            <label className="text-gray-600 text-lg font-semibold mb-4 block">Nombre</label>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="appearance-none block w-full py-2 px-4 mb-6 border border-gray-300 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-100"
            />
            <label className="text-gray-600 text-lg font-semibold mb-4 block">Correo electrónico</label>
            <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="appearance-none block w-full py-2 px-4 mb-6 border border-gray-300 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-100"
            />
            <label className="text-gray-600 text-lg font-semibold mb-4 block">Mensaje</label>
            <textarea
                name="mensaje"
                placeholder="Mensaje"
                className="appearance-none block w-full py-2 px-4 mb-6 border border-gray-300 rounded text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-gray-100"
            ></textarea>
            <button className="absolute bottom-8 right-8 py-2 px-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded transition duration-300">Contactar</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
