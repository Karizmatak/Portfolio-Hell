import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const welcomeRef = useRef(null);
  const imageRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    // Animation for "Welcome" text and image
    gsap.fromTo(
      [imageRef.current, welcomeRef.current],
      { x: -100, opacity: 0 }, // Starting state: 100px to the left, invisible
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 } // Ending state: original position, visible
    );

    // Animation for navigation links
    gsap.fromTo(
      navLinksRef.current.children, // Target children of the navLinksRef div
      { x: 100, opacity: 0 }, // Starting state: 100px to the right, invisible
      { x: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1 } // Ending state: original position, visible
    );
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div className="w-full flex h-16 bg-red-800 justify-between items-center md:px-8 font-metal z-10 px-4">
      <div className="flex flex-row justify-center items-center md:gap-8 md:text-3xl text-orange-600 z-10 text-2xl gap-4">
        <img
          ref={imageRef} // Attach ref to the image
          className="flex md:w-16 md:h-16 items-center justify-center duration-200 rounded-full z-10 h-12 w-12"
          src="https://i.scdn.co/image/ab67616d0000b273f47bcccb8fc68caeb3b7552d"
          alt="Description of the image"
        />
        <span ref={welcomeRef}>Welcome.</span>{" "}
        {/* Wrap "Welcome." in a span and attach ref */}
      </div>
      <div
        className="flex md:gap-6 md:text-2xl text-orange-400 z-10 gap-2 text-xl"
        ref={navLinksRef}
      >
        {" "}
        {/* Attach ref to the div containing links */}
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#home">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
