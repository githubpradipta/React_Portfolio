import React, { useEffect, useState } from 'react'
import './About.css'
import resume from '../../assets/pdfs/Resume.pdf'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import aboutImage from '../../assets/images/About.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import HashLoader from "react-spinners/HashLoader";
import DownloadIcon from '@mui/icons-material/Download';
import { Backdrop } from '@mui/material';


export default function About() {
    const[showBackdrop,setShowBackdrop]=useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, [])
    const backdropClose = ()=>{
        setShowBackdrop(false);
    }
    const backdropOpen = ()=>{
        setShowBackdrop(true);
    }
    let skills = [
        "React.js",
        "Node.js",
        "Express.js",
        "SQL",
        "MongoDB",
        "Git Bash",
        "Rest APIs",
    ]

    return (
        <div className='container1'>
            <div className="innerContainer">
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
                        <Backdrop
                            sx={{ backgroundColor:'#101010eb', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={showBackdrop}
                            onClick={backdropClose}
                            >
                                <div className="image">
                            <div className="bio smskills">
                                    <ul>
                                        {
                                            skills.map((skill, i) => {
                                                return (
                                                    <li className="skill" key={i}>
                                                        <p>{skill}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                </div>
                        </Backdrop>

                            <div className="bgtext">
                                <h1>About</h1>
                            </div>
                            <div className="social">
                                <h1>CONNECT WITH ME</h1>
                            </div>
                            <div className="about-Skills">
                                <h1>SKILLs</h1>
                            </div>



                            <div className="text_field">
                                <h1>About <span>Me</span></h1>
                                <p><span>I'm Pradipta </span>a dynamic and results-driven person with a strong background in full-stack web development using React.js, Node.js, Express.js, MongoDB, and SQL, as well as a strong command of C, C++, and Java. Eager to contribute to creative projects and advance technology solutions inside a forward-thinking tech organization by utilizing my technical talents
                                and collaboration skills.</p>
                                <div className="links">
                                    <Link to='https://github.com/githubpradipta' className='link' target='_blank'>
                                        <GitHubIcon className='githubicon icon' />
                                        <p>GitHub</p>
                                    </Link>
                                    <Link to='https://www.linkedin.com/in/pradipta-banerjee-60910421b/' className='link' target='_blank'>
                                        <LinkedInIcon className='linkedinicon icon' />
                                        <p>Linkedin</p>
                                    </Link>
                                    <Link to='https://www.facebook.com/pradipta.banerjeedeep' className='link' target='_blank'>
                                        <FacebookIcon className='facebookicon icon' target='_blank' />
                                        <p>Facebook</p>
                                    </Link>
                                </div>
                                <a href={resume} download="Pradipta_Banerjee_Resume" className='download_a'> <button className='download_btn'>Download Resume<DownloadIcon className='download_icon'/></button></a>     
                                <Button variant="contained" size='large' className='skill_btn iconLink' onClick={backdropOpen}
                                >
                                    Show Skills
                                </Button>
                            
                            </div>
                            <div className="image">
                                <img src={aboutImage} alt="" srcset="" />
                                <div className="bio">
                                    <ul>
                                        {
                                            skills.map((skill, i) => {
                                                return (
                                                    <li className="skill" key={i}>
                                                        <p>{skill}</p>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="instruction_text"><p>Hover on the picture</p></div>

                            </div>
                        </>
                }

            </div>
        </div>
    )
}
