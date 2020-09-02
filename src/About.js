import React from "react"
import './App.css';

const danielWithBridgeImg = require('./pictures/danielwithbridge.jpg')

 
function About(props) {
  return (
    <div className='component container'>
      <h1>About</h1>
      <p>Daniel is a Software Engineer in Saint Louis, MO.</p>
      <img src={danielWithBridgeImg}></img>
      <p>Daniel is an avid runner and has completed five marathons including one ultramarathon.</p>
      <p>When Daniel isn't running or writing code you can find him reading a good book, listening to music or a podcast, or cheering on the Kentucky Wildcats in Basketball and Football.</p>
      <h3>Connect with Danny</h3>
      <a href='https://github.com/danielperkinsii'>GitHub</a><br/>
      <a href='https://twitter.com/danielperkinsii'>Twitter</a><br/>
      <a href='https://www.linkedin.com/in/daniel-perkins-b477871a7/'>LinkedIn</a>
      
      
    </div>
  )
}
 
export default About;
