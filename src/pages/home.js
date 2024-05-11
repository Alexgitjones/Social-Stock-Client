import React , {useEffect, useState} from 'react'
import Header from '../component/header'
import Footer from '../component/footer'
import Home_test_slider from '../component/home-test-slider'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Home_video from '../component/home-banner-video';
import Ptaganimation from '../component/ptaganimation';
import Textanimation from '../component/textanimation';
import Imageanimation from '../component/imageanimation';
import Preloader from '../component/preloader';
import Howitworks from '../component/howitworks';
import Joinnow from '../component/joinnow';

export default function Home({user}) {
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(user)
    },[user])

    const searchhandle = () => {
        navigate('/pricing-page')
    }

  return (
    <div>
        <Preloader />
      {/* <Header user={user} /> */}
      <div className="banner">
        <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
            <div className="row text-center w-100">
                <div className="col b-block-1">
                    <motion.img transition={{delay: 1.8 , duration:1 , type: "spring" , ease: "linear" , bounce: 0.6}} initial={{ y:100, opacity:0 }} animate={{ y:0 , opacity:1 }} src="./assets/images/home/banner-logo.png" alt="UGC Stocks" className="b-logo" />
                    <p className="decs">
                        <Ptaganimation delay={1.8} speed={0.15} text="User Generated Content for Creators"/>
                    </p>
                </div>
            </div>
            <div className="row text-center w-100">
                <div className="col b-block-2">
                    <motion.div transition={{delay: 1.8, duration:1 , type: "spring" , ease: "linear" , bounce: 0.3}} initial={{ y:100 , opacity:0 }} animate={{ y:0 , opacity:1 }} className="input-group">
                        <input type="search" className="form-control"
                            aria-label="Search" placeholder='intro video' aria-describedby="search-addon" />
                        <button type="button" onClick={() => searchhandle()} className="btn" data-mdb-ripple-init>search</button>
                    </motion.div>
                </div>
            </div>
            <div className="row text-center w-100">
                <Home_video />    
            </div>
            <div className="row text-center w-100">
                <div className="col b-block-4">
                    <h6 className="hiw">Here’s how it works</h6>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <g clipPath="url(#clip0_48_73)">
                            <path
                                d="M6.26245 9.85379L0.592451 4.24879C0.152451 3.81879 0.152451 3.11379 0.592451 2.67879C1.03245 2.24379 1.74245 2.24379 2.18245 2.67879L6.26245 6.70879L10.3425 2.67879C10.7825 2.24379 11.4925 2.24379 11.9325 2.67879C12.3725 3.11379 12.3725 3.81879 11.9325 4.24879L6.26245 9.85379Z"
                                fill="#111111" />
                        </g>
                        <defs>
                            <clipPath id="clip0_48_73">
                                <rect width="12" height="12" fill="white" transform="translate(0.262451 0.104004)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>


    <div className="how-it-work" id="second-section">
        <div className="container">
            <Howitworks />

            <div className="hit-info">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-center">
                        <Imageanimation>
                        <div className="col hit-info-block-1">
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

            <div className="save-time">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 st-block-1 align-self-center pe-4">
                            <h6 className="st">Save Time</h6>
                            
                            <h1 className="hdng mob-head">Create more posts in less time</h1>
                            {/* <h1 className="hdng"> */}
                                <Textanimation align="start" text="Create more posts in less time" />
                            {/* </h1> */}
                            {/* <Textanimation align="start" text="Create more posts" />
                            <Textanimation align="start" text="in less time"/> */}
                            <Imageanimation>
                            <p className="decs">
                            Create social media posts without having to spend hours setting up your shot and waiting for the perfect light to come through
                                {/* <Ptaganimation delay={0.1} speed={0.08} align="start" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." /> */}
                            </p>
                            </Imageanimation>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end st-block-2 ps-4">
                            <Imageanimation>
                                <img src="./assets/images/home/st-img.png" alt="Save-Time" />
                            </Imageanimation>
                            <a href="#"><button className="ecd-btn"><img src="./assets/images/home/s-ecd-btnsds.png" />I’m so ready!</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="extra-boost">
                <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                    <div className="row w-100 text-start d-flex justify-content-between ">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 text-end eb-block-1 pe-4">
                            <Imageanimation>
                                <img src="./assets/images/home/eb-img.png" alt="Save-Time" />
                            </Imageanimation>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-12 eb-block-2 align-self-center ps-4">
                            <h6 className="eb">EXTRA BOOST</h6>
                            <h1 className="hdng mob-head">Boost conversions, engagement and reach</h1>

                            <Textanimation align="start" text="Boost conversions, engagement and reach" />
                            <Imageanimation>
                            <p className="decs">
                            The go-to for social media managers, business owners, content creators, lifestyle brands, designers, coaches and agencies looking to drive conversions with content that looks and feels authentic
                                {/* <Ptaganimation delay={0.1} speed={0.08} align="start" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." /> */}
                            </p>
                            </Imageanimation>
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    </div>


    <div className="testimonial">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col t-block-1">
                    <h6 className="sub-hdng">TESTIMONIALS</h6>
                    {/* <h1 className="hdng">Hear from Our Community</h1> */}
                    <Textanimation text="Hear from Our Community" />
                </div>
            </div>
        </div>

        <div className="container justify-content-center d-flex flex-column align-items-center t-slider">
            <div className="row w-100 text-center">
                <div className="col t-block-2">
                    <Home_test_slider />
                </div>
            </div>
        </div>
    </div>


    <div className="faq">
        <div className="container justify-content-center d-flex flex-column align-items-center">
            <div className="row w-100 text-center">
                <div className="col faq-block-1">
                    <h6 className="sub-hdng">FAQ</h6>
                    <h1 className="hdng mob-head">Frequently Asked Questions</h1>
                    <Textanimation text="Frequently Asked Questions" />
                </div>
            </div>

            <div className="row w-100 text-start">
                <div className="col faq-block-2">

                    <div className="accordion" id="accordionExample">
                        <motion.div transition={{delay:0.1 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:200 }} whileInView={{ y:0 }} viewport={{ once: true }} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Can I customize and edit the videos and images?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Yep! Adjust the colors, add text, edit, and personalize the videos with Canva, InShot, CapCut, or any editing app you prefer.
                                We shoot with text placement in mind so you can easily add text without worrying about it looking too busy or out of place.
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.1 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:200 }} whileInView={{ y:0 }} viewport={{ once: true }} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What are the usage rights?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">You can fully customize UGC stocks videos: adding logos or text, adjusting color, applying filters, or trimming clips and posting them to your personal or brand social media.<br/> <strong>However, reselling them is illegal and prohibited under our usage license.</strong>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.1 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:200 }} whileInView={{ y:0 }} viewport={{ once: true }} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What is the quality of the footage?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">The videos and images on our site are slightly compressed to make your scrolling experience faster and smoother.But we promise: once you click download, you'll receive the original high-quality file straight to your device! 😍
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.1 , duration:1, type: "spring", ease: "linear" , bounce: 0.4 }} initial={{ y:200 }} whileInView={{ y:0 }} viewport={{ once: true }} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Is there a limit to how many times I can use a video image?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Nope! There is no limit to how often you can use a video. You can use the same video multiple times with no additional fees 🥳
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.1 , duration:1, type: "spring", ease: "linear" , bounce: 0.4 }} initial={{ y:200 }} whileInView={{ y:0 }} viewport={{ once: true }} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    What type of stock videos images can I find in the membership?
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">Tons of trendy and aesthetic lifestyle shots captured in natural lighting! Take a look at our Instagram  story highlights for a preview 👀
                                </div>
                            </div>
                        </motion.div>
                        <motion.div transition={{delay:0.1 , duration:1, type: "spring", ease: "linear" , bounce: 0.4 }} initial={{ y:200 }} whileInView={{ y:0 }} viewport={{ once: true }} className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    What cant I do with stock videos and images?
                                </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">❌ You can't claim the videos or images as your own work or sell them as your own. Give credit to <a>UGC stocks</a> when asked <br/>❌ You must use the videos and images responsibly and not promote wrongdoings or illegal activities.<br/>❌ <strong>You can't resell the videos and images. This is illegal and prohibited under our usage license.</strong><br/>✅ Other than that, you can use the videos and images for any personal or commercial projects! 😍
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Joinnow />
      {/* <Footer /> */}
    </div>
  )
}
