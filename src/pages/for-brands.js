import React from 'react'
import Textanimation from '../component/textanimation';
import Preloader from '../component/preloader';

export default function Forbrand({user}) {
  return (
    <div>
    {/* <Preloader /> */}
    <div className="p-container-for_brands">
        <div className="container justify-content-center d-flex flex-column align-items-center">

            <div className="custom-content-1">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 cc1-block-1 align-self-center">
                            <h6 className="hdng mob-head">CUSTOM CONTENT</h6>
                            <Textanimation text="CUSTOM CONTENT" />
                            <h1 className="hdng">Custom Video<br /> Package for Brands</h1>
                            <p className="decs">We understand the constant need for fresh, original video content for your social media. Stock
                                videos just won't cut it – you deserve your own unique, attention-grabbing content, and we're here to make it
                                happen.</p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end cc1-block-2">
                            <img src="./assets/images/for_brands/Rectangle 40.png" alt="Save-Time" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="custom-content-2">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end cc2-block-1">
                            <img src="./assets/images/for_brands/Rectangle 41.png" alt="Save-Time" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 cc2-block-2 align-self-center">
                            <h6 className="sub-hdng">CUSTOM CONTENT</h6>
                            <h1 className="hdng">Stand Out With Video Content</h1>
                            <p className="decs">We've worked with hundreds of brands and know exactly what's going to get you noticed on social media. Our team will plan, film and deliver ready-to-post videos.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brands-form">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col bf-block-1">
                            <p className="decs">Ready to create something amazing together? Fill out the form below and you’ll hear back from us within 2 working days</p>
                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="Email" placeholder="Enter your email *" required />
                                  </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="FirstName" placeholder="Enter your name *" required />
                                  </div>
                                  <div className="mb-3">
                                    <input type="text" className="form-control" id="DateOfBirth" placeholder="Company Name *" required />
                                  </div>
                                  {/* <div className="mb-3">
                                      <select className="form-select" aria-label="Default select example" required >
                                        <option selected disabled>Which plan are you looking for? *</option>
                                        <option value="Plan 1">Plan 1</option>
                                        <option value="plan 2">Plan 2</option>
                                        <option value="Plan 3">Plan 3</option>
                                      </select>
                                  </div> */}
                                  <div className="mb-3">
                                    <select className="form-select" aria-label="Default select example" required>
                                      <option selected disabled>How many videos are you looking for? *</option>
                                      <option value="50">50</option>
                                      <option value="100">100</option>
                                      <option value="200">200</option>
                                      <option value="500">500</option>
                                      <option value="1000">1000</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="InstagramHandle" placeholder="What industry are you in? *" required />
                                  </div>
                                  <div className="mb-3">
                                    <textarea className="form-control" placeholder="Any additional Information?" style={{'height': '120px'}}></textarea>
                                  </div>
                                  <div className="mb-3">
                                    <p className="decs">If there's any extra information or specific details you'd like to share, please don't hesitate to let us know. We want to make sure we fully understand your needs so that we can provide you with the best possible assistance. Feel free to give us all the juicy deets!</p>
                                  </div>
                                <button type="submit" className="btn">Submit</button>
                              </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="s-last-section">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between text-center ">
                        <div className="col sls-block-1">
                            <h1 className="hdng">Not quite ready to invest in a package?See what our trending stock videos can do for you</h1>
                            <a href="#"><button className="tmt-btn">Take Me There</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
