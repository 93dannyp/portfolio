import React from "react"
import './App.css';

const danielWithBridgeImg = require('./pictures/danielwithbridge.jpg')

 
function About(props) {
  return (
    <div className='component container'>
      <h1>About</h1>
      <p>Daniel is a Software Engineer in Saint Louis, MO.</p>
      <img src={danielWithBridgeImg} className='about-img'></img>
      <p>Daniel is an avid runner and has completed five marathons including one ultramarathon.</p>
      <p>When Daniel isn't running or writing code you can find him reading a good book, listening to music or a podcast, or cheering on the Kentucky Wildcats in Basketball and Football.</p>
    </div>
  )
}
 
export default About;
