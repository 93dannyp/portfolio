import React from 'react'; 
import {Link} from 'react-router-dom'; 
// import './App.css';
 
function Thumbnail(props) {
  return (
    <div className='w-1/3 rounded-lg relative mx-1 my-1'>
      <Link to={props.link}>
        <img className="h-64 w-full rounded-lg shadow-lg" src={props.image} alt="Project Image"/>
        <div className='w-full rounded-b-lg bg-opacity-50 bg-gray-700 -mt-16 pt-1 pb-3 pl-4 absolute'>
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;