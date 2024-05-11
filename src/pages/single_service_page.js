import React from 'react'
import Textanimation from '../component/textanimation';
import Preloader from '../component/preloader';
import Imageanimation from '../component/imageanimation';
import Joinnow from '../component/joinnow';

export default function Singleservices({user}) {
  return (
    <div>
        {/* <Preloader /> */}
        <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng mob-head">Services NAme Here</h1>
                    <Textanimation text="Services NAme Here" />
                    <Imageanimation>
                    <h6 className="breadcrumbs">Home {'>>'} Our Services {'>>'} Service Name Here</h6>
                    </Imageanimation>
                </div>
            </div>
        </div>
    </div>


    <div className="p-container-ssp">
        <div className="container">

            <div className="service-content">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 sc-block-1 align-self-center">
                            <h6 className="st">Service Name</h6>
                            <h1 className="hdng mob-head">Service Name Here</h1>
                            <Textanimation delays={1} align={'start'} text="Service Name Here" />
                            <Imageanimation>
                            <p className="decs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.</p>
                            </Imageanimation>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end sc-block-2">
                            <Imageanimation>
                            <img src="./assets/images/single_service_page/sn-img.png" alt="Save-Time" />
                            </Imageanimation>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <Joinnow />
    </div>
  )
}
