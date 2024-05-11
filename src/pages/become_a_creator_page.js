import React from 'react'
import Preloader from '../component/preloader';

export default function Becomeacreator({user}) {
  return (
    <div>
    {/* <Preloader /> */}
    <div className="p-container-become_a_creator">
        <div className="container justify-content-center d-flex flex-column align-items-center">

            <div className="remote-position">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end rp-block-1">
                            <img src="./assets/images/become_a_creator/Rectangle 40.png" alt="Save-Time" />
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 rp-block-2 align-self-center">
                            <h6 className="sub-hdng">REMOTE POSITION</h6>
                            <h1 className="hdng">Become a UGC <br />Stocks Creator</h1>
                            <p className="decs">We're actively seeking remote-based creators to join our team. If you are passionate
                                about creating engaging video content and are looking for regular projects, fill in the form below,
                                and we’ll get back to you soon.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="remote-position-form w-100">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 rpf-block-1 align-self-center">
                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="Email" placeholder="Enter your email *" required />
                                  </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="FirstName" placeholder="Enter your name *" required />
                                  </div>
                                  <div className="mb-3">
                                    <input type="text" className="form-control" id="DateOfBirth" placeholder="Enter your date of birth *" required />
                                  </div>
                                  <div className="mb-3">
                                      <select className="form-select" aria-label="Default select example" required>
                                        <option selected disabled>Niche... *</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="Other">Other</option>
                                      </select>
                                  </div>
                                  <div className="mb-3">
                                    <input type="text" className="form-control" id="IfSelectedOtherNiche" placeholder="If Selected Other Niche" />
                                  </div>
                                  <div className="mb-3">
                                    <select className="form-select" aria-label="Default select example" required>
                                      <option selected disabled>Android or iPhone User *</option>
                                      <option value="Android">Android</option>
                                      <option value="iPhone">iPhone</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="InstagramHandle" placeholder="Instagram Handle *" required />
                                  </div>
                                  <div className="mb-3">
                                    <input type="text" className="form-control" id="LinkToPortfolio" placeholder="Link to Portfolio *" required />
                                  </div>
                                  <div className="mb-3">
                                    <textarea className="form-control" placeholder="Any additional Information?" style={{'height': '120px'}}></textarea>
                                  </div>
                                <button type="submit" className="btn">Submit</button>
                              </form>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end rpf-block-2">
                            <img src="./assets/images/become_a_creator/Rectangle 41.png" alt="Save-Time" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div className="divider-bac">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100">
                <div className="col">
                    <hr className="divider" />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
