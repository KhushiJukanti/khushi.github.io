// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5 w-100 position-relative">
                <div className="container-md">
                    <h3 className="navbar-brand" style={{ width: '25px', height: '100px', backgroundColor: 'black' }}> </h3>
                    <div className="nav-box position-absolute" style={{
                        width: '800px',
                        height: '40px',
                        left: '360px',
                        top: '40px',
                        background: 'linear-gradient(270deg, rgba(230, 143, 80, 0.1) 0%, rgba(10, 86, 241, 0.1) 100%)',
                        boxShadow: '0px 4px 10px rgba(101, 101, 101, 0.25)',
                        borderRadius: '50px'
                    }}>
                        <div className="navbar-collapse ml-10">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <Link className="nav-link active" style={{backgroundColor:"#fff",borderRadius:"60px"}} to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About us</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">work</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Clients</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">Contact Us</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
