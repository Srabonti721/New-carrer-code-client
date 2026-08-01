import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
<div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <motion.h1
      initial={{scale:0}}
       animate={{
        scale:1,
        transition:{duration:2}
        }}  className="text-5xl font-bold">Box Office News!</motion.h1>
      <p className="py-6">
        <motion.span animate={{
            color:["#F54927", "#C2C240", "#408EC2", "#4040C2", "#A240C2"],
            transition:{duration:4, repeat:Infinity}
        }} className='text-3xl font-semibold'>Provident cupiditate</motion.span> voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;