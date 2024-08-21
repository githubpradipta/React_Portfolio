import React, { useEffect, useState } from 'react'
import './Oneproject.css'
import { Link, useParams } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HashLoader from "react-spinners/HashLoader";
import axios from 'axios';
export default function Oneproject() {
    const[loading,setLoading] = useState(true);
    const [projectDetails, setProjectDetails] = useState({ title: "", shortDesc: "", Desc: "", tech: [], githubLink: "", imgLink: "" })
    const params = useParams();
    useEffect(() => {
        axios.get(`/api/v1/project/${params.projectID}`)
            .then((res) => {
                setProjectDetails(res.data)

                setLoading(false);
            })
    }, [])
    console.log(projectDetails);
    return (
        <div className='project_container'>
            {
                loading ?
                <div className="loader">
            <HashLoader
              color={"#4d94bb"}
              loading={loading}
              size={50}
            />
          </div>
          :
          <>
            <div className="projectbgtext">
                <h1>{projectDetails.title}</h1>
            </div>
            <h1 className="projectTitle">
                {projectDetails.title}
            </h1>
            <div className="projectWrapper">
                <div className="pojectimage">
                    <img src={`${projectDetails.imgLink}`} alt="" />
                </div>

                <div className="project_right">
                    <h1>Description</h1>
                    <p className="description">{projectDetails.Desc}</p>

                    <div className="tech">
                        <h2>Technologies <span>Used</span></h2>
                        <p>
                            {
                                projectDetails.tech.map((technology, i) => {
                                    return (
                                        <span className='techBox' key={i}>{technology} </span>
                                    )
                                })
                            }

                        </p>
                    </div>
                    <div className="Links">
                        <Link className='iconLink githubLink' to={`${projectDetails.githubLink}`} target='_blank'>
                            <GitHubIcon className='icon githubIcon' />
                            <p>GitHub Link</p>
                        </Link>
                        <Link className='iconLink back' to={'/projects'}>
                            <ChevronLeftIcon className='icon backIcon'/>
                            <p>Back</p>
                        </Link>
                    </div>

                </div>
            </div>
          </>
            }
        </div>
    )
}
