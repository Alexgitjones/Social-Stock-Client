import React from 'react'
import { motion } from "framer-motion";

export default function Imageanimation({children}) {
  return (
    <motion.div transition={{delay:0.5 , duration:1, type: "spring", ease: "circIn" , bounce: 0.3 }} initial={{ y:200, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once: true }} >{children}</motion.div>
  )
}
