import React, {useState ,useEffect} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import { motion } from "framer-motion";
import Textanimation from '../component/textanimation';
import Preloader from '../component/preloader';
import Imageanimation from '../component/imageanimation';
import Howitworks from '../component/howitworks';

export default function Aboutus() {

  return (
    <motion.div>
        {/* <Preloader /> */}
        <div className="inner-pages-banner">
            <div className="container justify-content-center d-flex flex-column align-items-center">
                <div className="row w-100 text-center">
                    <div className="col ipb-block-1">
                        <Textanimation text="About Us" />
                        <motion.h6 transition={{delay: 0.5 , duration:1 , type: "spring" , ease: "linear" , bounce: 0.6}} initial={{ y:40, opacity:0 }} animate={{ y:0 , opacity:1 }} className="breadcrumbs">Home {'>>'} About Us</motion.h6 >
                    </div>
                </div>
            </div>
        </div>
        <div className="p-container-about">
            <div className="container">
                <div className="hit-info-about">
                    <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                        <div className="row w-100 text-center">
                            <Imageanimation>
                            <div className="col hit-info-about-block-1">
                                <h1 className="hdng">VIDEOS & PHOTOS READY TO DOWNLOAD</h1>
                                <hr className="divider" />
                                <img src='./assets/images/home/new.png'/>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="200" height="56" viewBox="0 0 200 56"
                                    fill="none">
                                    <path
                                        d="M0 54.797C12.9797 48.1441 19.5021 36.9907 19.5021 29.816C19.5021 22.7066 16.0452 20.5541 12.0665 20.5541C11.0882 20.5541 9.52278 20.8803 7.95739 21.7282L7.63127 21.0107C13.3058 18.2061 16.6975 14.8144 16.6975 9.98777C16.6975 6.40043 14.1537 4.24802 10.1098 4.24802C7.04425 4.24802 3.7178 5.61773 0.913143 8.68329L0.326122 8.09627C4.37004 3.26965 8.54441 0.204102 14.3494 0.204102C19.763 0.204102 23.0243 3.79145 23.0243 7.70492C23.0243 13.5751 18.5238 16.6407 12.1318 19.641C13.1101 19.3801 14.3494 19.1844 15.8496 19.1844C20.2196 19.1844 26.8725 21.3368 26.8725 28.7072C26.8725 39.6649 14.6755 48.1441 0.456571 55.7102L0 54.797Z"
                                        fill="black" />
                                    <path
                                        d="M51.6461 46.9701C42.5799 46.9701 31.4265 39.4693 31.4265 23.2936C31.4265 8.74851 41.732 0.204102 51.5156 0.204102C60.5818 0.204102 71.7352 7.70492 71.7352 23.8806C71.7352 38.4257 61.4298 46.9701 51.6461 46.9701ZM38.1446 19.3801C38.1446 32.0337 44.2105 45.6004 54.3203 45.6004C61.0384 45.6004 65.0171 38.5561 65.0171 27.8593C65.0171 15.1405 59.0165 1.57381 48.8414 1.57381C42.1885 1.57381 38.1446 8.68329 38.1446 19.3801Z"
                                        fill="black" />
                                    <path
                                        d="M96.5516 46.9701C87.4854 46.9701 76.332 39.4693 76.332 23.2936C76.332 8.74851 86.6375 0.204102 96.4212 0.204102C105.487 0.204102 116.641 7.70492 116.641 23.8806C116.641 38.4257 106.335 46.9701 96.5516 46.9701ZM83.0501 19.3801C83.0501 32.0337 89.116 45.6004 99.2258 45.6004C105.944 45.6004 109.923 38.5561 109.923 27.8593C109.923 15.1405 103.922 1.57381 93.747 1.57381C87.0941 1.57381 83.0501 8.68329 83.0501 19.3801Z"
                                        fill="black" />
                                    <path
                                        d="M141.457 46.9701C132.391 46.9701 121.238 39.4693 121.238 23.2936C121.238 8.74851 131.543 0.204102 141.327 0.204102C150.393 0.204102 161.546 7.70492 161.546 23.8806C161.546 38.4257 151.241 46.9701 141.457 46.9701ZM127.956 19.3801C127.956 32.0337 134.022 45.6004 144.131 45.6004C150.85 45.6004 154.828 38.5561 154.828 27.8593C154.828 15.1405 148.828 1.57381 138.653 1.57381C132 1.57381 127.956 8.68329 127.956 19.3801Z"
                                        fill="black" />
                                    <path
                                        d="M199.538 23.2284H184.341V38.4909H181.471V23.2284H166.339V20.4889H181.471V5.22639H184.341V20.4889H199.538V23.2284Z"
                                        fill="black" />
                                </svg> */}
                            </div>
                            </Imageanimation>
                        </div>
                    </div>
                </div>

                <div className="about-us">
                    <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                        <div className="row w-100 text-start d-flex justify-content-between ">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end au-block-1">
                                <Imageanimation>
                                <img src="./assets/images/about_us/a-img.png" alt="Save-Time" />
                                </Imageanimation>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 au-block-2 align-self-center">
                                <h6 className="eb">LET'S TALK CONTENT</h6>
                                <h1 className="hdng mob-head">LETS TALK CONTENT</h1>
                                <Textanimation align={'start'} text="LETS TALK CONTENT" />
                                <p className="decs">We get it. Great ideas for social media posts need the perfect visuals to bring them to life. Generic stock websites fall short in capturing the authenticity and connection social media demands. That's why we created a stock footage platform exclusively for social media, to help you create high-quality content that resonates with your audience in less time.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="save-time-about">
                    <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                        <div className="row w-100 text-start d-flex justify-content-between ">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 sta-block-1 align-self-center">
                                <h6 className="st">powered by creators for creators</h6>
                                <h1 className="hdng ctc-mob">powered by creators for creators</h1>
                                <Textanimation align={'start'} text="powered by creators for creators" />
                                <p className="decs">We're proud to say that Social Stocks is powered by a team of women who understand the unique struggles female entrepreneurs face. Based in the vibrant city of Hong Kong, our diverse team brings a fresh perspective to the table and is committed to supporting and empowering brands like yours.</p>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end sta-block-2">
                                <Imageanimation>
                                <img src="./assets/images/about_us/sta-img.png" alt="Save-Time" />
                                </Imageanimation>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="extra-boost-about mb-5">
                    <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                        <div className="row w-100 text-start d-flex justify-content-between ">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end eba-block-1">
                                <Imageanimation>
                                <img src="./assets/images/about_us/exb-img.png" alt="Save-Time" />
                                </Imageanimation>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 eba-block-2 align-self-center">
                                <h6 className="eb">AFFORDABLE CONTENT CREATION</h6>
                                <h1 className="hdng mob-about">AFFORDABLE CONTENT CREATION</h1>
                                <Textanimation align={'start'} text="AFFORDABLE CONTENT CREATION" />
                                <p className="decs">We understand that hiring a content creation agency can be financially daunting, with prices starting at $500 per video. That's why we made UGC Stocks affordable for all brands. With our subscription, you'll have unlimited access to our ENTIRE collection of videos. Plus, we add 100-200 new video uploads every month to keep your content fresh and engaging. No need to break the bank to elevate your content game.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Howitworks />

            </div>
        </div>
    </motion.div>
  )
}
