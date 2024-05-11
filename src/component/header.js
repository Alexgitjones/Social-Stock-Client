import React, {useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Header({user, path, logout}) {
    
  return (
    <div>
        <div className="top-bar">
            <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                <div className="row w-100 text-center">
                    <div className="col tb-block-1">
                        <h1 className="top-bar-content">5000+ Aesthetic videos Ready to post to your socials!</h1>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar">
            <div className="container justify-content-between d-flex flex-column align-items-center">
                <div className="row w-100 desktop-header">
                    <div className="col-3 text-start header-block-1">
                        <Link className="logo" to="/">
                            <img src="/assets/images/home/f-logo.png" alt="UGC Stocks" />
                        </Link>
                    </div>
                    <div className="col-6 text-center menu-list header-block-2" id="navbarSupportedContent">
                        <ul className="menu-list-c">
                            <li className="menu-item">
                                <Link className={`menu-link ${path == '/' ? 'active' : ''} `} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link className={`menu-link ${path == '/about-us' ? 'active' : ''} `} to="/about-us">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link className={`menu-link ${path == '/single-services' ? 'active' : ''} `} to="/single-services">Our Services</Link>
                            </li>
                            <li className="menu-item">
                                <Link className={`menu-link ${path == '/pricing-page' ? 'active' : ''} `} to="/pricing-page">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 header-block-3">
                        {
                            user == null ?
                                <>
                                    <Link to="/sign-up">
                                    <button className="su-btn">Sign up</button>
                                    </Link>
                                    <Link to="/sign-in">
                                        <button className="si-btn">Sign in</button>
                                    </Link>
                                </>
                            :
                            <>
                            <button onClick={() => logout()} className="si-btn">Logout</button>
                            <Link to="/dashboard">
                                <button className="si-btn">Dashboard</button>
                            </Link>
                            </>
                        }
                        
                    </div>
                </div>
                <div className="row w-100 mobile_header">
                <div className="col-lg-3 col-6 header-block-1 justify-content-start d-flex align-items-center">
                    <Link className="logo" to="/">
                        <img src="./assets/images/home/f-logo.png" alt="UGC Stocks"/>
                    </Link>
                </div>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/single-services">Our Services</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" to="/pricing-page">Pricing</Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" to="/sign-up">Sign Up</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-in">Sign In</Link>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
        </nav>
    </div>
  )
}
