import React from "react"
// import './App.css';
const freelanceImg = require('./pictures/freelance.png')

 
function Freelance(props) {
  return (
    <div className='flex flex-col justify-center w-full bg-gray-800 text-white'>
      <h1 className="mt-12 mb-8 text-3xl mx-auto">Freelance CRM</h1>
      <p className="w/2/3 mx-auto">Freelance CRM is a Web Application inspired by the need for a simple CRM for Freelancers.</p>
      <div className="flex flex-row justify-around my-4 w-2/3 mx-auto">
      <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg py-6 px-12 animate-pulse transition ease-in-out duration-700" href='https://github.com/93dannyp/freelance-frontend'>Front End Repo</a>
      <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg py-6 px-12 animate-pulse transition ease-in-out duration-700" href='https://github.com/93dannyp/freelance-frontend' href='https://github.com/93dannyp/freelance-backend'>Back End Repo</a>
      <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg py-6 px-12 animate-pulse transition ease-in-out duration-700" href='https://github.com/93dannyp/freelance-frontend' href='https://freelancecrm.herokuapp.com/'>Visit The Website</a>
      </div>
      <img className="w-2/3 mx-auto rounded-lg" src={freelanceImg}/>
      <div className="w-2/3 mx-auto my-12">
      <h3 className="text-xl mb-2">About this Project</h3>
      <p>Of all Daniel's projects, this idea probably has the highest potenital for user scalability. There are so many expensive, overly-complex CRM's out there that just don't fit the freelancer's needs. Freelance CRM was designed with simple management in mind so that managing customer information isn't another tedious job responsibility.</p>
      <p className="mt-4">This Web App uses RESTful routing with full CRUD functionality. The front end was built with React.js. The backend was built with SQLite database, Sequelize ORM, Node.js, and Express </p>
      <p className="mt-4">The styling was implemented using Styled-Components.</p>
      </div>
    </div>
  )
}

export default Freelance;
