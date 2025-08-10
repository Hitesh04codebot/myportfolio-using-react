import React from "react";
import github from "../assets/photos/github.png";

function Cards({ item }) {
  return (
    <div className=" bg-white rounded-lg transform hover:scale-105 transition duration-300 mt-2 h-auto">
      <img src={item.image} alt="" className="rounded-t-lg" />
      <div className="p-4">
        <div className="text-start text-3xl font-semibold">{item.title}</div>
        <div className="p-1 my-1 ">{item.description}</div>
        <button className=" flex items-center gap-2 px-5 py-2 bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
          <a href={item.github} target="_blank">
            <img src={github} alt="github icon" className='w-[25px] h-[25px]' />
          </a>
            <div>Github Link</div>
        </button>
      </div>
    </div>
  );
}

export default Cards;
