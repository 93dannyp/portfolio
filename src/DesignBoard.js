import React from "react"
// import './App.css';

const designBoardImg = require('./pictures/designboard.jpeg')

 
function DesignBoard(props) {
  return (
    <div className='flex flex-col justify-center w-full bg-gray-800 text-white'>
        <h1 className="mt-32 mb-8 text-3xl mx-auto">Design Board</h1>
        <p className="mx-auto">Design Board is an interior design web app that lets you visualize home decore and furnature selections from amazon.com.</p>
        <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg my-6 py-6 px-12 mx-auto animate-pulse transition ease-in-out duration-700" href='https://github.com/93dannyp/93dannyp.github.io'>Visit the Repo</a>
        <div className="flex flex-col">
        <img className="w-2/3 mx-auto rounded-lg " src={designBoardImg}/>
        <div className="mx-auto text-xs">thumbnail and main images borrowed from www.unsplash.com</div>
        </div>
        <div className="mx-12 my-32">
        <h3 className="text-xl mb-4">About this Project</h3>
        <p>This app was built with the 'Amazon Products' API. This API was built by user ZombieBest on RapidAPI.com and can be found on RapidAPI.com. The front end was built with jQuery, HTML, and CSS.</p>
      </div>
    </div>
  )
}
 
export default DesignBoard;
