import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

// İkonları kullanabilmek için react-icons'u kurmanız gerekebilir:
// npm install react-icons
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

// Register ScrollTrigger plugin (do this once in your app or where needed)
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headingRef = useRef(null);
  const titleRef = useRef(null);
  const emailButtonRef = useRef(null);
  const linkedinButtonRef = useRef(null);
  const footerNavRef = useRef(null); // Footer navigasyon referansı
  const copyrightRef = useRef(null); // Telif hakkı referansı

  const currentYear = new Date().getFullYear(); // Dinamik olarak güncel yılı al

  useEffect(() => {
    // --- ScrollTrigger Animations ---

    // Animation for "Get In Touch" and "Contact Me" headings
    ScrollTrigger.create({
      trigger: headingRef.current, // Use the heading as the trigger point
      start: "top 100%", // When the top of the trigger is 80% down from the top of the viewport
      once: true, // Animation plays only once
      onEnter: () => {
        gsap.fromTo(
          [headingRef.current, titleRef.current],
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 }
        );
      },
    });

    // Animation for Email and LinkedIn buttons
    ScrollTrigger.create({
      trigger: emailButtonRef.current, // Use the email button as the trigger point
      start: "top 100%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          [emailButtonRef.current, linkedinButtonRef.current],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.4, // Delay after trigger enters view
            stagger: 0.2,
          }
        );
      },
    });

    // Animation for Footer Navigation and Copyright
    ScrollTrigger.create({
      trigger: footerNavRef.current, // Use the footer nav as the trigger point
      start: "top 110%", // Start a bit earlier for the footer
      once: true,
      onEnter: () => {
        gsap.fromTo(
          [footerNavRef.current, copyrightRef.current],
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.8, // Delay after trigger enters view
            stagger: 0.2,
          }
        );
      },
    });

    // Cleanup function for ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 to-red-950 text-white pt-16">
      {/* "Get In Touch" başlığı */}
      <p
        ref={headingRef}
        className="text-xl md:text-2xl mb-2 text-orange-400 font-metal"
      >
        Get In Touch
      </p>

      {/* "Contact Me" ana başlığı */}
      <h2
        ref={titleRef}
        className="text-5xl md:text-7xl font-bold mb-12 text-red-600 font-creepster"
      >
        Contact Me
      </h2>

      {/* E-posta ve LinkedIn Düğmeleri/Bağlantıları */}
      <div className="flex flex-col md:flex-row gap-6 mb-20">
        {" "}
        {/* footer ile biraz boşluk bırakmak için mb-20 */}
        {/* E-posta Düğmesi */}
        <a
          ref={emailButtonRef}
          href="mailto:3131@gmail.com"
          className="flex items-center justify-center gap-3 px-8 py-4 bg-red-800 border-2 border-red-600 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[280px]" // Genişliği artırdım
        >
          <MdEmail className="text-3xl text-orange-200" />
          <span className="text-xl md:text-2xl text-orange-200 font-metal">
            3131@gmail.com
          </span>
        </a>
        {/* LinkedIn Düğmesi */}
        <a
          ref={linkedinButtonRef}
          href="https://www.linkedin.com/in/your-linkedin-profile" // **ÖNEMLİ: Kendi LinkedIn profil URL'nizle değiştirin**
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-8 py-4 bg-red-800 border-2 border-red-600 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 min-w-[280px]" // Genişliği artırdım
        >
          <FaLinkedin className="text-3xl text-orange-200" />
          <span className="text-xl md:text-2xl text-orange-200 font-metal">
            LinkedIn
          </span>
        </a>
      </div>

      {/* Ayırıcı Çizgi (İsteğe bağlı, estetik için) */}
      <hr className="w-1/2 border-t-2 border-red-700 mb-10" />

      {/* Footer Bölümü - Telif Hakkı ve Navigasyon */}
      <div className="flex flex-col md:flex-row w-full h-auto py-8 justify-center items-center from-gray-900 to-red-950 px-8 md:px-40 text-center text-white">
        {/* Footer Navigasyon Bağlantıları */}
        <div
          ref={footerNavRef}
          className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0 text-xl font-metal"
        ></div>

        {/* Telif Hakkı ve Haklar Saklıdır */}
        <div
          ref={copyrightRef}
          className="flex flex-col text-sm md:text-base gap-1 font-metal"
        >
          <div>
            &copy; {currentYear} Hamza. All Rights Reserved.{" "}
            {/* **ÖNEMLİ: "John Doe" yerine kendi adınızı yazın** */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
