import React from 'react';
import logo from './pictures/daniel.png';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import About from './About.js'; 
import Blog from './Blog.js'; 
import Freelance from './Freelance';
import './assets/main.css'
import './index.css'
import Nav from "./Nav";
import StaveCoffee from './StaveCoffee';
import AllTheFoods from './AllTheFoods';
import Footer from './Footer';
import HistoricCinemas from './HistoricCinemas';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full text-gray-700">
        <Nav />
        <Route exact path='/' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/freelance' component={Freelance} />
        <Route exact path='/stave-coffee' component={StaveCoffee} />
        <Route exact path='/all-the-foods' component={AllTheFoods} />
        <Route exact path='/historic-cinemas' component={HistoricCinemas} />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
