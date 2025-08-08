import React from "react";
import resume from '../assets/pdf/resume.pdf'
function About() {
  return (
    <>
      <div className="text-center m-3 font-extrabold text-4xl">About Me</div>
      <div className="w-full m-5 flex flex-row justify-center items-center">
        <div className="w-1/2 p-3">
          <p>My journey</p>
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
          <p>
            My learning didn’t stop with coding — I honed my problem-solving
            skills through the NPTEL Data Structures & Algorithms in Java course
            and expanded my understanding of collaborative work by contributing
            to club budget strategy discussions during my volunteering days.
            Today, I see web development not just as writing code, but as
            crafting experiences that solve problems and inspire users. Every
            project I take on is a step forward in mastering the art of blending
            logic, creativity, and usability.
          </p><br/>
          <a href={resume} download="Hitesh_Kandari_Resume.pdf">
            <button className="flex items-center gap-2 px-5 py-2 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
              Download Resume
            </button>
          </a>
        </div>
        <div className="w-1/2 p-3">
          <div className='w-full '>
            <p>Skills & Expertise</p>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
