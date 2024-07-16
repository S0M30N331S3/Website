import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion.js";
import { styles } from "../styles.js";
import { resume } from "../assets/index.js";

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden ${styles.paddingX}`}>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className='absolute w-auto h-full top-40 object-cover w-full md:top-40 md:left-0 md:w-full md:h-full md:left-60 md:top-20'
        >
          <source src="/blackhole.webm" type="video/webm"/>
        </video>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-row items-center justify-center w-full h-full"
      >
        <div className='h-full w-full flex flex-col gap-5 justify-center lg:mt-20 mt-40 text-start'>
          <motion.div
            variants={slideInFromLeft(0.5)} 
            className='flex flex-col gap-6 mt-6 lg:text-6xl text-4xl font-bold text-white max-w-[850px] w-auto h-auto'
          >
            <span>
              Hi! I&apos;m 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Rotha Chea  {" "}
              </span>
              <br />Welcome to my Portfolio!
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className='lg:text-lg text-sm text-gray-400 lg:my-5 max-w-[600px]'
          >
            Passionate about solving complex problems through programming and eager to contribute to the future of technology.
          </motion.p>
          
          <motion.a
            variants={slideInFromLeft(1)}
            className='learn-more-button max-w-[175px] z-50'
            href= {resume}
            // onClick={(e) => handleSmoothScroll(e, '#about')}
          >
            <span className="text-base">
              My Resume!
            </span>
          </motion.a>
        </div>
      </motion.div>

      <div className='absolute bottom-8 lg:bottom-10 w-full flex justify-center items-center z-50'>
        <a href='#about' onClick={(e) => handleSmoothScroll(e, '#about')}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
      <div className="absolute h-1 w-full z-30 bg-[#808080] bottom-0 opacity-25"/>
      
      <style>{`
        .learn-more-button {
          --m: 1.5rem;
          border: calc(0.08 * var(--m)) solid transparent;
          position: relative;
          color: #F3F3F3;
          font-family: 'Space Grotesk', sans-serif;
          font-size: var(--m);
          border-radius: calc(0.7 * var(--m));
          padding: calc(0.5 * var(--m)) calc(1 * var(--m));
          display: flex;
          justify-content: center;
          cursor: pointer;
          background: linear-gradient(#121213, #121213), 
                      linear-gradient(#121213 50%, rgba(18, 18, 19, 0.6) 80%, rgba(18, 18, 19, 0)),  
                      linear-gradient(90deg, #FF6D1B, #FFEE55, #5BFF89, #4D8AFF, #6B5FFF, #FF64F9, #FF6565);
          background-origin: border-box;
          background-clip: padding-box, border-box, border-box;
          background-size: 200%;
          animation: animate 2s infinite linear;
        }
        .learn-more-button::before {
          content: '';
          background: linear-gradient(90deg, #FF6D1B, #FFEE55, #5BFF89, #4D8AFF, #6B5FFF, #FF64F9, #FF6565);
          height: 30%;
          width: 60%;
          position: absolute;
          bottom: -20%;
          z-index: -5;
          background-size: 200%;
          animation: animate 2s infinite linear;
          filter: blur(calc(0.8 * var(--m)));
        }
        .learn-more-button:hover, .learn-more-button:hover::before {
          animation: animate 0.5s infinite linear;
        }
        @keyframes animate {
          0% {background-position: 0}
          100% {background-position: 200%}
        }
        @media screen and (max-width: 1000px) {
          .learn-more-button {
            --m: 1rem;
          }
        }
      `}</style>
      
    </section>
  )
}

export default Hero;