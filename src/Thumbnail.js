import React from 'react'; 
import {Link} from 'react-router-dom'; 
// import './App.css';
 
function Thumbnail(props) {
  return (
    <div className='max-w-sm h-auto px-1 shadow:lg'>
      <Link to={props.link}>
        <div className=''>
          <img src={props.image} alt="Project Image"/>
        </div>
        <div className='overlay'>
            <div className="project-title">{props.title}</div>
            <div className="project-category">{props.category}</div>
        </div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;