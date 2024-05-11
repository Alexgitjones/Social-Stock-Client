import React , {useEffect , useState , useRef} from 'react'
import { motion } from "framer-motion";
import data from "../data/homebanner.json"

export default function Home_video() {
    var speed = 1;
    const [completedAnimations, setCompletedAnimations] = useState([]);
    const videoRefs = useRef([]);

    const handleAnimationComplete = (index) => {
        const videos = document.querySelectorAll(`.v-box-${index.val} video`);
        videos[0].play()
    };

  return (
        <div className="videos-p col">
            {
                data.items.map((index,key) => (
                    <div key={key} className={index.name+' img-d'}>
                        {
                            index.video.map((indexes,keys) => (
                                <motion.div key={keys} onAnimationComplete={(values) => handleAnimationComplete(values)} transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:1 , delay: 1.8 + speed++ * 0.09 }} initial={{ y: 100, opacity:0 }} animate={{ val:speed, y: 0, opacity:1 }} className={`v-box-${speed} v-box`}
                                >
                                    <video loop muted playsInline data-wf-ignore="true" data-object-fit="cover" src={indexes}> </video>        
                                {/* { speed++ } */}
                                </motion.div>
                            ))
                        }
                    </div>        
                ))
            }
            {/* <div className="row-1 img-d">
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 0.1}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708483142/fahmgdwqvancdrycw3ta.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 0.25}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708638516/cjyi9uucskbo2d5zf7oh.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 0.4}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708483142/fahmgdwqvancdrycw3ta.mp4"></video>
                </motion.div>
            </div>
            <div className="row-2 img-d">
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 0.55}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708638516/cjyi9uucskbo2d5zf7oh.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 0.7}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708483142/fahmgdwqvancdrycw3ta.mp4"></video>
                </motion.div>
            </div>
            <div className="row-3 img-d">
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 0.85}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708639022/qjihwkzhnyoqcxkxoduc.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 1}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708483142/fahmgdwqvancdrycw3ta.mp4"></video>
                </motion.div>
            </div>
            <div className="row-4 img-d">
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 1.25}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708638516/cjyi9uucskbo2d5zf7oh.mp4"></video>
                </motion.div>
            </div>
            <div className="row-5 img-d">
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 1.4}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708483142/fahmgdwqvancdrycw3ta.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 1.55}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708638516/cjyi9uucskbo2d5zf7oh.mp4"></video>
                </motion.div>
            </div>
            <div className="row-6 img-d">
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 1.7}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708639446/rept4uutr8j6szc4zour.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 1.85}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708638516/cjyi9uucskbo2d5zf7oh.mp4"></video>
                </motion.div>
            </div>
            <div className="row-7 img-d">
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 2}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708638700/cb1ppgc8z83z7jwyfpsj.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 2.15}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708638516/cjyi9uucskbo2d5zf7oh.mp4"></video>
                </motion.div>
                <motion.div transition={{type: "spring" , ease: "linear" , bounce: 0.5 , duration:0.8 , delay: 2.3}} initial={{ y: 40, opacity:0 }} animate={{ y: 0, opacity:1 }} className="v-box">
                    <video playsInline data-wf-ignore="true" data-object-fit="cover" src="https://res.cloudinary.com/du73if3k3/video/upload/v1708483142/fahmgdwqvancdrycw3ta.mp4"></video>
                </motion.div>
            </div> */}
        </div>
  )
}
