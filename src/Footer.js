import React from "react"
// import './App.css';


function Footer(props) {
    return (
      <div className='flex flex-col items-center h-64 bg-gray-700 text-white px-4'>
        <h3 className="w-full flex justify-center mt-12 text-xl">Connect with Daniel</h3>
        <div className="flex flex-row justify-around w-full my-auto">
        <a className="hover:bg-yellow-500 hover:text-white shadow-lg rounded-lg py-6 px-12" href='https://github.com/danielperkinsii'>GitHub</a><br/>
        <a className="hover:bg-orange-500 hover:text-white shadow-lg rounded-lg py-6 px-12" href='https://twitter.com/danielperkinsii'>Twitter</a><br/>
        <a className="hover:bg-red-500 hover:text-white shadow-lg rounded-lg py-6 px-12" href='https://www.linkedin.com/in/daniel-perkins-b477871a7/'>LinkedIn</a>
        </div>
      </div>
    )
  }
   
  export default Footer;
  