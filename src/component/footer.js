import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Footer() {
  return (
    <div>
        <footer className="ugc-footer">
            <div className="container justify-content-center d-flex flex-column align-items-center">
                <div className="row w-100 f-row-1">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-12 r1-block-1">
                        <img src="/assets/images/home/f-logo.png" alt="footer-logo" className="footer-logo" />
                        <a href="mailto:info@ugcstocks.com"><button  className="email">info@ugcstocks.com</button></a>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-12 r2-block-2">
                        <h1 className="hdng">COMPANY</h1>
                        <ul>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/single-services">Our Services</Link></li>
                            <li><Link to="/pricing-page">Pricing</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-12 r3-block-3">
                        <h1 className="hdng">ACCOUNT</h1>
                        <ul>
                            <li><Link to="/legal-terms">Legal Terms</Link></li>
                            <li><Link to="/sign-in">Sign in</Link></li>
                            <li><Link to="/sign-up">Sign Up</Link></li>
                        </ul>
                    </div>

                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-12 r4-block-4">
                        <h1 className="hdng">MORE</h1>
                        <ul>
                            <li><Link to="/how-to-download">How to download</Link></li>
                            <li><Link to="/become-a-creator">Become a Creator</Link></li>
                            <li><Link to="/for-brands">For Brands</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="row w-100 f-row-2">
                    <div className="col">
                        <hr className="divider" />
                    </div>
                </div>

                <div className="row w-100 f-row-3">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 r3-block-1">
                        <h6 className="hdng">© UGC Stock </h6>
                    </div>
                    {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 r3-block-2 text-end">
                        <ul>
                            <li><Link to="/privacy-policy">Privacy policy</Link></li>
                            <li><Link to="/license-terms">Licence terms</Link></li>
                            <li><Link to="/single-services">Services</Link></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>
    </div>
  )
}
