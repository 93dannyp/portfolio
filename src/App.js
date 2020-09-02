import React from 'react';
import logo from './pictures/daniel.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import Resume from './Resume.js'; 
import About from './About.js'; 
import Freelance from './Freelance'
import './App.css';
import StaveCoffee from './StaveCoffee';
import DesignBoard from './DesignBoard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path='/' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/about' component={About} />
        <Route exact path='/freelance' component={Freelance} />
        <Route exact path='/stavecoffee' component={StaveCoffee} />
        <Route exact path='/designboard' component={DesignBoard} />


        <div className='nav'>
          <img src={logo} className="logo" alt="Logo Image" />
          <div className="nav-links">

            <Link to='/' className="item">Projects</Link>
            <Link to='/resume' className="item">Resume</Link>
            <Link to='/about' className="item">About</Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
