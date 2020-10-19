import React from 'react'; 
import {Link} from 'react-router-dom'; 
// import './App.css';
 
function Thumbnail(props) {
  return (
    <div className='h-full rounded-lg relative'>
      <Link to={props.link}>
        
          <img className="h-64 w-auto rounded-lg shadow-lg" src={props.image} alt="Project Image"/>
        
        <div className='w-full rounded-b-lg bg-opacity-50 bg-gray-700 -mt-16 pt-1 pb-3 pl-4 absolute'>
            <div className="project-title">{props.title}</div>
            <div className="project-category">{props.category}</div>
        </div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;