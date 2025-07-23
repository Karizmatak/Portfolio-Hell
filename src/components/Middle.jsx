import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScaryDemonImage from "../components/Scary-Demon-Transparent-File.png";
import videoBg from "../assets/video.mp4";

const Middle = () => {
  const imageRef = useRef(null);
  const divRef = useRef(null);
  const [showFrontend, setShowFrontend] = useState(false); // State to control Frontend skills visibility
  const [showBackend, setShowBackend] = useState(false); // State to control Backend skills visibility
  const frontendSkillsRef = useRef(null); // New ref for frontend skills
  const backendSkillsRef = useRef(null); // New ref for backend skills

  useEffect(() => {
    gsap.fromTo(
      [imageRef.current],
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      [divRef.current],
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, []);
  useEffect(() => {
    if (showFrontend && frontendSkillsRef.current) {
      gsap.from(frontendSkillsRef.current.children, {
        x: -50, // Start 50px to the left
        opacity: 0, // Start invisible
        duration: 0.5, // Animation duration
        ease: "power2.out", // Easing function
        stagger: 0.1, // Stagger the animation of each list item
      });
    }
  }, [showFrontend]);

  // Effect for Backend skills animation
  useEffect(() => {
    if (showBackend && backendSkillsRef.current) {
      gsap.from(backendSkillsRef.current.children, {
        x: -50, // Start 50px to the left
        opacity: 0, // Start invisible
        duration: 0.5, // Animation duration
        ease: "power2.out", // Easing function
        stagger: 0.1, // Stagger the animation of each list item
      });
    }
  }, [showBackend]);

  const handleFrontendClick = () => {
    setShowFrontend(!showFrontend); // Toggle Frontend visibility
    setShowBackend(false); // Hide Backend if Frontend is shown
  };

  const handleBackendClick = () => {
    setShowBackend(!showBackend); // Toggle Backend visibility
    setShowFrontend(false); // Hide Frontend if Backend is shown
  };

  return (
    <div className="flex md:justify-between w-full h-full min-h-screen overflow-hidden md:flex-row flex-col justify-center items-center">
      <video
        className="absolute inset-0 w-full md:h-245 object-cover z-0 opacity-90 h-246" // opasiteyi ve blur'u ayarlayabilirsin
        src={videoBg} // public klasöründeyse doğrudan yolunu ver
        autoPlay
        loop
        muted
        playsInline // iOS cihazlarda otomatik oynatma için
      ></video>
      <div className="flex justify-center items-center w-1/2 p-4 relative">
        <img
          ref={imageRef}
          className="md:w-full md:h-auto rounded-2xl max-w-2xl object-cover
                 opacity-20             
                 transition-all duration-300 ease-in-out w-100 h-100 absolute top-10 md:relative md:top-0"
          src="https://images.ctfassets.net/rporu91m20dc/7dHtxlgFeEa0UAes80Ss0i/d6ddd7957c71d4bd76fefd62d4e9cdfe/doom-mobile-hero.jpg?q=100"
          alt="Main Hero Image"
        />
      </div>
      <div
        ref={divRef}
        className="w-200 h-200 flex items-center text-4xl font-bold flex-col justify-center pt-100 md:pt-0"
      >
        <img
          src={ScaryDemonImage}
          alt="Demon Character"
          className="absolute -right-75 z-0 w-200 opacity-50"
        />
        <div className="flex text-orange-200 font-metal z-10 md:text-4xl text-xl">
          The Time Has Come!
        </div>
        <div className="flex text-red-950 font-metal z-10 md:text-4xl text-xl">
          Welcome to The Hell!
        </div>
        <div className="flex text-red-800 font-metal z-10 md:text-4xl text-xl justify-center items-center">
          We are giving to you The best work we have done so far!
        </div>
        <div className="flex font-creepster text-red-900 z-10 md:text-4xl text-xl">
          Check Our Skills We Have!
        </div>
        <div className="flex flex-row gap-6 z-10">
          {/* Frontend button */}
          <div
            className="underline decoration-orange-700 text-yellow-400 cursor-pointer z-10"
            onClick={handleFrontendClick} // Add onClick handler
          >
            Frontend
          </div>
          {/* Backend button */}
          <div
            className="underline decoration-orange-700 text-yellow-400 cursor-pointer z-10"
            onClick={handleBackendClick} // Add onClick handler
          >
            Backend
          </div>
        </div>

        {/* Frontend Skills Section */}
        {showFrontend && (
          <div
            className="mt-4 text-white text-xl text-yellow-500 z-10"
            ref={frontendSkillsRef}
          >
            <h3>Frontend Skills:</h3>
            <ul className="list-disc list-inside">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        )}

        {/* Backend Skills Section */}
        {showBackend && (
          <div
            className="mt-4 text-white text-xl text-yellow-500 z-10"
            ref={backendSkillsRef}
          >
            <h3>Backend Skills:</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Python (Django/Flask)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Middle;
