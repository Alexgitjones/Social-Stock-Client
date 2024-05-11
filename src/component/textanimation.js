import React from 'react'
import { motion } from "framer-motion";

export default function Textanimation({delays, text ,align}) {
    const textanimation = text
  return (
    <div className={`d-flex flex-wrap justify-content-${align == undefined ? 'center' : align } `}>
        {
            textanimation.split("").map((index,key) => (
                <motion.h1 className={index == ' ' ? 'me-3' : 'hdng'} viewport={{ once: true }} transition={{delay: delays ? delays + 0.05 * key : 0.05 * key  , duration:1 , type: "spring" , ease: "linear" , bounce: 0.4}} initial={{ y:40, opacity:0 }} whileInView={{ y:0 , opacity:1 }} >{index}</motion.h1>
            ))
        }
    </div>
  )
}
