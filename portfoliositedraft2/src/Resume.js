import React from "react"
import './App.css';

 
function Resume(props) {
  return (
    <div className='component container'>
      <h1>Resume</h1>
      <h3>Skills</h3>
      <h5>Languages and Frameworks</h5>
      <p>JavaScript, jQuery, HTML, CSS, Bootstrap, Node.js, Express, AJAX, Mongoose, Python, Flask</p>
      <h5>Management and Deployment</h5>
      <p>VS Code, X Code, Command Line Interface, GitHub, Heroku, AWS</p>
      <h5>Databases</h5>
      <p>SQL, MongoDB</p>
      <h5>Methodologies</h5>
      <p>Object Oriented Programming, MVC Pattern, Responsive Design, Authentication, Test-Driven Development, User Stories, Wireframing, Agile Development/Scrum, APIs, Technical Document Reference</p>
      <h3>Projects Deployed</h3>
      <h5>Freelance CRM</h5>
      <p>Built a CRM dashboard for freelancers with RESTful routing practices and full CRUD functionality using Node.js, SQL, Sequelize, and React.</p>
      <h5>Stave Coffee Shop and Blog</h5>
      <p>Launched a small business website and blog with RESTful routing practices and full CRUD functionality on Heroku using Node.js, Mongoose, and Mongodb.</p>
      <h5>Design Board</h5>
      <p>Built an interior design app with HTML, CSS, and jQuery that fetches information from an Amazon Products API to compare items side-by-side for cohesive interior design. </p>
      <h3>Relevant Experience</h3>
      <h5>Software Engineering Student at General Assembly	</h5>
      <p>12 week, 500+ hour software engineering program focused on front end web development with a team-oriented, hands-on approach. 
      </p>
      <p>Built a project portfolio with top to bottom functionality and designed for ease of maintenance and improvement.</p>
      <h5>Project Manager at Mason Construction, LLC </h5>
      <p>Managed and completed roughly $10 MM in construction projects per year. </p>
      <p>Implemented Buildertrend construction management software company-wide and among subcontractors. Buildertrend is the central hub for all information pertaining to ongoing and past projects.</p>
      <p>Streamlined production systems resulting in a decrease of 25% lead time and increasing production by 60%. Brought organized, objective-based planning to daily operations. Used basic supply chain principals such as labor demand planning and just-in-time deliveries.</p>
      <p>Built customer relations and trust by administering our home warranty service.</p>
      <p>Estimated, procured, and coordinated delivery for job site materials.</p>
      <h5>Project Engineer at Messer Construction </h5>
      <p>Worked on a team of engineers and managers to build the Cargill Natural Sciences Building at Berea College in Kentucky.</p>
      <p>Collaborated with key subcontractors ensuring reliability and quality of work, maintained critical project documents, and obtained LEED certification for the project.</p>
      <h3>Education</h3>
      <h5>General Assembly Software Engineering</h5>
      <p>May 2020 – August 2020</p>
      <h5>University of Kentucky Bachelor of Science, Civil Engineering</h5>
      <p>Class of 2016</p>
    </div>
  )
}
 
export default Resume;
