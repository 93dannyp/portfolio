import React from "react"
// import './App.css';

const danielWithBridgeImg = require('./pictures/danielwithbridge.jpg')

 
function About(props) {
  return (
    <div className="h-screen bg-green-500">
    <div className='py-12 mx-4 w-full flex flex-col justify-center text-white break-words'>
      <h1 className="text-3xl text-white">About</h1>
      <p className="w-2/3 my-3">Daniel is a Software Engineer in Saint Louis, MO.</p>
      <p className="w-2/3 my-3">Daniel is an avid runner and has completed five marathons including one ultramarathon.</p>
      <p className="w-2/3 my-3">When Daniel isn't running or writing code you can find him reading a good book, listening to music or a podcast, or cheering on the Kentucky Wildcats in Basketball and Football.</p>
    </div>
    </div>
  )
}
 
export default About;
