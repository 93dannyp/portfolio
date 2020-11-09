import React from "react"
// import './App.css';


function Footer(props) {
    return (
      <div className='flex flex-col items-center h-64 bg-gray-900 text-white px-4'>
        <h3 className="w-full flex justify-center mt-12 text-xl">Connect with Daniel</h3>
        <div className="flex flex-row justify-evenly w-full my-auto">
        <a className="hover:bg-green-600 hover:text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 transition ease-in-out duration-700" href='https://github.com/danielperkinsii'>GitHub</a>
        <a className="hover:bg-blue-500 hover:text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 transition ease-in-out duration-700" href='https://twitter.com/danielperkinsii'>Twitter</a>
        <a className="hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 transition ease-in-out duration-700" href='https://www.linkedin.com/in/daniel-perkins-b477871a7/'>LinkedIn</a>
        <a className="hover:bg-indigo-700 hover:text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 transition ease-in-out duration-700" href="mailto:daniel.perkins99@gmail.com">Email</a>
        </div>
      </div>
    )
  }
   
  export default Footer;
  