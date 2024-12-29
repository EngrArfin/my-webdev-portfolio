"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HireMe from "../MagicButton/HireMe";
import photo from "../../UI/img/arfin2.jpeg";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Animate the subheading text
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    // Animate the heading text
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll(".word");
      gsap.fromTo(
        words,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const textContent = "MERN Full Stack Developer";

  const headingContent = "Hello, I’m Md Samsel Arfin";

  return (
    <div className="hero min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={photo || "/photo.png"}
          alt="Md Samsel Arfin"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-10 filter blur-sm"
        />
      </div>

      {/* Content */}
      <div className="hero-content flex flex-col items-center lg:items-start text-neutral-content relative z-10 px-6">
        <div className="max-w-4xl text-center lg:text-left">
          {/* Animated Heading */}
          <h1
            ref={headingRef}
            className="text-4xl lg:text-8xl font-extrabold mb-6 text-yellow-400 space-y-2"
          >
            {headingContent.split(" ").map((word, index) => (
              <span key={index} className="word inline-block mx-2">
                {word}
              </span>
            ))}
          </h1>

          {/* Animated Subheading */}
          <p
            ref={textRef}
            className="text-2xl lg:text-4xl text-gray-300 font-medium mb-8"
          >
            {textContent.split("").map((char, index) => (
              <span
                key={index}
                className={`letter ${char.trim() === "" ? "whitespace" : ""}`}
              >
                {char}
              </span>
            ))}
          </p>

          {/* Button */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-6 w-full">
            <HireMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/* 
import Image from "next/image";
import HireMe from "../MagicButton/HireMe";
import photo from "../../UI/img/arfin2.jpeg";

const Header: React.FC = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={photo || "/photo.png"}
          alt="Md Samsel Arfin"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }} // Updated for Next.js 13
          className="opacity-10 filter blur-sm"
        />
      </div>

      <div className="hero-content flex flex-col items-center lg:items-start text-neutral-content relative z-10 px-6">
        <div className="max-w-4xl text-center lg:text-left">
          <h1 className="text-5xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 animate-slide-in-left">
            Hello, I’m <span className="block">Md Samsel Arfin</span>
          </h1>

          <p className="text-2xl lg:text-4xl text-gray-300 font-medium mb-8 animate-slide-in-right delay-500">
            MERN Full Stack Developer, <br /> Passionate About Creating Stunning
            Web Applications
          </p>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-6 w-full">
            <HireMe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
 */
