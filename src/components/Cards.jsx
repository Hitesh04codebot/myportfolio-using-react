import React from "react";
import github from "../assets/photos/github.png";
import { motion } from "framer-motion";

function Cards({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className=" bg-white rounded-lg transform hover:scale-102 transition duration-300 mt-2 h-auto border-2 border-black"
    >
      <img src={item.image} alt="" className="rounded-t-lg" />
      <div className="p-4">
        <div className="text-start text-3xl font-semibold">{item.title}</div>
        <div className="p-1 my-1 ">{item.description}</div>
        <a
          href={item.github}
          target="_blank"
          className="flex items-center w-fit gap-2 px-5 py-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300"
        >
          <img src={github} alt="github icon" className="w-[25px] h-[25px]" />
          <span>Github Link</span>
        </a>
      </div>
    </motion.div>
  );
}

export default Cards;
