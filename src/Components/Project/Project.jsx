import React, { useEffect, useState } from 'react'
import './Project.css'
import { Link } from 'react-router-dom'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import HashLoader from "react-spinners/HashLoader";
// import example from '../../example.json';
import axios from 'axios'

export default function Project(props) {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([{}]);
  const [haveData, setHaveData] = useState(true);
  const [pagetimeout, setPagetimeout] = useState(false);

  const abortController = new AbortController();
  const signal = abortController.signal;
  useEffect(() => {
    axios.get('api/v1/projects', { signal })
      .then((res) => {
        if (res.data.message === 'No projects are there')
          setHaveData(false);
        else
          setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === 'CanceledError') {
          console.log("Requist time out");
          setLoading(false);
          setPagetimeout(true);
        }
      })
    setTimeout(() => {
      abortController.abort();
    }, 12000);
  }, [])

  return (
    <div className='project_container'>
      {
        //loading screen
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
            {
              pagetimeout ? alert("Request time out || please check your network connection") //for request time out
                :
                <> 
                {/* actual content */}
                  <div className="bgtext">
                    <h1>Projects</h1>
                  </div>

                  <h1 className='heading'><span>My</span> Projects</h1>
                  {
                    haveData === false ? (<h1 className='noDataText'>No projects are there</h1>) : (
                      <div className="projectwrapper">
                        {

                          (projects.map((project, i) => {
                            return (
                              <div className="project" key={i}>
                                <Link className="projectlink" to={`/project/${project._id}`}>

                                  <img src={`${project.imgLink}`} alt="" />
                                  <div className="overlay">
                                    <h2 className="title">{project.title}</h2>
                                    <p className="description">{project.shortDesc}</p>
                                    <div className="overlayIcon"><TrendingFlatIcon className='arrowIcon' /></div>
                                  </div>

                                </Link>
                              </div>
                            )
                          })
                          )
                        }
                      </div>
                    )
                  }
                </>
            }
          </>
      }

    </div>
  )
}
