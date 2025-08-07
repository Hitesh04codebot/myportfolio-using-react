import React from "react";
import Myimage from "../assets/photos/myimage.png";

function Home() {
  return (
    <div className="flex flex-row max-sm:flex-col justify-center items-center">
      <div className="w-1/2 h-125 p-4 flex justify-center items-center bg-blue-950 max-sm:w-full max-sm:h-70">
        <div
          className="w-110 h-110 rounded-full bg-black border-[6px] border-white overflow-hidden max-sm:w-48 max-sm:h-48"
          style={{
            boxShadow: "0 0 15px white, 0 0 15px white, 0 0 15px white",
          }}
        >
          <img
            src={Myimage}
            alt="my image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="w-1/2  h-125 bg-blue-950 flex justify-center items-center montserrat-font max-sm:h-auto max-sm:w-full max-sm:p-4 max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div className="w-auto h-auto ">
          {/* content */}
          <p className="text-2xl font-bold text-white max-sm:text-2xl lg:text-center sm:text-center">
            Hi, I'm Hitesh Kandari
          </p>
          <p className="text-6xl font-extrabold text-white max-sm:text-4xl lg:text-center sm:text-center">
            Software Engineer &<br />
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
