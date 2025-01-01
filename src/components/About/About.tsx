"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import photo from "../../UI/img/arfin1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | HTMLLIElement)[]>([]);

  useEffect(() => {
    // Main section fade-in effect
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5, // Slower duration for smoother effect
          ease: "power3.out", // Smoother easing
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
        }
      );
    }

    // Image fade-in and slide effect
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -150 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    textRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, y: 150 }, // Starting position: from below
          {
            opacity: 1,
            y: 0, // Ending position: normal flow
            duration: 2.5, // Slower duration
            delay: index * 0.6, // Staggering delay
            ease: "power3.out", // Smoother easing
            scrollTrigger: {
              trigger: ref,
              start: "top 95%", // Trigger when the text enters the viewport
              end: "top 60%", // Continue effect until it's about to leave the viewport
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1
          ref={(el) => {
            if (el) textRefs.current.push(el);
          }}
          className="text-center text-4xl md:text-6xl font-bold text-[#FFD700] mb-8"
        >
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="flex justify-center">
            <Image
              src={photo}
              alt="Developer Avatar"
              className="rounded-full shadow-xl w-72 md:w-80 h-auto border-4 border-[#FFD700]"
              height="100"
              width="100"
            />
          </div>

          <div className="space-y-6">
            <p
              ref={(el) => {
                if (el) textRefs.current.push(el);
              }}
              className="text-lg text-[#E0E0E0] leading-relaxed"
            >
              Hello! I am a passionate MERN Full Stack Developer with a strong
              foundation in MERN stack technologies—MongoDB, Express.js, React,
              and Node.js. I hold a Bachelor’s degree in Computer Science &
              Engineering from Green University of Bangladesh. Along with my
              core expertise, I have advanced proficiency in modern technologies
              and tools, including Redux, RTK Query, Next.js, TypeScript, Ant
              Design, Shadcn, Tailwind CSS, PostgreSQL, and Postman. My skill
              set enables me to build scalable, high-performance applications
              with a focus on seamless user experiences and efficient backend
              solutions.
            </p>
            <p
              ref={(el) => {
                if (el) textRefs.current.push(el);
              }}
              className="text-lg text-[#E0E0E0] leading-relaxed"
            >
              Beyond coding, I am skilled in AutoCAD, Adobe Photoshop, WordPress
              development, and UI/UX design. I am always eager to learn new
              technologies and techniques.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <h2
            ref={(el) => {
              if (el) textRefs.current.push(el);
            }}
            className="text-3xl font-semibold text-[#FFD700] text-center"
          >
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3
                ref={(el) => {
                  if (el) textRefs.current.push(el);
                }}
                className="text-2xl font-semibold text-[#FFD700]"
              >
                MERN Full Stack Web Development
              </h3>
              <p className="text-lg text-[#D1D1D1]">
                I specialize in building responsive applications using the MERN
                stack and am advancing in TypeScript, Redux, Next.js, and more.
              </p>
              <p className="text-lg text-[#D1D1D1]">
                Key Skills: React, Node.js, MongoDB, Firebase, GraphQL, and AWS.
              </p>
            </div>
            <div>
              <h3
                ref={(el) => {
                  if (el) textRefs.current.push(el);
                }}
                className="text-2xl font-semibold text-[#FFD700]"
              >
                Tools & Technologies
              </h3>
              <p className="text-lg text-[#D1D1D1]">
                Proficient in tools like Figma, GitHub, VS Code, and Jira for
                efficient project management and collaboration.
              </p>
              <p className="text-lg text-[#D1D1D1]">
                Tools: Figma, Git, Netlify, LaTex, AutoCAD, Adobe Photoshop.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h2
            ref={(el) => {
              if (el) textRefs.current.push(el);
            }}
            className="text-3xl font-semibold text-[#FFD700] text-center"
          >
            Certifications & Courses
          </h2>
          <ul className="list-disc text-lg text-[#D1D1D1] pl-6">
            <li
              ref={(el) => {
                if (el) textRefs.current.push(el);
              }}
            >
              MERN Stack Development - Programing Hero
            </li>
            <li
              ref={(el) => {
                if (el) textRefs.current.push(el);
              }}
            >
              Software Quality Assurance - IEEE CSSBC
            </li>
            <li
              ref={(el) => {
                if (el) textRefs.current.push(el);
              }}
            >
              Data Science with Python
            </li>
            <li
              ref={(el) => {
                if (el) textRefs.current.push(el);
              }}
            >
              Microsoft Excel Certificate
            </li>
          </ul>
        </div>

        <div
          ref={(el) => {
            if (el) textRefs.current.push(el);
          }}
          className="mt-12 flex flex-col md:flex-row justify-between items-center bg-gray-900 p-8 rounded-lg shadow-xl"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#FFD700]">
              Let’s Collaborate!
            </h3>
            <p className="text-[#E0E0E0] mt-2">
              Ready to bring your ideas to life with cutting-edge technology?
            </p>
          </div>
          <a
            href="#contact"
            className="mt-4 md:mt-0 px-8 py-4 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#FFC107] transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
