import React from "react"
// import './App.css';

const staveCoffeeImg = require('./pictures/stavecoffee.png')
 
function StaveCoffee(props) {
  return (
    <div className='component container'>
      <h1>Stave Coffee Blog</h1>
      <a href='https://github.com/93dannyp/stavecoffee'>Visit The Repo</a><br/>
      <a href='https://stavecoffee.herokuapp.com/'>Visit The Website</a>
      <p>Stave Coffee Blog is a business website with an integrated blog feature</p>
      <img src={staveCoffeeImg}/>
      <h3>About this Project</h3>
      <p>Stave Coffee Blog is a website based off of the business founded by brothers Jordan Loucks and John Loucks.</p>
      <p>This website implements RESTful routing with full CRUD functionality. The app has a MVC structure and uses Mongoose, Node.js, Express, EJS, HTML, CSS. </p>
      <p>The blog is the section of the app with full CRUD functionality. This page is restricted to users with accounts only. You must sign up and then log in to view this page. This is where the user would post a blog about any topic they want (hopefully Stave Coffee related). This page lets the user edit or delete blog posts that only belong to them.</p>
    </div>
  )
}

export default StaveCoffee;
