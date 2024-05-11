import React from 'react'
import Textanimation from '../component/textanimation';
import { motion } from "framer-motion";

export default function Howitworks() {
  return (
        <div className="how-it-work-details">
            <div className="container-fluid justify-content-center d-flex flex-column align-items-center">
                <div className="row w-100 text-center">
                    <div className="col hitd-block-1">
                        <h1 className="hdng mob-head">HOW IT WORKS</h1>
                        <Textanimation text="HOW IT WORKS" />
                </div>
            </div>

            <div className="row w-100 text-center">
                <div className="col hitd-block-2">
                    <div className="step-boxs">
                        <motion.div transition={{delay:0.4 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="step-box-1">
                            <div className="num">
                                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="37"
                                    viewBox="0 0 47 37" fill="none">
                                    <path
                                        d="M16.1968 36.8129C9.24678 36.8129 0.696777 31.0629 0.696777 18.6629C0.696777 7.51289 8.59678 0.962891 16.0968 0.962891C23.0468 0.962891 31.5968 6.71289 31.5968 19.1129C31.5968 30.2629 23.6968 36.8129 16.1968 36.8129ZM5.84678 15.6629C5.84678 25.3629 10.4968 35.7629 18.2468 35.7629C23.3968 35.7629 26.4468 30.3629 26.4468 22.1629C26.4468 12.4129 21.8468 2.01289 14.0468 2.01289C8.94678 2.01289 5.84678 7.46289 5.84678 15.6629Z"
                                        fill="black" />
                                    <path
                                        d="M36.4706 36.3129V35.6129C38.4706 35.0629 38.8706 33.5629 38.8706 29.9629V6.11289L34.4706 7.96289L34.3706 7.61289L43.7706 1.06289H44.1706V29.9629C44.1706 33.5629 44.5706 35.0629 46.5706 35.6129V36.3129H36.4706Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <h1 className="hdng">Sign up</h1>
                            <p className="decs">Select a subscription plan and gain access to our collection of
                                royalty-free aesthetic stock videos and images.</p>
                            <svg className="s-arrow-1" xmlns="http://www.w3.org/2000/svg" width="76" height="76"
                                viewBox="0 0 76 76" fill="none">
                                <circle cx="37.6954" cy="37.6954" r="37.1954" fill="#FFC09F" stroke="black" />
                                <circle cx="37.6955" cy="37.6957" r="23.2426" fill="white" />
                                <circle cx="37.6955" cy="37.6957" r="22.7426" stroke="black"
                                    strokeOpacity="0.1" />
                                <path
                                    d="M43.2899 37.6957L36.1426 44.4222L36.1426 44.4222L36.1418 44.423C35.6593 44.8823 34.8616 44.8834 34.3714 44.4222C33.8886 43.9678 33.8886 43.2407 34.3714 42.7864L34.3715 42.7863L39.6216 37.8413L39.7762 37.6957L39.6216 37.5502L34.3715 32.6052L34.3714 32.6051C33.8886 32.1508 33.8886 31.4236 34.3714 30.9693C34.8616 30.5081 35.6593 30.5092 36.1418 30.9685L36.1426 30.9693L43.2899 37.6957Z"
                                    fill="black" stroke="white" strokeWidth="0.4" />
                            </svg>
                        </motion.div>
                        <motion.div transition={{delay:0.6 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="step-box-2">
                            <div className="num">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="37"
                                    viewBox="0 0 56 37" fill="none">
                                    <path
                                        d="M16.1858 36.8129C9.23579 36.8129 0.685791 31.0629 0.685791 18.6629C0.685791 7.51289 8.58579 0.962891 16.0858 0.962891C23.0358 0.962891 31.5858 6.71289 31.5858 19.1129C31.5858 30.2629 23.6858 36.8129 16.1858 36.8129ZM5.83579 15.6629C5.83579 25.3629 10.4858 35.7629 18.2358 35.7629C23.3858 35.7629 26.4358 30.3629 26.4358 22.1629C26.4358 12.4129 21.8358 2.01289 14.0358 2.01289C8.93579 2.01289 5.83579 7.46289 5.83579 15.6629Z"
                                        fill="black" />
                                    <path
                                        d="M31.8959 35.6129C38.7959 28.9629 48.1959 19.1129 48.1959 10.5629C48.1959 7.31289 46.646 4.16289 42.2459 4.16289C39.7959 4.16289 37.5459 5.11289 35.3959 7.46289L34.9459 7.01289C38.0459 3.11289 41.3459 0.962891 45.7959 0.962891C50.2459 0.962891 53.896 3.91289 53.9459 9.26289C53.9959 18.1129 42.9959 26.8129 36.6459 32.2629H47.6459C52.5959 32.2629 53.596 31.7629 54.4959 29.5129L55.0459 29.5629L54.2959 36.3129H31.8959V35.6129Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <h1 className="hdng">Download</h1>
                            <p className="decs">Save the videos/images you want to use to your device and customize
                                to your liking.</p>
                            <svg className="s-arrow-1" xmlns="http://www.w3.org/2000/svg" width="76" height="76"
                                viewBox="0 0 76 76" fill="none">
                                <circle cx="37.6954" cy="37.6954" r="37.1954" fill="#FFC09F" stroke="black" />
                                <circle cx="37.6955" cy="37.6957" r="23.2426" fill="white" />
                                <circle cx="37.6955" cy="37.6957" r="22.7426" stroke="black"
                                    strokeOpacity="0.1" />
                                <path
                                    d="M43.2899 37.6957L36.1426 44.4222L36.1426 44.4222L36.1418 44.423C35.6593 44.8823 34.8616 44.8834 34.3714 44.4222C33.8886 43.9678 33.8886 43.2407 34.3714 42.7864L34.3715 42.7863L39.6216 37.8413L39.7762 37.6957L39.6216 37.5502L34.3715 32.6052L34.3714 32.6051C33.8886 32.1508 33.8886 31.4236 34.3714 30.9693C34.8616 30.5081 35.6593 30.5092 36.1418 30.9685L36.1426 30.9693L43.2899 37.6957Z"
                                    fill="black" stroke="white" strokeWidth="0.4" />
                            </svg>
                        </motion.div>
                        <motion.div transition={{delay:0.8 , duration:1, type: "spring", ease: "circIn" , bounce: 0.4 }} initial={{ y:100, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} className="step-box-3">
                            <div className="num">
                                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="44"
                                    viewBox="0 0 54 44" fill="none">
                                    <path
                                        d="M16.2473 36.4633C9.29731 36.4633 0.747314 30.7133 0.747314 18.3133C0.747314 7.16328 8.64732 0.613281 16.1473 0.613281C23.0973 0.613281 31.6473 6.36328 31.6473 18.7633C31.6473 29.9133 23.7473 36.4633 16.2473 36.4633ZM5.89732 15.3133C5.89732 25.0133 10.5473 35.4133 18.2973 35.4133C23.4473 35.4133 26.4973 30.0133 26.4973 21.8133C26.4973 12.0633 21.8973 1.66328 14.0973 1.66328C8.99731 1.66328 5.89732 7.11328 5.89732 15.3133Z"
                                        fill="black" />
                                    <path
                                        d="M32.8575 42.4633C42.8075 37.3633 47.8075 28.8133 47.8075 23.3133C47.8075 17.8633 45.1575 16.2133 42.1075 16.2133C41.3575 16.2133 40.1575 16.4633 38.9575 17.1133L38.7075 16.5633C43.0575 14.4133 45.6575 11.8133 45.6575 8.11328C45.6575 5.36328 43.7075 3.71328 40.6075 3.71328C38.2575 3.71328 35.7075 4.76328 33.5575 7.11328L33.1075 6.66328C36.2075 2.96328 39.4075 0.613281 43.8575 0.613281C48.0075 0.613281 50.5075 3.36328 50.5075 6.36328C50.5075 10.8633 47.0575 13.2133 42.1575 15.5133C42.9075 15.3133 43.8575 15.1633 45.0075 15.1633C48.3575 15.1633 53.4575 16.8133 53.4575 22.4633C53.4575 30.8633 44.1075 37.3633 33.2075 43.1633L32.8575 42.4633Z"
                                        fill="black" />
                                </svg>
                            </div>
                            <h1 className="hdng">
                                Post

                            </h1>
                            <p className="decs">Share to yours or your client's social media and create even more
                                posts in less time!</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
