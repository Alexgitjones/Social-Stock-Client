import React from 'react'
import Textanimation from '../component/textanimation';
import Preloader from '../component/preloader';

export default function Download({user}) {
  return (
    <div>
        {/* <Preloader /> */}
        <div className="p-container-htd">
                <div className="container">

                    <div className="htd-banner">
                        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                            <div className="row w-100 text-center">
                                <div className="col htd-banner-block-1">
                                    <h6 className="hdng mob-head-sec ">HOW TO DOWNLOAD</h6>
                                    <Textanimation text="HOW TO DOWNLOAD" />
                                    <p className="decs">One thing to note: Video previews won’t auto play if your phone is set to
                                        battery saving modeTurn off<br /> battery saving mode on your mobile to see the video play
                                        automatically</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="htd-details-1">
                        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                            <div className="row w-100 text-start d-flex justify-content-between ">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end htd-details-block-1">
                                    <img src="./assets/images/how_to_download/img1.png" alt="Save-Time" />
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 htd-details-block-2 align-self-center">
                                    <h6 className="sub-hdng">HOW TO DOWNLOAD VIDEOS VIA MOBILE Safari Browser</h6>
                                    
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                    Safari browser
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Chrome Browser
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="htd-details-2">
                        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                            <div className="row w-100 text-start d-flex justify-content-between ">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 htd-details-2-block-1 align-self-center">
                                    <h6 className="sub-hdng">HOW TO DOWNLOAD VIDEOS VIA MOBILE Safari Browser</h6>

                                    <div className="accordion" id="accordion">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne-2" aria-expanded="false" aria-controls="collapseOne-2">
                                                    Desktop
                                                </button>
                                            </h2>
                                            <div id="collapseOne-2" className="accordion-collapse collapse"
                                                data-bs-parent="#accordion">
                                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end htd-details-2-block-2">
                                    <img src="./assets/images/how_to_download/img2.png" alt="Save-Time" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="qc-section">
                        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                            <div className="row w-100 text-center">
                                <div className="col qcs-block-1">
                                    <p className="decs">We’re here to help you with any questions or requests you may have Feel<br /> free to reach
                                        out to us via.</p>
                                    <div className="qc-buttons">
                                        <a href="#"><button className="email-btn">HELLO@Ugcfile.CO</button></a>
                                        <a href="#"><button className="insta-btn">INSTAGRAM</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}
