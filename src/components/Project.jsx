import React from 'react'
import calculator from '../assets/photos/calculatorpng.png'
import landingpage from '../assets/photos/landingpage.png'
import MUJSTAYS from '../assets/photos/MUJSTAYS.png'
import stopwatch from '../assets/photos/stopwatch.png'
import todo from '../assets/photos/todo.png'
import Cards from './Cards'

function Project() {
    const projectsarr = [
        {
            title: 'Calculator',
            image : calculator,
            description : 'A simple calculator web app built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division.',
            github : "https://github.com/Hitesh04codebot/Calculator-"
        },
        {
            title: 'Landing Page',
            image : landingpage,
            description : 'A visually appealing landing page for Max Protein Bar highlighting its features, flavors, and customer reviews.',
            github : "https://github.com/Hitesh04codebot/Landing-page-protein-bar-"
        },
        {
            title: 'MUJSTAYS',
            image : MUJSTAYS,
            description : 'This website helps students easily find and book safe PG accommodations near their college. It offers secure stays with 24x7 surveillance, ensuring peace of mind and convenience during the search for housing.',
            github : "https://github.com/Hitesh04codebot/MUJSTAYS"
        },
        {
            title: 'Stopwatch',
            image : stopwatch,
            description : 'This is a visually striking digital stopwatch featuring a dynamic Star Wars-inspired background. The interface includes clear controls for starting, stopping, and resetting the timer, providing both style and functionality.',
            github : "https://github.com/Hitesh04codebot/Starwar-Aesthetic-Stopwatch"
        },
        {
            title: 'My Todo List',
            image : todo,
            description : 'This is a sleek digital to-do list app with a clean and modern interface. It allows users to quickly add tasks, helping them stay organized and productive.',
            github : "https://github.com/Hitesh04codebot/Dark-Aesthetic---To-do-list"
        },
    ];
  return (
    <>
    <div className="text-center pt-3 font-extrabold text-4xl text-black bg-white w-vw" id="projects" >Projects</div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center bg-white p-3 gap-10'>
        {projectsarr.map((items,index)=>{
            return <Cards item={items} key={index}/>
        })}
    </div>
    </>
  )
}

export default Project