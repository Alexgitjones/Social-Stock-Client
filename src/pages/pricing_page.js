import React , {useEffect, useState} from 'react'
import Textanimation from '../component/textanimation';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Preloader from '../component/preloader';
import Imageanimation from '../component/imageanimation';
import { motion } from "framer-motion";

export default function Pricingpage({user}) {
    const navigate = useNavigate();

    const make_transaction = async (price) => {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL+'/maketransaction', {
            price,
          });
          window.location.href = response.data.url;
    }
    const handlepayment = (price) => {
        if(user == null){
            navigate('/sign-up?payment='+price)
        }else{
            make_transaction(price)
        }
    }
  return (
    <div>
        {/* <Preloader /> */}
        <div className="inner-pages-banner">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col ipb-block-1">
                    <h1 className="hdng mob-head">Pricing</h1>
                    <Textanimation text="Pricing" />
                    <Imageanimation>
                    <h6 className="breadcrumbs">Home {'>>'} Pricing</h6>
                    </Imageanimation>
                </div>
            </div>
        </div>
    </div>


    <div className="p-container-pricing">
        <div className="container">

            <div className="select-plan-slider">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <Imageanimation>
                        <div className="col sps-block-1">
                            <h6 className="sub-hdng">SELECT A PLAN TO START DOWNLOAD</h6>
                            <h1 className="hdng sp-head">Why is there a member limit?</h1>
                            <Textanimation text="Why is there a member limit?" />
                            <p className="decs">We put a limit on our membership to keep our videos exclusive – giving you a unique edge over others
                            </p>             
                        </div>
                        </Imageanimation>
                    </div>
                    {/* <div className="row w-100 text-center">
                    <Imageanimation>
                        <div className="col sps-block-2">
                            <h6 className="sub-hdng">SELECT A PLAN TO START DOWNLOAD</h6>
                            <h1 className="hdng">Does it work?</h1>
                            <Textanimation text="Does it work?" />
                            <p className="decs">We have the receipts! See our members reach millions under the ‘results’ story<br /> highlights on our Instagram 😍</p>
                        </div>
                    </Imageanimation>
                    </div> */}
                    <div className="row w-100 text-center">
                        <Imageanimation>
                        <div className="col sps-block-1">
                            <h6 className="sub-hdng">SELECT A PLAN TO START DOWNLOAD</h6>
                            <h1 className="hdng sp-head">Not quite sure what to expect?</h1>
                            <Textanimation text="Not quite sure what to expect?" />
                            <p className="decs">We create the latest aesthetic lifestyle videos for females, males and brands - head over to our IG to see our<br /> videos in use. Sign up now to start creating more content without filming them yourself 🪄
                            </p>
                        </div>
                        </Imageanimation>
                    </div>
                </div>
            </div>

            <div className="pricing_plans">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 gap-4">
                        <motion.div transition={{delay:0.4 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="col-xxl-4 col-xl-4 col-lg-4 col-12">
                            <div className="monthly">
                                <h6 className="sub-hdng">month</h6>
                                <div className="price-div">
                                    <h1 className="price">$ 9.99 <span className="usd-text">USD</span></h1>
                                    <p className="price-decs">5 daily downloads</p>
                                </div>
                                <hr className="divider" />
                                <div className="benefits-details">
                                    <ul>
                                        <li>Access to a growing content bank (100+ new trendy videos added every month)</li>
                                        <li>Personal and commercial</li>
                                         <li>Cancel anytime</li>
                                        {/* <li>5 daily downloads</li>
                                        <li>5 daily downloads</li>  */}
                                    </ul>
                                </div>
                                <div className="btn-container">
                                    {/* <a><button onClick={() => handlepayment(process.env.REACT_APP_PKG_ONE)} className="select-btn">Join Now</button></a> */}
                                    <a><button className="select-btn">MEMBER LIMIT REACHED</button></a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.6 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="col-xxl-4 col-xl-4 col-lg-4 col-12">
                            <div className="monthly">
                                <h6 className="sub-hdng">Monthly</h6>

                                <div className="price-div">
                                    <h1 className="price">$ 14.99 <span className="usd-text">USD</span></h1>
                                    <p className="price-decs">15 daily downloads</p>
                                </div>
                                <hr className="divider" />
                                <div className="benefits-details">
                                    <ul>
                                        <li>Access to a growing content bank (100+ new trendy videos added every month)</li>
                                        <li>Personal and commercial use</li>
                                        <li>Cancel anytime</li>
                                        {/* <li>5 daily downloads</li>
                                        <li>5 daily downloads</li> */}
                                    </ul>
                                </div>
                                <div className="btn-container">
                                    {/* <a><button onClick={() => handlepayment(process.env.REACT_APP_PKG_TWO)} className="select-btn">Join Now</button></a> */}
                                    <a><button className="select-btn">MEMBER LIMIT REACHED</button></a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.8 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="col-xxl-4 col-xl-4 col-lg-4 col-12">
                            <div className="monthly">
                                <h6 className="sub-hdng">Monthly</h6>

                                <div className="price-div">
                                    <h1 className="price">$ 19.99 <span className="usd-text">USD</span></h1>
                                    <p className="price-decs">Unlimited Downloads</p>
                                </div>
                                <hr className="divider" />
                                <div className="benefits-details">
                                    <ul>
                                        <li>Access to a growing content bank (100+ new trendy videos added every month)</li>
                                        <li>Personal and Commercial Use</li>
                                        <li>Cancel anytime</li>
                                        {/* <li>Access to an Additional Exclusive Videos and Images Folder<br/>Limited Number of Members<br/>0 Seats left</li> */}
                                        {/* <li>5 daily downloads</li>
                                        <li>5 daily downloads</li> */}
                                    </ul>
                                </div>
                                <div className="btn-container">
                                    <a><button onClick={() => handlepayment(process.env.REACT_APP_PKG_THREE)} className="select-btn">Join Now</button></a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
