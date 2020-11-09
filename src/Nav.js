import React from "react"
import logo from './pictures/daniel.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 

function Nav(props) {
    return (
        <div className='flex flex-col bg-gradient-to-r from-red-500 to-yellow-400 py-4'>
          
          <div className="flex flex-row justify-evenly my-auto mx-auto w-full">
            <Link to='/' className="hover:bg-yellow-400 text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 transition ease-in-out duration-700">Projects</Link>
            <Link to='/about' className="hover:bg-orange-500 text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 transition ease-in-out duration-700">About</Link>
            <Link to='/blog' className="z-10 hover:bg-red-500 text-white focus:outline-none focus:shadow-outline shadow-lg rounded-lg py-6 px-12 transition ease-in-out duration-700">Blog</Link>
          </div>
        
      </div>
    )
  }
   
  export default Nav;
  