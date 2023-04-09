
import './Project.css'
import React, {useState} from 'react'

const Projects = ({img, title, desc, link}) => {
const [show, setShow] = useState(false);
    return (
     <a href={link}>
     <div 
     className = "project" 
     onMouseEnter = {() => setShow(true)}
     onMouseLeave = {() => setShow(false)}
     >
  {show ? (
            <div className="project__content">
            <h4>Title: {title}</h4>
            <p>Description: {desc}</p>
            </div>
          ) : (
                 <img src={img} alt="" />
             )
         }
     </div>
     </a>
  );
};

export default Projects