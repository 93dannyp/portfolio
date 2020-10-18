import React from "react"
import Thumbnail from './Thumbnail.js'; 
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Freelance from './Freelance'
// import './App.css';
 
const freelanceImg = require('./pictures/freelance.png')
const staveCoffeeImg = require('./pictures/stavecoffee.png')

function Projects(props) {
  return (
    <div className='bg-blue-700'>
      <h1>Projects</h1>
      <div className='project-container'>
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
