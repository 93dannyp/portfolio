import React from 'react';
import logo from './pictures/daniel.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js'; 
import About from './About.js'; 
import Freelance from './Freelance';
// import './App.css';
import './assets/main.css'

import StaveCoffee from './StaveCoffee';
import DesignBoard from './DesignBoard';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-blue-200 text-gray-700">
        <div className='flex flex-col'>
          <div className="flex flex-row content-end">
          
           <img src={logo} className="max-w-auto h-64" alt="Logo Image" />
         
          <div className="flex flex-row justify-evenly my-auto mx-auto w-full">
            <Link to='/' className="hover:bg-yellow-500 hover:text-white shadow-lg rounded-lg py-6 px-12">Projects</Link>
            <Link to='/resume' className="hover:bg-orange-500 hover:text-white shadow-lg rounded-lg py-6 px-12">Resume</Link>
            <Link to='/about' className="hover:bg-red-500 hover:text-white shadow-lg rounded-lg py-6 px-12">About</Link>
          </div>
        </div>
        </div>
        
        
        <Route exact path='/' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/about' component={About} />
        <Route exact path='/freelance' component={Freelance} />
        <Route exact path='/stavecoffee' component={StaveCoffee} />
        <Route exact path='/designboard' component={DesignBoard} />

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
