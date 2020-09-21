import React from "react"
// import './App.css';

const designBoardImg = require('./pictures/designboard.jpeg')

 
function DesignBoard(props) {
  return (
    <div className='component container'>
      <div className='project-thumbnail'>
        <h1>Design Board</h1>
        <a href='https://github.com/93dannyp/93dannyp.github.io'>Visit the Repo</a><br/>
        <p>Design Board is an interior design web app that lets you visualize home decore and furnature selections from amazon.com.</p>
        <img src={designBoardImg}/>
        <p>This app was built with the 'Amazon Products' API. This API was built by user ZombieBest on RapidAPI.com and can be found on RapidAPI.com. The front end was built with jQuery, HTML, and CSS.</p>
      </div>
    </div>
  )
}
 
export default DesignBoard;
