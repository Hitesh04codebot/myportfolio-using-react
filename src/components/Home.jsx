
import Myimage from "../assets/photos/myimage.png";

function Home() {
  return (
    <div className="flex flex-row max-sm:flex-col justify-center items-center cursor-pointer " id='home'>
      <div className="w-1/2 h-125 p-4 flex justify-center items-center bg-black max-sm:w-full max-sm:h-70">
        <div
          className="w-120 h-120 rounded-full bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 border-[6px] border-white overflow-hidden max-sm:w-48 max-sm:h-48 hover:scale-101 transition-transform duration-300"
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

      <div className="w-1/2  h-125 bg-black flex justify-center items-center montserrat-font max-sm:h-auto max-sm:w-full max-sm:p-4 max-lg:flex-col max-lg:justify-center max-lg:items-center">
        <div className="w-auto h-auto ">
          {/* content */}
          <p className="text-2xl text-center font-bold text-white max-sm:text-2xl  drop-shadow-[0_0_2px_white]">
            Hi, I'm Hitesh Kandari
          </p>
          <p className="text-6xl text-center font-extrabold text-white max-sm:text-4xl  drop-shadow-[0_0_2px_white] max-md:text-3xl">
            Software Engineer &<br />
            Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
