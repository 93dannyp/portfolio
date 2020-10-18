import React from "react"
import logo from './pictures/daniel.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Nav(props) {
    return (
        <div className='flex flex-col'>
        <div className="flex flex-row content-end">
         <img src={logo} className="w-64 h-auto" alt="Logo Image" />
        <div className="flex flex-row justify-evenly my-auto mx-auto w-full">
          <Link to='/' className="hover:bg-yellow-500 hover:text-white shadow-lg rounded-lg py-6 px-12">Projects</Link>
          <Link to='/resume' className="hover:bg-orange-500 hover:text-white shadow-lg rounded-lg py-6 px-12">Resume</Link>
          <Link to='/about' className="hover:bg-red-500 hover:text-white shadow-lg rounded-lg py-6 px-12">About</Link>
        </div>
      </div>
      </div>
    )
  }
   
  export default Nav;
  