import React from "react"
import Thumbnail from './Thumbnail.js'; 
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Freelance from './Freelance'
// import './App.css';
 
const freelanceImg = require('./pictures/freelance.png')
const staveCoffeeImg = require('./pictures/stavecoffee.png')

function Projects(props) {
  return (
    <div className='flex flex-col items-center content-around bg-indigo-800 h-screen text-white'>
      <h1 className="mt-32 mb-20 text-3xl">Projects</h1>
      <div className='flex flex-row justify-evenly content-center w-full py-4 sm:py-12 sm:px-4'>
        <Thumbnail
            link="/freelance"
            image={freelanceImg}
            title="Freelance CRM"
            category="Web App"
        />
        <Thumbnail 
            link="/stavecoffee"
            image={staveCoffeeImg}
            title="Stave Coffee Blog"
            category="Website"
        />
        <Thumbnail
            link="/designboard"
            image='https://images.unsplash.com/photo-1598503246983-ba36570c17e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
            title="Design Board"
            category="Website"
        />
      </div>
    </div>
  )
}
 
export default Projects;
