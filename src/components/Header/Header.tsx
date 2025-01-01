"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import HireMe from "../MagicButton/HireMe";
import photo from "../../UI/img/arfin11.jpg";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
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
    <div className="mt-10 hero min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-between text-neutral-content relative z-10 px-6 gap-10">
        <div className="max-w-4xl text-center lg:text-left">
          <h1
            ref={headingRef}
            className="text-4xl lg:text-6xl font-extrabold mb-6 text-yellow-400 space-y-2"
          >
            {headingContent.split(" ").map((word, index) => (
              <span key={index} className="word inline-block mx-2">
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={textRef}
            className="text-2xl lg:text-3xl text-gray-300 font-medium mb-8"
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

          <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-6 w-full">
            <HireMe />
          </div>
        </div>

        <div className="relative w-72 h-72 lg:w-96 lg:h-96 flex-shrink-0">
          <div className="absolute -top-8 -right-8 w-full h-full rounded-full bg-yellow-400 opacity-60 z-[-1] transform scale-110 lg:scale-125"></div>
          <div className="absolute top-0 right-0 left-0 bottom-0 rounded-full overflow-hidden border-4 border-yellow-400">
            <Image
              src={photo}
              alt="Md Samsel Arfin"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
