import React from 'react'
import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className='main-parent_anim'>
        <motion.div transition={{delay: 0.1 , duration:1,  ease: "circIn"}} initial={{ height:'100%' }} animate={{ height:'0%' }} className="preload-ani"></motion.div>
        <motion.div transition={{delay: 0.3, duration:1,  ease: "circIn"}} initial={{ height:'100%' }} animate={{ height:'0%' }} className="preload-ani-black"></motion.div>
        <motion.div transition={{delay: 0.6 , duration:1,  ease: "circIn"}} initial={{ height:'100%' }} animate={{ height:'0%' }} className="preload-ani-pink"></motion.div>
    </div>
  )
}
