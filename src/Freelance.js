import React from "react"
// import './App.css';
const freelanceImg = require('./pictures/freelance.png')

 
function Freelance(props) {
  return (
    <div className=' rounded overflow-hidden shadow-lg'>
      <h1>Freelance CRM</h1>
      <a href='https://github.com/93dannyp/freelance-frontend'>Front End Repo</a><br/>
      <a href='https://github.com/93dannyp/freelance-backend'>Back End Repo</a><br/>
      <a href='https://freelancecrm.herokuapp.com/'>Visit The Website</a>
      <p>Freelance CRM is a Web Application inspired by the need for a simple CRM for Freelancers.</p>
      <img src={freelanceImg}/>
      <h3>About this Project</h3>
      <p>Of all Daniel's projects, this idea probably has the highest potenital for user scalability. There are so many expensive, overly-complex CRM's out there that just don't fit the freelancer's needs. Freelance CRM was designed with simple management in mind so that managing customer information isn't another tedious job responsibility.</p>
      <p>This Web App uses RESTful routing with full CRUD functionality. The front end was built with React.js. The backend was built with SQLite database, Sequelize ORM, Node.js, and Express </p>
      <p>The styling was implemented using Styled-Components.</p>
    </div>
  )
}

export default Freelance;
