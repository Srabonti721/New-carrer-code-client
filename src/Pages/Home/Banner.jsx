import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/Teams/developer.jpg';
import team2 from '../../assets/Teams/softdev.jpg';

const Banner = () => {
    return (
<div className="hero bg-base-200 min-w-96">
  <div className="hero-content flex-col lg:flex-row-reverse">
<div className='flex-1'>
        <motion.img 
animate={{
    y:[0, 100, 0]
}}
transition={{duration:10, repeat:Infinity}}
      src={team1}
      className="max-w-sm  border-s-8 border-b-8 border-blue-500 rounded-t-3xl rounded-br-3xl shadow-2xl"
    />
    <motion.img 
    animate={{x:[100, 150, 100]}}
    transition={{duration:10 , delay:5, repeat:Infinity}}
      className='max-w-sm border-s-8 border-b-8 border-blue-500 rounded-t-3xl rounded-br-3xl' src={team2} alt="team2" />
</div>
    <div className='flex-1'>
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