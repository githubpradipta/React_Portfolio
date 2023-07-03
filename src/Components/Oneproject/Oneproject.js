import React, { useEffect, useState } from 'react'
import './Oneproject.css'
import { Link,useParams} from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
export default function Oneproject() {
    const[projectDetails,setProjectDetails]=useState({title:"",shortDesc:"",Desc:"",tech:[],githubLink:"",imgLink:""})
    const params=useParams();

    useEffect(()=>{
        axios.get(`/api/v1/project/${params.projectID}`)
        .then((res)=>{
            setProjectDetails(res.data)
        })
    },[])
    console.log(projectDetails);
    return (
        <div className='project_container'>
            <div className="projectbgtext">
             <h1>{projectDetails.title}</h1>
            </div>
            <h1 className="projectTitle">
                {projectDetails.title}
            </h1>
            <div className="projectWrapper">
                <div className="pojectimage">
                <img src="https://images.vexels.com/media/users/3/204038/list/32171678949026310a36e6aa73536f45-web-developer-logo-design.jpg" alt="" />
                </div>
                
                <div className="project_right">
                    <h1>Description</h1>
                    <p className="description">{projectDetails.Desc}</p>

                    <div className="tech">
                        <h2>Technologies <span>Used</span></h2>
                        <p>
                            {
                                projectDetails.tech.map((technology,i)=>{
                                    return(
                                    <span key={i}>{technology} </span>
                                    )
                                })
                            }
                            
                        </p>
                    </div>

            
                    <Link className='githubLink' to={`${projectDetails.githubLink}`}>
                            <GitHubIcon className='icon'/>
                            <p>GitHub Link</p>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}
