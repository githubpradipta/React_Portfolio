import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='container home_page'>
            <div className="text_area">
                <h1>Hello, <br /> <span>I,m</span> Pradipta Banerjee <br />Web Developer</h1>
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
    )
}
