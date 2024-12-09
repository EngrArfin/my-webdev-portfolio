"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { Project } from "@/types";
import project1 from "../../UI/project/Projectphoto1.jpg";
import project2 from "../../UI/project/Projectphoto2.jpg";
import project3 from "../../UI/project/Projectphoto3.jpg";
import project4 from "../../UI/project/Projectphoto4.jpg";
import project5 from "../../UI/project/Projectphoto5.jpg";
import project6 from "../../UI/project/Projectphoto6.jpg";

const projects: Project[] = [
  {
    id: 1,
    title: "E Com Zone",
    image: project1,
    type: "Personal Project",
    projectType: "E Com Zone: E-Commerce Platform",
    technologies:
      "Next.js · TypeScript, Tailwind CSS, Express.js · MongoDB · NextAuth · axios js · ESLint , DaisyUI, JSON Web Token (JWT)",
    description:
      "E Com Zone is a modern, responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS. It integrates secure user authentication, dynamic product management, and a streamlined shopping experience.",
    liveLink: "https://e-commerce-web-nextjs-client-app.vercel.app/",
    gitClient: "https://github.com/EngrArfin/e-commerce-web-nextjs-client-app",
    gitServer: "https://github.com/example-server",
  },
  {
    id: 2,
    title: "Meeting Room Book",
    image: project2,
    type: "Personal Project",
    projectType: "Meeting Room Booking System",
    technologies:
      "Frontend: React, Redux, Axios, Tailwind CSS, jwt-decode, Ant Design, react-dom Backend: TypeScript, Node, Express, MongoDB, Mongoose, Zod.",
    description:
      "Meeting rooms, built with React, Redux, and Node.js. It features secure authentication via NextAuth, dynamic room availability, and booking management. The backend uses Express and MongoDB for data handling, with Axios for seamless API integration.",
    liveLink: "https://meeting-room-booking-systrm-client-app.vercel.app/",
    gitClient:
      "https://github.com/EngrArfin/meeting-room-booking-systrm-client-app",
    gitServer: "https://github.com/EngrArfin/meeting-room-booking-system",
  },
  {
    id: 3,
    title: "SAR Shop ",
    image: project3,
    type: "Personal Project",
    projectType: "SAR Shop (E-Commerc Website)",
    technologies:
      "HTML, CSS, Tailwind CSS, Express.js, MongoDB, Firebase, axios js, JWT, stripe.js, DaisyUI",
    description:
      "SAR Shop Frontend is a responsive e-commerce application for clothing and electronics. Built with React, HTML, CSS, Tailwind CSS, and DaisyUI, it offers a sleek design, Firebase authentication, and seamless API integration via Axios.",
    liveLink: "https://job-task-6e505.web.app",
    gitClient: "https://github.com/EngrArfin/job-task-shop-client",
    gitServer: "https://github.com/EngrArfin/job-task-shop-server",
  },
  {
    id: 4,
    title: "SA Food Restaurant",
    image: project4,
    type: "Personal Project",
    projectType: "SA Food Restaurant Website",
    technologies:
      "HTML · CSS · Tailwind CSS · React · Express.js · MongoDB · Firebase · JWT · Bootstrap · stripe.js",
    description:
      "SA Food Restaurant is project leverages technologies such as HTML, CSS, Tailwind CSS, DaisyUI, and React to create an elegant and responsive user interface. The back-end integration with Express.js and MongoDB ensures smooth data handling, while Firebase enhances authentication and real-time features. The application utilizes Axios.js for efficient API communication, JWT for secure user sessions, and Stripe.js for seamless payment processing.",
    liveLink: " https://sa-food-reasturent.netlify.app/",
    gitClient: "https://github.com/EngrArfin/bistro-boss-client",
    gitServer: "https://github.com/EngrArfin/bistro-boss-server",
  },
  {
    id: 5,
    title: "Health Complex",
    image: project5,
    type: "Hospital Project",
    projectType: "Health Complex -Hospital-Magura Website",
    technologies:
      "HTML5, CSS, Tailwind CSS, JavaScript,  Express.js, Firebase, MongoDB, Reactjs, JWT",
    description:
      "Hospital's range of medical services includes general medicine, surgery, emergency services and specialized care in various fields and aims to provide digital services.",
    liveLink: "https://mohammadpur-hospital-magura.netlify.app/",
    gitClient: "https://github.com/EngrArfin/doctor-house-client",
    gitServer: "https://github.com/EngrArfin/doctor-house-server",
  },
  {
    id: 6,
    title: "AI AFFI BOT",
    image: project6,
    type: "Personal Project",
    projectType: "Ai Affi Bot (Make Money Online)",
    technologies: "React, Tailwind CSS, Firebase",
    description:
      "Job Hunter is a platform that helps users search for their dream job by filtering through various categories.",
    liveLink: "https://aiaffibot.xyz",
    gitClient: "https://github.com/example-client2",
    gitServer: "https://github.com/example-server2",
  },
];

const PortfolioData = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && document.getElementById("__next")) {
      Modal.setAppElement("#__next");
    }
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="mt-10 m-8 flex flex-col md:flex-row justify-between items-center bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="portfolio-container bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white p-6">
        <h1 className="text-4xl text-yellow-400 font-bold text-center mb-8">
          My Portfolio
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white shadow-md rounded-md overflow-hidden cursor-pointer hover:border-4 hover:border-yellow-400 hover:scale-105 transform transition duration-300 relative"
              onClick={() => openModal(project)}
            >
              <div className="relative group">
                {/* Image Container */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <h3 className="text-2xl font-bold text-yellow-400 text-center">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Project Details"
            style={{
              overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
              content: {
                maxWidth: "700px",
                margin: "auto",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#000000",
                color: "#fff",
              },
            }}
          >
            <h2 className="text-2xl font-bold text-yellow-500 text-center mb-4">
              {selectedProject.projectType}
            </h2>
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              width={700}
              height={400}
              className="rounded-md mb-4"
            />
            <p className="mb-2">
              <strong>Technologies:</strong> {selectedProject.technologies}
            </p>
            <p>{selectedProject.description}</p>
            <div className="mt-4 space-x-4">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                🔗 Live Link
              </a>

              <a
                href={selectedProject.gitClient}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                💻 Git Client
              </a>
              <a
                href={selectedProject.gitServer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                💻 Git Server
              </a>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default PortfolioData;
