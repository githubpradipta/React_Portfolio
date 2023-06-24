import React, { useState } from 'react'
import '../CSS/Navbar.css';

export default function Navbar() {

    const [Bgmode, setBgmode] = useState("bg-dark");
    const toggle = () => {
        if (Bgmode === "orgbg")
            setBgmode("bg-dark");
        else
            setBgmode("orgbg");
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark ${Bgmode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-3" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-lg-3">
                            <li className="nav-item me-3">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/">Features</a>
                            </li>
                            <li className="nav-item me-3">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>

                            <li className="nav-item me-3">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>


                            <label className="switch d-flex justify-content-center" >
                                <input type="checkbox" onClick={toggle}/>
                                    <span className="slider"></span>
                            </label>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
