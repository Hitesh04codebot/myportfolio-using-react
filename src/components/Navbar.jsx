
import { ChevronRight } from 'lucide-react';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { X } from 'lucide-react';

function Navbar() {
     const [hamburger,setHamburger]=useState(false);


  return (
    <>
        <nav className='flex flex-row justify-between w-auto h-15 bg-black px-15 max-sm:p-5 max-md:p-8'>
            <div className='flex items-center cursor-pointer'>
                {/* {logo} */}
                 <span className='text-3xl font-bold text-purple-500 max-sm:text-xl'>&lt;/</span>&nbsp;<span className='text-2xl font-bold text-white max-sm:text-xl'>Hitesh Kandari</span>&nbsp;<span className='text-3xl font-bold text-purple-500 max-sm:text-xl'>&gt;</span>
            </div>
            <ul className='max-sm:hidden flex flex-row justify-around items-center space-x-5'>
                <li className='text-white h-auto hover:text-purple-500 cursor-pointer'>Home</li>
                <li className='text-white h-auto hover:text-purple-500 cursor-pointer'>About</li>
                <li className='text-white h-auto hover:text-purple-500 cursor-pointer'>Projects</li>
                <li className='text-white h-auto cursor-pointer bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 p-1.5 rounded-sm w-20 flex flex-row justify-evenly items-center'>Contact<ChevronRight className='text-xl'/></li>
            </ul>
            <button onClick={()=>setHamburger(!hamburger)} className='flex items-center text-white cursor-pointer sm:hidden'>
                {hamburger ? <X /> : <Menu />}
            </button>
        </nav>
        {hamburger ? (<div className='flex flex-col justify-around items-start space-x-5 bg-black list-none p-2 sm:hidden space-y-3'>
                <li className='text-white h-auto hover:text-blue-400 cursor-pointer'>Home</li>
                <li className='text-white h-auto hover:text-blue-400 cursor-pointer'>About</li>
                <li className='text-white h-auto hover:text-blue-400 cursor-pointer'>Projects</li>
                <li className='text-white h-auto hover:text-blue-400 cursor-pointer'>Contact</li>
        </div>): null}
    </>
            

  )
}

export default Navbar