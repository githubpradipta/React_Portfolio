import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/pro.JPG'
export default function Home() {
    return (
        <div className='container home_page'>
            <div className="text_area">
                <div className="left">
                <h1>Hello, <br /> <span>I'm</span> Pradipta Banerjee <br />Web Developer</h1>
                </div>
                <div className="right">
                <h2>
                    <div className="first skills">Front-end Developer</div> | &nbsp; 
                    <div className="second skills">Back-end Developer</div> | &nbsp;
                    <div className="third skills">Problem solver(DSA)</div>
                </h2>
                
                <div className="contact-div">
                <Link to='/contact' className='contact-btn' >CONTACT ME</Link>

                </div>
                </div>
            </div>
            <div className="image">
                <img src={heroImage} alt="Profile" srcset="" />
                {/* <div className="overlay"><p>Web developer</p></div> */}
                
            </div>

        </div>
    )
}
