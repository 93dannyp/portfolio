import React from "react"
import Thumbnail from './Thumbnail.js'; 
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Freelance from './Freelance'
// import './App.css';
 
const freelanceImg = require('./pictures/freelance.png')
const staveCoffeeImg = require('./pictures/stavecoffee.png')
const designboardThumb = require('./pictures/designBoardthumb.jpeg')
const cinemaThumb = require('./pictures/cinemaThumb.jpeg')

function Projects(props) {
  return (
    <div className='flex flex-col items-center content-around bg-indigo-800 text-white'>
      <h1 className="mt-20 mb-4 text-3xl">Projects</h1>
      <div className='flex flex-row flex-wrap justify-center w-full py-4 sm:py-8 sm:px-4 mb-32 mx-auto'>
        <Thumbnail
            link="/freelance"
            image={freelanceImg}
            title="Freelance CRM"
            category="Web App"
        />
        <Thumbnail 
            link="/stave-coffee"
            image={staveCoffeeImg}
            title="Stave Coffee Blog"
            category="Website"
        />
        <Thumbnail
            link="/design-board"
            image={designboardThumb}
            title="Design Board"
            category="Website"
        />
        <Thumbnail 
            link="/historic-cinemas"
            image={cinemaThumb}
            title="Historic Cinemas"
            category="Website"
        />
      </div>
    </div>
  )
}
 
export default Projects;
