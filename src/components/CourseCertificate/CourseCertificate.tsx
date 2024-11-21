"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import certificate1 from "../../UI/img/ProgramingHero.jpg";
import certificate2 from "../../UI/img/SoftwareTest.jpg";

const CourseCertificate = () => {
  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);

  useEffect(() => {
    setShowProject1(true);
    setTimeout(() => setShowProject2(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-900 to-black text-white flex flex-col justify-center items-center py-16">
      <div className="container mx-auto px-4 space-y-16">
        <h1 className="text-4xl font-bold mb-12 text-center animate__animated animate__fadeIn animate__delay-1s">
          Certificate & Achivement
        </h1>

        <div
          className={`flex flex-col md:flex-row items-center gap-8 transition-all transform ${
            showProject1
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Programming Hero</h2>
            <p className="text-sm text-gray-300 mb-4">
              I have started a new journey here in Programming Hero Level
              course. To become a MERN full stack developer.
              <br />
              Skill: TypeScript, Mongoose, Redux, Next.Js, GraphQL, Post-greSQL,
              AWS, Docker, Unit Testing
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="bg-purple-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={certificate1}
                alt="Programming Hero"
                height={400} // Adjusted height for uniform size
                width={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className={`flex flex-col md:flex-row-reverse items-center gap-8 transition-all transform ${
            showProject2
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">
              Software Quality Assurance and Test Automation
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="bg-purple-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={certificate2}
                alt="Software Test Automation"
                height={400}
                width={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;

/* 
import Image from "next/image";

import certificate1 from "../../UI/img/ProgramingHero.jpg";
import certificate2 from "../../UI/img/SoftwareTest.jpg";

const CourseCertificate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-900 to-black text-white flex flex-col justify-center items-center py-16">
      <div className="container mx-auto px-4 space-y-16">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Featured Projects
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">Programming Hero</h2>
            <p className="text-sm text-gray-300 mb-4">
              I have started a new journey here in Programming Hero Level
              course. To become a MERN full stack developer.
              <br />
              Skill: TypeScript, Mongoose, Redux, Next.Js, GraphQL, Post-greSQL,
              AWS, Docker, Unit Testing
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="bg-purple-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={certificate1}
                alt="Programming Hero"
                height="400" 
                width="500"
                className="object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">
              Software Quality Assurance and Test Automation
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="bg-purple-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={certificate2}
                alt="Software Test Automation"
                height="400" 
                width="500" 
                className="object-cover w-full h-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCertificate;
 */
