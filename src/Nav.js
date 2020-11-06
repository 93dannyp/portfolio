import React from "react"
import logo from './pictures/daniel.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Nav(props) {
    return (
        <div className='flex flex-col'>
          <div className="flex flex-row content-end">
          <img src={logo} className="w-64 h-auto -mt-24" alt="Logo Image" />
          <div className="flex flex-row justify-evenly my-auto mx-auto w-full">
            <Link to='/' className="hover:bg-yellow-500 hover:text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 text-yellow-500 animate-pulse transition ease-in-out duration-700">Projects</Link>
            <Link to='/resume' className="hover:bg-orange-500 hover:text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 text-orange-500 animate-pulse transition ease-in-out duration-700">Resume</Link>
            <Link to='/about' className="hover:bg-red-500 hover:text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 text-red-500 animate-pulse transition ease-in-out duration-700">About</Link>
          </div>
        </div>
      </div>
    )
  }
   
  export default Nav;
  