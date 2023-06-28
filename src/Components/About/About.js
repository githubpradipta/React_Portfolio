import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import aboutImage from '../../assets/images/about.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function About() {
    return (
        <div className='container1'>
            <div className="innerContainer">
                <div className="bgtext">
                    <h1>About</h1>
                </div>
                <div className="social">
                    <h1>Connect with Me</h1>
                </div>
                <div className="about-Skills">
                    <h1>SKILLs</h1>
                </div>



                <div className="text_field">
                    <h1>About <span>Me</span></h1>
                    <p><span>I'm Pradipta </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequuntur similique porro est eaque, totam, sint ab, nobis eos unde enim. Culpa, excepturi.</p>
                    <div className="links">
                        <Link to='/' className='link'>
                            <GitHubIcon className='githubicon icon' />
                            <p>GitHub</p>
                        </Link>
                        <Link to='/' className='link'>
                            <LinkedInIcon className='linkedinicon icon' />
                            <p>Linkedin</p>
                        </Link>
                        <Link to='/' className='link'>
                            <FacebookIcon className='facebookicon icon' />
                            <p>Facebook</p>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <img src={aboutImage} alt="" srcset="" />
                    <div className="bio">
                        <div className="react skill">
                            <p>React.js</p>
                        </div>
                        <div className="Node.js skill">
                            <p>Node.js</p>
                        </div>
                        <div className="SQL skill">
                            <p>SQL</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
