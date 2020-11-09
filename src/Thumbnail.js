import React from 'react'; 
import {Link} from 'react-router-dom'; 
// import './App.css';
 
function Thumbnail(props) {
  return (
    <div className='max-w-sm rounded-lg relative mx-1 my-1 hover:shadow-lg focus:outline-none focus:shadow-outline transition ease-in-out duration-700'>
      <Link className="" to={props.link}>
        <img className="h-64 w-full rounded-lg shadow-lg" src={props.image} alt="Project Image"/>
        <div className='w-full rounded-b-lg bg-opacity-50 bg-gray-700 -mt-16 pt-1 pb-3 pl-4 absolute hover:bg-white hover:text-gray-700 transition ease-in-out duration-700'>
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;