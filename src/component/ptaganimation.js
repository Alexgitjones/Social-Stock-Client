import React from 'react'
import { motion } from "framer-motion";

export default function Ptaganimation({delay , text, align, speed}) {
    const textanimation = text
  return (
    <div className={`d-flex flex-wrap justify-content-${align == undefined ? 'center' : align } `}>
        {
            textanimation.split(" ").map((index,key) => (
                <motion.span className="me-1" viewport={{ once: true }} transition={{delay: delay + speed * key , duration:1 , type: "spring" , ease: "linear" , bounce: 0.3}} initial={{ y:-20, opacity:0 }} whileInView={{ y:0 , opacity:1 }} >{index}</motion.span>
            ))
        }
    </div>
  )
}
