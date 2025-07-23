import videoBg from "../assets/4K_2.mp4";

const About = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col md:justify-between items-center bg-gradient-to-b from-black to-purple-950 md:h-200 h-200 w-full px-20 z-10 overflow-hidden">
        <video
          src={videoBg}
          className="absolute inset-0 w-full object-cover z-0 h-200 top-245 opacity-50"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="flex flex-col gap-4">
          <div className="flex font-creepster text-6xl text-purple-400 z-10">
            Hi, I am Hamza
          </div>
          <div className="md:text-3xl flex font-metal md:w-200 text-gray-600 z-10 overflow-hidden text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore
            non nostrum ut culpa repudiandae , voluptatibus consectetur eligendi
            voluptates commodi sequi asperiores fuga eaque, eius veniam itaque
            eos at aliquid.
          </div>
        </div>
        <div className="flex">
          <img
            src="https://i.pinimg.com/564x/33/38/1d/33381df15578c60479abbc29f59004f0.jpg"
            className="h-100 w-150 rounded-4xl z-10 md:pt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
