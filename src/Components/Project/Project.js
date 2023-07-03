import React, { useState } from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
// import examples from '../../example.json'
import axios from 'axios'
export default function Project(props) {
  const[projects,setProjects]=useState([{}]);
  axios.get('api/v1/projects')
  .then((res)=>{
    setProjects(res.data);
  })
  return (
    <div className='project_container'>
      <div className="bgtext">
        <h1>Projects</h1>
      </div>

      <h1 className='heading'><span>My</span> Projects</h1>
      <div className="projectwrapper">
        {
          projects.map((project, i) => {
            return(
            <div className="project" key={i}>
              <Link className="projectlink" to={`/project/${project._id}`}>

                <img src="https://images.vexels.com/media/users/3/204038/list/32171678949026310a36e6aa73536f45-web-developer-logo-design.jpg" alt="" />
                <div className="overlay">
                  <h2 className="title">{project.title}</h2>
                  <p className="description">{project.shortDesc}</p>

                </div>

              </Link>
            </div>
            )
          })
        }





      </div>
    </div>
  )
}
