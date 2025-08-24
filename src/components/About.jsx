
import resume from '../assets/pdf/resume.pdf'
import html5 from '../assets/photos/html5.png'
import css from '../assets/photos/css.png'
import js from '../assets/photos/js.png'
import react from '../assets/photos/react.png'
import java from '../assets/photos/java.png'
import c from '../assets/photos/c.png'
import tailwind from '../assets/photos/tailwind.png'
import nodejs from '../assets/photos/nodejs.png'
import mongodb from '../assets/photos/mongodb.png'
import expressjs from '../assets/photos/expressjs.png'
import { motion } from "framer-motion";
function About() {
  return (
    <>
      <div className="text-center m-3 font-extrabold text-4xl" id="about" >About Me</div>
      <div className="w-vw mx-20 my-10 flex flex-row justify-center items-center gap-7 max-md:flex max-md:flex-col max-md:mx-3 max-lg:flex max-lg:flex-col max-lg:mx-3">
        <motion.div initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="w-1/2 max-md:w-full max-lg:w-full ">
          <p className='text-2xl font-bold w-full'>My Journey</p>
          <br />
          <p>
            My journey into web development began with curiosity — the simple
            joy of turning ideas into something I could see and interact with on
            a screen. Over time, that curiosity grew into a passion for building
            functional, beautiful, and meaningful digital experiences. I started
            with HTML, CSS, and JavaScript, creating small projects like landing
            pages, calculators, and portfolio sites. As my skills grew, I
            explored React.js, unlocking the ability to build dynamic,
            component-based applications. This led me to transform my PG &
            Hostel Finder project from a static HTML site into a fully
            interactive React application, complete with filtering, search
            functionality, and a vision to integrate an AI assistant for an even
            smoother user experience.
          </p>
          <br />
          <a href={resume} download="Hitesh_Kandari_Resume.pdf">
            <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 cursor-pointer">
              Download Resume
            </button>
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} className="w-1/2 p-3 border-2 border-black shadow-[0px_0px_10px_rgba(0,0,0,0.34)] box-border max-md:w-full rounded-3xl max-lg:w-full">
            <p className='text-center text-2xl font-bold'>Skills & Expertise</p><br/>
            <div className='flex flex-row justify-center items-center flex-wrap space-x-5 space-y-3 p-10 max-md:p-1 max-lg:w-full max-lg:p-2'>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={html5} alt='html5 icon' className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>HTML</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={css} alt="css icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>CSS</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={js} alt="js icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>Javascript</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={react} alt="react icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>React</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={java} alt="java icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>Java</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={c} alt="c icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>C</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={tailwind} alt="tailwind icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>Tailwind</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={nodejs} alt="nodejs icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>Node JS</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={mongodb} alt="mongodb icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>Mongodb</span>
              </div>
              <div className='flex justify-center items-center w-50px h-auto rounded-lg border border-black px-3 py-2 shadow-[0px_0px_10px_rgba(0,0,0,0.34)] transform hover:scale-110 transition duration-300'>
                  <img src={expressjs} alt="express icon" className='w-8 h-8'/>&nbsp;
                  <span className='font-semibold'>Express js</span>
              </div>
            </div>
          </motion.div>
      </div>
    </>
  );
}

export default About;
