import { LogOut } from 'lucide-react'
import React from 'react'
import { ChevronRight } from 'lucide-react';

function Navbar() {
  return (
        <nav className='flex flex-row justify-between w-auto h-15 bg-blue-950 px-15'>
            <div className='flex items-center cursor-pointer'>
                {/* {logo} */}
                 <span className='text-3xl font-bold text-blue-800'>&lt;/</span>&nbsp;<span className='text-2xl font-bold text-white'>Hitesh Kandari</span>&nbsp;<span className='text-3xl font-bold text-blue-800'>&gt;</span>
            </div>
            <ul className='flex flex-row justify-aroun items-center space-x-5'>
                <li className='text-white inline-block h-auto hover:text-blue-400 cursor-pointer'>Home</li>
                <li className='text-white inline-block h-auto hover:text-blue-400 cursor-pointer'>About</li>
                <li className='text-white inline-block h-auto hover:text-blue-400 cursor-pointer'>Projects</li>
                <li className='text-white h-auto cursor-pointer bg-blue-800 p-1.5 rounded-sm w-20 flex flex-row justify-evenly items-center'>Contact<ChevronRight className='text-xl'/></li>
            </ul>  
        </nav>
  )
}

export default Navbar