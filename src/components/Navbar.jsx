import { ChevronRight } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  return (
    <>
      <div className=" flex flex-row justify-between w-auto h-15 bg-black px-10 max-sm:p-5 max-md:p-8">
        <div className="flex items-center flex-1/2 cursor-pointer">
          {/* {logo} */}
          <span className="text-3xl font-bold text-purple-500 max-sm:text-xl">
            &lt;/
          </span>
          &nbsp;
          <span className="text-2xl font-bold text-white max-sm:text-xl">
            Hitesh Kandari
          </span>
          &nbsp;
          <span className="text-3xl font-bold text-purple-500 max-sm:text-xl">
            &gt;
          </span>
        </div>
        <nav className="max-sm:hidden flex flex-row justify-around items-center space-x-5">
          <a
            href="#home"
            className="text-white h-auto hover:text-purple-500 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white h-auto hover:text-purple-500 cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white h-auto hover:text-purple-500 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white h-auto cursor-pointer bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 p-1.5 rounded-sm w-20 flex flex-row justify-evenly items-center"
          >
            Contact
            <ChevronRight className="text-xl" />
          </a>
        </nav>
        <button
          onClick={() => setHamburger(!hamburger)}
          className="flex items-center text-white cursor-pointer sm:hidden"
        >
          {hamburger ? <X /> : <Menu />}
        </button>
      </div>
      {hamburger ? (
        <div className="flex flex-col justify-around items-start space-x-5 bg-black list-none p-2 sm:hidden space-y-3 z-10">
          <a
            href="#home"
             onClick={() => setHamburger(false)}
            className="text-white h-auto hover:text-blue-400 cursor-pointer w-full"
          >
            Home
          </a>
          <a
            href="#about"
             onClick={() => setHamburger(false)}
            className="text-white h-auto hover:text-blue-400 cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
             onClick={() => setHamburger(false)}
            className="text-white h-auto hover:text-blue-400 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
             onClick={() => setHamburger(false)}
            className="text-white h-auto hover:text-blue-400 cursor-pointer"
          >
            Contact
          </a>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
